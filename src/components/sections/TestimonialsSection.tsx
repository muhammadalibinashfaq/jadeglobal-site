'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'Jade Global .site transformed our entire ERP landscape in half the expected timeline. Their Oracle expertise is unmatched in the industry.',
    name: 'Sarah Mitchell',
    title: 'CTO',
    company: 'Vertex Technologies',
  },
  {
    quote: 'The data analytics platform they built gives us real-time visibility across 12 global offices. A genuine game-changer for decision making.',
    name: 'David Chen',
    title: 'VP of Engineering',
    company: 'NovaPharma Inc.',
  },
  {
    quote: 'Their Salesforce implementation increased our sales team productivity by 45%. The ROI was evident within the first quarter.',
    name: 'Rachel Foster',
    title: 'Director of Sales Ops',
    company: 'Apex Financial',
  },
  {
    quote: 'From cloud migration to AI integration, Jade Global .site has been our single trusted partner for all digital transformation initiatives.',
    name: 'Michael Torres',
    title: 'CIO',
    company: 'Quantum Manufacturing',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 sm:py-44 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.005] rounded-full blur-[200px]" />

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
              Testimonials
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-ultra-tight leading-[0.95]">
            Trusted by
            <br />
            <span className="gradient-text">industry leaders</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-[1px] bg-white/[0.03]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-black p-10 sm:p-12 group hover:bg-[#040404] transition-all duration-700 relative overflow-hidden"
            >
              {/* Hover glow from top */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/0 group-hover:bg-white/10 transition-all duration-700" />

              <Quote className="size-6 text-white/[0.03] mb-8" />
              <p className="text-white/40 leading-[1.9] mb-10 text-[15px] font-light group-hover:text-white/60 transition-colors duration-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-5">
                <div className="w-11 h-11 border border-white/[0.05] flex items-center justify-center text-white/15 text-[11px] font-[family-name:var(--font-space-mono)] font-bold group-hover:border-white/[0.1] group-hover:text-white/40 transition-all duration-500">
                  {testimonial.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-light text-white/40 group-hover:text-white/70 transition-colors duration-500">
                    {testimonial.name}
                  </p>
                  <p className="text-[10px] text-white/35 font-light tracking-[0.05em]">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
