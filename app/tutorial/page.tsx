"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Copy, Terminal, CheckCircle2, HelpCircle, Lightbulb } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TutorialPage() {
  const [copiedSteps, setCopiedSteps] = useState<{ [key: string]: boolean }>({})

  const copyToClipboard = (text: string, stepId: string) => {
    navigator.clipboard.writeText(text)
    setCopiedSteps({ ...copiedSteps, [stepId]: true })
    setTimeout(() => {
      setCopiedSteps({ ...copiedSteps, [stepId]: false })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Gate MCP 安装教程</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              本教程将指导你在本地环境中安装 Claude Code CLI，并连接 Gate MCP 服务。全程仅需 5–10 分钟。
            </p>
          </div>

          {/* Step 1: Install Claude Code CLI */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h2 className="text-2xl font-bold">安装 Claude Code CLI</h2>
            </div>

            <Card className="p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent" />
                通过 npm 安装
              </h3>
              <p className="text-muted-foreground mb-4">
                Claude Code CLI 是 Anthropic 官方提供的命令行工具，支持 MCP（Model Context Protocol）协议。
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">前置要求：</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                    <li>Node.js v18 或更高版本</li>
                    <li>npm 包管理器</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium mb-2">安装命令：</p>
                  <div className="bg-muted rounded-lg p-4 font-mono text-sm relative group">
                    <pre className="overflow-x-auto pr-24">npm install -g @anthropic-ai/claude-code</pre>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-2 right-2 shadow-lg border-2 border-accent/20 hover:border-accent/40 hover:scale-105 transition-all"
                      onClick={() => copyToClipboard("npm install -g @anthropic-ai/claude-code", "install-cli")}
                    >
                      {copiedSteps["install-cli"] ? (
                        <>
                          <Check className="w-4 h-4 mr-1.5" />
                          <span className="font-medium">已复制</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-1.5" />
                          <span className="font-medium">复制代码</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-2">验证安装：</p>
                  <div className="bg-muted rounded-lg p-4 font-mono text-sm relative group">
                    <pre className="overflow-x-auto pr-24">claude --version</pre>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-2 right-2 shadow-lg border-2 border-accent/20 hover:border-accent/40 hover:scale-105 transition-all"
                      onClick={() => copyToClipboard("claude --version", "verify-cli")}
                    >
                      {copiedSteps["verify-cli"] ? (
                        <>
                          <Check className="w-4 h-4 mr-1.5" />
                          <span className="font-medium">已复制</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-1.5" />
                          <span className="font-medium">复制代码</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-sm flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>提示：</strong>建议避免使用 sudo 安装，以防止权限和安全风险。如果遇到权限问题，请参考{" "}
                      <a
                        href="https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        npm 权限配置指南
                      </a>
                      。
                    </span>
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Step 2: Configure Gate MCP */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h2 className="text-2xl font-bold">安装 Gate MCP</h2>
            </div>

            <p className="text-muted-foreground mb-6">
              完成 Claude Code 安装后，即可连接 Gate MCP 模块，实现 AI 智能体协同编排。
            </p>

            {/* Sub-step 1 */}
            <Card className="p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold">复制配置命令并在终端中运行</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm relative group border border-slate-700">
                  <pre className="overflow-x-auto pr-24 text-green-400">
                    claude mcp add --transport http gate -s user "https://mcp.a2a.ink/mcp"
                  </pre>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-2 right-2 shadow-lg border-2 border-accent/20 hover:border-accent/40 hover:scale-105 transition-all"
                    onClick={() =>
                      copyToClipboard(
                        'claude mcp add --transport http gate -s user "https://mcp.a2a.ink/mcp"',
                        "add-mcp-step1",
                      )
                    }
                  >
                    {copiedSteps["add-mcp-step1"] ? (
                      <>
                        <Check className="w-4 h-4 mr-1.5" />
                        <span className="font-medium">已复制</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1.5" />
                        <span className="font-medium">复制代码</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Sub-step 2 */}
            <Card className="p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold">在 Claude Code 中运行 /mcp 命令</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border border-slate-700">
                  <pre className="text-slate-500">&gt; /mcp[reconnect &lt;server-name&gt;]</pre>
                  <pre className="text-cyan-400">/mcp</pre>
                  <pre className="text-slate-400 text-xs mt-1">Manage MCP servers</pre>
                </div>
              </div>
            </Card>

            {/* Sub-step 3 */}
            <Card className="p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold">选择 Gate 并按回车</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border border-slate-700">
                  <pre className="text-slate-400 text-xs mb-2">Manage MCP servers</pre>
                  <pre className="text-cyan-400">&gt;</pre>
                  <pre className="text-white ml-2">1. gate</pre>
                  <pre className="text-amber-500 ml-2">△ disconnected</pre>
                  <pre className="text-slate-500 text-xs ml-2 mt-1">· Enter to login</pre>
                </div>
              </div>
            </Card>

            {/* Sub-step 4 */}
            <Card className="p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold">在 Gate MCP Server 中选择 Authenticate 并按回车</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border border-slate-700">
                  <pre className="text-white font-semibold mb-2">Gate MCP Server</pre>
                  <pre className="text-slate-400 text-xs">
                    Status: <span className="text-amber-500">△ needs authentication</span>
                  </pre>
                  <pre className="text-slate-400 text-xs">URL: https://mcp.a2a.ink/mcp</pre>
                  <pre className="text-slate-400 text-xs mb-2">Config location: /Users/username/.claude.json</pre>
                  <pre className="text-cyan-400">&gt;</pre>
                  <pre className="text-white ml-2">1. Authenticate</pre>
                </div>
              </div>
            </Card>

            {/* Sub-step 5 */}
            <Card className="p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold">在浏览器中完成认证</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border border-slate-700">
                  <pre className="text-cyan-400">Authenticating with gate...</pre>
                  <pre className="text-slate-500 text-xs mt-2">*</pre>
                  <pre className="text-slate-400 text-xs">A browser window will open for authentication</pre>
                </div>

                <p className="text-muted-foreground">
                  浏览器会自动打开 Gate 认证页面。认证完成后，Claude Code 将显示连接状态为：
                </p>

                <div className="bg-slate-900 dark:bg-slate-950 border border-emerald-500/30 rounded-lg p-4">
                  <pre className="text-sm font-mono">
                    <span className="text-white">1. gate </span>
                    <span className="text-emerald-400">✅ connected</span>
                  </pre>
                </div>
              </div>
            </Card>
          </section>

          {/* Verification */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">验证连接</h3>
            <p className="text-muted-foreground mb-4">
              配置完成后，在项目目录中运行 <code className="bg-muted px-1.5 py-0.5 rounded">claude</code> 命令启动
              Claude Code，如果 Gate MCP 连接成功，你会看到可用的 MCP 工具列表。
            </p>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <p className="text-sm flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                <span>
                  <strong>连接成功标志：</strong>在 Claude Code 界面中可以看到 Gate 提供的工具列表，例如
                  Gmail、GitHub、Notion 等。
                </span>
              </p>
            </div>
          </Card>

          {/* Success Message */}
          <Card className="p-8 bg-accent/10 border-accent mb-16">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">安装完成！</h3>
                <p className="text-muted-foreground mb-4">
                  现在，你的 Claude Code CLI 已成功接入 Gate MCP，可直接通过自然语言指挥 AI
                  中枢进行智能编排，调用各类工具和服务完成复杂任务。
                </p>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <a href="/#waitlist">立即体验</a>
                </Button>
              </div>
            </div>
          </Card>

          {/* FAQ section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold">常见问题</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">什么时候需要使用"魔法"？</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <p className="mb-3">
                    安装 Gate 本身不需要"魔法"。但在<strong>使用过程中</strong>，如果你需要访问部分部署在海外的 MCP
                    服务（如 Google、GitHub 等），则需要配置"魔法"工具以确保连接稳定。
                  </p>
                  <p className="text-sm bg-muted p-3 rounded-lg flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>
                      <strong>如果暂时无法使用"魔法"</strong>：Gate 仍然可以作为优秀的<strong>需求规格工具</strong>或
                      <strong>逻辑指挥设计工具</strong>使用，帮助你梳理项目需求、设计工作流程和制定自动化方案。
                    </span>
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">安装 Gate 需要什么前置条件？</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <p className="mb-2">安装 Gate MCP 需要以下环境：</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Claude Code CLI 应用程序（通过 npm 安装）</li>
                    <li>Anthropic 账号（在 claude.ai 免费注册）</li>
                    <li>稳定的网络连接</li>
                  </ul>
                  <p className="mt-3">所有这些都可以通过本教程的步骤完成安装和配置。</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Gate 支持哪些 AI 工具和服务？</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <p className="mb-2">Gate 作为 AI 智能体协同编排平台，支持连接多种主流工具：</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>
                      <strong>生产力工具</strong>：Gmail、Notion、Slack、Google Calendar 等
                    </li>
                    <li>
                      <strong>开发者工具</strong>：GitHub、GitLab、Linear、Jira 等
                    </li>
                    <li>
                      <strong>数据分析</strong>：Google Sheets、Airtable、数据库连接等
                    </li>
                    <li>
                      <strong>社交媒体</strong>：Twitter、Reddit、YouTube 等
                    </li>
                  </ul>
                  <p className="mt-3">更多集成正在持续增加中，你也可以通过 Gate Marketplace 探索更多可用服务。</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">如何验证 Gate 安装成功？</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <p className="mb-2">
                    安装完成后，在项目目录中运行 <code className="bg-muted px-1.5 py-0.5 rounded">claude</code> 命令启动
                    Claude Code，你应该能在界面底部看到 Gate 提供的工具列表。
                  </p>
                  <p className="mt-3">
                    如果能看到 Gmail、GitHub、Notion 等工具图标，说明 Gate MCP 已成功连接并可以使用。
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">遇到连接问题怎么办？</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <p className="mb-2">如果遇到连接问题，请按以下步骤排查：</p>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>确认 Claude Code CLI 已正确安装并登录</li>
                    <li>检查配置命令中的 Gate MCP 服务器地址是否正确</li>
                    <li>重启 Claude Code CLI 应用程序</li>
                    <li>如果访问海外 MCP 服务，确认网络连接稳定</li>
                  </ol>
                  <p className="mt-3">
                    如果问题仍未解决，请加入我们的
                    <a href="/contact" className="text-accent hover:underline">
                      交流群
                    </a>
                    获取技术支持。
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Gate 的数据安全吗？</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <p className="mb-2">Gate 高度重视数据安全：</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>
                      <strong>本地执行</strong>：所有操作都在你的本地环境中执行，数据不会上传到 Gate 服务器
                    </li>
                    <li>
                      <strong>权限可控</strong>：你可以精确控制 Gate 可以访问哪些服务和数据
                    </li>
                    <li>
                      <strong>透明可审计</strong>：所有 AI 操作都有完整的日志记录，可随时查看
                    </li>
                  </ul>
                  <p className="mt-3">
                    企业用户还可以选择
                    <a href="/solutions/enterprise" className="text-accent hover:underline">
                      私有化部署方案
                    </a>
                    ，获得更高级别的数据安全保障。
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">企业用户如何获取定制版本？</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <p className="mb-3">
                    Gate 为企业用户提供定制化解决方案，包括将企业数据封装为智慧大脑 SDK、定制专属 Gate
                    实例、私有化部署等服务。
                  </p>
                  <p className="mb-3">企业定制版本的优势：</p>
                  <ul className="list-disc list-inside space-y-1 ml-2 mb-3">
                    <li>数据完全本地化，符合企业安全合规要求</li>
                    <li>快速集成外部 AI 能力，缩短开发周期</li>
                    <li>模块化设计，灵活适配企业现有系统</li>
                  </ul>
                  <p>
                    了解更多信息，请访问
                    <a href="/solutions/enterprise" className="text-accent hover:underline">
                      企业解决方案
                    </a>
                    页面，或
                    <a href="/contact" className="text-accent hover:underline">
                      联系我们
                    </a>
                    获取专业咨询。
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
