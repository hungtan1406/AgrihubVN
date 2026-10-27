import React from 'react';
import type { Metadata } from 'next';
import {
  Locale,
  getDictionary,
  isValidLocale,
  defaultLocale,
  getAboutUsContent,
} from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import FadeIn from '@/components/animations/FadeIn';

interface PageProps {
  params: { lang: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const currentLang: Locale = isValidLocale(params.lang)
    ? params.lang
    : defaultLocale;
  const dict = getDictionary(currentLang);

  return buildPageMetadata({
    lang: currentLang,
    path: '/about-us',
    title: dict.pages.aboutUs.title,
    description: dict.pages.aboutUs.subtitle,
  });
}

export default function AboutUsPage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang)
    ? params.lang
    : defaultLocale;
  const dict = getDictionary(currentLang);
  const content = getAboutUsContent(currentLang);

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Target Audience Bar */}
        {/* <FadeIn direction="up">
          <div className="bg-white border border-cream-200 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
            <div>
              <span className="text-xs font-bold text-primary-leaf uppercase tracking-wider block">
                🌿 {dict.common.targetCustomer}:
              </span>
              <span className="text-sm text-primary-850 font-bold">
                {dict.pages.aboutUs.targetAudience}
              </span>
            </div>
            <Button href={`/${currentLang}/contact`} variant="primary" size="sm" className="shrink-0">
              {dict.pages.aboutUs.primaryCta} &rarr;
            </Button>
          </div>
        </FadeIn> */}

        <FadeIn direction="up" delay={0.1}>
          <SectionTitle
            as="h1"
            badge={content.badge}
            title={dict.pages.aboutUs.title}
            subtitle={dict.pages.aboutUs.subtitle}
          />
        </FadeIn>

        {/* Narrative & History */}
        <div className="space-y-8 my-10">
          <FadeIn direction="up">
            <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-soft">
              <h2 className="text-xl font-extrabold text-primary-850 mb-3">
                {content.visionTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {content.visionDesc}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {content.pillars.map((pillar, idx) => {
                const icons = ['🎯', '🤝', '🌐'];
                return (
                  <div
                    key={pillar.title}
                    className="bg-white p-6 rounded-2xl border border-cream-200 shadow-soft"
                  >
                    <span className="text-2xl mb-2 block">
                      {icons[idx] || '🌿'}
                    </span>
                    <h3 className="font-bold text-primary-850 text-base mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
          {/* 
          <FadeIn direction="up" delay={0.2}>
            <div className="p-6 bg-cream-200/50 rounded-2xl border border-cream-300 text-xs text-slate-600 space-y-2">
              {content.notes.map((note) => (
                <p key={note}>• [{note}]</p>
              ))}
            </div>
          </FadeIn> */}
        </div>

        {/* Action */}
        {/* <FadeIn direction="up" delay={0.25}>
          <div className="text-center pt-4">
            <Button
              href={`/${currentLang}/contact`}
              variant="primary"
              size="lg"
            >
              <span>{dict.pages.aboutUs.primaryCta}</span>
              <span className="ml-1">&rarr;</span>
            </Button>
          </div>
        </FadeIn> */}
      </Container>
    </div>
  );
}
