export function BettingGuideSection() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-green-900/70">
      {" "}
      {/* Adjusted background */}
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-grid-white opacity-10 z-0"></div>
      {/* Animated accent elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-green-400 opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-400 opacity-50 z-0"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-600 rounded-full filter blur-3xl opacity-20 z-0"></div>
      <div
        className="absolute bottom-10 left-10 w-32 h-32 bg-green-600 rounded-full filter blur-3xl opacity-20 z-0"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Your Definitive Guide to Irish Betting
          </h2>
          <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto animate-fade-in-up">
            Uncover expert strategies and trusted insights to elevate your online betting journey in Ireland.
          </p>
        </div>

        {/* New structure for the 3 points - not on cards */}
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 animate-fade-in-up">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Unwavering Security Standards</h3>
              <p className="text-orange-100">
                We meticulously audit each platform's security infrastructure, ensuring robust data encryption and
                stringent privacy protocols to protect your personal and financial details. Our commitment is to your
                peace of mind.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Optimized Bonus Value</h3>
              <p className="text-orange-100">
                Our experts analyze every bonus offer, from enticing welcome packages to ongoing promotions, to
                guarantee transparent terms and maximum, genuine value for Irish players. We cut through the fine print
                for you.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">In-Depth Platform Analysis</h3>
              <p className="text-orange-100">
                We conduct thorough assessments of user interface, market depth, odds competitiveness, and customer
                support responsiveness. This provides a complete, unbiased picture of each betting experience, helping
                you choose wisely.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section with key features */}
        <div
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 animate-fade-in-up"
          style={{ animationDelay: "450ms" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Why Trust Our Recommendations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-orange-300 rounded-full mr-2 flex-shrink-0 mt-2"></span>
                  <span className="text-orange-100">
                    Every platform undergoes a comprehensive, hands-on testing process.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-orange-300 rounded-full mr-2 flex-shrink-0 mt-2"></span>
                  <span className="text-orange-100">
                    Our reviews are continuously updated to reflect the latest offers and features.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-orange-300 rounded-full mr-2 flex-shrink-0 mt-2"></span>
                  <span className="text-orange-100">
                    We focus exclusively on operators that are fully licensed and tailored for the Irish market.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-orange-300 rounded-full mr-2 flex-shrink-0 mt-2"></span>
                  <span className="text-orange-100">
                    Our evaluation criteria are transparent, ensuring you understand our unbiased approach.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Getting Started</h3>
              <p className="text-orange-100 mb-4">
                Finding your ideal betting platform is simple with our expert guidance:
              </p>
              <ol className="space-y-3 text-orange-100">
                <li className="flex">
                  <span className="bg-green-700/40 h-6 w-6 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                    1
                  </span>
                  <span>Explore our curated list of top-rated betting sites to find your ideal match.</span>
                </li>
                <li className="flex">
                  <span className="bg-green-700/40 h-6 w-6 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                    2
                  </span>
                  <span>Secure your exclusive welcome bonus by clicking through our secure links.</span>
                </li>
                <li className="flex">
                  <span className="bg-green-700/40 h-6 w-6 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                    3
                  </span>
                  <span>Register your account and set responsible gambling limits for a safe experience.</span>
                </li>
                <li className="flex">
                  <span className="bg-green-700/40 h-6 w-6 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                    4
                  </span>
                  <span>Begin your enhanced betting journey with confidence and peace of mind.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
