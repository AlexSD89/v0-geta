# Gate 设计系统 - 深度参考 Lawvable

## 设计哲学
参考 Lawvable 的简洁、专业、优雅的设计语言，打造适合 AI Skills 平台的视觉体验。

---

## 一、颜色系统

### 使用者模式（User Mode）
**主色调：清爽蓝色**
- Primary: `#0071e3` - Apple 蓝，传递信任感和专业感
- Primary Hover: `#0077ed` - 稍亮的蓝色，hover 状态
- 文字强调：使用 Primary 蓝色突出关键信息

**设计理念：**
- 蓝色代表可靠、专业、易用
- 与 Lawvable 的橙红色形成差异，但保持同样的优雅感
- 渐变仅用于 Hero 区域，其他地方使用纯色

### 开发者模式（Developer Mode）
**主色调：神秘靛紫渐变**
- Developer Primary: `#4f46e5` (Indigo 600) - 深邃的靛蓝
- Developer Secondary: `#7c3aed` (Purple 600) - 优雅的紫色
- 渐变方向：`linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)`

**设计理念：**
- 靛紫色代表创造力、技术、专业
- 渐变增加科技感和未来感
- 与使用者的蓝色形成鲜明对比，但不冲突
- 发光效果（glow pulse）增加吸引力

### 中性色系统（参考 Lawvable）
```css
--text-primary: #1d1d1f       /* 主要文字，深灰色 */
--text-secondary: #86868b     /* 次要文字，中灰色 */
--background: #ffffff         /* 背景白色 */
--background-soft: #f5f5f7    /* 柔和背景 */
--border-subtle: #d2d2d7      /* 微妙边框 */
```

---

## 二、动画系统

### 卡牌翻转动画（奇幻效果）
```css
@keyframes cardFlip {
  0% {
    transform: perspective(1000px) rotateY(0deg);
    opacity: 1;
  }
  50% {
    transform: perspective(1000px) rotateY(90deg);
    opacity: 0.3;
  }
  100% {
    transform: perspective(1000px) rotateY(0deg);
    opacity: 1;
  }
}
```

**使用场景：**
- 角色切换时的内容变化
- 卡片翻面效果
- 增加趣味性和魔幻感

### 发光脉冲动画（开发者专属）
```css
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(79, 70, 229, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(79, 70, 229, 0.6);
  }
}
```

**使用场景：**
- 开发者模式的 CTA 按钮
- 强调开发者相关功能
- 吸引注意力

### 滑入动画（页面过渡）
```css
/* 从左滑入 - 使用者内容 */
@keyframes slideInFromLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

/* 从右滑入 - 开发者内容 */
@keyframes slideInFromRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}
```

---

## 三、交互设计

### 按钮系统

#### 主要按钮（Primary Button）
**使用者模式：**
```css
.btn-primary {
  background: #0071e3;
  color: white;
  border-radius: 12px;           /* Lawvable 风格圆角 */
  padding: 0.875rem 1.75rem;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.btn-primary:hover {
  background: #0077ed;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```

**开发者模式：**
```css
.btn-developer {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  border-radius: 12px;
  padding: 0.875rem 1.75rem;
  font-weight: 500;
  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.25);
  animation: glowPulse 2s ease-in-out infinite;
}

.btn-developer:hover {
  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.35);
  transform: translateY(-2px);
}
```

#### 次要按钮（Secondary Button）
```css
/* Outline 风格，参考 Lawvable */
.btn-secondary {
  background: white;
  border: 2px solid #d2d2d7;
  border-radius: 12px;
  color: #1d1d1f;
}

.btn-secondary:hover {
  border-color: #0071e3;      /* 使用者模式 */
  background: rgba(0,113,227,0.05);
}

.btn-secondary-dev:hover {
  border-color: #4f46e5;      /* 开发者模式 */
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
}
```

### 卡片系统

#### 基础卡片（Lawvable 风格）
```css
.card-lawvable {
  background: white;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 16px;        /* 更大的圆角 */
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-lawvable:hover {
  border-color: rgba(0,113,227,0.3);
  box-shadow: 0 10px 30px -10px rgba(0,113,227,0.2);
  transform: translateY(-2px);
}
```

