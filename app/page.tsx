import { HeroSection } from "@/components/hero-section"
import { Services } from "@/components/services"
import { Expertise } from "@/components/expertise"
import { Achievements } from "@/components/achievements"
import { CopyEmail } from "@/components/copy-email"
import { LeadForm } from "@/components/lead-form"
import { StickyFooter } from "@/components/sticky-footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <main className="relative mx-auto flex min-h-screen max-w-md flex-col gap-12 px-5 pb-32 md:pb-16">
        {/* Profile & Intro */}
        <HeroSection />
        
        {/* Expertise Grid */}
        <Expertise />

        {/* Core Services */}
        <Services />

        {/* Major Achievements */}
        <Achievements />

        {/* Pricing Link Button - Metallic Gold Theme */}
        <div className="flex justify-center -mt-4">
          <Link 
            href="/pricing" 
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold transition-all active:scale-95 text-charcoal shadow-[0_10px_20px_-5px_rgba(212,175,55,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] border border-[#C9A030]/50 relative overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #EAD2AC 0%, #D4AF37 45%, #C9A030 55%, #B8860B 100%)"
            }}
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <span className="relative z-10 flex items-center gap-2">
              查看服務費用 <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        {/* Contact: Email Copy */}
        <CopyEmail />

        {/* Lead Generation Form */}
        <div id="contact">
          <LeadForm />
        </div>

        {/* Footer */}
        <footer className="flex flex-col items-center gap-3 pt-8 pb-4 text-center">
          <div className="h-px w-20 bg-teal/20" />
          <p className="text-sm font-bold text-charcoal mt-3 tracking-wide">
            {"© 2026 許耀云 Alyssa | 永續策略顧問"}
          </p>
          <p className="text-xs text-teal font-serif font-medium italic">
            {"剛柔並濟耀新局，永續賦能云水齊"}
          </p>
        </footer>
      </main>

      <StickyFooter />
    </>
  )
}
