import type { Metadata } from "next"
import SolutionsMarketClient from "./solutions-market-client"

export const metadata: Metadata = {
  title: "第三方方案市场 - Gate",
  description: "探索由行业专家与 Gate 官方联合打造的企业级 AI 自动化解决方案",
}

export default function SolutionsMarketPage() {
  return <SolutionsMarketClient />
}
