import { Card } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Professor of Neuroscience, MIT",
    content: "ScholarMind's AI analysis cuts my literature review time by 80%. The accuracy is remarkable—I can cite the AI summaries directly in my papers.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "PhD Candidate, Stanford",
    content: "This AI research assistant is invaluable for my doctoral research. Paper summarization, citation generation, and literature review automation save me 20+ hours per week.",
    rating: 5,
  },
  {
    name: "Prof. Elena Rossi",
    role: "Research Lead, Oxford University",
    content: "Our research team can now analyze 100+ papers in a week instead of a month. The AI insights help us identify research gaps and funding opportunities faster.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Researchers Worldwide
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of academics who've accelerated their research with ScholarMind
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-b from-white/5 to-black border-white/10 p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="size-5 fill-purple-500 text-purple-500" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              
              <div>
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
