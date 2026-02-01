"use client"

import { Database, Zap, TrendingDown, Layers, Workflow, Brain, Building2, Sparkles, Cloud } from "lucide-react"
import { motion } from "framer-motion"

// 第一层（知识封装）：深蓝 - 代表内部核心
// 第二层（Gate智能）：主蓝 - 代表中枢连接
// 第三层（外部工具）：浅蓝 - 代表外部开放
const layerColors = {
  knowledge: {
    bg: "bg-[#1d4ed8]/10",
    icon: "text-[#1d4ed8]",
    label: "知识封装层",
    labelBg: "bg-[#1d4ed8]",
  },
  gate: {
    bg: "bg-[#0071e3]/10",
    icon: "text-[#0071e3]",
    label: "Gate 智能层",
    labelBg: "bg-[#0071e3]",
  },
  external: {
    bg: "bg-[#0ea5e9]/10",
    icon: "text-[#0ea5e9]",
    label: "外部工具层",
    labelBg: "bg-[#0ea5e9]",
  },
}

const capabilities = [
  // 第一层：知识封装优势（深蓝）
  {
    icon: Layers,
    title: "知识模块化",
    description: "将企业或个人知识、SOP、最佳实践转化为可复用的内部知识模块和多层工作模块",
    tools: [],
    layer: "knowledge" as const,
  },
  {
    icon: Database,
    title: "结构化存储",
    description: "永久记忆企业或个人数据和决策逻辑，随业务发展持续积累知识资产",
    tools: [],
    layer: "knowledge" as const,
  },
  {
    icon: TrendingDown,
    title: "降低转型成本",
    description: "一次封装永久复用，大幅降低 AI 转型成本和运营费用",
    tools: [],
    layer: "knowledge" as const,
  },

  // 第二层：Gate 智能能力（主蓝）
  {
    icon: Zap,
    title: "筛选 AI 工具",
    description: "自动对比基础模型与垂直 AI 工具，智能选择最优方案",
    tools: [],
    layer: "gate" as const,
  },
  {
    icon: Workflow,
    title: "工作流自动化",
    description: "基于 MCP 协议编排多智能体协同，自动化完成复杂业务流程",
    tools: [],
    layer: "gate" as const,
  },
  {
    icon: Brain,
    title: "可复用记忆",
    description: "持久化工作流和决策记忆，跨场景复用最佳实践",
    tools: [],
    layer: "gate" as const,
  },

  // 第三层：外部工具整合（浅蓝）
  {
    icon: Building2,
    title: "企业内部系统",
    description: "通过 API 连接企业 CRM、ERP 等内部软件",
    tools: ["飞书", "钉钉", "企业微信", "Slack", "Salesforce", "SAP"],
    layer: "external" as const,
  },
  {
    icon: Sparkles,
    title: "垂直 AI 工具",
    description: "接入专业领域的头部 AI 能力",
    tools: ["Harvey AI 法律", "Runway 视频", "Synthesia 视频", "Jasper 营销", "Copy.ai 文案"],
    layer: "external" as const,
  },
  {
    icon: Cloud,
    title: "通用工具服务",
    description: "整合常用的云端协作与数据服务",
    tools: ["Notion", "Gmail", "GitHub", "Airtable", "Supabase", "Google Drive"],
    layer: "external" as const,
  },
]

export function GateArchitectureTree() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-3 leading-tight">
            <span className="font-normal">让</span> <span className="font-bold">Gate</span>{" "}
            <span className="font-normal">为您的知识自动工作</span>
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-[#0071e3] mb-4">知识即 AI 工具</p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            筛选最适合的 AI 供应商，整合外部工具，标准化封装企业和个人知识
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {Object.entries(layerColors).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${value.labelBg}`} />
              <span className="text-sm text-muted-foreground">{value.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => {
            const Icon = item.icon
            const colors = layerColors[item.layer]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-10 hover:shadow-2xl transition-all duration-300 cursor-pointer hover:border-[var(--hover-border)]"
                style={{
                  ["--hover-border" as string]:
                    item.layer === "knowledge" ? "#1d4ed8" : item.layer === "gate" ? "#0071e3" : "#0ea5e9",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-8 h-8 ${colors.icon} stroke-[1.5]`} />
                </motion.div>

                <h4 className="font-semibold text-xl text-foreground mb-4 leading-snug group-hover:text-[var(--hover-border)] transition-colors">
                  {item.title}
                </h4>

                <p className="text-muted-foreground leading-relaxed text-base mb-4">{item.description}</p>

                {item.tools.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {item.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className={`px-3 py-1.5 text-xs font-medium bg-muted text-muted-foreground rounded-lg transition-all hover:bg-opacity-100 hover:${colors.bg} hover:${colors.icon}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
