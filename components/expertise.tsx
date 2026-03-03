"use client"

import { motion } from "framer-motion"
import { Leaf, FileCheck, Database } from "lucide-react"

const expertiseItems = [
  {
    icon: Leaf,
    title: "供應鏈減碳",
    desc: "範疇三排放管理、RBA 風險評估與供應商輔導",
  },
  {
    icon: FileCheck,
    title: "國際標準認證",
    desc: "ISO 14064-1 領先稽核員、ISO 14067 內部稽核員",
  },
  {
    icon: Database,
    title: "數位永續整合",
    desc: "Python 數據分析、ESG 自動化數據管線與數位轉型",
  },
]

export function Expertise() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <h2 className="mb-6 text-center text-sm font-bold uppercase tracking-[0.25em] text-charcoal">
        {"專業領域"}
      </h2>
      <div className="glass-card p-7">
        <div className="flex flex-col gap-6">
          {expertiseItems.map((item) => (
            <div key={item.title} className="flex items-center gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20">
                <item.icon className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-base font-bold text-white">{item.title}</p>
                <p className="text-sm text-white/90 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
