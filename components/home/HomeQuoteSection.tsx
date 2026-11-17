import React from 'react';
import Container from '@/components/Container';
import ContactForm from '@/components/ContactForm';
import FadeIn from '@/components/animations/FadeIn';
import { Locale, Dictionary } from '@/lib/i18n';

interface HomeQuoteSectionProps {
  currentLang: Locale;
  dict: Dictionary;
}

export default function HomeQuoteSection({
  currentLang,
  dict,
}: HomeQuoteSectionProps) {
  return (
    <section
      id="bao-gia"
      className="bg-gradient-to-br from-primary-900 via-primary-850 to-primary-900 text-white py-10 sm:py-14 rounded-t-3xl sm:rounded-t-4xl border-t border-primary-700/40 scroll-mt-24 shadow-soft"
    >
      <Container>
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <div className="text-center mb-6 sm:mb-8">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent-gold bg-white/10 px-4 py-1.5 rounded-full border border-white/20 mb-3">
                {dict.pages.home.contactBadge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                {dict.pages.home.contactTitle}
              </h2>
              <p className="mt-3 text-xs sm:text-base text-cream-200/80 max-w-2xl mx-auto leading-relaxed">
                {dict.pages.home.contactSubtitle}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="bg-white text-primary-850 rounded-3xl p-5 sm:p-7 lg:p-8 shadow-2xl">
              <ContactForm dict={dict} lang={currentLang} />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
