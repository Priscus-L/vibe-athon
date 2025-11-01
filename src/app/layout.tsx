import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import { type ReactNode } from "react"
import { Providers } from "./providers"

export const metadata: Metadata = {
    title: "Pixel Art NFT Dapp",
    description: "Create, view, and mint 16x16 pixel art NFTs",
}

export default function RootLayout(props: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/nft-marketplace.png" sizes="any" />
            </head>
            <body className="bg-zinc-50">
                <Providers>
                    <Header />
                    {props.children}
                </Providers>
            </body>
        </html>
    )
}
