import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Testimonials } from "../components/testimonials";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Users, Award, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export function AboutPage() {
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
              About ScholarMind
            </h1>
            <p className="text-xl text-gray-400">
              We're on a mission to make academic research accessible and efficient for everyone
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-400 mb-4">
                At ScholarMind, we believe that academic research shouldn't be limited by the time it takes to manually read and analyze papers. Our AI-powered research assistant empowers students and scientists to uncover insights 5-10x faster.
              </p>
              <p className="text-lg text-gray-400">
                Built by researchers for researchers, ScholarMind AI automates literature reviews, paper summarization, and data extraction—so you can focus on making groundbreaking discoveries and advancing your field.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758270705172-07b53627dfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbGxhYm9yYXRpb24lMjBzdHVkeWluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzM0MDE1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="size-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="size-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">Pushing the boundaries of what's possible with AI in academic research</p>
            </div>
            
            <div className="text-center">
              <div className="size-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="size-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
              <p className="text-gray-400">Building tools that bring researchers together and foster knowledge sharing</p>
            </div>
            
            <div className="text-center">
              <div className="size-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="size-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-gray-400">Committed to delivering the highest quality research tools and support</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

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
