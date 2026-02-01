"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles, Code2, User, LogIn, Github } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mode, setMode] = useState<"user" | "dev">("user")
  const [showLoginModal, setShowLoginModal] = useState(false)

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
          <div className="hidden md:flex items-center gap-8">
            <a href="/market" className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors font-medium">
              Skills 市场
            </a>
            <a href="/ecosystem" className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors">
              生态集成
            </a>
            <a href="/creators" className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors">
              创作者中心
            </a>
            <a href="/docs" className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors">
              文档
            </a>
            <a href="/about" className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors">
              关于 Gate
            </a>
          </div>

          {/* Right: Role Switcher + Login */}
          <div className="hidden md:flex items-center gap-3">
            {/* Role Switcher with Animation */}
            <div className="relative flex items-center p-0.5 rounded-full border border-[#d2d2d7]/50 bg-[#f5f5f7]">
              {/* Animated Background */}
              <motion.div
                className="absolute top-0.5 h-[calc(100%-4px)] rounded-full bg-white shadow-sm"
                initial={false}
                animate={{
                  left: mode === "user" ? "2px" : "calc(50% - 2px)",
                  width: mode === "user" ? "calc(50% - 2px)" : "calc(50% - 2px)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              
              <button
                onClick={() => setMode("user")}
                className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  mode === "user" ? "text-[#0071e3]" : "text-[#86868b] hover:text-[#1d1d1f]"
                }`}
              >
                <motion.div
                  animate={{ scale: mode === "user" ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                </motion.div>
                使用者
              </button>
              <button
                onClick={() => setMode("dev")}
                className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  mode === "dev" ? "text-[#0071e3]" : "text-[#86868b] hover:text-[#1d1d1f]"
                }`}
              >
                <motion.div
                  animate={{ scale: mode === "dev" ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Code2 className="w-3.5 h-3.5" />
                </motion.div>
                开发者
              </button>
            </div>
            
            {/* Login Button */}
            <Button
              onClick={() => setShowLoginModal(true)}
              size="sm"
              className="h-8 px-4 rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] text-xs font-medium"
            >
              <LogIn className="w-3.5 h-3.5 mr-1.5" />
              登录
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
              href="/market"
              className="block px-4 py-2.5 text-sm font-medium hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills 市场
            </a>
            <a
              href="/ecosystem"
              className="block px-4 py-2.5 text-sm hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              生态集成
            </a>
            <a
              href="/creators"
              className="block px-4 py-2.5 text-sm hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              创作者中心
            </a>
            <a
              href="/docs"
              className="block px-4 py-2.5 text-sm hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              文档
            </a>
            <a
              href="/about"
              className="block px-4 py-2.5 text-sm hover:bg-black/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              关于 Gate
            </a>
            <div className="pt-3 px-4 flex gap-2">
              <Button size="sm" variant="outline" className="flex-1 h-9 rounded-full border-[#0071e3] text-[#0071e3] bg-transparent" asChild>
                <a href="/market">使用者</a>
              </Button>
              <Button size="sm" className="flex-1 h-9 rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed]" asChild>
                <a href="/creators">开发者</a>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLoginModal(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[101]"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 mx-4">
                {/* Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-[#1d1d1f] mb-2">登录 Gate</h2>
                  <p className="text-sm text-[#86868b]">
                    {mode === "user" ? "开始使用和 Fork Skills" : "开始创建和变现 Skills"}
                  </p>
                </div>

                {/* Login Options */}
                <div className="space-y-3 mb-6">
                  <Button className="w-full h-11 rounded-xl bg-[#1d1d1f] hover:bg-[#2d2d2f] text-white">
                    <Github className="w-4 h-4 mr-2" />
                    使用 GitHub 登录
                  </Button>
                  <Button variant="outline" className="w-full h-11 rounded-xl border-[#d2d2d7] bg-transparent">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    使用 Google 登录
                  </Button>
                </div>

                {/* Divider */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#d2d2d7]"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-white text-[#86868b]">或</span>
                  </div>
                </div>

                {/* Email Login */}
                <div className="space-y-3 mb-6">
                  <input
                    type="email"
                    placeholder="邮箱地址"
                    className="w-full h-11 px-4 rounded-xl border border-[#d2d2d7] bg-white text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20"
                  />
                  <Button className="w-full h-11 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white">
                    继续
                  </Button>
                </div>

                {/* Footer */}
                <p className="text-xs text-center text-[#86868b]">
                  登录即表示同意我们的{" "}
                  <a href="/terms" className="text-[#0071e3] hover:underline">服务条款</a>
                  {" "}和{" "}
                  <a href="/privacy" className="text-[#0071e3] hover:underline">隐私政策</a>
                </p>

                {/* Close Button */}
                <button
                  onClick={() => setShowLoginModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[#f5f5f7] transition-colors"
                >
                  <X className="w-5 h-5 text-[#86868b]" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
