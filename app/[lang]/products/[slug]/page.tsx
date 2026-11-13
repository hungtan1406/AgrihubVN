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

  const fallbackName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const title = matchedIngredient?.name || product?.name || fallbackName;
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
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-cream-50 border border-cream-200 shadow-xs">
                {product?.image || matchedIngredient?.image ? (
                  <Image
                    src={product?.image || matchedIngredient?.image || ''}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 384px"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                    <span className="text-4xl sm:text-5xl mb-2">🌿</span>
                    <span className="text-xs sm:text-sm font-medium">{title}</span>
                    <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                      [ẢNH THẬT CẦN BỔ SUNG]
                    </span>
                  </div>
                )}
                {product?.grade && (
                  <div className="absolute top-3 left-3 bg-primary-950/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/20">
                    {product.grade}
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
                  🌱 100% Tự nhiên Clean-label
                </span>
                <span className="px-3 py-1 bg-cream-100 text-primary-850 text-xs font-semibold rounded-full border border-cream-300">
                  🏭 Chuẩn hóa theo tiêu chuẩn công nghiệp
                </span>
                <span className="px-3 py-1 bg-cream-100 text-primary-850 text-xs font-semibold rounded-full border border-cream-300">
                  📦 Hỗ trợ OEM & Aseptic Bulk
                </span>
              </div>

              {/* Action Buttons with Lead Query Params */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-cream-200">
                <Button
                  href={`/${currentLang}/contact?product=${slug}&type=quote`}
                  variant="amber"
                  size="md"
                  className="font-bold shadow-xs hover:shadow-md"
                >
                  <span>{t.btnQuoteSample || 'Yêu cầu Báo giá'}</span>
                </Button>

                <Button
                  href={`/${currentLang}/contact?product=${slug}&type=sample`}
                  variant="primary"
                  size="md"
                  className="font-bold shadow-xs hover:shadow-md"
                >
                  <span>Nhận mẫu thử (Free Sample)</span>
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
              </div>
            </div>
          </div>

          {/* Technical Specifications Section */}
          <div className="mt-10 sm:mt-12 pt-8 border-t border-cream-200/90 space-y-8">
            {/* Section 1: Chỉ tiêu Lý - Hóa */}
            <div>
              <div className="flex items-center gap-2 pb-2 mb-4 border-b border-cream-200">
                <span className="w-2.5 h-2.5 rounded-xs bg-primary-leaf" />
                <h3 className="text-xs sm:text-sm font-bold text-primary-850 uppercase tracking-wider">
                  1. Chỉ tiêu Vật lý & Cảm quan (Physical & Sensory Specs)
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 bg-cream-50/70 rounded-xl border border-cream-200">
                  <span className="font-semibold text-slate-500 text-xs block mb-1">{t.colMoisture}</span>
                  <span className="font-bold text-primary-850">
                    {matchedIngredient?.moisture || product?.moisture || t.defaultMoisture}
                  </span>
                </div>
                <div className="p-3.5 bg-cream-50/70 rounded-xl border border-cream-200">
                  <span className="font-semibold text-slate-500 text-xs block mb-1">{t.colMesh}</span>
                  <span className="font-bold text-primary-850">
                    {matchedIngredient?.mesh || product?.mesh || t.defaultMesh}
                  </span>
                </div>
                <div className="p-3.5 bg-cream-50/70 rounded-xl border border-cream-200">
                  <span className="font-semibold text-slate-500 text-xs block mb-1">{t.colBrix}</span>
                  <span className="font-bold text-primary-850">
                    {matchedIngredient?.brix || product?.brix || (currentLang === 'vi' ? 'Tiêu chuẩn tự nhiên' : currentLang === 'zh' ? '按需调配' : 'Standardized')}
                  </span>
                </div>
                <div className="p-3.5 bg-cream-50/70 rounded-xl border border-cream-200">
                  <span className="font-semibold text-slate-500 text-xs block mb-1">{t.colShelfLife}</span>
                  <span className="font-bold text-primary-850">
                    {matchedIngredient?.shelfLife || product?.shelfLife || t.defaultShelfLife}
                  </span>
                </div>
              </div>
            </div>

            {/* Section 2: Quy cách Đóng gói & MOQ */}
            <div>
              <div className="flex items-center gap-2 pb-2 mb-4 border-b border-cream-200">
                <span className="w-2.5 h-2.5 rounded-xs bg-accent-gold" />
                <h3 className="text-xs sm:text-sm font-bold text-primary-850 uppercase tracking-wider">
                  2. Bao bì & Hậu cần Công nghiệp (Packaging & Logistics)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
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
