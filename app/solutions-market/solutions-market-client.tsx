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
  Clock,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Users,
  Zap,
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
  GitFork,
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
      description: "智能候选人搜索、评估、沟通全流程自动化,招聘效率提升 15 倍",
      category: "招聘",
      author: "Gate 官方",
      verified: true,
      calls: "67",
      forks: "11",
      rating: 4.5,
      roi: "1200%",
      efficiency: "1500%",
      tags: ["猎头", "招聘", "LinkedIn", "AI 评估"],
      integrations: ["LinkedIn API", "Gmail", "Slack", "Payscale", "Glassdoor"],
      featured: true,
    },
    {
      id: "customer-service",
      name: "智能客服系统",
      description: "7×24 小时智能客服,响应速度提升 8 倍,客户满意度 95%+",
      category: "客服",
      author: "Gate 官方",
      verified: true,
      calls: "82",
      forks: "14",
      rating: 4.6,
      roi: "879%",
      efficiency: "800%",
      tags: ["客服", "自动化", "AI 对话", "多渠道"],
      integrations: ["微信", "Zendesk", "CRM系统", "IVR系统", "邮件系统"],
      featured: true,
    },
    {
      id: "finance-automation",
      name: "智能财务管理",
      description: "票据识别、费用审核、报表生成全自动化,财务效率提升 6 倍",
      category: "财务",
      author: "Gate 官方",
      verified: true,
      calls: "58",
      forks: "9",
      rating: 4.4,
      roi: "700%",
      efficiency: "600%",
      tags: ["财务", "OCR", "自动化", "合规"],
      integrations: ["用友", "金蝶", "税务系统", "银行系统", "发票平台"],
      featured: true,
    },
    {
      id: "hr-system",
      name: "智能 HR 系统",
      description: "简历筛选、面试安排、员工服务自动化,HR 工作效率提升 5 倍",
      category: "人力资源",
      author: "Gate 官方",
      verified: true,
      calls: "51",
      forks: "8",
      rating: 4.4,
      roi: "450%",
      efficiency: "500%",
      tags: ["HR", "招聘", "AI 筛选", "员工服务"],
      integrations: ["前程无忧", "智联招聘", "北森", "背景调查", "培训平台"],
      featured: false,
    },
    {
      id: "ecommerce-ops",
      name: "电商运营自动化",
      description: "订单处理、库存管理、客服自动化,电商运营效率提升 4 倍",
      category: "电商",
      author: "Gate 官方",
      verified: true,
      calls: "73",
      forks: "12",
      rating: 4.5,
      roi: "636%",
      efficiency: "400%",
      tags: ["电商", "订单", "库存", "客服"],
      integrations: ["淘宝", "京东", "拼多多", "顺丰", "支付宝"],
      featured: false,
    },
    {
      id: "marketing-automation",
      name: "营销内容自动化",
      description: "文案创作、图片设计、多平台分发,营销效率提升 10 倍",
      category: "营销",
      author: "Gate 官方",
      verified: true,
      calls: "64",
      forks: "10",
      rating: 4.5,
      roi: "978%",
      efficiency: "1000%",
      tags: ["营销", "AI 创作", "内容", "多平台"],
      integrations: ["微信", "微博", "抖音", "小红书", "Canva"],
      featured: false,
    },
    {
      id: "data-analysis",
      name: "数据分析自动化",
      description: "数据清洗、分析、可视化全自动,数据分析效率提升 4 倍",
      category: "数据分析",
      author: "Gate 官方",
      verified: true,
      calls: "46",
      forks: "7",
      rating: 4.3,
      roi: "600%",
      efficiency: "400%",
      tags: ["数据", "BI", "AI 分析", "可视化"],
      integrations: ["Tableau", "Power BI", "MySQL", "PostgreSQL", "Python"],
      featured: false,
    },
    {
      id: "project-management",
      name: "项目管理自动化",
      description: "项目规划、进度跟踪、资源管理智能化,项目效率提升 2.5 倍",
      category: "项目管理",
      author: "Gate 官方",
      verified: true,
      calls: "39",
      forks: "6",
      rating: 4.5,
      roi: "957%",
      efficiency: "250%",
      tags: ["项目", "敏捷", "协作", "资源管理"],
      integrations: ["Jira", "Asana", "Slack", "Confluence", "钉钉"],
      featured: false,
    },
    {
      id: "security-automation",
      name: "网络安全自动化",
      description: "威胁检测、事件响应、合规检查自动化,安全响应速度提升 8 倍",
      category: "网络安全",
      author: "Gate 官方",
      verified: true,
      calls: "34",
      forks: "5",
      rating: 4.6,
      roi: "607%",
      efficiency: "800%",
      tags: ["安全", "威胁检测", "合规", "自动响应"],
      integrations: ["Splunk", "防火墙", "IDS/IPS", "微步在线", "VirusTotal"],
      featured: false,
    },
    {
      id: "supply-chain",
      name: "供应链自动化",
      description: "采购、库存、物流全流程智能化,供应链效率提升 3.5 倍",
      category: "供应链",
      author: "Gate 官方",
      verified: true,
      calls: "48",
      forks: "8",
      rating: 4.4,
      roi: "627%",
      efficiency: "350%",
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
      solution.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>即将上线 · 预览版</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-3">AI 劳动力市场</h1>

          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-2">
            Gate 帮您最低成本封装企业知识,智能选择 AI 供应商,标准化接口随时插拔,快速让传统企业具备 AI 能力
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">一键 Fork 专业方案 · 共创共享 · 使用即分佣</p>
        </div>

        <div className="container mx-auto px-4 sm:px-6 mb-8">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="搜索方案名称、描述或标签..."
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
                <h3 className="font-semibold text-sm mb-3 text-foreground">方案分类</h3>
                <div className="space-y-1">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all ${
                          selectedCategory === category.name
                            ? "bg-accent text-accent-foreground font-medium shadow-sm"
                            : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
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
                    <span className="text-muted-foreground">总调用次数</span>
                    <span className="font-semibold text-foreground">542</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">平均效率提升</span>
                    <span className="font-semibold text-accent">800%</span>
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
                  <Card
                    key={solution.id}
                    className="p-4 hover:shadow-lg hover:border-accent/40 transition-all duration-200 border-2 group"
                  >
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {solution.integrations.slice(0, 3).map((integration) => (
                        <Badge
                          key={integration}
                          variant="secondary"
                          className="text-xs px-2 py-0.5 flex items-center gap-1"
                        >
                          {integrationIcons[integration] || <Sparkles className="w-3 h-3" />}
                          <span>{integration}</span>
                        </Badge>
                      ))}
                      {solution.integrations.length > 3 && (
                        <Badge variant="secondary" className="text-xs px-2 py-0.5">
                          +{solution.integrations.length - 3}
                        </Badge>
                      )}
                    </div>

                    <h4 className="font-bold text-base mb-2 group-hover:text-accent transition-colors">
                      {solution.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{solution.description}</p>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5 text-accent" />
                          <span className="font-medium">{solution.roi}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5 text-accent" />
                          <span>{solution.efficiency}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost" className="h-7 text-xs" asChild>
                          <Link href={`/solutions-market/${solution.id}`}>
                            详情
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 text-xs text-muted-foreground bg-transparent"
                          disabled
                        >
                          <GitFork className="w-3 h-3 mr-1" />
                          Fork
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-8 bg-gradient-to-br from-primary/10 via-accent/5 to-background border-2 border-primary/20">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
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
                      <div className="text-xs text-muted-foreground">总调用次数</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground mb-1">800%</div>
                      <div className="text-xs text-muted-foreground">平均效率提升</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="mt-6 p-5 sm:p-6 bg-gradient-to-br from-accent/5 via-background to-background border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
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
                    <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center">
                      <Package className="w-10 h-10 text-accent" />
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
