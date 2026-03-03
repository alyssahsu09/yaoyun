"use client"

import { motion } from "framer-motion"
import { Layers, ShieldCheck, Zap } from "lucide-react"

const achievements = [
  {
    icon: Layers,
    title: "跨產業 ESG 整合",
    desc: "輔導 20+ 企業客戶，涵蓋科技、金融、製造及生技，打造全方位永續競爭力",
  },
  {
    icon: ShieldCheck,
    title: "100% 供應鏈合規",
    desc: "管理數百家全球供應商，達成 100% 行為準則簽署",
  },
  {
    icon: Zap,
    title: "雙軸轉型實踐",
    desc: "結合數位技術與綠色轉型，建立端到端碳管理能力",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.6 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export function Achievements() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="mb-6 text-center text-xs font-black uppercase tracking-[0.3em] text-charcoal/60"
      >
        {"核心實績 — Achievements"}
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-5"
      >
        {achievements.map((a) => (
          <motion.div
            key={a.title}
            variants={itemVariants}
            className="glass-card glass-card-hover group flex items-center gap-6 p-7"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <a.icon className="h-7 w-7 text-gold drop-shadow-lg" />
            </div>
            <div>
              <p className="text-xl font-black text-white mb-1">{a.title}</p>
              <p className="text-lg text-white/95 font-medium leading-relaxed">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
