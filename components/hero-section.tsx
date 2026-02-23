"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center gap-8 pt-16 pb-4 md:gap-10 md:pt-24">
      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-full bg-teal/12 blur-2xl" />
        <div className="relative h-36 w-36 overflow-hidden rounded-full shadow-2xl shadow-teal/20 ring-[3px] ring-white/80 md:h-44 md:w-44">
          <Image
            src="/images/alyssa-profile.jpg"
            alt="許耀云 Alyssa 個人照"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </motion.div>

      {/* Name with Ambient Golden Glow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative flex flex-col items-center gap-3"
      >
        {/* Golden glow behind name */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-72 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 75%)",
          }}
        />
        
        {/* Name Style: Softer and more delicate */}
        <h1 className="relative text-5xl font-light tracking-[0.2em] text-charcoal/90 font-serif md:text-6xl">
          {"許耀云"}
        </h1>
        
        <p className="relative text-lg font-medium tracking-[0.4em] text-teal/60 md:text-xl uppercase">
          Alyssa
        </p>
        
        {/* Updated Title Style: Bold for better emphasis */}
        <p className="relative mt-2 text-sm font-bold tracking-[0.15em] text-charcoal md:text-base">
          {"永續策略顧問 | 科技供應鏈減碳專家"}
        </p>
      </motion.div>

      {/* Slogan */}
      <motion.blockquote
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center font-serif text-lg leading-relaxed tracking-widest text-teal/70 font-light italic md:text-xl"
      >
        {"「剛柔並濟耀新局，永續賦能云水齊」"}
      </motion.blockquote>
    </section>
  )
}
