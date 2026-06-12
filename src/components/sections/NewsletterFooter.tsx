'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, User, Mail, Phone, Building2, Globe, MessageSquare } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export default function NewsletterFooter() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phone: '',
    company: '',
    website: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ fullName: '', emailAddress: '', phone: '', company: '', website: '', message: '' })
    }, 3000)
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="relative bg-black">
      {/* Contact Form Section — replacing newsletter */}
      <div className="relative py-32 sm:py-44 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.005] rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left side — heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-8 h-[1px] bg-gradient-to-r from-white/30 to-transparent" />
                <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/50 font-[family-name:var(--font-space-mono)]">
                  Get in Touch
                </span>
              </div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-ultra-tight leading-[0.95] mb-6">
                Let&apos;s start
                <br />
                <span className="gradient-text">something new</span>
              </h2>
              <p className="text-white/45 text-sm leading-[1.8] font-light max-w-md mb-10">
                Ready to transform your business? Reach out and our team of certified consultants will craft a tailored solution for your digital transformation needs.
              </p>

              <a
                href="https://Cal.com/Antrosys"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black font-medium rounded-lg px-8 h-12 text-[12px] tracking-[0.1em] uppercase hover:bg-white/90 transition-all duration-500"
              >
                Book a Meeting
                <ArrowRight className="size-3.5" />
              </a>
            </motion.div>

            {/* Right side — contact form */}
            <motion.form
              onSubmit={handleFormSubmit}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-5"
            >
              {/* Full Name */}
              <div>
                <label className="block text-[10px] font-medium text-white/50 uppercase tracking-[0.2em] mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/25" />
                  <Input
                    value={formData.fullName}
                    onChange={(e) => handleFormChange('fullName', e.target.value)}
                    placeholder="John Doe"
                    className="bg-white/[0.04] border border-white/[0.08] text-white/80 placeholder:text-white/20 rounded-lg h-11 font-light text-sm pl-10 focus:ring-0 focus:border-white/20 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[10px] font-medium text-white/50 uppercase tracking-[0.2em] mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/25" />
                  <Input
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) => handleFormChange('emailAddress', e.target.value)}
                    placeholder="john@example.com"
                    className="bg-white/[0.04] border border-white/[0.08] text-white/80 placeholder:text-white/20 rounded-lg h-11 font-light text-sm pl-10 focus:ring-0 focus:border-white/20 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-[10px] font-medium text-white/50 uppercase tracking-[0.2em] mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/25" />
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleFormChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="bg-white/[0.04] border border-white/[0.08] text-white/80 placeholder:text-white/20 rounded-lg h-11 font-light text-sm pl-10 focus:ring-0 focus:border-white/20 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-[10px] font-medium text-white/50 uppercase tracking-[0.2em] mb-2">Company Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/25" />
                  <Input
                    value={formData.company}
                    onChange={(e) => handleFormChange('company', e.target.value)}
                    placeholder="Antrosys"
                    className="bg-white/[0.04] border border-white/[0.08] text-white/80 placeholder:text-white/20 rounded-lg h-11 font-light text-sm pl-10 focus:ring-0 focus:border-white/20 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Website URL */}
              <div>
                <label className="block text-[10px] font-medium text-white/50 uppercase tracking-[0.2em] mb-2">Website URL</label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/25" />
                  <Input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleFormChange('website', e.target.value)}
                    placeholder="https://example.com"
                    className="bg-white/[0.04] border border-white/[0.08] text-white/80 placeholder:text-white/20 rounded-lg h-11 font-light text-sm pl-10 focus:ring-0 focus:border-white/20 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] font-medium text-white/50 uppercase tracking-[0.2em] mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 size-4 text-white/25" />
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleFormChange('message', e.target.value)}
                    placeholder="I need an amazing Web / UI/UX Design / Brand identity..."
                    rows={4}
                    className="w-full bg-white/[0.04] border border-white/[0.08] text-white/80 placeholder:text-white/20 rounded-lg font-light text-sm pl-10 pr-4 py-3 focus:ring-0 focus:border-white/20 transition-colors duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-white text-black font-semibold rounded-lg h-12 text-[13px] tracking-[0.1em] uppercase hover:bg-white/90 transition-all duration-500 mt-2"
              >
                {formSubmitted ? 'Message Sent!' : 'Submit'}
              </Button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.03]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-8 h-8 overflow-hidden">
                  <div className="absolute inset-0 border border-white/15 rotate-45 scale-75" />
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold tracking-tighter">J</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[14px] font-light tracking-[0.25em] uppercase text-white/60">
                    Jade
                  </span>
                  <span className="text-[8px] font-medium tracking-[0.35em] uppercase text-white/35">
                    Global .site
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/30 leading-[1.8] font-light max-w-xs">
                Your Trusted Partner for Digital Transformation. Premier IT consulting, integration, and managed services since 2003.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[9px] font-medium text-white/40 mb-6 uppercase tracking-[0.3em]">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                      className="text-sm text-white/30 hover:text-white/55 transition-colors duration-300 font-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[9px] font-medium text-white/40 mb-6 uppercase tracking-[0.3em]">
                Contact
              </h4>
              <div className="space-y-4 text-sm text-white/30 font-light leading-[1.7]">
                <p>
                  1500 N Grant ST # 7997
                  <br />
                  Denver, CO 80203
                </p>
                <p>
                  <a href="tel:+13503535005" className="hover:text-white/55 transition-colors duration-300">
                    +1 350 353 5005
                  </a>
                </p>
                <p>
                  <a href="mailto:connect@antrosys.com" className="hover:text-white/55 transition-colors duration-300">
                    connect@antrosys.com
                  </a>
                </p>
                <p className="pt-4">
                  <a
                    href="https://Cal.com/Antrosys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black font-semibold rounded-lg px-5 py-3 text-[11px] tracking-[0.1em] uppercase hover:bg-white/90 transition-all duration-500"
                  >
                    Book a Meeting
                    <ArrowRight className="size-3" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/[0.03]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[9px] text-white/20 font-light tracking-[0.15em] font-[family-name:var(--font-space-mono)]">
            &copy; 2026 JADE GLOBAL .SITE. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[9px] text-white/20 font-light tracking-[0.15em]">
            Denver &middot; San Jose &middot; Philadelphia &middot; Pune &middot; London
          </p>
        </div>
      </div>
    </footer>
  )
}
