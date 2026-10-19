import React from 'react';

export interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
  as: HeadingTag = 'h2',
}: SectionTitleProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-8 sm:mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3 bg-cream-200/80 border border-cream-300 text-primary-leaf text-xs font-bold uppercase tracking-wider">
          <span>🌿</span>
          <span className={light ? 'text-cream-200' : 'text-primary-850'}>{badge}</span>
        </div>
      )}
      <HeadingTag
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-balance leading-tight ${
          light ? 'text-white' : 'text-primary-850'
        }`}
      >
        {title}
      </HeadingTag>
      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg leading-relaxed ${
            light ? 'text-cream-200/80' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
