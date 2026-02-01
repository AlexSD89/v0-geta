"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Code2 } from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"

// Live Ticker 数据
const tickerItems = [
  { type: "earning", skill: "PDF-Parser", amount: "$50", task: "#8921" },
  { type: "bounty", skill: "DeepSeek-Coder", prize: "$500", category: "Python" },
  { type: "earning", skill: "Legal-Check", amount: "$120", task: "#8934" },
  { type: "new", skill: "Video-Summarizer", author: "张三" },
  { type: "earning", skill: "SEO-Audit", amount: "$80", task: "#8956" },
]

function LiveTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tickerItems.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const item = tickerItems[currentIndex]

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/50">
      <span className="flex h-2 w-2 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-sm text-[#1d1d1f]"
        >
          {item.type === "earning" && (
            <>Skill <code className="px-1.5 py-0.5 bg-[#0071e3]/10 text-[#0071e3] rounded text-xs">{item.skill}</code> 刚刚赚取 <span className="font-semibold text-green-600">{item.amount}</span></>
          )}
          {item.type === "bounty" && (
            <>Skill <code className="px-1.5 py-0.5 bg-[#5856d6]/10 text-[#5856d6] rounded text-xs">{item.skill}</code> 赢得 {item.category} 悬赏 <span className="font-semibold text-[#5856d6]">{item.prize}</span></>
          )}
          {item.type === "new" && (
            <><span className="font-medium">{item.author}</span> 刚刚上架了新 Skill <code className="px-1.5 py-0.5 bg-[#0071e3]/10 text-[#0071e3] rounded text-xs">{item.skill}</code></>
          )}
        </motion.span>
      </AnimatePresence>
    </div>
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

  const [mode, setMode] = useState<"user" | "builder">("user")

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 py-32 sm:py-40 overflow-hidden bg-white"
    >
      <PremiumBackground />

      <motion.div style={{ opacity, y }} className="relative z-10 container-default text-center">
        {/* Live Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <LiveTicker />
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-[11vw] sm:text-[7vw] lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-balance">
            <span className="text-[#1d1d1f]">Gate OS:</span>
            <br />
            <span className="text-gradient-hero">Your AI General</span>
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
            用一句话调度 <span className="text-[#1d1d1f] font-medium">1,000+ AI Skills</span>
            <br className="hidden sm:block" />
            <span className="text-[#1d1d1f] font-medium">托管</span>、
            <span className="text-[#1d1d1f] font-medium">混搭</span>、
            <span className="text-[#1d1d1f] font-medium">共治</span> — 消费即创造
          </p>
        </motion.div>

        {/* Role Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10"
        >
          <div className="inline-flex items-center p-1 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/50">
            <button
              onClick={() => setMode("user")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                mode === "user"
                  ? "bg-white text-[#1d1d1f] shadow-sm"
                  : "text-[#86868b] hover:text-[#1d1d1f]"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              我需要结果
            </button>
            <button
              onClick={() => setMode("builder")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                mode === "builder"
                  ? "bg-white text-[#1d1d1f] shadow-sm"
                  : "text-[#86868b] hover:text-[#1d1d1f]"
              }`}
            >
              <Code2 className="w-4 h-4" />
              我想要变现
            </button>
          </div>
        </motion.div>

        {/* CTA Buttons - Dynamic based on mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <AnimatePresence mode="wait">
            {mode === "user" ? (
              <motion.div
                key="user-cta"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Button
                  size="lg"
                  className="btn-gradient h-14 px-10 text-[17px] shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a href="/solutions-market" className="flex items-center gap-2">
                    浏览 Skill 市场
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-14 px-10 text-[17px] rounded-full text-[#0071e3] hover:bg-[#0071e3]/5 transition-all duration-200"
                  asChild
                >
                  <a href="/tutorial">快速上手指南</a>
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="builder-cta"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Button
                  size="lg"
                  className="btn-gradient h-14 px-10 text-[17px] shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a href="/creator-studio" className="flex items-center gap-2">
                    进入创作者工作室
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-14 px-10 text-[17px] rounded-full text-[#0071e3] hover:bg-[#0071e3]/5 transition-all duration-200"
                  asChild
                >
                  <a href="/docs/upload-skill">上传 Skill 教程</a>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#1d1d1f]">1,000+</div>
            <div className="text-sm text-[#86868b] mt-1">AI Skills</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#1d1d1f]">50+</div>
            <div className="text-sm text-[#86868b] mt-1">垂直行业</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#1d1d1f]">99.9%</div>
            <div className="text-sm text-[#86868b] mt-1">可靠性</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
