"use client"

import { usePathname } from "next/navigation"

const docNav = [
  {
    title: "指引中心",
    items: [
      { label: "01 什么是 Skill?", href: "/about" },
      { label: "02 快速开始", href: "/docs/quickstart" },
      { label: "03 Gate AI", href: "/gate-ai" },
    ]
  },
  {
    title: "创作者",
    items: [
      { label: "04 创建 Skill", href: "/creators" },
      { label: "05 收益分成", href: "/creators#revenue" },
      { label: "06 最佳实践", href: "/creators#best-practices" },
    ]
  }
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-8">
        {docNav.map((section) => (
          <div key={section.title}>
            <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-3">
              {section.title}
            </div>
            <nav className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                      isActive
                        ? "font-medium text-[#1d1d1f] bg-[#f5f5f7]"
                        : "text-[#86868b] hover:text-[#1d1d1f] hover:bg-[#f5f5f7]"
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>
          </div>
        ))}

        {/* 返回首页 */}
        <div className="pt-6 border-t border-[#e5e5e5]">
          <a
            href="/"
            className="flex items-center gap-2 px-3 py-2 text-sm text-[#86868b] hover:text-[#1d1d1f] hover:bg-[#f5f5f7] rounded-lg transition-colors"
          >
            <span>←</span>
            <span>返回首页</span>
          </a>
        </div>
      </div>
    </aside>
  )
}
