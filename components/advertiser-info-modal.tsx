"use client"

import { useState, useEffect } from "react"
import { X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-md bg-zinc-900 rounded-lg shadow-lg p-3 md:p-6 border border-zinc-700">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="bg-green-700 p-1 rounded-full mr-2">
              <Info className="h-3 w-3 md:h-5 md:w-5 text-white" />
            </div>
            <h2 className="text-base md:text-xl font-bold text-white">Advertiser Info</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Close">
            <X className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
        <div className="text-xs md:text-base text-gray-300 space-y-2">
          <p>
            IrishTopCasinoGuide.com is a free service to help you find licensed casino platforms. We receive fees from
            featured brands, affecting their placement.
          </p>
          <p>
            All featured sites are licensed by reputable authorities. We strive for accuracy but cannot be held
            responsible for inaccuracies.
          </p>
          <p>
            Bonuses and offers are subject to change. Always read the full terms on the operator's website before
            claiming.
          </p>
        </div>
        <div className="mt-3 md:mt-6 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-green-700 hover:bg-green-800 text-xs md:text-base py-1.5 px-3 md:py-2 md:px-4 text-white"
          >
            Got It
          </Button>
        </div>
      </div>
    </div>
  )
}
