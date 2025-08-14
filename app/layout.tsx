import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { CookieBanner } from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Irish Top Casino Guide",
  description: "Your definitive guide to licensed, secure, and top-rated online casinos in Ireland.",
  icons: {
    icon: "/coin.png", // Updated favicon
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CookieConsentProvider>
            {children}
            <CookieBanner />
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
