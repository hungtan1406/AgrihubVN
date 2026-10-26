'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Locale, Dictionary } from '@/lib/i18n';
import Container from './Container';
import Button from './Button';
import LanguageSelect from './LanguageSelect';

interface HeaderProps {
  lang: Locale;
  dict: Dictionary;
}

export default function Header({ lang, dict }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Navigation Links - Clean, focused top-level B2B navigation
  const navLinks = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/about-us`, label: dict.nav.aboutUs },
    { href: `/${lang}/products`, label: dict.nav.products },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${lang}` && pathname === `/${lang}`) return true;
    if (href !== `/${lang}` && pathname?.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-cream-100/90 backdrop-blur-md border-b border-cream-200/80 transition-all">
      <Container className="flex items-center justify-between h-20 py-2">
        {/* Brand Logo - Crisp & Seamless */}
        <Link
          href={`/${lang}`}
          className="flex items-center shrink-0 py-1 hover:opacity-90 transition-opacity"
          title="Agrihub Vietnam"
        >
          <Image
            src="/images/logo-clean.png"
            alt="Agrihub Vietnam"
            width={84}
            height={61}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Center: Warm Wheat Pill Navigation Bar (matching Image 1) with dynamic sliding pill */}
        <nav className="hidden lg:flex items-center bg-cream-300/90 rounded-full px-4 py-1.5 shadow-pill border border-cream-400/40 gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs xl:text-sm font-bold rounded-full transition-colors whitespace-nowrap ${
                  active
                    ? 'text-primary-850 font-extrabold'
                    : 'text-primary-850/90 hover:text-primary-leaf'
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white rounded-full shadow-xs"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Compact Flag Select & Fresh Leaf CTA & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Flag select option (single instance, never duplicated) */}
          <LanguageSelect currentLang={lang} />

          {/* Let's Talk / Request Quote Action Pill (desktop only; hidden on tablet & mobile as it is inside the hamburger drawer) */}
          <Button
            href={`/${lang}/contact`}
            variant="primary"
            size="sm"
            className="hidden lg:inline-flex items-center gap-1.5 shadow-sm text-xs font-bold shrink-0"
          >
            <span>{dict.nav.requestQuoteBtn}</span>
            <span className="text-sm font-black">&rarr;</span>
          </Button>

          {/* Mobile & Tablet Drawer Menu Toggle (< lg) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-primary-850 bg-cream-300/80 hover:bg-cream-300 rounded-full focus:outline-none transition-colors shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu in warm organic style with smooth animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="lg:hidden overflow-hidden bg-cream-50 border-b border-cream-200 shadow-lg"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <div className="flex flex-col space-y-1.5">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2.5 text-sm font-bold rounded-xl transition-colors ${
                        active
                          ? 'bg-cream-300 text-primary-850 font-extrabold'
                          : 'text-primary-850 hover:bg-cream-200'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-cream-200">
                <Button
                  href={`/${lang}/contact`}
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{dict.nav.requestQuoteBtn}</span>
                  <span className="ml-1 text-base">&rarr;</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
