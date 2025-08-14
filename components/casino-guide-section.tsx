export function CasinoGuideSection() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-zinc-900/80">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-grid-white opacity-5 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Your Definitive Guide to Ireland's Best Casino Sites
          </h2>
          <p className="text-lg md:text-xl text-gold-300 max-w-3xl mx-auto">
            Navigate the world of online casino sites in Ireland with our expert, unbiased guidance.
          </p>
        </div>

        {/* Main content area with detailed sections */}
        <div className="max-w-4xl mx-auto bg-zinc-800/60 backdrop-blur-sm rounded-xl p-8 border border-zinc-700">
          <div className="space-y-8">
            {/* Section 1: Security and Licensing */}
            <div>
              <h3 className="text-2xl font-bold text-gold-400 mb-3">Security and Licensing Assurance</h3>
              <p className="text-gray-300">
                Our primary focus is your safety. We conduct exhaustive audits of each casino's licensing credentials,
                ensuring they operate under strict regulatory frameworks from reputable authorities. This includes
                verifying their adherence to data protection laws, robust encryption protocols (such as SSL), and fair
                gaming practices. Our recommendations are exclusively for platforms that demonstrate an unwavering
                commitment to player security and responsible conduct, providing you with peace of mind.
              </p>
            </div>

            {/* Section 2: Bonus Evaluation */}
            <div>
              <h3 className="text-2xl font-bold text-gold-400 mb-3">Comprehensive Bonus Value Analysis</h3>
              <p className="text-gray-300">
                Understanding the true value of casino bonuses can be complex. Our experts meticulously dissect every
                promotional offer, from generous welcome packages to ongoing loyalty rewards and free spin promotions.
                We go beyond the headline figures to analyze the underlying terms and conditions, including wagering
                requirements, game contributions, and validity periods. Our goal is to highlight bonuses that offer
                genuine, transparent value specifically tailored for Irish players, helping you maximize your playing
                potential.
              </p>
            </div>

            {/* Section 3: Platform Performance and User Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gold-400 mb-3">In-Depth Platform Performance Review</h3>
              <p className="text-gray-300">
                A superior online casino experience hinges on seamless platform performance and intuitive user interface
                design. We conduct thorough assessments covering game variety, the quality and diversity of software
                providers, mobile compatibility across various devices, and the efficiency of payment processing.
                Furthermore, we rigorously test customer support responsiveness and effectiveness, evaluating channels
                such as live chat, email, and phone support. This holistic approach ensures our reviews provide a
                complete and unbiased picture of each casino's operational excellence.
              </p>
            </div>

            {/* Section 4: Game Selection and Fairness */}
            <div>
              <h3 className="text-2xl font-bold text-gold-400 mb-3">Diverse Game Selection and Certified Fairness</h3>
              <p className="text-gray-300">
                The heart of any online casino is its game library. We evaluate the breadth and depth of available
                games, including popular slots, classic table games like blackjack and roulette, live dealer options,
                and specialty games. Crucially, we verify that all games are powered by reputable software providers and
                are regularly audited by independent third-party agencies (e.g., eCOGRA, iTech Labs) to ensure fairness
                and random outcomes. This commitment to certified fairness guarantees a trustworthy gaming environment.
              </p>
            </div>

            {/* Section 5: Payment Methods and Withdrawal Efficiency */}
            <div>
              <h3 className="text-2xl font-bold text-gold-400 mb-3">Secure Payment Methods and Swift Withdrawals</h3>
              <p className="text-gray-300">
                Convenient and secure banking options are paramount. We assess the range of available payment methods,
                including credit/debit cards, e-wallets (like PayPal, Skrill, Neteller), bank transfers, and prepaid
                cards, ensuring they are suitable for Irish players. A key aspect of our review process is evaluating
                withdrawal speeds and policies, looking for casinos that offer fast, hassle-free payouts with
                transparent terms and minimal fees.
              </p>
            </div>
          </div>
        </div>

        {/* Getting Started Section - simplified */}
        <div className="mt-16 max-w-4xl mx-auto bg-zinc-800/60 backdrop-blur-sm rounded-xl p-8 border border-zinc-700">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Getting Started with Irish Top Casino Guide
          </h3>
          <p className="text-gray-300 mb-6 text-center">
            Embark on your online casino journey with confidence by following our straightforward steps:
          </p>
          <ol className="space-y-4 text-gray-300 list-decimal list-inside">
            <li>
              <strong>Explore Our Curated List:</strong> Browse our meticulously reviewed list of top-rated, licensed
              online casinos tailored for the Irish market. Each entry provides a comprehensive overview to help you
              identify platforms that align with your preferences.
            </li>
            <li>
              <strong>Claim Exclusive Bonuses:</strong> Utilize our secure links to access exclusive welcome bonuses and
              promotions. We ensure these offers are vetted for transparency and genuine value, giving you an advantage
              from the start.
            </li>
            <li>
              <strong>Register and Set Limits:</strong> Follow the simple registration process on your chosen casino
              site. Crucially, set responsible gambling limits (deposit limits, loss limits, session limits) to ensure
              your gaming remains enjoyable and within your financial comfort zone.
            </li>
            <li>
              <strong>Begin Your Enhanced Journey:</strong> With your account set up and responsible limits in place,
              you are ready to explore a vast array of games, from thrilling slots to immersive live dealer experiences,
              all within a secure and fair environment.
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
