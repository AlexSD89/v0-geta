"use client"

import type React from "react"
import { Phone, User, Book, Search } from "lucide-react"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Sparkles,
  TrendingUp,
  ArrowRight,
  Users,
  Briefcase,
  MessageSquare,
  DollarSign,
  ShoppingCart,
  BarChart3,
  FolderKanban,
  Lock,
  Package,
  Mail,
  Calendar,
  FileText,
  Database,
  Slack,
  Twitter,
  Instagram,
  Coins,
  Target,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const integrationIcons: Record<string, React.ReactNode> = {
  LinkedIn: <Briefcase className="w-3.5 h-3.5" />,
  Gmail: <Mail className="w-3.5 h-3.5" />,
  Slack: <Slack className="w-3.5 h-3.5" />,
  Notion: <FileText className="w-3.5 h-3.5" />,
  微信: <MessageSquare className="w-3.5 h-3.5" />,
  Zendesk: <MessageSquare className="w-3.5 h-3.5" />,
  QuickBooks: <DollarSign className="w-3.5 h-3.5" />,
  Stripe: <DollarSign className="w-3.5 h-3.5" />,
  "Google Sheets": <FileText className="w-3.5 h-3.5" />,
  "Google Calendar": <Calendar className="w-3.5 h-3.5" />,
  Shopify: <ShoppingCart className="w-3.5 h-3.5" />,
  Twitter: <Twitter className="w-3.5 h-3.5" />,
  Instagram: <Instagram className="w-3.5 h-3.5" />,
  OpenAI: <Sparkles className="w-3.5 h-3.5" />,
  PostgreSQL: <Database className="w-3.5 h-3.5" />,
  Tableau: <BarChart3 className="w-3.5 h-3.5" />,
  Jira: <FolderKanban className="w-3.5 h-3.5" />,
  Splunk: <Lock className="w-3.5 h-3.5" />,
  PagerDuty: <Lock className="w-3.5 h-3.5" />,
  SAP: <Package className="w-3.5 h-3.5" />,
  Oracle: <Database className="w-3.5 h-3.5" />,
  FedEx: <Package className="w-3.5 h-3.5" />,
  "Anthropic Claude": <Sparkles className="w-3.5 h-3.5" />,
  "AWS Bedrock": <Database className="w-3.5 h-3.5" />,
  "Google Gemini": <Sparkles className="w-3.5 h-3.5" />,
  Cohere: <Sparkles className="w-3.5 h-3.5" />,
  "Hugging Face": <Sparkles className="w-3.5 h-3.5" />,
  "LinkedIn API": <Briefcase className="w-3.5 h-3.5" />,
  Payscale: <DollarSign className="w-3.5 h-3.5" />,
  Glassdoor: <Sparkles className="w-3.5 h-3.5" />,
  CRM系统: <MessageSquare className="w-3.5 h-3.5" />,
  IVR系统: <Phone className="w-3.5 h-3.5" />,
  邮件系统: <Mail className="w-3.5 h-3.5" />,
  前程无忧: <Briefcase className="w-3.5 h-3.5" />,
  智联招聘: <Briefcase className="w-3.5 h-3.5" />,
  北森: <Briefcase className="w-3.5 h-3.5" />,
  背景调查: <User className="w-3.5 h-3.5" />,
  培训平台: <Book className="w-3.5 h-3.5" />,
  淘宝: <ShoppingCart className="w-3.5 h-3.5" />,
  京东: <ShoppingCart className="w-3.5 h-3.5" />,
  拼多多: <ShoppingCart className="w-3.5 h-3.5" />,
  顺丰: <Package className="w-3.5 h-3.5" />,
  支付宝: <DollarSign className="w-3.5 h-3.5" />,
  微博: <MessageSquare className="w-3.5 h-3.5" />,
  抖音: <MessageSquare className="w-3.5 h-3.5" />,
  小红书: <MessageSquare className="w-3.5 h-3.5" />,
  Canva: <Sparkles className="w-3.5 h-3.5" />,
  Tableau: <BarChart3 className="w-3.5 h-3.5" />,
  "Power BI": <BarChart3 className="w-3.5 h-3.5" />,
  MySQL: <Database className="w-3.5 h-3.5" />,
  Python: <Sparkles className="w-3.5 h-3.5" />,
  Asana: <FolderKanban className="w-3.5 h-3.5" />,
  Confluence: <FolderKanban className="w-3.5 h-3.5" />,
  钉钉: <FolderKanban className="w-3.5 h-3.5" />,
  防火墙: <Lock className="w-3.5 h-3.5" />,
  "IDS/IPS": <Lock className="w-3.5 h-3.5" />,
  微步在线: <Lock className="w-3.5 h-3.5" />,
  VirusTotal: <Lock className="w-3.5 h-3.5" />,
  用友: <Package className="w-3.5 h-3.5" />,
  金蝶: <Package className="w-3.5 h-3.5" />,
  税务系统: <DollarSign className="w-3.5 h-3.5" />,
  银行系统: <DollarSign className="w-3.5 h-3.5" />,
  发票平台: <DollarSign className="w-3.5 h-3.5" />,
  菜鸟网络: <Package className="w-3.5 h-3.5" />,
  阿里巴巴1688: <Package className="w-3.5 h-3.5" />,
}

