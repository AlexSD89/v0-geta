"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Database, Zap, ArrowRight, Brain, Lock } from "lucide-react"

export default function EnterpriseSolutionPage() {
  const benefits = [
    {
      icon: Brain,
      title: "标准化封装知识",
      description: "将企业数据和方法论封装为可复用的知识模块",
    },
    {
      icon: Zap,
      title: "智能选择 AI 工具",
      description: "自动匹配最适合的基础模型和垂直AI工具",
    },
    {
      icon: Database,
      title: "整合外部系统",
      description: "连接CRM、ERP等企业系统和通讯协作工具",
    },
    {
      icon: Lock,
      title: "数据安全保障",
      description: "本地执行，数据不出域，满足企业合规要求",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        <section className="section-spacing-lg px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f7] via-background to-background pointer-events-none" />
          <div className="container-default text-center relative z-10">
            <h1 className="heading-hero mb-6">
              将企业或个人知识转化为
              <br />
              <span className="text-[#0071e3]">AI 可调用的数字资产</span>
            </h1>

            <p className="subtitle-hero mx-auto mb-10">
              Gate 帮助企业标准化封装知识、智能选择AI工具、整合外部系统，让传统企业快速具备AI能力
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-12 px-8 rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors active:scale-[0.98]"
                asChild
              >
                <a href="/contact">
                  联系我们
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-12 px-8 rounded-full text-[#0071e3] hover:bg-[#0071e3]/5 transition-colors"
                asChild
              >
                <a href="/tutorial">查看安装教程</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="section-spacing px-4 sm:px-6 bg-[#f5f5f7]">
          <div className="container-wide">
            <h2 className="heading-section text-center mb-12">Gate 企业方案核心能力</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <Card key={benefit.title} className="card-base card-hover p-6 lg:p-8 bg-white shadow-sm">
                    <Icon className="w-10 h-10 text-[#0071e3] mb-4" strokeWidth={1.5} />
                    <h3 className="heading-card mb-2">{benefit.title}</h3>
                    <p className="body-text">{benefit.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section-spacing px-4 sm:px-6">
          <Card className="container-default p-8 lg:p-12 bg-gradient-to-br from-[#0071e3]/5 via-[#f5f5f7] to-white border-[#0071e3]/20">
            <div className="text-center">
              <h2 className="heading-section mb-4">开启企业 AI 智能化之旅</h2>
              <p className="subtitle-section mx-auto mb-8">专业团队为您提供咨询服务，快速构建定制化 AI 系统</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="h-12 px-8 rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors active:scale-[0.98]"
                  asChild
                >
                  <a href="/contact">
                    联系企业方案顾问
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-12 px-8 rounded-full text-[#0071e3] hover:bg-[#0071e3]/5 transition-colors"
                  asChild
                >
                  <a href="/tutorial">查看技术文档</a>
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
