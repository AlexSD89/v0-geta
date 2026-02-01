"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Book, Code, Terminal, Plug, FileText, Zap } from "lucide-react"
import { motion } from "framer-motion"

const docSections = [
  {
    title: "快速开始",
    desc: "10 分钟安装 Claude Code 并连接 Gate",
    icon: Zap,
    href: "/docs/quickstart",
    color: "bg-[#0071e3]",
  },
  {
    title: "创建 Skill",
    desc: "上传你的第一个 AI Skill",
    icon: Code,
    href: "/creators",
    color: "bg-[#ff6b4a]",
  },
  {
    title: "Gate AI",
    desc: "了解 Gate 智能编排系统",
    icon: Terminal,
    href: "/gate-ai",
    color: "bg-[#5856d6]",
  },
  {
    title: "什么是 Skill",
    desc: "理解 Agent Skills 的核心概念",
    icon: FileText,
    href: "/about",
    color: "bg-[#34c759]",
  },
]

const guides = [
  { title: "如何上传第一个技能", href: "/docs/upload-skill" },
  { title: "技能定价策略指南", href: "/docs/pricing-guide" },
  { title: "API 鉴权与安全", href: "/docs/auth" },
  { title: "Webhook 配置", href: "/docs/webhooks" },
  { title: "错误码参考", href: "/docs/errors" },
  { title: "最佳实践", href: "/docs/best-practices" },
]

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071e3]/10 text-[#0071e3] text-sm font-medium mb-6">
              <Book className="w-4 h-4" />
              <span>开发者文档</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-6">
              文档中心
            </h1>
            
            <p className="text-lg text-[#86868b] max-w-2xl mx-auto">
              从入门到精通，这里有你需要的一切资料
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {docSections.map((section, i) => (
              <motion.a
                key={section.title}
                href={section.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-start gap-4 bg-[#f5f5f7] rounded-2xl p-5 hover:bg-[#e8e8ed] transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${section.color} flex items-center justify-center flex-shrink-0`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#1d1d1f] mb-1 group-hover:text-[#0071e3] transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-[#86868b]">{section.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#86868b] group-hover:text-[#0071e3] transition-colors mt-1" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 px-4 sm:px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">常用指南</h2>
          
          <div className="bg-white rounded-2xl border border-[#d2d2d7]/50 divide-y divide-[#d2d2d7]/30">
            {guides.map((guide) => (
              <a
                key={guide.title}
                href={guide.href}
                className="flex items-center justify-between px-5 py-4 hover:bg-[#f5f5f7] transition-colors first:rounded-t-2xl last:rounded-b-2xl"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#86868b]" />
                  <span className="text-[#1d1d1f]">{guide.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#86868b]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">找不到你需要的？</h2>
          <p className="text-[#86868b] mb-6">
            加入我们的开发者社区，获取帮助和最新资讯
          </p>
          <Button variant="outline" className="h-11 px-6 rounded-full border-[#0071e3] text-[#0071e3] bg-transparent" asChild>
            <a href="/contact">联系我们</a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
