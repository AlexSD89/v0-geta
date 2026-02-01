"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Trophy, Plus, Heart, Github } from "lucide-react"
import { motion } from "framer-motion"

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
  return (
    <>
      {/* Full-width Ticker - 在导航栏下方 */}
      <div className="fixed top-12 left-0 right-0 z-40">
        <FullWidthTicker />
      </div>

      {/* Hero Section - Lawvable Style */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
              >
                <span className="text-[#1d1d1f]">The Ultimate</span>
                <br />
                <span className="text-gradient-hero">Agent Skills</span>{" "}
                <span className="text-[#1d1d1f]">交易所</span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg sm:text-xl text-[#86868b] mb-8 leading-relaxed"
              >
                发现由专业开发者构建的可复用 AI 自动化。
                <br />
                即刻在 <span className="font-medium text-[#1d1d1f]">Claude</span>、
                <span className="font-medium text-[#1d1d1f]">ChatGPT</span>、
                <span className="font-medium text-[#1d1d1f]">Cursor</span> 中使用。
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <Button 
                  size="lg" 
                  className="h-12 px-8 text-base rounded-xl bg-[#ff6b4a] hover:bg-[#ff5a39] text-white shadow-lg shadow-[#ff6b4a]/20"
                  asChild
                >
                  <a href="/market" className="flex items-center gap-2">
                    浏览 Skills
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-12 px-8 text-base rounded-xl border-2 border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white bg-transparent"
                  asChild
                >
                  <a href="/about">什么是 Skill?</a>
                </Button>
              </motion.div>

              {/* GitHub Style Repo Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-[#1d1d1f] text-white w-fit"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-mono">gate-ai/awesome-skills</span>
              </motion.div>
            </div>

            {/* Right: Visual Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              {/* AI Agent Node */}
              <div className="absolute top-0 right-0 bg-white border-2 border-[#d2d2d7] rounded-2xl px-6 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500"></div>
                  <span className="font-semibold text-[#1d1d1f]">AI Agent</span>
                </div>
              </div>

              {/* Skills Integration Visual */}
              <div className="mt-24 space-y-4">
                {/* Skill Card 1 */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-4 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                      <span className="text-lg">📄</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-orange-600">name:</span>
                        <span className="text-sm font-mono text-[#1d1d1f]">pdf-parser</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-medium text-orange-600">description:</span>
                        <span className="text-xs text-[#86868b] line-clamp-2">
                          Parse PDF documents with OCR support...
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skill Card 2 - Placeholder */}
                <div className="border-2 border-dashed border-[#d2d2d7] rounded-xl p-4 flex items-center justify-center h-24">
                  <span className="text-4xl text-[#d2d2d7]">+</span>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute top-16 right-12 w-32 h-32 pointer-events-none" viewBox="0 0 100 100">
                <path 
                  d="M 50 10 Q 50 50, 10 50" 
                  stroke="#ff6b4a" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
