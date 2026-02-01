"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Sparkles, Zap, Shield, RefreshCw, Layers, Globe, Users, Code2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24">
        {/* Left Sidebar Navigation - Lawvable Style */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-4">
                  Learn
                </div>
                <nav className="space-y-1">
                  <a href="/about" className="block px-3 py-2 text-sm font-medium text-[#1d1d1f] bg-[#f5f5f7] rounded-lg">
                    01 什么是 Skill?
                  </a>
                  <a href="/docs" className="block px-3 py-2 text-sm text-[#86868b] hover:text-[#1d1d1f] hover:bg-[#f5f5f7] rounded-lg transition-colors">
                    02 快速开始
                  </a>
                  <a href="/creators" className="block px-3 py-2 text-sm text-[#86868b] hover:text-[#1d1d1f] hover:bg-[#f5f5f7] rounded-lg transition-colors">
                    03 创建 Skill
                  </a>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 max-w-3xl pb-24">
              {/* Reading Time */}
              <div className="text-sm text-[#86868b] mb-6">
                4 分钟阅读
              </div>

              {/* Page Title */}
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4">
                什么是 Skill?
              </h1>
              <p className="text-lg text-[#86868b] mb-12 italic">
                理解 Agent Skills 如何为您的业务赋能
              </p>

              {/* Section: Agent Skills */}
              <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-4">
                  Agent Skills
                </h2>
                <p className="text-lg text-[#1d1d1f] leading-relaxed mb-4">
                  Agent Skills 是可复用的智能包，为 AI 助手提供特定领域的专业知识。每个 Skill 包含详细的指令和可选资源（模板、手册等），助手可以自主使用这些内容来完成任务。
                </p>
                <p className="text-lg text-[#1d1d1f] leading-relaxed">
                  可以把 Skill 想象成您为实习生准备的入职指南。它记录了如何处理特定类型的工作：要遵循的方法论、需要检查的事项、交付物的格式等等。
                </p>
              </section>

              {/* Section: Why use Skills */}
              <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-6">
                  为什么使用 Skills
                </h2>
                <p className="text-lg text-[#1d1d1f] leading-relaxed mb-6">
                  与一次性的提示词不同，Skills 可以跨会话持久化。您只需定义一次方法论，助手就会在每次遇到该类型任务时始终如一地应用它。
                </p>
                <p className="text-lg text-[#1d1d1f] leading-relaxed mb-4">
                  对于业务工作来说，这有实际意义：
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-4">
                    <span className="text-[#1d1d1f] font-bold flex-shrink-0">•</span>
                    <div>
                      <strong className="text-[#1d1d1f]">团队一致性。</strong>
                      <span className="text-[#1d1d1f]">一个合同审查 Skill 确保无论是周一早上还是周五晚上，无论是您还是同事，都会应用相同的检查清单。方法论被编码在 Skill 本身中。</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#1d1d1f] font-bold flex-shrink-0">•</span>
                    <div>
                      <strong className="text-[#1d1d1f]">知识留存。</strong>
                      <span className="text-[#1d1d1f]">原本只存在于某人头脑中的专业知识可以被记录和分享。当资深专家开发出有效的尽职调查或法规分析方法时，该方法可以成为让整个团队受益的 Skill。</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#1d1d1f] font-bold flex-shrink-0">•</span>
                    <div>
                      <strong className="text-[#1d1d1f]">减少重复。</strong>
                      <span className="text-[#1d1d1f]">无需在每次对话开始时解释偏好和要求，Skill 会自动提供该上下文。助手已经知道您希望如何完成工作。</span>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section: What a Skill contains */}
              <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-6">
                  Skill 包含什么
                </h2>
                <p className="text-lg text-[#1d1d1f] leading-relaxed mb-6">
                  在核心层面，一个 Skill 是一个包含 <code className="px-2 py-1 bg-[#f5f5f7] rounded text-sm font-mono text-[#ff6b4a]">SKILL.md</code> 文件的文件夹：
                </p>
                
                {/* Code Block */}
                <div className="bg-[#1d1d1f] rounded-xl p-6 mb-6 overflow-x-auto">
                  <pre className="text-sm text-white font-mono">
{`pdf-parser/
├── SKILL.md        # 必需：指令和元数据
├── scripts/        # 可选：可执行代码
├── references/     # 可选：详细文档
└── assets/         # 可选：模板、手册、示例`}
                  </pre>
                </div>

                <p className="text-lg text-[#1d1d1f] leading-relaxed mb-4">
                  <code className="px-2 py-1 bg-[#f5f5f7] rounded text-sm font-mono text-[#ff6b4a]">SKILL.md</code> 文件是一个简单的文本文档，包含一个小标题（Skill 的名称和描述）以及实际指令。助手读取标题以了解何时可能需要该 Skill，然后在需要时加载完整指令。
                </p>
                <p className="text-lg text-[#1d1d1f] leading-relaxed mb-4">
                  文件夹中的其他文件提供支持材料。参考文档可能包含特定领域的指导。脚本可以自动化自定义处理逻辑。资产可能包括常见交付物的模板。
                </p>
                <p className="text-lg text-[#1d1d1f] leading-relaxed">
                  格式故意保持简单：任何人都可以编辑、版本控制和共享的可读文本文件。
                </p>
              </section>

              {/* Section: An open standard */}
              <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-6">
                  开放标准
                </h2>
                <p className="text-lg text-[#1d1d1f] leading-relaxed mb-4">
                  Agent Skills 最初由 Anthropic 创建，并为其 Claude 模型设计。然而，该格式已成为其他提供商开始采用的开放标准。
                </p>
                <p className="text-lg text-[#1d1d1f] leading-relaxed">
                  目标是可移植性：今天为 Claude 编写的 Skill 应该可以在其他 AI 助手添加对该格式的支持后使用。Skills 旨在成为教 AI 代理如何处理专业任务的通用语言，而不是构建锁定到单一供应商的工作流。
                </p>
              </section>

              {/* Bottom CTA */}
              <div className="mt-16 pt-8 border-t border-[#e5e5e5]">
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4">
                  准备应用这些知识？
                </h3>
                <p className="text-[#86868b] mb-6">
                  浏览我们的预构建 Skills 库并开始自动化。
                </p>
                <Button 
                  size="lg" 
                  className="h-12 px-8 rounded-xl bg-[#ff6b4a] hover:bg-[#ff5a39] text-white"
                  asChild
                >
                  <a href="/market" className="flex items-center gap-2">
                    探索 Skills
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
