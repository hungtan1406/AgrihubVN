import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  Locale,
  getDictionary,
  isValidLocale,
  defaultLocale,
  getProductDetailPageTranslations,
  getIngredients,
} from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import { getAllProductSlugs, getProductBySlug } from '@/lib/wordpress';

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  const params: { lang: string; slug: string }[] = [];

  ['vi', 'en', 'zh'].forEach((lang) => {
    slugs.forEach((slug) => {
      params.push({ lang, slug });
    });
  });

  return params;
}

interface PageProps {
  params: { lang: string; slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  const product = await getProductBySlug(params.slug, currentLang);
  const localizedIngredients = getIngredients(currentLang);
  const matchedIngredient = localizedIngredients.find((ing) => ing.id === params.slug);
  const productName = matchedIngredient?.name || product?.name || params.slug.replace(/-/g, ' ');

  return buildPageMetadata({
    lang: currentLang,
    pathname: `/products/${params.slug}`,
    title: `${productName} | TDS & Specification`,
    description: `${dict.pages.productDetail.subtitle} - ${productName}`,
  });
}

export default async function ProductDetailPage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  const t = getProductDetailPageTranslations(currentLang);
  const product = await getProductBySlug(params.slug, currentLang);
  const localizedIngredients = getIngredients(currentLang);
  const matchedIngredient = localizedIngredients.find((ing) => ing.id === params.slug);

  const fallbackName = params.slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const productName = matchedIngredient?.name || product?.name || fallbackName;

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href={`/${currentLang}`} className="hover:text-primary-leaf">
            {dict.nav.home}
          </Link>
          <span>/</span>
          <Link href={`/${currentLang}/products`} className="hover:text-primary-leaf">
            {dict.nav.products}
          </Link>
          <span>/</span>
          <span className="text-primary-850 font-bold capitalize">
            {productName}
          </span>
        </div>

        {/* Target Audience Notice */}
        <div className="bg-white border border-cream-200 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
          <div>
            <span className="text-xs font-bold text-primary-leaf uppercase tracking-wider block">
              🌿 {dict.common.targetCustomer}:
            </span>
            <span className="text-sm text-primary-850 font-bold">
              {dict.pages.productDetail.targetAudience}
            </span>
          </div>
          <Button href={`/${currentLang}/contact`} variant="primary" size="sm" className="shrink-0">
            {dict.pages.productDetail.primaryCta} &rarr;
          </Button>
        </div>

        <SectionTitle
          as="h1"
          badge={
            (matchedIngredient?.categoryName || product?.category)
              ? `B2B Ingredient • ${matchedIngredient?.categoryName || product?.category}`
              : 'B2B Technical Data Sheet'
          }
          title={`${t.specDetailTitle} ${productName}`}
          subtitle={matchedIngredient?.specs || product?.specs || dict.pages.productDetail.subtitle}
        />

        {/* Product Featured Image — aspect-square (1:1) + next/image per brand rules */}
        {product?.image && (
          <div className="my-6 overflow-hidden rounded-2xl border border-cream-200 shadow-soft bg-cream-50 aspect-square relative max-w-md mx-auto lg:mx-0">
            <Image
              src={product.image}
              alt={productName}
              fill
              sizes="(max-width: 1024px) 90vw, 448px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Technical Data Sheet (TDS) Table */}
        <div className="bg-white rounded-3xl border border-cream-200 overflow-hidden shadow-soft my-8">
          <div className="bg-primary-900 text-white px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="font-bold text-sm sm:text-base tracking-wide">
                {t.tableTitle}
              </h2>
              <p className="text-xs text-cream-200/80">
                {t.refCode} {product?.specCode || `SPEC-AGRI-${params.slug.toUpperCase()}`}
              </p>
            </div>
            <span className="text-xs font-bold text-accent-gold bg-primary-800 px-3 py-1 rounded-full border border-primary-700 self-start sm:self-auto">
              GRADE: {product?.grade || 'INDUSTRIAL F&B'}
            </span>
          </div>

          <div className="divide-y divide-cream-200 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-cream-50 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">{t.colTradeName}</span>
              <span className="sm:col-span-2 text-slate-800 font-medium">
                {productName}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">{t.colCategory}</span>
              <span className="sm:col-span-2 text-slate-800">
                {matchedIngredient?.categoryName || product?.category || t.defaultCategory}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-cream-50 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">{t.colMoisture}</span>
              <span className="sm:col-span-2 text-slate-800">
                {matchedIngredient?.moisture || product?.moisture || t.defaultMoisture}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">{t.colMesh}</span>
              <span className="sm:col-span-2 text-slate-800">
                {matchedIngredient?.mesh || product?.mesh || t.defaultMesh}
              </span>
            </div>

            {(matchedIngredient?.brix || product?.brix) && (
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-cream-50 gap-1 sm:gap-0">
                <span className="font-bold text-primary-850">{t.colBrix}</span>
                <span className="sm:col-span-2 text-slate-800">
                  {matchedIngredient?.brix || product?.brix}
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">{t.colShelfLife}</span>
              <span className="sm:col-span-2 text-slate-800">
                {matchedIngredient?.shelfLife || product?.shelfLife || t.defaultShelfLife}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-cream-50 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">{t.colPackaging}</span>
              <span className="sm:col-span-2 text-slate-800">
                {matchedIngredient?.packaging || product?.packaging || t.defaultPackaging}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">{t.colApplication}</span>
              <span className="sm:col-span-2 text-slate-800">
                {matchedIngredient?.applications || product?.application || t.defaultApplication}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-cream-50 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">{t.colMoq}</span>
              <span className="sm:col-span-2 text-slate-800">
                {product?.moq || t.defaultMoq}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
          {/* CTA chính: amber (chữ tối trên nền vàng) per brand rules */}
          <Button href={`/${currentLang}/contact`} variant="amber" size="md">
            <span>{t.btnQuoteSample}</span>
            <span className="ml-1">&rarr;</span>
          </Button>

          {product?.pdfUrl && (
            <a
              href={product.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-white text-primary-leaf border-2 border-primary-leaf hover:bg-primary-leaf hover:text-white transition-all shadow-xs"
            >
              {t.btnDownloadPdf}
            </a>
          )}

          <Button href={`/${currentLang}/products`} variant="pill" size="md">
            {t.btnBackCatalog}
          </Button>
        </div>
      </Container>
    </div>
  );
}
