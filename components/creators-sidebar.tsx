"use client"

import { usePathname } from "next/navigation"
import { Upload, Share2, Users, DollarSign, Target, BookOpen, Home } from "lucide-react"

const creatorNav = [
  {
    title: "开始创作",
    items: [
      { label: "上传 Skill", href: "/creators#upload", icon: Upload, anchor: "upload" },
      { label: "收益分成", href: "/creators#revenue", icon: DollarSign, anchor: "revenue" },
      { label: "最佳实践", href: "/creators#best-practices", icon: Target, anchor: "best-practices" },
    ]
  },
  {
    title: "三阶段进化",
    items: [
      { label: "Phase 1: 托管", href: "/creators#phase-1", icon: Upload, anchor: "phase-1" },
      { label: "Phase 2: 分销", href: "/creators#phase-2", icon: Share2, anchor: "phase-2" },
      { label: "Phase 3: 共治", href: "/creators#phase-3", icon: Users, anchor: "phase-3" },
    ]
  }
]

export function CreatorsSidebar() {
  const pathname = usePathname()
  
  // 检测当前锚点
  const currentHash = typeof window !== 'undefined' ? window.location.hash.slice(1) : ''

  return (
    <aside className="hidden lg:block w-72 flex-shrink-0">
      <div className="sticky top-28">
        {/* Glassmorphism Container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-xl border border-white/20 shadow-xl p-6">
          {/* Decorative Gradient Blobs */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-3xl rounded-full -z-10" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/10 to-blue-400/10 blur-3xl rounded-full -z-10" />
          
          {creatorNav.map((section, sectionIdx) => (
            <div key={section.title} className={sectionIdx > 0 ? "mt-6" : ""}>
              <div className="text-xs font-bold text-gradient-developer uppercase tracking-wider mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-[#4f46e5] to-[#7c3aed] rounded-full" />
                {section.title}
              </div>
              <nav className="space-y-1.5">
                {section.items.map((item) => {
                  const isActive = currentHash === item.anchor
                  const Icon = item.icon
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`group relative block px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
                        isActive
                          ? "font-medium text-white bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] shadow-lg shadow-purple-500/25"
                          : "text-[#1d1d1f] hover:bg-white/60 hover:shadow-md hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all ${
                          isActive 
                            ? "bg-white/20" 
                            : "bg-slate-100 group-hover:bg-purple-50"
                        }`}>
                          <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-600 group-hover:text-[#4f46e5]"}`} />
                        </div>
                        <span>{item.label}</span>
                      </div>
                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                      )}
                    </a>
                  )
                })}
              </nav>
            </div>
          ))}
          
          {/* Return to Guide */}
          <div className="mt-6 pt-6 border-t border-slate-200/50">
            <a
              href="/about"
              className="group flex items-center gap-3 px-4 py-3 text-sm text-slate-600 hover:text-[#4f46e5] rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-purple-50 transition-colors">
                <BookOpen className="w-4 h-4 group-hover:text-[#4f46e5] transition-colors" />
              </div>
              <span className="font-medium">返回指引</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}
