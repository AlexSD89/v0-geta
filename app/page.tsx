import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { UsecaseTabs } from "@/components/usecase-tabs"
import { LogoMarquee } from "@/components/logo-marquee"
import { GateArchitectureTree } from "@/components/gate-architecture-tree"
import { InstallOptions } from "@/components/install-options"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <UsecaseTabs />
      <LogoMarquee />
      <GateArchitectureTree />
      <InstallOptions />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
