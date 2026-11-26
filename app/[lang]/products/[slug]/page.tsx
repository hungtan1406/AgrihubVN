import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Locale,
  getDictionary,
  isValidLocale,
  defaultLocale,
  getProductDetailPageTranslations,
  getIngredients,
  resolveProductTechDetail,
  localizeProductName,
  hasVietnameseChars,
} from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import {
  ProductHeroSection,
  ProductProcessStepper,
  ProductValueGrid,
  ProductApplicationsMatrix,
  ProductLogisticsStrip,
  ProductPartnerAdvisory,
  ProductTechnicalFaq,
} from '@/components/product';
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
  const rawName = product?.name || matchedIngredient?.name || slug.replace(/-/g, ' ');
  const productName =
    currentLang !== 'vi' && hasVietnameseChars(rawName)
      ? matchedIngredient?.name ||
        localizeProductName({
          viName: rawName,
          slug,
          lang: currentLang,
          categoryGroup: product?.categoryGroup || matchedIngredient?.category,
        })
      : rawName;

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

  // Sanitize specs to ensure placeholder texts like "Tiêu chuẩn xuất khẩu B2B" never leak
  const rawSpecs = matchedIngredient?.specs || product?.specs || '';
  const cleanSpecs = rawSpecs.replace(/Tiêu chuẩn xuất khẩu B2B/gi, '').trim();

  const rawDetailName = product?.name || matchedIngredient?.name || slug.replace(/-/g, ' ');
  const localizedProductName =
    currentLang !== 'vi' && hasVietnameseChars(rawDetailName)
      ? matchedIngredient?.name ||
        localizeProductName({
          viName: rawDetailName,
          slug,
          lang: currentLang,
          categoryGroup: product?.categoryGroup || matchedIngredient?.category,
        })
      : rawDetailName;

  // Resolve structured 7-section B2B product technology detail
  const techDetail = resolveProductTechDetail(slug, currentLang, {
    name: localizedProductName,
    category: matchedIngredient?.categoryName || product?.category,
    processingMethod: product?.processingMethod,
    categoryGroup: product?.categoryGroup || matchedIngredient?.category,
    specs: cleanSpecs,
    packaging: product?.packaging || matchedIngredient?.packaging,
    storage: product?.storage || matchedIngredient?.storage,
    shelfLife: product?.shelfLife || matchedIngredient?.shelfLife,
    image: product?.image || matchedIngredient?.image,
  });

  const displayTitle = techDetail.displayName || localizedProductName;

  return (
    <div className="py-8 sm:py-12 bg-cream-50/40">
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
              {displayTitle}
            </li>
          </ol>
        </nav>

        {/* Section A: Giới thiệu sản phẩm (Hero Block) */}
        <ProductHeroSection
          currentLang={currentLang}
          slug={slug}
          productName={displayTitle}
          vietnameseName={techDetail.vietnameseName}
          englishName={techDetail.englishName}
          typeBadge={techDetail.typeBadge}
          technologyType={techDetail.technologyType}
          italicIntro={techDetail.italicIntro}
          image={techDetail.image}
          imageAlt={techDetail.imageAlt}
          highlights={techDetail.highlights}
          pdfUrl={product?.pdfUrl}
          btnQuoteText={t.btnQuoteText || (currentLang === 'vi' ? 'Nhận báo giá B2B' : currentLang === 'zh' ? '获取 B2B 报价' : 'Request B2B Quote')}
          btnSampleText={t.btnSampleText || (currentLang === 'vi' ? 'Nhận mẫu thử R&D' : currentLang === 'zh' ? '申请研发打样' : 'Request R&D Sample')}
          btnConsultText={currentLang === 'vi' ? 'Liên hệ tư vấn kỹ thuật' : currentLang === 'zh' ? '技术应用咨询' : 'Technical Consultation'}
        />

        {/* Section B: Quy trình sản xuất (5-Step Process Stepper) */}
        <ProductProcessStepper
          title={techDetail.processTitle}
          intro={techDetail.processIntro}
          steps={techDetail.processSteps}
          technologyType={techDetail.technologyType}
        />

        {/* Section C: Vì sao chọn AGRIHUB? (B2B Value Grid) */}
        <ProductValueGrid
          title={techDetail.whyChooseTitle}
          intro={techDetail.whyChooseIntro}
          benefits={techDetail.benefits}
        />

        {/* Section D: Ứng dụng F&B (Grouped Applications Matrix) */}
        <ProductApplicationsMatrix
          title={techDetail.applicationsTitle}
          groups={techDetail.applicationGroups}
        />

        {/* Section E: Quy cách đóng gói & bảo quản (Logistics Strip) */}
        <ProductLogisticsStrip
          title={techDetail.packagingStorageTitle}
          specs={techDetail.packagingStorage}
          labels={{
            packaging: t.colPackaging || (currentLang === 'vi' ? 'Quy cách đóng gói' : currentLang === 'zh' ? '包装规格' : 'Packaging Standard'),
            shelfLife: t.colShelfLife || (currentLang === 'vi' ? 'Hạn sử dụng' : currentLang === 'zh' ? '保质期限' : 'Shelf Life'),
            storage: t.colStorage || (currentLang === 'vi' ? 'Hướng dẫn bảo quản' : currentLang === 'zh' ? '储存指引' : 'Storage Conditions'),
          }}
        />

        {/* Section F: AGRIHUB – Đối tác cung ứng và tư vấn (Partnership & Consultation) */}
        <ProductPartnerAdvisory
          currentLang={currentLang}
          slug={slug}
          title={techDetail.partnerTitle}
          intro={techDetail.partnerIntro}
          points={techDetail.partnerPoints}
          ctaText={techDetail.partnerCtaText}
        />

        {/* Section G: Câu hỏi thường gặp kỹ thuật (Vetted FAQs Accordion) */}
        <ProductTechnicalFaq
          title={techDetail.faqTitle}
          faqs={techDetail.faqs}
        />

        {/* Back to Catalog Navigation Button */}
        <div className="pt-4 pb-8 flex items-center justify-between">
          <Button href={`/${currentLang}/products`} variant="pill" size="md">
            {t.btnBackCatalog}
          </Button>

          <Button
            href={`/${currentLang}/contact?product=${slug}&type=quote`}
            variant="amber"
            size="md"
            className="font-bold shadow-xs hover:shadow-md"
          >
            {currentLang === 'vi' ? 'Gửi yêu cầu báo giá ngay' : currentLang === 'zh' ? '立即发送询价' : 'Send RFQ Inquiry'}
          </Button>
        </div>
      </Container>
    </div>
  );
}
