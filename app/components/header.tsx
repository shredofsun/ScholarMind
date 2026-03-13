import { Button } from "./ui/button";
import { BookOpen, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AuthModal } from "./auth-modal";

export function Header() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <>
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
            <BookOpen className="size-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SCHOLAR</span>
            <span className="text-xs font-semibold text-purple-400 -mt-1">MIND</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
            How it Works
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button onClick={() => setAuthModalOpen(true)} variant="ghost" className="hidden md:inline-flex text-gray-300 hover:text-white">
            Sign In
          </Button>
          <Button onClick={() => setAuthModalOpen(true)} className="bg-purple-600 hover:bg-purple-700 text-white">
            Get Started Free
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-gray-300">
            <Menu className="size-5" />
          </Button>
        </div>
      </div>
    </header>
    </>
  );
}