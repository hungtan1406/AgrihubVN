import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  params: { lang: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  return buildPageMetadata({
    lang: currentLang,
    pathname: '/products',
    title: dict.pages.products.title,
    description: dict.pages.products.subtitle,
  });
}

export default async function ProductsPage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  const products = await getProducts(currentLang);
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
            className="shrink-0 self-start md:self-auto shadow-sm"
          >
            {dict.pages.products.primaryCta}
          </Button>
        </div>

        {/* Filterable Product Grid (Hiển thị 100% tất cả sản phẩm kèm bộ lọc đầy đủ) */}
        <div className="mt-6">
          <ProductsFilterGrid
            products={products}
            localizedIngredients={localizedIngredients}
            currentLang={currentLang}
            labels={t}
            dict={dict}
          />
        </div>

        {/* CMS Synchronization Notice */}
        <div className="mt-8 sm:mt-10 p-6 bg-cream-100 rounded-2xl border border-cream-300 text-center">
          <p className="text-sm text-primary-850 font-bold">
            {t.cmsTitle}
          </p>
          <p className="text-xs text-slate-600 mt-1">
            {t.cmsDesc}
          </p>
        </div>
      </Container>
    </div>
  );
}
