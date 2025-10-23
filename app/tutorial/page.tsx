import type { Metadata } from "next"
import TutorialPageClient from "./TutorialPageClient"

export const metadata: Metadata = {
  title: "安装教程 - Gate MCP 快速上手指南",
  description:
    "5-10分钟完成 Gate MCP 安装配置。详细的图文教程,从安装 Claude Code CLI 到激活 MCP 服务,轻松接入 AI 智能体协同编排平台。",
  keywords: ["Gate安装", "MCP教程", "Claude Code", "AI配置", "快速上手"],
  openGraph: {
    title: "Gate MCP 安装教程 - 10分钟快速上手",
    description: "详细的图文教程,轻松完成 Gate MCP 安装和配置",
    type: "article",
  },
}

export default function TutorialPage() {
  return <TutorialPageClient />
}
