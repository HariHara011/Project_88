import React from 'react';
import { Button } from '../ui/Button';
import { Github, Star, GitFork } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-[#21262d]"
          />
          <div>
            <h1 className="text-2xl font-semibold text-white mb-1">John Doe</h1>
            <p className="text-gray-400">Full-Stack Developer & Open Source Contributor</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button>
            <Github className="mr-2 h-4 w-4" />
            Follow
          </Button>
          <Button variant="outline">
            <Star className="mr-2 h-4 w-4" />
            Sponsor
          </Button>
          <Button variant="outline">
            <GitFork className="mr-2 h-4 w-4" />
            Fork
          </Button>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Building open-source software and contributing to the developer community. 
            Specialized in React, Node.js, and cloud architecture.
          </p>
        </div>
      </div>
    </section>
  );
}