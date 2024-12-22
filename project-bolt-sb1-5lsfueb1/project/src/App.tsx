import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ContactSection } from './components/contact/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;