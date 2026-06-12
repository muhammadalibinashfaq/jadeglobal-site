'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const metrics = [
  { label: 'System Uptime', value: 99.9, suffix: '%', prefix: '' },
  { label: 'SLA Response', value: 2, suffix: 'hrs', prefix: '<' },
  { label: 'Data Processing', value: 50, suffix: 'TB+', prefix: '' },
  { label: 'Client Retention', value: 95, suffix: '%', prefix: '' },
]

function AnimatedCounter({ value, suffix, prefix, duration = 2 }: { value: number; suffix: string; prefix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = value
    const stepTime = (duration * 1000) / end
    const isFloat = value % 1 !== 0
    const increment = isFloat ? 0.1 : 1

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Number(start.toFixed(1)))
      }
    }, stepTime * (isFloat ? 1 : increment))

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white/80 tracking-ultra-tight">
      {prefix}{count}{suffix}
    </span>
  )
}

export default function MetricsSection() {
  return (
    <section className="relative py-32 sm:py-44 bg-[#020202] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

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
              Metrics
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-ultra-tight leading-[0.95]">
            Optimized for
            <br />
            <span className="gradient-text">enterprise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.03]">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="bg-[#020202] p-10 sm:p-14 text-center group hover:bg-[#050505] transition-all duration-700 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                <p className="mt-4 text-[10px] text-white/15 font-medium uppercase tracking-[0.25em]">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button className="btn-shine bg-white text-black font-medium text-[12px] tracking-[0.15em] uppercase rounded-none px-10 h-13 hover:bg-white/90 transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.06)] group py-4">
            Request Demo
            <ArrowRight className="ml-3 size-3.5 transition-transform group-hover:translate-x-1 duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
