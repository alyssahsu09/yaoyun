"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock } from "lucide-react"

const achievements = [
  {
    icon: Award,
    title: "DJSI 全球前 10 名",
    desc: "輔導企業入選國際評鑑",
  },
  {
    icon: Users,
    title: "30+ 企業輔導",
    desc: "跨兩岸供應鏈減碳實戰",
  },
  {
    icon: Clock,
    title: "5 年+ 專業資歷",
    desc: "深耕企業資源整合",
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
        className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-warm-gray"
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
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/12">
              <a.icon className="h-6 w-6 text-gold" />
            </div>
            <div>
              <p className="text-base font-bold text-white">{a.title}</p>
              <p className="text-sm text-white/55 mt-0.5">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
