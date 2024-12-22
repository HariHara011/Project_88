import React from 'react';
import { Star, GitFork, Circle } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  languageColor: string;
  lastUpdated: string;
}

export function ProjectCard({
  title,
  description,
  language,
  stars,
  forks,
  languageColor,
  lastUpdated,
}: ProjectCardProps) {
  return (
    <div className="border border-[#21262d] rounded-md p-4 hover:border-gray-500 transition-colors">
      <h3 className="text-blue-400 text-lg font-semibold hover:underline cursor-pointer mb-2">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <Circle className="h-3 w-3" fill={languageColor} stroke="none" />
          <span>{language}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4" />
          <span>{stars}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork className="h-4 w-4" />
          <span>{forks}</span>
        </div>
        <span>Updated {lastUpdated}</span>
      </div>
    </div>
  );
}