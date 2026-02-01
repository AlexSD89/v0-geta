"use client"

import { Check, X, Minus } from "lucide-react"
import { motion } from "framer-motion"

export function CompetitorComparison() {
  return (
    <section className="section-spacing px-4 sm:px-6 bg-[#f5f5f7]">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-5">为什么选择 Gate</h2>
          <p className="subtitle-section mx-auto max-w-2xl">
            模块化知识 + 动态 AI 工具，以最低成本构建高度定制的 AI 基建
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-7 lg:p-9 flex flex-col shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="mb-7">
              <h3 className="text-xl font-semibold text-[#86868b]">通用工作流工具</h3>
              <p className="text-sm text-[#86868b] mt-2">如 n8n, Zapier 等</p>
            </div>
            <ul className="space-y-5 flex-1">
              <li className="flex items-start gap-3.5 text-[15px] text-[#86868b]">
                <X className="w-5 h-5 mt-0.5 text-[#86868b]/60 shrink-0" />
                <span>需手动拖拽节点，维护成本高</span>
              </li>
              <li className="flex items-start gap-3.5 text-[15px] text-[#86868b]">
                <X className="w-5 h-5 mt-0.5 text-[#86868b]/60 shrink-0" />
                <span>缺乏业务知识封装，仅做传输</span>
              </li>
              <li className="flex items-start gap-3.5 text-[15px] text-[#86868b]">
                <X className="w-5 h-5 mt-0.5 text-[#86868b]/60 shrink-0" />
                <span>高度依赖技术人员开发调试</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-7 lg:p-9 flex flex-col relative shadow-xl md:-translate-y-4 border-2 border-[#0071e3]/20"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0071e3] to-[#5856d6] text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg">
              推荐
            </div>
            <div className="mb-7 text-center border-b border-[#d2d2d7]/40 pb-6">
              <h3 className="text-xl font-bold text-[#1d1d1f]">Gate AI 基建</h3>
              <p className="text-sm text-[#86868b] mt-2">Knowledge as a Service</p>
            </div>
            <ul className="space-y-6 flex-1">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0071e3]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#0071e3]" />
                </div>
                <div>
                  <span className="block font-semibold text-[#1d1d1f] text-[15px] mb-1">模块化知识封装</span>
                  <span className="text-[15px] text-[#86868b] leading-relaxed block">
                    将业务知识转化为可复用的 AI 知识模块
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0071e3]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#0071e3]" />
                </div>
                <div>
                  <span className="block font-semibold text-[#1d1d1f] text-[15px] mb-1">动态工具智能编排</span>
                  <span className="text-[15px] text-[#86868b] leading-relaxed block">
                    AI 根据业务目标自动组合最优工具链
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0071e3]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#0071e3]" />
                </div>
                <div>
                  <span className="block font-semibold text-[#1d1d1f] text-[15px] mb-1">低成本，高定制</span>
                  <span className="text-[15px] text-[#86868b] leading-relaxed block">标准化基建上的个性化配置</span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-7 lg:p-9 flex flex-col shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="mb-7">
              <h3 className="text-xl font-semibold text-[#86868b]">C端 Bot 平台</h3>
              <p className="text-sm text-[#86868b] mt-2">如 Coze, GPTs 等</p>
            </div>
            <ul className="space-y-5 flex-1">
              <li className="flex items-start gap-3.5 text-[15px] text-[#86868b]">
                <Minus className="w-5 h-5 mt-0.5 text-[#86868b]/60 shrink-0" />
                <span>仅限对话交互，难以嵌入业务流</span>
              </li>
              <li className="flex items-start gap-3.5 text-[15px] text-[#86868b]">
                <Minus className="w-5 h-5 mt-0.5 text-[#86868b]/60 shrink-0" />
                <span>知识库检索能力弱，无法处理复杂逻辑</span>
              </li>
              <li className="flex items-start gap-3.5 text-[15px] text-[#86868b]">
                <Minus className="w-5 h-5 mt-0.5 text-[#86868b]/60 shrink-0" />
                <span>数据安全与私有化部署受限</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
