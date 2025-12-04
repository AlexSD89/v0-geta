"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Code, Search, Share2, ArrowRight, ChevronRight, Mail, Calendar, FileText } from 'lucide-react'
import Link from "next/link"

const tabs = [
  { id: "featured", label: "精选", icon: Sparkles },
  { id: "productivity", label: "生产力", icon: Zap },
  { id: "development", label: "开发", icon: Code },
  { id: "research", label: "研究", icon: Search },
  { id: "social", label: "社交媒体", icon: Share2 },
]

const tabContent = {
  featured: {
    title: "多智能体协同编排",
    description: "AI 中枢智能调配多个专业智能体协同工作。从邮件处理到数据分析，自动决策最优执行路径，让复杂任务轻松完成。",
    features: [
      "智能邮件分类与自动回复",
      "跨平台数据自动收集与整合",
      "多系统信息实时同步"
    ]
  },
  productivity: {
    title: "智能邮件管理",
    description: "自动分类邮件、优先级排序、智能回复建议。Gate 连接 Gmail、Outlook 等邮箱服务，理解邮件上下文，提供个性化处理方案。",
    features: [
      "自动分类重要邮件",
      "AI 生成回复草稿",
      "智能日程安排建议"
    ]
  },
  development: {
    title: "代码审查助手",
    description: "自动审查代码质量、发现潜在问题、提供优化建议。Gate 集成 GitHub、GitLab，理解项目上下文，提供专业代码评审。",
    features: [
      "自动检测代码问题",
      "安全漏洞扫描",
      "性能优化建议"
    ]
  },
  research: {
    title: "智能文献综述",
    description: "自动搜索相关文献、总结关键观点、生成综述报告。Gate 访问学术数据库，理解研究领域，提供高质量研究支持。",
    features: [
      "自动文献检索",
      "关键信息提取",
      "综述报告生成"
    ]
  },
  social: {
    title: "内容自动发布",
    description: "根据目标受众自动生成内容、优化发布时间、跨平台同步。Gate 理解品牌调性，创作符合各平台特性的优质内容。",
    features: [
      "多平台内容适配",
      "最佳时间发布",
      "自动互动回复"
    ]
  }
}

export function UsecaseTabs() {
  const [activeTab, setActiveTab] = useState("featured")

  const content = tabContent[activeTab as keyof typeof tabContent]

  return (
    <section id="usecases" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4 text-balance">
            最受欢迎的自动化场景
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            探索 Gate 如何通过智能编排，让 AI 自动完成复杂工作流程
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium ${
                  activeTab === tab.id
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "bg-card text-muted-foreground hover:bg-accent/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        <Card className="p-8 sm:p-12 bg-card border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-foreground text-balance">
                {content.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {content.description}
              </p>

              <div className="space-y-3 pt-2">
                {content.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="group bg-accent hover:bg-accent/90 text-accent-foreground mt-6" asChild>
                <Link href="/solutions-market">
                  立即体验
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <div className="space-y-4">
                  {[
                    { title: "输入指令", desc: "自然语言描述任务" },
                    { title: "AI 中枢编排", desc: "智能调配多个 AI" },
                    { title: "自动执行", desc: "完成复杂任务" }
                  ].map((step, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-border">
                        <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-accent font-semibold">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{step.title}</div>
                          <div className="text-sm text-muted-foreground">{step.desc}</div>
                        </div>
                      </div>
                      {index < 2 && (
                        <div className="flex justify-center my-2">
                          <ChevronRight className="w-5 h-5 text-muted-foreground rotate-90" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
