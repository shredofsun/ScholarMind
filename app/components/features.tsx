import { Brain, FileSearch, Sparkles, Zap, BookMarked, Users } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Brain,
    title: "AI Paper Analysis",
    description: "Advanced machine learning understands research methodology, findings, and implications to extract key insights automatically.",
  },
  {
    icon: FileSearch,
    title: "Literature Review Generation",
    description: "Automatically organize papers and generate comprehensive literature review outlines by theme and research topic.",
  },
  {
    icon: Sparkles,
    title: "Academic Citation Manager",
    description: "Generate and organize citations in APA, MLA, Chicago, and all major academic formats instantly.",
  },
  {
    icon: Zap,
    title: "Rapid Paper Summarization",
    description: "Convert lengthy research papers into concise, accurate summaries in seconds - retaining all critical information.",
  },
  {
    icon: BookMarked,
    title: "Research Knowledge Base",
    description: "Build your personal research repository with AI-extracted data, findings, and connections between papers.",
  },
  {
    icon: Users,
    title: "Team Research Collaboration",
    description: "Share analyses, annotations, and research findings with colleagues for collaborative academic projects.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your AI-Powered Research Assistant
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive tools to eliminate tedious research tasks and accelerate academic discovery
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-to-b from-purple-950/30 to-black border-white/10 p-8 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="size-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="size-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
