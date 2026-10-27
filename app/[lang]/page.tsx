import type { Metadata } from 'next';
import { Locale, getDictionary, isValidLocale, defaultLocale } from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import HomePageContent from '@/components/HomePageContent';
import { getFeaturedNews, getFeaturedProducts } from '@/lib/wordpress';

interface PageProps {
  params: { lang: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);

  return buildPageMetadata({
    lang: currentLang,
    path: '',
    title: dict.pages.home.title,
    description: dict.pages.home.metaDescription,
  });
}

export default async function HomePage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  const [featuredNews, featuredProducts] = await Promise.all([
    getFeaturedNews(currentLang, 3),
    getFeaturedProducts(currentLang),
  ]);

  return (
    <HomePageContent
      currentLang={currentLang}
      dict={dict}
      featuredNews={featuredNews}
      featuredProducts={featuredProducts}
    />
  );
}

