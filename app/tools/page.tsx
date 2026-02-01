"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { DocsSidebar } from "@/components/docs-sidebar"
import { Button } from "@/components/ui/button"
import { Search, Star, GitFork, ExternalLink, Tag, Zap } from "lucide-react"
import { useState } from "react"

// AI 工具分类
const toolCategories = [
  { id: "all", name: "全部", count: 156 },
  { id: "mcp", name: "MCP", count: 45, free: true },
  { id: "saas", name: "SaaS 工具", count: 68 },
  { id: "api", name: "API 服务", count: 43 },
]

// AI 工具数据
const tools = [
  { 
    id: 1, 
    name: "Lawvable MCP", 
    desc: "法律合规自动化平台，提供合同审查、风险分析等功能", 
    author: "Lawvable", 
    category: "mcp",
    free: true,
    rating: 4.9,
    reviews: 1200,
    forks: 850,
    logo: "https://lawvable.com/favicon.ico",
    verified: true,
    tags: ["法律", "合规", "MCP"]
  },
  { 
    id: 2, 
    name: "Notion MCP", 
    desc: "连接 Notion 工作空间，实现知识库智能管理", 
    author: "Notion", 
    category: "mcp",
    free: true,
    rating: 4.8,
    reviews: 3200,
    forks: 2100,
    logo: "/notion-logo.png",
    verified: true,
    tags: ["笔记", "知识管理", "MCP"]
  },
  { 
    id: 3, 
    name: "Claude.ai Pro", 
    desc: "Claude AI 专业版，提供更强大的推理和代码能力", 
    author: "Anthropic", 
    category: "saas",
    free: false,
    price: "$20/月",
    rating: 4.9,
    reviews: 15000,
    forks: 8500,
    logo: "https://claude.ai/favicon.ico",
    verified: true,
    tags: ["AI对话", "代码生成", "付费"]
  },
  { 
    id: 4, 
    name: "Linear MCP", 
    desc: "项目管理和问题追踪工具集成", 
    author: "Linear", 
    category: "mcp",
    free: true,
    rating: 4.7,
    reviews: 890,
    forks: 540,
    logo: "/linear-logo.png",
    verified: true,
    tags: ["项目管理", "开发工具", "MCP"]
  },
  { 
    id: 5, 
    name: "Cursor Pro", 
    desc: "AI 驱动的代码编辑器，内置智能补全和重构", 
    author: "Cursor", 
    category: "saas",
    free: false,
    price: "$15/月",
    rating: 4.8,
    reviews: 8500,
    forks: 4200,
    logo: "https://cursor.sh/favicon.ico",
    verified: true,
    tags: ["IDE", "代码编辑", "付费"]
  },
  { 
    id: 6, 
    name: "OpenAI API", 
    desc: "GPT-4、DALL-E 等模型的 API 访问", 
    author: "OpenAI", 
    category: "api",
    free: false,
    price: "按量计费",
    rating: 4.6,
    reviews: 25000,
    forks: 12000,
    logo: "https://openai.com/favicon.ico",
    verified: true,
    tags: ["API", "大模型", "按量计费"]
  },
]

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTools = tools.filter(tool => {
    const matchCategory = activeCategory === "all" || tool.category === activeCategory
    const matchSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       tool.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-12">
          <DocsSidebar />

          <div className="flex-1 max-w-4xl pb-24">
            <Breadcrumb items={[
              { label: "首页", href: "/" },
              { label: "学习中心", href: "/about" },
              { label: "AI 工具市场" }
            ]} />

            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4">
              AI 工具市场
            </h1>
            <p className="text-lg text-[#86868b] mb-8 italic">
              发现托管在 Gate 平台的 MCP 和专业 AI 工具
            </p>

            {/* Search & Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868b]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索工具..."
                  className="w-full h-12 pl-12 pr-4 rounded-xl border-2 border-[#e5e5e5] bg-white text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none focus:border-[#0071e3] transition-colors"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
              {toolCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#0071e3] text-white"
                      : "bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e5e5e5]"
                  }`}
                >
                  {cat.name}
                  <span className={`text-xs ${activeCategory === cat.id ? "text-white/70" : "text-[#86868b]"}`}>
                    {cat.count}
                  </span>
                  {cat.free && (
                    <span className="text-xs px-1.5 py-0.5 rounded bg-green-100 text-green-700">
                      免费
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Tools Grid */}
            <div className="space-y-4">
              {filteredTools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-white rounded-2xl p-6 border-2 border-[#e5e5e5] hover:border-[#0071e3] hover:shadow-lg transition-all"
                >
                  <div className="flex gap-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-[#f5f5f7] flex items-center justify-center overflow-hidden">
                        {tool.logo ? (
                          <img src={tool.logo || "/placeholder.svg"} alt={tool.name} className="w-12 h-12 object-contain" />
                        ) : (
                          <span className="text-2xl font-bold text-[#0071e3]">
                            {tool.name[0]}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold text-[#1d1d1f]">{tool.name}</h3>
                            {tool.verified && (
                              <span className="flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                                <Zap className="w-3 h-3" />
                                已认证
                              </span>
                            )}
                            {tool.free ? (
                              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                                免费
                              </span>
                            ) : (
                              <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                                {tool.price}
                              </span>
                            )}
                          </div>
                          <p className="text-[#86868b] mb-3">{tool.desc}</p>
                          <div className="flex items-center gap-2 text-xs text-[#86868b] mb-2">
                            <span>by</span>
                            <span className="font-medium text-[#1d1d1f]">{tool.author}</span>
                          </div>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {tool.tags.map((tag) => (
                              <span
                                key={tag}
                                className="flex items-center gap-1 text-xs text-[#86868b] bg-[#f5f5f7] px-2 py-1 rounded-full"
                              >
                                <Tag className="w-3 h-3" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Stats & Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-[#86868b]">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="font-medium text-[#1d1d1f]">{tool.rating}</span>
                            <span>({tool.reviews.toLocaleString()})</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            <span>{tool.forks.toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-9 px-4 rounded-full bg-transparent"
                          >
                            查看详情
                          </Button>
                          <Button
                            size="sm"
                            className="h-9 px-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white"
                          >
                            <ExternalLink className="w-4 h-4 mr-1.5" />
                            {tool.free ? "安装" : "订阅"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-100">
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">
                想要托管你的工具？
              </h3>
              <p className="text-[#86868b] mb-6">
                Gate 平台提供 MCP 和 AI 工具的托管服务，让你的工具触达全球用户。
              </p>
              <Button
                className="bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full"
              >
                申请托管
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
