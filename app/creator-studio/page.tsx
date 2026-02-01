"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Upload,
  DollarSign,
  Users,
  TrendingUp,
  Code2,
  Shield,
  Zap,
  Store,
  Share2,
  BarChart3,
  Star,
  CheckCircle2,
  Clock,
} from "lucide-react"

export default function CreatorStudioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 sm:py-28 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-1.5 text-sm bg-[#5856d6]/10 text-[#5856d6] border-0">
                Creator Economy
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                创作者工作室
              </h1>
              
              <p className="text-xl text-[#86868b] max-w-2xl mx-auto mb-4">
                将你的专业知识变成可售卖的 AI Skill
              </p>
              <p className="text-lg text-[#86868b] max-w-xl mx-auto mb-10">
                托管、分销、共治 — 消费即创造
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="btn-gradient h-14 px-10 text-[17px] shadow-lg hover:shadow-xl"
                  asChild
                >
                  <a href="/start" className="flex items-center gap-2">
                    开始创建 Skill
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-14 px-10 text-[17px] rounded-full text-[#0071e3] hover:bg-[#0071e3]/5"
                  asChild
                >
                  <a href="/docs/upload-skill">查看文档</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Three Phases */}
        <section className="py-16 px-4 sm:px-6 bg-[#f5f5f7]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">三阶段进化</h2>
            <p className="text-[#86868b] text-center mb-12 max-w-2xl mx-auto">
              从代码托管到收益分成，再到社区共治
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  phase: "Phase 1",
                  title: "Hosting (托管)",
                  description: "我有代码，Gate 帮我跑",
                  features: ["一键部署", "自动扩容", "监控告警"],
                  icon: Upload,
                  color: "#0071e3",
                },
                {
                  phase: "Phase 2",
                  title: "Distribution (分销)",
                  description: "我有流量，Gate 帮我卖",
                  features: ["Remix & Resell", "佣金分成", "流量扶持"],
                  icon: Share2,
                  color: "#5856d6",
                },
                {
                  phase: "Phase 3",
                  title: "Governance (共治)",
                  description: "我有判断力，Gate 让我参与运营",
                  features: ["审核投票", "社区决策", "收益共享"],
                  icon: Users,
                  color: "#34c759",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all border-2 hover:border-[#0071e3]/30">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {item.phase}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-[#86868b] mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#34c759]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* My Store Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 px-3 py-1 text-xs bg-[#0071e3]/10 text-[#0071e3] border-0">
                  My Store
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  你的个人主页 = 你的 SaaS 官网
                </h2>
                <p className="text-lg text-[#86868b] mb-6">
                  Profile as Store — 不只是列出代码，更要展示 Use Case
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: Store, text: "独立店铺，专属品牌页面" },
                    { icon: BarChart3, text: "实时收益追踪和数据分析" },
                    { icon: Star, text: "客户评价和声誉积累" },
                    { icon: Shield, text: "Verified Author 认证" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#f5f5f7] flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-[#0071e3]" />
                      </div>
                      <span className="text-[15px]">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white" asChild>
                  <a href="/start">开通我的店铺</a>
                </Button>
              </div>

              <Card className="p-6 bg-gradient-to-br from-[#f5f5f7] to-white border-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#0071e3] flex items-center justify-center text-white text-2xl font-bold">
                    J
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Jamie Tso</h3>
                    <p className="text-sm text-[#86868b]">Legal AI Expert</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className="text-xs bg-[#34c759]/10 text-[#34c759] border-0">
                        Verified
                      </Badge>
                      <span className="text-xs text-[#86868b]">12 Skills</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-white">
                    <div className="text-2xl font-bold text-[#1d1d1f]">$2,450</div>
                    <div className="text-xs text-[#86868b]">本月收入</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white">
                    <div className="text-2xl font-bold text-[#1d1d1f]">156</div>
                    <div className="text-xs text-[#86868b]">订单数</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white">
                    <div className="text-2xl font-bold text-[#1d1d1f]">4.9</div>
                    <div className="text-xs text-[#86868b]">评分</div>
                  </div>
                </div>
                <div className="text-sm text-[#86868b] italic">
                  "我是怎么用 Legal-Check Skill 帮客户避开 100万 合同陷阱的..."
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Affiliate Hub */}
        <section className="py-20 px-4 sm:px-6 bg-[#f5f5f7]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 px-3 py-1 text-xs bg-[#5856d6]/10 text-[#5856d6] border-0">
                Affiliate Hub
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">分销中心</h2>
              <p className="text-lg text-[#86868b] max-w-2xl mx-auto">
                一键分销他人 Skill，赚取佣金 — 你已经通过分销赚了 $100，为什么不开通自己的店铺？
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "可分销 Skill", value: "1,000+", icon: Code2 },
                { label: "平均佣金比例", value: "15%", icon: DollarSign },
                { label: "即时结算", value: "T+1", icon: Clock },
                { label: "活跃分销商", value: "500+", icon: Users },
              ].map((stat) => (
                <Card key={stat.label} className="p-6 text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#5856d6]" />
                  <div className="text-3xl font-bold text-[#1d1d1f] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#86868b]">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Model */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">收益模式</h2>
            <p className="text-[#86868b] text-center mb-12 max-w-2xl mx-auto">
              多种变现方式，让你的知识持续产生价值
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "按次付费",
                  description: "每次 Skill 被调用，获得收益",
                  example: "$0.01 - $10 / 次",
                  icon: Zap,
                },
                {
                  title: "订阅模式",
                  description: "用户按月/年订阅你的 Skill",
                  example: "$9 - $99 / 月",
                  icon: TrendingUp,
                },
                {
                  title: "分销佣金",
                  description: "分销他人 Skill 获得佣金",
                  example: "10% - 30%",
                  icon: Share2,
                },
              ].map((model) => (
                <Card key={model.title} className="p-6 hover:shadow-lg transition-all">
                  <model.icon className="w-10 h-10 text-[#0071e3] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                  <p className="text-[#86868b] mb-4">{model.description}</p>
                  <div className="text-lg font-semibold text-[#0071e3]">{model.example}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-[#0071e3] to-[#5856d6]">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              准备好变现你的专业知识了吗？
            </h2>
            <p className="text-lg opacity-90 mb-8">
              加入 500+ 创作者，开始你的 AI Skill 变现之旅
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-14 px-10 text-[17px] bg-white text-[#0071e3] hover:bg-white/90"
                asChild
              >
                <a href="/start">立即开始</a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-14 px-10 text-[17px] text-white hover:bg-white/10 border border-white/30"
                asChild
              >
                <a href="/contact">联系我们</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
