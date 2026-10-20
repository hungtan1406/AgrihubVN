import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Locale, getDictionary, isValidLocale, defaultLocale } from '@/lib/i18n';
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
  const product = await getProductBySlug(params.slug);
  const productName = product?.name || params.slug.replace(/-/g, ' ');

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
  const product = await getProductBySlug(params.slug);

  const fallbackName = params.slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const productName = product?.name || fallbackName;

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
          badge={product?.category ? `B2B Ingredient • ${product.category}` : 'B2B Technical Data Sheet'}
          title={`Chi tiết nguyên liệu: ${productName}`}
          subtitle={product?.specs || dict.pages.productDetail.subtitle}
        />

        {/* Product Featured Image (if available) */}
        {product?.image && (
          <div className="my-6 overflow-hidden rounded-2xl border border-cream-200 shadow-soft max-h-96 bg-cream-50">
            <img
              src={product.image}
              alt={productName}
              className="w-full h-full object-cover max-h-96"
            />
          </div>
        )}

        {/* Technical Data Sheet (TDS) Table */}
        <div className="bg-white rounded-3xl border border-cream-200 overflow-hidden shadow-soft my-8">
          <div className="bg-primary-900 text-white px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="font-bold text-sm sm:text-base tracking-wide">
                BẢNG THÔNG SỐ KỸ THUẬT TIÊU CHUẨN (STANDARD SPECIFICATION)
              </h2>
              <p className="text-xs text-cream-200/80">
                Mã tham chiếu: {product?.specCode || `SPEC-AGRI-${params.slug.toUpperCase()}`}
              </p>
            </div>
            <span className="text-xs font-bold text-accent-gold bg-primary-800 px-3 py-1 rounded-full border border-primary-700 self-start sm:self-auto">
              GRADE: {product?.grade || 'INDUSTRIAL F&B'}
            </span>
          </div>

          <div className="divide-y divide-cream-200 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-cream-50 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">Tên thương mại & Sản phẩm</span>
              <span className="sm:col-span-2 text-slate-800 font-medium">
                {productName}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">Phân loại danh mục</span>
              <span className="sm:col-span-2 text-slate-800">
                {product?.category || 'Nguyên liệu nông sản chế biến'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-cream-50 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">Độ ẩm (Moisture)</span>
              <span className="sm:col-span-2 text-slate-800">
                {product?.moisture || '≤ 5.0% hoặc chuẩn hóa theo yêu cầu nhà máy'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">Độ mịn / Kích cỡ (Mesh Size)</span>
              <span className="sm:col-span-2 text-slate-800">
                {product?.mesh || '80 - 120 mesh qua sàng 95%'}
              </span>
            </div>

            {product?.brix && (
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-cream-50 gap-1 sm:gap-0">
                <span className="font-bold text-primary-850">Độ ngọt / Chỉ số Brix</span>
                <span className="sm:col-span-2 text-slate-800">
                  {product.brix}
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">Hạn sử dụng (Shelf Life)</span>
              <span className="sm:col-span-2 text-slate-800">
                {product?.shelfLife || '18 - 24 tháng kể từ ngày sản xuất'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-cream-50 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">Quy cách đóng gói xuất khẩu</span>
              <span className="sm:col-span-2 text-slate-800">
                {product?.packaging || 'Túi nhôm hút chân không 5kg/10kg x thùng carton, phuy 20kg'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">Ứng dụng chính trong sản xuất</span>
              <span className="sm:col-span-2 text-slate-800">
                {product?.application || 'Bánh kẹo, đồ uống, sữa chua, thực phẩm dinh dưỡng'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-cream-50 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">Số lượng đặt hàng tối thiểu (MOQ)</span>
              <span className="sm:col-span-2 text-slate-800">
                {product?.moq || '100 kg đối với đơn thử nghiệm, 500 kg đối với đơn sản xuất'}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
          <Button href={`/${currentLang}/contact`} variant="primary" size="md">
            <span>Yêu cầu Báo giá & Nhận mẫu thử (Lab Sample)</span>
            <span className="ml-1">&rarr;</span>
          </Button>

          {product?.pdfUrl && (
            <a
              href={product.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-white text-primary-leaf border-2 border-primary-leaf hover:bg-primary-leaf hover:text-white transition-all shadow-xs"
            >
              📄 Tải Spec & TDS (PDF)
            </a>
          )}

          <Button href={`/${currentLang}/products`} variant="pill" size="md">
            Quay lại Danh mục nguyên liệu
          </Button>
        </div>
      </Container>
    </div>
  );
}
