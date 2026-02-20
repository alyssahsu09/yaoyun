"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Mail, Copy, Check } from "lucide-react"

const EMAIL = "alyssahsu09@gmail.com"

export function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      toast.success("Email 已複製到剪貼簿！")
      setTimeout(() => setCopied(false), 2500)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="glass-card glass-card-hover p-7">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/12">
            <Mail className="h-5 w-5 text-white/80" />
          </div>
          <span className="text-sm font-medium text-white/60 tracking-wide">{"聯絡信箱"}</span>
        </div>
        <p className="mb-6 font-mono text-base text-white/90 break-all tracking-wide">{EMAIL}</p>
        <button
          onClick={handleCopy}
          className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gold px-5 py-3.5 text-base font-bold text-charcoal transition-all duration-300 hover:bg-gold-hover hover:shadow-lg hover:shadow-gold/25 active:scale-[0.98]"
        >
          {copied ? (
            <>
              <Check className="h-5 w-5" />
              {"已複製！"}
            </>
          ) : (
            <>
              <Copy className="h-5 w-5" />
              {"複製並聯繫 Alyssa"}
            </>
          )}
        </button>
      </div>
    </motion.section>
  )
}
