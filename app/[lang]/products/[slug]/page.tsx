import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
import ProductDetailActions from '@/components/ProductDetailActions';
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
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const currentLang: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(currentLang);
  const product = await getProductBySlug(slug, currentLang);
  const localizedIngredients = getIngredients(currentLang);
  const matchedIngredient = localizedIngredients.find((ing) => ing.id === slug);
  const productName = matchedIngredient?.name || product?.name || slug.replace(/-/g, ' ');

  return buildPageMetadata({
    lang: currentLang,
    pathname: `/products/${slug}`,
    title: `${productName} | TDS & Specification`,
    description: `${dict.pages.productDetail.subtitle} - ${productName}`,
  });
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const currentLang: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(currentLang);
  const t = getProductDetailPageTranslations(currentLang);
  const product = await getProductBySlug(slug, currentLang);
  const localizedIngredients = getIngredients(currentLang);
  const matchedIngredient = localizedIngredients.find((ing) => ing.id === slug);

  if (!product && !matchedIngredient) {
    notFound();
  }

  const title = matchedIngredient?.name || product?.name || slug;
  const categoryName = matchedIngredient?.categoryName || product?.category || t.defaultCategory;

  return (
    <div className="py-8 sm:py-12">
      <Container>
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <li>
              <Link href={`/${currentLang}`} className="hover:text-primary-leaf transition-colors">
                {dict.nav.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={`/${currentLang}/products`} className="hover:text-primary-leaf transition-colors">
                {dict.nav.products}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-primary-850 font-bold truncate max-w-[200px] sm:max-w-none" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        {/* Section Title */}
        <div className="mb-8">
          <SectionTitle
            as="h1"
            badge={categoryName}
            title={title}
            subtitle={dict.pages.productDetail.subtitle}
            className="mb-0"
          />
        </div>

        {/* Main Product Specification Card */}
        <div className="bg-white rounded-3xl border border-cream-200 shadow-soft p-6 sm:p-8 lg:p-10 mb-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left: Product Image (Square 1:1) */}
            <div className="w-full lg:w-96 shrink-0">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white border border-cream-200 shadow-xs">
                {product?.image || matchedIngredient?.image ? (
                  <Image
                    src={product?.image || matchedIngredient?.image || ''}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 384px"
                    className="object-contain p-3"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                    <span className="text-4xl sm:text-5xl mb-2">🌿</span>
                    <span className="text-xs sm:text-sm font-medium">{title}</span>
                    <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                      {t.placeholderImageText || '[ẢNH THẬT SẼ CẬP NHẬT]'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Technical Summary & Overview */}
            <div className="flex-1 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-primary-leaf tracking-wider uppercase block mb-1">
                  {t.refCode} {product?.specCode || `SPEC-AGRI-${slug.toUpperCase()}`} • ISO 22000 | HACCP | FDA COMPLIANT
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-primary-850">
                  {title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {matchedIngredient?.specs || product?.specs}
                </p>
              </div>

              {/* Highlight Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 bg-cream-100 text-primary-850 text-xs font-semibold rounded-full border border-cream-300">
                  {t.badgeCleanLabel}
                </span>
                <span className="px-3 py-1 bg-cream-100 text-primary-850 text-xs font-semibold rounded-full border border-cream-300">
                  {t.badgeStandardized}
                </span>
                <span className="px-3 py-1 bg-cream-100 text-primary-850 text-xs font-semibold rounded-full border border-cream-300">
                  {t.badgeBulkSupply}
                </span>
              </div>

              {/* Action Buttons with Lead Query Params & Spec Sheet Modal */}
              <ProductDetailActions
                currentLang={currentLang}
                slug={slug}
                productName={title}
                pdfUrl={product?.pdfUrl}
                btnQuoteText={t.btnQuoteText || t.btnQuoteSample || 'Yêu cầu Báo giá'}
                btnSampleText={t.btnSampleText || 'Nhận mẫu thử miễn phí'}
                btnDownloadPdfText={t.btnDownloadPdf || '📄 Tải thông số kỹ thuật (TDS)'}
              />
            </div>
          </div>

          {/* Technical Specifications Section */}
          <div className="mt-10 sm:mt-12 pt-8 border-t border-cream-200/90 space-y-8">
            {/* Section 1: Chỉ tiêu Lý - Hóa */}
            <div>
              <div className="flex items-center gap-2 pb-2 mb-4 border-b border-cream-200">
                <span className="w-2.5 h-2.5 rounded-xs bg-primary-leaf" />
                <h3 className="text-xs sm:text-sm font-bold text-primary-850 uppercase tracking-wider">
                  {t.sectionPhysical}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 bg-cream-50/70 rounded-xl border border-cream-200">
                  <span className="font-semibold text-slate-500 text-xs block mb-1">{t.colMoisture}</span>
                  <span className="font-bold text-primary-850">
                    {product?.moisture || matchedIngredient?.moisture || t.defaultMoisture}
                  </span>
                </div>
                <div className="p-3.5 bg-cream-50/70 rounded-xl border border-cream-200">
                  <span className="font-semibold text-slate-500 text-xs block mb-1">{t.colMesh}</span>
                  <span className="font-bold text-primary-850">
                    {product?.mesh || matchedIngredient?.mesh || t.defaultMesh}
                  </span>
                </div>
                <div className="p-3.5 bg-cream-50/70 rounded-xl border border-cream-200">
                  <span className="font-semibold text-slate-500 text-xs block mb-1">{t.colBrix}</span>
                  <span className="font-bold text-primary-850">
                    {product?.brix || matchedIngredient?.brix || (currentLang === 'vi' ? 'Tiêu chuẩn tự nhiên' : currentLang === 'zh' ? '自然风味标准' : 'Natural standard')}
                  </span>
                </div>
                <div className="p-3.5 bg-cream-50/70 rounded-xl border border-cream-200">
                  <span className="font-semibold text-slate-500 text-xs block mb-1">{t.colShelfLife}</span>
                  <span className="font-bold text-primary-850">
                    {product?.shelfLife || matchedIngredient?.shelfLife || t.defaultShelfLife}
                  </span>
                </div>
              </div>
            </div>

            {/* Section 2: Quy cách Đóng gói & MOQ */}
            <div>
              <div className="flex items-center gap-2 pb-2 mb-4 border-b border-cream-200">
                <span className="w-2.5 h-2.5 rounded-xs bg-accent-gold" />
                <h3 className="text-xs sm:text-sm font-bold text-primary-850 uppercase tracking-wider">
                  {t.sectionPackaging}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 bg-white rounded-xl border border-cream-200 shadow-2xs">
                  <span className="font-semibold text-slate-500 text-xs block mb-1">{t.colPackaging}</span>
                  <span className="text-slate-800 font-medium">
                    {product?.packaging || matchedIngredient?.packaging || t.defaultPackaging}
                  </span>
                </div>
                {(matchedIngredient?.storage || product?.storage) && (
                  <div className="p-3.5 bg-white rounded-xl border border-cream-200 shadow-2xs">
                    <span className="font-semibold text-slate-500 text-xs block mb-1">{t.colStorage || (currentLang === 'en' ? 'Storage Conditions' : currentLang === 'zh' ? '储存条件与温度' : 'Điều kiện bảo quản')}</span>
                    <span className="text-slate-800 font-medium">
                      {product?.storage || matchedIngredient?.storage}
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
                  {t.sectionApplication}
                </h3>
              </div>
              <div className="p-4 bg-cream-50/60 rounded-xl border border-cream-200 text-xs sm:text-sm">
                <p className="text-slate-800 font-medium leading-relaxed">
                  {currentLang === 'vi'
                    ? 'Ứng dụng chính trong sản xuất thực phẩm & đồ uống'
                    : currentLang === 'zh'
                    ? '主要应用于食品与饮料生产制造'
                    : 'Main applications in food & beverage manufacturing'}
                </p>
              </div>
            </div>

            {/* R&D Customization Notice */}
            <div className="p-4 bg-primary-50 rounded-2xl border border-primary-200/80 flex items-start gap-3 text-xs sm:text-sm text-primary-950">
              <span className="text-primary-leaf text-lg leading-none mt-0.5">ℹ</span>
              <p className="leading-relaxed">
                <strong>{t.rdNoticeTitle}</strong> {t.rdNoticeDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="pt-2">
          <Button href={`/${currentLang}/products`} variant="pill" size="md">
            {t.btnBackCatalog}
          </Button>
        </div>
      </Container>
    </div>
  );
}
