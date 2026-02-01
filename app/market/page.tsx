"use client"

import React, { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Search, Star, TrendingUp, Clock, Filter, ChevronDown, Share2, GitFork, Heart, Code2, Sparkles, Flame, Eye } from "lucide-react"
import { motion } from "framer-motion"

// 分类（不同颜色）
const categories = [
  { id: "all", name: "全部", count: 1000, color: "#86868b", bgColor: "#f5f5f7" },
  { id: "legal", name: "法律合规", count: 120, color: "#5856d6", bgColor: "#f3f2ff" },
  { id: "finance", name: "金融财务", count: 85, color: "#34c759", bgColor: "#e8f9ed" },
  { id: "marketing", name: "营销增长", count: 200, color: "#ff9500", bgColor: "#fff4e6" },
  { id: "dev", name: "开发工具", count: 350, color: "#0071e3", bgColor: "#e6f2ff" },
  { id: "data", name: "数据分析", count: 150, color: "#af52de", bgColor: "#f8edff" },
  { id: "content", name: "内容创作", count: 95, color: "#ff2d55", bgColor: "#ffe6ed" },
]

// Skills 数据（加入分享、热度、Fork 数据）
const skills = [
  { id: 1, name: "PDF 智能解析", desc: "支持表格、图片、多语言识别", author: "张三", rating: 4.9, reviews: 2000, category: "data", trending: true, forks: 1200, shares: 450, views: 15000, likes: 3800 },
  { id: 2, name: "合同风险审查", desc: "自动识别合同漏洞和风险条款", author: "法律AI", rating: 4.8, reviews: 1200, category: "legal", trending: true, forks: 850, shares: 320, views: 8500, likes: 2100 },
  { id: 3, name: "代码重构优化", desc: "智能分析代码，提供重构建议", author: "DevMaster", rating: 4.7, reviews: 3500, category: "dev", trending: false, forks: 2100, shares: 890, views: 22000, likes: 5600 },
  { id: 4, name: "SEO 内容审计", desc: "分析网页 SEO，提供优化建议", author: "SEO专家", rating: 4.9, reviews: 800, category: "marketing", trending: true, forks: 650, shares: 420, views: 11000, likes: 1900 },
  { id: 5, name: "财务报表分析", desc: "自动解读财务数据，生成洞察", author: "财务通", rating: 4.6, reviews: 650, category: "finance", trending: false, forks: 420, shares: 180, views: 5800, likes: 1100 },
  { id: 6, name: "小红书文案生成", desc: "一键生成爆款笔记文案", author: "内容王", rating: 4.8, reviews: 5000, category: "content", trending: true, forks: 3200, shares: 1500, views: 35000, likes: 8900 },
  { id: 7, name: "竞品深度调研", desc: "多维度分析竞争对手策略", author: "市场洞察", rating: 4.9, reviews: 420, category: "marketing", trending: false, forks: 280, shares: 95, views: 4200, likes: 780 },
  { id: 8, name: "API 文档生成", desc: "自动生成规范的 API 文档", author: "CodeGen", rating: 4.5, reviews: 1800, category: "dev", trending: false, forks: 980, shares: 350, views: 12000, likes: 2400 },
  { id: 9, name: "法律条文检索", desc: "精准匹配相关法律法规", author: "法规通", rating: 4.7, reviews: 900, category: "legal", trending: false, forks: 520, shares: 210, views: 7200, likes: 1600 },
  { id: 10, name: "数据可视化", desc: "自动生成专业图表和报告", author: "DataViz", rating: 4.8, reviews: 1100, category: "data", trending: true, forks: 780, shares: 410, views: 10500, likes: 2300 },
  { id: 11, name: "Bug 智能修复", desc: "自动识别并修复代码问题", author: "BugHunter", rating: 4.6, reviews: 2200, category: "dev", trending: false, forks: 1400, shares: 560, views: 18000, likes: 3900 },
  { id: 12, name: "营销邮件撰写", desc: "生成高转化率的营销邮件", author: "EmailPro", rating: 4.7, reviews: 1500, category: "marketing", trending: false, forks: 890, shares: 380, views: 9800, likes: 2100 },
]

