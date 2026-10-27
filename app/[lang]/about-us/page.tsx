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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {content.pillars.map((pillar, idx) => {
                const icons = ['🎯', '🤝', '🌐', '🛡️'];
                return (
                  <div
                    key={pillar.title}
                    className="bg-white p-6 rounded-2xl border border-cream-200 shadow-soft hover:border-primary-leaf/50 transition-colors"
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
        </div>

        {/* ── SECTION: MẠNG LƯỚI TOÀN CẦU ─────────────────────────────── */}
        <section className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-cream-200/90">
          <FadeIn direction="up">
            <SectionTitle
              badge={content.networkBadge}
              title={content.networkTitle}
              subtitle={content.networkSubtitle}
            />
          </FadeIn>

          {/* Infinite Partner Logo Carousel */}
          <FadeIn direction="up" delay={0.15}>
            <div className="mt-8 py-2">
              <PartnerCarousel partners={content.partners} />
            </div>
          </FadeIn>
        </section>

        {/* ── SECTION: TẠI SAO CHỌN AGRIHUB? ─────────────────────────── */}
        <section className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-cream-200/90">
          <FadeIn direction="up">
            <SectionTitle
              badge={content.whyChooseBadge}
              title={content.whyChooseTitle}
              subtitle={content.whyChooseSubtitle}
            />
          </FadeIn>

          {/* 4 Value Pillars Grid */}
          <FadeIn direction="up" delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
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
            <div className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white rounded-3xl sm:rounded-4xl p-8 sm:p-12 border border-primary-700/50 shadow-soft text-center mt-10">
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
                    <span className="ml-1">&rarr;</span>
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
