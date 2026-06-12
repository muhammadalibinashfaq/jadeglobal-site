'use client'

import { motion } from 'framer-motion'
import { Cloud, Database, BarChart3, Bot, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Cloud,
    title: 'Cloud Transformation',
    description: 'Migrate and optimize your infrastructure across AWS, Azure, and Google Cloud with certified architects and zero-downtime methodologies.',
    tags: ['AWS', 'Azure', 'GCP'],
    number: '01',
  },
  {
    icon: Database,
    title: 'ERP & CRM Modernization',
    description: 'Transform business operations with Oracle, NetSuite, and Salesforce implementations tailored to your enterprise complexity.',
    tags: ['Oracle', 'NetSuite', 'Salesforce'],
    number: '02',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description: 'Unlock actionable insights with Snowflake, data lakes, and AI-powered analytics platforms that drive real-time decision making.',
    tags: ['Snowflake', 'Analytics', 'BI'],
    number: '03',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Deploy intelligent automation, custom AI agents, and machine learning solutions that redefine operational excellence at scale.',
    tags: ['AI', 'ML', 'IPA'],
    number: '04',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 sm:py-44 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/2 bg-white/[0.008] rounded-full blur-[200px]" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-8 h-[1px] bg-gradient-to-r from-white/30 to-transparent" />
              <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/50 font-[family-name:var(--font-space-mono)]">
                Services
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-ultra-tight leading-[0.95]">
              What we
              <br />
              <span className="gradient-text">deliver</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-end"
          >
            <p className="text-white/45 text-base leading-[1.9] font-light max-w-md">
              End-to-end consulting, implementation, and managed services across the enterprise
              technology landscape. Certified partnerships with the world&apos;s leading platforms
              ensure vendor-agnostic solutions built for your specific needs.
            </p>
          </motion.div>
        </div>

        {/* Service Cards - Bento Grid Style */}
        <div className="grid sm:grid-cols-2 gap-[1px] bg-white/[0.03]">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="group relative bg-black p-10 sm:p-12 transition-all duration-700 hover:bg-[#060606] overflow-hidden"
              >
                {/* Hover background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/20 transition-all duration-700" />

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-0 h-0 border-l-[40px] border-l-white/0 border-b-[40px] border-b-transparent group-hover:border-l-white/[0.04] transition-all duration-700" />

                <div className="relative z-10">
                  {/* Number + Icon row */}
                  <div className="flex items-start justify-between mb-10">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-[family-name:var(--font-space-mono)] font-bold text-white/20 group-hover:text-white/35 transition-colors duration-500">
                        {service.number}
                      </span>
                      <div className="w-12 h-12 border border-white/[0.06] flex items-center justify-center group-hover:border-white/15 group-hover:bg-white/[0.02] transition-all duration-500">
                        <Icon className="size-5 text-white/35 group-hover:text-white/60 transition-colors duration-500" />
                      </div>
                    </div>
                    <ArrowUpRight className="size-5 text-white/0 group-hover:text-white/20 transition-all duration-700 -translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>

                  <h3 className="text-2xl font-light text-white/75 mb-5 tracking-tight group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/45 leading-[1.8] mb-8 group-hover:text-white/65 transition-colors duration-500 font-light">
                    {service.description}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase tracking-[0.2em] text-white/30 border border-white/[0.04] px-3 py-1.5 font-medium group-hover:text-white/50 group-hover:border-white/[0.08] transition-all duration-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
