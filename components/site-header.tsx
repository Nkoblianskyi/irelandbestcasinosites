"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Badge } from "./badge"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full ${scrolled
          ? "bg-zinc-950/95 backdrop-blur-sm shadow-lg border-b border-zinc-700"
          : "bg-zinc-900/95 backdrop-blur-sm shadow-lg border-b border-zinc-800"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between h-12 px-4 relative">
        {/* Centered Logo and Name */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          <Image
            src="/coin.png"
            alt="Irish Top Casino Guide Logo"
            width={32}
            height={32}
            className="relative z-10 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none">
              <span className="text-green-500">Ireland</span> <span className="text-white">Best Casino</span>{" "}
              <span className="text-orange-500">Sites</span>
            </span>
          </div>
        </Link>

        {/* 18+ Badge (right) */}
        <div className="flex items-center ml-auto z-20">
          <Badge className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">18+</Badge>
        </div>
      </div>
    </header>
  )
}
