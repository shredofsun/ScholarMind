import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import { AuthModal } from "./auth-modal";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for students exploring AI research",
    features: [
      "10 papers per month",
      "AI paper summaries",
      "Basic citation generation",
      "Personal research library",
      "Community support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For researchers and PhD students",
    features: [
      "Unlimited paper analysis",
      "Advanced AI insights",
      "All academic citation formats",
      "Research collaboration (up to 5)",
      "Literature review generation",
      "Priority email support",
      "Export & integrations",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Institution",
    price: "Custom",
    period: "pricing",
    description: "For universities and research labs",
    features: [
      "Everything in Pro",
      "Unlimited research team members",
      "SSO & SAML authentication",
      "Admin analytics dashboard",
      "Dedicated research support",
      "API access",
      "Custom AI training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const compareFeatures = [
  { feature: "Papers per month", free: "10", pro: "Unlimited", institution: "Unlimited" },
  { feature: "AI paper summaries", free: "Basic", pro: "Advanced", institution: "Advanced" },
  { feature: "Citation formats", free: "2", pro: "All", institution: "All" },
  { feature: "Literature reviews", free: "No", pro: "Yes", institution: "Yes" },
  { feature: "Research team size", free: "Just you", pro: "Up to 5", institution: "Unlimited" },
  { feature: "Priority support", free: "No", pro: "Yes", institution: "Yes" },
  { feature: "API & integrations", free: "No", pro: "Yes", institution: "Yes" },
  { feature: "SSO & SAML", free: "No", pro: "No", institution: "Yes" },
];

const reviews = [
  {
    author: "Dr. Sarah Chen",
    title: "PhD Researcher, Stanford",
    content: "ScholarMind cut my literature review time by 80%. The AI summaries are incredibly accurate and the citation features are a lifesaver. Highly recommended!",
    rating: 5,
  },
  {
    author: "Prof. Michael Johnson",
    title: "MIT Professor",
    content: "The best investment for our research team. We've increased our research output by 3x. The collaboration features work seamlessly and the support team is always helpful.",
    rating: 5,
  },
  {
    author: "Dr. Emily Watson",
    title: "Cambridge University",
    content: "Finally, a tool that understands academic research. The data extraction is incredibly accurate and saves us countless hours per project. Worth every penny.",
    rating: 5,
  },
];

export function Pricing() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <>
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      <section id="pricing" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-purple-900/50 to-purple-950/30 border-purple-500/50 shadow-xl shadow-purple-500/20 relative' 
                  : 'bg-gradient-to-b from-white/5 to-black border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/ {plan.period}</span>
                </div>
              </div>
              
              <Button 
                onClick={() => setAuthModalOpen(true)}
                className={`w-full mb-6 ${
                  plan.popular 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                {plan.cta}
              </Button>
              
              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="size-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Compare Plans Chart */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Detailed Comparison
          </h3>
          <div className="border border-white/10 rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-purple-950/30">
              <div className="p-4 font-semibold text-white border-b border-r border-white/10">Feature</div>
              <div className="p-4 font-semibold text-white text-center border-b border-r border-white/10">Free</div>
              <div className="p-4 font-semibold text-white text-center border-b border-r border-white/10">Pro</div>
              <div className="p-4 font-semibold text-white text-center border-b border-white/10">Institution</div>
            </div>
            {compareFeatures.map((item, idx) => (
              <div key={idx} className="grid grid-cols-4 border-b border-white/5">
                <div className="p-4 text-gray-300 border-r border-white/5">{item.feature}</div>
                <div className="p-4 text-center border-r border-white/5">
                  {item.free === "No" ? <span className="text-gray-500">No</span> : <span className="text-gray-300">{item.free}</span>}
                </div>
                <div className="p-4 text-center border-r border-white/5">
                  {item.pro === "No" ? <span className="text-gray-500">No</span> : <span className="text-purple-300">{item.pro}</span>}
                </div>
                <div className="p-4 text-center">
                  {item.institution === "No" ? <span className="text-gray-500">No</span> : <span className="text-purple-300">{item.institution}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-6 bg-gradient-to-b from-purple-900/30 to-purple-950/20 border-purple-500/30">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{review.content}"</p>
                <div>
                  <p className="font-semibold text-white">{review.author}</p>
                  <p className="text-sm text-gray-400">{review.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
