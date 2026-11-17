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
import PartnerCarousel from '@/components/PartnerCarousel';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const currentLang: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(currentLang);

  return buildPageMetadata({
    lang: currentLang,
    path: '/about-us',
    title: dict.pages.aboutUs.title,
    description: dict.pages.aboutUs.subtitle,
  });
}

export default async function AboutUsPage({ params }: PageProps) {
  const { lang } = await params;
  const currentLang: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(currentLang);
  const content = getAboutUsContent(currentLang);

  return (
    <div className="py-8 sm:py-12">
      <Container>
        {/* Main Title Section */}
        <FadeIn direction="up" delay={0.1}>
          <SectionTitle
            as="h1"
            badge={content.badge}
            title={dict.pages.aboutUs.title}
            subtitle={dict.pages.aboutUs.subtitle}
          />
        </FadeIn>

        {/* Narrative & History */}
        <div className="space-y-6 my-6 sm:my-8">
          <FadeIn direction="up">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft">
              <h2 className="text-xl font-extrabold text-primary-850 mb-3">
                {content.visionTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {content.visionDesc}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {content.pillars.map((pillar, idx) => {
                const pillarIcons = [
                  // 1. Mission / Target
                  <svg key="target" className="w-5 h-5 text-primary-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>,
                  // 2. Partnership
                  <svg key="handshake" className="w-5 h-5 text-primary-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>,
                  // 3. Global Network
                  <svg key="globe" className="w-5 h-5 text-primary-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>,
                  // 4. Quality Shield
                  <svg key="shield" className="w-5 h-5 text-primary-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>,
                ];

                return (
                  <div
                    key={pillar.title}
                    className="bg-white p-6 rounded-2xl border border-cream-200 shadow-soft hover:border-primary-leaf/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-3">
                      {pillarIcons[idx] || pillarIcons[0]}
                    </div>
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
        </div>

        {/* ── SECTION: MẠNG LƯỚI TOÀN CẦU ─────────────────────────────── */}
        <section className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-cream-200/90">
          <FadeIn direction="up">
            <SectionTitle
              badge={content.networkBadge}
              title={content.networkTitle}
              subtitle={content.networkSubtitle}
            />
          </FadeIn>

          {/* Infinite Partner Logo Carousel */}
          <FadeIn direction="up" delay={0.15}>
            <div className="mt-4 sm:mt-6 py-1">
              <PartnerCarousel partners={content.partners} />
            </div>
          </FadeIn>
        </section>

        {/* ── SECTION: TẠI SAO CHỌN AGRIHUB? ─────────────────────────── */}
        <section className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-cream-200/90">
          <FadeIn direction="up">
            <SectionTitle
              badge={content.whyChooseBadge}
              title={content.whyChooseTitle}
              subtitle={content.whyChooseSubtitle}
            />
          </FadeIn>

          {/* 4 Value Pillars Grid */}
          <FadeIn direction="up" delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-2">
              {content.whyChoosePillars.map((p) => (
                <div
                  key={p.title}
                  className="bg-white p-6 sm:p-7 rounded-3xl border border-cream-200 shadow-soft hover:border-primary-leaf hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cream-100 flex items-center justify-center text-2xl mb-4 border border-cream-200/60 shadow-2xs">
                      {p.icon}
                    </div>
                    <h3 className="font-bold text-primary-850 text-base sm:text-lg mb-2.5 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Grand Brand Motto & Closing CTA Banner */}
          <FadeIn direction="up" delay={0.25}>
            <div className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white rounded-3xl sm:rounded-4xl p-6 sm:p-10 border border-primary-700/50 shadow-soft text-center mt-8 sm:mt-10">
              {/* Subtle background glow */}
              <div className="absolute -right-10 -top-10 w-60 h-60 bg-primary-leaf/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-accent-gold/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-accent-gold bg-white/10 px-4 py-1.5 rounded-full border border-white/20 mb-4">
                  {content.closingBadge}
                </span>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-normal text-white mb-6 leading-snug">
                  {content.closingMotto}
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
                  <Button
                    href={`/${currentLang}/contact`}
                    variant="amber"
                    size="lg"
                    className="w-full sm:w-auto shadow-md hover:shadow-lg font-bold"
                  >
                    <span>{content.closingCtaPrimary}</span>
                  </Button>
                  <Button
                    href={`/${currentLang}/products`}
                    variant="ghost"
                    size="lg"
                    className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10"
                  >
                    <span>{content.closingCtaSecondary}</span>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </Container>
    </div>
  );
}
