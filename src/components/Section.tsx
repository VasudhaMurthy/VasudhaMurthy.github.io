import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 my-20 mx-4 md:mx-8 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.24)] transition-shadow ${className}`}
    >
      {children}
    </section>
  );
}