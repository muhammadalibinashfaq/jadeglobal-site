'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-black/60 backdrop-blur-[40px] border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
              className="flex items-center gap-4 group"
            >
              <div className="relative w-9 h-9 overflow-hidden">
                <div className="absolute inset-0 border border-white/20 group-hover:border-white/50 transition-all duration-500 rotate-45 scale-75 group-hover:rotate-0 group-hover:scale-100" />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold tracking-tighter group-hover:scale-110 transition-transform duration-300">J</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[15px] font-light tracking-[0.25em] uppercase text-white/90">
                  Jade
                </span>
                <span className="text-[9px] font-medium tracking-[0.35em] uppercase text-white/40">
                  Global .site
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center">
              {navLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="relative px-5 py-2 text-[12px] tracking-[0.12em] uppercase text-white/50 hover:text-white transition-all duration-500 font-light group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white/40 group-hover:w-full transition-all duration-500" />
                </a>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-5">
              <a
                href="https://Cal.com/Antrosys"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex btn-shine bg-white text-black font-medium text-[12px] tracking-[0.1em] uppercase rounded-none px-7 h-10 hover:bg-white/90 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] items-center"
              >
                Book a Meeting
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors duration-300"
              >
                {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-[60px]"
          >
            <div className="flex flex-col justify-center items-center h-full px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="text-4xl font-extralight text-white/55 hover:text-white transition-colors duration-300 py-4 tracking-tight"
                >
                  <span className="text-white/10 text-sm font-mono mr-4">0{i + 1}</span>
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-10"
              >
                <a
                  href="https://Cal.com/Antrosys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine bg-white text-black font-medium text-sm tracking-wide rounded-none px-10 h-12 hover:bg-white/90 transition-all duration-300 inline-flex items-center"
                >
                  Book a Meeting
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
