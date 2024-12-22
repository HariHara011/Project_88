import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className, ...props }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-200 mb-2">
        {label}
      </label>
      <input
        className={cn(
          "w-full px-4 py-2 bg-[#0d1117] border border-[#21262d] rounded-md",
          "text-white placeholder-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          "transition-colors",
          className
        )}
        {...props}
      />
    </div>
  );
}