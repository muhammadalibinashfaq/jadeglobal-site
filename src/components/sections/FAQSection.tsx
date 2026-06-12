'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What services does Jade Global offer?',
    answer: 'Jade Global provides comprehensive IT consulting, integration, and managed services including Cloud Transformation, ERP & CRM Modernization, Data & Analytics, AI & Intelligent Automation, Integration, Testing, and Managed Services. We are a certified partner with Salesforce, Oracle, NetSuite, Snowflake, Boomi, AWS, and Azure.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We specialize in Hi-Tech, Life Sciences, Healthcare, Financial Services, and Manufacturing industries. Our deep domain expertise across these verticals allows us to deliver tailored solutions that address industry-specific challenges and regulatory requirements.',
  },
  {
    question: 'What technology platforms do you support?',
    answer: 'We are certified experts across 20+ enterprise platforms including Salesforce (Summit Partner), Oracle (Premier Partner), NetSuite, Snowflake, Boomi, AWS, Azure, Google Cloud, and more. Our multi-platform expertise ensures vendor-agnostic recommendations for your specific needs.',
  },
  {
    question: 'How does Jade Global ensure project success?',
    answer: 'We follow a proven methodology: Discovery, Analysis, Implementation, and Optimization. Our agile frameworks, certified professionals, real-time dashboards, and detailed reporting ensure complete visibility and accountability throughout every engagement. We maintain a 95% client retention rate.',
  },
  {
    question: 'Do you offer managed services and ongoing support?',
    answer: 'Yes, we provide comprehensive managed services including 24/7 monitoring, incident management, performance optimization, and ongoing support. Our SLA guarantees less than 2-hour response times with 99.9% system uptime across all managed engagements.',
  },
  {
    question: "What is Jade Global's delivery model?",
    answer: 'We offer flexible delivery models including on-site, offshore, and hybrid approaches from our 13 offices across North America, UK, and Asia. With 2000+ employees, we can scale teams rapidly while maintaining quality through our proven frameworks and certified professionals.',
  },
]

export default function FAQSection() {
  return (
    <section className="relative py-32 sm:py-44 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-5 mb-8">
            <div className="w-8 h-[1px] bg-gradient-to-r from-white/30 to-transparent" />
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/25 font-[family-name:var(--font-space-mono)]">
              FAQ
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-ultra-tight leading-[0.95]">
            Common
            <br />
            <span className="gradient-text">inquiries</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/[0.03] bg-transparent px-0 data-[state=open]:bg-transparent transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-white/30 hover:no-underline hover:text-white/60 transition-colors duration-500 py-7 text-sm font-light tracking-wide">
                  <span className="flex items-center gap-5">
                    <span className="text-white/[0.06] text-[10px] font-[family-name:var(--font-space-mono)] min-w-[22px]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-white/15 text-sm leading-[1.9] pb-7 font-light pl-9">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
