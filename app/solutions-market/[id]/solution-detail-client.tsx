"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GateLogoAvatar } from "@/components/gate-logo-avatar"
import { GatePluggableArchitecture } from "@/components/gate-pluggable-architecture" // Replaced GateArchitectureTree with GatePluggableArchitecture
import {
  ArrowLeft,
  GitFork,
  Star,
  Eye,
  CheckCircle2,
  Sparkles,
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
  Users,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import type React from "react"

const integrationIcons: Record<string, React.ReactNode> = {
  LinkedIn: <Briefcase className="w-4 h-4" />,
  Gmail: <Mail className="w-4 h-4" />,
  Slack: <Slack className="w-4 h-4" />,
  Notion: <FileText className="w-4 h-4" />,
  微信: <MessageSquare className="w-4 h-4" />,
  Zendesk: <MessageSquare className="w-4 h-4" />,
  QuickBooks: <DollarSign className="w-4 h-4" />,
  Stripe: <DollarSign className="w-4 h-4" />,
  "Google Sheets": <FileText className="w-4 h-4" />,
  "Google Calendar": <Calendar className="w-4 h-4" />,
  Shopify: <ShoppingCart className="w-4 h-4" />,
  Twitter: <Twitter className="w-4 h-4" />,
  Instagram: <Instagram className="w-4 h-4" />,
  OpenAI: <Sparkles className="w-4 h-4" />,
  PostgreSQL: <Database className="w-4 h-4" />,
  Tableau: <BarChart3 className="w-4 h-4" />,
  Jira: <FolderKanban className="w-4 h-4" />,
  Splunk: <Lock className="w-4 h-4" />,
  PagerDuty: <Lock className="w-4 h-4" />,
  SAP: <Package className="w-4 h-4" />,
  Oracle: <Database className="w-4 h-4" />,
  FedEx: <Package className="w-4 h-4" />,
  "Anthropic Claude": <Sparkles className="w-4 h-4" />,
  "AWS Bedrock": <Database className="w-4 h-4" />,
  "Google Gemini": <Sparkles className="w-4 h-4" />,
  Cohere: <Sparkles className="w-4 h-4" />,
  "Hugging Face": <Sparkles className="w-4 h-4" />,
}

const solutionsData: Record<string, any> = {
  "linkedin-recruitment": {
    name: "LinkedIn 猎聘自动化",
    description: "智能候选人搜索、评估、沟通全流程自动化,招聘效率提升 15 倍",
    category: "招聘",
    author: "Gate 官方",
    verified: true,
    calls: "12.5K",
    forks: "856",
    rating: 4.9,
    roi: "1200%",
    efficiency: "1500%",
    tags: ["猎头", "招聘", "LinkedIn", "AI 评估"],
    integrations: ["LinkedIn", "Gmail", "Slack", "Notion", "Anthropic Claude"],

    // Gate三层架构
    leftLayer: {
      title: "猎聘知识封装",
      knowledge: [
        { title: "候选人搜索知识", items: ["100,000+ 专业词汇库", "职位映射规则", "公司分级体系", "地域覆盖策略"] },
        { title: "候选人评估知识", items: ["简历解读规则", "能力评估模型", "文化匹配度", "薪酬谈判策略"] },
        { title: "客户管理知识", items: ["需求分析方法", "候选人推荐", "项目管理流程", "客户关系维护"] },
      ],
      skills: [
        "智能搜索技能: 75倍覆盖范围扩展",
        "候选人评估: 96.2%准确率",
        "个性化沟通: 基于画像的定制",
        "项目管理: 全流程自动化",
      ],
    },

    middleLayer: {
      title: "Gate 猎聘引擎",
      workflow: [
        { title: "需求分析", desc: "职位描述深度解析和关键词提取" },
        { title: "智能搜索", desc: "多维度候选人搜索和画像生成" },
        { title: "匹配评估", desc: "候选人与职位匹配度计算" },
        { title: "个性化沟通", desc: "定制化消息生成和发送" },
        { title: "跟进管理", desc: "自动化跟进提醒和状态跟踪" },
      ],
      agents: ["搜索专家 Agent", "评估专家 Agent", "沟通专家 Agent", "项目管理 Agent"],
      performance: ["98%+ 节点执行成功率", "<80秒 完成全流程搜索", "1000+ 候选人同时沟通", "95%+ 自动化率"],
    },

    rightLayer: {
      title: "外部系统集成",
      integrations: [
        { category: "LinkedIn API", items: ["Sales Navigator API", "Profile API", "Company API", "Network API"] },
        { category: "通讯工具", items: ["邮件系统", "LinkedIn InMail", "短信平台", "视频会议"] },
        { category: "数据服务", items: ["Payscale", "Glassdoor", "天眼查", "企查查"] },
      ],
    },

    results: {
      efficiency: [
        "候选人搜索: 80秒完成 (原3周,提升1500倍)",
        "搜索覆盖: 100万+候选人 (扩大75倍)",
        "初步筛选: 95%准确率",
        "沟通效率: 1000+并发",
      ],
      cost: ["搜索成本: 降低96%", "时间成本: 降低99%", "人力成本: 降低85%", "工具成本: 降低80%"],
      revenue: ["项目数量: 提升300%", "项目价值: 提升200%", "成交率: 提升至85%", "客户满意度: 95%+"],
      roi: { investment: "¥78,800/年", revenue: "¥945,600", roi: "1200%", payback: "1个月" },
    },

    requirements: ["Claude Code CLI 环境", "LinkedIn Sales Navigator 账号", "企业邮箱系统", "Gate MCP 服务"],
  },

  "customer-service": {
    name: "智能客服系统",
    description: "7×24 小时智能客服,响应速度提升 8 倍,客户满意度 95%+",
    category: "客服",
    author: "Gate 官方",
    verified: true,
    calls: "45.2K",
    forks: "2.1K",
    rating: 4.9,
    roi: "879%",
    efficiency: "800%",
    tags: ["客服", "自动化", "AI 对话", "多渠道"],
    integrations: ["微信", "Slack", "Zendesk", "OpenAI", "Cohere"],

    leftLayer: {
      title: "客服知识封装",
      knowledge: [
        { title: "产品知识体系", items: ["50,000+ 产品条目", "技术规格库", "使用指南库", "故障排除库"] },
        { title: "服务流程知识", items: ["200+ 标准化流程", "异常处理流程", "升级转接流程", "质量控制流程"] },
        { title: "客户行为知识", items: ["客户画像分析", "行为模式识别", "满意度预测", "投诉风险预警"] },
      ],
      skills: [
        "智能问答技能: 95%+准确率",
        "情感分析技能: 客户情绪识别",
        "意图识别技能: 95%+准确率",
        "多语言技能: 20+语言支持",
      ],
    },

    middleLayer: {
      title: "Gate 客服引擎",
      workflow: [
        { title: "智能路由", desc: "基于技能和负载的智能分配" },
        { title: "意图识别", desc: "自动识别客户需求和意图" },
        { title: "知识检索", desc: "语义搜索匹配最优答案" },
        { title: "个性化服务", desc: "基于客户画像的定制服务" },
        { title: "质量控制", desc: "实时服务质量监控" },
      ],
      agents: ["智能客服 Agent", "情感分析 Agent", "知识管理 Agent", "质量监控 Agent"],
      performance: ["99%+ 节点执行成功率", "<2秒 智能响应", "10,000+ 并发客服会话", "95%+ 自动化率"],
    },

    rightLayer: {
      title: "外部系统集成",
      integrations: [
        { category: "通讯平台", items: ["网站在线客服", "移动APP客服", "微信客服", "电话客服"] },
        { category: "业务系统", items: ["电商平台", "CRM系统", "ERP系统", "支付系统"] },
        { category: "AI服务", items: ["语音识别", "语音合成", "自然语言处理", "机器翻译"] },
      ],
    },

    results: {
      efficiency: [
        "服务处理量: 120,000/天 (提升140%)",
        "平均响应时间: 1.8秒 (提升96%)",
        "问题解决率: 91% (提升34%)",
        "首次解决率: 85% (提升89%)",
      ],
      cost: ["人力成本: 降低72%", "培训成本: 降低85%", "管理成本: 降低60%", "运维成本: 降低55%"],
      quality: ["客户满意度: 94% (提升25%)", "服务一致性: 100%", "投诉率: 降低65%", "NPS评分: 68 (提升94%)"],
      roi: { investment: "¥580,000", revenue: "¥5,100,000", roi: "879%", payback: "1.4个月" },
    },

    requirements: ["Claude Code CLI 环境", "客服系统 API 接入", "知识库数据", "Gate MCP 服务"],
  },

  "finance-automation": {
    name: "智能财务管理",
    description: "票据识别、费用审核、报表生成全自动化,财务效率提升 6 倍",
    category: "财务",
    author: "Gate 官方",
    verified: true,
    calls: "28.3K",
    forks: "1.5K",
    rating: 4.8,
    roi: "700%",
    efficiency: "600%",
    tags: ["财务", "OCR", "自动化", "合规"],
    integrations: ["QuickBooks", "Stripe", "Google Sheets", "AWS Bedrock"],

    leftLayer: {
      title: "财务知识封装",
      knowledge: [
        { title: "会计准则知识", items: ["企业会计准则", "税法法规", "财务制度", "合规要求"] },
        { title: "成本管理知识", items: ["成本核算方法", "预算管理流程", "费用控制标准", "绩效评价指标"] },
        { title: "资金管理知识", items: ["现金流管理", "投资决策分析", "融资策略规划", "风险控制管理"] },
      ],
      skills: [
        "票据识别技能: 98.5%准确率",
        "费用审核技能: 智能合规性检查",
        "报表生成技能: 自动化财务报表",
        "风险预警技能: 实时财务风险监控",
      ],
    },

    middleLayer: {
      title: "Gate 财务引擎",
      workflow: [
        { title: "票据处理", desc: "智能识别、分类、验证" },
        { title: "费用审核", desc: "自动合规性检查和审批" },
        { title: "账务处理", desc: "自动记账、对账、结账" },
        { title: "报表生成", desc: "财务报表自动编制" },
        { title: "风险控制", desc: "财务风险识别和预警" },
      ],
      agents: ["会计 Agent", "审核 Agent", "分析 Agent", "税务 Agent", "审计 Agent"],
      performance: ["99%+ 节点执行成功率", "5秒/张 票据处理", "98.5% 票据识别准确率", "95%+ 自动化率"],
    },

    rightLayer: {
      title: "外部系统集成",
      integrations: [
        { category: "ERP系统", items: ["用友系统", "金蝶系统", "SAP系统", "自研系统"] },
        { category: "银行金融", items: ["50+ 主流银行", "支付系统", "资金管理", "对账服务"] },
        { category: "税务系统", items: ["税务局系统", "发票平台", "税控设备", "政策更新"] },
      ],
    },

    results: {
      efficiency: [
        "票据处理: 5秒/张 (提升360倍)",
        "报表生成: 10分钟 (提升432倍)",
        "费用审核: 95%自动化率",
        "合规检查: 100%自动化率",
      ],
      cost: ["财务人力成本: 降低70%", "审计合规成本: 降低85%", "错误损失成本: 降低95%", "合规风险成本: 降低90%"],
      quality: ["财务准确率: 99.5%", "合规达标率: 100%", "决策支持质量: 显著提升", "风险控制能力: 大幅增强"],
      roi: { investment: "¥450,000", revenue: "¥3,150,000", roi: "700%", payback: "1.7个月" },
    },

    requirements: ["Claude Code CLI 环境", "财务系统 API 接入", "OCR 识别服务", "Gate MCP 服务"],
  },

  "hr-system": {
    name: "智能 HR 系统",
    description: "简历筛选、面试安排、员工服务自动化,HR 工作效率提升 5 倍",
    category: "人力资源",
    author: "Gate 官方",
    verified: true,
    calls: "18.7K",
    forks: "982",
    rating: 4.7,
    roi: "450%",
    efficiency: "500%",
    tags: ["HR", "招聘", "AI 筛选", "员工服务"],
    integrations: ["LinkedIn", "Gmail", "Google Calendar", "Anthropic Claude"],

    leftLayer: {
      title: "HR 知识封装",
      knowledge: [
        { title: "招聘管理知识", items: ["岗位分析标准", "薪酬体系设计", "招聘渠道策略", "面试评估方法"] },
        { title: "培训发展知识", items: ["培训需求分析", "培训体系设计", "职业发展规划", "学习效果评估"] },
        { title: "绩效管理知识", items: ["绩效指标设计", "绩效评估流程", "绩效改进计划", "激励机制设计"] },
      ],
      skills: [
        "智能简历筛选: 95%+准确率",
        "候选人智能匹配: 96.2%准确率",
        "面试自动化安排: 100%自动化",
        "员工服务机器人: 7×24小时",
      ],
    },

    middleLayer: {
      title: "Gate HR 引擎",
      workflow: [
        { title: "简历智能处理", desc: "解析、筛选、匹配、评估" },
        { title: "面试安排", desc: "自动协调多方时间和地点" },
        { title: "员工入职", desc: "入职流程自动化办理" },
        { title: "培训管理", desc: "培训需求分析和课程推荐" },
        { title: "绩效评估", desc: "绩效数据收集和分析" },
      ],
      agents: ["招聘专家 Agent", "培训发展 Agent", "绩效管理 Agent", "员工关系 Agent", "薪酬福利 Agent"],
      performance: ["99%+ 节点执行成功率", "3秒/份 简历处理", "95%+ 简历筛选准确率", "95%+ 自动化率"],
    },

    rightLayer: {
      title: "外部系统集成",
      integrations: [
        { category: "招聘平台", items: ["前程无忧", "智联招聘", "猎聘网", "LinkedIn", "BOSS直聘"] },
        { category: "HR管理系统", items: ["北森系统", "用友HR", "金蝶HR", "SAP SuccessFactors"] },
        { category: "第三方服务", items: ["背景调查", "体检服务", "培训平台", "保险服务"] },
      ],
    },

    results: {
      efficiency: [
        "简历筛选: 10,000份/天 (提升900%)",
        "筛选准确率: 95% (提升36%)",
        "面试安排: 100%自动化",
        "招聘周期: 27天 (缩短40%)",
      ],
      cost: ["招聘成本: 降低50%", "HR人力成本: 降低55%", "培训成本: 降低50%", "管理成本: 降低45%"],
      quality: ["候选人质量: 提升60%", "入职留存率: 提升25%", "员工满意度: 90%+", "HR服务质量: 100%标准化"],
      roi: { investment: "¥280,000", revenue: "¥1,260,000", roi: "450%", payback: "2.7个月" },
    },

    requirements: ["Claude Code CLI 环境", "HR 系统 API 接入", "招聘平台账号", "Gate MCP 服务"],
  },

  "ecommerce-ops": {
    name: "电商运营自动化",
    description: "订单处理、库存管理、客服自动化,电商运营效率提升 4 倍",
    category: "电商",
    author: "Gate 官方",
    verified: true,
    calls: "32.1K",
    forks: "1.8K",
    rating: 4.8,
    roi: "636%",
    efficiency: "400%",
    tags: ["电商", "订单", "库存", "客服"],
    integrations: ["Shopify", "微信", "Stripe", "Google Gemini"],

    leftLayer: {
      title: "电商运营知识封装",
      knowledge: [
        { title: "平台运营知识", items: ["平台规则算法", "流量获取策略", "转化率优化", "平台活动策略"] },
        { title: "商品运营知识", items: ["选品策略", "定价策略", "库存管理", "品类运营"] },
        { title: "客户运营知识", items: ["用户画像分析", "会员运营体系", "复购策略", "客服服务标准"] },
      ],
      skills: [
        "智能选品技能: 85%+爆款预测",
        "动态定价技能: 价格优化",
        "库存优化技能: 补货预测",
        "营销策略技能: 活动效果预测",
      ],
    },

    middleLayer: {
      title: "Gate 电商运营引擎",
      workflow: [
        { title: "订单智能处理", desc: "自动分单、库存检查、支付验证" },
        { title: "智能客服", desc: "售前咨询、售后问题、投诉处理" },
        { title: "价格监控优化", desc: "竞品价格跟踪和定价策略" },
        { title: "营销活动管理", desc: "活动配置、效果分析、优化调整" },
        { title: "库存智能管理", desc: "需求预测、补货建议、滞销预警" },
      ],
      agents: ["运营策略 Agent", "客户服务 Agent", "数据分析 Agent", "供应链 Agent"],
      performance: ["99%+ 节点执行成功率", "<30秒 订单处理", "50,000+ 订单/天", "95%+ 自动化率"],
    },

    rightLayer: {
      title: "外部系统集成",
      integrations: [
        { category: "电商平台", items: ["淘宝天猫", "京东商城", "拼多多", "抖音电商"] },
        { category: "物流服务", items: ["顺丰速运", "京东物流", "菜鸟网络", "通达系"] },
        { category: "支付金融", items: ["支付宝", "微信支付", "银行支付", "消费金融"] },
      ],
    },

    results: {
      efficiency: [
        "订单处理: 5分钟/单 (提升2400%)",
        "客服响应: 30秒 (提升900%)",
        "库存周转: 12天 (提升275%)",
        "客户转化率: 提升35%",
      ],
      cost: ["运营人力成本: 降低70%", "物流配送成本: 降低25%", "库存持有成本: 降低40%", "营销推广成本: 降低50%"],
      quality: ["订单准确率: 99.8%", "客户满意度: 92%", "库存准确率: 99.5%", "复购率: 提升25%"],
      roi: { investment: "¥110,000", revenue: "¥700,000", roi: "636%", payback: "1.9个月" },
    },

    requirements: ["Claude Code CLI 环境", "电商平台 API 接入", "物流系统对接", "Gate MCP 服务"],
  },

  "marketing-automation": {
    name: "营销内容自动化",
    description: "文案创作、图片设计、多平台分发,营销效率提升 10 倍",
    category: "营销",
    author: "Gate 官方",
    verified: true,
    calls: "25.6K",
    forks: "1.3K",
    rating: 4.8,
    roi: "978%",
    efficiency: "1000%",
    tags: ["营销", "AI 创作", "内容", "多平台"],
    integrations: ["Twitter", "Instagram", "OpenAI", "Hugging Face"],

    leftLayer: {
      title: "营销知识封装",
      knowledge: [
        { title: "品牌策略知识", items: ["品牌定位", "品牌调性", "视觉识别", "品牌故事"] },
        { title: "内容营销知识", items: ["内容策略", "文案技巧", "视觉设计", "用户洞察"] },
        { title: "数字营销知识", items: ["SEO优化", "社交媒体", "邮件营销", "广告投放"] },
      ],
      skills: [
        "智能内容创作: 10分钟/篇",
        "AI视觉设计: 智能海报生成",
        "SEO智能优化: 关键词布局",
        "社交营销适配: 多平台格式",
      ],
    },

    middleLayer: {
      title: "Gate 营销内容引擎",
      workflow: [
        { title: "内容策划", desc: "选题规划、趋势分析、关键词研究" },
        { title: "智能文案创作", desc: "AI文案生成、标题优化、内容润色" },
        { title: "视觉设计生成", desc: "图片生成、视频制作、海报设计" },
        { title: "SEO智能优化", desc: "关键词布局、元数据优化、内容优化" },
        { title: "多平台分发", desc: "内容格式适配、平台发布、排期管理" },
      ],
      agents: ["内容创作 Agent", "营销策略 Agent", "数据分析 Agent", "社交运营 Agent"],
      performance: ["99%+ 节点执行成功率", "<5分钟 内容生成", "100+ 内容同时创作", "95%+ 自动化率"],
    },

    rightLayer: {
      title: "外部系统集成",
      integrations: [
        { category: "社交媒体", items: ["微信生态", "微博平台", "抖音快手", "小红书"] },
        { category: "内容管理", items: ["官网CMS", "电商平台", "邮件系统", "短信平台"] },
        { category: "数据分析", items: ["百度统计", "微信指数", "第三方监测", "自有BI系统"] },
      ],
    },

    results: {
      efficiency: [
        "文案创作: 10分钟/篇 (提升1800%)",
        "图片设计: 5分钟/张 (提升2400%)",
        "视频制作: 30分钟/条 (提升4800%)",
        "内容分发: 1键10+平台",
      ],
      marketing: ["内容阅读量: 提升500%", "用户互动率: 提升300%", "SEO排名: 提升400%", "品牌曝光度: 提升800%"],
      cost: ["内容制作成本: 降低90%", "营销人力成本: 降低70%", "广告投放成本: 降低40%", "工具软件成本: 降低60%"],
      roi: { investment: "¥225,000", revenue: "¥2,200,000", roi: "978%", payback: "1.2个月" },
    },

    requirements: ["Claude Code CLI 环境", "社交媒体 API 接入", "AI 内容生成服务", "Gate MCP 服务"],
  },

  "data-analysis": {
    name: "数据分析自动化",
    description: "数据清洗、分析、可视化全自动,数据分析效率提升 4 倍",
    category: "数据分析",
    author: "Gate 官方",
    verified: true,
    calls: "21.4K",
    forks: "1.1K",
    rating: 4.7,
    roi: "600%",
    efficiency: "400%",
    tags: ["数据", "BI", "AI 分析", "可视化"],
    integrations: ["Google Sheets", "PostgreSQL", "Tableau", "AWS Bedrock"],

    leftLayer: {
      title: "数据分析知识封装",
      knowledge: [
        { title: "数据处理知识", items: ["数据清洗规则", "数据转换方法", "数据质量标准", "异常值处理"] },
        { title: "分析方法知识", items: ["统计分析方法", "预测模型", "聚类分析", "关联分析"] },
        { title: "可视化知识", items: ["图表选择", "仪表板设计", "交互设计", "数据叙事"] },
      ],
      skills: ["智能数据清洗: 自动化处理", "AI驱动分析: 智能洞察", "自动化报告: 定期生成", "预测性分析: 趋势预测"],
    },

    middleLayer: {
      title: "Gate 数据分析引擎",
      workflow: [
        { title: "数据采集", desc: "多源数据自动采集和整合" },
        { title: "数据清洗", desc: "自动化数据清洗和转换" },
        { title: "智能分析", desc: "AI驱动的数据分析和洞察" },
        { title: "可视化生成", desc: "自动化图表和仪表板生成" },
        { title: "报告输出", desc: "定期分析报告自动生成" },
      ],
      agents: ["数据工程 Agent", "分析专家 Agent", "可视化 Agent", "报告生成 Agent"],
      performance: ["99%+ 节点执行成功率", "<10分钟 数据处理", "TB级 数据处理能力", "95%+ 自动化率"],
    },

    rightLayer: {
      title: "外部系统集成",
      integrations: [
        { category: "数据源", items: ["数据库系统", "业务系统", "日志系统", "第三方API"] },
        { category: "分析工具", items: ["Python/R", "SQL数据库", "BI工具", "机器学习平台"] },
        { category: "可视化平台", items: ["Tableau", "Power BI", "自研BI", "数据大屏"] },
      ],
    },

    results: {
      efficiency: [
        "数据处理: 10分钟 (原2天,提升288倍)",
        "报表生成: 自动化 (原1周)",
        "分析深度: 提升300%",
        "洞察速度: 提升400%",
      ],
      cost: ["数据分析成本: 降低75%", "人力成本: 降低60%", "工具成本: 降低50%", "时间成本: 降低80%"],
      quality: ["数据准确率: 99.5%", "分析深度: 显著提升", "决策支持: 大幅增强", "业务价值: 明显提高"],
      roi: { investment: "¥180,000", revenue: "¥1,080,000", roi: "600%", payback: "2个月" },
    },

    requirements: ["Claude Code CLI 环境", "数据库访问权限", "BI 工具集成", "Gate MCP 服务"],
  },

  "project-management": {
    name: "项目管理自动化",
    description: "项目规划、进度跟踪、资源管理智能化,项目效率提升 2.5 倍",
    category: "项目管理",
    author: "Gate 官方",
    verified: true,
    calls: "16.8K",
    forks: "892",
    rating: 4.8,
    roi: "957%",
    efficiency: "250%",
    tags: ["项目", "敏捷", "协作", "资源管理"],
    integrations: ["Jira", "Slack", "Notion", "Anthropic Claude"],

    leftLayer: {
      title: "项目管理知识封装",
      knowledge: [
        { title: "项目规划知识", items: ["WBS分解", "里程碑设定", "资源规划", "风险识别"] },
        { title: "敏捷方法知识", items: ["Scrum框架", "看板方法", "迭代规划", "回顾改进"] },
        { title: "团队协作知识", items: ["沟通机制", "决策流程", "冲突处理", "团队建设"] },
      ],
      skills: ["智能任务分配: AI驱动", "进度智能跟踪: 自动化", "风险预警: 实时监控", "资源优化: 智能调度"],
    },

    middleLayer: {
      title: "Gate 项目管理引擎",
      workflow: [
        { title: "项目规划", desc: "自动化项目计划和任务分解" },
        { title: "任务分配", desc: "智能任务分配和资源调度" },
        { title: "进度跟踪", desc: "实时进度监控和预警" },
        { title: "风险管理", desc: "风险识别和应对措施" },
        { title: "团队协作", desc: "协作工具集成和沟通管理" },
      ],
      agents: ["规划专家 Agent", "执行管理 Agent", "风险控制 Agent", "团队协作 Agent"],
      performance: ["99%+ 节点执行成功率", "实时 进度更新", "100+ 项目并行管理", "95%+ 自动化率"],
    },

    rightLayer: {
      title: "外部系统集成",
      integrations: [
        { category: "项目管理工具", items: ["Jira", "Asana", "Monday.com", "自研系统"] },
        { category: "协作工具", items: ["Slack", "Microsoft Teams", "钉钉", "飞书"] },
        { category: "文档系统", items: ["Notion", "Confluence", "Google Docs", "石墨文档"] },
      ],
    },

    results: {
      efficiency: [
        "项目规划: 2小时 (原2天,提升1200%)",
        "任务分配: 自动化 (原半天)",
        "进度跟踪: 实时 (原每周)",
        "项目交付: 提前20%",
      ],
      cost: ["项目管理成本: 降低60%", "沟通成本: 降低70%", "返工成本: 降低80%", "延期成本: 降低90%"],
      quality: ["项目成功率: 提升40%", "团队满意度: 提升35%", "交付质量: 提升30%", "客户满意度: 提升45%"],
      roi: { investment: "¥95,000", revenue: "¥910,000", roi: "957%", payback: "1.3个月" },
    },

    requirements: ["Claude Code CLI 环境", "项目管理工具 API", "团队协作平台", "Gate MCP 服务"],
  },

  "security-automation": {
    name: "网络安全自动化",
    description: "威胁检测、事件响应、合规检查自动化,安全响应速度提升 8 倍",
    category: "网络安全",
    author: "Gate 官方",
    verified: true,
    calls: "14.2K",
    forks: "756",
    rating: 4.9,
    roi: "607%",
    efficiency: "800%",
    tags: ["安全", "威胁检测", "合规", "自动响应"],
    integrations: ["Splunk", "Slack", "PagerDuty", "AWS Bedrock"],

    leftLayer: {
      title: "网络安全知识封装",
      knowledge: [
        { title: "威胁情报知识", items: ["攻击模式库", "漏洞数据库", "威胁指标", "攻击链分析"] },
        { title: "安全策略知识", items: ["访问控制", "加密标准", "安全配置", "防护措施"] },
        { title: "合规标准知识", items: ["等保要求", "行业标准", "法规遵从", "审计要求"] },
      ],
      skills: ["智能威胁检测: 99%+准确率", "自动化响应: 秒级响应", "合规检查: 自动化", "安全分析: AI驱动"],
    },

    middleLayer: {
      title: "Gate 安全引擎",
      workflow: [
        { title: "威胁监测", desc: "实时安全事件监控和检测" },
        { title: "智能分析", desc: "AI驱动的威胁分析和研判" },
        { title: "自动响应", desc: "安全事件自动化响应处置" },
        { title: "合规检查", desc: "自动化合规检查和报告" },
        { title: "安全加固", desc: "安全配置优化和加固" },
      ],
      agents: ["威胁检测 Agent", "事件响应 Agent", "合规审计 Agent", "安全加固 Agent"],
      performance: ["99%+ 节点执行成功率", "<1秒 威胁检测", "秒级 自动响应", "95%+ 自动化率"],
    },

    rightLayer: {
      title: "外部系统集成",
      integrations: [
        { category: "安全工具", items: ["SIEM系统", "防火墙", "IDS/IPS", "WAF"] },
        { category: "威胁情报", items: ["威胁情报平台", "漏洞数据库", "安全社区", "厂商情报"] },
        { category: "响应工具", items: ["告警系统", "工单系统", "自动化平台", "取证工具"] },
      ],
    },

    results: {
      efficiency: [
        "威胁检测: <1秒 (原30分钟,提升1800倍)",
        "事件响应: 秒级 (原2小时,提升7200倍)",
        "合规检查: 自动化 (原1周)",
        "安全加固: 持续 (原季度)",
      ],
      cost: ["安全运营成本: 降低70%", "人力成本: 降低65%", "工具成本: 降低50%", "事件损失: 降低90%"],
      quality: ["威胁检测率: 99%+", "误报率: 降低95%", "响应速度: 提升800%", "合规达标率: 100%"],
      roi: { investment: "¥320,000", revenue: "¥1,940,000", roi: "607%", payback: "2个月" },
    },

    requirements: ["Claude Code CLI 环境", "安全工具 API 接入", "威胁情报源", "Gate MCP 服务"],
  },

  "supply-chain": {
    name: "供应链自动化",
    description: "采购、库存、物流全流程智能化,供应链效率提升 3.5 倍",
    category: "供应链",
    author: "Gate 官方",
    verified: true,
    calls: "19.5K",
    forks: "1.0K",
    rating: 4.7,
    roi: "542%",
    efficiency: "350%",
    tags: ["供应链", "采购", "物流", "预测"],
    integrations: ["SAP", "Oracle", "FedEx", "Google Gemini"],

    leftLayer: {
      title: "供应链知识封装",
      knowledge: [
        { title: "采购管理知识", items: ["供应商评估", "采购策略", "合同管理", "成本控制"] },
        { title: "库存管理知识", items: ["需求预测", "安全库存", "补货策略", "库存优化"] },
        { title: "物流管理知识", items: ["运输规划", "路线优化", "仓储管理", "配送调度"] },
      ],
      skills: ["智能需求预测: 95%+准确率", "自动化采购: 智能决策", "库存优化: AI驱动", "物流优化: 路线规划"],
    },

    middleLayer: {
      title: "Gate 供应链引擎",
      workflow: [
        { title: "需求预测", desc: "AI驱动的需求预测和规划" },
        { title: "智能采购", desc: "自动化采购决策和执行" },
        { title: "库存管理", desc: "智能库存优化和补货" },
        { title: "物流调度", desc: "智能物流规划和调度" },
        { title: "供应商管理", desc: "供应商评估和协同" },
      ],
      agents: ["需求预测 Agent", "采购管理 Agent", "库存优化 Agent", "物流调度 Agent"],
      performance: ["99%+ 节点执行成功率", "95%+ 需求预测准确率", "实时 库存优化", "95%+ 自动化率"],
    },

    rightLayer: {
      title: "外部系统集成",
      integrations: [
        { category: "ERP系统", items: ["SAP", "Oracle", "用友", "金蝶"] },
        { category: "物流系统", items: ["FedEx", "DHL", "顺丰", "菜鸟"] },
        { category: "供应商平台", items: ["采购平台", "供应商门户", "电子合同", "支付系统"] },
      ],
    },

    results: {
      efficiency: [
        "需求预测: 95%+准确率 (原70%)",
        "采购周期: 3天 (原2周,缩短77%)",
        "库存周转: 15天 (原45天,提升200%)",
        "物流成本: 降低30%",
      ],
      cost: ["采购成本: 降低25%", "库存成本: 降低40%", "物流成本: 降低30%", "管理成本: 降低60%"],
      quality: ["供应及时率: 98%+", "库存准确率: 99.5%", "订单满足率: 99%+", "客户满意度: 提升35%"],
      roi: { investment: "¥380,000", revenue: "¥2,060,000", roi: "542%", payback: "2.2个月" },
    },

    requirements: ["Claude Code CLI 环境", "ERP 系统 API 接入", "物流系统对接", "Gate MCP 服务"],
  },
}

export default function SolutionDetailClient({ solutionId }: { solutionId: string }) {
  const solution = solutionsData[solutionId]

  if (!solution) {
    return <div>Solution not found</div>
  }

  const knowledgeItems = solution.leftLayer.knowledge.flatMap((k: any) => k.items).slice(0, 5)
  const externalTools = solution.rightLayer.integrations // Pass the full structure with categories
  const metrics = {
    integrationTime: solution.middleLayer.performance[1]?.split(" ")[0] || "2小时",
    costReduction: solution.results.cost?.[0]?.match(/\d+%/)?.[0] || "60%",
    efficiency: solution.efficiency,
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" className="mb-6" asChild>
            <Link href="/solutions-market">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回 AI 劳动力市场
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {solution.integrations.map((integration: string) => (
                <Badge key={integration} variant="secondary" className="px-3 py-1.5 flex items-center gap-2">
                  {integrationIcons[integration] || <Sparkles className="w-4 h-4" />}
                  <span>{integration}</span>
                </Badge>
              ))}
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">{solution.name}</h1>
            <p className="text-xl text-muted-foreground mb-6">{solution.description}</p>

            {/* Author */}
            <div className="flex items-center gap-3 mb-6">
              <GateLogoAvatar size="lg" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-lg">{solution.author}</span>
                  {solution.verified && <CheckCircle2 className="w-5 h-5 text-accent fill-accent/20" />}
                </div>
                <p className="text-sm text-muted-foreground">Gate 官方认证解决方案</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-accent text-accent" />
                <span className="font-semibold text-lg">{solution.rating}</span>
                <span className="text-muted-foreground">评分</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-muted-foreground" />
                <span className="font-semibold text-lg">{solution.calls}</span>
                <span className="text-muted-foreground">次使用</span>
              </div>
              <div className="flex items-center gap-2">
                <GitFork className="w-5 h-5 text-muted-foreground" />
                <span className="font-semibold text-lg">{solution.forks}</span>
                <span className="text-muted-foreground">次 Fork</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90" asChild>
                <a href="/#waitlist">
                  <GitFork className="w-5 h-5 mr-2" />
                  Fork 此方案
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">
                  <Users className="w-5 h-5 mr-2" />
                  联系我们定制
                </a>
              </Button>
            </div>
          </div>

          {/* Gate Pluggable Architecture */}
          <div className="mb-12">
            <GatePluggableArchitecture
              solutionType={solution.name}
              knowledgeItems={knowledgeItems}
              externalTools={externalTools}
              metrics={metrics}
            />
          </div>

          {/* Requirements */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">运行要求</h2>
            <Card className="p-6">
              <ul className="grid sm:grid-cols-2 gap-3">
                {solution.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="p-8 bg-gradient-to-br from-accent via-accent to-accent/90 text-accent-foreground border-0">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">立即开始使用</h3>
              <p className="text-lg mb-6 opacity-90">Fork 此方案到您的 Gate 环境,或联系我们获取定制化支持</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <a href="/#waitlist">
                    <GitFork className="w-5 h-5 mr-2" />
                    Fork 此方案
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background/30 hover:bg-background/10 bg-transparent"
                  asChild
                >
                  <a href="/contact">
                    联系我们定制
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
