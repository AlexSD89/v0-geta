"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Code2, Search, Zap, Trophy, Plus, Heart } from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"

// Live Ticker 数据 - 全宽滚动
const tickerItems = [
  { icon: Zap, text: "技能 `PDF-Parser` 刚刚在任务 #8921 中赚取了 $50", color: "text-yellow-400" },
  { icon: Trophy, text: "技能 `DeepSeek-Coder` 赢得了 Python 赏金挑战 ($500)", color: "text-yellow-400" },
  { icon: Zap, text: "新 SaaS 工具 `Bolt.new` 集成现已上线!", color: "text-green-400" },
  { icon: Heart, text: "用户 `Sarah_99` 收藏了 `Legal-Check` 技能", color: "text-pink-400" },
  { icon: Plus, text: "创作者 `张三` 上架了新技能 `Video-Summarizer`", color: "text-blue-400" },
]

// 全宽深色 Ticker 滚动条
function FullWidthTicker() {
  return (
    <div className="w-full bg-[#1d1d1f] py-2.5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <div key={i} className="flex items-center gap-6 mx-8">
            <item.icon className={`w-4 h-4 ${item.color}`} />
            <span className="text-sm text-white/90">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function LiveTicker() {
  return (
    <FullWidthTicker />
  )
}

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

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-white to-white" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-br from-[#0071e3]/5 via-[#5856d6]/5 to-transparent rounded-full blur-[60px]" />
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
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/market?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <>
      {/* Full-width Ticker - 在导航栏下方 */}
      <div className="fixed top-12 left-0 right-0 z-40">
        <FullWidthTicker />
      </div>

      <section
        ref={ref}
        className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 pt-32 pb-20 overflow-hidden bg-white"
      >
        <PremiumBackground />

        <motion.div style={{ opacity, y }} className="relative z-10 container-default text-center max-w-4xl">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0071e3]/30 bg-[#0071e3]/5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0071e3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071e3]"></span>
              </span>
              <span className="text-sm text-[#0071e3] font-medium">Gate 技能市场 v3.0 已上线</span>
            </div>
          </motion.div>

          {/* Main Headline - 全中文 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-[10vw] sm:text-[6vw] lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-balance">
              <span className="text-[#1d1d1f]">Gate 帮你找到</span>
              <br />
              <span className="text-gradient-hero">关键技能</span>
            </h1>
          </motion.div>

          {/* Sub-headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <p className="text-lg sm:text-xl text-[#86868b] mx-auto text-balance max-w-2xl leading-relaxed">
              主动意图识别。Gate 不仅仅是市场，它是你的 <span className="text-[#1d1d1f] font-medium">AI 指挥官</span>。
              <br className="hidden sm:block" />
              只需一句话，自动调度全球顶尖的原子技能。
            </p>
          </motion.div>

          {/* Search Box - 核心交互 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <form onSubmit={handleSearch} className="flex items-center gap-3 max-w-xl mx-auto">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="输入指令 (例如: '帮我深度调研 R1 模型')..."
                  className="w-full h-14 pl-5 pr-14 rounded-full border border-[#d2d2d7] bg-white text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0071e3] text-white flex items-center justify-center hover:bg-[#0077ed] transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <a
                href="/market"
                className="hidden sm:flex h-14 px-6 items-center text-[15px] font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
              >
                浏览市场
              </a>
            </form>
          </motion.div>

          {/* Quick Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            <span className="text-sm text-[#86868b]">热门:</span>
            {["PDF 解析", "代码审查", "文案生成", "数据分析", "法律合规"].map((tag) => (
              <a
                key={tag}
                href={`/market?q=${encodeURIComponent(tag)}`}
                className="px-3 py-1.5 text-sm rounded-full bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#0071e3]/10 hover:text-[#0071e3] transition-colors"
              >
                {tag}
              </a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 pt-8 border-t border-[#d2d2d7]/30"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#1d1d1f]">1,000+</div>
              <div className="text-sm text-[#86868b] mt-1">AI 技能</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#1d1d1f]">50+</div>
              <div className="text-sm text-[#86868b] mt-1">垂直行业</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#1d1d1f]">$2M+</div>
              <div className="text-sm text-[#86868b] mt-1">创作者收入</div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
