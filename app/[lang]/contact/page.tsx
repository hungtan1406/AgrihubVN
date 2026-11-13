import React from 'react';
import type { Metadata } from 'next';
import {
  Locale,
  getDictionary,
  isValidLocale,
  defaultLocale,
  getContactPageContent,
} from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

interface PageProps {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const currentLang: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(currentLang);

  return buildPageMetadata({
    lang: currentLang,
    path: '/contact',
    title: dict.pages.contact.title,
    description: dict.pages.contact.subtitle,
  });
}

export default async function ContactPage({ params, searchParams }: PageProps) {
  const { lang } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const currentLang: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(currentLang);
  const content = getContactPageContent(currentLang);

  return (
    <div className="py-8 sm:py-12">
      <Container>
        {/* Header Section with SLA Response Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-cream-200/80">
          <SectionTitle
            as="h1"
            badge="B2B Inquiry"
            title={dict.pages.contact.title}
            subtitle={dict.pages.contact.subtitle}
            className="mb-0"
          />
          <div className="inline-flex items-center gap-2 text-xs text-primary-850 font-semibold bg-primary-50 px-3.5 py-2 rounded-full border border-primary-200 shrink-0 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-primary-leaf animate-pulse" aria-hidden="true" />
            <span>{content.responseBadge}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-2">
          {/* Contact Details Column */}
          <FadeIn direction="up" delay={0.15}>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-cream-200 shadow-soft">
                <h2 className="text-base font-extrabold text-primary-850 mb-4">
                  {content.channelTitle}
                </h2>
                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🏢</span>
                    <div>
                      <strong className="block text-primary-850 font-bold mb-0.5">
                        {content.addressTitle}
                      </strong>
                      <p className="text-slate-600 leading-relaxed">
                        {content.addressVal}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🏭</span>
                    <div>
                      <strong className="block text-primary-850 font-bold mb-0.5">
                        {content.factoryTitle}
                      </strong>
                      <p className="text-slate-600 leading-relaxed">
                        {content.factoryVal}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📞</span>
                    <div>
                      <strong className="block text-primary-850 font-bold mb-0.5">
                        {content.phoneTitle}
                      </strong>
                      <a
                        href={`tel:${content.phoneVal.replace(/[^0-9+]/g, '')}`}
                        className="text-primary-leaf hover:underline font-bold"
                      >
                        {content.phoneVal}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">✉️</span>
                    <div>
                      <strong className="block text-primary-850 font-bold mb-0.5">
                        {content.emailTitle}
                      </strong>
                      <a
                        href={`mailto:${content.emailVal}`}
                        className="text-primary-leaf hover:underline font-bold break-all"
                      >
                        {content.emailVal}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* B2B Assurance Card */}
              <div className="bg-primary-950 text-white p-6 rounded-3xl border border-primary-800 shadow-soft">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🤝</span>
                  <h3 className="font-bold text-sm text-white">
                    {content.commitmentTitle}
                  </h3>
                </div>
                <div className="space-y-1.5 text-xs text-cream-200 leading-relaxed">
                  <p>{content.commitment1}</p>
                  <p>{content.commitment2}</p>
                  <p>{content.commitment3}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <FadeIn direction="up" delay={0.25}>
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft">
                <ContactForm
                  lang={currentLang}
                  dict={dict}
                  initialProduct={
                    typeof resolvedSearchParams.product === 'string'
                      ? resolvedSearchParams.product
                      : undefined
                  }
                  initialType={
                    typeof resolvedSearchParams.type === 'string'
                      ? resolvedSearchParams.type
                      : undefined
                  }
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </div>
  );
}
