import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900/50 via-purple-800/30 to-pink-900/50 border border-purple-500/30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
          
          <div className="relative grid lg:grid-cols-2 gap-8 p-12 md:p-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Transform Your Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 50,000+ researchers who are already working smarter with ScholarMind. Start your free 14-day trial today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-6">
                  Start Free Trial
                  <ArrowRight className="ml-2 size-5" />
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                  Schedule Demo
                </Button>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                No credit card required • Cancel anytime • 14-day free trial
              </p>
            </div>
            
            <div className="relative hidden lg:block">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758270705172-07b53627dfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbGxhYm9yYXRpb24lMjBzdHVkeWluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzM0MDE1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students collaborating"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
