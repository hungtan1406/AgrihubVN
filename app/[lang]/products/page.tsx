import React from 'react';
import { Metadata } from 'next';
import {
  Locale,
  getDictionary,
  isValidLocale,
  defaultLocale,
  getProductsPageTranslations,
  getIngredients,
} from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import ProductsFilterGrid from '@/components/ProductsFilterGrid';
import { getProducts } from '@/lib/wordpress';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const currentLang: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(currentLang);
  return buildPageMetadata({
    lang: currentLang,
    pathname: '/products',
    title: dict.pages.products.title,
    description: dict.pages.products.subtitle,
  });
}

export default async function ProductsPage({ params }: PageProps) {
  const { lang } = await params;
  const currentLang: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const [dict, products] = await Promise.all([
    getDictionary(currentLang),
    getProducts(currentLang),
  ]);
  const t = getProductsPageTranslations(currentLang);
  const localizedIngredients = getIngredients(currentLang);

  return (
    <div className="py-8 sm:py-12">
      <Container>
        {/* Header Section with natural CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-cream-200/80">
          <SectionTitle
            as="h1"
            badge="B2B Ingredients"
            title={dict.pages.products.title}
            subtitle={dict.pages.products.subtitle}
            className="mb-0"
          />
          <Button
            href={`/${currentLang}/contact`}
            variant="primary"
            size="md"
            className="shrink-0 self-start md:self-auto font-bold"
          >
            <span>{dict.common.requestQuote}</span>
          </Button>
        </div>

        {/* Dynamic Client Filter Tabs & Product Grid */}
        <ProductsFilterGrid
          currentLang={currentLang}
          dict={dict}
          products={products}
          localizedIngredients={localizedIngredients}
          labels={{
            viewTds: t.viewTds || dict.common.viewDetails,
            sampleBtn: t.sampleBtn || dict.common.requestSample,
            moistureLabel: t.moistureLabel,
            meshLabel: t.meshLabel,
            shelfLifeLabel: t.shelfLifeLabel,
            appLabel: t.appLabel,
          }}
        />
      </Container>
    </div>
  );
}
