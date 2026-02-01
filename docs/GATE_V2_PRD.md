# Gate OS v2.0 - The Ultimate AI Skill Exchange

> **Vision**: "The Ultimate AI Skill Exchange" - 让 AI 技能像 App 一样流通
> **Core Metaphor**: Marketplace (交易所/集市)
> **Design Reference**: Lawvable 的清爽卡片式布局

---

## 1. 核心定位升级

### 1.1 身份互穿 (Fluid Identity)
- **Narrative**: "Consume to Create" (消费即创造)
- 用户买了一个 Skill，改了参数，组合了另一个 Skill，就变成了卖家

### 1.2 Gate 的角色：The General (将军)
- 客户只需说一句话（意图）
- Gate 负责调度底层千军万马（Standardized Skills）去执行

### 1.3 三阶段进化
1. **Phase 1: Hosting** - "我有代码，Gate 帮我跑"
2. **Phase 2: Distribution** - "我有流量，Gate 帮我卖" (Remix & Resell)
3. **Phase 3: Governance** - "我有判断力，Gate 让我参与运营" (DAO式共治)

---

## 2. 核心资产分类

| 资产类型 | 说明 | 收入模式 |
|---------|------|---------|
| Internal Skills | 基于 a2a 协议的原子技能 | 按次付费/订阅 |
| Partner Tools | 外部 SaaS (v0, Bolt等) | Affiliate Commission |
| Human Services | 专家服务 | 服务费分成 |

---

## 3. 站点地图

\`\`\`
Home (The Exchange)
├── Skill Market (The Bazaar)
│   ├── Skill Detail
│   └── Tool Detail (Affiliate)
├── Creator Studio
│   ├── My Store (独立店铺)
│   └── Affiliate Hub (分销中心)
├── Pricing
├── Tutorial
└── Contact
\`\`\`

---

## 4. 页面规格

### 4.1 首页 (Home - The Exchange)

**Hero Section**:
- Headline: "Gate OS: Your AI General"
- Sub-headline: "Command 1,000+ Skills with one sentence. Host, Remix, and Govern."
- Dynamic Role Switcher:
  - [User Mode]: "I need a result" (Simple Search)
  - [Builder Mode]: "I want to monetize" (Console)

**Live Ticker (活跃证明)**:
- 实时显示交易动态
- 示例："Skill `PDF-Parser` just earned $50 from Task #8921"

**Incentive Banner**:
- 展示当前激励活动
- 示例："Upload 'DeepSeek R1' Skills - 0% Commission this week!"

### 4.2 Skill Market (The Bazaar)

**Unified Shelf**: Skill 和 SaaS 并列展示

**垂直行业分类**:
- Legal (法务): Contract Review, Risk Check
- Finance (财务): Invoice OCR, Fraud Detection
- Marketing (营销): Copywriting, SEO Audit
- Dev (开发): Code Refactor, Bug Fix

**Filters**:
- Asset Type: Native Skill vs External SaaS
- Level: Atomic (基础) vs Pro (专家级)

### 4.3 Creator Studio

**My Store (独立店铺)**:
- Profile as Store: 个人主页就是 SaaS 官网
- Show Case: 展示 Use Case

**Affiliate Hub (分销中心)**:
- 一键分销他人 Skill
- 佣金追踪面板

### 4.4 Skill Detail

**Tabs**:
- Overview: 功能介绍、作者、历史评价
- API (a2a): Agent 调用示例
- Stats: Reliability, Avg Latency

**Trust Signals**:
- "Verified Author" Badge
- "Audit Passed" Security Check

---

## 5. 运营机制

### 5.1 三种模式
1. **即时模式**: 标准化任务，先到先得
2. **提案模式**: 复杂任务，多方竞标
3. **竞赛模式**: 可衡量目标，Winner Takes All

### 5.2 质押模型
- 接单质押 10%
- 完成返还 + 获得悬赏金
- 失败扣除，进入补偿池

### 5.3 声誉系统
- 声誉分 = 0.4×完成率 + 0.3×评分 + 0.2×准时率 + 0.1×复购率
- ≥80分优先推荐，<40分自动下架

---

## 6. UI 设计规范

### 6.1 色彩系统 (继承现有)
- Primary: #0071e3 (Apple Blue)
- Accent: #5856d6 (Purple, 仅L1使用)
- Background: #ffffff / #f5f5f7
- Text: #1d1d1f / #86868b

### 6.2 组件规范
- Card: rounded-2xl, shadow-sm, hover:-translate-y-1
- Button: rounded-full, h-12
- Badge: Confidence Score 显示

### 6.3 动画规范
- 入场: fade-in-up (0.6s)
- 悬停: scale(1.02), translate-y(-4px)
- Live Ticker: 横向滚动

---

## 7. 与 v1 的继承关系

**保留**:
- a2a 协议核心理念
- 现有 UI 设计系统
- 所有二三级页面模板

**升级**:
- 首页从"AI基建"升级为"AI技能交易所"
- Solutions Market 升级为 Skill Market
- 新增 Creator Studio 页面
- 新增 Live Ticker 组件

---

*Gate v2.0 PRD | 2026-02-01*
