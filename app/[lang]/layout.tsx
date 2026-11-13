import React from 'react';
import { Locale, getDictionary, isValidLocale, defaultLocale, locales } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MotionProvider from '@/components/animations/MotionProvider';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  const currentLang: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(currentLang);

  return (
    <MotionProvider>
      <div className="flex flex-col min-h-screen">
        <Header lang={currentLang} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer lang={currentLang} dict={dict} />
      </div>
    </MotionProvider>
  );
}
