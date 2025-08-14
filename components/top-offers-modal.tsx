"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarRating } from "@/components/star-rating"
import { casinoSites } from "@/data/casino-sites"

export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(true)
  const [topSite, setTopSite] = useState(casinoSites[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isOpen || !mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3">
      <div className="relative w-full max-w-xs">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 z-30 p-2 rounded-full bg-zinc-800 text-gray-300 hover:bg-zinc-700 shadow-lg border border-zinc-700"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* TOP PICK Badge - positioned relative to the modal container, not the card */}
        <div className="absolute top-[45px] left-1/2 -translate-x-1/2 z-20 bg-orange-500 text-white text-xs font-bold rounded-full py-1 px-3 shadow-md flex items-center whitespace-nowrap">
          TOP PICK
        </div>

        {/* Main content area adjustments */}
        <div className="p-2 flex justify-center bg-transparent">
          <Link
            key={topSite.id}
            href={topSite.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl overflow-hidden hover:shadow-xl relative"
          >
            <Card className="h-full bg-zinc-900 rounded-xl border border-gold-700 shadow-lg">
              <CardContent className="p-4 flex flex-col items-center text-center h-full pt-8 bg-zinc-950 text-white">
                <div className="flex-grow flex flex-col items-center">
                  {/* Logo adjustments */}
                  <div className="bg-white p-2 rounded-lg shadow-sm mb-3 flex items-center justify-center w-40 h-40 border border-zinc-700">
                    <Image
                      src={topSite.logo || "/placeholder.svg"}
                      alt={topSite.name}
                      width={140}
                      height={80}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  {/* Rating adjustments */}
                  <div className="flex items-center justify-center mb-3">
                    <StarRating rating={topSite.score} size="md" />
                    <span className="font-bold text-base text-gray-200 ml-1.5">{topSite.score.toFixed(1)}</span>
                  </div>
                  {/* Welcome Offer Badge */}
                  <Badge className="bg-green-700 text-white border-green-600 mb-2 text-xs px-2.5 py-1">
                    WELCOME OFFER
                  </Badge>
                  {/* Bonus Text adjustments */}
                  <h3 className="text-lg font-bold text-orange-400 mb-4">{topSite.bonus}</h3>
                </div>
                {/* Button and Disclaimer Group */}
                <div className="w-full flex flex-col items-center">
                  <div className="relative w-full">
                    <Button
                      className="w-full bg-green-700 hover:bg-green-800 hover:shadow-xl text-sm py-4 text-white font-semibold"
                      asChild
                    >
                      <span className="flex items-center justify-center text-sm">CLAIM BONUS</span>
                    </Button>
                  </div>
                  <p className="text-xs text-center text-gray-400 mt-2">18+. T&Cs Apply. Play Responsibly.</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
