"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(255,255,255,0.72)] backdrop-blur-xl backdrop-saturate-[180%] border-b border-[#d2d2d7]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12">
          <a href="/" className="flex items-center gap-2.5 hover:opacity-70 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-[#0071e3] flex items-center justify-center">
              <span className="text-white font-semibold text-base">G</span>
            </div>
            <span className="font-semibold text-lg text-[#1d1d1f]">Gate</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            <a href="/start" className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors font-medium">
              开始使用
            </a>
            <a href="/marketplace" className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors">
              AI 工具集成库
            </a>
            <a href="/solutions-market" className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors">
              AI 解决方案
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors outline-none">
                解决方案
                <ChevronDown className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-48 bg-white/95 backdrop-blur-xl border-[#d2d2d7]/60 shadow-lg rounded-xl p-1"
              >
                <DropdownMenuItem asChild className="text-sm cursor-pointer rounded-lg">
                  <a href="/solutions/enterprise">企业解决方案</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-sm cursor-pointer rounded-lg">
                  <a href="/solutions/development">开发者工具</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-sm cursor-pointer rounded-lg">
                  <a href="/solutions/providers">AI 能力提供商</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-sm cursor-pointer rounded-lg">
                  <a href="/solutions/social">社交媒体自动化</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/pricing" className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors">
              定价
            </a>
            <a href="/tutorial" className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors">
              安装教程
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <Button
              size="sm"
              className="h-8 px-4 text-sm rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors"
              asChild
            >
              <a href="/contact">联系我们</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 hover:bg-black/5 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-[#d2d2d7]/40 animate-fade-in">
            <a
              href="/start"
              className="block px-4 py-2.5 text-sm font-medium hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              开始使用
            </a>
            <a
              href="/marketplace"
              className="block px-4 py-2.5 text-sm hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI 工具集成库
            </a>
            <a
              href="/solutions-market"
              className="block px-4 py-2.5 text-sm hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI 解决方案
            </a>
            <a
              href="/solutions/enterprise"
              className="block px-4 py-2.5 text-sm hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              企业解决方案
            </a>
            <a
              href="/solutions/development"
              className="block px-4 py-2.5 text-sm hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              开发者工具
            </a>
            <a
              href="/pricing"
              className="block px-4 py-2.5 text-sm hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              定价
            </a>
            <a
              href="/tutorial"
              className="block px-4 py-2.5 text-sm hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              安装教程
            </a>
            <div className="pt-3 px-4">
              <Button size="sm" className="w-full h-9 rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed]" asChild>
                <a href="/contact">联系我们</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
