"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Menu,
  X,
  Smartphone,
  TrendingUp,
  Award,
  BookOpen,
  Users,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Github,
  MessageCircle,
  Mail,
} from "lucide-react"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = ["Features", "How it works", "Rewards", "Tech", "Roadmap", "Open Source", "Contact"]

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Kuna</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-900 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold">Try demo</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 hover:text-blue-900 p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-200">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-900 hover:text-blue-900 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </a>
                ))}
                <div className="pt-4">
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold">
                    Try demo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center gap-3 mb-8">
                <Badge variant="secondary" className="bg-neutral-100 text-gray-900">
                  Open Source
                </Badge>
                <Badge variant="secondary" className="bg-neutral-100 text-gray-900">
                  Built for LatAm
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Learn finance and blockchain. Earn micro‑rewards on Stellar.
              </h1>

              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto text-pretty">
                Kuna gamifies learning and issues on‑chain, verifiable credentials for every completed module.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-8">
                  Try demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-900 hover:bg-gray-50 bg-transparent"
                >
                  See how it works
                </Button>
              </div>

              {/* Hero Visual */}
              <div className="relative max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 border border-neutral-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                      <Smartphone className="w-8 h-8 text-yellow-500 mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Mobile Learning</h3>
                      <p className="text-sm text-gray-600">Complete modules on any device</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                      <TrendingUp className="w-8 h-8 text-yellow-500 mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Track Progress</h3>
                      <p className="text-sm text-gray-600">See your learning journey</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                      <Award className="w-8 h-8 text-yellow-500 mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Earn Rewards</h3>
                      <p className="text-sm text-gray-600">Get XLM/USDC for achievements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">Why choose Kuna?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
                We are building the future of financial education with blockchain technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white border-neutral-200">
                <CardHeader>
                  <BookOpen className="w-10 h-10 text-yellow-500 mb-4" />
                  <CardTitle className="text-gray-900">Gamified Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Interactive modules with quizzes, challenges, and progress tracking to keep you engaged.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white border-neutral-200">
                <CardHeader>
                  <Users className="w-10 h-10 text-yellow-500 mb-4" />
                  <CardTitle className="text-gray-900">Built for LatAm</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Content tailored for Latin American markets, regulations, and financial systems.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white border-neutral-200">
                <CardHeader>
                  <Shield className="w-10 h-10 text-yellow-500 mb-4" />
                  <CardTitle className="text-gray-900">Verifiable Credentials</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Blockchain-based certificates that prove your knowledge and cant be faked.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white border-neutral-200">
                <CardHeader>
                  <Zap className="w-10 h-10 text-yellow-500 mb-4" />
                  <CardTitle className="text-gray-900">Micro-Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Earn real cryptocurrency (XLM/USDC) for completing modules and achieving milestones.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">How Kuna works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
                Simple steps to start your financial education journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-gray-900">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sign up & Connect Wallet</h3>
                <p className="text-gray-600">
                  Create your account and connect your Stellar wallet to start earning rewards.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Learning Modules</h3>
                <p className="text-gray-600">
                  Work through interactive lessons on finance, blockchain, and cryptocurrency basics.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Earn Rewards & Credentials</h3>
                <p className="text-gray-600">
                  Get micro-rewards in XLM/USDC and verifiable certificates for your achievements.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold">
                Start Learning Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="rewards" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">Rewards & Impact</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
                See how Kuna is making financial education accessible and rewarding
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">$2.50</div>
                <div className="text-gray-600">Average rewards per completed module</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Learning modules available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Open source and transparent</div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <p className="text-gray-700">
                <strong>Note:</strong> Rewards are distributed in USDC and XLM on the Stellar network. Amounts may vary
                based on module complexity and available funding.
              </p>
            </div>
          </div>
        </section>

        <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
                Built with cutting-edge technology
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
                Powered by Stellar blockchain and modern web technologies
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-neutral-100 rounded-lg p-6 mb-4">
                  <div className="text-2xl font-bold text-gray-900">⭐</div>
                </div>
                <h3 className="font-semibold text-gray-900">Stellar</h3>
                <p className="text-sm text-gray-600">Blockchain network</p>
              </div>
              <div className="text-center">
                <div className="bg-neutral-100 rounded-lg p-6 mb-4">
                  <div className="text-2xl font-bold text-gray-900">🔧</div>
                </div>
                <h3 className="font-semibold text-gray-900">Soroban</h3>
                <p className="text-sm text-gray-600">Smart contracts</p>
              </div>
              <div className="text-center">
                <div className="bg-neutral-100 rounded-lg p-6 mb-4">
                  <div className="text-2xl font-bold text-gray-900">⚛️</div>
                </div>
                <h3 className="font-semibold text-gray-900">React</h3>
                <p className="text-sm text-gray-600">Frontend framework</p>
              </div>
              <div className="text-center">
                <div className="bg-neutral-100 rounded-lg p-6 mb-4">
                  <div className="text-2xl font-bold text-gray-900">🚀</div>
                </div>
                <h3 className="font-semibold text-gray-900">Next.js</h3>
                <p className="text-sm text-gray-600">Full-stack framework</p>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">Development Roadmap</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
                Our journey to revolutionize financial education
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 rounded-full p-2 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Q1 2025 - MVP Launch ✅</h3>
                  <p className="text-gray-600">
                    Basic learning modules, Stellar wallet integration, and reward distribution system.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Q2 2026 - Enhanced Features 🚧</h3>
                  <p className="text-gray-600">Advanced gamification, progress tracking, and community features.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-300 rounded-full p-2 mt-1">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Q3 2026 - Mobile App</h3>
                  <p className="text-gray-600">Native mobile applications for iOS and Android platforms.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-300 rounded-full p-2 mt-1">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Q4 2026 - Partnerships</h3>
                  <p className="text-gray-600">
                    Integration with educational institutions and financial organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="open-source" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
                Open Source & Community
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
                Built by the community, for the community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Open Source?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Transparency in educational content and reward distribution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Community-driven development and content creation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Auditable smart contracts and security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Free access to financial education for everyone</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Get Involved</h3>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-300 text-gray-900 hover:bg-gray-50 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-300 text-gray-900 hover:bg-gray-50 bg-transparent"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Join Discord
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-300 text-gray-900 hover:bg-gray-50 bg-transparent"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contribute Content
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 text-pretty">Everything you need to know about Kuna</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-neutral-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-gray-900 hover:no-underline">
                  What is Kuna and how does it work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Kuna is a gamified learning platform that teaches financial literacy and blockchain concepts. Users
                  complete interactive modules and earn cryptocurrency rewards (XLM/USDC) on the Stellar network while
                  receiving verifiable credentials for their achievements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border border-neutral-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-gray-900 hover:no-underline">
                  How much can I earn by completing modules?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Rewards vary by module complexity, but users typically earn $1-5 worth of XLM or USDC per completed
                  module. Bonus rewards are available for streaks, perfect scores, and community participation. All
                  rewards are distributed automatically via smart contracts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border border-neutral-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-gray-900 hover:no-underline">
                  Do I need a Stellar wallet to use Kuna?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, you will need a Stellar wallet to receive rewards and credentials. We support popular wallets like
                  Freighter, Albedo, and WalletConnect. If you dont have one, we provide step-by-step guides to help
                  you set up a wallet safely.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border border-neutral-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-gray-900 hover:no-underline">
                  Are the credentials really verifiable?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! All credentials are issued as NFTs on the Stellar blockchain, making them permanently verifiable
                  and tamper-proof. Employers and institutions can verify your achievements independently without
                  relying on Kunas servers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border border-neutral-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-gray-900 hover:no-underline">
                  Is Kuna really free to use?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, Kuna is completely free to use. We are funded through grants and partnerships with organizations
                  that believe in financial education accessibility. Being open source, you can even verify our code and
                  contribute to the platforms development.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white border border-neutral-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-gray-900 hover:no-underline">
                  What topics does Kuna cover?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Our curriculum covers personal finance basics, cryptocurrency fundamentals, blockchain technology,
                  DeFi concepts, investment strategies, and financial regulations specific to Latin American markets.
                  New modules are added regularly based on community feedback.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Kuna</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Democratizing financial education through blockchain technology. Learn, earn, and grow with the future
                of finance.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Discord
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#rewards" className="hover:text-white transition-colors">
                    Rewards
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="hover:text-white transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#open-source" className="hover:text-white transition-colors">
                    Open Source
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kuna. Open source and built for the community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
