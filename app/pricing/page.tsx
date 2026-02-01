import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "免费版",
      price: "¥0",
      period: "永久免费",
      features: ["最多 5 个集成", "基础自动化", "社区支持", "每月 1000 次操作"],
    },
    {
      name: "专业版",
      price: "¥99",
      originalPrice: "¥99",
      period: "每月",
      promotional: true,
      features: ["无限集成", "高级自动化", "优先支持", "无限操作", "团队协作", "自定义工作流"],
      popular: true,
    },
    {
      name: "企业版",
      price: "定制",
      period: "联系我们",
      features: ["所有专业版功能", "专属客户经理", "SLA 保障", "私有部署", "定制开发", "培训服务"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="container-default mx-auto">
          <div className="text-center mb-20">
            <h1 className="heading-hero mb-6">选择适合你的方案</h1>
            <p className="subtitle-hero mx-auto mb-8">从个人到企业,我们都有合适的方案</p>
            <div className="inline-block px-6 py-3 bg-[#0071e3]/10 text-[#0071e3] rounded-lg border border-[#0071e3]/20">
              <p className="text-sm font-medium">🎉 推广期限时免费 · 立即申请即可使用</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`card-base card-hover p-10 bg-white shadow-sm ${
                  plan.popular ? "border-[#0071e3] border-2 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-6">
                    <span className="inline-block px-4 py-1.5 bg-[#0071e3] text-white text-sm font-medium rounded-full">
                      最受欢迎
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="heading-card mb-4">{plan.name}</h3>
                  <div className="mb-3">
                    {plan.promotional ? (
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-xl text-[#86868b] line-through">{plan.originalPrice}</span>
                        <span className="text-5xl font-bold text-[#0071e3]">免费</span>
                      </div>
                    ) : (
                      <span className="text-5xl font-bold text-[#1d1d1f]">{plan.price}</span>
                    )}
                  </div>
                  <p className="caption-text">{plan.promotional ? "推广期间" : plan.period}</p>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                      <span className="body-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full h-12 rounded-full transition-colors active:scale-[0.98] ${
                    plan.popular
                      ? "bg-[#0071e3] text-white hover:bg-[#0077ed]"
                      : "bg-white text-[#0071e3] border border-[#0071e3]/20 hover:bg-[#0071e3]/5"
                  }`}
                  asChild
                >
                  <a href={plan.price === "定制" ? "/contact" : "/contact"}>
                    {plan.price === "定制" ? "联系销售" : plan.promotional ? "立即申请" : "开始使用"}
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          <div className="section-spacing-lg max-w-4xl mx-auto">
            <h2 className="heading-section text-center mb-12">常见问题</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="heading-card mb-3">如何申请免费版?</h3>
                <p className="body-text">推广期间所有功能完全免费,无需支付任何费用。点击"立即申请"即可开始使用。</p>
              </div>
              <div>
                <h3 className="heading-card mb-3">是否支持私有部署?</h3>
                <p className="body-text">企业版支持私有部署,数据完全由企业掌控。联系我们获取详细方案。</p>
              </div>
              <div>
                <h3 className="heading-card mb-3">如何升级到企业版?</h3>
                <p className="body-text">联系我们的企业方案顾问,我们将根据您的需求提供定制化方案。</p>
              </div>
              <div>
                <h3 className="heading-card mb-3">支持哪些支付方式?</h3>
                <p className="body-text">支持支付宝、微信支付、银行转账等多种支付方式。企业版支持对公转账。</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
