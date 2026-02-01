"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, RefreshCw, Users, Code2, Globe, Layers, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0071e3]/10 text-[#0071e3] text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                关于 Gate
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1d1d1f] mb-6 leading-tight">
                让 Gate 为您的知识
                <br />
                <span className="text-gradient-hero">自动工作</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-[#86868b] max-w-2xl mx-auto leading-relaxed mb-8">
                Gate <span className="text-[#1d1d1f] font-medium">封装业务知识</span>，
                <span className="text-[#1d1d1f] font-medium">编排全球 AI 能力</span>，
                为您构建<span className="text-[#1d1d1f] font-medium">自动化</span>、
                <span className="text-[#1d1d1f] font-medium">低成本</span>的专属 AI 业务系统
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="btn-gradient h-12 px-8" asChild>
                  <a href="/market" className="flex items-center gap-2">
                    浏览技能市场
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 rounded-full bg-transparent" asChild>
                  <a href="/docs">接入指南</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 px-4 sm:px-6 bg-[#f5f5f7]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4">核心优势</h2>
              <p className="text-[#86868b] text-lg">Gate 为什么能成为您的 AI 指挥官</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "10分钟上手",
                  description: "无需复杂配置，简单几步即可接入 Gate 生态，立即开始使用 AI 技能"
                },
                {
                  icon: Shield,
                  title: "本地执行",
                  description: "数据安全优先，所有敏感操作都在您的本地环境执行，保护隐私"
                },
                {
                  icon: RefreshCw,
                  title: "持续更新",
                  description: "技能市场每天都有新技能上架，紧跟 AI 发展前沿"
                }
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0071e3]/10 flex items-center justify-center mb-5">
                    <feature.icon className="w-6 h-6 text-[#0071e3]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">{feature.title}</h3>
                  <p className="text-[#86868b] leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4">Gate 三层架构</h2>
              <p className="text-[#86868b] text-lg">知识封装 + 智能编排 + 工具集成</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Layer 1: 知识封装 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[#1d4ed8] flex items-center justify-center">
                    <Layers className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-[#1d1d1f]">知识封装层</span>
                </div>
                {["知识模块化", "结构化存储", "降低转型成本"].map((item) => (
                  <div key={item} className="p-4 rounded-xl bg-[#1d4ed8]/5 border border-[#1d4ed8]/20">
                    <span className="text-[#1d1d1f] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Layer 2: Gate 智能层 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[#0071e3] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-[#1d1d1f]">Gate 智能层</span>
                </div>
                {["筛选 AI 工具", "工作流自动化", "可复用记忆"].map((item) => (
                  <div key={item} className="p-4 rounded-xl bg-[#0071e3]/5 border border-[#0071e3]/20">
                    <span className="text-[#1d1d1f] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Layer 3: 外部工具层 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[#0ea5e9] flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-[#1d1d1f]">外部工具层</span>
                </div>
                {["企业内部系统", "垂直 AI 工具", "通用工具服务"].map((item) => (
                  <div key={item} className="p-4 rounded-xl bg-[#0ea5e9]/5 border border-[#0ea5e9]/20">
                    <span className="text-[#1d1d1f] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* For Who */}
        <section className="py-20 px-4 sm:px-6 bg-[#f5f5f7]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4">适合谁</h2>
              <p className="text-[#86868b] text-lg">无论你是使用者还是开发者，Gate 都能帮到你</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* 使用者 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0071e3]/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#0071e3]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1d1d1f]">使用者</h3>
                </div>
                <p className="text-[#86868b] mb-6">需要快速获得 AI 能力的企业和个人</p>
                <ul className="space-y-3">
                  {["一句话调度 1000+ AI 技能", "无需技术背景", "按需付费，成本可控", "即插即用，立即生效"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#1d1d1f]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0071e3]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 btn-gradient" asChild>
                  <a href="/market">浏览技能市场</a>
                </Button>
              </motion.div>
              
              {/* 开发者 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#5856d6]/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-[#5856d6]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1d1d1f]">开发者</h3>
                </div>
                <p className="text-[#86868b] mb-6">想要将技能变现的创作者</p>
                <ul className="space-y-3">
                  {["上传技能，获得被动收入", "70% 收入分成", "全球用户触达", "完善的分销体系"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#1d1d1f]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5856d6]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 bg-[#5856d6] hover:bg-[#4745b5] text-white" asChild>
                  <a href="/creators">进入创作者中心</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-6">
              准备好开始了吗？
            </h2>
            <p className="text-lg text-[#86868b] mb-8">
              立即探索技能市场，或者成为创作者开始变现之旅
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="btn-gradient h-12 px-8" asChild>
                <a href="/market" className="flex items-center gap-2">
                  浏览技能市场
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 rounded-full bg-transparent" asChild>
                <a href="/creators">成为创作者</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
