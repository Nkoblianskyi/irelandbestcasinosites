"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { casinoSites } from "@/data/casino-sites"
import { StarRating } from "@/components/star-rating"
import { cn } from "@/lib/utils"

// Define the badge data for the first four cards
const topBadges = [{ text: "TOP RATED" }, { text: "BEST CHOICE" }, { text: "HIGH VALUE" }, { text: "EDITOR'S PICK" }]

export function CasinoList() {
  const [sites, setSites] = useState(casinoSites)

  return (
    <section className="pt-4 md:pt-8 pb-8 md:pb-16 relative z-10 max-w-[960px] mx-auto">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base gradient - REMOVED bg-gray-50 to make it transparent */}
      </div>
      <div className="container mx-auto px-2">
        <div className="w-full space-y-4 md:space-y-6">
          {sites.map((site, index) => (
            <Link
              key={site.id}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "block rounded-xl shadow-md hover:shadow-xl relative border border-zinc-700",
                index === 0 ? "border-[3px] border-orange-500" : "",
              )}
            >
              {/* Background Image and Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-xl"
                style={{ backgroundImage: 'url("/irish-casino-pattern.png")' }}
              >
                <div className="absolute inset-0 bg-black/60 rounded-xl"></div>
              </div>

              <div className="hidden md:grid relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4">
                  {/* Logo Section */}
                  <div
                    className={cn(
                      "md:col-span-3 p-3 md:p-4 flex flex-col items-center justify-center border-b md:border-b-0 relative border-transparent md:border-r-0",
                    )}
                  >
                    {index < topBadges.length && (
                      <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 z-20 hidden md:block">
                        {/* Pill-shaped Badge */}
                        <div
                          className={cn(
                            "bg-red-600 text-white font-bold rounded-full shadow-md flex items-center justify-center whitespace-nowrap",
                            index === 0 ? "text-sm py-2 px-6" : "text-xs py-1.5 px-4",
                          )}
                        >
                          {topBadges[index].text}
                        </div>
                      </div>
                    )}
                    <div className="relative">
                      <div className="bg-white p-2 rounded-lg shadow-sm mb-2 md:mb-3 border border-zinc-700">
                        <Image
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          width={150}
                          height={60}
                          className="object-contain h-16 w-32 md:h-20 md:w-40"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="md:col-span-5 p-3 md:p-4 flex flex-col justify-center text-white">
                    <div className="flex items-center gap-2 mb-1 md:mb-2"></div>

                    <div className="mb-2 md:mb-4">
                      <p className="text-green-500 uppercase font-semibold text-center text-xl">WELCOME OFFER</p>
                      <p
                        className={cn(
                          "font-bold text-base md:text-xl text-center",
                          index === 0 ? "text-orange-400" : "text-gold-300",
                        )}
                      >
                        {site.bonus}
                      </p>
                    </div>

                    <p
                      className={cn(
                        "text-[10px] md:text-sm text-center",
                        index === 0 ? "text-gray-300" : "text-gray-400",
                      )}
                    >
                      {site.features.join(" • ")}
                    </p>
                  </div>

                  {/* CTA Section */}
                  <div
                    className={cn(
                      "md:col-span-4 p-3 md:p-4 flex flex-col items-center justify-center border-t md:border-t-0 border-zinc-700 md:border-l-0",
                    )}
                  >
                    {/* Rating moved here */}
                    <div className="text-center mb-3">
                      <div className="flex items-center justify-center mb-1">
                        <StarRating rating={site.score} size="lg" />
                      </div>
                      <div className="flex items-center justify-center gap-1 md:gap-2">
                        <span className="text-lg md:text-2xl font-bold text-white">{site.score.toFixed(1)}</span>
                        <span className="text-[10px] md:text-xs text-gray-400">({site.reviews || 2500} reviews)</span>
                      </div>
                    </div>
                    <div className="w-full max-w-xs">
                      <div className="relative mb-3 md:mb-6">
                        <Button
                          className="w-full bg-green-700 hover:bg-green-800 hover:shadow-lg text-sm md:text-base py-4 md:py-6 text-white"
                          asChild
                        >
                          <span className="flex items-center justify-center">CLAIM BONUS</span>
                        </Button>
                      </div>
                      <p className="text-[10px] md:text-xs text-center text-gray-400">
                        18+. T&Cs Apply. Play Responsibly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col gap-3 p-3 relative z-10">
                {index < topBadges.length && (
                  <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 z-20 md:hidden">
                    {/* Pill-shaped Badge for Mobile */}
                    <div
                      className={cn(
                        "bg-red-600 text-white font-bold rounded-full shadow-md flex items-center justify-center whitespace-nowrap",
                        index === 0 ? "text-xs py-1.5 px-4" : "text-[10px] py-1 px-3",
                      )}
                    >
                      {topBadges[index].text}
                    </div>
                  </div>
                )}
                {/* Top row: logo + bonus */}
                <div className="grid grid-cols-2 items-start gap-2 min-h-[80px]">
                  <div className="flex justify-center items-center h-full">
                    <div className="bg-white p-2 rounded shadow-sm w-32 h-16 flex items-center justify-center border border-zinc-700">
                      <Image
                        src={site.logo || "/placeholder.svg"}
                        alt={site.name}
                        width={120}
                        height={60}
                        className="h-16 w-32 object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center flex flex-col justify-center h-full min-h-[80px]">
                    <div className="uppercase font-bold mb-1 text-base text-gray-300">Bonus</div>
                    <div className="font-bold text-orange-400 text-lg leading-tight">{site.bonus}</div>
                  </div>
                </div>
                {/* Bottom row: SCORE + rating + button */}
                <div className="grid grid-cols-3 items-center gap-2 pt-2 border-t border-zinc-700 min-h-[50px]">
                  {/* Rating moved here for mobile */}
                  <div className="col-span-2 text-center">
                    <div className="flex justify-center gap-0.5 mb-1">
                      <StarRating rating={site.score} size="sm" />
                    </div>
                    <div className="text-[10px] text-gray-400 font-semibold">({site.reviews})</div>
                    <div className="text-lg font-bold text-green-500 mt-1">{site.score.toFixed(1)} Score</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative">
                      <Button
                        className="bg-green-700 hover:bg-green-800 text-white text-xs px-4 py-2 font-semibold shadow"
                        asChild
                      >
                        <span>Get Bonus</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
