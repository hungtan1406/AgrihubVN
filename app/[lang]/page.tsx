import type { Metadata } from 'next';
import { Locale, getDictionary, isValidLocale, defaultLocale } from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import HomePageContent from '@/components/HomePageContent';
import { getFeaturedNews, getProducts } from '@/lib/wordpress';

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
  const [featuredNews, allProducts] = await Promise.all([
    getFeaturedNews(currentLang, 3),
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
      featuredProducts={featuredProducts}
      totalProducts={totalProducts}
    />
  );
}

