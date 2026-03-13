import { Upload, Scan, Lightbulb, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    icon: Upload,
    title: "Add Research Papers",
    description: "Upload PDFs, search our 200M+ paper database, or import from academic repositories.",
  },
  {
    icon: Scan,
    title: "AI Analysis Begins",
    description: "Our AI instantly reads, analyzes methodology, extracts findings, and identifies key insights.",
  },
  {
    icon: Lightbulb,
    title: "Get Summaries & Connections",
    description: "Receive concise summaries, discover related papers, and map research relationships automatically.",
  },
  {
    icon: Download,
    title: "Generate & Export",
    description: "Create literature reviews, generate citations in any format, and export to your writing tools.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How ScholarMind Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From paper to insight in four simple steps
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="size-12 bg-purple-500/10 border border-purple-500/30 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-purple-400">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="size-5 text-purple-400" />
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-3xl opacity-20"></div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMG5ldHdvcmt8ZW58MXx8fHwxNzczMzEzMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AI Technology"
              className="relative rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
