"use client"

import { useState, useEffect } from "react"
import { useChainId, useReadContract } from "wagmi"
import { chainsToContracts, pixelArtNftAbi } from "@/constants"
import PixelArtNFT from "@/components/PixelArtNFT"

export default function ViewPixelArtPage() {
    const chainId = useChainId()
    const contractAddress = (chainsToContracts[chainId]?.pixelArtNft as `0x${string}`) || "0x0ABC3a0926870a6bD1eEE59fdC59839Cd9C00ED0"

    const [nextId, setNextId] = useState<bigint | null>(null)
    const [tokenIds, setTokenIds] = useState<string[]>([])

    // Get nextId to know how many NFTs exist
    const { data: nextIdData } = useReadContract({
        abi: pixelArtNftAbi,
        address: contractAddress,
        functionName: "nextId",
        query: {
            enabled: !!contractAddress && contractAddress !== "0x",
        },
    })

    useEffect(() => {
        if (nextIdData !== undefined) {
            setNextId(nextIdData as bigint)
            // Generate array of token IDs (1 to nextId-1, since nextId is the next available ID)
            const ids: string[] = []
            const count = Number(nextIdData)
            for (let i = 1; i < count; i++) {
                ids.push(i.toString())
            }
            setTokenIds(ids)
        }
    }, [nextIdData])

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">All Pixel Art NFTs</h1>

            {tokenIds.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-600 text-lg">No pixel art NFTs created yet.</p>
                    <a
                        href="/create-pixel-art"
                        className="mt-4 inline-block py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Create Your First NFT
                    </a>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {tokenIds.map((tokenId) => (
                        <PixelArtNFT key={tokenId} tokenId={tokenId} contractAddress={contractAddress} />
                    ))}
                </div>
            )}
        </div>
    )
}

