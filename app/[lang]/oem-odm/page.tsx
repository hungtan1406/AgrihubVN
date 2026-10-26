import React from 'react';
import { Metadata } from 'next';
import {
  Locale,
  getDictionary,
  isValidLocale,
  defaultLocale,
  getOemContent,
  getHomePageUi,
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
    pathname: '/oem-odm',
    title: dict.pages.oemOdm.title,
    description: dict.pages.oemOdm.subtitle,
  });
}

export default function OemOdmPage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  const content = getOemContent(currentLang);
  const homeUi = getHomePageUi(currentLang);
  const steps = homeUi.oem.steps;

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Target Audience Bar */}
        <div className="bg-white border border-cream-200 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
          <div>
            <span className="text-xs font-bold text-primary-leaf uppercase tracking-wider block">
              🌿 {dict.common.targetCustomer}:
            </span>
            <span className="text-sm text-primary-850 font-bold">
              {dict.pages.oemOdm.targetAudience}
            </span>
          </div>
          <Button href={`/${currentLang}/contact`} variant="primary" size="sm" className="shrink-0">
            {dict.pages.oemOdm.primaryCta} &rarr;
          </Button>
        </div>

        <SectionTitle
          as="h1"
          badge={content.badge}
          title={dict.pages.oemOdm.title}
          subtitle={dict.pages.oemOdm.subtitle}
        />

        {/* 5-Step Process */}
        <div className="my-10">
          <h2 className="text-xl sm:text-2xl font-bold text-primary-850 mb-6">
            {content.processTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-white p-5 rounded-2xl border border-cream-200 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <span className="text-primary-leaf font-black text-2xl mb-2 block">
                    {s.step}
                  </span>
                  <h3 className="font-bold text-sm text-primary-850 mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OEM Capabilities & Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-10">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft">
            <h3 className="font-bold text-base text-primary-850 mb-3">
              {content.cap1Title}
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              {content.cap1Items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft">
            <h3 className="font-bold text-base text-primary-850 mb-3">
              {content.cap2Title}
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              {content.cap2Items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-6 sm:p-10 bg-gradient-to-br from-primary-900 via-primary-850 to-primary-900 text-white rounded-3xl sm:rounded-4xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft border border-primary-700/30">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">{content.bannerTitle}</h3>
            <p className="text-cream-200/80 text-xs sm:text-sm mt-1">
              {content.bannerDesc}
            </p>
          </div>
          <Button href={`/${currentLang}/contact`} variant="primary" size="lg" className="shrink-0 w-full sm:w-auto">
            <span>{dict.pages.oemOdm.primaryCta}</span>
            <span className="ml-1">&rarr;</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
