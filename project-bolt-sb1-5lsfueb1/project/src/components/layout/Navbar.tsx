import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { NavLink } from './NavLink';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0d1117] border-b border-[#21262d]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Github className="text-white" size={24} />
            <div className="hidden md:flex items-center space-x-4">
              <NavLink href="#overview">Overview</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contributions">Contributions</NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
            <Button size="sm">
              <Github className="mr-2 h-4 w-4" />
              Follow
            </Button>
          </div>

          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-[#21262d]">
          <div className="px-2 py-3 space-y-1">
            <NavLink href="#overview" mobile>Overview</NavLink>
            <NavLink href="#projects" mobile>Projects</NavLink>
            <NavLink href="#contributions" mobile>Contributions</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}