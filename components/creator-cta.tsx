"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileCode, FileSpreadsheet, FileText, Briefcase } from "lucide-react"

const floatingDocs = [
  { icon: FileCode, name: "workflow.yaml", position: "top-4 left-4", delay: 0 },
  { icon: FileSpreadsheet, name: "data-model.xlsx", position: "top-8 right-8", delay: 0.2 },
  { icon: FileText, name: "SKILL.md", position: "bottom-8 left-8", delay: 0.4 },
  { icon: Briefcase, name: "legal-playbook.docx", position: "bottom-4 right-4", delay: 0.6 },
]

export function CreatorCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-br from-[#0071e3] to-[#5856d6] p-8 sm:p-12 overflow-hidden"
        >
          {/* Floating Documents */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingDocs.map((doc, index) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.3, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: doc.delay }}
                className={`absolute ${doc.position} hidden sm:flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white/70 text-sm`}
              >
                <doc.icon className="w-4 h-4" />
                <span>{doc.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              有专业知识想要分享?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
              我们正在构建一个专业开发者可以构建和分发自动化工作流的平台。
              <br className="hidden sm:block" />
              成为首批贡献者，让你的专业知识持续变现。
            </p>
            <Button
              size="lg"
              className="bg-white text-[#0071e3] hover:bg-white/90 rounded-full h-12 px-8"
              asChild
            >
              <a href="/creators" className="flex items-center gap-2">
                提交你的 Skill
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
