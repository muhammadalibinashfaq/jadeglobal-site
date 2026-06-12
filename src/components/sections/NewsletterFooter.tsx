'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react'
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

const otherLinks = [
  { label: 'Careers', href: '#' },
  { label: 'Partners', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
]

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
]

export default function NewsletterFooter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email.trim() && email.includes('@')) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="relative bg-black">
      {/* Newsletter CTA */}
      <div className="relative py-32 sm:py-44 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.005] rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-5 mb-8">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-white/30" />
              <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/25 font-[family-name:var(--font-space-mono)]">
                Newsletter
              </span>
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-white/30" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-ultra-tight leading-[0.95] mb-6">
              Stay ahead in
              <br />
              <span className="gradient-text">transformation</span>
            </h2>
            <p className="text-white/40 text-sm mb-12 font-light leading-[1.8]">
              Get the latest insights, case studies, and industry updates delivered to your inbox.
            </p>
            <div className="flex gap-0 max-w-md mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-white/[0.06] border-r-0 text-white/70 placeholder:text-white/[0.06] rounded-none h-12 font-light text-sm focus:ring-0 focus:border-white/15 transition-colors duration-300"
              />
              <Button
                onClick={handleSubscribe}
                className="btn-shine bg-white text-black font-medium rounded-none h-12 px-8 text-[12px] tracking-[0.15em] uppercase hover:bg-white/90 transition-all duration-500 border border-white"
              >
                {subscribed ? 'Subscribed' : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 size-3.5" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.03]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-2">
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
                    Global
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/30 leading-[1.8] mb-10 font-light max-w-xs">
                Your Trusted Partner for Digital Transformation. Premier IT consulting, integration, and managed services since 2003.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 border border-white/[0.04] flex items-center justify-center text-white/25 hover:text-white/50 hover:border-white/[0.1] transition-all duration-500"
                    >
                      <Icon className="size-3.5" />
                    </a>
                  )
                })}
              </div>
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

            {/* Company */}
            <div>
              <h4 className="text-[9px] font-medium text-white/40 mb-6 uppercase tracking-[0.3em]">
                Company
              </h4>
              <ul className="space-y-4">
                {otherLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
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
              <div className="space-y-4 text-sm text-white/10 font-light leading-[1.7]">
                <p>
                  1731 Technology Drive,
                  <br />
                  Suite 350, San Jose,
                  <br />
                  CA 95110
                </p>
                <p>
                  <a href="tel:+18008997200" className="hover:text-white/30 transition-colors duration-300">
                    +1 800-899-7200
                  </a>
                </p>
                <p>
                  <a href="mailto:info@jadeglobal.site" className="hover:text-white/30 transition-colors duration-300">
                    info@jadeglobal.site
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
            &copy; 2026 JADE GLOBAL. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[9px] text-white/20 font-light tracking-[0.15em]">
            San Jose &middot; Philadelphia &middot; Dallas &middot; Pune &middot; London
          </p>
        </div>
      </div>
    </footer>
  )
}
