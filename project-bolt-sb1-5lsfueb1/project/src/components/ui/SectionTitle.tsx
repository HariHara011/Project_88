import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}