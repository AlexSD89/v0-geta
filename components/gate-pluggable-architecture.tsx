import { ArrowRight, ArrowLeft, Plug, Database, Cpu, Network, Zap, Shield, RefreshCw } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ArchitectureProps {
  solutionType: string
  knowledgeItems: string[]
  externalTools: {
    category: string
    items: string[]
  }[]
  metrics: {
    integrationTime: string
    costReduction: string
    efficiency: string
  }
}

export function GatePluggableArchitecture({ solutionType, knowledgeItems, externalTools, metrics }: ArchitectureProps) {
  const toolGroups = [
    externalTools.slice(0, Math.ceil(externalTools.length / 3)),
    externalTools.slice(Math.ceil(externalTools.length / 3), Math.ceil((externalTools.length * 2) / 3)),
    externalTools.slice(Math.ceil((externalTools.length * 2) / 3)),
  ]

  return (
    <div className="w-full space-y-10">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold">Gate 插拔式架构</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          帮您最低成本封装企业知识,智能选择 AI 供应商,标准化接口随时插拔,快速让传统企业具备 AI 能力
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr_auto_1fr] gap-6 items-center">
        {/* Left: Knowledge Encapsulation */}
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border-2 border-blue-200 dark:border-blue-800 h-full">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-600/10 dark:bg-blue-400/10">
                <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100">企业知识封装</h3>
            </div>
            <p className="text-sm text-blue-700 dark:text-blue-300">最低成本封装已有数据与决策</p>
            <div className="space-y-2.5">
              {knowledgeItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5 text-sm text-blue-800 dark:text-blue-200">
                  <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Badge variant="secondary" className="bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-100 mt-2">
              标准化接口
            </Badge>
          </div>
        </Card>

        <div className="hidden lg:flex flex-col items-center justify-center gap-2">
          <ArrowRight className="h-8 w-8 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">输入</span>
        </div>

        {/* Middle: Gate Orchestration */}
        <Card className="p-8 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border-2 border-primary/30 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative space-y-5">
            <div className="flex items-center justify-center gap-3">
              <Cpu className="h-8 w-8 text-primary" />
              <h3 className="font-bold text-2xl text-primary">Gate</h3>
            </div>

            <p className="text-center text-sm text-muted-foreground">智能编排中心 · 无需客户投入精力</p>

            <div className="space-y-3.5">
              <div className="flex items-center gap-3 text-sm bg-background/60 rounded-lg p-3">
                <Zap className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium">智能选择 AI 供应商</div>
                  <div className="text-xs text-muted-foreground">帮您筛选最适合的 AI</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm bg-background/60 rounded-lg p-3">
                <Shield className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium">安全隔离 & 编排</div>
                  <div className="text-xs text-muted-foreground">数据安全可控</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm bg-background/60 rounded-lg p-3">
                <RefreshCw className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium">API 适配 & MCP 对接</div>
                  <div className="text-xs text-muted-foreground">打通多 AI 数据交流</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm bg-background/60 rounded-lg p-3">
                <Network className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium">标准化封装降成本</div>
                  <div className="text-xs text-muted-foreground">可复用随时插拔</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-primary/20">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Plug className="h-5 w-5" />
                <span className="text-sm font-semibold">即插即用 · 快速部署</span>
              </div>
            </div>
          </div>
        </Card>

        <div className="hidden lg:flex flex-col items-center justify-center gap-2">
          <ArrowLeft className="h-8 w-8 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">输出</span>
        </div>

        {/* Right: External Integrations - 3 equal boxes */}
        <div className="grid grid-cols-1 gap-4 h-full">
          {toolGroups.map((group, groupIndex) => (
            <Card
              key={groupIndex}
              className="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 border-2 border-green-200 dark:border-green-800"
            >
              <div className="space-y-3">
                {groupIndex === 0 && (
                  <div className="flex items-center gap-2 mb-2">
                    <Plug className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <h3 className="font-bold text-sm text-green-900 dark:text-green-100">外部工具集成</h3>
                  </div>
                )}
                {group.map((category, catIndex) => (
                  <div key={catIndex} className="space-y-2">
                    <div className="text-xs font-semibold text-green-700 dark:text-green-300">{category.category}</div>
                    {category.items.map((tool, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-xs text-green-800 dark:text-green-200 pl-2"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-400 flex-shrink-0" />
                        {tool}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              {groupIndex === toolGroups.length - 1 && (
                <div className="flex flex-wrap gap-2 pt-3 mt-3 border-t border-green-200 dark:border-green-800">
                  <Badge
                    variant="secondary"
                    className="bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs"
                  >
                    API 适配
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs"
                  >
                    MCP 对接
                  </Badge>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Bidirectional Value Flow */}
      <Card className="p-8 bg-gradient-to-r from-background via-accent/5 to-background border-2">
        <div className="text-center space-y-5">
          <h3 className="font-bold text-xl">双向价值流动</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3 text-blue-600 dark:text-blue-400">
                <ArrowRight className="h-6 w-6" />
                <span className="font-semibold text-lg">消费 AI 能力</span>
              </div>
              <p className="text-sm text-muted-foreground">接入外部 AI 工具和服务,Gate 帮您智能选择</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3 text-green-600 dark:text-green-400">
                <ArrowLeft className="h-6 w-6" />
                <span className="font-semibold text-lg">提供 AI 能力</span>
              </div>
              <p className="text-sm text-muted-foreground">标准化封装后对外输出,分享企业知识给合作伙伴</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground pt-3 font-medium">
            企业不再只是 AI 的使用者,而是 AI 生态的建设者和受益者
          </p>
        </div>
      </Card>

      {/* Gate Delivery Metrics */}
      <div className="space-y-5">
        <h3 className="font-bold text-xl text-center">Gate 交付价值</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-primary mb-2">{metrics.integrationTime}</div>
            <div className="text-sm font-medium text-foreground mb-2">集成时间</div>
            <div className="text-xs text-muted-foreground">从数周缩短至数小时</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-primary mb-2">{metrics.costReduction}</div>
            <div className="text-sm font-medium text-foreground mb-2">成本降低</div>
            <div className="text-xs text-muted-foreground">减少重复开发投入</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-primary mb-2">{metrics.efficiency}</div>
            <div className="text-sm font-medium text-foreground mb-2">效率提升</div>
            <div className="text-xs text-muted-foreground">自动化替代人工操作</div>
          </Card>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <Plug className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-sm">即插即用</div>
              <div className="text-xs text-muted-foreground">标准化接口,快速集成</div>
            </div>
          </div>
        </Card>
        <Card className="p-5 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-sm">安全隔离</div>
              <div className="text-xs text-muted-foreground">数据加密,权限管控</div>
            </div>
          </div>
        </Card>
        <Card className="p-5 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <RefreshCw className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-sm">灵活编排</div>
              <div className="text-xs text-muted-foreground">可视化配置,动态调整</div>
            </div>
          </div>
        </Card>
        <Card className="p-5 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-sm">降本增效</div>
              <div className="text-xs text-muted-foreground">最低成本,最快部署</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
