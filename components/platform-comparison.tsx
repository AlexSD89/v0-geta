"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Brain, Store, Sparkles } from "lucide-react"

export function PlatformComparison() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-[#f5f5f7]">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4">
            完整的 AI Skills 生态系统
          </h2>
          <p className="text-lg text-[#86868b] max-w-2xl mx-auto">
            Gate 平台提供 Skills 托管与交易，Gate AI 智能编排和执行
          </p>
        </div>

        {/* 两个产品对比卡片 */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Gate 平台 */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#0071e3]/20 hover:border-[#0071e3] overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0071e3]/10 to-transparent rounded-bl-full"></div>
            
            <div className="relative">
              {/* 图标和标题 */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0071e3] to-[#0077ed] flex items-center justify-center shadow-lg">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1d1d1f]">Gate 平台</h3>
                  <p className="text-sm text-[#86868b]">Skills 交易所</p>
                </div>
              </div>

              {/* 描述 */}
              <p className="text-[#86868b] mb-6 leading-relaxed">
                一个开放的 Skills 市场，开发者可以托管、交易和分享他们创建的 AI Skills
              </p>

              {/* 核心功能 */}
              <div className="space-y-3 mb-6">
                {[
                  "托管专业 Skills",
                  "Skills 交易市场",
                  "Fork & 分享",
                  "创作者收益分成"
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#0071e3]"></div>
                    </div>
                    <span className="text-[#1d1d1f]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                className="w-full h-11 rounded-xl bg-[#0071e3] hover:bg-[#0061c3] text-white font-medium group-hover:shadow-lg transition-all"
                asChild
              >
                <a href="/market" className="flex items-center justify-center gap-2">
                  浏览 Skills 市场
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Gate AI */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#ff6b4a]/20 hover:border-[#ff6b4a] overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff6b4a]/10 to-transparent rounded-bl-full"></div>
            
            <div className="relative">
              {/* 图标和标题 */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff6b4a] to-[#ff8c6b] flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1d1d1f]">Gate AI</h3>
                  <p className="text-sm text-[#86868b]">智能指挥官</p>
                </div>
              </div>

              {/* 描述 */}
              <p className="text-[#86868b] mb-6 leading-relaxed">
                智能编排助手，自动从平台选择和组合 Skills，帮您完成复杂任务
              </p>

              {/* 核心功能 */}
              <div className="space-y-3 mb-6">
                {[
                  "理解自然语言",
                  "智能选择 Skills",
                  "自动编排工作流",
                  "实时执行任务"
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#ff6b4a]/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#ff6b4a]"></div>
                    </div>
                    <span className="text-[#1d1d1f]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                className="w-full h-11 rounded-xl bg-[#ff6b4a] hover:bg-[#ff5a39] text-white font-medium group-hover:shadow-lg transition-all"
                asChild
              >
                <a href="/gate-ai" className="flex items-center justify-center gap-2">
                  了解 Gate AI
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* 协同工作流程图 */}
        <div className="bg-white rounded-2xl p-8 border border-[#d2d2d7]/50">
          <h3 className="text-xl font-bold text-[#1d1d1f] mb-6 text-center">
            两者如何协同工作
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Step 1 */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#0071e3]/10 flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-[#0071e3]" />
              </div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2">1. 开发者上传</h4>
              <p className="text-sm text-[#86868b]">
                专业开发者在 <strong>Gate 平台</strong> 上传和托管 Skills
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <ArrowRight className="w-6 h-6 text-[#86868b]" />
            </div>

            {/* Step 2 */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#ff6b4a]/10 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-[#ff6b4a]" />
              </div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2">2. AI 智能选择</h4>
              <p className="text-sm text-[#86868b]">
                <strong>Gate AI</strong> 根据任务需求，从平台智能筛选 Skills
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <ArrowRight className="w-6 h-6 text-[#86868b]" />
            </div>

            {/* Step 3 */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0071e3]/10 to-[#ff6b4a]/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#ff6b4a]" />
              </div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2">3. 自动执行</h4>
              <p className="text-sm text-[#86868b]">
                编排工作流，自动完成用户的复杂任务
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
