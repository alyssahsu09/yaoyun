import { HeroSection } from "@/components/hero-section"
import { LeadForm } from "@/components/lead-form"
import { Services } from "@/components/services"
import { StickyFooter } from "@/components/sticky-footer"

export default function Home() {
  return (
    <>
      <main className="relative mx-auto flex min-h-screen max-w-md flex-col gap-10 px-5 pb-32 md:pb-16">
        <HeroSection />
        <Services />
        <LeadForm />

        {/* Footer */}
        <footer className="flex flex-col items-center gap-3 pt-8 pb-4 text-center">
          <div className="h-px w-20 bg-primary/10" />
          <p className="text-xs text-muted-foreground mt-3 tracking-wide">
            {"© 2026 許耀云 Alyssa | 永續策略顧問"}
          </p>
          <p className="text-[11px] text-muted-foreground/60 italic">
            {"剛柔並濟耀新局，永續賦能云水齊"}
          </p>
        </footer>
      </main>

      <StickyFooter />
    </>
  )
}
