"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText, Search, Code, Scale, BarChart3, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

// 示例 Skills 数据
const featuredSkills = [
  {
    id: "nda-review",
    name: "NDA 审查",
    category: "法律合规",
    icon: Scale,
    description: "审查和完善 NDA 条款，从接收方或披露方角度生成逐条问题清单、修改建议、理由和截止日期。",
    author: "李明",
    updatedAt: "2026-01-15",
    tags: ["合同审查", "法律", "NDA"],
  },
  {
    id: "code-review",
    name: "代码审查助手",
    category: "开发工具",
    icon: Code,
    description: "自动审查代码质量、安全漏洞和性能问题，生成详细的改进建议和最佳实践指南。",
    author: "张伟",
    updatedAt: "2026-01-20",
    tags: ["代码审查", "安全", "Python"],
  },
  {
    id: "pdf-parser",
    name: "PDF 智能解析",
    category: "文档处理",
    icon: FileText,
    description: "智能提取 PDF 文档中的结构化数据，支持表格、图表和多语言内容识别。",
    author: "王芳",
    updatedAt: "2026-01-18",
    tags: ["PDF", "OCR", "数据提取"],
  },
  {
    id: "market-research",
    name: "市场调研",
    category: "商业分析",
    icon: Search,
    description: "深度调研目标市场，分析竞争对手、用户画像和市场趋势，生成专业调研报告。",
    author: "刘洋",
    updatedAt: "2026-01-22",
    tags: ["市场调研", "竞品分析", "报告"],
  },
  {
    id: "data-analysis",
    name: "数据分析专家",
    category: "数据科学",
    icon: BarChart3,
    description: "自动分析数据集，发现关键洞察，生成可视化图表和分析报告。",
    author: "陈静",
    updatedAt: "2026-01-25",
    tags: ["数据分析", "可视化", "Excel"],
  },
  {
    id: "content-writer",
    name: "内容创作助手",
    category: "营销文案",
    icon: MessageSquare,
    description: "根据品牌调性和目标受众，生成高质量的营销文案、社交媒体内容和博客文章。",
    author: "赵敏",
    updatedAt: "2026-01-28",
    tags: ["文案", "营销", "社交媒体"],
  },
]

// 行业标签
const industryTags = [
  { name: "法律合规", count: 45 },
  { name: "开发工具", count: 120 },
  { name: "文档处理", count: 78 },
  { name: "商业分析", count: 56 },
  { name: "数据科学", count: 89 },
  { name: "营销文案", count: 67 },
]

export function SkillsShowcase() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <h2 className="text-2xl font-bold text-[#1d1d1f]">今日可用 Skills</h2>
            <p className="text-[#86868b] mt-2">由社区精选的高质量 Skills</p>
          </div>
          
          {/* Industry Tags */}
          <div className="flex flex-wrap gap-2">
            {industryTags.slice(0, 4).map((tag) => (
              <a
                key={tag.name}
                href={`/market?category=${encodeURIComponent(tag.name)}`}
                className="px-3 py-1 text-xs rounded-full bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#0071e3]/10 hover:text-[#0071e3] transition-colors"
              >
                {tag.name}
              </a>
            ))}
            <a
              href="/market"
              className="px-3 py-1 text-xs rounded-full bg-[#0071e3]/10 text-[#0071e3] hover:bg-[#0071e3]/20 transition-colors"
            >
              +{industryTags.length - 4} 更多
            </a>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {featuredSkills.map((skill, index) => (
            <motion.a
              key={skill.id}
              href={`/market/${skill.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-5 bg-white rounded-2xl border border-[#d2d2d7]/50 hover:border-[#0071e3]/30 hover:shadow-lg transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#0071e3]/10 flex items-center justify-center group-hover:bg-[#0071e3]/20 transition-colors">
                  <skill.icon className="w-5 h-5 text-[#0071e3]" />
                </div>
                <span className="px-2 py-0.5 text-xs rounded-full bg-[#f5f5f7] text-[#86868b]">
                  {skill.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#0071e3] transition-colors">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#86868b] leading-relaxed line-clamp-2 mb-4">
                {skill.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {skill.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded bg-[#f5f5f7] text-[#86868b]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-[#86868b]">
                <span>作者: {skill.author}</span>
                <span>{skill.updatedAt}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="rounded-full bg-transparent" asChild>
            <a href="/market" className="flex items-center gap-2">
              查看全部 Skills
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
