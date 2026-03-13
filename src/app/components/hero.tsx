import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <span className="size-2 bg-purple-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-purple-300">AI-Powered Research Assistant</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Research</span> Journey
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              ScholarMind uses advanced AI to help you discover, analyze, and cite academic papers faster than ever. Join thousands of researchers accelerating their work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6">
                <Play className="mr-2 size-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start">
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-400">Active Researchers</div>
              </div>
              <div className="h-12 w-px bg-white/10"></div>
              <div>
                <div className="text-3xl font-bold text-white">10M+</div>
                <div className="text-sm text-gray-400">Papers Analyzed</div>
              </div>
              <div className="h-12 w-px bg-white/10"></div>
              <div>
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-gray-400">User Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-3xl opacity-20"></div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1765969934461-2f945e5aacb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHJlc2VhcmNoJTIwbGlicmFyeSUyMHN0dWR5fGVufDF8fHx8MTc3MzQwMTUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Academic Research"
              className="relative rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
