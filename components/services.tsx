"use client"

import { motion } from "framer-motion"
import { Leaf, Package, Handshake, Award, Users, Clock } from "lucide-react"

const services = [
  {
    icon: Leaf,
    title: "組織碳盤查與產品碳足跡",
    desc: "遵循 ISO 14064-1 和 ISO 14067 標準，助您全面掌握碳排放狀況。",
  },
  {
    icon: Handshake,
    title: "永續策略與資源整合",
    desc: "規劃企業專屬 ESG 策略，整合內外部資源，提升永續競爭力。",
  },
  {
    icon: Award,
    title: "國際評比與報告書輔導",
    desc: "輔導企業應對 DJSI 等國際評比，並產出高品質永續報告書。",
  },
]

const stats = [
    {
        value: "30+",
        label: "企業輔導經驗",
    },
    {
        value: "5年+",
        label: "專業顧問資歷",
    },
    {
        value: "Top 10",
        label: "DJSI 評比實績",
    },
]


export function Services() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
        <h2 className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            {"核心服務與實績"}
        </h2>
        <div className="glass-card glass-card-hover p-8">
            <div className="flex flex-col gap-8">
                {services.map((service) => (
                    <div key={service.title} className="flex items-start gap-5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/12">
                            <service.icon className="h-5 w-5 text-white/90" />
                        </div>
                        <div>
                            <p className="text-xl font-black text-white mb-2">{service.title}</p>
                            <p className="text-lg text-white/95 font-medium leading-relaxed">{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="my-10 h-px w-full bg-white/20" />
            
            <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map((stat) => (
                    <div key={stat.label}>
                        <p className="text-3xl font-black text-gold mb-1">{stat.value}</p>
                        <p className="text-sm text-white/80 font-bold uppercase tracking-widest">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </motion.section>
  )
}
