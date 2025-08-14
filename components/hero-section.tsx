"use client"

import Image from "next/image"
import type { Dispatch, SetStateAction } from "react"
import { useState, useEffect } from "react"

interface HeroSectionProps {
  setIsAgeModalOpen: Dispatch<SetStateAction<boolean>>
  setIsAdvertiserModalOpen: Dispatch<SetStateAction<boolean>>
}

// Змінено на експорт за замовчуванням
export default function HeroSection({ setIsAgeModalOpen, setIsAdvertiserModalOpen }: HeroSectionProps) {
  const [lastUpdated, setLastUpdated] = useState<string>("")

  useEffect(() => {
    const now = new Date()
    const month = now.toLocaleString("en-US", { month: "long" })
    const year = now.getFullYear()
    setLastUpdated(`${month} ${year}`)
  }, [])

  return (
    <section className="relative bg-zinc-900/60 text-white overflow-hidden max-h-[300px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-cas.jpg"
          alt="Casino background with golden chips"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div> {/* Darker overlay */}
      </div>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center py-6 md:py-8 relative z-10 flex flex-col justify-center h-full">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-2 leading-tight text-white drop-shadow-lg">
          DISCOVER IRELAND'S <span className="text-orange-400">BEST</span> CASINO SITES
        </h1>
        <p className="text-sm md:text-base text-gray-100 max-w-2xl mx-auto font-light mb-4">
          Your trusted guide to licensed, secure, and top-rated casino experiences in Ireland.
        </p>

        {/* Last Updated Info */}
        {lastUpdated && (
          <p className="text-xs md:text-sm text-gold-300 font-semibold mb-2">Rating last updated: {lastUpdated}</p>
        )}

        {/* Responsible gambling notice */}
        <div className="text-center mt-2">
          <p className="text-[9px] md:text-[10px] text-gray-200">
            Play responsibly. Terms and wagering conditions apply.{" "}
            <button
              onClick={() => setIsAdvertiserModalOpen(true)}
              className="text-gold-300 hover:text-gold-200 hover:underline font-medium"
            >
              Advertiser Info
            </button>{" "}
            |{" "}
            <button
              onClick={() => setIsAgeModalOpen(true)}
              className="text-gold-300 hover:text-gold-200 hover:underline font-medium"
            >
              18+ Only
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
