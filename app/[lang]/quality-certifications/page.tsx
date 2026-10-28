import React from 'react';
import { Metadata } from 'next';
import {
  Locale,
  getDictionary,
  isValidLocale,
  defaultLocale,
  getQualityContent,
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
    pathname: '/quality-certifications',
    title: dict.pages.qualityCertifications.title,
    description: dict.pages.qualityCertifications.subtitle,
  });
}

export default function QualityCertificationsPage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  const content = getQualityContent(currentLang);

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Header Section with direct CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-cream-200/80">
          <SectionTitle
            as="h1"
            badge={content.badge}
            title={dict.pages.qualityCertifications.title}
            subtitle={dict.pages.qualityCertifications.subtitle}
            className="mb-0"
          />
          <Button
            href={`/${currentLang}/contact`}
            variant="primary"
            size="md"
            className="shrink-0 self-start md:self-auto shadow-sm"
          >
            {dict.pages.qualityCertifications.primaryCta}
          </Button>
        </div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {content.items.map((c) => (
            <div
              key={c.code}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-cream-200 shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-primary-leaf bg-cream-100 px-3 py-1 rounded-full border border-cream-300">
                    {c.code}
                  </span>
                  <span className="text-[10px] text-accent-gold font-bold bg-cream-100 px-2.5 py-0.5 rounded-full border border-cream-200">
                    {content.sampleBadge}
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-primary-850 mb-2">{c.title}</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{c.desc}</p>
              </div>
              <div className="pt-3 border-t border-cream-200 text-xs text-slate-500">
                {c.status}
              </div>
            </div>
          ))}
        </div>

        {/* Laboratory Testing Protocol */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft my-8">
          <h2 className="text-base sm:text-lg font-bold text-primary-850 mb-4">
            {content.commitmentTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200">
              {content.bullet1}
            </div>
            <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200">
              {content.bullet2}
            </div>
            <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200">
              {content.bullet3}
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <Button href={`/${currentLang}/contact`} variant="primary" size="lg">
            <span>{dict.pages.qualityCertifications.primaryCta}</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
