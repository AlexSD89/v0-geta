"use client"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { PlatformComparison } from "@/components/platform-comparison"
import { SkillsIntro } from "@/components/skills-intro"
import { SkillsShowcase } from "@/components/skills-showcase"
import { SkillsHowItWorks } from "@/components/skills-how-it-works"
import { CreatorCTA } from "@/components/creator-cta"
import { LogoMarquee } from "@/components/logo-marquee"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      {/* 刚接触 Skills? */}
      <SkillsIntro />
      {/* 今日可用 Skills */}
      <SkillsShowcase />
      {/* 如何使用 */}
      <SkillsHowItWorks />
      {/* 完整的 AI Skills 生态系统: Gate 平台 vs Gate AI */}
      <PlatformComparison />
      {/* 创作者 CTA */}
      <CreatorCTA />
      {/* 合作伙伴 */}
      <LogoMarquee />
      <Footer />
    </main>
  )
}
