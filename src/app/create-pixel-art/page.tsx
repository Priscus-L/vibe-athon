"use client"

import { useState, useRef } from "react"
import { useAccount, useChainId, useWriteContract, useReadContract, useWaitForTransactionReceipt } from "wagmi"
import { parseEther, formatEther } from "viem"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { chainsToContracts, pixelArtNftAbi } from "@/constants"
import PixelArtEditor, { PixelArtEditorHandle } from "@/components/PixelArtEditor"

export default function CreatePixelArtPage() {
    const { address, isConnected } = useAccount()
    const chainId = useChainId()
    const contractAddress = (chainsToContracts[chainId]?.pixelArtNft as `0x${string}`) || "0x"
    
    const [editionPrice, setEditionPrice] = useState("")
    const [maxSupply, setMaxSupply] = useState("")
    const editorRef = useRef<PixelArtEditorHandle>(null)

    // Get platform fee
    const { data: platformFee } = useReadContract({
        abi: pixelArtNftAbi,
        address: contractAddress,
        functionName: "platformFee",
        query: {
            enabled: !!contractAddress && contractAddress !== "0x",
        },
    })

    // Mint new NFT
    const {
        data: mintHash,
        isPending: isMintPending,
        writeContract: mintNew,
        error: mintError,
    } = useWriteContract()

    const { isSuccess: isMintSuccess, isLoading: isMintConfirming } =
        useWaitForTransactionReceipt({
            hash: mintHash,
        })

    const handleMint = async () => {
        if (!editionPrice || !maxSupply || !platformFee || !editorRef.current) return

        try {
            const pixelData = editorRef.current.getPixelData()
            const priceWei = parseEther(editionPrice)

            await mintNew({
                abi: pixelArtNftAbi,
                address: contractAddress,
                functionName: "mintNew",
                args: [
                    `0x${Array.from(pixelData)
                        .map((b) => b.toString(16).padStart(2, "0"))
                        .join("")}` as `0x${string}`,
                    priceWei,
                    BigInt(maxSupply),
                ],
                value: platformFee as bigint,
            })
        } catch (error) {
            console.error("Error minting:", error)
        }
    }

    if (!isConnected) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                    <h1 className="text-3xl font-bold">Create Pixel Art NFT</h1>
                    <p className="text-gray-600">Please connect your wallet to continue</p>
                    <ConnectButton />
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Create New Pixel Art NFT</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Pixel Art Editor */}
                <div>
                    <PixelArtEditor ref={editorRef} />
                </div>

                {/* Mint Form */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">Mint Details</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Edition Price (ETH)
                            </label>
                            <input
                                type="text"
                                value={editionPrice}
                                onChange={(e) => setEditionPrice(e.target.value)}
                                placeholder="0.01"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Price others will pay to mint an edition of your NFT
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Max Supply
                            </label>
                            <input
                                type="number"
                                value={maxSupply}
                                onChange={(e) => setMaxSupply(e.target.value)}
                                placeholder="100"
                                min="1"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Maximum number of editions that can be minted (0 for unlimited)
                            </p>
                        </div>

                        {platformFee && (
                            <div className="bg-blue-50 p-4 rounded-md">
                                <p className="text-sm">
                                    <strong>Platform Fee:</strong> {formatEther(platformFee as bigint)} ETH
                                </p>
                            </div>
                        )}

                        <div className="bg-gray-50 p-4 rounded-md">
                            <p className="text-sm">
                                <strong>Total Required:</strong>{" "}
                                {platformFee && editionPrice
                                    ? `${formatEther((parseEther(editionPrice || "0") + (platformFee as bigint)) as bigint)} ETH`
                                    : "0 ETH"}
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                                Platform fee is required to create a new NFT
                            </p>
                        </div>

                        {mintError && (
                            <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-md">
                                <p className="text-sm">
                                    Error: {mintError.message || "Transaction failed"}
                                </p>
                            </div>
                        )}

                        {isMintSuccess && (
                            <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md">
                                <p className="text-sm font-medium">NFT created successfully!</p>
                                {mintHash && (
                                    <p className="text-xs mt-1">
                                        Transaction: {mintHash.slice(0, 10)}...
                                    </p>
                                )}
                            </div>
                        )}

                        <button
                            onClick={handleMint}
                            disabled={
                                isMintPending ||
                                isMintConfirming ||
                                !editionPrice ||
                                !maxSupply
                            }
                            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
                        >
                            {isMintPending || isMintConfirming
                                ? "Minting..."
                                : "Create NFT"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

