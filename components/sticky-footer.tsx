"use client"

import { Mail } from "lucide-react"

export function StickyFooter() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:hidden bg-beige/80 backdrop-blur-xl">
      <a
        href="mailto:alyssahsu09@gmail.com"
        className="flex items-center justify-center gap-2.5 rounded-2xl bg-gold px-6 py-4 text-base font-bold text-charcoal shadow-lg shadow-gold/20 transition-all duration-300 active:scale-[0.98]"
      >
        <Mail className="h-5 w-5" />
        {"立即聯繫 Alyssa"}
      </a>
    </div>
  )
}
