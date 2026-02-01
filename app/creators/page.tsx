"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CreatorsSidebar } from "@/components/creators-sidebar"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { ArrowRight, Upload, DollarSign, Share2, Users, TrendingUp, Zap, Shield } from "lucide-react"
import { motion } from "framer-motion"

// 三阶段进化
const phases = [
  {
    phase: "Phase 1",
    title: "托管",
    subtitle: "我有代码，Gate 帮我跑",
    desc: "上传你的代码或 AI 能力，Gate 负责托管、运行、计费。零运维成本，专注创作。",
    icon: Upload,
    color: "bg-[#0071e3]",
    cta: "开始托管",
    href: "/creators/upload",
  },
  {
    phase: "Phase 2",
    title: "分销",
    subtitle: "我有流量，Gate 帮我卖",
    desc: "分销他人的技能赚取佣金，或让他人帮你分销。Remix & Resell，消费即创造。",
    icon: Share2,
    color: "bg-[#5856d6]",
    cta: "开始分销",
    href: "/creators/affiliate",
  },
  {
    phase: "Phase 3",
    title: "共治",
    subtitle: "我有判断力，参与平台运营",
    desc: "成为平台审核员、仲裁员，参与技能质量把控和争议处理，获得治理收益。",
    icon: Users,
    color: "bg-[#34c759]",
    cta: "申请共治",
    href: "/creators/governance",
  },
]

// 创作者数据
const stats = [
  { label: "本月创作者总收入", value: "$200,000+", icon: DollarSign },
  { label: "新增技能", value: "150+", icon: Upload },
  { label: "活跃创作者", value: "500+", icon: Users },
]

// 为什么选择 Gate
const benefits = [
  { title: "零佣金起步", desc: "新手前 10 单免佣金，让你无负担起步", icon: Zap },
  { title: "自动定价建议", desc: "基于市场数据，智能推荐最优定价策略", icon: TrendingUp },
  { title: "安全可靠", desc: "质押机制保障交易安全，声誉系统保护优质创作者", icon: Shield },
]

export default function CreatorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12">
            <CreatorsSidebar />
            
            <article className="flex-1 pb-24">
              <Breadcrumb items={[
                { label: "首页", href: "/" },
                { label: "指引中心", href: "/about" },
                { label: "创建 Skill" }
              ]} />
              
              {/* 阅读时间 */}
              <div className="text-sm text-[#86868b] mb-6">
                12 分钟阅读
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-6">
              创作者中心
            </h1>
            
            <p className="text-lg text-[#86868b] max-w-2xl mx-auto mb-8">
              上传技能，开店变现，消费即创造。
              <br className="hidden sm:block" />
              在 Gate 上，每个人都可以成为 AI 能力的提供者。
            </p>

            <Button className="h-12 px-8 rounded-full bg-[#0071e3] hover:bg-[#0077ed]" asChild>
              <a href="/creators/upload">
                上传我的第一个技能
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section id="upload" className="py-8 bg-[#f5f5f7] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-[#d2d2d7]/50"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0071e3]/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-[#0071e3]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1d1d1f]">{stat.value}</div>
                  <div className="text-sm text-[#86868b]">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Phases */}
      <section id="revenue" className="py-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">三阶段进化路径</h2>
            <p className="text-[#86868b]">从托管到分销到共治，逐步解锁更多收益方式</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-[#d2d2d7]/50 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${phase.color} flex items-center justify-center mb-4`}>
                  <phase.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="text-xs font-medium text-[#86868b] mb-1">{phase.phase}</div>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-1">{phase.title}</h3>
                <p className="text-sm text-[#0071e3] font-medium mb-3">{phase.subtitle}</p>
                <p className="text-sm text-[#86868b] mb-6">{phase.desc}</p>
                
                <Button variant="outline" className="w-full rounded-full h-10 border-[#d2d2d7] bg-transparent hover:bg-[#f5f5f7]" asChild>
                  <a href={phase.href}>
                    {phase.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="best-practices" className="py-16 bg-[#f5f5f7] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">为什么选择 Gate</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#d2d2d7]/50 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-[#0071e3]" />
                </div>
                <h3 className="font-semibold text-[#1d1d1f] mb-2">{benefit.title}</h3>
                <p className="text-sm text-[#86868b]">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">准备好开始了吗？</h2>
          <p className="text-[#86868b] mb-8">
            只需 5 分钟，上传你的第一个技能，开始赚取收益
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="h-12 px-8 rounded-full bg-[#0071e3] hover:bg-[#0077ed]" asChild>
              <a href="/creators/upload">
                立即开始
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" className="h-12 px-8 rounded-full border-[#d2d2d7] bg-transparent" asChild>
              <a href="/about">了解 Skills</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
