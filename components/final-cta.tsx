"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function FinalCTA() {
  return (
    <section className="section-spacing px-4 sm:px-6 bg-gradient-to-br from-[#f5f5f7] via-white to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,113,227,0.03)_0%,transparent_70%)]" />

      <div className="container-default text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-section mb-5 text-[#1d1d1f]">连接一切，自动化一切</h2>
          <p className="subtitle-section mx-auto mb-12 leading-relaxed">立即申请免费使用，开启智能自动化之旅</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="h-14 px-10 rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] transition-all shadow-lg hover:shadow-xl active:scale-[0.98] group text-[17px]"
            asChild
          >
            <a href="/tutorial">
              查看安装教程
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="h-14 px-10 rounded-full text-[#0071e3] hover:bg-[#0071e3]/8 transition-all text-[17px]"
            asChild
          >
            <a href="/contact">联系销售</a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[15px] text-[#86868b] mt-10"
        >
          限时免费 · 10 分钟完成设置
        </motion.p>
      </div>
    </section>
  )
}
