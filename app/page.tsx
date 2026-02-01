"use client"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { UsecaseTabs } from "@/components/usecase-tabs"
import { LogoMarquee } from "@/components/logo-marquee"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      {/* 热门技能展示 */}
      <UsecaseTabs />
      {/* 合作伙伴 */}
      <LogoMarquee />
      {/* 常见问题 */}
      <FAQ />
      {/* 底部 CTA */}
      <FinalCTA />
      <Footer />
    </main>
  )
}
