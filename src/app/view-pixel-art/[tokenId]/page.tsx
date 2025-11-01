"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { useChainId, useReadContract } from "wagmi"
import { chainsToContracts, pixelArtNftAbi } from "@/constants"
import { formatEther } from "viem"
import Link from "next/link"

export default function ViewPixelArtDetailPage() {
    const { tokenId } = useParams() as { tokenId: string }
    const chainId = useChainId()
    const contractAddress = (chainsToContracts[chainId]?.pixelArtNft as `0x${string}`) || "0x0ABC3a0926870a6bD1eEE59fdC59839Cd9C00ED0"

    const [svgImage, setSvgImage] = useState<string | null>(null)
    const [metadata, setMetadata] = useState<any>(null)

    // Fetch URI from contract
    const { data: uriData, isLoading: isUriLoading } = useReadContract({
        abi: pixelArtNftAbi,
        address: contractAddress,
        functionName: "uri",
        args: [BigInt(tokenId)],
    })

    // Fetch NFT details
    const { data: editionPrice } = useReadContract({
        abi: pixelArtNftAbi,
        address: contractAddress,
        functionName: "editionPrices",
        args: [BigInt(tokenId)],
    })

    const { data: creator } = useReadContract({
        abi: pixelArtNftAbi,
        address: contractAddress,
        functionName: "creators",
        args: [BigInt(tokenId)],
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

    // Parse URI and extract SVG
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

    return (
        <div className="container mx-auto px-4 py-8">
            <Link
                href="/view-pixel-art"
                className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
            >
                ← Back to Gallery
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                {/* NFT Image */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">
                        {metadata?.name || `Pixel Art #${tokenId}`}
                    </h2>
                    <div className="aspect-square relative bg-gray-100 flex items-center justify-center border-2 border-gray-300 rounded-lg">
                        {isUriLoading ? (
                            <span className="animate-pulse">Loading...</span>
                        ) : svgImage ? (
                            <div
                                className="w-full h-full flex items-center justify-center overflow-hidden"
                                style={{ imageRendering: "pixelated" }}
                            >
                                <div
                                    dangerouslySetInnerHTML={{ 
                                        __html: svgImage
                                            .replace(
                                                '<svg',
                                                '<svg style="image-rendering: pixelated; image-rendering: -moz-crisp-edges; image-rendering: crisp-edges; width: 100%; height: 100%; display: block;" preserveAspectRatio="xMidYMid meet"'
                                            )
                                    }}
                                />
                            </div>
                        ) : (
                            <span className="text-gray-400">No image available</span>
                        )}
                    </div>
                </div>

                {/* NFT Details */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4">Details</h3>
                    <div className="space-y-4">
                        {metadata?.description && (
                            <div>
                                <h4 className="font-medium text-gray-700">Description</h4>
                                <p className="text-gray-600">{metadata.description}</p>
                            </div>
                        )}

                        <div>
                            <h4 className="font-medium text-gray-700">Token ID</h4>
                            <p className="text-gray-600">#{tokenId}</p>
                        </div>

                        {creator && (
                            <div>
                                <h4 className="font-medium text-gray-700">Creator</h4>
                                <p className="text-gray-600 font-mono">{creator.toString()}</p>
                            </div>
                        )}

                        {editionPrice !== undefined && (
                            <div>
                                <h4 className="font-medium text-gray-700">Edition Price</h4>
                                <p className="text-gray-600">
                                    {editionPrice === BigInt(0)
                                        ? "Not for sale"
                                        : `${formatEther(editionPrice as bigint)} ETH`}
                                </p>
                            </div>
                        )}

                        {totalSupply !== undefined && maxSupply !== undefined && (
                            <div>
                                <h4 className="font-medium text-gray-700">Supply</h4>
                                <p className="text-gray-600">
                                    {totalSupply.toString()} minted
                                    {maxSupply !== BigInt(0) && ` / ${maxSupply.toString()} max`}
                                    {maxSupply === BigInt(0) && " (Unlimited)"}
                                </p>
                            </div>
                        )}

                        {editionPrice !== undefined && editionPrice !== BigInt(0) && (
                            <Link
                                href={`/mint-edition/${tokenId}`}
                                className="block w-full text-center py-3 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
                            >
                                Mint Edition
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

