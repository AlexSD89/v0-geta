import type { Metadata } from "next"
import QuickstartClient from "./quickstart-client"

export const metadata: Metadata = {
  title: "快速开始 - Gate Skills 平台",
  description: "10 分钟快速安装 Claude Code CLI，连接 Gate 平台，开始使用 AI Skills。",
  keywords: ["Gate安装", "Claude Code", "快速开始", "安装指南", "MCP"],
}

export default function QuickstartPage() {
  return <QuickstartClient />
}
