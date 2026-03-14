'use client'

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, FileText, Zap, BookOpen, BarChart3, Users, Settings, Check, MessageSquare, ChevronDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import { AuthModal } from "@/components/auth-modal";
import { useState, useEffect } from "react";

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [timeSaved, setTimeSaved] = useState(0);
  const [papersAvailable, setPapersAvailable] = useState(0);
  const [accuracyRate, setAccuracyRate] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  useEffect(() => {
    // Time Saved counter (0 to 90)
    const timer1 = setTimeout(() => {
      let count = 0;
      const interval1 = setInterval(() => {
        if (count < 90) {
          count += Math.ceil(90 / 60);
          setTimeSaved(Math.min(count, 90));
        } else {
          clearInterval(interval1);
        }
      }, 30);
    }, 200);

    // Papers Available counter (0 to 200M)
    const timer2 = setTimeout(() => {
      let count = 0;
      const interval2 = setInterval(() => {
        if (count < 200000000) {
          count += Math.ceil(200000000 / 60);
          setPapersAvailable(Math.min(count, 200000000));
        } else {
          clearInterval(interval2);
        }
      }, 30);
    }, 200);

    // Accuracy Rate counter (0 to 99.9)
    const timer3 = setTimeout(() => {
      let count = 0;
      const interval3 = setInterval(() => {
        if (count < 999) {
          count += Math.ceil(999 / 60);
          setAccuracyRate(Math.min(count / 10, 99.9));
        } else {
          clearInterval(interval3);
        }
      }, 30);
    }, 200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black py-20 md:py-32">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Research Assistant for <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Academic Research</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              ScholarMind AI is an AI-powered research assistant that helps students and scientists analyze academic papers, generate literature reviews, and discover research insights faster.
            </p>
            
            <div className="mb-12">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 transition-all" onClick={() => setAuthModalOpen(true)}>
                Get Started Free
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-1">{timeSaved}%</div>
                <div className="text-sm text-gray-400">Time Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  {papersAvailable > 0 ? (papersAvailable / 1000000).toFixed(0) : 0}M+
                </div>
                <div className="text-sm text-gray-400">Papers Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-1">24/7</div>
                <div className="text-sm text-gray-400">Autonomous Operation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-1">{accuracyRate.toFixed(1)}%</div>
                <div className="text-sm text-gray-400">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Complete Research Workflow */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">The Complete Research Workflow</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { num: 1, title: "Paper Summarization", desc: "AI-powered summaries of key findings, methodology, and conclusions from 200M+ research papers" },
                { num: 2, title: "Literature Review Generation", desc: "Automatically generate comprehensive literature reviews organized by theme and research topic" },
                { num: 3, title: "Research Mapping", desc: "Discover connections between papers and identify research gaps in your field" },
                { num: 4, title: "Citation Generation", desc: "Generate citations in APA, MLA, Chicago, and all major academic formats" },
                { num: 5, title: "Data Extraction", desc: "Automatically extract tables, findings, and methodology from research papers" },
              ].map((item) => (
                <div key={item.num} className="flex gap-3 items-start p-3 rounded-lg border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-300 font-bold text-sm">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our AI Features */}
      <section className="py-20 bg-gradient-to-b from-black via-purple-950/5 to-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Powerful Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Brain, title: "AI Paper Analysis", desc: "Advanced machine learning understands research methodology, findings, and implications" },
              { icon: FileText, title: "Auto Summarization", desc: "Generate concise, accurate summaries of academic papers in seconds" },
              { icon: Zap, title: "Lightning Fast", desc: "Analyze multiple papers in seconds instead of hours of manual reading" },
              { icon: BookOpen, title: "Literature Review Assistant", desc: "Organize papers by theme and automatically generate review outlines" },
              { icon: BarChart3, title: "Research Insights", desc: "Identify key findings, contradictions, and research trends across papers" },
              { icon: Users, title: "Team Collaboration", desc: "Share research findings and collaborate with colleagues in real-time" },
              { icon: Settings, title: "Academic Integration", desc: "Connect with your favorite academic tools and databases" },
              { icon: Check, title: "Citation Management", desc: "Automatically generate and organize citations in any academic format" },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-purple-500/5 border border-white/5 rounded-lg hover:border-purple-500/30 transition-colors">
                <feature.icon className="size-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ScholarMind */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose ScholarMind</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "AI Research Copilot",
                desc: "Your AI-powered companion for academic research. Analyze papers, generate reviews, and discover insights automatically."
              },
              {
                title: "Save Weeks of Research",
                desc: "Cut literature review time by 80%. Work that takes weeks traditionally can now be done in days with AI assistance."
              },
              {
                title: "Accurate & Reliable",
                desc: "Built by researchers for researchers. Our AI understands academic methodology and produces accurate, citable research."
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Check className="size-5 text-purple-400" />
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-black via-purple-950/5 to-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: 1, title: "Import", desc: "Upload or link to academic papers and research databases" },
              { step: 2, title: "Analyze", desc: "AI instantly analyzes papers, extracts key findings, and identifies connections" },
              { step: 3, title: "Generate", desc: "Create literature reviews, summaries, and citations with one click" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-300">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything You Need */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Everything You Need</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "AI-powered paper analysis",
                "200M+ research papers access",
                "Multi-format citation generation",
                "Real-time collaboration",
                "Advanced searching & filtering",
                "Data export & backup",
                "Automated literature reviews",
                "Research insights & analytics",
                "Custom AI training",
                "API access",
                "Priority support",
                "Enterprise SSO & SAML",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3">
                  <Check className="size-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Loved by Researchers</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { quote: "ScholarMind decreased my literature review time from 6 months to 2 weeks. The AI analysis is remarkably accurate and saves countless hours.", author: "Dr. Sarah Chen", title: "PhD Researcher, Oxford" },
              { quote: "As a researcher, I can now focus on insights instead of data collection. ScholarMind handles the heavy lifting beautifully.", author: "Prof. Michael Johnson", title: "Professor, MIT" },
              { quote: "Our research team's productivity increased 5x. The AI analysis is reliable enough to cite directly in our papers.", author: "Dr. Emily Watson", title: "Research Lead, Cambridge" },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-6 bg-purple-500/5 border border-white/5 rounded-lg">
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-black via-purple-950/5 to-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-3">
            {[
              { q: "How many papers can I analyze?", a: "You have access to our entire database of 200M+ research papers. Analyze as many as your subscription allows." },
              { q: "Is my research secure?", a: "Yes, we're SOC 2 Type II certified. Your data is encrypted and never shared without your permission." },
              { q: "Can I export my research?", a: "Absolutely. Export in any format including PDF, BibTeX, and more." },
              { q: "Do you offer API access?", a: "Yes, our Enterprise plan includes full API access for custom integrations." },
            ].map((faq, idx) => (
              <div key={idx} className="bg-purple-500/5 border border-white/5 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-purple-500/10 transition-colors text-left"
                >
                  <h3 className="font-semibold text-white flex items-center gap-2">
                    <MessageSquare className="size-5 text-purple-400" />
                    {faq.q}
                  </h3>
                  <ChevronDown 
                    className={`size-5 text-purple-400 transition-transform flex-shrink-0 ${
                      expandedFAQ === idx ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 pb-6 pt-0 border-t border-white/5">
                    <p className="text-gray-400">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-black via-purple-950/5 to-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Get in Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">📍 Address</h3>
                  <p className="text-gray-400">42 Chancery Lane</p>
                  <p className="text-gray-400">London, WC2A 1JB</p>
                  <p className="text-gray-400">United Kingdom</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">📞 Phone</h3>
                  <p className="text-gray-400">+44 (0) 20 7490 8376</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">✉️ Email</h3>
                  <p className="text-gray-400">support@scholarmind.dev</p>
                  <p className="text-gray-400">founder@scholarmind.dev</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">🕐 Hours</h3>
                  <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">Saturday - Sunday: Closed</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/20 border border-purple-500/20 rounded-lg p-8 h-full">
                <h3 className="text-xl font-semibold text-white mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Your message..."></textarea>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Research?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of researchers already working 10x faster with ScholarMind.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6" onClick={() => setAuthModalOpen(true)}>
              Start Free Trial
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <p className="text-sm text-gray-500 mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 transition-all z-40 opacity-100"
          aria-label="Scroll to top"
        >
          <ArrowUp className="size-6" />
        </button>
      )}
    </div>
  );
}
/ /   r e f r e s h  
 