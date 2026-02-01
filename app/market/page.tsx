"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Search, Star, TrendingUp, Clock, Filter, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

// 行业分类
const categories = [
  { id: "all", name: "全部", count: 1000 },
  { id: "legal", name: "法律合规", count: 120 },
  { id: "finance", name: "金融财务", count: 85 },
  { id: "marketing", name: "营销增长", count: 200 },
  { id: "dev", name: "开发工具", count: 350 },
  { id: "data", name: "数据分析", count: 150 },
  { id: "content", name: "内容创作", count: 95 },
]

// 技能数据
const skills = [
  { id: 1, name: "PDF 智能解析", desc: "支持表格、图片、多语言识别", price: 0.1, unit: "次", rating: 4.9, reviews: 2000, category: "data", trending: true },
  { id: 2, name: "合同风险审查", desc: "自动识别合同漏洞和风险条款", price: 5, unit: "份", rating: 4.8, reviews: 1200, category: "legal", trending: true },
  { id: 3, name: "代码重构优化", desc: "智能分析代码，提供重构建议", price: 2, unit: "次", rating: 4.7, reviews: 3500, category: "dev", trending: false },
  { id: 4, name: "SEO 内容审计", desc: "分析网页 SEO，提供优化建议", price: 10, unit: "页", rating: 4.9, reviews: 800, category: "marketing", trending: true },
  { id: 5, name: "财务报表分析", desc: "自动解读财务数据，生成洞察", price: 15, unit: "份", rating: 4.6, reviews: 650, category: "finance", trending: false },
  { id: 6, name: "小红书文案生成", desc: "一键生成爆款笔记文案", price: 0.5, unit: "篇", rating: 4.8, reviews: 5000, category: "content", trending: true },
  { id: 7, name: "竞品深度调研", desc: "多维度分析竞争对手策略", price: 50, unit: "份", rating: 4.9, reviews: 420, category: "marketing", trending: false },
  { id: 8, name: "API 文档生成", desc: "自动生成规范的 API 文档", price: 3, unit: "次", rating: 4.5, reviews: 1800, category: "dev", trending: false },
  { id: 9, name: "法律条文检索", desc: "精准匹配相关法律法规", price: 1, unit: "次", rating: 4.7, reviews: 900, category: "legal", trending: false },
  { id: 10, name: "数据可视化", desc: "自动生成专业图表和报告", price: 5, unit: "次", rating: 4.8, reviews: 1100, category: "data", trending: true },
  { id: 11, name: "Bug 智能修复", desc: "自动识别并修复代码问题", price: 8, unit: "次", rating: 4.6, reviews: 2200, category: "dev", trending: false },
  { id: 12, name: "营销邮件撰写", desc: "生成高转化率的营销邮件", price: 2, unit: "篇", rating: 4.7, reviews: 1500, category: "marketing", trending: false },
]

export default function MarketPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"trending" | "rating" | "newest">("trending")

  const filteredSkills = skills.filter(skill => {
    const matchCategory = activeCategory === "all" || skill.category === activeCategory
    const matchSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       skill.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  }).sort((a, b) => {
    if (sortBy === "trending") return b.trending ? 1 : -1
    if (sortBy === "rating") return b.rating - a.rating
    return 0
  })

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-8 px-4 sm:px-6 bg-white border-b border-[#d2d2d7]/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-[#1d1d1f] mb-2">技能市场</h1>
              <p className="text-[#86868b]">发现、使用、混搭 1,000+ AI 技能</p>
            </div>
            
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868b]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索技能..."
                className="w-full h-12 pl-12 pr-4 rounded-full border border-[#d2d2d7] bg-[#f5f5f7] text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none focus:border-[#0071e3] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#0071e3] text-white"
                    : "bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]"
                }`}
              >
                {cat.name}
                <span className={`text-xs ${activeCategory === cat.id ? "text-white/70" : "text-[#86868b]"}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filters & Sort */}
      <section className="py-4 px-4 sm:px-6 bg-white border-b border-[#d2d2d7]/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="rounded-full h-9 text-sm border-[#d2d2d7] bg-transparent">
              <Filter className="w-4 h-4 mr-1" />
              筛选
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#86868b]">排序:</span>
            <button
              onClick={() => setSortBy("trending")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm ${
                sortBy === "trending" ? "bg-[#0071e3]/10 text-[#0071e3]" : "text-[#86868b] hover:text-[#1d1d1f]"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              热门
            </button>
            <button
              onClick={() => setSortBy("rating")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm ${
                sortBy === "rating" ? "bg-[#0071e3]/10 text-[#0071e3]" : "text-[#86868b] hover:text-[#1d1d1f]"
              }`}
            >
              <Star className="w-3.5 h-3.5" />
              评分
            </button>
            <button
              onClick={() => setSortBy("newest")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm ${
                sortBy === "newest" ? "bg-[#0071e3]/10 text-[#0071e3]" : "text-[#86868b] hover:text-[#1d1d1f]"
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              最新
            </button>
          </div>
        </div>
      </section>

      {/* Skill Grid */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSkills.map((skill, i) => (
              <motion.a
                key={skill.id}
                href={`/market/skill/${skill.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="group bg-white rounded-2xl p-5 border border-[#d2d2d7]/50 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0071e3]/10 to-[#5856d6]/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-[#0071e3]">{skill.name[0]}</span>
                  </div>
                  {skill.trending && (
                    <span className="flex items-center gap-1 text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                      <TrendingUp className="w-3 h-3" />
                      热门
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="font-semibold text-[#1d1d1f] mb-1 group-hover:text-[#0071e3] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-[#86868b] mb-4 line-clamp-2">{skill.desc}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[#d2d2d7]/30">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-[#1d1d1f]">{skill.rating}</span>
                    <span className="text-xs text-[#86868b]">({skill.reviews.toLocaleString()})</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-[#0071e3]">¥{skill.price}</span>
                    <span className="text-xs text-[#86868b]">/{skill.unit}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <Button variant="outline" className="rounded-full h-11 px-8 border-[#d2d2d7] bg-transparent hover:bg-[#f5f5f7]">
              加载更多
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
