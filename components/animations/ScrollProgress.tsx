'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;
          setProgress(totalScroll > 0 ? currentScroll / totalScroll : 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        transform: `scaleX(${progress})`,
        transformOrigin: 'left',
      }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-leaf via-accent-gold to-primary-leaf z-[100] pointer-events-none shadow-xs transition-transform duration-75 ease-out will-change-transform"
      aria-hidden="true"
    />
  );
}
