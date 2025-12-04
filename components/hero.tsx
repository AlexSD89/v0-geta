"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function PremiumBackground() {
  const particles = [
    { top: "10%", left: "8%", size: 3, color: "rgba(0, 113, 227, 0.15)" },
    { top: "25%", left: "12%", size: 5, color: "rgba(88, 86, 214, 0.12)" },
    { top: "45%", left: "6%", size: 3, color: "rgba(0, 113, 227, 0.12)" },
    { top: "65%", left: "14%", size: 4, color: "rgba(88, 86, 214, 0.1)" },
    { top: "85%", left: "10%", size: 3, color: "rgba(0, 113, 227, 0.08)" },
    { top: "15%", left: "88%", size: 4, color: "rgba(88, 86, 214, 0.1)" },
    { top: "30%", left: "92%", size: 3, color: "rgba(0, 113, 227, 0.12)" },
    { top: "50%", left: "85%", size: 5, color: "rgba(88, 86, 214, 0.08)" },
    { top: "70%", left: "90%", size: 3, color: "rgba(0, 113, 227, 0.1)" },
    { top: "12%", left: "75%", size: 3, color: "rgba(88, 86, 214, 0.1)" },
    { top: "35%", left: "70%", size: 3, color: "rgba(0, 113, 227, 0.08)" },
    { top: "55%", left: "72%", size: 4, color: "rgba(88, 86, 214, 0.08)" },
    { top: "20%", left: "45%", size: 4, color: "rgba(0, 113, 227, 0.08)" },
    { top: "40%", left: "52%", size: 5, color: "rgba(88, 86, 214, 0.06)" },
    { top: "60%", left: "48%", size: 3, color: "rgba(0, 113, 227, 0.1)" },
  ]

  const connections: Array<{ from: number; to: number }> = []
  particles.forEach((p1, i) => {
    particles.forEach((p2, j) => {
      if (i < j) {
        const dx = Number.parseFloat(p2.left) - Number.parseFloat(p1.left)
        const dy = Number.parseFloat(p2.top) - Number.parseFloat(p1.top)
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 25) {
          connections.push({ from: i, to: j })
        }
      }
    })
  })

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-white to-white" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-br from-[#0071e3]/5 via-[#5856d6]/5 to-transparent rounded-full blur-[100px]" />

      <svg className="absolute inset-0 w-full h-full">
        {connections.map(({ from, to }, i) => (
          <line
            key={i}
            x1={`${Number.parseFloat(particles[from].left)}%`}
            y1={`${Number.parseFloat(particles[from].top)}%`}
            x2={`${Number.parseFloat(particles[to].left)}%`}
            y2={`${Number.parseFloat(particles[to].top)}%`}
            stroke="rgba(0, 113, 227, 0.06)"
            strokeWidth="1"
            className="animate-pulse-soft"
            style={{ animationDuration: "4s", animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>

      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              top: particle.top,
              left: particle.left,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${8 + (i % 4) * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 py-20 sm:py-28 overflow-hidden bg-white">
      <PremiumBackground />

      <div className="relative z-10 container-default text-center">
        <div className="mb-6 animate-fade-in-up">
          <span className="tag-gradient">Gate 支持知识即服务</span>
        </div>

        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="heading-hero text-balance">
            让 Gate 为您的知识
            <br />
            <span className="text-gradient-hero">自动工作</span>
          </h1>
        </div>

        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="subtitle-hero mx-auto text-balance max-w-3xl">
            Gate <span className="text-[#1d1d1f] font-medium">封装业务知识</span>，
            <span className="text-[#1d1d1f] font-medium">编排全球 AI 能力</span>
            <br className="hidden sm:block" />
            为您构建<span className="text-[#1d1d1f] font-medium">自动化</span>、
            <span className="text-[#1d1d1f] font-medium">低成本</span>的专属 AI 业务系统
          </p>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex items-center gap-3">
            <div className="icon-container">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-[#1d1d1f]">10分钟上手</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="icon-container">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-[#1d1d1f]">本地执行</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="icon-container">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-[#1d1d1f]">持续更新</span>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.35s" }}
        >
          <Button size="lg" className="btn-gradient h-12 px-8 text-[17px]" asChild>
            <a href="/start" className="flex items-center gap-2">
              免费开始使用
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="h-12 px-8 text-[17px] rounded-full text-[#0071e3] hover:bg-[#0071e3]/5 transition-all duration-200"
            asChild
          >
            <a href="/tutorial">查看安装教程</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
