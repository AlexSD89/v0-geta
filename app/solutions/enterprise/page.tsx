import type { Metadata } from "next"
import { EnterpriseSolutionClient } from "./enterprise-client"

export const metadata: Metadata = {
  title: "企业解决方案 - 将企业数据转化为可复用数字资产",
  description:
    "Gate 企业方案将分散的企业数据封装成标准化 SDK,让 AI 智能体可调用,成为可复用进化的数字资产。本地执行,数据不出域,快速部署。",
  keywords: ["企业AI", "数据封装", "SDK", "智能编排", "私有化部署", "数据安全"],
  openGraph: {
    title: "Gate 企业解决方案 - 企业数据资产化",
    description: "标准化封装,智能调用,可复用进化。将企业数据转化为数字资产",
    type: "website",
  },
}

export default function EnterpriseSolutionPage() {
  return <EnterpriseSolutionClient />
}
