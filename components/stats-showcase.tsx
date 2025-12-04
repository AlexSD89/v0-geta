"use client"

import { Activity, Users, Zap, TrendingUp } from "lucide-react"

export function StatsShowcase() {
  const stats = [
    {
      label: "企业 ROI 平均提升",
      value: "500%",
      description: "对比传统人工销售模式",
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      label: "部署周期缩短",
      value: "10x",
      description: "从月级到天级的效率跨越",
      icon: Zap,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    {
      label: "自动化任务执行",
      value: "100万+",
      description: "每日自动处理销售动作",
      icon: Activity,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      label: "活跃 AI 销售员",
      value: "50,000+",
      description: "全天候 24/7 在线服务",
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ]

  return (
    <section className="py-12 border-b border-border/40 bg-background relative z-20 -mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="card-base card-hover group flex flex-col items-center text-center p-6 bg-card">
              <div
                className={`p-3 rounded-full mb-4 ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold tracking-tight mb-2 text-foreground group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground/80 mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground leading-snug">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
