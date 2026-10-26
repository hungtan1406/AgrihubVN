'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Locale, locales, languageNames } from '@/lib/i18n';

interface LanguageSelectProps {
  currentLang: Locale;
  className?: string;
  isMobile?: boolean;
}

// Crisp inline SVGs for flags (zero dependencies, instant rendering)
function FlagVietnam() {
  return (
    <svg className="w-5 h-3.5 rounded-xs border border-black/10 shrink-0" viewBox="0 0 30 20" fill="none">
      <rect width="30" height="20" fill="#DA251D" />
      <polygon
        points="15,4 17.35,11.23 23.56,6.76 19.72,13.24 22.07,20.47 15,16 7.93,20.47 10.28,13.24 6.44,6.76 12.65,11.23"
        fill="#FFFF00"
        transform="scale(0.7) translate(6.4, 2)"
      />
    </svg>
  );
}

function FlagEnglish() {
  return (
    <svg className="w-5 h-3.5 rounded-xs border border-black/10 shrink-0" viewBox="0 0 60 30" fill="none">
      <clipPath id="uk-clip">
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFF" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#FFF" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function FlagChina() {
  return (
    <svg className="w-5 h-3.5 rounded-xs border border-black/10 shrink-0" viewBox="0 0 30 20" fill="none">
      <rect width="30" height="20" fill="#DE2910" />
      <polygon points="5,2 6.5,6.5 2,3.8 8,3.8 3.5,6.5" fill="#FFDE00" transform="scale(0.8) translate(1,1)" />
      <circle cx="10" cy="3" r="0.7" fill="#FFDE00" />
      <circle cx="12" cy="5" r="0.7" fill="#FFDE00" />
      <circle cx="12" cy="8" r="0.7" fill="#FFDE00" />
      <circle cx="10" cy="10" r="0.7" fill="#FFDE00" />
    </svg>
  );
}


const flagComponents: Record<Locale, React.ReactNode> = {
  vi: <FlagVietnam />,
  en: <FlagEnglish />,
  zh: <FlagChina />,
};

const dropdownTitles: Record<Locale, string> = {
  vi: 'Chọn ngôn ngữ',
  en: 'Select Language',
  zh: '选择语言',
};

export default function LanguageSelect({
  currentLang,
  className = '',
  isMobile = false,
}: LanguageSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLanguage = (targetLang: Locale) => {
    setIsOpen(false);
    if (!pathname) {
      router.push(`/${targetLang}`);
      return;
    }
    const segments = pathname.split('/');
    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = targetLang;
      router.push(segments.join('/') || `/${targetLang}`);
    } else {
      router.push(`/${targetLang}${pathname}`);
    }
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Compact Flag-only trigger button with subtle chevron */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 hover:bg-white text-primary-850 rounded-full border border-cream-300 shadow-2xs hover:border-primary-leaf transition-all focus:outline-none focus:ring-2 focus:ring-primary-leaf shrink-0"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        title={languageNames[currentLang]}
      >
        <span className="flex items-center">
          {flagComponents[currentLang]}
        </span>
        {/* Subtle Chevron Icon */}
        <svg
          className={`w-3 h-3 text-slate-500 transition-transform duration-150 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Select options dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-48 bg-white rounded-2xl shadow-xl border border-cream-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-400 border-b border-cream-200/80">
            {dropdownTitles[currentLang]}
          </div>
          <div role="listbox">
            {locales.map((l) => {
              const active = currentLang === l;
              return (
                <button
                  key={l}
                  type="button"
                  onClick={() => switchLanguage(l)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors text-left ${
                    active
                      ? 'bg-cream-100 text-primary-leaf font-bold'
                      : 'text-slate-700 hover:bg-cream-50 hover:text-primary-leaf'
                  }`}
                  role="option"
                  aria-selected={active}
                >
                  <span className="flex items-center gap-2.5">
                    {flagComponents[l]}
                    <span>{languageNames[l]}</span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {l === 'zh' ? 'ZH' : l.toUpperCase()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
