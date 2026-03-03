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
      <h2 className="mb-6 text-center text-xs font-black uppercase tracking-[0.3em] text-charcoal/60">
        {"專業領域 — Expertise"}
      </h2>
      <div className="glass-card p-8">
        <div className="flex flex-col gap-8">
          {expertiseItems.map((item) => (
            <div key={item.title} className="flex items-center gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <item.icon className="h-6 w-6 text-gold shadow-lg" />
              </div>
              <div>
                <p className="text-xl font-black text-white mb-1">{item.title}</p>
                <p className="text-lg text-white/95 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
