"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950 text-white p-4 shadow-lg border-t border-zinc-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Cookie Notice</h3>
            <p className="text-sm text-gray-300">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
              traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
              onClick={declineAll}
            >
              Decline
            </Button>
            <Button className="bg-green-700 hover:bg-green-800 text-white" onClick={acceptAll}>
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
