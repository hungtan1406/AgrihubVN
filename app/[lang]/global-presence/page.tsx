import React from 'react';
import { Metadata } from 'next';
import {
  Locale,
  getDictionary,
  isValidLocale,
  defaultLocale,
  getGlobalPresenceContent,
} from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';

interface PageProps {
  params: { lang: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  return buildPageMetadata({
    lang: currentLang,
    pathname: '/global-presence',
    title: dict.pages.globalPresence.title,
    description: dict.pages.globalPresence.subtitle,
  });
}

export default function GlobalPresencePage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  const content = getGlobalPresenceContent(currentLang);

  return (
    <div className="py-8 sm:py-12">
      <Container>
        {/* Header Section with direct CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-cream-200/80">
          <SectionTitle
            as="h1"
            badge={content.badge}
            title={dict.pages.globalPresence.title}
            subtitle={dict.pages.globalPresence.subtitle}
            className="mb-0"
          />
          <Button
            href={`/${currentLang}/contact`}
            variant="primary"
            size="md"
            className="shrink-0 self-start md:self-auto shadow-sm"
          >
            {dict.pages.globalPresence.primaryCta}
          </Button>
        </div>

        {/* Export Markets List */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 my-6 sm:my-8 shadow-soft">
          <h2 className="text-base sm:text-lg font-bold text-primary-850 mb-4">
            {content.marketsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.markets.map((m) => (
              <div key={m.country} className="p-4 bg-cream-50 rounded-2xl border border-cream-200">
                <span className="font-bold text-primary-850 text-sm block">{m.country}</span>
                <span className="text-xs text-slate-500 mt-1 block">{m.note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* International Exhibitions */}
        <div className="mt-2">
          <h2 className="text-base sm:text-lg font-bold text-primary-850 mb-6">
            {content.showsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.shows.map((t) => (
              <div
                key={t.name}
                className="bg-white p-6 rounded-3xl border border-cream-200 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-base text-primary-850">{t.name}</h3>
                    <span className="text-xs font-bold text-primary-leaf bg-cream-100 px-3 py-1 rounded-full border border-cream-300">
                      {t.location}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{t.desc}</p>
                </div>
                <div className="pt-3 border-t border-cream-200 text-xs text-slate-500 italic">
                  {content.showNote}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Export CTA */}
        <div className="mt-8 sm:mt-10 p-6 sm:p-8 bg-gradient-to-br from-primary-900 via-primary-850 to-primary-900 text-white rounded-3xl sm:rounded-4xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft border border-primary-700/30">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">{content.ctaTitle}</h3>
            <p className="text-cream-200/80 text-xs sm:text-sm mt-1">
              {content.ctaDesc}
            </p>
          </div>
          <Button href={`/${currentLang}/contact`} variant="primary" size="lg" className="shrink-0 w-full sm:w-auto">
            <span>{dict.pages.globalPresence.primaryCta}</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
