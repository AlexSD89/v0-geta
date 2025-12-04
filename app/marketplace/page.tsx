import type { Metadata } from "next"
import MarketplaceClientPage from "./marketplace-client"

export const metadata: Metadata = {
  title: "集成工具 - Gate",
  description: "探索 Gate 支持的集成工具，连接 GitHub、Gmail、Notion 等主流服务，为 AI 智能体提供标准化工具能力",
  keywords: ["集成工具", "连接器", "MCP服务", "GitHub", "Gmail", "Notion", "自动化"],
  openGraph: {
    title: "集成工具 - Gate",
    description: "探索 Gate 支持的集成工具，为 AI 智能体提供标准化工具能力",
  },
}

export default function MarketplacePage() {
  return <MarketplaceClientPage />
}