export default function SolutionsMarketClient() {
  const [selectedCategory, setSelectedCategory] = useState("全部")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { name: "全部", count: 10, icon: Package },
    { name: "招聘", count: 2, icon: Briefcase },
    { name: "客服", count: 1, icon: MessageSquare },
    { name: "财务", count: 1, icon: DollarSign },
    { name: "人力资源", count: 1, icon: Users },
    { name: "电商", count: 1, icon: ShoppingCart },
    { name: "营销", count: 1, icon: Sparkles },
    { name: "数据分析", count: 1, icon: BarChart3 },
    { name: "项目管理", count: 1, icon: FolderKanban },
    { name: "网络安全", count: 1, icon: Lock },
    { name: "供应链", count: 1, icon: Package },
  ]

  const solutions = [
    {
      id: "linkedin-recruitment",
      name: "LinkedIn 猎聘自动化",
      description: "让 AI 帮你找到最匹配的候选人，从搜索到沟通全程自动化",
      category: "招聘",
      sceneTags: ["猎头", "B2B招聘", "高端人才"],
      author: "Gate 官方",
      verified: true,
      calls: "67",
      forks: "11",
      rating: 4.5,
      roi: "1200%",
      efficiency: "15x",
      tags: ["猎头", "招聘", "LinkedIn", "AI 评估"],
      integrations: ["LinkedIn API", "Gmail", "Slack", "Payscale", "Glassdoor"],
      featured: true,
    },
    {
      id: "customer-service",
      name: "智能客服系统",
      description: "让 AI 成为你的 7×24 客服专家，秒级响应、95%+ 满意度",
      category: "客服",
      sceneTags: ["电商客服", "SaaS支持", "多渠道"],
      author: "Gate 官方",
      verified: true,
      calls: "82",
      forks: "14",
      rating: 4.6,
      roi: "879%",
      efficiency: "8x",
      tags: ["客服", "自动化", "AI 对话", "多渠道"],
      integrations: ["微信", "Zendesk", "CRM系统", "IVR系统", "邮件系统"],
      featured: true,
    },
    {
      id: "finance-automation",
      name: "智能财务管理",
      description: "让 AI 处理繁琐的票据和报表，财务团队专注高价值决策",
      category: "财务",
      sceneTags: ["费用报销", "发票处理", "财务报表"],
      author: "Gate 官方",
      verified: true,
      calls: "58",
      forks: "9",
      rating: 4.4,
      roi: "700%",
      efficiency: "6x",
      tags: ["财务", "OCR", "自动化", "合规"],
      integrations: ["用友", "金蝶", "税务系统", "银行系统", "发票平台"],
      featured: true,
    },
    {
      id: "hr-system",
      name: "智能 HR 系统",
      description: "让 AI 筛简历、排面试、答员工问题，HR 专注战略人才规划",
      category: "人力资源",
      sceneTags: ["简历筛选", "面试安排", "员工服务"],
      author: "Gate 官方",
      verified: true,
      calls: "51",
      forks: "8",
      rating: 4.4,
      roi: "450%",
      efficiency: "5x",
      tags: ["HR", "招聘", "AI 筛选", "员工服务"],
      integrations: ["前程无忧", "智联招聘", "北森", "背景调查", "培训平台"],
      featured: false,
    },
    {
      id: "ecommerce-ops",
      name: "电商运营自动化",
      description: "让 AI 处理订单、管库存、回客户，店铺运营效率翻 4 倍",
      category: "电商",
      sceneTags: ["订单处理", "库存管理", "客户服务"],
      author: "Gate 官方",
      verified: true,
      calls: "73",
      forks: "12",
      rating: 4.5,
      roi: "636%",
      efficiency: "4x",
      tags: ["电商", "订单", "库存", "客服"],
      integrations: ["淘宝", "京东", "拼多多", "顺丰", "支付宝"],
      featured: false,
    },
    {
      id: "marketing-automation",
      name: "营销内容自动化",
      description: "让 AI 写文案、做图片、发多平台，营销产出提升 10 倍",
      category: "营销",
      sceneTags: ["内容创作", "多平台分发", "营销获客"],
      author: "Gate 官方",
      verified: true,
      calls: "64",
      forks: "10",
      rating: 4.5,
      roi: "978%",
      efficiency: "10x",
      tags: ["营销", "AI 创作", "内容", "多平台"],
      integrations: ["微信", "微博", "抖音", "小红书", "Canva"],
      featured: false,
    },
    {
      id: "data-analysis",
      name: "数据分析自动化",
      description: "让 AI 清洗数据、跑分析、做报表，数据洞察触手可及",
      category: "数据分析",
      sceneTags: ["数据清洗", "BI分析", "可视化报表"],
      author: "Gate 官方",
      verified: true,
      calls: "46",
      forks: "7",
      rating: 4.3,
      roi: "600%",
      efficiency: "4x",
      tags: ["数据", "BI", "AI 分析", "可视化"],
      integrations: ["Tableau", "Power BI", "MySQL", "PostgreSQL", "Python"],
      featured: false,
    },
    {
      id: "project-management",
      name: "项目管理自动化",
      description: "让 AI 跟进度、分任务、提风险，项目交付更高效可控",
      category: "项目管理",
      sceneTags: ["进度跟踪", "资源调度", "风险预警"],
      author: "Gate 官方",
      verified: true,
      calls: "39",
      forks: "6",
      rating: 4.5,
      roi: "957%",
      efficiency: "2.5x",
      tags: ["项目", "敏捷", "协作", "资源管理"],
      integrations: ["Jira", "Asana", "Slack", "Confluence", "钉钉"],
      featured: false,
    },
    {
      id: "security-automation",
      name: "网络安全自动化",
      description: "让 AI 7×24 监控威胁、自动响应、生成报告，安全团队如虎添翼",
      category: "网络安全",
      sceneTags: ["威胁检测", "事件响应", "合规审计"],
      author: "Gate 官方",
      verified: true,
      calls: "34",
      forks: "5",
      rating: 4.6,
      roi: "607%",
      efficiency: "8x",
      tags: ["安全", "威胁检测", "合规", "自动响应"],
      integrations: ["Splunk", "防火墙", "IDS/IPS", "微步在线", "VirusTotal"],
      featured: false,
    },
    {
      id: "supply-chain",
      name: "供应链自动化",
      description: "让 AI 管采购、盯库存、调物流，供应链运转更顺畅",
      category: "供应链",
      sceneTags: ["采购管理", "库存优化", "物流调度"],
      author: "Gate 官方",
      verified: true,
      calls: "48",
      forks: "8",
      rating: 4.4,
      roi: "627%",
      efficiency: "3.5x",
      tags: ["供应链", "采购", "物流", "预测"],
      integrations: ["SAP", "用友", "顺丰", "菜鸟网络", "阿里巴巴1688"],
      featured: false,
    },
  ]

  const filteredSolutions = solutions.filter((solution) => {
    const matchesCategory = selectedCategory === "全部" || solution.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      solution.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      solution.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      solution.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      solution.sceneTags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20 pb-16">
        <div className="container-default mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071e3]/10 text-[#0071e3] text-sm font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>即插即用 · 一键部署</span>
          </div>

          <h1 className="heading-section mb-4">AI 解决方案</h1>

          <p className="subtitle-section mx-auto mb-2">找到你的业务场景，一键部署专业 AI 工作流</p>
          <p className="caption-text max-w-xl mx-auto">每个方案都包含：行业知识库 + 工作流编排 + 工具集成</p>
        </div>

        <div className="container mx-auto px-4 sm:px-6 mb-8">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="搜索场景：招聘、客服、电商..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <Card className="p-4 sticky top-24">
                <h3 className="font-semibold text-sm mb-3 text-foreground">业务场景</h3>
                <div className="space-y-1">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all ${
                          selectedCategory === category.name
                            ? "bg-[#0071e3]/10 text-[#0071e3] font-medium shadow-sm"
                            : "text-muted-foreground hover:bg-[#0071e3]/5 hover:text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4" />
                          <span>{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs px-1.5 py-0">
                          {category.count}
                        </Badge>
                      </button>
                    )
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-border space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">总方案数</span>
                    <span className="font-semibold text-foreground">10</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">总部署次数</span>
                    <span className="font-semibold text-foreground">542</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">平均效率提升</span>
                    <span className="font-semibold text-[#0071e3]">6x</span>
                  </div>
                </div>
              </Card>
            </aside>

            <div className="flex-1">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  找到 <span className="font-semibold text-foreground">{filteredSolutions.length}</span> 个方案
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-12">
                {filteredSolutions.map((solution) => (
                  <Link key={solution.id} href={`/solutions-market/${solution.id}`} className="block">
                    <Card className="p-5 hover:shadow-lg hover:border-[#0071e3]/40 transition-all duration-200 border-2 group flex flex-col h-full cursor-pointer">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {solution.sceneTags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[#f5f5f7] text-[#86868b]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h4 className="font-bold text-lg mb-2 group-hover:text-[#0071e3] transition-colors">
                        {solution.name}
                      </h4>

                      <p className="text-sm text-[#86868b] mb-4 line-clamp-2 flex-1">{solution.description}</p>

                      <div className="flex items-center gap-4 mb-4 py-3 px-3 rounded-lg bg-[#f5f5f7]">
                        <div className="flex items-center gap-1.5">
                          <Target className="w-4 h-4 text-[#0071e3]" />
                          <span className="text-sm font-bold text-[#1d1d1f]">{solution.efficiency}</span>
                          <span className="text-xs text-[#86868b]">效率</span>
                        </div>
                        <div className="w-px h-4 bg-[#d2d2d7]" />
                        <div className="flex items-center gap-1.5">
                          <TrendingUp className="w-4 h-4 text-[#34c759]" />
                          <span className="text-sm font-bold text-[#1d1d1f]">{solution.roi}</span>
                          <span className="text-xs text-[#86868b]">ROI</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {solution.integrations.slice(0, 3).map((tool, i) => (
                          <span key={i} className="px-2 py-0.5 text-xs bg-[#f5f5f7] text-[#86868b] rounded">
                            {tool}
                          </span>
                        ))}
                        {solution.integrations.length > 3 && (
                          <span className="px-2 py-0.5 text-xs bg-[#f5f5f7] text-[#86868b] rounded">
                            +{solution.integrations.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 pt-3 border-t border-[#d2d2d7]/50">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="flex-1 h-9 text-sm"
                          onClick={(e) => e.preventDefault()}
                        >
                          查看详情
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 h-9 text-sm bg-[#0071e3] hover:bg-[#0077ed] text-white"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            window.location.href = "/contact"
                          }}
                        >
                          免费试用
                        </Button>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              <Card className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/20">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                    <Coins className="w-4 h-4" />
                    <span>共创共享 · 使用即分佣</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl mb-3">成为 Gate 方案贡献者</h3>
                  <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    将您的行业专业知识与 Gate 标准化架构结合,打造可复用的 AI 自动化解决方案。Gate
                    帮您封装、编排、对接,每次方案被使用,您都将获得收益分成
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                    <Button size="lg" className="font-semibold" asChild>
                      <a href="/contact">
                        <Users className="w-5 h-5 mr-2" />
                        立即加入共创
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="/#waitlist">
                        了解共创流程
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                    <div>
                      <div className="text-2xl font-bold text-foreground mb-1">10</div>
                      <div className="text-xs text-muted-foreground">活跃方案</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground mb-1">542</div>
                      <div className="text-xs text-muted-foreground">总部署次数</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground mb-1">6x</div>
                      <div className="text-xs text-muted-foreground">平均效率提升</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="mt-6 p-5 sm:p-6 bg-gradient-to-br from-primary/5 via-background to-background border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="grid md:grid-cols-[1fr,auto] gap-4 items-center">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Gate Market</h3>
                    <p className="text-sm text-muted-foreground mb-4 text-pretty">
                      探索精选集成工具,让你的 AI 助手连接更多服务
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="group bg-transparent"
                      onClick={() => {
                        window.location.href = "/marketplace"
                      }}
                    >
                      浏览 Gate Market
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Package className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
