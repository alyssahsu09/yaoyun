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
        className="mb-6 text-center text-sm font-bold uppercase tracking-[0.25em] text-charcoal"
      >
        {"核心實績"}
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-3"
      >
        {achievements.map((a) => (
          <motion.div
            key={a.title}
            variants={itemVariants}
            className="glass-card glass-card-hover group flex items-center gap-5 p-5"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20">
              <a.icon className="h-6 w-6 text-gold" />
            </div>
            <div>
              <p className="text-base font-bold text-white">{a.title}</p>
              <p className="text-sm text-white/90 mt-0.5 leading-relaxed">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
