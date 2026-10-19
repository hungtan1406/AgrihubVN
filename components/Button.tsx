import React from 'react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'pill' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full';

  const variants = {
    // Primary: Fresh Leaf Green pill with soft hover
    primary:
      'bg-primary-leaf hover:bg-primary-leafHover text-white shadow-sm hover:shadow-md focus:ring-primary-leaf active:scale-98',
    // Secondary: Deep Forest Green pill
    secondary:
      'bg-primary-850 hover:bg-primary-900 text-white shadow-sm hover:shadow-md focus:ring-primary-850 active:scale-98',
    // Pill: Warm wheat pill
    pill:
      'bg-cream-300 hover:bg-cream-400 text-primary-850 shadow-2xs hover:shadow-sm focus:ring-cream-400',
    // Outline: Deep green border
    outline:
      'border-2 border-primary-850 text-primary-850 hover:bg-primary-850 hover:text-white focus:ring-primary-850 bg-transparent',
    // Ghost: Subtle hover
    ghost:
      'text-primary-850 hover:bg-cream-300/60 focus:ring-primary-leaf bg-transparent',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
