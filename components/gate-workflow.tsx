"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function GateWorkflow() {
  return (
    <section className="py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
            三步开始使用
          </h2>
          <p className="text-muted-foreground text-lg">共 10 分钟完成配置</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Step 1 */}
          <Card className="p-8 bg-card hover:shadow-md transition-shadow duration-200 border border-border rounded-lg">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background font-bold shrink-0">
                  1
                </div>
                <h3 className="text-xl font-semibold">明确业务目标</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                通过自然语言告诉 Gate 要实现什么
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                支持 Claude Desktop、Code CLI 等主流 AI 开发工具，一键配置即可使用
              </p>
            </div>
          </Card>

          {/* Step 2 */}
          <Card className="p-8 bg-card hover:shadow-md transition-shadow duration-200 border border-border rounded-lg">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background font-bold shrink-0">
                  2
                </div>
                <h3 className="text-xl font-semibold">提供工具权限</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                授权 Gate 访问必要的工具和数据
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                基于 MCP 协议，让 AI 调用 Gmail、Notion、GitHub 等各类服务
              </p>
            </div>
          </Card>

          {/* Step 3 */}
          <Card className="p-8 bg-card hover:shadow-md transition-shadow duration-200 border border-border rounded-lg">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background font-bold shrink-0">
                  3
                </div>
                <h3 className="text-xl font-semibold">确认执行范围</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                设置数据访问和操作范围
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                自动化从邮件处理到数据分析，专注于创造性任务
              </p>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="h-11 px-6 border-2 border-foreground/20 hover:border-foreground hover:bg-foreground/5 rounded-lg"
            asChild
          >
            <a href="/solutions-market">查看实际案例</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
