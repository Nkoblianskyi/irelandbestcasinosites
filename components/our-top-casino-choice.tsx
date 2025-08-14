"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// FAQ data
const faqItems = [
  {
    question: "Is online gambling legal in Ireland?",
    answer:
      "Yes, online gambling is legal in Ireland, provided the operators are licensed by the relevant authorities. We only feature licensed and regulated casinos to ensure your safety and compliance.",
  },
  {
    question: "How do I choose the best online casino?",
    answer:
      "Consider factors like licensing, game variety, bonus terms, payment methods, and customer support. Our reviews provide in-depth analysis to help you make an informed decision.",
  },
  {
    question: "What are welcome bonuses and how do they work?",
    answer:
      "Welcome bonuses are promotional offers for new players, often including matched deposits or free spins. Always read the terms and conditions, especially wagering requirements, before claiming.",
  },
  {
    question: "Are my personal and financial details safe?",
    answer:
      "Reputable online casinos use advanced encryption technologies (like SSL) to protect your data. We prioritize casinos with strong security measures and privacy policies.",
  },
  {
    question: "What if I have a gambling problem?",
    answer:
      "If you or someone you know is struggling with gambling, please seek help. Organizations like GamCare, GambleAware, and GamblingCare.ie offer free and confidential support. We promote responsible gambling.",
  },
  {
    question: "Can I play casino games on my mobile device?",
    answer:
      "Most modern online casinos are fully optimized for mobile play, either through a dedicated app or a mobile-responsive website. You can enjoy a seamless experience on smartphones and tablets.",
  },
]

export function OurTopCasinoChoice() {
  return (
    <section className="py-12 md:py-16 bg-zinc-800/70 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Top Casino Choices FAQs</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-zinc-700">
              <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-gold-300 hover:no-underline hover:text-gold-400 transition-colors duration-200">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base md:text-lg py-4">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
