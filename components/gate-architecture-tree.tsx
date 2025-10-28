"use client"

import { Zap, Plug, Database, Workflow, ArrowDown } from "lucide-react"

export function GateArchitectureTree() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Gate 插拔式架构</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            帮您最低成本封装企业知识,智能选择 AI 供应商,标准化接口随时插拔,快速让传统企业具备 AI 能力
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tree Structure */}
          <div className="flex flex-col items-center gap-4">
            {/* Top: Customer Layer */}
            <div className="w-full max-w-sm">
              <div className="bg-card border border-border rounded-lg p-4 text-center shadow-sm">
                <div className="text-xl mb-1">👤</div>
                <h3 className="font-semibold text-sm text-foreground mb-0.5">客户需求</h3>
                <p className="text-xs text-muted-foreground">业务场景 · 自动化需求</p>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-muted-foreground" />

            {/* Middle: Gate Orchestration Layer */}
            <div className="w-full">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Workflow className="w-6 h-6 text-primary" />
                  <h3 className="font-serif text-xl text-foreground">Gate 编排层</h3>
                </div>
                <p className="text-center text-sm text-muted-foreground mb-4">
                  智能选择 AI 供应商 · 打通多 AI 数据交流 · 标准化封装降低成本
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-background/80 rounded-lg p-3 border border-border">
                    <Database className="w-4 h-4 text-accent mb-1" />
                    <div className="font-medium text-xs text-foreground mb-0.5">知识封装</div>
                    <div className="text-xs text-muted-foreground">标准化接口</div>
                  </div>
                  <div className="bg-background/80 rounded-lg p-3 border border-border">
                    <Workflow className="w-4 h-4 text-accent mb-1" />
                    <div className="font-medium text-xs text-foreground mb-0.5">流程编排</div>
                    <div className="text-xs text-muted-foreground">灵活组合</div>
                  </div>
                  <div className="bg-background/80 rounded-lg p-3 border border-border">
                    <Plug className="w-4 h-4 text-accent mb-1" />
                    <div className="font-medium text-xs text-foreground mb-0.5">随时插拔</div>
                    <div className="text-xs text-muted-foreground">快速替换</div>
                  </div>
                </div>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-muted-foreground" />

            {/* Bottom: Plug-and-Play AI Providers & External Systems */}
            <div className="w-full">
              <div className="text-center mb-3">
                <h4 className="font-semibold text-sm text-foreground mb-1 flex items-center justify-center gap-2">
                  <Plug className="w-4 h-4 text-accent" />
                  可插拔 AI 供应商 & 外部系统
                </h4>
                <p className="text-xs text-muted-foreground">像多头插座,随时插拔 · 无缝切换</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { name: "Claude", icon: "🤖", desc: "AI 推理", type: "ai" },
                  { name: "GPT-4", icon: "🧠", desc: "AI 对话", type: "ai" },
                  { name: "Gemini", icon: "✨", desc: "AI 多模态", type: "ai" },
                  { name: "Slack", icon: "💬", desc: "SaaS 通讯", type: "saas" },
                  { name: "Salesforce", icon: "☁️", desc: "SaaS CRM", type: "saas" },
                  { name: "SAP", icon: "🏢", desc: "企业 ERP", type: "saas" },
                  { name: "自有 API", icon: "⚙️", desc: "私有系统", type: "api" },
                  { name: "更多...", icon: "🔌", desc: "随时扩展", type: "more" },
                ].map((provider) => (
                  <div
                    key={provider.name}
                    className="bg-card border border-border rounded-lg p-2.5 hover:border-primary/50 hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-lg">{provider.icon}</span>
                      <Plug className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="font-medium text-xs text-foreground">{provider.name}</div>
                    <div className="text-xs text-muted-foreground">{provider.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: "智能选择",
                desc: "帮您筛选最适合的 AI 供应商",
              },
              {
                icon: <Workflow className="w-5 h-5" />,
                title: "多 AI 协同",
                desc: "打通多系统数据交流",
              },
              {
                icon: <Database className="w-5 h-5" />,
                title: "标准化封装",
                desc: "最低成本封装企业知识",
              },
              {
                icon: <Plug className="w-5 h-5" />,
                title: "随时插拔",
                desc: "快速替换无需重构",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="text-primary mb-2">{advantage.icon}</div>
                <h4 className="font-semibold text-sm text-foreground mb-1">{advantage.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
