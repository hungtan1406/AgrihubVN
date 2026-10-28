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
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3.5 text-xs font-semibold ${
            light
              ? 'bg-white/10 text-cream-100 border border-white/20'
              : 'bg-primary-50 text-primary-850 border border-primary-100'
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              light ? 'bg-accent-gold' : 'bg-primary-leaf'
            }`}
            aria-hidden="true"
          />
          <span>{badge}</span>
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
