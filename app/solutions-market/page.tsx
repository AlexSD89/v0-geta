import type { Metadata } from "next"
import SolutionsMarketClient from "./solutions-market-client"

export const metadata: Metadata = {
  title: "AI 解决方案 - Gate",
  description: "找到你的业务场景，一键部署专业 AI 工作流。每个方案都包含行业知识库、工作流编排、工具集成",
}

export default function SolutionsMarketPage() {
  return <SolutionsMarketClient />
}
