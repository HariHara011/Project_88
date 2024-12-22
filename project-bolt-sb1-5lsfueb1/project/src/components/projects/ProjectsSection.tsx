import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';

export function ProjectsSection() {
  return (
    <section className="py-8 px-4" id="projects">
      <div className="max-w-4xl mx-auto">
        <div className="border border-[#21262d] rounded-md bg-[#0d1117]">
          <div className="border-b border-[#21262d] p-4">
            <h2 className="text-xl font-semibold text-white">Python Projects</h2>
          </div>
          <div className="p-4 space-y-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}