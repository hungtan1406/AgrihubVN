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
  params: { lang: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);

  return buildPageMetadata({
    lang: currentLang,
    path: '/contact',
    title: dict.pages.contact.title,
    description: dict.pages.contact.subtitle,
  });
}

export default function ContactPage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  const content = getContactPageContent(currentLang);

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Target Audience Bar */}
        <FadeIn direction="up">
          <div className="bg-white border border-cream-200 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
            <div>
              <span className="text-xs font-bold text-primary-leaf uppercase tracking-wider block">
                🌿 {dict.common.targetCustomer}:
              </span>
              <span className="text-sm text-primary-850 font-bold">
                {dict.pages.contact.targetAudience}
              </span>
            </div>
            <span className="text-xs text-primary-leaf font-extrabold bg-cream-200/80 px-3 py-1.5 rounded-full border border-cream-300">
              {content.responseBadge}
            </span>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <SectionTitle
            as="h1"
            badge="B2B Inquiry"
            title={dict.pages.contact.title}
            subtitle={dict.pages.contact.subtitle}
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
          {/* Contact Details Column */}
          <FadeIn direction="up" delay={0.15}>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-cream-200 shadow-soft">
                <h2 className="text-base font-extrabold text-primary-850 mb-4">
                  {content.channelTitle}
                </h2>
                <div className="space-y-4 text-xs text-slate-600">
                  <div>
                    <strong className="block text-primary-850 mb-1">
                      {content.emailTitle}
                    </strong>
                    <span className="text-primary-leaf font-bold text-sm">
                      {content.emailVal}
                    </span>
                  </div>
                  <div>
                    <strong className="block text-primary-850 mb-1">
                      {content.phoneTitle}
                    </strong>
                    <span className="text-primary-leaf font-bold text-sm">
                      {content.phoneVal}
                    </span>
                  </div>
                  <div>
                    <strong className="block text-primary-850 mb-1">
                      {content.addressTitle}
                    </strong>
                    <span>{content.addressVal}</span>
                  </div>
                  <div>
                    <strong className="block text-primary-850 mb-1">
                      {content.factoryTitle}
                    </strong>
                    <span>{content.factoryVal}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-900 to-primary-850 text-cream-100 p-6 rounded-3xl shadow-soft border border-primary-700/40">
                <h3 className="font-bold text-sm text-accent-gold mb-2 flex items-center gap-1.5">
                  <span>🌿</span>
                  <span>{content.commitmentTitle}</span>
                </h3>
                <p className="text-xs text-cream-200/80 leading-relaxed mb-3">
                  {content.commitment1}
                </p>
                <p className="text-xs text-cream-200/80 leading-relaxed mb-3">
                  {content.commitment2}
                </p>
                <p className="text-xs text-cream-200/80 leading-relaxed">
                  {content.commitment3}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft">
                <h2 className="text-lg font-extrabold text-primary-850 mb-2">
                  {content.formTitle}
                </h2>
                <p className="text-xs text-slate-500 mb-6">
                  {content.formSubtitle}
                </p>

                <ContactForm dict={dict} lang={currentLang} />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </div>
  );
}
