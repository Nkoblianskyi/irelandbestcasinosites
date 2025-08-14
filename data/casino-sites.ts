export interface CasinoSite {
  reviews: number
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  features: string[]
  paymentMethods: string[]
  link: string
}


export const casinoSites: CasinoSite[] = [
  {
    id: "mr-play",
    name: "Mr.Play",
    logo: "/mrplay.png",
    score: 4.8,
    bonus: "100% up to €200 + 20 EXTRA SPINS",
    features: ["Casino & Sports", "Irish Market", "Simple UX"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://qualityboost.top/X4HRDp1p",
    reviews: 8743,
  },
  {
    id: "betvictor",
    name: "BetVictor",
    logo: "/betvictor.png",
    score: 4.7,
    bonus: "Bet €10 Get €30 + 30 Free Spins",
    features: ["Competitive Odds", "Cash Out", "Bet Builder"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://qualityboost.top/wtcwZ279",
    reviews: 7892,
  },
  {
    id: "betiton",
    name: "Betiton",
    logo: "/betiton.png",
    score: 4.6,
    bonus: "100% up to €500 + 150 Spins",
    features: ["Irish Focus", "Best Prices", "Mobile App"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betiton.com/en-ie/",
    reviews: 6521,
  },
  {
    id: "midnite",
    name: "Midnite",
    logo: "/mid.svg",
    score: 4.5,
    bonus: "Bet €20 Get 100 Free Spins",
    features: ["Esports Focus", "Modern Interface", "Fast Withdrawals"],
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://www.midnite.com/",
    reviews: 5834,
  },
  {
    id: "betfred",
    name: "BetFred",
    logo: "/betfred.png",
    score: 4.4,
    bonus: "Bet €10 Get 200 Free Spins",
    features: ["Fast Payouts", "Best Odds", "Live Streaming"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://qualityboost.top/Qf9fryTn",
    reviews: 4967,
  },
  {
    id: "boylesports-games",
    name: "BoyleSports Games",
    logo: "/boylesports.png",
    score: 4.3,
    bonus: "Bet €10 Get €60 Casino Bonus",
    features: ["Irish Owned", "GAA Specials", "Local Support"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://qualityboost.top/VdyVNDBr",
    reviews: 3756,
  },
]
