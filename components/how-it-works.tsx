"use client"

import { Plug, Network, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TermTooltip } from "@/components/term-tooltip"
import { WeChatQRModal } from "@/components/wechat-qr-modal"
import { useState } from "react"
import Link from "next/link"

export function HowItWorks() {
  const [showQR, setShowQR] = useState(false)

  const scrollToUsecases = () => {
    document.getElementById("usecase-tabs")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-3 sm:mb-4 text-balance">
            三步开始使用
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            简单配置,即刻体验 AI 智能协同
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <Card className="p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Plug className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">连接 AI 工具</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed md:hidden">
              支持 Claude Desktop、Code CLI 等,一键配置
            </p>
            <p className="hidden md:block text-muted-foreground leading-relaxed">
              支持 Claude Desktop、Code CLI 等主流 AI 开发工具,一键配置即可使用
            </p>
          </Card>

          <Card className="p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Network className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">
              <TermTooltip term="MCP">MCP</TermTooltip> 智能路由
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed md:hidden">
              让 <TermTooltip term="AI智能体">AI</TermTooltip> 调用 Gmail、Notion、GitHub 等服务
            </p>
            <p className="hidden md:block text-muted-foreground leading-relaxed">
              基于 <TermTooltip term="MCP">Model Context Protocol</TermTooltip>,让{" "}
              <TermTooltip term="AI智能体">AI</TermTooltip> 像拥有双手一样调用 Gmail、Notion、GitHub 等各类 SaaS 服务
            </p>
          </Card>

          <Card className="p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">自动化一切</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed md:hidden">
              AI 自动完成重复性工作,专注创造性任务
            </p>
            <p className="hidden md:block text-muted-foreground leading-relaxed">
              从邮件处理到数据分析,让 AI 自动完成重复性工作,专注于创造性任务
            </p>
          </Card>
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Button onClick={scrollToUsecases} size="lg" variant="outline" className="h-12 sm:h-auto bg-transparent">
            查看实际案例
          </Button>
        </div>

        <div className="mt-16 sm:mt-20 pt-16 sm:pt-20 border-t border-border">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-3 sm:mb-4 text-balance">
              立即开始使用
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              扫码加入微信群,获取安装指引和使用权限
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">10 分钟</div>
              <p className="text-sm sm:text-base text-muted-foreground">完成配置</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">限时免费</div>
              <p className="text-sm sm:text-base text-muted-foreground">无需付费</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">即时支持</div>
              <p className="text-sm sm:text-base text-muted-foreground">群内答疑</p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-10">
            <Button size="lg" onClick={() => setShowQR(true)} className="w-full sm:w-auto">
              免费开始使用
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
              <Link href="/tutorial">查看安装教程</Link>
            </Button>
          </div>
        </div>
      </div>

      <WeChatQRModal open={showQR} onOpenChange={setShowQR} />
    </section>
  )
}
