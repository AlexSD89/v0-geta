"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Download, 
  Star, 
  Eye, 
  GitFork, 
  Heart,
  Share2,
  CheckCircle2,
  Code2,
  FileText,
  Calendar,
  Globe,
  Shield,
  ArrowRight,
  ExternalLink
} from "lucide-react"
import { useParams } from "next/navigation"

// Mock skill data - 在实际应用中从API获取
const skillDetails = {
  id: 1,
  name: "PDF 智能解析",
  description: "专业的 PDF 文档智能解析工具，支持表格识别、图片提取、多语言OCR识别。适用于财务报表、合同文档、学术论文等复杂文档的自动化处理。",
  author: {
    name: "张三",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=zhangsan",
    verified: true,
    bio: "专注于文档处理和数据提取的AI开发者"
  },
  category: "data",
  rating: 4.9,
  reviews: 2000,
  downloads: 15000,
  forks: 1200,
  views: 15000,
  likes: 3800,
  price: 0,
  isFree: true,
  freeTrial: 10,
  tags: ["PDF", "OCR", "表格识别", "数据提取"],
  license: "MIT",
  language: "Python",
  jurisdiction: ["CN", "US", "EU"],
  updatedAt: "2026-01-25",
  createdAt: "2025-09-15",
  
  // Skill 使用说明
  usage: `# PDF 智能解析 Skill

这个 Skill 可以帮助你自动解析 PDF 文档，提取其中的文本、表格和图片信息。

## 使用场景

- 财务报表自动化处理
- 合同条款提取和分析  
- 学术论文数据提取
- 发票和收据信息识别

## 快速开始

\`\`\`bash
# 安装 Skill
gate install pdf-parser

# 在 Claude Code 或 Cursor 中使用
"帮我解析这份 PDF 文档中的所有表格"
\`\`\`

## 功能特性

- ✓ 支持多语言 OCR (中文、英文、日文等)
- ✓ 智能表格识别和结构化输出
- ✓ 图片提取和描述生成
- ✓ 自动识别文档类型
- ✓ 批量处理支持`,

  // 示例代码
  examples: [
    {
      title: "解析财务报表",
      description: "自动提取资产负债表中的所有数据",
      code: `// 在 Claude Code 中使用
"请帮我分析这份财务报表，提取所有资产和负债项目"`
    },
    {
      title: "合同条款提取",
      description: "识别合同中的关键条款和日期",
      code: `// 在 Cursor 中使用  
"从这份合同中提取所有重要日期和金额信息"`
    }
  ],
  
  // 版本历史
  changelog: [
    { version: "1.2.0", date: "2026-01-25", changes: "新增多语言OCR支持" },
    { version: "1.1.0", date: "2025-12-10", changes: "优化表格识别准确率" },
    { version: "1.0.0", date: "2025-09-15", changes: "首次发布" }
  ]
}

