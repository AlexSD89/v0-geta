"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Waitlist() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">申请已提交!</h3>
            <p className="text-muted-foreground">
              我们已收到你的申请,将在 24 小时内通过邮件发送免费使用邀请。请留意你的邮箱。
            </p>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4 text-balance">立即开始使用</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            扫码加入微信群,获取安装指引和使用权限。10 分钟完成配置,限时免费。
          </p>
        </div>

        <Card className="p-8">
          <div className="flex flex-col items-center gap-6">
            <div className="bg-secondary/30 p-4 rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/40c7a2b23e7682c1bc4c77ed4663cc66-nE9I7WuvDizIYFFtaNRLiJrJVjQEKd.jpg"
                alt="Gate 交流群二维码"
                width={300}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <p className="text-sm text-muted-foreground text-center">使用微信或企业微信扫码加入</p>

            <div className="w-full pt-4 border-t">
              <Link href="/tutorial" className="block">
                <Button variant="outline" className="w-full bg-transparent" size="lg">
                  <BookOpen className="w-4 h-4 mr-2" />
                  查看安装教程
                </Button>
              </Link>
            </div>

            <p className="text-xs text-muted-foreground text-center">该二维码 10 月 27 日前有效,重新进入将更新</p>
          </div>
        </Card>

        <div className="mt-8 grid sm:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-semibold text-foreground mb-1">10 分钟</div>
            <div className="text-sm text-muted-foreground">完成配置</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-foreground mb-1">限时免费</div>
            <div className="text-sm text-muted-foreground">无需付费</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-foreground mb-1">即时支持</div>
            <div className="text-sm text-muted-foreground">群内答疑</div>
          </div>
        </div>
      </div>
    </section>
  )
}
