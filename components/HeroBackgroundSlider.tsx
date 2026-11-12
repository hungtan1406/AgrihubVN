'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export interface HeroSlide {
  src: string;
  alt: string;
}

interface HeroBackgroundSliderProps {
  slides: HeroSlide[];
  intervalMs?: number;
  controlsLabel?: string;
  slideLabelPrefix?: string;
}

/**
 * Full-bleed background crossfade slider for the homepage hero section.
 * Cycles background images automatically while keeping foreground hero copy static,
 * honoring prefers-reduced-motion and offering accessible dot navigation.
 */
export default function HeroBackgroundSlider({
  slides,
  intervalMs = 5000,
  controlsLabel = 'Hero background slides',
  slideLabelPrefix = 'Slide',
}: HeroBackgroundSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (slides.length <= 1 || isPaused || prefersReducedMotion) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);

    return () => window.clearTimeout(timer);
  }, [activeIndex, intervalMs, isPaused, prefersReducedMotion, slides.length]);

  if (slides.length === 0) {
    return null;
  }

  return (
    <>
      {/* Full-width Background Images & Gradient Overlays for WCAG AA Contrast */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-primary-950">
        {slides.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={slide.src}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                loading={idx === 0 ? undefined : 'eager'}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          );
        })}

        {/* Directional gradients to maintain vibrant visuals and high text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      </div>

      {/* Dot Indicators (bottom-center) */}
      {slides.length > 1 && (
        <div
          role="group"
          aria-label={controlsLabel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/25 backdrop-blur-sm border border-white/15"
        >
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`${slideLabelPrefix} ${idx + 1}/${slides.length}: ${slide.alt}`}
                aria-pressed={isActive}
                className="p-1.5 flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
              >
                <span
                  aria-hidden="true"
                  className={`block h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                    isActive
                      ? 'w-6 bg-accent-gold'
                      : 'w-2 bg-white/55 hover:bg-white/85'
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
