"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, MessageSquare, TrendingUp, Calendar, Zap, Clock, Shield } from "lucide-react"
import { useState } from "react"
import WeChatQRModal from "@/components/wechat-qr-modal"

export default function SocialSolutionPage() {
  const [showWeChatQR, setShowWeChatQR] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-28 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f7] via-background to-background pointer-events-none" />
        <div className="container-default text-center relative z-10">
          <h1 className="heading-hero mb-6">
            让 AI 管理你的
            <br />
            <span className="text-[#0071e3]">社交媒体</span>
          </h1>
          <p className="subtitle-hero mx-auto mb-10">
            从内容创作到数据分析，从社群互动到策略优化，让 AI 处理繁琐工作，你专注于创意
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="h-12 px-8 rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors active:scale-[0.98]"
              onClick={() => setShowWeChatQR(true)}
            >
              免费开始
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-12 px-8 rounded-full text-[#0071e3] hover:bg-[#0071e3]/5 transition-colors"
              asChild
            >
              <a href="/tutorial">查看集成教程</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-spacing px-4 sm:px-6 bg-[#f5f5f7]">
        <div className="container-wide">
          <h2 className="heading-section text-center mb-12">社媒运营的真实困境</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-base card-hover p-6 bg-white shadow-sm">
              <MessageSquare className="w-10 h-10 text-[#0071e3] mb-4" />
              <h3 className="heading-card mb-3">内容创作压力大</h3>
              <p className="body-text mb-4">每天需要产出高质量内容，保持多平台一致性，创意枯竭和时间不足是常态</p>
              <div className="text-sm font-medium text-[#0071e3]">Gate 解决方案 →</div>
              <p className="caption-text mt-2">AI 根据品牌调性自动生成文案、图片和视频，适配不同平台风格</p>
            </Card>

            <Card className="card-base card-hover p-6 bg-white shadow-sm">
              <TrendingUp className="w-10 h-10 text-[#0071e3] mb-4" />
              <h3 className="heading-card mb-3">算法变化难追踪</h3>
              <p className="body-text mb-4">平台算法频繁更新，难以把握最佳发布时间和内容策略，流量起伏不定</p>
              <div className="text-sm font-medium text-[#0071e3]">Gate 解决方案 →</div>
              <p className="caption-text mt-2">实时分析算法变化和历史数据，推荐最优发布策略和内容方向</p>
            </Card>

            <Card className="card-base card-hover p-6 bg-white shadow-sm">
              <Calendar className="w-10 h-10 text-[#0071e3] mb-4" />
              <h3 className="heading-card mb-3">多平台管理混乱</h3>
              <p className="body-text mb-4">同时管理微博、小红书、抖音等多个平台，排期混乱，数据分散，难以统一分析</p>
              <div className="text-sm font-medium text-[#0071e3]">Gate 解决方案 →</div>
              <p className="caption-text mt-2">统一管理多平台内容，自动排期发布，聚合数据分析和效果追踪</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-spacing px-4 sm:px-6">
        <div className="container-wide">
          <h2 className="heading-section text-center mb-12">效率提升 & ROI</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0071e3]/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#0071e3]" />
                  </div>
                  <div>
                    <h3 className="heading-card mb-2">节省 60% 内容创作时间</h3>
                    <p className="body-text">AI 自动生成文案、图片和视频，从构思到发布只需 10 分钟</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0071e3]/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#0071e3]" />
                  </div>
                  <div>
                    <h3 className="heading-card mb-2">提升 3 倍互动率</h3>
                    <p className="body-text">AI 分析最佳发布时间和内容策略，优化标题和话题标签，显著提升互动</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0071e3]/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#0071e3]" />
                  </div>
                  <div>
                    <h3 className="heading-card mb-2">本地执行，数据不出域</h3>
                    <p className="body-text">品牌资产和用户数据在本地处理，保护商业机密和用户隐私</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="card-base p-6 lg:p-8 bg-gradient-to-br from-[#0071e3]/5 to-[#f5f5f7] shadow-sm">
              <h3 className="heading-card mb-6">真实应用场景</h3>
              <div className="space-y-6">
                <div>
                  <div className="font-medium mb-2 text-[#0071e3] text-sm">场景 1: 一键多平台内容分发</div>
                  <p className="caption-text mb-2">
                    <strong>具体操作:</strong> "将这篇产品评测文章改写为小红书、微博、抖音三个版本"
                  </p>
                  <p className="caption-text mb-2">
                    <strong>AI 自动完成:</strong> 小红书版(1200字+9图)、微博版(140字精华)、抖音版(60秒脚本)
                  </p>
                  <p className="text-sm font-medium text-[#1d1d1f]">✓ 从 2 小时缩短到 10 分钟，覆盖 3 个平台</p>
                </div>
                <div>
                  <div className="font-medium mb-2 text-[#0071e3] text-sm">场景 2: 实时热点追踪与响应</div>
                  <p className="caption-text mb-2">
                    <strong>具体操作:</strong> "监控 #双十一 热点，生成 3 条蹭热度的品牌内容"
                  </p>
                  <p className="caption-text mb-2">
                    <strong>AI 自动完成:</strong> 实时抓取热搜，分析品牌关联度，生成创意角度
                  </p>
                  <p className="text-sm font-medium text-[#1d1d1f]">✓ 热点响应速度从 4 小时缩短到 30 分钟</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section-spacing px-4 sm:px-6 bg-[#f5f5f7]">
        <div className="container-default text-center">
          <h2 className="heading-section mb-4">10 分钟开始使用</h2>
          <p className="subtitle-section mx-auto mb-12">无需专业技能，三步开启 AI 社交媒体助手</p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="text-4xl font-bold text-[#0071e3] mb-4">01</div>
              <h3 className="heading-card mb-2">安装 Gate</h3>
              <p className="caption-text">一键安装，支持桌面端和移动端，随时随地管理社交媒体</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0071e3] mb-4">02</div>
              <h3 className="heading-card mb-2">连接平台账号</h3>
              <p className="caption-text">授权连接微博、小红书、抖音等平台，统一管理多个账号</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0071e3] mb-4">03</div>
              <h3 className="heading-card mb-2">开始创作</h3>
              <p className="caption-text">用自然语言描述需求，AI 自动完成内容创作、排期和数据分析</p>
            </div>
          </div>
          <Button
            size="lg"
            className="mt-12 h-12 px-8 rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors active:scale-[0.98]"
            onClick={() => setShowWeChatQR(true)}
          >
            立即开始
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      <WeChatQRModal open={showWeChatQR} onOpenChange={setShowWeChatQR} />
      <Footer />
    </div>
  )
}
