import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 animate-text">
          Building the Future
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl mb-8 leading-relaxed">
          Full-Stack Developer & UI/UX Designer crafting next-generation digital experiences
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-all transform hover:scale-105">
            View Projects
          </button>
          <button className="px-8 py-3 rounded-full border border-cyan-500 text-cyan-500 font-semibold hover:bg-cyan-500/10 transition-all">
            Contact Me
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cyan-400" size={32} />
      </div>
    </section>
  );
}