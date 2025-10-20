"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Users, Rocket, ArrowRight } from 'lucide-react'
import Link from "next/link"

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has seen the welcome modal before
    const hasSeenWelcome = localStorage.getItem("gate-welcome-seen")
    if (!hasSeenWelcome) {
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    localStorage.setItem("gate-welcome-seen", "true")
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full p-8 relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="关闭"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl text-foreground mb-3">欢迎来到 Gate Market</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            连接 AI 能力的生态平台,无论你是使用者还是提供者,都能在这里找到价值
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Consumer Path */}
          <Card className="p-6 border-2 hover:border-accent transition-all group">
            <div className="flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">我想使用 AI 能力</h3>
              <p className="text-muted-foreground mb-4 flex-1">
                浏览和连接各种 AI 工具,让你的工作流程更智能高效
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  浏览 30+ 精选集成
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  一键连接到你的工作流
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  本地执行,数据安全
                </li>
              </ul>
              <Button
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={handleClose}
              >
                开始探索
              </Button>
            </div>
          </Card>

          {/* Provider Path */}
          <Card className="p-6 border-2 hover:border-accent transition-all group">
            <div className="flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Rocket className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">我想提供 AI 能力</h3>
              <p className="text-muted-foreground mb-4 flex-1">
                将你的 AI 服务接入 Gate 生态,触达 50,000+ 企业用户
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  标准化 MCP 协议接入
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  快速触达企业客户
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  商业化支持与分成
                </li>
              </ul>
              <Button
                className="w-full bg-transparent"
                variant="outline"
                asChild
              >
                <Link href="/solutions/providers">了解提供者方案</Link>
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <button
            onClick={handleClose}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            暂时跳过,直接浏览
          </button>
        </div>
      </Card>
    </div>
  )
}
