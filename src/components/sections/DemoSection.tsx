'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Infinity, Shield, Zap, Layers } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const features = [
  { icon: Infinity, title: 'Infinite Scale', description: 'Scale from startup to enterprise with zero downtime.' },
  { icon: Zap, title: 'Autonomous Flow', description: 'AI-driven processes that learn and optimize.' },
  { icon: Shield, title: 'End-to-End Security', description: 'SOC 2 compliant, enterprise-grade encryption.' },
  { icon: Layers, title: 'Production-Ready', description: 'Pre-built integrations with 20+ platforms.' },
]

const chatMessages = [
  { role: 'bot' as const, message: 'Welcome to jadeglobal.site. How can we accelerate your digital transformation today?' },
]

export default function DemoSection() {
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState(chatMessages)

  const handleSend = () => {
    if (!inputValue.trim()) return
    setMessages((prev) => [
      ...prev,
      { role: 'user' as const, message: inputValue },
      { role: 'bot' as const, message: 'Thank you for your inquiry. Our team of certified consultants will prepare a personalized assessment for your digital transformation needs.' },
    ])
    setInputValue('')
  }

  return (
    <section id="about" className="relative py-32 sm:py-44 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/[0.006] rounded-full blur-[200px]" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
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
              Experience
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-ultra-tight leading-[0.95]">
            Intelligent
            <br />
            <span className="gradient-text">consulting</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <Tabs defaultValue="ai-assistant" className="w-full">
              <TabsList className="bg-transparent border-b border-white/[0.04] rounded-none p-0 h-auto w-fit mb-0 gap-0">
                <TabsTrigger
                  value="ai-assistant"
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b data-[state=active]:border-white/20 data-[state=active]:shadow-none rounded-none px-6 py-3.5 text-[10px] tracking-[0.2em] uppercase text-white/20 data-[state=active]:text-white/70 font-medium border-b-2 border-transparent transition-all duration-500"
                >
                  AI Assistant
                </TabsTrigger>
                <TabsTrigger
                  value="live-chat"
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b data-[state=active]:border-white/20 data-[state=active]:shadow-none rounded-none px-6 py-3.5 text-[10px] tracking-[0.2em] uppercase text-white/20 data-[state=active]:text-white/70 font-medium border-b-2 border-transparent transition-all duration-500"
                >
                  Live Chat
                </TabsTrigger>
              </TabsList>

              <TabsContent value="ai-assistant" className="mt-0">
                <div className="border border-white/[0.04] bg-[#060606] overflow-hidden">
                  {/* Header bar */}
                  <div className="px-6 py-3 border-b border-white/[0.03] flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-white/[0.06]" />
                    <div className="w-2 h-2 rounded-full bg-white/[0.03]" />
                    <span className="ml-3 text-[9px] font-[family-name:var(--font-space-mono)] text-white/30">jadeglobal.site-ai</span>
                  </div>

                  {/* Messages */}
                  <div className="p-6 min-h-[240px] max-h-[320px] overflow-y-auto space-y-5">
                    {messages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] px-5 py-3.5 text-sm leading-[1.7] font-light ${
                            msg.role === 'user'
                              ? 'bg-white/[0.04] text-white/60 border border-white/[0.04]'
                              : 'bg-transparent text-white/45'
                          }`}
                        >
                          {msg.message}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="border-t border-white/[0.03] p-4">
                    <div className="flex gap-3">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask about our services..."
                        className="flex-1 bg-transparent border-white/[0.04] text-white/70 placeholder:text-white/[0.08] rounded-none h-11 font-light text-sm focus:ring-0 focus:border-white/10 transition-colors duration-300"
                      />
                      <Button
                        onClick={handleSend}
                        className="btn-shine bg-white text-black rounded-none h-11 px-5 hover:bg-white/90 transition-all duration-300"
                        size="icon"
                      >
                        <Send className="size-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="live-chat" className="mt-0">
                <div className="border border-white/[0.04] bg-[#060606] overflow-hidden">
                  <div className="px-6 py-3 border-b border-white/[0.03] flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-white/[0.06]" />
                    <div className="w-2 h-2 rounded-full bg-white/[0.03]" />
                    <span className="ml-3 text-[9px] font-[family-name:var(--font-space-mono)] text-white/30">jadeglobal.site-support</span>
                  </div>
                  <div className="p-8 min-h-[240px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative w-16 h-16 mx-auto mb-5">
                        <div className="absolute inset-0 border border-white/[0.06] rounded-full" />
                        <div className="absolute inset-3 border border-white/[0.04] rounded-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse-white" />
                        </div>
                      </div>
                      <p className="text-white/40 text-sm font-light mb-1">Connect with our team</p>
                      <p className="text-[10px] text-white/30 font-[family-name:var(--font-space-mono)]">Mon-Fri, 9AM-6PM PST</p>
                    </div>
                  </div>
                  <div className="border-t border-white/[0.03] p-4">
                    <div className="flex gap-3">
                      <Input
                        placeholder="Type your message..."
                        className="flex-1 bg-transparent border-white/[0.04] text-white/70 placeholder:text-white/[0.08] rounded-none h-11 font-light text-sm focus:ring-0 focus:border-white/10"
                      />
                      <Button className="btn-shine bg-white text-black rounded-none h-11 px-5 hover:bg-white/90 transition-all duration-300" size="icon">
                        <Send className="size-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Feature Cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group border border-white/[0.03] bg-[#060606] p-6 transition-all duration-700 hover:border-white/[0.08] hover:bg-[#080808] card-lift"
                >
                  <Icon className="size-4 text-white/25 mb-5 group-hover:text-white/45 transition-colors duration-500" />
                  <h3 className="text-[11px] font-medium text-white/55 mb-2 tracking-[0.1em] uppercase">{feature.title}</h3>
                  <p className="text-[10px] text-white/30 leading-[1.7] font-light">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
