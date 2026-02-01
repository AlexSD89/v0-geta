"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content - 完全复刻 Lawvable */}
          <div className="max-w-2xl">
            {/* Main Headline - 完全按照 Lawvable 样式 */}
            <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-bold leading-[1.1] mb-6">
              <span className="block text-[#1d1d1f]">The Ultimate</span>
              <span className="block">
                <span className="bg-gradient-to-r from-[#ff6b4a] to-[#ff8c6b] bg-clip-text text-transparent">
                  Agent Skills
                </span>{" "}
                <span className="text-[#1d1d1f]">交易所</span>
              </span>
            </h1>

            {/* Sub-headline - 斜体灰色 */}
            <p className="text-lg sm:text-xl text-[#86868b] mb-10 leading-relaxed italic">
              发现由专业开发者构建的可复用 AI 自动化。即刻在{" "}
              <span className="not-italic font-medium text-[#1d1d1f]">Claude</span>{" "}
              <span className="not-italic">(soon </span>
              <span className="not-italic font-medium text-[#1d1d1f]">ChatGPT</span>
              <span className="not-italic"> & </span>
              <span className="not-italic font-medium text-[#1d1d1f]">Cursor</span>
              <span className="not-italic">)</span> 中使用。
            </p>

            {/* CTA Buttons - 完全复刻 Lawvable 样式 */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button 
                size="lg" 
                className="h-12 px-8 rounded-xl bg-[#ff6b4a] hover:bg-[#ff5a39] text-white font-medium shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="/market" className="flex items-center gap-2">
                  浏览 Skills
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-12 px-8 rounded-xl border-2 border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white font-medium transition-all bg-transparent"
                asChild
              >
                <a href="/about">什么是 Skill?</a>
              </Button>
            </div>

            {/* GitHub Repo Link - 黑色背景 */}
            <a 
              href="https://github.com/gate-ai/awesome-skills" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#1d1d1f] text-white hover:bg-[#2d2d2f] transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-mono">gate-ai/awesome-skills</span>
            </a>
          </div>

          {/* Right: Code Editor Visual - 完全复刻 Lawvable */}
          <div className="hidden lg:block relative">
            {/* Top: AI Agent Badge */}
            <div className="absolute -top-4 right-8 z-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#e5e5e5] rounded-2xl shadow-lg">
                <div className="w-2 h-2 rounded-full bg-[#ff6b4a]"></div>
                <span className="text-sm font-semibold text-[#1d1d1f]">AI Agent</span>
              </div>
            </div>

            {/* Code Editor Window */}
            <div className="relative bg-gradient-to-br from-[#fff5f2] to-[#ffe8e0] border-2 border-[#ffd4c8] rounded-2xl p-6 shadow-2xl">
              {/* Browser Dots */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff6b4a]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffb84a]"></div>
                <div className="w-3 h-3 rounded-full bg-[#4aff6b]"></div>
                <span className="ml-auto text-xs text-[#86868b] font-mono">nda-review/SKILL.md</span>
              </div>

              {/* Code Content */}
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 font-mono text-sm space-y-2">
                <div className="text-[#86868b]">
                  <span className="text-[#1d1d1f]">1</span>
                  <span className="ml-4">---</span>
                </div>
                <div className="text-[#86868b]">
                  <span className="text-[#1d1d1f]">2</span>
                  <span className="ml-4">
                    <span className="text-[#ff6b4a]">name:</span>
                    <span className="text-[#1d1d1f]"> pdf-parser</span>
                  </span>
                </div>
                <div className="text-[#86868b]">
                  <span className="text-[#1d1d1f]">3</span>
                  <span className="ml-4">
                    <span className="text-[#ff6b4a]">description:</span>
                    <span className="text-[#1d1d1f]"> 智能解析 PDF 文档...</span>
                  </span>
                </div>
                <div className="text-[#86868b]">
                  <span className="text-[#1d1d1f]">4</span>
                  <span className="ml-4">---</span>
                </div>
                <div className="text-[#86868b]">
                  <span className="text-[#1d1d1f]">5</span>
                </div>
                <div className="text-[#86868b]">
                  <span className="text-[#1d1d1f]">6</span>
                  <span className="ml-4 text-[#1d1d1f] font-bold">## Overview</span>
                </div>
                <div className="text-[#86868b]">
                  <span className="text-[#1d1d1f]">7</span>
                  <span className="ml-4">This guide provides a step-by-step process...</span>
                </div>
              </div>
            </div>

            {/* Bottom: Integration Icons */}
            <div className="flex items-center justify-center gap-4 mt-6">
              {/* Word Icon Placeholder */}
              <div className="flex items-center justify-center w-24 h-24 border-2 border-dashed border-[#d2d2d7] rounded-xl bg-white hover:border-[#ff6b4a] transition-colors">
                <span className="text-3xl">📄</span>
              </div>
              {/* Plus Icon */}
              <div className="flex items-center justify-center w-24 h-24 border-2 border-dashed border-[#d2d2d7] rounded-xl bg-white hover:border-[#ff6b4a] transition-colors">
                <span className="text-4xl text-[#d2d2d7]">+</span>
              </div>
            </div>

            {/* Connecting Line */}
            <svg 
              className="absolute top-8 right-20 w-24 h-24 pointer-events-none opacity-50" 
              viewBox="0 0 100 100"
            >
              <path 
                d="M 80 20 Q 50 30, 30 60" 
                stroke="#ff6b4a" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="4,4"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
