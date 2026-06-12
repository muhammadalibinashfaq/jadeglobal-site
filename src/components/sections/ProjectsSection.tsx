'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const projects = [
  {
    image: '/project-1.png',
    year: '2026',
    company: 'TechCorp',
    title: 'Cloud Migration',
    description: 'Migrated 500+ applications to multi-cloud architecture, reducing infrastructure costs by 40%.',
    metric: '40% Cost Reduction',
    tags: ['AWS', 'Azure', 'Migration'],
  },
  {
    image: '/project-2.png',
    year: '2026',
    company: 'HealthNet',
    title: 'Data Platform',
    description: 'Built unified data analytics platform serving 10M+ patient records with real-time insights.',
    metric: '10M+ Records',
    tags: ['Snowflake', 'Analytics'],
  },
  {
    image: '/project-3.png',
    year: '2026',
    company: 'FinServe',
    title: 'AI Integration',
    description: 'Deployed custom AI agents automating 85% of claims processing, cutting turnaround from days to hours.',
    metric: '85% Automation',
    tags: ['AI', 'Automation'],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 sm:py-44 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-white/[0.005] rounded-full blur-[250px]" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
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
              Selected Work
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-ultra-tight leading-[0.95]">
            Proven
            <br />
            <span className="gradient-text">enterprise</span>
            <br />
            solutions
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="grid lg:grid-cols-2 gap-0 border border-white/[0.04] bg-black hover:border-white/[0.08] transition-all duration-700 overflow-hidden">
                {/* Image */}
                <div className="relative h-72 sm:h-96 lg:h-[500px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.company + ' ' + project.title}
                    fill
                    className="object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 lg:bg-gradient-to-l lg:from-transparent lg:to-black" />

                  {/* Year + Company overlay */}
                  <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
                    <span className="text-[10px] font-[family-name:var(--font-space-mono)] tracking-[0.3em] text-white/30 uppercase">{project.year}</span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                    <div className="w-12 h-12 border border-white/[0.1] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-4 group-hover:translate-y-0 bg-black/40 backdrop-blur-xl">
                      <ArrowUpRight className="size-5 text-white/70" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[11px] uppercase tracking-[0.25em] text-white/30 font-medium">{project.company}</span>
                      <div className="h-[1px] w-8 bg-white/10" />
                      <span className="text-[11px] uppercase tracking-[0.2em] text-white/15 font-[family-name:var(--font-space-mono)]">{project.metric}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white/60 tracking-tight group-hover:text-white transition-colors duration-500 leading-tight mb-6">
                      {project.title}
                    </h3>

                    <p className="text-sm text-white/18 leading-[1.8] group-hover:text-white/35 transition-colors duration-500 font-light max-w-md">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex gap-2 mt-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[9px] uppercase tracking-[0.2em] text-white/10 border border-white/[0.04] px-3 py-1.5 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Button
            variant="outline"
            className="border-white/[0.08] bg-transparent hover:bg-white/[0.02] hover:border-white/[0.15] text-white/30 hover:text-white/70 rounded-none px-10 h-12 text-[12px] tracking-[0.15em] uppercase font-light transition-all duration-500 group"
          >
            View All Projects
            <ArrowUpRight className="ml-3 size-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
