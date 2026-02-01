"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { User, Settings, LogOut, GitFork, Heart, Eye, TrendingUp, DollarSign, Package } from "lucide-react"
import { useState } from "react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"skills" | "forks" | "favorites">("skills")
  const [userMode, setUserMode] = useState<"user" | "dev">("user")

  // 模拟数据
  const stats = {
    user: {
      totalForks: 12,
      totalFavorites: 45,
      totalViews: 3200,
    },
    dev: {
      totalSkills: 8,
      totalForks: 2150,
      totalRevenue: 1280,
      monthlyRevenue: 320,
    }
  }

  const mySkills = [
    { id: 1, name: "PDF 智能解析", forks: 1200, revenue: 450, views: 15000 },
    { id: 2, name: "合同风险审查", forks: 850, revenue: 380, views: 8500 },
    { id: 3, name: "代码重构优化", forks: 100, revenue: 450, views: 2000 },
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl p-8 mb-6 border border-[#d2d2d7]/50">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0071e3] to-[#5856d6] flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">张</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#1d1d1f] mb-1">张三</h1>
                  <p className="text-[#86868b]">zhangsan@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                  <Settings className="w-4 h-4 mr-1.5" />
                  设置
                </Button>
                <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                  <LogOut className="w-4 h-4 mr-1.5" />
                  退出
                </Button>
              </div>
            </div>

            {/* Role Switcher */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm text-[#86868b]">模式:</span>
              <div className="flex items-center p-0.5 rounded-full border border-[#d2d2d7]/50 bg-[#f5f5f7]">
                <button
                  onClick={() => setUserMode("user")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    userMode === "user"
                      ? "bg-white text-[#0071e3] shadow-sm"
                      : "text-[#86868b] hover:text-[#1d1d1f]"
                  }`}
                >
                  使用者
                </button>
                <button
                  onClick={() => setUserMode("dev")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    userMode === "dev"
                      ? "bg-white text-[#0071e3] shadow-sm"
                      : "text-[#86868b] hover:text-[#1d1d1f]"
                  }`}
                >
                  开发者
                </button>
              </div>
            </div>

            {/* Stats */}
            {userMode === "user" ? (
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[#86868b] mb-1">
                    <GitFork className="w-4 h-4" />
                    <span className="text-sm">已 Fork</span>
                  </div>
                  <div className="text-2xl font-bold text-[#1d1d1f]">{stats.user.totalForks}</div>
                </div>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[#86868b] mb-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">收藏</span>
                  </div>
                  <div className="text-2xl font-bold text-[#1d1d1f]">{stats.user.totalFavorites}</div>
                </div>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[#86868b] mb-1">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">浏览量</span>
                  </div>
                  <div className="text-2xl font-bold text-[#1d1d1f]">{stats.user.totalViews.toLocaleString()}</div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[#86868b] mb-1">
                    <Package className="w-4 h-4" />
                    <span className="text-sm">Skills</span>
                  </div>
                  <div className="text-2xl font-bold text-[#1d1d1f]">{stats.dev.totalSkills}</div>
                </div>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[#86868b] mb-1">
                    <GitFork className="w-4 h-4" />
                    <span className="text-sm">总 Forks</span>
                  </div>
                  <div className="text-2xl font-bold text-[#1d1d1f]">{stats.dev.totalForks.toLocaleString()}</div>
                </div>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[#86868b] mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">总收益</span>
                  </div>
                  <div className="text-2xl font-bold text-[#1d1d1f]">${stats.dev.totalRevenue}</div>
                </div>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[#86868b] mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">本月收益</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">${stats.dev.monthlyRevenue}</div>
                </div>
              </div>
            )}
          </div>

          {/* Content Tabs */}
          {userMode === "dev" && (
            <div className="bg-white rounded-2xl border border-[#d2d2d7]/50 overflow-hidden">
              <div className="border-b border-[#d2d2d7]/50 p-6">
                <h2 className="text-xl font-bold text-[#1d1d1f]">我的 Skills</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {mySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-center justify-between p-4 rounded-xl border border-[#d2d2d7]/50 hover:border-[#0071e3] transition-colors"
                    >
                      <div>
                        <h3 className="font-semibold text-[#1d1d1f] mb-2">{skill.name}</h3>
                        <div className="flex items-center gap-6 text-sm text-[#86868b]">
                          <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            <span>{skill.forks.toLocaleString()} Forks</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{skill.views.toLocaleString()} 浏览</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            <span className="font-medium text-green-600">${skill.revenue}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                          编辑
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                          查看数据
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button className="w-full rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white" asChild>
                    <a href="/creators">上传新 Skill</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
