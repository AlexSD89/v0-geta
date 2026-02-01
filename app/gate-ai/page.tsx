"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DocsSidebar } from "@/components/docs-sidebar"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Brain, Network, Shield, Cpu } from "lucide-react"

export default function GateAIPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12">
            <DocsSidebar />
            
            <article className="flex-1 max-w-3xl pb-24">
              <Breadcrumb items={[
                { label: "首页", href: "/" },
                { label: "指引中心", href: "/about" },
                { label: "About Gate AI" }
              ]} />
              
              {/* 阅读时间 */}
              <div className="text-sm text-[#86868b] mb-6">
                8 分钟阅读
              </div>
              
              {/* Hero Section */}
              <section className="mb-12">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff6b4a]/10 text-[#ff6b4a] text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4" />
                    Gate AI 将军
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1d1d1f] mb-6 leading-tight">
                    您的
                    <br />
                    <span className="bg-gradient-to-r from-[#ff6b4a] to-[#ff8c6b] bg-clip-text text-transparent">
                      AI 智能指挥官
                    </span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-[#86868b] max-w-2xl mx-auto leading-relaxed mb-8">
                    Gate AI 是一个智能编排助手，帮助您在任何场景中自动选择、组合和使用来自 Gate 平台的专业 Skills。
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button 
                      size="lg" 
                      className="h-12 px-8 rounded-xl bg-[#ff6b4a] hover:bg-[#ff5a39] text-white font-medium"
                      asChild
                    >
                      <a href="/docs/gate-ai" className="flex items-center gap-2">
                        开始使用 Gate AI
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="h-12 px-8 rounded-xl border-2 border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white font-medium bg-transparent"
                      asChild
                    >
                      <a href="/market">浏览 Skills 市场</a>
                    </Button>
                  </div>
                </div>
              </section>

              {/* 核心能力 */}
              <section className="py-20 px-4 sm:px-6 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4">
                      Gate AI 的核心能力
                    </h2>
                    <p className="text-[#86868b] text-lg">
                      智能编排、自动选择、无缝集成
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: Brain,
                        title: "智能理解需求",
                        description: "Gate AI 能够理解您的自然语言描述，自动分析任务类型和所需能力"
                      },
                      {
                        icon: Network,
                        title: "自动编排 Skills",
                        description: "从平台上千个 Skills 中智能选择最合适的组合，构建完整的工作流"
                      },
                      {
                        icon: Zap,
                        title: "实时执行优化",
                        description: "动态调整执行策略，自动处理异常，确保任务高效完成"
                      }
                    ].map((feature, i) => (
                      <div
                        key={feature.title}
                        className="bg-white rounded-2xl p-8 shadow-sm"
                      >
                        <div className="w-12 h-12 rounded-xl bg-[#ff6b4a]/10 flex items-center justify-center mb-5">
                          <feature.icon className="w-6 h-6 text-[#ff6b4a]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">{feature.title}</h3>
                        <p className="text-[#86868b] leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 工作原理 */}
              <section className="py-20 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4">
                      Gate AI 如何工作
                    </h2>
                    <p className="text-[#86868b] text-lg">
                      四步完成从需求到执行的全过程
                    </p>
                  </div>

                  <div className="space-y-8">
                    {[
                      {
                        step: "01",
                        title: "接收任务",
                        desc: "您用自然语言描述需要完成的任务，Gate AI 理解您的意图和上下文"
                      },
                      {
                        step: "02",
                        title: "匹配 Skills",
                        desc: "从 Gate 平台的 Skills 市场中，智能检索和筛选最匹配的 Skills"
                      },
                      {
                        step: "03",
                        title: "编排工作流",
                        desc: "根据任务复杂度，自动组合多个 Skills，构建完整的执行流程"
                      },
                      {
                        step: "04",
                        title: "执行与反馈",
                        desc: "实时执行工作流，监控进度，处理异常，并将结果返回给您"
                      }
                    ].map((item, i) => (
                      <div key={item.step} className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-[#ff6b4a] text-white font-bold text-lg flex items-center justify-center">
                            {item.step}
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                          <p className="text-[#86868b] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 应用场景 */}
              <section className="py-20 px-4 sm:px-6 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4">
                      典型应用场景
                    </h2>
                    <p className="text-[#86868b] text-lg">
                      Gate AI 在各行各业的实际应用
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "法律文档分析",
                        scenario: "我需要审查这份合同并标注风险点",
                        skills: ["合同审查", "风险识别", "法规检索"],
                        result: "自动生成完整的风险评估报告"
                      },
                      {
                        title: "市场研究报告",
                        scenario: "帮我分析竞争对手的产品策略",
                        skills: ["网页抓取", "数据分析", "报告生成"],
                        result: "生成结构化的竞品分析文档"
                      },
                      {
                        title: "代码审查",
                        scenario: "检查这段代码的安全隐患和性能问题",
                        skills: ["代码分析", "安全扫描", "性能优化"],
                        result: "提供详细的改进建议和最佳实践"
                      },
                      {
                        title: "财务数据处理",
                        scenario: "从这些发票中提取信息并生成财务报表",
                        skills: ["OCR 识别", "数据提取", "报表生成"],
                        result: "自动化处理并输出标准化报表"
                      }
                    ].map((example) => (
                      <div key={example.title} className="bg-white rounded-2xl p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-[#1d1d1f] mb-3">{example.title}</h3>
                        <div className="mb-4">
                          <div className="text-sm text-[#86868b] mb-2">用户输入：</div>
                          <div className="bg-[#f5f5f7] rounded-lg p-3 text-sm text-[#1d1d1f] italic">
                            "{example.scenario}"
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="text-sm text-[#86868b] mb-2">自动调用 Skills：</div>
                          <div className="flex flex-wrap gap-2">
                            {example.skills.map((skill) => (
                              <span key={skill} className="px-3 py-1 bg-[#ff6b4a]/10 text-[#ff6b4a] text-xs rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-[#86868b] mb-2">执行结果：</div>
                          <div className="text-sm text-[#1d1d1f]">{example.result}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Gate AI vs Gate 平台 */}
              <section className="py-20 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4">
                      Gate AI + Gate 平台
                    </h2>
                    <p className="text-[#86868b] text-lg">
                      两个产品，完整生态
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Gate 平台 */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#0071e3] flex items-center justify-center">
                          <Cpu className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1d1d1f]">Gate 平台</h3>
                      </div>
                      <p className="text-[#86868b] mb-6 italic">Skills 交易所</p>
                      <ul className="space-y-3">
                        {[
                          "托管专业开发者创建的 Skills",
                          "提供 Skills 交易市场",
                          "支持 Fork、分享、收藏",
                          "创作者可以上传和变现 Skills",
                          "70% 收入分成给创作者"
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2 text-[#1d1d1f]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0071e3]"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="mt-6 w-full bg-[#0071e3] hover:bg-[#0061c3] text-white"
                        asChild
                      >
                        <a href="/market">浏览 Skills 市场</a>
                      </Button>
                    </div>

                    {/* Gate AI */}
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#ff6b4a] flex items-center justify-center">
                          <Brain className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1d1d1f]">Gate AI</h3>
                      </div>
                      <p className="text-[#86868b] mb-6 italic">智能指挥官</p>
                      <ul className="space-y-3">
                        {[
                          "理解自然语言任务描述",
                          "自动从平台选择合适的 Skills",
                          "智能编排多个 Skills 工作流",
                          "实时执行和异常处理",
                          "在 Claude Code、Cursor 中使用"
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2 text-[#1d1d1f]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a]"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="mt-6 w-full bg-[#ff6b4a] hover:bg-[#ff5a39] text-white"
                        asChild
                      >
                        <a href="/docs/gate-ai">查看文档</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="py-20 px-4 sm:px-6 bg-[#f5f5f7]">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-6">
                    准备好体验 Gate AI？
                  </h2>
                  <p className="text-lg text-[#86868b] mb-8">
                    立即接入 Gate AI，让智能助手为您编排和执行复杂任务
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button 
                      size="lg" 
                      className="h-12 px-8 rounded-xl bg-[#ff6b4a] hover:bg-[#ff5a39] text-white font-medium"
                      asChild
                    >
                      <a href="/docs/gate-ai" className="flex items-center gap-2">
                        快速开始
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="h-12 px-8 rounded-xl border-2 border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white font-medium bg-transparent"
                      asChild
                    >
                      <a href="/about">了解 Skills</a>
                    </Button>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
