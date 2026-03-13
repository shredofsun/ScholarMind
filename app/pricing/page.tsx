'use client'

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Pricing } from "@/components/pricing";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function PricingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

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
      <Header />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-purple-950/20 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-400">
              Choose the plan that fits your research needs. Start free and upgrade as your research grows.
            </p>
          </div>
        </div>
      </section>

      <Pricing />

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
