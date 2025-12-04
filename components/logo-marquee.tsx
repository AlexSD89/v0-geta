"use client"

import Image from "next/image"

export function LogoMarquee() {
  const companies = [
    { name: "Notion", logo: "/notion-logo.png" },
    { name: "Linear", logo: "/linear-logo.png" },
    { name: "Figma", logo: "/figma-logo.png" },
    { name: "Vercel", logo: "/vercel-logo.png" },
    { name: "Supabase", logo: "/supabase-logo.png" },
    { name: "Framer", logo: "/framer-logo.png" },
  ]

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-neutral-500 tracking-wider uppercase">已集成的工具</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {companies.concat(companies).map((company, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 mx-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
