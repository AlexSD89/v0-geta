import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { UsecaseTabs } from "@/components/usecase-tabs"
import { LogoMarquee } from "@/components/logo-marquee"

const InstallOptions = dynamic(
  () => import("@/components/install-options").then((mod) => ({ default: mod.InstallOptions })),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
  },
)

const FAQ = dynamic(() => import("@/components/faq").then((mod) => ({ default: mod.FAQ })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
})

const FinalCTA = dynamic(() => import("@/components/final-cta").then((mod) => ({ default: mod.FinalCTA })), {
  loading: () => <div className="h-64 animate-pulse bg-muted/20" />,
})

const Footer = dynamic(() => import("@/components/footer").then((mod) => ({ default: mod.Footer })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <UsecaseTabs />
      <LogoMarquee />
      <InstallOptions />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
