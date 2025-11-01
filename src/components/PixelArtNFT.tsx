"use client"

import { useState, useEffect } from "react"
import { useReadContract } from "wagmi"
import { chainsToContracts, pixelArtNftAbi } from "@/constants"
import { formatEther } from "viem"
import Link from "next/link"

interface PixelArtNFTProps {
    tokenId: string
    contractAddress?: string
}

export default function PixelArtNFT({ tokenId, contractAddress: propContractAddress }: PixelArtNFTProps) {
    const [svgImage, setSvgImage] = useState<string | null>(null)
    const [metadata, setMetadata] = useState<any>(null)

    // Get contract address
    const contractAddress = propContractAddress || "0x0ABC3a0926870a6bD1eEE59fdC59839Cd9C00ED0"

    // Fetch URI from contract
    const { data: uriData, isLoading: isUriLoading } = useReadContract({
        abi: pixelArtNftAbi,
        address: contractAddress as `0x${string}`,
        functionName: "uri",
        args: [BigInt(tokenId)],
        query: {
            enabled: !!tokenId && !!contractAddress && contractAddress !== "0x",
        },
    })

    // Fetch edition price, creator, and supply info
    const { data: editionPrice } = useReadContract({
        abi: pixelArtNftAbi,
        address: contractAddress as `0x${string}`,
        functionName: "editionPrices",
        args: [BigInt(tokenId)],
    })

    const { data: creator } = useReadContract({
        abi: pixelArtNftAbi,
        address: contractAddress as `0x${string}`,
        functionName: "creators",
        args: [BigInt(tokenId)],
    })

    const { data: totalSupply } = useReadContract({
        abi: pixelArtNftAbi,
        address: contractAddress as `0x${string}`,
        functionName: "totalSupplies",
        args: [BigInt(tokenId)],
    })

    const { data: maxSupply } = useReadContract({
        abi: pixelArtNftAbi,
        address: contractAddress as `0x${string}`,
        functionName: "maxSupplies",
        args: [BigInt(tokenId)],
    })

    // Parse URI and extract SVG
    useEffect(() => {
        if (uriData && !isUriLoading) {
            try {
                // URI format: "data:application/json;utf8,{...json...}"
                const uri = uriData as string
                const jsonPart = uri.replace("data:application/json;utf8,", "")
                const parsed = JSON.parse(jsonPart)
                setMetadata(parsed)

                // Extract SVG from image field
                // Format: "data:image/svg+xml;utf8,<svg>...</svg>"
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
        <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
            <div className="aspect-square relative bg-gray-100 flex items-center justify-center">
                {isUriLoading ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="animate-pulse">Loading...</span>
                    </div>
                ) : svgImage ? (
                    <div
                        className="w-full h-full flex items-center justify-center overflow-hidden"
                        style={{ imageRendering: "pixelated" }}
                    >
                        <div
                            className="w-full h-full"
                            dangerouslySetInnerHTML={{ 
                                __html: svgImage
                                    .replace(/width=['"]\d+['"]/, 'width="100%"')
                                    .replace(/height=['"]\d+['"]/, 'height="100%"')
                                    .replace(
                                        '<svg',
                                        '<svg style="image-rendering: pixelated; image-rendering: -moz-crisp-edges; image-rendering: crisp-edges; display: block;" preserveAspectRatio="xMidYMid meet"'
                                    )
                            }}
                        />
                    </div>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-400">No image</span>
                    </div>
                )}
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg">
                        {metadata?.name || `Pixel Art #${tokenId}`}
                    </h3>
                </div>
                {metadata?.description && (
                    <p className="text-sm text-gray-600 mb-2">{metadata.description}</p>
                )}
                {editionPrice !== undefined && editionPrice !== BigInt(0) && (
                    <div className="text-sm mb-2">
                        <span className="font-medium">Edition Price: </span>
                        <span className="text-blue-600">{formatEther(editionPrice as bigint)} ETH</span>
                    </div>
                )}
                {totalSupply !== undefined && maxSupply !== undefined && (
                    <div className="text-sm mb-2">
                        <span className="font-medium">Supply: </span>
                        <span>
                            {totalSupply.toString()} / {maxSupply === BigInt(0) ? "∞" : maxSupply.toString()}
                        </span>
                    </div>
                )}
                {creator && (
                    <div className="text-xs text-gray-500 mb-2">
                        Creator: {creator.toString().slice(0, 6)}...{creator.toString().slice(-4)}
                    </div>
                )}
                <div className="flex gap-2 mt-3">
                    <Link
                        href={`/view-pixel-art/${tokenId}`}
                        className="flex-1 text-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        View
                    </Link>
                    {editionPrice !== undefined && editionPrice !== BigInt(0) && (
                        <Link
                            href={`/mint-edition/${tokenId}`}
                            className="flex-1 text-center py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        >
                            Mint Edition
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

