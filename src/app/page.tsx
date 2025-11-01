"use client"

import { useAccount } from "wagmi"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"

export default function Home() {
    const { isConnected } = useAccount()

    return (
        <main className="container mx-auto px-4 py-8">
            {!isConnected ? (
                <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                    <h1 className="text-4xl font-bold mb-4">Pixel Art NFT Dapp</h1>
                    <p className="text-xl text-gray-600 mb-6">
                        Create, view, and mint 16x16 pixel art NFTs
                    </p>
                    <ConnectButton />
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
                    <h1 className="text-4xl font-bold">Pixel Art NFT Dapp</h1>
                    <p className="text-xl text-gray-600 text-center max-w-2xl">
                        Create your own pixel art NFTs or browse and mint editions of existing
                        artwork
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center mt-4">
                        <Link
                            href="/create-pixel-art"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
                        >
                            Create New NFT
                        </Link>
                        <Link
                            href="/view-pixel-art"
                            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-lg"
                        >
                            View Gallery
                        </Link>
                    </div>
                </div>
            )}
        </main>
    )
}
