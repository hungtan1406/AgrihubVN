import React from 'react';
import Link from 'next/link';
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
    <div className="py-12 sm:py-16">
      <Container>
        {/* Target Audience Bar */}
        <div className="bg-white border border-cream-200 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
          <div>
            <span className="text-xs font-bold text-primary-leaf uppercase tracking-wider block">
              🌿 {dict.common.targetCustomer}:
            </span>
            <span className="text-sm text-primary-850 font-bold">
              {dict.pages.products.targetAudience}
            </span>
          </div>
          <Button href={`/${currentLang}/contact`} variant="primary" size="sm" className="shrink-0">
            {dict.pages.products.primaryCta} &rarr;
          </Button>
        </div>

        <SectionTitle
          as="h1"
          badge="B2B Ingredients"
          title={dict.pages.products.title}
          subtitle={dict.pages.products.subtitle}
        />

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {products.map((p) => {
            const match = localizedIngredients.find((ing) => ing.id === p.slug);
            const displayName = match?.name || p.name;
            const displayCategory = match?.categoryName || p.category;
            const displaySpecs = match?.specs || p.specs;
            const displayApp = match?.applications || p.application;

            return (
              <div
                key={p.slug}
                className="bg-white border border-cream-200 rounded-2xl p-6 shadow-soft flex flex-col justify-between hover:border-primary-leaf transition-colors group"
              >
                <div>
                  {p.image && (
                    <div className="mb-4 overflow-hidden rounded-xl bg-cream-100 aspect-video flex items-center justify-center">
                      <img
                        src={p.image}
                        alt={displayName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <span className="text-xs font-bold text-primary-leaf uppercase tracking-wider bg-primary-leaf/10 px-3 py-1 rounded-full border border-primary-leaf/20 inline-block">
                    {displayCategory}
                  </span>
                  <h2 className="text-lg font-bold text-primary-850 mt-4 mb-2">{displayName}</h2>
                  <div className="space-y-1.5 text-xs text-slate-600 mb-4 bg-cream-50 p-3.5 rounded-xl border border-cream-200/60">
                    <p>
                      <strong className="text-primary-850">{t.specLabel}</strong> {displaySpecs}
                    </p>
                    <p>
                      <strong className="text-primary-850">{t.appLabel}</strong> {displayApp}
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                  <Link
                    href={`/${currentLang}/products/${p.slug}`}
                    className="text-xs font-bold text-primary-leaf hover:text-primary-leafHover"
                  >
                    {t.viewTds}
                  </Link>
                  <Button href={`/${currentLang}/contact`} variant="pill" size="sm">
                    {t.sampleBtn}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CMS Synchronization Notice */}
        <div className="mt-12 p-6 bg-cream-100 rounded-2xl border border-cream-300 text-center">
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
