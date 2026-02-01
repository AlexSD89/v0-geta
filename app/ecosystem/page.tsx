"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plug, Blocks, Cpu, ExternalLink, Check } from "lucide-react"
import { motion } from "framer-motion"

// MCP 集成工具
const mcpTools = [
  { name: "GitHub", desc: "代码仓库管理", category: "开发", connected: true },
  { name: "Notion", desc: "文档协作", category: "效率", connected: true },
  { name: "Slack", desc: "团队沟通", category: "沟通", connected: true },
  { name: "Google Drive", desc: "云端存储", category: "存储", connected: false },
  { name: "Figma", desc: "设计协作", category: "设计", connected: false },
  { name: "Linear", desc: "项目管理", category: "效率", connected: true },
  { name: "Discord", desc: "社区沟通", category: "沟通", connected: false },
  { name: "Airtable", desc: "数据管理", category: "数据", connected: false },
]

// AI 应用集成
const aiApps = [
  { name: "Lovable", desc: "AI 全栈建站", url: "https://lovable.dev", pricing: "免费试用" },
  { name: "Cursor", desc: "AI 编程助手", url: "https://cursor.sh", pricing: "$20/月" },
  { name: "Bolt", desc: "全栈应用开发", url: "https://bolt.new", pricing: "按需付费" },
  { name: "v0", desc: "UI 组件生成", url: "https://v0.dev", pricing: "免费开始" },
  { name: "Replit", desc: "云端开发环境", url: "https://replit.com", pricing: "免费开始" },
  { name: "Claude", desc: "AI 对话助手", url: "https://claude.ai", pricing: "$20/月" },
]

// Gate 引擎能力
const gateCapabilities = [
  { title: "智能意图识别", desc: "理解用户自然语言，自动匹配最合适的技能" },
  { title: "多技能编排", desc: "将复杂任务拆解为原子技能，自动串联执行" },
  { title: "质量控制", desc: "内置 SLA 系统，确保执行质量和可靠性" },
  { title: "成本优化", desc: "智能选择最优执行路径，降低调用成本" },
]

export default function EcosystemPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071e3]/10 text-[#0071e3] text-sm font-medium mb-6">
              <Plug className="w-4 h-4" />
              <span>连接一切 AI 能力</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-6">
              生态集成
            </h1>
            
            <p className="text-lg text-[#86868b] max-w-2xl mx-auto mb-8">
              通过 MCP 协议连接外部工具，集成全球顶尖 AI 应用，
              <br className="hidden sm:block" />
              Gate 引擎为你智能调度一切能力
            </p>
          </motion.div>
        </div>
      </section>

      {/* MCP Integration Section */}
      <section className="py-16 px-4 sm:px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0071e3] flex items-center justify-center">
              <Blocks className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1d1d1f]">MCP 协议集成</h2>
              <p className="text-sm text-[#86868b]">通过 Model Context Protocol 连接任何兼容工具</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {mcpTools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-4 border border-[#d2d2d7]/50 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center">
                    <span className="text-lg font-bold text-[#1d1d1f]">{tool.name[0]}</span>
                  </div>
                  {tool.connected && (
                    <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      <Check className="w-3 h-3" />
                      已连接
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-[#1d1d1f] mb-1">{tool.name}</h3>
                <p className="text-sm text-[#86868b]">{tool.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="rounded-full h-11 px-6 border-[#0071e3] text-[#0071e3] bg-transparent hover:bg-[#0071e3]/5">
              查看所有 MCP 集成
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* AI Apps Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-xl bg-[#5856d6] flex items-center justify-center">
              <ExternalLink className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1d1d1f]">AI 应用集成</h2>
              <p className="text-sm text-[#86868b]">一键接入全球领先的 AI 应用，扩展能力边界</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiApps.map((app, i) => (
              <motion.a
                key={app.name}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-2xl p-5 border border-[#d2d2d7]/50 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0071e3]/10 to-[#5856d6]/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-[#0071e3]">{app.name[0]}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#86868b] group-hover:text-[#0071e3] transition-colors" />
                </div>
                <h3 className="font-semibold text-[#1d1d1f] mb-1 group-hover:text-[#0071e3] transition-colors">{app.name}</h3>
                <p className="text-sm text-[#86868b] mb-3">{app.desc}</p>
                <span className="text-xs font-medium text-[#0071e3] bg-[#0071e3]/10 px-2 py-1 rounded-full">
                  {app.pricing}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Gate Engine Section */}
      <section className="py-16 px-4 sm:px-6 bg-[#1d1d1f]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4" />
              <span>平台内置能力</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Gate 引擎
            </h2>
            
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Gate 引擎是平台内置的智能调度中枢，
              <br className="hidden sm:block" />
              帮你自动编排技能、完成复杂任务
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gateCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h3 className="font-semibold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-white/60">{cap.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button className="rounded-full h-12 px-8 bg-white text-[#1d1d1f] hover:bg-white/90" asChild>
              <a href="/about">
                了解更多 Gate 技术
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
