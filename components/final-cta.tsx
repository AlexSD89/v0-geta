import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="section-spacing px-4 sm:px-6 bg-white">
      <div className="container-default text-center">
        <h2 className="heading-section mb-4 text-[#1d1d1f]">连接一切，自动化一切</h2>
        <p className="subtitle-section mx-auto mb-10">立即申请免费使用，开启智能自动化之旅</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-12 px-8 rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors active:scale-[0.98] group"
            asChild
          >
            <a href="/tutorial">
              查看安装教程
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="h-12 px-8 rounded-full text-[#0071e3] hover:bg-[#0071e3]/5 transition-colors"
            asChild
          >
            <a href="/contact">联系销售</a>
          </Button>
        </div>
        <p className="text-sm text-[#86868b] mt-8">限时免费 · 10 分钟完成设置</p>
      </div>
    </section>
  )
}
