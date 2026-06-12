'use client'

import { motion } from 'framer-motion'
import { Award, Eye, Rocket } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Prime Expertise',
    description: 'Two decades of enterprise consulting with certified professionals across 20+ platforms. Salesforce Summit Partner. Oracle Premier Partner.',
    number: '01',
  },
  {
    icon: Eye,
    title: 'Total Transparency',
    description: 'Real-time dashboards, detailed reporting, and complete visibility into every engagement. Know exactly where your investment goes.',
    number: '02',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Agile methodologies with proven frameworks that cut implementation time by 60%. From discovery to production in record time.',
    number: '03',
  },
]

export default function WhyChooseSection() {
  return (
    <section className="relative py-32 sm:py-44 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.006] rounded-full blur-[200px]" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-5 mb-8">
            <div className="w-8 h-[1px] bg-gradient-to-r from-white/30 to-transparent" />
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/25 font-[family-name:var(--font-space-mono)]">
              Why Jade Global.site
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-ultra-tight leading-[0.95]">
            Built for
            <br />
            <span className="gradient-text">the long term</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="group grid lg:grid-cols-[140px_1fr_1fr] gap-8 lg:gap-16 border-t border-white/[0.04] py-12 first:border-t-0 first:pt-0 hover:bg-white/[0.008] transition-all duration-700 px-4 -mx-4 relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/0 group-hover:bg-white/10 transition-all duration-700" />

                {/* Number */}
                <div className="hidden lg:flex items-center">
                  <span className="text-7xl font-extralight text-white/[0.03] group-hover:text-white/[0.07] transition-colors duration-700 tracking-tight">
                    {value.number}
                  </span>
                </div>

                {/* Title + Icon */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-white/[0.05] flex items-center justify-center flex-shrink-0 group-hover:border-white/15 group-hover:bg-white/[0.02] transition-all duration-700 mt-1">
                    <Icon className="size-5 text-white/30 group-hover:text-white/50 transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-white/65 group-hover:text-white transition-colors duration-500 tracking-tight">
                      {value.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="flex items-center">
                  <p className="text-sm text-white/35 leading-[1.8] font-light group-hover:text-white/55 transition-colors duration-500">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
