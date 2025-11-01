"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { useAccount, useChainId, useWriteContract, useReadContract, useWaitForTransactionReceipt } from "wagmi"
import { parseEther, formatEther } from "viem"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { chainsToContracts, pixelArtNftAbi } from "@/constants"

export default function MintEditionPage() {
    const router = useRouter()
    const { tokenId } = useParams() as { tokenId: string }
    const { address, isConnected } = useAccount()
    const chainId = useChainId()
    const contractAddress = (chainsToContracts[chainId]?.pixelArtNft as `0x${string}`) || "0x0ABC3a0926870a6bD1eEE59fdC59839Cd9C00ED0"

    const [svgImage, setSvgImage] = useState<string | null>(null)
    const [metadata, setMetadata] = useState<any>(null)

    // Fetch URI and NFT details
    const { data: uriData, isLoading: isUriLoading } = useReadContract({
        abi: pixelArtNftAbi,
        address: contractAddress,
        functionName: "uri",
        args: [BigInt(tokenId)],
    })

    const { data: editionPrice } = useReadContract({
        abi: pixelArtNftAbi,
        address: contractAddress,
        functionName: "editionPrices",
        args: [BigInt(tokenId)],
    })

    const { data: platformFee } = useReadContract({
        abi: pixelArtNftAbi,
        address: contractAddress,
        functionName: "platformFee",
    })

    const { data: totalSupply } = useReadContract({
        abi: pixelArtNftAbi,
        address: contractAddress,
        functionName: "totalSupplies",
        args: [BigInt(tokenId)],
    })

    const { data: maxSupply } = useReadContract({
        abi: pixelArtNftAbi,
        address: contractAddress,
        functionName: "maxSupplies",
        args: [BigInt(tokenId)],
    })

    // Parse URI
    useEffect(() => {
        if (uriData && !isUriLoading) {
            try {
                const uri = uriData as string
                const jsonPart = uri.replace("data:application/json;utf8,", "")
                const parsed = JSON.parse(jsonPart)
                setMetadata(parsed)

                if (parsed.image) {
                    const svgPart = parsed.image.replace("data:image/svg+xml;utf8,", "")
                    setSvgImage(svgPart)
                }
            } catch (error) {
                console.error("Error parsing URI:", error)
            }
        }
    }, [uriData, isUriLoading])

    // Mint edition
    const {
        data: mintHash,
        isPending: isMintPending,
        writeContract: mintEdition,
        error: mintError,
    } = useWriteContract()

    const { isSuccess: isMintSuccess, isLoading: isMintConfirming } =
        useWaitForTransactionReceipt({
            hash: mintHash,
        })

    const handleMint = async () => {
        if (!editionPrice || !platformFee) return

        try {
            const totalValue = (editionPrice as bigint) + (platformFee as bigint)

            await mintEdition({
                abi: pixelArtNftAbi,
                address: contractAddress,
                functionName: "mintEdition",
                args: [BigInt(tokenId)],
                value: totalValue,
            })
        } catch (error) {
            console.error("Error minting edition:", error)
        }
    }

    const canMint =
        editionPrice !== undefined &&
        editionPrice !== BigInt(0) &&
        (maxSupply === BigInt(0) || (totalSupply && maxSupply && totalSupply < maxSupply))

    if (!isConnected) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                    <h1 className="text-3xl font-bold">Mint Edition</h1>
                    <p className="text-gray-600">Please connect your wallet to continue</p>
                    <ConnectButton />
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <button
                onClick={() => router.back()}
                className="text-blue-600 hover:text-blue-800 mb-4"
            >
                ← Back
            </button>

            <h1 className="text-3xl font-bold mb-6">Mint Edition</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* NFT Preview */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">
                        {metadata?.name || `Pixel Art #${tokenId}`}
                    </h2>
                    <div className="aspect-square relative bg-gray-100 flex items-center justify-center border-2 border-gray-300 rounded-lg">
                        {isUriLoading ? (
                            <span className="animate-pulse">Loading...</span>
                        ) : svgImage ? (
                            <div
                                className="w-full h-full flex items-center justify-center"
                                dangerouslySetInnerHTML={{ __html: svgImage }}
                                style={{ imageRendering: "pixelated" }}
                            />
                        ) : (
                            <span className="text-gray-400">No image available</span>
                        )}
                    </div>
                </div>

                {/* Mint Details */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4">Mint Details</h3>

                    {!canMint ? (
                        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-md">
                            <p className="text-sm">
                                {editionPrice === BigInt(0)
                                    ? "This NFT is not available for minting."
                                    : maxSupply !== BigInt(0) && totalSupply && maxSupply && totalSupply >= maxSupply
                                    ? "Maximum supply reached. No more editions can be minted."
                                    : "Unable to mint this edition."}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {editionPrice && (
                                <div className="bg-blue-50 p-4 rounded-md">
                                    <p className="text-sm">
                                        <strong>Edition Price:</strong> {formatEther(editionPrice as bigint)} ETH
                                    </p>
                                </div>
                            )}

                            {platformFee && (
                                <div className="bg-gray-50 p-4 rounded-md">
                                    <p className="text-sm">
                                        <strong>Platform Fee:</strong> {formatEther(platformFee as bigint)} ETH
                                    </p>
                                </div>
                            )}

                            {editionPrice && platformFee && (
                                <div className="bg-green-50 p-4 rounded-md">
                                    <p className="text-sm font-medium">
                                        <strong>Total Required:</strong>{" "}
                                        {formatEther((editionPrice as bigint) + (platformFee as bigint))} ETH
                                    </p>
                                </div>
                            )}

                            {totalSupply !== undefined && maxSupply !== undefined && (
                                <div className="text-sm text-gray-600">
                                    <p>
                                        <strong>Current Supply:</strong> {totalSupply.toString()}
                                    </p>
                                    <p>
                                        <strong>Max Supply:</strong>{" "}
                                        {maxSupply === BigInt(0) ? "Unlimited" : maxSupply.toString()}
                                    </p>
                                </div>
                            )}

                            {mintError && (
                                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-md">
                                    <p className="text-sm">
                                        Error: {mintError.message || "Transaction failed"}
                                    </p>
                                </div>
                            )}

                            {isMintSuccess && (
                                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md">
                                    <p className="text-sm font-medium">Edition minted successfully!</p>
                                    {mintHash && (
                                        <p className="text-xs mt-1">
                                            Transaction: {mintHash.slice(0, 10)}...
                                        </p>
                                    )}
                                </div>
                            )}

                            <button
                                onClick={handleMint}
                                disabled={isMintPending || isMintConfirming || !canMint}
                                className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
                            >
                                {isMintPending || isMintConfirming ? "Minting..." : "Mint Edition"}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

