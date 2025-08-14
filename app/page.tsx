"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CasinoList } from "@/components/casino-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import HeroSection from "@/components/hero-section" // Змінено на імпорт за замовчуванням
import { CasinoGuideSection } from "@/components/casino-guide-section"
import { OurTopCasinoChoice } from "@/components/our-top-casino-choice"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  return (
    <main className="min-h-screen flex flex-col bg-zinc-900">
      <SiteHeader />

      {/* Global Background Image and Overlay */}
      <div
        className="relative flex-grow bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/casino-bg.png")' }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        {/* All page content goes inside this div */}
        <div className="relative z-10 pt-10">
          <HeroSection setIsAgeModalOpen={setIsAgeModalOpen} setIsAdvertiserModalOpen={setIsAdvertiserModalOpen} />

          {/* Casino List */}
          <div id="casino-sites" className="relative">
            <CasinoList />
          </div>

          {/* Expert Casino Guide Section */}
          <CasinoGuideSection />

          {/* Our Choice Section */}
          <OurTopCasinoChoice />
        </div>
      </div>

      <TopOffersModal />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <SiteFooter />
    </main>
  )
}
