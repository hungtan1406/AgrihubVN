import React from 'react';
import { Locale, getDictionary, isValidLocale, defaultLocale, locales } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface LangLayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

export default function LangLayout({ children, params }: LangLayoutProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={currentLang} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer lang={currentLang} dict={dict} />
    </div>
  );
}
