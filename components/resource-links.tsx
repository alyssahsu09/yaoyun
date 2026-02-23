"use client"

import { motion } from "framer-motion"
import { Linkedin, FileCheck, ExternalLink } from "lucide-react"

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
        className="mb-6 text-center text-sm font-bold uppercase tracking-[0.25em] text-charcoal"
      >
        {"專業連結"}
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4"
      >
        {/* LinkedIn Card - Updated with user provided link */}
        <motion.a
          variants={itemVariants}
          href="https://www.linkedin.com/public-profile/settings"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card glass-card-hover group flex items-center gap-4 p-6 border-2 border-white/30"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/30 shadow-inner">
            <Linkedin className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base font-black text-white truncate">{"LinkedIn 個人檔案"}</p>
            <p className="text-sm text-white/90 mt-0.5 font-medium">{"點擊與我建立專業聯繫"}</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-gold transition-colors">
            <ExternalLink className="h-4 w-4 text-white" />
          </div>
        </motion.a>

        {/* Certification Card */}
        <motion.div
          variants={itemVariants}
          className="glass-card group flex items-center gap-4 p-6 opacity-90"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20">
            <FileCheck className="h-5 w-5 text-gold" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base font-bold text-white truncate">{"專業證照"}</p>
            <p className="text-sm text-white/80 mt-0.5">{"ISO 14064-1 Lead Auditor / ISO 14067"}</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