export default function SkillDetailPage() {
  const params = useParams()
  const skill = skillDetails // 实际应用中根据params.id从API获取

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                {/* Category badges */}
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                    {skill.category}
                  </Badge>
                  {skill.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="outline" className="text-slate-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Title */}
                <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4">
                  {skill.name}
                </h1>
                
                {/* Author info */}
                <div className="flex items-center gap-3 mb-6">
                  <img 
                    src={skill.author.avatar || "/placeholder.svg"} 
                    alt={skill.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[#1d1d1f]">{skill.author.name}</span>
                      {skill.author.verified && (
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <p className="text-sm text-[#86868b]">{skill.author.bio}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-[#1d1d1f] leading-relaxed max-w-3xl">
                  {skill.description}
                </p>
              </div>

              {/* Stats sidebar */}
              <div className="hidden lg:block ml-8">
                <div className="glass-card rounded-3xl p-6 w-64">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#86868b]">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">评分</span>
                      </div>
                      <span className="font-bold text-[#1d1d1f]">{skill.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#86868b]">
                        <Download className="w-4 h-4" />
                        <span className="text-sm">下载</span>
                      </div>
                      <span className="font-medium text-[#1d1d1f]">{skill.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#86868b]">
                        <GitFork className="w-4 h-4" />
                        <span className="text-sm">Fork</span>
                      </div>
                      <span className="font-medium text-[#1d1d1f]">{skill.forks.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#86868b]">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">收藏</span>
                      </div>
                      <span className="font-medium text-[#1d1d1f]">{skill.likes.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button className="h-12 px-8 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] shadow-lg">
                <Download className="w-4 h-4 mr-2" />
                下载 Skill
              </Button>
              <Button variant="outline" className="h-12 px-6 rounded-xl border-2 border-[#d2d2d7] bg-white">
                <GitFork className="w-4 h-4 mr-2" />
                Fork
              </Button>
              <Button variant="outline" className="h-12 px-6 rounded-xl border-2 border-[#d2d2d7] bg-white">
                <Share2 className="w-4 h-4 mr-2" />
                分享
              </Button>
              <Button variant="outline" className="h-12 px-6 rounded-xl border-2 border-[#d2d2d7] bg-white">
                <Heart className="w-4 h-4 mr-2" />
                收藏
              </Button>
            </div>

            {/* Pricing info */}
            {skill.isFree ? (
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" />
                永久免费
              </div>
            ) : (
              <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                <span>前 {skill.freeTrial} 次免费</span>
                <span className="text-[#86868b]">•</span>
                <span>¥{skill.price}/次</span>
              </div>
            )}
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Documentation */}
            <div className="lg:col-span-2 space-y-8">
              {/* Usage Guide */}
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-[#0071e3]" />
                  使用指南
                </h2>
                <div className="prose prose-slate max-w-none">
                  <pre className="bg-slate-50 p-6 rounded-xl overflow-auto text-sm">
                    {skill.usage}
                  </pre>
                </div>
              </section>

              {/* Examples */}
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6 flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-[#0071e3]" />
                  使用示例
                </h2>
                <div className="space-y-6">
                  {skill.examples.map((example, index) => (
                    <div key={index} className="border border-slate-200 rounded-xl p-6">
                      <h3 className="font-bold text-[#1d1d1f] mb-2">{example.title}</h3>
                      <p className="text-sm text-[#86868b] mb-4">{example.description}</p>
                      <pre className="bg-slate-50 p-4 rounded-lg overflow-auto text-sm">
                        {example.code}
                      </pre>
                    </div>
                  ))}
                </div>
              </section>

              {/* How to Use */}
              <section className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">如何使用这个 Skill?</h2>
                <p className="text-[#1d1d1f] mb-6">
                  查看我们的详细指南，了解如何在你喜欢的 AI 助手中安装和使用 Gate Skills。
                </p>
                <Button variant="outline" className="h-11 px-6 rounded-xl border-2 border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white bg-white" asChild>
                  <a href="/docs/quickstart" className="flex items-center gap-2">
                    阅读指南
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </section>
            </div>

            {/* Right column - Metadata */}
            <div className="space-y-6">
              {/* Details */}
              <div className="glass-card rounded-3xl p-6">
                <h3 className="font-bold text-[#1d1d1f] mb-4">详细信息</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[#86868b]">许可证</span>
                    <Badge variant="outline" className="font-mono">
                      {skill.license}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#86868b]">语言</span>
                    <span className="font-medium text-[#1d1d1f]">{skill.language}</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-[#86868b]">适用地区</span>
                    <div className="flex gap-1">
                      {skill.jurisdiction.map(j => (
                        <Badge key={j} variant="outline" className="text-xs">
                          {j}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#86868b]">更新时间</span>
                    <span className="font-medium text-[#1d1d1f]">{skill.updatedAt}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#86868b]">创建时间</span>
                    <span className="font-medium text-[#1d1d1f]">{skill.createdAt}</span>
                  </div>
                </div>
              </div>

              {/* Changelog */}
              <div className="glass-card rounded-3xl p-6">
                <h3 className="font-bold text-[#1d1d1f] mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#0071e3]" />
                  版本历史
                </h3>
                <div className="space-y-3">
                  {skill.changelog.map((entry, index) => (
                    <div key={index} className="border-l-2 border-[#0071e3] pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs font-mono">
                          v{entry.version}
                        </Badge>
                        <span className="text-xs text-[#86868b]">{entry.date}</span>
                      </div>
                      <p className="text-sm text-[#1d1d1f]">{entry.changes}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#1d1d1f] mb-2">安全保障</h3>
                    <p className="text-sm text-[#1d1d1f]">
                      所有 Skills 经过 Gate 平台审核，确保代码安全可靠。调用通过 Gate AI 智能编排和控制。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
