"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TutorialPage() {
  const [copiedSteps, setCopiedSteps] = useState<{ [key: string]: boolean }>({})

  const copyToClipboard = (text: string, stepId: string) => {
    navigator.clipboard.writeText(text)
    setCopiedSteps({ ...copiedSteps, [stepId]: true })
    setTimeout(() => {
      setCopiedSteps({ ...copiedSteps, [stepId]: false })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Gate MCP 安装教程</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              本教程将指导你在本地环境中安装 Claude Code CLI,并连接 Gate MCP 服务。全程仅需 5–10 分钟。
            </p>
          </div>

          <Card className="p-8 bg-accent/10 border-accent">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">安装完成!</h3>
              <p className="text-muted-foreground mb-4">
                现在,你的 Claude Code CLI 已成功接入 Gate MCP,可直接通过自然语言指挥 AI 中枢进行智能编排。
              </p>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="/">返回首页</a>
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
