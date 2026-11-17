import { redirect } from 'next/navigation';
import { Locale, isValidLocale, defaultLocale } from '@/lib/i18n';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function QualityCertificationsPage({ params }: PageProps) {
  const { lang } = await params;
  const currentLang: Locale = isValidLocale(lang) ? lang : defaultLocale;
  redirect(`/${currentLang}#chat-luong`);
}
