import { notFound } from "next/navigation"
import SolutionDetailClient from "./solution-detail-client"

export async function generateStaticParams() {
  return [
    { id: "linkedin-recruitment" },
    { id: "customer-service" },
    { id: "finance-automation" },
    { id: "hr-system" },
    { id: "ecommerce-ops" },
    { id: "marketing-automation" },
    { id: "data-analysis" },
    { id: "project-management" },
    { id: "security-automation" },
    { id: "supply-chain" },
  ]
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const validIds = [
    "linkedin-recruitment",
    "customer-service",
    "finance-automation",
    "hr-system",
    "ecommerce-ops",
    "marketing-automation",
    "data-analysis",
    "project-management",
    "security-automation",
    "supply-chain",
  ]

  if (!validIds.includes(id)) {
    notFound()
  }

  return <SolutionDetailClient solutionId={id} />
}
