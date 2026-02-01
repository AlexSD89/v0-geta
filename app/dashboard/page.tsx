"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Plus,
  Upload,
  GitFork,
  Heart,
  Eye,
  TrendingUp,
  DollarSign,
  Users,
  Star,
  Settings,
  BarChart3,
  FileText,
  Sparkles
} from "lucide-react"
import { useState } from "react"

export default function DashboardPage() {
  const [userMode, setUserMode] = useState<"user" | "dev">("user")

  // Mock 数据 - 实际应从 API 获取
  const mySkills = [
    { id: 1, name: "PDF 智能解析", forks: 1200, stars: 3800, views: 15000, revenue: 4200 },
    { id: 2, name: "合同风险审查", forks: 850, stars: 2100, views: 8500, revenue: 2800 },
  ]

  const myForks = [
    { id: 3, name: "代码重构优化", originalAuthor: "DevMaster", forkedAt: "2024-01-20" },
    { id: 4, name: "SEO 内容审计", originalAuthor: "SEO专家", forkedAt: "2024-01-18" },
  ]

  const myFavorites = [
    { id: 5, name: "小红书文案生成", author: "内容王", category: "内容创作" },
    { id: 6, name: "数据可视化", author: "DataViz", category: "数据分析" },
  ]

  const stats = {
    totalSkills: 2,
    totalForks: 2050,
    totalRevenue: 7000,
    totalViews: 23500,
    followers: 340
  }

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <Navigation />

      <section className="pt-24 pb-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1d1d1f] mb-2">我的仪表盘</h1>
            <p className="text-[#86868b]">管理你的 Skills、收藏和收益</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 border border-[#d2d2d7]/50">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-4 h-4 text-[#86868b]" />
                <span className="text-xs text-[#86868b]">我的 Skills</span>
              </div>
              <div className="text-2xl font-bold text-[#1d1d1f]">{stats.totalSkills}</div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#d2d2d7]/50">
              <div className="flex items-center gap-2 mb-1">
                <GitFork className="w-4 h-4 text-[#86868b]" />
                <span className="text-xs text-[#86868b]">总 Forks</span>
              </div>
              <div className="text-2xl font-bold text-[#1d1d1f]">{stats.totalForks.toLocaleString()}</div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#d2d2d7]/50">
              <div className="flex items-center gap-2 mb-1">
                <Eye className="w-4 h-4 text-[#86868b]" />
                <span className="text-xs text-[#86868b]">总浏览</span>
              </div>
              <div className="text-2xl font-bold text-[#1d1d1f]">{stats.totalViews.toLocaleString()}</div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#d2d2d7]/50">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-[#86868b]" />
                <span className="text-xs text-[#86868b]">关注者</span>
              </div>
              <div className="text-2xl font-bold text-[#1d1d1f]">{stats.followers}</div>
            </div>

            <div className="bg-gradient-to-br from-[#fff5f2] to-[#ffe8e0] rounded-xl p-4 border-2 border-[#ffd4c8]">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="w-4 h-4 text-[#ff6b4a]" />
                <span className="text-xs text-[#ff6b4a] font-medium">总收益</span>
              </div>
              <div className="text-2xl font-bold text-[#ff6b4a]">${stats.totalRevenue.toLocaleString()}</div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="my-skills" className="w-full">
            <TabsList className="mb-6 bg-white border border-[#d2d2d7]/50 p-1 rounded-xl">
              <TabsTrigger value="my-skills" className="rounded-lg data-[state=active]:bg-[#0071e3] data-[state=active]:text-white">
                我的 Skills
              </TabsTrigger>
              <TabsTrigger value="forks" className="rounded-lg data-[state=active]:bg-[#0071e3] data-[state=active]:text-white">
                我的 Forks
              </TabsTrigger>
              <TabsTrigger value="favorites" className="rounded-lg data-[state=active]:bg-[#0071e3] data-[state=active]:text-white">
                我的收藏
              </TabsTrigger>
              <TabsTrigger value="analytics" className="rounded-lg data-[state=active]:bg-[#0071e3] data-[state=active]:text-white">
                数据分析
              </TabsTrigger>
            </TabsList>

            {/* My Skills */}
            <TabsContent value="my-skills">
              <div className="bg-white rounded-2xl p-6 border border-[#d2d2d7]/50">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[#1d1d1f]">我创建的 Skills</h2>
                  <Button 
                    className="h-10 px-6 rounded-xl bg-[#ff6b4a] hover:bg-[#ff5a39] text-white"
                    asChild
                  >
                    <a href="/creators">
                      <Plus className="w-4 h-4 mr-2" />
                      上传新 Skill
                    </a>
                  </Button>
                </div>

                <div className="space-y-4">
                  {mySkills.map(skill => (
                    <div 
                      key={skill.id}
                      className="flex items-center justify-between p-4 rounded-xl border border-[#d2d2d7]/50 hover:bg-[#f5f5f7] transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1d1d1f] mb-2">{skill.name}</h3>
                        <div className="flex items-center gap-6 text-sm text-[#86868b]">
                          <div className="flex items-center gap-1.5">
                            <GitFork className="w-4 h-4" />
                            {skill.forks.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Heart className="w-4 h-4" />
                            {skill.stars.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Eye className="w-4 h-4" />
                            {skill.views.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1.5 text-[#ff6b4a] font-medium">
                            <DollarSign className="w-4 h-4" />
                            ${skill.revenue.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="rounded-lg bg-transparent">
                          <Settings className="w-4 h-4 mr-1.5" />
                          管理
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-lg bg-transparent">
                          <BarChart3 className="w-4 h-4 mr-1.5" />
                          数据
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* My Forks */}
            <TabsContent value="forks">
              <div className="bg-white rounded-2xl p-6 border border-[#d2d2d7]/50">
                <h2 className="text-xl font-bold text-[#1d1d1f] mb-6">我 Fork 的 Skills</h2>
                <div className="space-y-4">
                  {myForks.map(fork => (
                    <div 
                      key={fork.id}
                      className="flex items-center justify-between p-4 rounded-xl border border-[#d2d2d7]/50 hover:bg-[#f5f5f7] transition-colors"
                    >
                      <div>
                        <h3 className="font-semibold text-[#1d1d1f] mb-1">{fork.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-[#86868b]">
                          <span>Forked from</span>
                          <span className="font-medium text-[#0071e3]">{fork.originalAuthor}</span>
                          <span>•</span>
                          <span>{fork.forkedAt}</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="rounded-lg bg-transparent"
                        asChild
                      >
                        <a href={`/market/skill/${fork.id}`}>
                          查看详情
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Favorites */}
            <TabsContent value="favorites">
              <div className="bg-white rounded-2xl p-6 border border-[#d2d2d7]/50">
                <h2 className="text-xl font-bold text-[#1d1d1f] mb-6">我的收藏</h2>
                <div className="space-y-4">
                  {myFavorites.map(fav => (
                    <div 
                      key={fav.id}
                      className="flex items-center justify-between p-4 rounded-xl border border-[#d2d2d7]/50 hover:bg-[#f5f5f7] transition-colors"
                    >
                      <div>
                        <h3 className="font-semibold text-[#1d1d1f] mb-1">{fav.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-[#86868b]">
                          <span>by {fav.author}</span>
                          <span>•</span>
                          <Badge variant="secondary" className="bg-[#f5f5f7] text-[#1d1d1f] border-0">
                            {fav.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="rounded-lg bg-transparent"
                        >
                          <GitFork className="w-4 h-4 mr-1.5" />
                          Fork
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="rounded-lg text-red-500 hover:bg-red-50 hover:text-red-600"
                        >
                          取消收藏
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Analytics */}
            <TabsContent value="analytics">
              <div className="bg-white rounded-2xl p-6 border border-[#d2d2d7]/50">
                <h2 className="text-xl font-bold text-[#1d1d1f] mb-6">数据分析</h2>
                <div className="text-center py-12">
                  <BarChart3 className="w-16 h-16 text-[#86868b] mx-auto mb-4" />
                  <p className="text-[#86868b]">数据分析功能即将上线</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  )
}
