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
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          <SectionTitle
            as="h1"
            badge={currentLang === 'vi' ? 'Liên hệ & Báo giá' : currentLang === 'zh' ? '商务咨询' : 'B2B Inquiry'}
            title={dict.pages.contact.title}
            subtitle={dict.pages.contact.subtitle}
            className="mb-0"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Details Column */}
          <FadeIn direction="up" delay={0.15}>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-cream-200 shadow-soft">
                <h2 className="text-base font-extrabold text-primary-850 mb-4">
                  {content.channelTitle}
                </h2>
                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 text-primary-leaf">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </span>
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
                    <span className="w-8 h-8 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 text-primary-leaf">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </span>
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
                    <span className="w-8 h-8 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 text-primary-leaf">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
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
                    <span className="w-8 h-8 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 text-primary-leaf">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
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
                  <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-accent-gold">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
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
