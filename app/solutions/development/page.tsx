"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Code2, GitBranch, Bug } from "lucide-react"

export default function DevelopmentSolutionPage() {
  const challenges = [
    {
      icon: Bug,
      title: "AI 代码几乎正确",
      stat: "66%",
      description: "开发者发现AI生成的代码需要大量调试时间",
    },
    {
      icon: Code2,
      title: "缺少项目上下文",
      stat: "63%",
      description: "AI工具缺少代码库和团队知识上下文",
    },
    {
      icon: GitBranch,
      title: "复杂任务处理差",
      stat: "45%",
      description: "AI在处理复杂任务时表现不佳",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        <section className="section-spacing-lg px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f7] via-background to-background pointer-events-none" />
          <div className="container-default text-center relative z-10">
            <h1 className="heading-hero mb-6">
              让 AI 成为你的
              <br />
              <span className="text-[#0071e3]">开发伙伴</span>
            </h1>

            <p className="subtitle-hero mx-auto mb-10">
              告别"几乎正确"的AI代码，让Gate理解你的代码库上下文，生成真正可用的代码
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-12 px-8 rounded-full bg-[#1d1d1f] text-white hover:bg-[#1d1d1f]/90 transition-colors active:scale-[0.98]"
                asChild
              >
                <a href="/tutorial">
                  免费开始
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-12 px-8 rounded-full text-[#0071e3] hover:bg-[#0071e3]/5 transition-colors"
                asChild
              >
                <a href="/contact">联系我们</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="section-spacing px-4 sm:px-6 bg-[#f5f5f7]">
          <div className="container-wide">
            <h2 className="heading-section text-center mb-12">开发者面临的核心挑战</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((challenge) => {
                const Icon = challenge.icon
                return (
                  <Card key={challenge.title} className="card-base card-hover p-6 lg:p-8 bg-white shadow-sm">
                    <Icon className="w-10 h-10 text-[#0071e3] mb-4" strokeWidth={1.5} />
                    <div className="text-4xl font-bold text-[#0071e3] mb-2">{challenge.stat}</div>
                    <h3 className="heading-card mb-3">{challenge.title}</h3>
                    <p className="body-text">{challenge.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
