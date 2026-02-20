"use client"

import { motion } from "framer-motion"
import { FileDown, Landmark, ExternalLink } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 1.0 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export function ResourceLinks() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95 }}
        className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-warm-gray"
      >
        {"資源中心"}
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4"
      >
        {/* Priority Gold Card */}
        <motion.a
          variants={itemVariants}
          href="https://www.cca.gov.tw/affairs/carbon-fee-fund/2301.htmlf"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card glass-card-hover group flex items-center gap-4 p-6"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/12">
            <FileDown className="h-5 w-5 text-gold" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base font-semibold text-white truncate">{"2026 碳費應對指南"}</p>
            <p className="text-sm text-white/50 mt-0.5">{"環境部氣候變遷署"}</p>
          </div>
          <ExternalLink className="h-4 w-4 shrink-0 text-charcoal/30 transition-colors group-hover:text-charcoal/60" />
        </motion.a>

        {/* Policy Glass Card */}
        <motion.a
          variants={itemVariants}
          href="https://www.fsc.gov.tw/ch/home.jsp?id=310&parentpath=0%2C2"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card glass-card-hover group flex items-center gap-4 p-6"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/12">
            <Landmark className="h-5 w-5 text-gold" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base font-semibold text-white truncate">{"金管會重大政策"}</p>
            <p className="text-sm text-white/50 mt-0.5">{"金融監督管理委員會"}</p>
          </div>
          <ExternalLink className="h-4 w-4 shrink-0 text-white/25 transition-colors group-hover:text-gold" />
        </motion.a>
      </motion.div>
    </section>
  )
}
