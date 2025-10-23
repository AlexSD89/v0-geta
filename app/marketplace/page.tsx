import type { Metadata } from "next"
import MarketplaceClientPage from "./MarketplaceClientPage"

export const metadata: Metadata = {
  title: "Gate Market - AI 工具集成市场",
  description:
    "探索 Gate 精选的 AI 工具集成,包括 GitHub、Gmail、Notion、Slack 等 35+ 主流服务。一键连接,让你的 AI 助手拥有更强大的能力。",
  keywords: ["AI工具", "集成市场", "GitHub", "Gmail", "Notion", "MCP服务", "工具连接"],
  openGraph: {
    title: "Gate Market - AI 工具集成市场",
    description: "探索 35+ 精选 AI 工具集成,一键连接 GitHub、Gmail、Notion 等主流服务",
    type: "website",
  },
}

export default function MarketplacePage() {
  return <MarketplaceClientPage />
}
