"use client"

import { Plug, Network, Zap, Clock, Gift, MessageCircle } from "lucide-react"
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
            连接一切,自动化一切
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            三步配置,10 分钟即可开始使用 AI 智能协同
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <Card className="p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Plug className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">1. 连接 AI 工具</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              支持 Claude Desktop、Code CLI 等,一键配置即可使用
            </p>
          </Card>

          <Card className="p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Network className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">
              2. <TermTooltip term="MCP">MCP</TermTooltip> 智能路由
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              让 <TermTooltip term="AI智能体">AI</TermTooltip> 调用 Gmail、Notion、GitHub 等各类服务
            </p>
          </Card>

          <Card className="p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">3. 自动化一切</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              AI 自动完成重复性工作,专注于创造性任务
            </p>
          </Card>
        </div>

        <div className="bg-background rounded-2xl p-8 sm:p-12 border border-border shadow-sm">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-3 text-balance">立即开始使用</h3>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty">
              扫码加入微信群,获取安装指引和使用权限
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <Card className="p-4 sm:p-6 text-center border-accent/20">
              <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">10 分钟</div>
              <p className="text-sm text-muted-foreground">完成配置</p>
            </Card>

            <Card className="p-4 sm:p-6 text-center border-accent/20">
              <Gift className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">限时免费</div>
              <p className="text-sm text-muted-foreground">无需付费</p>
            </Card>

            <Card className="p-4 sm:p-6 text-center border-accent/20">
              <MessageCircle className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">即时支持</div>
              <p className="text-sm text-muted-foreground">群内答疑</p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={() => setShowQR(true)} className="w-full sm:w-auto h-12 px-8">
              免费开始使用
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto h-12 px-8 bg-transparent">
              <Link href="/tutorial">查看安装教程</Link>
            </Button>
          </div>

          <div className="text-center mt-6">
            <Button onClick={scrollToUsecases} variant="link" className="text-muted-foreground hover:text-foreground">
              或查看实际应用案例 →
            </Button>
          </div>
        </div>
      </div>

      <WeChatQRModal open={showQR} onOpenChange={setShowQR} />
    </section>
  )
}
