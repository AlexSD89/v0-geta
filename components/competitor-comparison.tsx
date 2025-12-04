import { Check, X, Minus } from "lucide-react"

export function CompetitorComparison() {
  return (
    <section className="section-spacing px-4 sm:px-6 bg-[#f5f5f7]">
      <div className="container-wide">
        <div className="text-center mb-14">
          <h2 className="heading-section mb-4">为什么选择 Gate</h2>
          <p className="subtitle-section mx-auto">模块化知识 + 动态 AI 工具，以最低成本构建高度定制的 AI 基建</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {/* Competitor 1 */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#86868b]">通用工作流工具</h3>
              <p className="text-sm text-[#86868b] mt-1">如 n8n, Zapier 等</p>
            </div>
            <ul className="space-y-4 flex-1">
              <li className="flex items-start gap-3 text-sm text-[#86868b]">
                <X className="w-4 h-4 mt-0.5 text-[#86868b]/60 shrink-0" />
                <span>需手动拖拽节点，维护成本高</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#86868b]">
                <X className="w-4 h-4 mt-0.5 text-[#86868b]/60 shrink-0" />
                <span>缺乏业务知识封装，仅做传输</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#86868b]">
                <X className="w-4 h-4 mt-0.5 text-[#86868b]/60 shrink-0" />
                <span>高度依赖技术人员开发调试</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col relative shadow-lg md:-translate-y-2">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0071e3] text-white text-xs font-medium px-4 py-1.5 rounded-full">
              推荐
            </div>
            <div className="mb-6 text-center border-b border-[#d2d2d7]/40 pb-5">
              <h3 className="text-lg font-semibold text-[#1d1d1f]">Gate AI 基建</h3>
              <p className="text-sm text-[#86868b] mt-1">Knowledge as a Service</p>
            </div>
            <ul className="space-y-5 flex-1">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#0071e3]" />
                </div>
                <div>
                  <span className="block font-medium text-[#1d1d1f] text-sm">模块化知识封装</span>
                  <span className="text-sm text-[#86868b] mt-1 block">将业务知识转化为可复用的 AI 知识模块</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#0071e3]" />
                </div>
                <div>
                  <span className="block font-medium text-[#1d1d1f] text-sm">动态工具智能编排</span>
                  <span className="text-sm text-[#86868b] mt-1 block">AI 根据业务目标自动组合最优工具链</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#0071e3]" />
                </div>
                <div>
                  <span className="block font-medium text-[#1d1d1f] text-sm">低成本，高定制</span>
                  <span className="text-sm text-[#86868b] mt-1 block">标准化基建上的个性化配置</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Competitor 2 */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#86868b]">C端 Bot 平台</h3>
              <p className="text-sm text-[#86868b] mt-1">如 Coze, GPTs 等</p>
            </div>
            <ul className="space-y-4 flex-1">
              <li className="flex items-start gap-3 text-sm text-[#86868b]">
                <Minus className="w-4 h-4 mt-0.5 text-[#86868b]/60 shrink-0" />
                <span>仅限对话交互，难以嵌入业务流</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#86868b]">
                <Minus className="w-4 h-4 mt-0.5 text-[#86868b]/60 shrink-0" />
                <span>知识库检索能力弱，无法处理复杂逻辑</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#86868b]">
                <Minus className="w-4 h-4 mt-0.5 text-[#86868b]/60 shrink-0" />
                <span>数据安全与私有化部署受限</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
