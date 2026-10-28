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
    <div className="py-8 sm:py-12">
      <Container>
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-4 flex items-center gap-2 flex-wrap">
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

        {/* Product Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 pb-4 sm:pb-5 border-b border-cream-200/80">
          <SectionTitle
            as="h1"
            badge={
              (matchedIngredient?.categoryName || product?.category)
                ? `B2B Ingredient • ${matchedIngredient?.categoryName || product?.category}`
                : 'B2B Technical Data Sheet'
            }
            title={`${t.specDetailTitle} ${productName}`}
            subtitle={matchedIngredient?.specs || product?.specs || dict.pages.productDetail.subtitle}
            className="mb-0"
          />
          <Button
            href={`/${currentLang}/contact`}
            variant="primary"
            size="md"
            className="shrink-0 self-start md:self-auto shadow-sm"
          >
            {dict.pages.productDetail.primaryCta}
          </Button>
        </div>

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

        {/* Technical Data Sheet (TDS) Certificate Container */}
        <div className="bg-white rounded-3xl border border-cream-200/90 overflow-hidden shadow-soft my-6 sm:my-8">
          {/* Certificate Header */}
          <div className="bg-primary-950 text-white px-6 sm:px-8 py-5 flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-primary-900">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-accent-gold" />
                <span className="text-xs text-accent-gold font-bold uppercase tracking-wider">
                  Technical Data Sheet (TDS)
                </span>
              </div>
              <h2 className="font-extrabold text-lg sm:text-xl text-white tracking-tight">
                {t.tableTitle}
              </h2>
              <p className="text-xs text-cream-200/70 font-mono mt-0.5">
                {t.refCode} {product?.specCode || `SPEC-AGRI-${params.slug.toUpperCase()}`} • ISO 22000 | HACCP | FDA COMPLIANT
              </p>
            </div>
            <div className="flex items-center gap-2 self-start md:self-auto">
              <span className="text-xs font-bold text-accent-gold bg-primary-900/90 px-3.5 py-1.5 rounded-full border border-primary-800 shadow-2xs">
                GRADE: {product?.grade || 'INDUSTRIAL F&B'}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Section 1: Chỉ tiêu Lý hóa & Cảm quan */}
            <div>
              <div className="flex items-center gap-2 pb-2 mb-3 border-b border-cream-200">
                <span className="w-2.5 h-2.5 rounded-xs bg-primary-leaf" />
                <h3 className="text-xs sm:text-sm font-bold text-primary-850 uppercase tracking-wider">
                  1. Chỉ tiêu Lý hóa & Cảm quan (Physical & Chemical Standards)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 bg-cream-50/80 rounded-xl border border-cream-200/60 flex flex-col justify-between">
                  <span className="font-semibold text-slate-500 text-xs">{t.colTradeName}</span>
                  <span className="font-bold text-primary-950 mt-1">{productName}</span>
                </div>
                <div className="p-3.5 bg-cream-50/80 rounded-xl border border-cream-200/60 flex flex-col justify-between">
                  <span className="font-semibold text-slate-500 text-xs">{t.colCategory}</span>
                  <span className="font-bold text-primary-950 mt-1">
                    {matchedIngredient?.categoryName || product?.category || t.defaultCategory}
                  </span>
                </div>
                <div className="p-3.5 bg-cream-50/80 rounded-xl border border-cream-200/60 flex flex-col justify-between">
                  <span className="font-semibold text-slate-500 text-xs">{t.colMoisture}</span>
                  <span className="font-bold text-primary-leaf mt-1">
                    {matchedIngredient?.moisture || product?.moisture || t.defaultMoisture}
                  </span>
                </div>
                <div className="p-3.5 bg-cream-50/80 rounded-xl border border-cream-200/60 flex flex-col justify-between">
                  <span className="font-semibold text-slate-500 text-xs">{t.colMesh}</span>
                  <span className="font-bold text-primary-leaf mt-1">
                    {matchedIngredient?.mesh || product?.mesh || t.defaultMesh}
                  </span>
                </div>
                {(matchedIngredient?.brix || product?.brix) && (
                  <div className="p-3.5 bg-cream-50/80 rounded-xl border border-cream-200/60 flex flex-col justify-between">
                    <span className="font-semibold text-slate-500 text-xs">{t.colBrix}</span>
                    <span className="font-bold text-primary-950 mt-1">
                      {matchedIngredient?.brix || product?.brix}
                    </span>
                  </div>
                )}
                <div className="p-3.5 bg-cream-50/80 rounded-xl border border-cream-200/60 flex flex-col justify-between">
                  <span className="font-semibold text-slate-500 text-xs">{t.colShelfLife}</span>
                  <span className="font-bold text-primary-950 mt-1">
                    {matchedIngredient?.shelfLife || product?.shelfLife || t.defaultShelfLife}
                  </span>
                </div>
              </div>
            </div>

            {/* Section 2: Bao bì, Lưu kho & Hậu cần Công nghiệp */}
            <div>
              <div className="flex items-center gap-2 pb-2 mb-3 border-b border-cream-200">
                <span className="w-2.5 h-2.5 rounded-xs bg-accent-gold" />
                <h3 className="text-xs sm:text-sm font-bold text-primary-850 uppercase tracking-wider">
                  2. Bao bì & Hậu cần Công nghiệp (Packaging & Logistics)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 bg-white rounded-xl border border-cream-200 shadow-2xs">
                  <span className="font-semibold text-slate-500 text-xs block mb-1">{t.colPackaging}</span>
                  <span className="text-slate-800 font-medium">
                    {matchedIngredient?.packaging || product?.packaging || t.defaultPackaging}
                  </span>
                </div>
                {(matchedIngredient?.storage || product?.storage) && (
                  <div className="p-3.5 bg-white rounded-xl border border-cream-200 shadow-2xs">
                    <span className="font-semibold text-slate-500 text-xs block mb-1">{t.colStorage || 'Bảo quản'}</span>
                    <span className="text-slate-800 font-medium">
                      {matchedIngredient?.storage || product?.storage}
                    </span>
                  </div>
                )}
                <div className="p-3.5 bg-white rounded-xl border border-cream-200 shadow-2xs">
                  <span className="font-semibold text-slate-500 text-xs block mb-1">{t.colMoq}</span>
                  <span className="text-slate-800 font-medium">
                    {product?.moq || t.defaultMoq}
                  </span>
                </div>
              </div>
            </div>

            {/* Section 3: Ứng dụng F&B */}
            <div>
              <div className="flex items-center gap-2 pb-2 mb-3 border-b border-cream-200">
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600" />
                <h3 className="text-xs sm:text-sm font-bold text-primary-850 uppercase tracking-wider">
                  3. Ứng dụng & Formulations (Applications & Clean Label)
                </h3>
              </div>
              <div className="p-4 bg-cream-50/60 rounded-xl border border-cream-200 text-xs sm:text-sm">
                <span className="font-semibold text-slate-500 text-xs block mb-1">{t.colApplication}</span>
                <p className="text-slate-800 leading-relaxed">
                  {matchedIngredient?.applications || product?.application || t.defaultApplication}
                </p>
              </div>
            </div>

            {/* R&D Customization Notice */}
            <div className="p-4 bg-primary-50 rounded-2xl border border-primary-200/80 flex items-start gap-3 text-xs sm:text-sm text-primary-950">
              <span className="text-primary-leaf text-lg leading-none mt-0.5">ℹ</span>
              <p className="leading-relaxed">
                <strong>Cam kết tùy biến theo R&D:</strong> Agrihub có thể điều chỉnh chuẩn hóa các chỉ số kỹ thuật (độ ẩm, độ mịn, tỷ lệ phối trộn) và quy cách đóng gói vô trùng theo yêu cầu chuyên biệt cho từng dây chuyền sản xuất của đối tác.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
          {/* CTA chính: amber (chữ tối trên nền vàng) per brand rules */}
          <Button href={`/${currentLang}/contact`} variant="amber" size="md">
            <span>{t.btnQuoteSample}</span>
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
