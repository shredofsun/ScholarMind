'use client'

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Features } from "@/components/features";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUp } from "lucide-react";
import { AuthModal } from "@/components/auth-modal";
import { useState, useEffect } from "react";

export default function FeaturesPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

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
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-purple-950/20 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Powerful Features for Modern Research
            </h1>
            <p className="text-xl text-gray-400">
              Advanced AI capabilities to analyze papers, generate reviews, and accelerate your academic research
            </p>
          </div>
        </div>
      </section>

      <Features />

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience All Features Free
            </h2>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 transition-all" onClick={() => setAuthModalOpen(true)}>
              Start Your Free Trial
              <ArrowRight className="ml-2 size-5" />
            </Button>
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
