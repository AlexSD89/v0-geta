"use client"

import { usePathname } from "next/navigation"
import { BookOpen, Zap, Sparkles, Code2, DollarSign, Target, Home } from "lucide-react"

const docNav = [
  {
    title: "指引中心",
    items: [
      { label: "什么是 Skill?", href: "/about", icon: BookOpen, number: "01" },
      { label: "快速开始", href: "/docs/quickstart", icon: Zap, number: "02" },
      { label: "About Gate AI", href: "/gate-ai", icon: Sparkles, number: "03" },
      { label: "创建 Skill", href: "/creators", icon: Code2, number: "04" },
      { label: "收益分成", href: "/creators#revenue", icon: DollarSign, number: "05" },
      { label: "最佳实践", href: "/creators#best-practices", icon: Target, number: "06" },
    ]
  }
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block w-72 flex-shrink-0">
      <div className="sticky top-28">
        {/* Glassmorphism Container - SphereAI Style */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-xl border border-white/20 shadow-xl p-6">
          {/* Decorative Gradient Blobs */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl rounded-full -z-10" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/10 to-cyan-400/10 blur-3xl rounded-full -z-10" />
          
          {docNav.map((section) => (
            <div key={section.title} className="mb-6">
              <div className="text-xs font-bold text-[#0071e3] uppercase tracking-wider mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-[#0071e3] to-[#5856d6] rounded-full" />
                {section.title}
              </div>
              <nav className="space-y-1.5">
                {section.items.map((item) => {
                  const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
                  const Icon = item.icon
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`group relative block px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
                        isActive
                          ? "font-medium text-white bg-gradient-to-r from-[#0071e3] to-[#0066FF] shadow-lg shadow-blue-500/25"
                          : "text-[#1d1d1f] hover:bg-white/60 hover:shadow-md hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all ${
                          isActive 
                            ? "bg-white/20" 
                            : "bg-slate-100 group-hover:bg-blue-50"
                        }`}>
                          <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-600 group-hover:text-[#0071e3]"}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-mono ${isActive ? "text-white/60" : "text-slate-400"}`}>
                              {item.number}
                            </span>
                            <span>{item.label}</span>
                          </div>
                        </div>
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
          
          {/* Return Home - Special Style */}
          <div className="mt-6 pt-6 border-t border-slate-200/50">
            <a
              href="/"
              className="group flex items-center gap-3 px-4 py-3 text-sm text-slate-600 hover:text-[#0071e3] rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-blue-50 transition-colors">
                <Home className="w-4 h-4 group-hover:text-[#0071e3] transition-colors" />
              </div>
              <span className="font-medium">返回首页</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}
