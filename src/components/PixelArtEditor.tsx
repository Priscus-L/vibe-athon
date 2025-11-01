"use client"

import { useState, useCallback, useImperativeHandle, forwardRef } from "react"

const PALETTE = [
    "#000000", // black
    "#FFFFFF", // white
    "#FF0000", // red
    "#00FF00", // green
    "#0000FF", // blue
    "#FFFF00", // yellow
    "#FF00FF", // magenta
    "#00FFFF", // cyan
    "#808080", // gray
    "#C0C0C0", // silver
    "#800000", // maroon
    "#808000", // olive
    "#008000", // dark green
    "#800080", // purple
    "#008080", // teal
    "#000080", // navy
]

interface PixelArtEditorProps {
    onPixelDataChange?: (pixelData: Uint8Array) => void
    initialData?: Uint8Array
}

export interface PixelArtEditorHandle {
    getPixelData: () => Uint8Array
}

const PixelArtEditor = forwardRef<PixelArtEditorHandle, PixelArtEditorProps>(
    function PixelArtEditor({ onPixelDataChange, initialData }, ref) {
    const [selectedColor, setSelectedColor] = useState(0)
    const [pixels, setPixels] = useState<number[]>(() => {
        if (initialData) {
            // Convert bytes to pixel array
            const pixelArray: number[] = []
            for (let i = 0; i < 256; i++) {
                const byteIdx = Math.floor(i / 2)
                const nibble = i % 2 === 0 
                    ? (initialData[byteIdx] >> 4) & 0xF
                    : initialData[byteIdx] & 0xF
                pixelArray.push(nibble)
            }
            return pixelArray
        }
        return new Array(256).fill(0) // Start with all black
    })

    const handlePixelClick = useCallback(
        (index: number) => {
            setPixels((prevPixels) => {
                const newPixels = [...prevPixels]
                newPixels[index] = selectedColor

                // Convert pixels to bytes (128 bytes = 256 pixels, 2 pixels per byte)
                const pixelData = new Uint8Array(128)
                for (let i = 0; i < 256; i++) {
                    const byteIdx = Math.floor(i / 2)
                    const nibble = newPixels[i]
                    if (i % 2 === 0) {
                        pixelData[byteIdx] = (nibble << 4) & 0xF0
                    } else {
                        pixelData[byteIdx] |= nibble & 0xF
                    }
                }

                onPixelDataChange?.(pixelData)
                return newPixels
            })
        },
        [selectedColor, onPixelDataChange]
    )

    const clearCanvas = () => {
        setPixels(new Array(256).fill(0))
        onPixelDataChange?.(new Uint8Array(128).fill(0))
    }

    // Get current pixel data as bytes
    const getPixelData = useCallback((): Uint8Array => {
        const pixelData = new Uint8Array(128)
        for (let i = 0; i < 256; i++) {
            const byteIdx = Math.floor(i / 2)
            const nibble = pixels[i]
            if (i % 2 === 0) {
                pixelData[byteIdx] = (nibble << 4) & 0xF0
            } else {
                pixelData[byteIdx] |= nibble & 0xF
            }
        }
        return pixelData
    }, [pixels])

    // Expose getPixelData via ref
    useImperativeHandle(ref, () => ({
        getPixelData,
    }))

    return (
        <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-md">
            <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2 flex-wrap justify-center max-w-md">
                    {PALETTE.map((color, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedColor(index)}
                            className={`w-8 h-8 rounded border-2 transition-all ${
                                selectedColor === index
                                    ? "border-gray-800 scale-110"
                                    : "border-gray-300 hover:border-gray-500"
                            }`}
                            style={{ backgroundColor: color }}
                            title={`Color ${index}`}
                        />
                    ))}
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={clearCanvas}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                    >
                        Clear
                    </button>
                    <div className="px-4 py-2 bg-blue-100 rounded-md">
                        Selected: <span style={{ color: PALETTE[selectedColor] }}>●</span>
                    </div>
                </div>
            </div>

            <div className="border-2 border-gray-300 bg-white p-2 rounded">
                <div
                    className="grid gap-0"
                    style={{
                        gridTemplateColumns: "repeat(16, 1fr)",
                        width: "320px",
                        height: "320px",
                    }}
                >
                    {pixels.map((colorIndex, index) => {
                        const x = index % 16
                        const y = Math.floor(index / 16)
                        return (
                            <button
                                key={index}
                                onClick={() => handlePixelClick(index)}
                                className="hover:opacity-80 transition-opacity"
                                style={{
                                    backgroundColor: PALETTE[colorIndex],
                                    width: "20px",
                                    height: "20px",
                                }}
                                title={`Pixel (${x}, ${y})`}
                            />
                        )
                    })}
                </div>
            </div>

            <p className="text-sm text-gray-600 text-center max-w-md">
                Click pixels to paint. Each pixel uses one of 16 colors from the palette.
            </p>
        </div>
    )
    }
)

export default PixelArtEditor

