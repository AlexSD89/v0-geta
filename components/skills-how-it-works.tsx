"use client"

import { motion } from "framer-motion"
import { Search, Download, Play } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "浏览",
    description: "在市场中找到适合你业务场景的 Skill",
  },
  {
    number: "02",
    icon: Download,
    title: "获取",
    description: "一键下载 Skill 文件到本地",
  },
  {
    number: "03",
    icon: Play,
    title: "使用",
    description: "添加到 Claude/ChatGPT/Cursor 项目中，立即开始工作",
  },
]

export function SkillsHowItWorks() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-[#1d1d1f]">如何使用</h2>
          <p className="text-[#86868b] mt-2">从发现到自动化，只需几秒钟</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#0071e3]/20 mb-4">{step.number}</div>
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#d2d2d7]/50 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <step.icon className="w-6 h-6 text-[#0071e3]" />
              </div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">{step.title}</h3>
              <p className="text-sm text-[#86868b] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
