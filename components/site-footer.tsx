import Link from "next/link"
import Image from "next/image"
import { Dices } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Top row: Logo+Description and Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-zinc-700 pb-8">
          {/* Logo and Description (left) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/coin.png"
                alt="Ireland Best Casino Sites Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">Ireland Best Casino Sites</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm max-w-md">
              Your trusted guide to Ireland's premier licensed online casino sites. We provide expert reviews, exclusive
              bonuses, and comprehensive comparisons to enhance your gaming experience.
            </p>
          </div>

          {/* Navigation Links (right) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-orange-300">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/safe-play" className="text-gray-300 hover:text-white">
                  Safe Play
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-300 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Gaming Section */}
        <div className="py-8 mb-8 border-b border-zinc-700">
          <h3 className="text-lg font-bold mb-4 text-orange-300 text-center">Responsible Gaming</h3>
          <div className="space-y-5">
            <div className="p-4">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="bg-white p-1 rounded-full">
                  <span className="text-red-600 font-bold text-sm">18+</span>
                </div>
                <span className="font-semibold text-white">Age Restriction</span>
              </div>
              <p className="text-sm text-gray-300 text-center">
                All casino sites featured on our platform require users to be at least 18 years of age. Gambling by
                underage individuals is strictly prohibited.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 flex flex-col items-center">
                <Link href="https://www.gambleaware.org/" className=" bg-white rounded-lg border border-zinc-700 p-3">
                  <Image src="/gamble.webp" alt="Be Gamble Aware" width={120} height={40} className="mb-2 mt-4" />
                </Link>
              </div>

              <div className="p-3 flex flex-col items-center" >
                <Link href="https://www.egba.eu/" className=" bg-white rounded-lg border border-zinc-700 p-3">
                  <Image src="/egba.png" alt="EGBA" width={140} height={80} className="mb-2 mt-4" />
                </Link>

              </div>

              <div className="p-3 flex flex-col items-center">
                <Link href="https://www.gamblingtherapy.org/" className=" bg-white rounded-lg border border-zinc-700 p-3">
                  <Image
                    src="/gordon.png"
                    alt="Extern Problem Gambling"
                    width={120}
                    height={40}
                    className="mb-2 mt-4"
                  />
                </Link>

              </div>

              <div className="p-3 flex items-center justify-center flex-col">
                <Link href="https://www.gamcare.org.uk/" className=" bg-white rounded-lg border border-zinc-700 p-3">
                  <Image src="/gamecare.svg" alt="GamCare" width={120} height={40} className="mb-2 mt-4" />
                </Link>

              </div>
            </div>

            <p className="text-sm text-gray-300 text-center">
              Gambling should be an enjoyable form of entertainment, not a way to make money. Always gamble responsibly
              and within your means. If you feel you may have a gambling problem, seek help from professional support
              services.
            </p>
          </div>
        </div>

        {/* Disclaimer and Copyright (bottom) */}
        <div className="text-center text-sm text-gray-400 space-y-2">
          <p>Disclaimer: The information provided on this site is for entertainment purposes only.</p>
          <p>© 2025 irelandbestcasinosites.com -  All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
