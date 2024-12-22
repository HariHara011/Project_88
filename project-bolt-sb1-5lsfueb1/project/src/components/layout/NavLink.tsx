import React from 'react';
import { cn } from '../../utils/cn';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export function NavLink({ href, children, mobile }: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'text-gray-300 hover:text-white transition-colors',
        mobile ? 'block px-3 py-2 text-base' : 'px-3 py-2 text-sm font-medium'
      )}
    >
      {children}
    </a>
  );
}