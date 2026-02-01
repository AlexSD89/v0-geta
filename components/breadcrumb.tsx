"use client"

import { ChevronRight } from "lucide-react"

interface BreadcrumbProps {
  items: {
    label: string
    href?: string
  }[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <ChevronRight className="w-4 h-4 text-[#86868b]" />}
          {item.href ? (
            <a
              href={item.href}
              className="text-[#0071e3] hover:underline transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-[#1d1d1f] font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
