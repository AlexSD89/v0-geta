# Gate UI 设计系统

## 设计原则

基于 Apple 和 Linear 的设计美学，Gate 的设计系统遵循以下原则：
- **克制与专注**：60-30-10 配色法则，主色调统一
- **呼吸感**：充足的留白和间距
- **层级清晰**：通过字体大小、颜色深浅区分信息层级
- **微交互**：细腻的悬停效果和过渡动画

---

## 色彩系统

### 主色板（3色原则）

| 用途 | 比例 | 颜色 | CSS变量 | 用途说明 |
|------|------|------|---------|----------|
| **背景色** | 60% | `#ffffff` / `#f5f5f7` | `--background` / `bg-[#f5f5f7]` | 页面主背景 |
| **文字色** | 30% | `#1d1d1f` / `#86868b` | `--foreground` / `--muted-foreground` | 主文字/副文字 |
| **强调色** | 10% | `#0071e3` | `--primary` / `text-[#0071e3]` | 按钮、链接、重点 |

### 语义色（逻辑层级）

仅在特定场景使用，表达逻辑关系：

| 颜色 | 语义 | 使用场景 |
|------|------|----------|
| **深蓝** `#1d4ed8` | 内部/核心 | 九宫格第一行（知识封装层） |
| **主蓝** `#0071e3` | 中枢/连接 | 九宫格第二行（Gate智能层） |
| **浅蓝** `#0ea5e9` | 外部/开放 | 九宫格第三行（外部工具层） |

---

## 排版系统

### 字体家族

\`\`\`css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
\`\`\`

**原则**：优先使用系统原生中文字体（PingFang SC / Microsoft YaHei），无需加载外部字体

### 字体等级

| 类型 | 类名 | 字号 | 行高 | 字重 | 用途 |
|------|------|------|------|------|------|
| **Hero 标题** | `.heading-hero` | 48-64px | 1.1 | 700 | 首屏主标题 |
| **Section 标题** | `.heading-section` | 32-40px | 1.2 | 700 | 章节标题 |
| **Card 标题** | `.heading-card` | 18-20px | 1.4 | 600 | 卡片标题 |
| **Hero 副标题** | `.subtitle-hero` | 18-20px | 1.6 | 400 | 首屏副标题 |
| **Section 副标题** | `.subtitle-section` | 16-18px | 1.5 | 400 | 章节副标题 |
| **正文** | `.body-text` | 14-16px | 1.6 | 400 | 正文内容 |
| **辅助文字** | `.caption-text` | 12-14px | 1.5 | 400 | 辅助说明 |

**响应式断点**：
- Mobile: 基础字号
- Tablet (768px+): 字号 × 1.1
- Desktop (1024px+): 字号 × 1.2

---

## 页面模板

### 页面层级定义

| 层级 | 页面类型 | 示例页面 | PT值 | 标题字体 | 特点 |
|------|---------|---------|------|---------|------|
| **L0** | 主页 | `/` | `pt-20` | `heading-hero` | 蓝紫渐变 |
| **L1** | 核心功能 | `/marketplace` `/solutions-market` | `pt-28` | `heading-hero` | 蓝色系 |
| **L2** | 功能页 | `/pricing` `/tutorial` `/contact` | `pt-32` | `heading-hero` | 统一布局 |
| **L3** | 解决方案 | `/solutions/enterprise` | `pt-16` | `heading-hero` | 纯蓝色 |

### 统一布局规范

#### 1. 页面顶部间距（Padding Top）

\`\`\`tsx
// L0 主页
<section className="pt-20 pb-16">

// L1 核心功能页
<section className="pt-28 pb-16">

// L2 功能页（Pricing, Contact, Tutorial）
<main className="pt-32 pb-24">

// L3 解决方案页
<main className="pt-16">
<section className="section-spacing-lg"> {/* pt-20 lg:pt-32 */}
\`\`\`

#### 2. 容器宽度

\`\`\`css
.container-default { max-width: 1200px; } /* 主内容 */
.container-wide { max-width: 1400px; }    /* 卡片网格 */
.container-narrow { max-width: 800px; }   /* 文章/表单 */
\`\`\`

#### 3. Section 间距

\`\`\`css
.section-spacing { padding: 4rem 0; }      /* py-16 */
.section-spacing-lg { padding: 5rem 0; }   /* py-20 lg:py-32 */
\`\`\`

---

## 组件规范

### 按钮

\`\`\`tsx
// 主按钮 - Apple Blue
<Button className="h-12 px-8 rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors active:scale-[0.98]">
  主要操作
</Button>

// 次要按钮
<Button variant="ghost" className="h-12 px-8 rounded-full text-[#0071e3] hover:bg-[#0071e3]/5">
  次要操作
</Button>

// 暗色按钮（仅开发者页面）
<Button className="h-12 px-8 rounded-full bg-[#1d1d1f] text-white hover:bg-[#1d1d1f]/90">
  开发者操作
</Button>
\`\`\`

### 卡片

\`\`\`tsx
// 标准卡片
<Card className="card-base card-hover p-6 lg:p-8 bg-white shadow-sm">
  {/* 内容 */}
</Card>

// 玻璃拟态卡片
<Card className="backdrop-blur-md bg-white/80 border border-white/20 shadow-xl">
  {/* 内容 */}
</Card>
\`\`\`

### 图标

\`\`\`tsx
// 统一尺寸和粗细
<Icon className="w-10 h-10 text-[#0071e3]" strokeWidth={1.5} />
\`\`\`

---

## 页面个性化

虽然保持整体统一，但不同页面类型有细微差异：

| 页面类型 | 个性化元素 | 示例 |
|---------|-----------|------|
| **Pricing** | 价格卡片、推荐标签 | 热门方案高亮、优惠标签 |
| **Contact** | 二维码展示 | 渐变背景 + 模糊效果 |
| **Start** | 进度条、步骤引导 | 交互式引导流程 |
| **Solutions** | 痛点分析、ROI数据 | 数据可视化、场景案例 |

---

## 动画与交互

### 悬停效果

\`\`\`css
/* 卡片上浮 */
.card-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* 按钮按下 */
.active\:scale-\[0\.98\]:active {
  transform: scale(0.98);
}
\`\`\`

### Framer Motion

\`\`\`tsx
// 滚动视差
const { scrollYProgress } = useScroll()
const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

// 交错动画
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
\`\`\`

---

## 检查清单

在创建新页面或修改现有页面时，请检查：

- [ ] 页面顶部间距是否符合层级（pt-20/28/32/16）
- [ ] 标题字体是否使用 `heading-hero/section/card`
- [ ] 按钮是否统一使用 `rounded-full` 和 `h-12`
- [ ] 卡片是否使用 `card-base card-hover`
- [ ] 颜色是否只使用 `#0071e3`（蓝色）+ `#1d1d1f`（近黑）+ `#86868b`（灰色）
- [ ] 响应式布局是否使用 `container-default/wide/narrow`
- [ ] Section 间距是否使用 `section-spacing` 或 `section-spacing-lg`
- [ ] 图标尺寸是否统一 `w-10 h-10`
