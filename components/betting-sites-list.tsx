"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Star, Award, Trophy } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"
import { cn } from "@/lib/utils"

// Define the badge data for the first four cards
const topBadges = [
  { text: "#1 RATED", icon: <Award className="h-3 w-3 md:h-4 md:w-4 mr-0.5 md:mr-1" /> },
  { text: "TOP PICK", icon: <Star className="h-3 w-3 md:h-4 md:w-4 mr-0.5 md:mr-1" /> },
  { text: "HIGHLY RECOMMENDED", icon: <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 mr-0.5 md:mr-1" /> },
  { text: "EXPERT CHOICE", icon: <Trophy className="h-3 w-3 md:h-4 md:w-4 mr-0.5 md:mr-1" /> },
]

export function BettingSitesList() {
  const [sites, setSites] = useState(bettingSites)

  return (
    <section className="pt-4 md:pt-8 pb-8 md:pb-16 relative z-10 max-w-[960px] mx-auto">
      {" "}
      {/* Adjusted background */}
      {/* Animated background with more visible effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base gradient - REMOVED bg-gray-50 to make it transparent */}
      </div>
      <div className="container mx-auto px-2">
        <div className="w-full space-y-4 md:space-y-6">
          {sites.map((site, index) => (
            // Wrap the entire card in a Link component
            <Link
              key={site.id}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up relative",
                index === 0 ? "border-[3px] border-green-600 animate-glow" : "border border-gray-100",
              )}
              style={
                index === 0
                  ? { boxShadow: "0 0 20px rgba(255, 165, 0, 0.8)", animationDelay: `${index * 150}ms` }
                  : { animationDelay: `${index * 150}ms` }
              }
            >
              {index < topBadges.length && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div
                    className={cn(
                      "bg-orange-600 text-white font-bold rounded-full shadow-md flex items-center whitespace-nowrap",
                      index === 0 ? "text-xs md:text-sm py-1.5 px-4" : "text-[10px] md:text-xs py-1 px-3",
                    )}
                  >
                    {topBadges[index].icon}
                    {topBadges[index].text}
                  </div>
                </div>
              )}
              <div className="hidden md:grid">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4">
                  {/* Logo and Rating Section */}
                  <div
                    className={cn(
                      "md:col-span-3 p-3 md:p-4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100",
                      "bg-green-50 md:rounded-tl-xl md:rounded-bl-xl", // ADDED rounded classes here
                    )}
                  >
                    <div className="relative">
                      <div className="bg-white rounded-lg p-2 md:p-4 shadow-sm mb-2 md:mb-3">
                        <Image
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          width={150}
                          height={60}
                          className="object-contain h-20 md:h-20 w-auto transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 md:h-5 md:w-5 text-yellow-400 transition-transform duration-300 hover:scale-125"
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <div className="flex items-center justify-center gap-1 md:gap-2">
                        <span className="text-lg md:text-2xl font-bold text-gray-800">{site.score.toFixed(1)}</span>
                        <span className="text-[10px] md:text-xs text-gray-500">({site.reviews || 2500} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="md:col-span-5 p-3 md:p-4 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1 md:mb-2"></div>

                    <div className="mb-2 md:mb-4">
                      <p className="text-green-600 uppercase font-semibold text-center text-xl">WELCOME OFFER</p>
                      <p
                        className={cn(
                          "font-bold text-base md:text-xl text-center",
                          index === 0 ? "text-green-700" : "text-amber-500",
                        )}
                      >
                        {site.bonus}
                      </p>
                    </div>

                    <p
                      className={cn(
                        "text-[10px] md:text-sm text-center",
                        index === 0 ? "text-green-700" : "text-gray-600",
                      )}
                    >
                      {site.features.join(" • ")}
                    </p>
                  </div>

                  {/* CTA Section */}
                  <div
                    className={cn(
                      "md:col-span-4 p-3 md:p-4 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-100",
                      "bg-orange-50 md:rounded-tr-xl md:rounded-br-xl", // ADDED rounded classes here
                    )}
                  >
                    <div className="w-full max-w-xs">
                      <div className="relative mb-3 md:mb-6">
                        {/* Button is now just visual, parent Link handles navigation */}
                        <Button
                          className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 animate-glow animate-blink text-sm md:text-base py-4 md:py-6"
                          asChild // Use asChild to render as a child of the Link
                        >
                          <span className="flex items-center justify-center">CLAIM BONUS</span>
                        </Button>
                      </div>
                      <p className="text-[10px] md:text-xs text-center text-gray-500">
                        18+. T&Cs Apply. Play Responsibly.
                      </p>

                      {/* Removed "Visit Site" link as the entire card is now clickable */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col gap-3 p-3">
                {/* Top row: logo + bonus */}
                <div className="grid grid-cols-2 items-start gap-2 min-h-[80px]">
                  <div className="flex justify-center items-center h-full">
                    <div className="bg-white p-2 rounded shadow-sm w-36 h-20 flex items-center justify-center">
                      <Image
                        src={site.logo || "/placeholder.svg"}
                        alt={site.name}
                        width={160}
                        height={80}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center flex flex-col justify-center h-full min-h-[80px]">
                    <div className="uppercase font-bold mb-1 text-base text-slate-700">Bonus</div>
                    <div className="font-bold text-orange-800 text-lg leading-tight">{site.bonus}</div>
                  </div>
                </div>
                {/* Bottom row: SCORE + rating + button */}
                <div className="grid grid-cols-3 items-center gap-2 pt-2 border-t border-gray-200 min-h-[50px]">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-800">{site.score.toFixed(1)}</div>
                    <div className="text-[10px] text-gray-500 font-semibold">Score</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center gap-0.5 mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-[10px] text-gray-500 font-semibold">({site.reviews})</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative">
                      {/* Button is now just visual, parent Link handles navigation */}
                      <Button
                        className="bg-green-700 hover:bg-green-800 text-white text-xs px-4 py-2 font-semibold shadow animate-glow animate-blink"
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
