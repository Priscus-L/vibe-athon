"use client"

import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import { anvil, sepolia, baseSepolia, mainnet } from "wagmi/chains"

export default getDefaultConfig({
    appName: "Pixel Art NFT Dapp",
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    chains: [anvil, sepolia, baseSepolia, mainnet],
    ssr: true,
})
