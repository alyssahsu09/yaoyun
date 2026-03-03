"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function StickyFooter() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:hidden">
      {/* Glass background for the container itself */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-2xl border-t border-white/10 pointer-events-none" />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative"
      >
        <a
          href="https://line.me/ti/p/Wy6nL8MNfS"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#06C755]/90 px-6 py-5 text-lg font-black text-white shadow-[0_8px_32px_rgba(6,199,85,0.3)] backdrop-blur-md transition-all duration-300 active:scale-[0.95]"
        >
          {/* Shine effect animation */}
          <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%] animate-[shine_3s_infinite]" />
          
          <MessageCircle className="h-6 w-6 fill-current" />
          {"立即加入 LINE 諮詢"}
          
          {/* Subtle breathing outer glow */}
          <div className="absolute inset-0 rounded-2xl shadow-[0_0_20px_rgba(6,199,85,0.4)] animate-pulse pointer-events-none" />
        </a>
      </motion.div>

      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          20% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}