export default function MarketPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"trending" | "rating" | "newest">("trending")
  const [userMode, setUserMode] = useState<"user" | "dev">("user")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // 监听导航栏的角色切换事件
  React.useEffect(() => {
    const handleRoleChange = (e: CustomEvent) => {
      setUserMode(e.detail.mode)
    }
    window.addEventListener('roleChanged', handleRoleChange as EventListener)
    return () => window.removeEventListener('roleChanged', handleRoleChange as EventListener)
  }, [])

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
          {/* Role Switcher & Login */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              {/* Role Switcher */}
              <div className="flex items-center p-0.5 rounded-full border border-[#d2d2d7]/50 bg-[#f5f5f7]">
                <button
                  onClick={() => {
                    setUserMode("user")
                    window.dispatchEvent(new CustomEvent('roleChanged', { detail: { mode: 'user' } }))
                  }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    userMode === "user"
                      ? "bg-white text-[#0071e3] shadow-sm"
                      : "text-[#86868b] hover:text-[#1d1d1f]"
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  使用者
                </button>
                <button
                  onClick={() => {
                    setUserMode("dev")
                    window.dispatchEvent(new CustomEvent('roleChanged', { detail: { mode: 'dev' } }))
                  }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    userMode === "dev"
                      ? "bg-white text-[#ff6b4a] shadow-sm"
                      : "text-[#86868b] hover:text-[#1d1d1f]"
                  }`}
                >
                  <Code2 className="w-4 h-4" />
                  开发者
                </button>
              </div>
            </div>

            {/* Login Toggle (Demo) */}
            <Button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              variant={isLoggedIn ? "default" : "outline"}
              size="sm"
              className="rounded-full h-9"
            >
              {isLoggedIn ? "已登录 (演示)" : "登录"}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-[#1d1d1f] mb-2">Skills 市场</h1>
              <p className="text-[#86868b]">
                {userMode === "user" 
                  ? "发现、使用、混搭 1,000+ AI Skills" 
                  : "上传、管理、变现你的 Skills"}
              </p>
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

          {/* Category Tabs - 不同颜色 */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  backgroundColor: activeCategory === cat.id ? cat.color : cat.bgColor,
                  color: activeCategory === cat.id ? "white" : cat.color,
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all hover:opacity-90`}
              >
                {cat.name}
                <span className={`text-xs ${activeCategory === cat.id ? "text-white/70" : "opacity-60"}`}>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill, i) => {
              const category = categories.find(c => c.id === skill.category) || categories[0]
              
              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="group bg-white rounded-2xl p-5 border border-[#d2d2d7]/50 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: category.bgColor }}
                    >
                      <span className="text-xl font-bold" style={{ color: category.color }}>
                        {skill.name[0]}
                      </span>
                    </div>
                    {skill.trending && (
                      <span className="flex items-center gap-1 text-xs font-medium text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                        <Flame className="w-3.5 h-3.5" />
                        热门
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <a href={`/market/skill/${skill.id}`} className="block mb-4">
                    <h3 className="font-semibold text-[#1d1d1f] mb-1.5 group-hover:text-[#0071e3] transition-colors line-clamp-1">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-[#86868b] mb-2 line-clamp-2">{skill.desc}</p>
                    <div className="flex items-center gap-1.5 text-xs text-[#86868b]">
                      <span>by</span>
                      <span className="font-medium text-[#1d1d1f]">{skill.author}</span>
                    </div>
                  </a>

                  {/* Metrics - Fork, Share, Views, Likes */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-[#86868b]">
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{skill.forks.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{(skill.views / 1000).toFixed(1)}k</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{skill.likes.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-4 border-t border-[#d2d2d7]/30">
                    {isLoggedIn ? (
                      <>
                        {userMode === "user" ? (
                          <>
                            <Button
                              size="sm"
                              className="flex-1 h-9 rounded-full text-sm"
                              style={{ backgroundColor: category.color }}
                              onClick={(e) => {
                                e.preventDefault()
                                alert(`Fork "${skill.name}"`)
                              }}
                            >
                              <GitFork className="w-3.5 h-3.5 mr-1.5" />
                              Fork
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-9 px-3 rounded-full bg-transparent"
                              onClick={(e) => {
                                e.preventDefault()
                                alert(`分享 "${skill.name}"`)
                              }}
                            >
                              <Share2 className="w-3.5 h-3.5" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-9 px-3 rounded-full bg-transparent"
                              onClick={(e) => {
                                e.preventDefault()
                                alert(`收藏 "${skill.name}"`)
                              }}
                            >
                              <Heart className="w-3.5 h-3.5" />
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 h-9 rounded-full text-sm bg-transparent"
                              style={{ borderColor: category.color, color: category.color }}
                              onClick={(e) => {
                                e.preventDefault()
                                alert(`查看收益数据`)
                              }}
                            >
                              查看收益
                            </Button>
                            <Button
                              size="sm"
                              className="flex-1 h-9 rounded-full text-sm"
                              style={{ backgroundColor: category.color }}
                              onClick={(e) => {
                                e.preventDefault()
                                alert(`Fork 后修改`)
                              }}
                            >
                              <GitFork className="w-3.5 h-3.5 mr-1.5" />
                              Fork
                            </Button>
                          </>
                        )}
                      </>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full h-9 rounded-full text-sm bg-transparent"
                        onClick={(e) => {
                          e.preventDefault()
                          setIsLoggedIn(true)
                        }}
                      >
                        登录后 Fork / 分享
                      </Button>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#d2d2d7]/30">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium text-[#1d1d1f]">{skill.rating}</span>
                      <span className="text-xs text-[#86868b]">({skill.reviews.toLocaleString()})</span>
                    </div>
                    <span 
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: category.bgColor, color: category.color }}
                    >
                      {category.name}
                    </span>
                  </div>
                </motion.div>
              )
            })}
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
