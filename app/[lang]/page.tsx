import type { Metadata } from 'next';
import { Locale, getDictionary, isValidLocale, defaultLocale } from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import HomePageContent from '@/components/HomePageContent';
import { getFeaturedEvents, getFeaturedNews, getProducts } from '@/lib/wordpress';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const currentLang: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(currentLang);

  return buildPageMetadata({
    lang: currentLang,
    path: '',
    title: dict.pages.home.title,
    description: dict.pages.home.metaDescription,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  const currentLang: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const [dict, featuredNews, featuredEvents, allProducts] = await Promise.all([
    getDictionary(currentLang),
    getFeaturedNews(currentLang, 3),
    getFeaturedEvents(currentLang, 3),
    getProducts(currentLang),
  ]);

  const featured = allProducts.filter((p) => p.isFeatured);
  // Giới hạn hiển thị trên trang chủ từ 6 đến 8 sản phẩm nổi bật (mặc định tối đa 8)
  const featuredProducts = (featured.length > 0 ? featured : allProducts).slice(0, 8);
  const totalProducts = allProducts.length;

  return (
    <HomePageContent
      currentLang={currentLang}
      dict={dict}
      featuredNews={featuredNews}
      featuredEvents={featuredEvents}
      featuredProducts={featuredProducts}
      totalProducts={totalProducts}
    />
  );
}
