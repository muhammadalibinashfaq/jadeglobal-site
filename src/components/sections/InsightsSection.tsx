'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const articles = [
  {
    image: '/article-1.png',
    date: 'JUN 12, 2026',
    readTime: '2 MINS',
    title: 'What It Takes to Turn AI Into a Business Asset',
    excerpt: 'Using AI tools is easy. Turning them into something that drives real outcomes requires structure.',
    category: 'AI & Automation',
  },
  {
    image: '/article-1.png',
    date: 'JUN 12, 2026',
    readTime: '3 MINS',
    title: 'Why Your Cloud Migration Strategy Needs a Reboot',
    excerpt: 'The landscape has shifted. Here\'s what enterprises need to reconsider before their next migration.',
    category: 'Cloud',
  },
  {
    image: '/article-1.png',
    date: 'JUN 12, 2026',
    readTime: '2 MINS',
    title: 'From Legacy Systems to Intelligent Operations',
    excerpt: 'The real shift in enterprise IT isn\'t about technology adoption. It\'s about operational transformation.',
    category: 'Digital Transformation',
  },
]

export default function InsightsSection() {
  return (
    <section id="insights" className="relative py-32 sm:py-44 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.005] rounded-full blur-[200px]" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-8 h-[1px] bg-gradient-to-r from-white/30 to-transparent" />
              <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/25 font-[family-name:var(--font-space-mono)]">
                Insights
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-ultra-tight leading-[0.95]">
              Perspectives on
              <br />
              <span className="gradient-text">transformation</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              variant="outline"
              className="border-white/[0.08] bg-transparent hover:bg-white/[0.02] hover:border-white/[0.15] text-white/30 hover:text-white/70 rounded-none px-8 h-11 text-[11px] tracking-[0.15em] uppercase font-light transition-all duration-500 group"
            >
              View All
              <ArrowUpRight className="ml-2 size-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
            </Button>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="group cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden mb-7 border border-white/[0.03] group-hover:border-white/[0.06] transition-all duration-700">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent" />

                {/* Category */}
                <div className="absolute top-6 left-6">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-medium bg-black/50 backdrop-blur-xl px-3 py-1.5 border border-white/[0.04]">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-[9px] text-white/35 font-medium tracking-[0.2em] uppercase font-[family-name:var(--font-space-mono)]">
                  {article.date}
                </span>
                <div className="h-[1px] w-4 bg-white/[0.06]" />
                <span className="text-[9px] text-white/25 font-medium tracking-[0.2em] uppercase font-[family-name:var(--font-space-mono)]">
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-lg font-light text-white/55 leading-[1.5] group-hover:text-white/85 transition-colors duration-500 mb-3">
                {article.title}
              </h3>

              <p className="text-sm text-white/30 font-light leading-[1.7] group-hover:text-white/50 transition-colors duration-500">
                {article.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
