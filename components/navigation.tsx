"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles, Code2, User } from "lucide-react"
import { LoginModal } from "@/components/login-modal"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mode, setMode] = useState<"user" | "dev">("user")
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(255,255,255,0.72)] backdrop-blur-xl backdrop-saturate-[180%] border-b border-[#d2d2d7]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 hover:opacity-70 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-[#0071e3] grid grid-cols-2 gap-0.5 p-1.5">
              <div className="w-full h-full bg-white rounded-sm"></div>
              <div className="w-full h-full bg-white rounded-sm"></div>
              <div className="w-full h-full bg-white rounded-sm"></div>
              <div className="w-full h-full bg-white rounded-sm"></div>
            </div>
            <span className="font-semibold text-lg text-[#1d1d1f]">Gate</span>
          </a>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/market" className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors font-medium">
              Skills
            </a>
            <a href="/gate-ai" className="text-sm text-[#1d1d1f] hover:text-[#ff6b4a] transition-colors font-medium">
              Gate AI
            </a>
            <a href="/creators" className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors">
              创作者
            </a>
            <a href="/about" className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors">
              指引
            </a>
          </div>

          {/* Right: Role Switcher + User */}
          <div className="hidden md:flex items-center gap-3">
            {/* Role Switcher */}
            <div className="flex items-center p-0.5 rounded-full border border-[#d2d2d7]/50 bg-[#f5f5f7]">
              <button
                onClick={() => {
                  setMode("user")
                  window.dispatchEvent(new CustomEvent('roleChanged', { detail: { mode: 'user' } }))
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  mode === "user"
                    ? "bg-white text-[#0071e3] shadow-sm"
                    : "text-[#86868b] hover:text-[#1d1d1f]"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                使用者
              </button>
              <button
                onClick={() => {
                  setMode("dev")
                  window.dispatchEvent(new CustomEvent('roleChanged', { detail: { mode: 'dev' } }))
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  mode === "dev"
                    ? "bg-white text-[#ff6b4a] shadow-sm"
                    : "text-[#86868b] hover:text-[#1d1d1f]"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                开发者
              </button>
            </div>
            
            {/* User Avatar */}
            {isLoggedIn ? (
              <a href="/profile" className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0071e3] to-[#5856d6] flex items-center justify-center hover:opacity-80 transition-opacity">
                <User className="w-4 h-4 text-white" />
              </a>
            ) : (
              <button 
                onClick={() => setLoginModalOpen(true)}
                className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center hover:bg-[#e8e8ed] transition-colors"
              >
                <User className="w-4 h-4 text-[#86868b]" />
              </button>
            )}
          </div>
          
          <LoginModal 
            isOpen={loginModalOpen} 
            onClose={() => setLoginModalOpen(false)}
            onLogin={() => {
              setIsLoggedIn(true)
              setLoginModalOpen(false)
            }}
          />

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
              href="/market"
              className="block px-4 py-2.5 text-sm font-medium hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="/gate-ai"
              className="block px-4 py-2.5 text-sm font-medium hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gate AI
            </a>
            <a
              href="/creators"
              className="block px-4 py-2.5 text-sm hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              创作者
            </a>
            <a
              href="/about"
              className="block px-4 py-2.5 text-sm hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              指引
            </a>
            <div className="pt-3 px-4">
              <button
                onClick={() => {
                  if (isLoggedIn) {
                    window.location.href = '/profile'
                  } else {
                    setLoginModalOpen(true)
                  }
                  setMobileMenuOpen(false)
                }}
                className="w-full h-9 rounded-full bg-[#0071e3] text-white text-sm font-medium hover:bg-[#0077ed] transition-colors"
              >
                {isLoggedIn ? '我的账户' : '登录 / 注册'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
