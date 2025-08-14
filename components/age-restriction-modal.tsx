"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-md bg-zinc-900 rounded-lg shadow-lg p-3 md:p-6 border border-zinc-70">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="bg-orange-500 p-1 rounded mr-2">
              <span className="text-white font-bold text-xs">18+</span>
            </div>
            <h2 className="text-base md:text-xl font-bold text-white">Age Restriction</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Close">
            <X className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
        <div className="text-xs md:text-base text-gray-300 space-y-2">
          <p>
            This website is for individuals 18 years or older. By using our site, you confirm you meet this requirement.
          </p>
          <p>Gambling should be for entertainment only. Never gamble with money you cannot afford to lose.</p>
          <p>If you're struggling with gambling issues, please seek help from GamCare or other support services.</p>
        </div>
        <div className="mt-3 md:mt-6 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-orange-500 hover:bg-orange-600 text-xs md:text-base py-1.5 px-3 md:py-2 md:px-4 text-white"
          >
            I Understand
          </Button>
        </div>
      </div>
    </div>
  )
}
