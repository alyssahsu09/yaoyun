"use client"

import { motion } from "framer-motion"
import { Leaf, Package, Handshake } from "lucide-react"

const expertiseItems = [
  {
    icon: Leaf,
    title: "組織碳盤查",
    standard: "ISO 14064-1",
  },
  {
    icon: Package,
    title: "產品碳足跡",
    standard: "ISO 14067",
  },
  {
    icon: Handshake,
    title: "企業資源整合策略",
    standard: "ESG 策略規劃",
  },
]

export function Expertise() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <h2 className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-warm-gray">
        {"專業領域"}
      </h2>
      <div className="glass-card p-7">
        <div className="flex flex-col gap-6">
          {expertiseItems.map((item) => (
            <div key={item.title} className="flex items-center gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/12">
                <item.icon className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="text-sm text-white/50 mt-0.5">{item.standard}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
