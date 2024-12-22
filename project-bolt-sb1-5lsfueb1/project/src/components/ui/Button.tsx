import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-md font-semibold transition-all',
        variant === 'primary' && 'bg-green-600 hover:bg-green-700 text-white',
        variant === 'outline' && 'border border-gray-500 hover:border-white text-gray-300 hover:text-white',
        size === 'sm' && 'px-3 py-1 text-sm',
        size === 'md' && 'px-4 py-2',
        size === 'lg' && 'px-6 py-3',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}