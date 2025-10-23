"use client"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function EnterpriseSolutionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-5xl lg:text-7xl text-foreground mb-8">
            将企业数据转化为
            <br />
            <span className="text-accent">可复用进化的数字资产</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Gate 企业方案将分散的企业数据封装成标准化 SDK,让 AI 智能体可调用,成为可复用进化的数字资产
          </p>

          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 group" asChild>
              <a href="/contact">
                联系我们
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/tutorial">查看安装教程</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