#### 开发者卡片
```css
.card-developer {
  background: white;
  border: 1px solid rgba(79,70,229,0.2);
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(79,70,229,0.15);
}

.card-developer:hover {
  box-shadow: 0 8px 24px rgba(79,70,229,0.25);
  transform: translateY(-2px);
}
```

### 角色切换交互

#### 奇幻卡牌效果
1. **切换触发**：点击导航栏的"使用者"或"开发者"按钮
2. **视觉反馈**：
   - 按钮背景从灰色变为对应颜色渐变
   - 全局广播 `roleChanged` 事件
   - 所有监听组件开始翻转动画
3. **内容变化**：
   - Hero 副标题：使用者介绍 Skills 使用，开发者介绍收益
   - CTA 按钮：使用者"浏览 Skills"，开发者"开始创作"
   - 卡片颜色：蓝色系 vs 靛紫色系
   - 数据展示：使用者看 Forks/收藏，开发者看收益/下载数

---

## 四、排版系统（参考 Lawvable）

### 字体
```css
--font-sans: 'Geist', 'Geist Fallback';
```

### 字阶系统
```css
/* 大标题 */
.text-5xl { font-size: 3rem; line-height: 1.1; }    /* 48px */
.text-4xl { font-size: 2.25rem; line-height: 1.1; } /* 36px */

/* 正文 */
.text-lg { font-size: 1.125rem; line-height: 1.6; } /* 18px */
.text-base { font-size: 1rem; line-height: 1.5; }   /* 16px */
.text-sm { font-size: 0.875rem; line-height: 1.5; } /* 14px */
```

### 字重
```css
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

---

## 五、间距系统（8px 基准）

```css
/* Lawvable 风格的宽松间距 */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
```

---

## 六、边框与阴影

### 边框
```css
/* 微妙边框 - Lawvable 标志性设计 */
.border-lawvable {
  border: 1px solid rgba(0,0,0,0.08);
}

/* Hover 状态 */
.border-lawvable:hover {
  border-color: rgba(0,113,227,0.3);
}
```

### 阴影层级
```css
/* 1级 - 基础卡片 */
box-shadow: 0 1px 3px rgba(0,0,0,0.1);

/* 2级 - Hover 状态 */
box-shadow: 0 4px 6px rgba(0,0,0,0.1);

/* 3级 - 重要卡片/弹窗 */
box-shadow: 0 10px 30px -10px rgba(0,113,227,0.2);

/* 发光阴影 - 开发者模式 */
box-shadow: 0 4px 14px rgba(79,70,229,0.25);
```

---

## 七、响应式设计

### 断点
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

### 移动优先
所有设计从移动端开始，逐步增强到桌面端：
- 移动端：单列布局，简化导航
- 平板端：双列布局，侧边栏可选
- 桌面端：完整布局，侧边栏固定

---

## 八、可访问性

### 颜色对比度
- 所有文字与背景对比度 ≥ 4.5:1（WCAG AA）
- 重要按钮对比度 ≥ 7:1（WCAG AAA）

### 交互反馈
- 所有可点击元素有 hover 状态
- 所有按钮有 active 状态
- 所有表单有 focus 状态（2px 蓝色轮廓）

### 动画偏好
```css
@media (prefers-reduced-motion: reduce) {
  .animate-card-flip,
  .animate-glow-pulse,
  .animate-slide-in-left,
  .animate-slide-in-right {
    animation: none;
  }
}
```

---

## 实施清单

- [x] 定义使用者和开发者双色系统
- [x] 创建奇幻卡牌翻转动画
- [x] 实现角色切换交互
- [x] 优化按钮和卡片样式（Lawvable 风格）
- [x] 统一边框和阴影系统
- [ ] 添加更多微交互（加载状态、成功提示等）
- [ ] 完善移动端体验
- [ ] 添加暗色模式支持

---

基于 Lawvable 的设计哲学："简洁但不简单，优雅但不冷淡，专业但不疏远"。
