'use client'

import { motion } from 'framer-motion'
import { Search, BarChart3, Hammer, RefreshCw } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'DISCOVERY',
    description: 'Assess current systems and define transformation roadmap aligned with business objectives.',
    detail: 'Stakeholder interviews, system audit, gap analysis',
  },
  {
    icon: BarChart3,
    step: '02',
    title: 'ANALYSIS',
    description: 'Deep-dive into requirements and architect optimal solutions with platform expertise.',
    detail: 'Solution design, architecture planning, risk assessment',
  },
  {
    icon: Hammer,
    step: '03',
    title: 'IMPLEMENTATION',
    description: 'Build, integrate, and deploy with certified experts using proven agile frameworks.',
    detail: 'Sprint planning, iterative builds, QA testing',
  },
  {
    icon: RefreshCw,
    step: '04',
    title: 'OPTIMIZE',
    description: 'Continuous monitoring, support, and performance optimization for long-term success.',
    detail: '24/7 monitoring, performance tuning, scaling',
  },
]

export default function ProcessSection() {
  return (
    <section className="relative py-32 sm:py-44 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

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
              Process
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-ultra-tight leading-[0.95]">
            Engineered
            <br />
            <span className="gradient-text">for results</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Horizontal connector line */}
          <div className="hidden lg:block absolute top-[72px] left-[72px] right-[72px] h-[1px] bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03]" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Circle on line */}
                  <div className="hidden lg:flex items-center justify-center w-6 h-6 border border-white/[0.06] bg-[#030303] rounded-full mb-10 group-hover:border-white/20 transition-all duration-700 relative z-10 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.03)]">
                    <div className="w-2 h-2 bg-white/10 rounded-full group-hover:bg-white/40 transition-all duration-500" />
                  </div>

                  <div className="pt-2 lg:pt-0">
                    {/* Step label */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[9px] font-[family-name:var(--font-space-mono)] font-bold text-white/20 group-hover:text-white/35 transition-colors duration-500">
                        STEP {step.step}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 border border-white/[0.04] flex items-center justify-center mb-7 group-hover:border-white/[0.1] group-hover:bg-white/[0.015] transition-all duration-700">
                      <Icon className="size-5 text-white/25 group-hover:text-white/50 transition-colors duration-500" />
                    </div>

                    <h3 className="text-lg font-light text-white/60 mb-4 tracking-[0.08em] uppercase group-hover:text-white transition-colors duration-500 text-[13px]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/35 leading-[1.8] font-light mb-4 group-hover:text-white/55 transition-colors duration-500">
                      {step.description}
                    </p>
                    <p className="text-[10px] text-white/25 font-light tracking-[0.1em] font-[family-name:var(--font-space-mono)]">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
