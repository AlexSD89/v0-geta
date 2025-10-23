"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Star, Download, CheckCircle2, Clock, Package } from "lucide-react"
import { useState } from "react"

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("全部")

  const categories = ["全部", "生产力", "开发", "社交", "通讯", "数据"]

  const tools = [
    {
      name: "GitHub",
      description: "代码仓库管理、PR 审查和自动化部署",
      category: "开发",
      downloads: "40K+",
      rating: 4.8,
      status: "connected" as const,
    },
    {
      name: "Gmail",
      description: "智能邮件管理、自动分类和回复",
      category: "生产力",
      downloads: "50K+",
      rating: 4.9,
      status: "connected" as const,
    },
    {
      name: "YouTube",
      description: "视频内容管理、数据分析和自动化发布",
      category: "社交",
      downloads: "35K+",
      rating: 4.7,
      status: "connected" as const,
    },
  ]

  const filteredTools = selectedCategory === "全部" ? tools : tools.filter((tool) => tool.category === selectedCategory)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "connected":
        return (
          <span className="px-2 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 text-xs rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            已连接
          </span>
        )
      case "available":
        return (
          <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full flex items-center gap-1">
            <Package className="w-3 h-3" />
            可用
          </span>
        )
      case "coming-soon":
        return (
          <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full flex items-center gap-1">
            <Clock className="w-3 h-3" />
            即将推出
          </span>
        )
    }
  }

  const getCategoryCount = (category: string) => {
    if (category === "全部") return tools.length
    return tools.filter((tool) => tool.category === category).length
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="font-serif text-5xl sm:text-6xl text-foreground mb-4 text-center">Gate Market</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center text-pretty">
              探索精选集成,让你的 AI 助手连接更多工具
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-accent text-accent-foreground" : ""}
                >
                  {category}
                  <span className="ml-2 text-xs opacity-70">({getCategoryCount(category)})</span>
                </Button>
              ))}
            </div>
          </div>

          <section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <Card key={tool.name} className="p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="font-semibold text-lg">{tool.name}</h3>
                        {getStatusBadge(tool.status)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{tool.description}</p>
                      <span className="text-xs text-muted-foreground">{tool.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span>{tool.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{tool.downloads}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
