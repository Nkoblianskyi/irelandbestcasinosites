import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import Link from "next/link"
import { Lightbulb, ShieldCheck, Scale, HandCoins, Clock, Users } from "lucide-react"

export const metadata = {
  title: "Safe Play | Ireland Best Casino Sites",
  description: "Learn about responsible gambling practices and resources for safe online casino play in Ireland.",
}

export default function SafePlayPage() {
  return (
    <main className="min-h-screen flex flex-col bg-zinc-900 text-white">
      <SiteHeader />

      <section className="pt-28 pb-12 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8 text-center">
            Safe Play & Responsible Gambling
          </h1>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p className="text-lg text-center max-w-2xl mx-auto">
              At Ireland Best Casino Sites, we are committed to promoting responsible gambling. Gambling should always
              be a fun and entertaining activity, not a source of financial stress.
            </p>
            <p className="text-lg text-center max-w-2xl mx-auto font-semibold text-gold-300">
              Remember: This site is for individuals 18 years or older. Never bet more than you can afford to lose.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="bg-zinc-800/60 p-6 rounded-lg border border-zinc-700 flex items-start gap-4">
                <Lightbulb className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gold-400 mb-2">Understand the Risks</h3>
                  <p className="text-sm">
                    Gambling involves financial risk. There's no guarantee of winning, and losses are a part of the
                    game. Play for entertainment, not as a way to make money.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-800/60 p-6 rounded-lg border border-zinc-700 flex items-start gap-4">
                <ShieldCheck className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gold-400 mb-2">Set Limits</h3>
                  <p className="text-sm">
                    Before you start, decide on a budget and stick to it. Use the deposit, loss, and session limits
                    offered by casinos to manage your play.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-800/60 p-6 rounded-lg border border-zinc-700 flex items-start gap-4">
                <Scale className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gold-400 mb-2">Time Management</h3>
                  <p className="text-sm">
                    Keep track of how long you're playing. Take regular breaks and avoid gambling for extended periods
                    without interruption.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-800/60 p-6 rounded-lg border border-zinc-700 flex items-start gap-4">
                <HandCoins className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gold-400 mb-2">Avoid Chasing Losses</h3>
                  <p className="text-sm">
                    Never try to win back money you've lost by increasing your bets. This can lead to a cycle of larger
                    losses and financial strain.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-800/60 p-6 rounded-lg border border-zinc-700 flex items-start gap-4">
                <Clock className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gold-400 mb-2">Don't Gamble Under Influence</h3>
                  <p className="text-sm">
                    Avoid gambling when you are stressed, upset, or under the influence of alcohol or drugs. Clear
                    judgment is crucial for responsible play.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-800/60 p-6 rounded-lg border border-zinc-700 flex items-start gap-4">
                <Users className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gold-400 mb-2">Seek Help If Needed</h3>
                  <p className="text-sm">
                    If gambling stops being fun or you feel it's becoming a problem, don't hesitate to seek professional
                    help. Resources are available.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gold-400 pt-8 text-center">Support Organizations</h2>
            <p className="text-center max-w-2xl mx-auto">
              If you are concerned about your gambling habits or those of a loved one, these organizations can provide
              confidential support and guidance:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
              <div className="bg-zinc-800/50 p-3 rounded-lg flex flex-col items-center border border-zinc-700">
                <Link href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
                  <Image src="/gamble-aware.png" alt="Be Gamble Aware" width={120} height={40} className="mb-2 mt-4" />
                </Link>
                <span className="text-xs text-center text-gray-300">Be Gamble Aware</span>
              </div>

              <div className="bg-zinc-800/50 p-3 rounded-lg flex flex-col items-center border border-zinc-700">
                <Link href="https://gamblingcare.ie/" target="_blank" rel="noopener noreferrer">
                  <Image src="/GamblingCare-w.png" alt="GamblingCare" width={120} height={40} className="mb-2 mt-4" />
                </Link>
                <span className="text-xs text-center text-gray-300">GamblingCare Support</span>
              </div>

              <div className="bg-zinc-800/50 p-3 rounded-lg flex flex-col items-center border border-zinc-700">
                <Link href="https://www.problemgambling.ie/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/extern-problem.png"
                    alt="Problem Gambling"
                    width={120}
                    height={40}
                    className="mb-2 mt-4"
                  />
                </Link>
                <span className="text-xs text-center text-gray-300">Problem Gambling</span>
              </div>

              <div className="bg-zinc-800/50 p-3 rounded-lg flex items-center justify-center flex-col border border-zinc-700">
                <Link href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer" className="mt-4">
                  <Image src="/gamcare.png" alt="GamCare" width={120} height={40} className="mb-2 mt-4" />
                </Link>
                <span className="text-xs text-center text-gray-300">GamCare UK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
