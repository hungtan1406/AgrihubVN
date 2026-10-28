import React from 'react';
import { Metadata } from 'next';
import {
  Locale,
  getDictionary,
  isValidLocale,
  defaultLocale,
  getSupplyChainContent,
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
    pathname: '/supply-chain',
    title: dict.pages.supplyChain.title,
    description: dict.pages.supplyChain.subtitle,
  });
}

export default function SupplyChainPage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  const content = getSupplyChainContent(currentLang);

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Header Section with direct CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-cream-200/80">
          <SectionTitle
            as="h1"
            badge={content.badge}
            title={dict.pages.supplyChain.title}
            subtitle={dict.pages.supplyChain.subtitle}
            className="mb-0"
          />
          <Button
            href={`/${currentLang}/contact`}
            variant="primary"
            size="md"
            className="shrink-0 self-start md:self-auto shadow-sm"
          >
            {dict.pages.supplyChain.primaryCta}
          </Button>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          <div className="bg-white p-5 rounded-2xl border border-cream-200 shadow-soft text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary-850 block">
              {content.stat1}
            </span>
            <span className="text-xs text-slate-600 font-bold mt-1 block">
              {content.stat1Label}
            </span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-cream-200 shadow-soft text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary-leaf block">
              {content.stat2}
            </span>
            <span className="text-xs text-slate-600 font-bold mt-1 block">
              {content.stat2Label}
            </span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-cream-200 shadow-soft text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary-850 block">
              {content.stat3}
            </span>
            <span className="text-xs text-slate-600 font-bold mt-1 block">
              {content.stat3Label}
            </span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-cream-200 shadow-soft text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary-leaf block">
              {content.stat4}
            </span>
            <span className="text-xs text-slate-600 font-bold mt-1 block">
              {content.stat4Label}
            </span>
          </div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-6 sm:space-y-8 my-10">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft">
            <h2 className="text-lg font-bold text-primary-850 mb-3">
              {content.block1Title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              {content.block1Desc}
            </p>
            <p className="text-xs text-slate-500 italic bg-cream-50 p-3 rounded-xl border border-cream-200">
              {content.block1Notice}
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft">
            <h2 className="text-lg font-bold text-primary-850 mb-3">
              {content.block2Title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              {content.block2Desc}
            </p>
            <p className="text-xs text-slate-500 italic bg-cream-50 p-3 rounded-xl border border-cream-200">
              {content.block2Notice}
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="text-center pt-4">
          <Button href={`/${currentLang}/contact`} variant="primary" size="lg">
            <span>{dict.pages.supplyChain.primaryCta}</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
