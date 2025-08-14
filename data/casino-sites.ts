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

// Базові дані казино з нового зображення
const baseCasinoSites: Omit<CasinoSite, "reviews" | "score" | "id" | "features" | "paymentMethods">[] = [
  {
    name: "Mr.Play",
    logo: "/mrplay.png",
    bonus: "100% up to €200 + 20 EXTRA SPINS",
    link: "https://qualityboost.top/X4HRDp1p",
  },
  {
    name: "BetVictor",
    logo: "/betvictor.png",
    bonus: "Bet €10 Get €30 + 30 Free Spins",
    link: "https://qualityboost.top/wtcwZ279",
  },
  {
    name: "Betiton",
    logo: "/betiton.png",
    bonus: "100% up to €500 + 150 Spins",
    link: "https://www.betiton.com/en-ie/sport/",
  },
  {
    name: "Midnite",
    logo: "/mid.svg",
    bonus: "Bet €20 Get 100 Free Spins",
    link: "https://qualityboost.top/F4RQFdWr",
  },
  {
    name: "BetFred",
    logo: "/betfred.png",
    bonus: "Bet €10 Get 200 Free Spins",
    link: "https://qualityboost.top/Qf9fryTn",
  },
  {
    name: "BoyleSports Games",
    logo: "/boyle.png",
    bonus: "Bet €10 Get €60 Casino Bonus",
    link: "https://qualityboost.top/VdyVNDBr",
  },
]

// Функція для генерації випадкового числа в діапазоні
function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min
}

// Функція для генерації випадкового цілого числа (не круглого)
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Генеруємо випадкові рейтинги та відгуки, потім сортуємо
export const casinoSites: CasinoSite[] = baseCasinoSites
  .map((site) => {
    // Рейтинг від 3.7 до 4.9 з одним десятковим знаком (не круглі числа)
    const score = Number.parseFloat(getRandomArbitrary(3.7, 4.9).toFixed(1))
    // Відгуки від 1247 до 9876 (не круглі числа)
    const reviews = getRandomInt(1247, 9876)

    return {
      ...site,
      id: site.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""), // Генеруємо slug-id
      score,
      reviews,
      features: [], // Залишаємо порожніми
      paymentMethods: [], // Залишаємо порожніми
    }
  })
  .sort((a, b) => b.score - a.score) // Сортуємо за рейтингом у спадному порядку
