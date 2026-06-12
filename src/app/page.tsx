'use client'

import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import DemoSection from '@/components/sections/DemoSection'
import MetricsSection from '@/components/sections/MetricsSection'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import ProcessSection from '@/components/sections/ProcessSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import InsightsSection from '@/components/sections/InsightsSection'
import FAQSection from '@/components/sections/FAQSection'
import NewsletterFooter from '@/components/sections/NewsletterFooter'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <DemoSection />
        <MetricsSection />
        <WhyChooseSection />
        <ProcessSection />
        <TestimonialsSection />
        <InsightsSection />
        <FAQSection />
      </main>
      <NewsletterFooter />
    </div>
  )
}
