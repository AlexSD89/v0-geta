"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin?: () => void
  redirectTo?: string
}

export function LoginModal({ isOpen, onClose, onLogin, redirectTo }: LoginModalProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // 模拟登录 - 实际应该调用 API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 保存用户信息到 localStorage
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name: email.split("@")[0],
        role: "user",
      }
      localStorage.setItem("gate_user", JSON.stringify(user))
      
      // 调用回调
      onLogin?.()
      onClose()
      
      // 如果有重定向地址，跳转过去
      if (redirectTo) {
        window.location.href = redirectTo
      }
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#86868b] hover:text-[#1d1d1f] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-2">登录 Gate</h2>
          <p className="text-[#86868b]">输入邮箱，我们将发送验证码</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1d1d1f] mb-2">
              邮箱地址
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-[#d2d2d7] focus:border-[#ff6b4a] focus:ring-2 focus:ring-[#ff6b4a]/20 outline-none transition-all"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 rounded-xl bg-[#ff6b4a] hover:bg-[#ff5a39] text-white font-medium"
          >
            {isLoading ? "发送中..." : "发送验证码"}
          </Button>
        </form>

        <p className="mt-6 text-sm text-[#86868b] text-center">
          登录即表示您同意我们的
          <a href="/terms" className="text-[#ff6b4a] hover:underline mx-1">
            服务条款
          </a>
          和
          <a href="/privacy" className="text-[#ff6b4a] hover:underline ml-1">
            隐私政策
          </a>
        </p>
      </div>
    </div>
  )
}
