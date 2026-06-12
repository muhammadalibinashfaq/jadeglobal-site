'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const clientLogos = [
  'SALESFORCE', 'ORACLE', 'AWS', 'AZURE', 'SNOWFLAKE',
  'NETSUITE', 'BOOMI', 'GOOGLE CLOUD', 'SAP', 'SERVICENOW',
  'SALESFORCE', 'ORACLE', 'AWS', 'AZURE', 'SNOWFLAKE',
  'NETSUITE', 'BOOMI', 'GOOGLE CLOUD', 'SAP', 'SERVICENOW',
]

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 opacity-[0.08]">
        <Image src="/hero-bg.png" alt="" fill className="object-cover" priority />
      </div>

      {/* Ambient orbs */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-white/[0.012] rounded-full blur-[200px] animate-morph" />
      <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-white/[0.008] rounded-full blur-[150px] animate-morph" style={{ animationDelay: '-7s' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-10" />

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          {/* Left content - 8 cols */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-5 mb-10"
            >
              <div className="h-[1px] w-16 bg-gradient-to-r from-white/30 to-transparent" />
              <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/50 font-[family-name:var(--font-space-mono)]">
                Digital Transformation Partner
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extralight leading-[0.88] tracking-ultra-tight"
              >
                <span className="gradient-text">Empower</span>
                <br />
                <span className="text-white/95">Your</span>
                <br />
                <span className="gradient-text">Digital Future</span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10 text-base sm:text-lg text-white/45 max-w-lg leading-[1.8] font-light"
            >
              Seamlessly connect your enterprise to the cloud, AI, and data intelligence.
              Two decades of consulting excellence across 400+ organizations worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mt-12 flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-shine bg-white text-black font-medium text-[12px] tracking-[0.15em] uppercase rounded-none px-10 h-13 hover:bg-white/90 transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.06)] group py-4"
              >
                Explore Services
                <ArrowDown className="ml-3 size-3.5 transition-transform group-hover:translate-y-1 duration-300" />
              </Button>
              <a
                href="https://Cal.com/Antrosys"
                target="_blank"
                rel="noopener noreferrer"
                className="border-white/[0.1] bg-transparent hover:bg-white/[0.03] hover:border-white/[0.2] text-white/55 hover:text-white/80 rounded-none px-10 h-13 text-[12px] font-light tracking-[0.15em] uppercase transition-all duration-500 py-4 group inline-flex items-center"
              >
                <Play className="mr-3 size-3 fill-current opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Book a Meeting
              </a>
            </motion.div>
          </div>

          {/* Right side - floating stats card - 4 cols */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
              {/* Main floating card */}
              <div className="glass-card p-8 animate-float">
                <div className="space-y-8">
                  {[
                    { value: '22+', label: 'Years of Excellence', sub: 'Since 2003' },
                    { value: '400+', label: 'Global Clients', sub: 'Fortune 500 to Startups' },
                    { value: '2000+', label: 'Professionals', sub: 'Across 13 Offices' },
                  ].map((stat, i) => (
                    <div key={stat.label} className={`${i < 2 ? 'pb-8 border-b border-white/[0.04]' : ''}`}>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-4xl font-extralight text-white/80 tracking-tight">{stat.value}</div>
                          <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium">{stat.label}</div>
                        </div>
                        <div className="text-[10px] text-white/25 font-light font-[family-name:var(--font-space-mono)]">{stat.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini progress bars */}
                <div className="mt-8 pt-6 border-t border-white/[0.04] space-y-3">
                  {[
                    { label: 'Client Satisfaction', value: 98 },
                    { label: 'On-time Delivery', value: 95 },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-white/35 font-medium">{bar.label}</span>
                        <span className="text-[9px] text-white/40 font-[family-name:var(--font-space-mono)]">{bar.value}%</span>
                      </div>
                      <div className="h-[2px] bg-white/[0.04] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${bar.value}%` }}
                          transition={{ duration: 2, delay: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="h-full bg-gradient-to-r from-white/10 to-white/30 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-white/[0.04] rotate-45" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 border border-white/[0.03] rotate-12" />
            </div>
          </motion.div>
        </div>

        {/* Client logos marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16 lg:mt-24 border-t border-white/[0.04] pt-8"
        >
          <p className="text-[9px] text-white/30 text-center mb-8 uppercase tracking-[0.5em] font-medium font-[family-name:var(--font-space-mono)]">
            Trusted by leading enterprises
          </p>
          <div className="relative overflow-hidden mask-fade-edges">
            <div className="flex animate-marquee">
              {clientLogos.map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 mx-12 text-white/15 text-[11px] font-light tracking-[0.3em] whitespace-nowrap hover:text-white/35 transition-colors duration-700 uppercase"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/25 font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-3 bg-white/40"
          />
        </div>
      </motion.div>
    </section>
  )
}
