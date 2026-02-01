"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Trophy, Plus, Heart, HelpCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

// Live Ticker 数据 - 全宽滚动
const tickerItems = [
  { icon: Zap, text: "Skill `PDF-Parser` 刚刚在任务 #8921 中赚取了 $50", color: "text-yellow-400" },
  { icon: Trophy, text: "Skill `DeepSeek-Coder` 赢得了 Python 赏金挑战 ($500)", color: "text-yellow-400" },
  { icon: Zap, text: "新 SaaS 工具 `Bolt.new` 集成现已上线!", color: "text-green-400" },
  { icon: Heart, text: "用户 `Sarah_99` 收藏了 `Legal-Check` Skill", color: "text-pink-400" },
  { icon: Plus, text: "创作者 `张三` 上架了新 Skill `Video-Summarizer`", color: "text-blue-400" },
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

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("")
  const [mode, setMode] = useState<"user" | "dev">("user")

  React.useEffect(() => {
    const handleRoleChange = (e: CustomEvent) => {
      setMode(e.detail.mode)
    }
    window.addEventListener('roleChanged', handleRoleChange as EventListener)
    return () => window.removeEventListener('roleChanged', handleRoleChange as EventListener)
  }, [])

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

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0071e3]/30 bg-[#0071e3]/5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0071e3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071e3]"></span>
              </span>
              <span className="text-sm text-[#0071e3] font-medium">Gate Skills 市场 v3.0 已上线</span>
            </div>
          </motion.div>

          {/* Main Headline - 类似 Lawvable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="text-[#1d1d1f]">The Ultimate</span>
              <br />
              <span className="text-gradient-hero">Agent Skills</span>{" "}
              <span className="text-[#1d1d1f]">交易所</span>
            </h1>
          </motion.div>

          {/* Sub-headline - 根据角色变化 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            {mode === "user" ? (
              <p className="text-lg sm:text-xl text-[#86868b] mx-auto max-w-2xl leading-relaxed italic">
                发现并使用专业开发者构建的 AI Agent Skills。
                <br className="hidden sm:block" />
                即刻在{" "}
                <span className="not-italic font-medium text-[#0071e3]">Claude Code</span>、
                <span className="not-italic font-medium text-[#0071e3]">Cursor</span> 或任何{" "}
                <span className="not-italic font-medium text-[#0071e3]">Terminal & IDE</span>{" "}
                <span className="not-italic">中使用。</span>
              </p>
            ) : (
              <p className="text-lg sm:text-xl text-[#86868b] mx-auto max-w-2xl leading-relaxed italic">
                托管你的 Skills，获得被动收入。
                <br className="hidden sm:block" />
                加入{" "}
                <span className="not-italic font-medium text-[#ff6b4a]">1000+</span>{" "}
                <span className="not-italic">开发者，开始在 Gate 平台上</span>{" "}
                <span className="not-italic font-medium text-[#ff6b4a]">赚取收益</span>
                <span className="not-italic">。</span>
              </p>
            )}
          </motion.div>

          {/* CTA Buttons - 根据角色变化 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            {mode === "user" ? (
              <>
                <Button 
                  size="lg" 
                  className="h-12 px-8 text-base rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium shadow-lg transition-all" 
                  asChild
                >
                  <a href="/market" className="flex items-center gap-2">
                    浏览 Skills
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full border-2 border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white bg-transparent font-medium" asChild>
                  <a href="/about" className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    什么是 Skill?
                  </a>
                </Button>
              </>
            ) : (
              <>
                <Button 
                  size="lg" 
                  className="h-12 px-8 text-base rounded-full bg-[#ff6b4a] hover:bg-[#ff5a39] text-white font-medium shadow-lg transition-all" 
                  asChild
                >
                  <a href="/creators" className="flex items-center gap-2">
                    开始创作
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full border-2 border-[#ff6b4a] text-[#ff6b4a] hover:bg-[#ff6b4a] hover:text-white bg-transparent font-medium" asChild>
                  <a href="/creators#revenue">查看收益</a>
                </Button>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
