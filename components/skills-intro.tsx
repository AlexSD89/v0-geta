"use client"

import { motion } from "framer-motion"
import { Sparkles, Rocket, Code2, ArrowRight } from "lucide-react"

const introCards = [
  {
    icon: Sparkles,
    title: "什么是 Skill?",
    description: "了解 Skills 如何自动化你的工作流程",
    href: "/about#what-is-skill",
  },
  {
    icon: Rocket,
    title: "快速开始",
    description: "1 分钟内安装并运行现成的 Skills",
    href: "/docs/getting-started",
  },
  {
    icon: Code2,
    title: "创建 Skill",
    description: "学习如何构建并分享你的自定义 Skill",
    href: "/docs/create-skill",
  },
]

export function SkillsIntro() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-[#1d1d1f]">刚接触 Skills?</h2>
          <p className="text-[#86868b] mt-2">你需要知道的一切</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {introCards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-white rounded-2xl border border-[#d2d2d7]/50 hover:border-[#0071e3]/30 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0071e3]/10 flex items-center justify-center mb-4 group-hover:bg-[#0071e3]/20 transition-colors">
                <card.icon className="w-5 h-5 text-[#0071e3]" />
              </div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#0071e3] transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-[#86868b] leading-relaxed">{card.description}</p>
              <div className="mt-4 flex items-center text-sm text-[#0071e3] opacity-0 group-hover:opacity-100 transition-opacity">
                了解更多
                <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
