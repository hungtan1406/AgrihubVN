import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Locale, getDictionary, isValidLocale, defaultLocale } from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';

export async function generateStaticParams() {
  const slugs = ['dragon-fruit-powder', 'freeze-dried-mango', 'passion-fruit-puree'];
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
  const productName = params.slug.replace(/-/g, ' ');
  const capitalizedName = productName.charAt(0).toUpperCase() + productName.slice(1);
  return buildPageMetadata({
    lang: currentLang,
    pathname: `/products/${params.slug}`,
    title: `${capitalizedName} | TDS & Specification`,
    description: `${dict.pages.productDetail.subtitle} - ${capitalizedName}`,
  });
}

export default function ProductDetailPage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  const productName = params.slug.replace(/-/g, ' ');

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
          badge="B2B Technical Data Sheet"
          title={`Chi tiết nguyên liệu: ${productName}`}
          subtitle={dict.pages.productDetail.subtitle}
        />

        {/* Technical Data Sheet (TDS) Table Template */}
        <div className="bg-white rounded-3xl border border-cream-200 overflow-hidden shadow-soft my-8">
          <div className="bg-primary-900 text-white px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="font-bold text-sm sm:text-base tracking-wide">
                BẢNG THÔNG SỐ KỸ THUẬT TIÊU CHUẨN (STANDARD SPECIFICATION)
              </h2>
              <p className="text-xs text-cream-200/80">Mã tham chiếu: SPEC-AGRI-[CẦN BỔ SUNG]</p>
            </div>
            <span className="text-xs font-bold text-accent-gold bg-primary-800 px-3 py-1 rounded-full border border-primary-700 self-start sm:self-auto">
              GRADE: INDUSTRIAL F&B
            </span>
          </div>

          <div className="divide-y divide-cream-200 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-cream-50 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">Tên sản phẩm</span>
              <span className="sm:col-span-2 text-slate-800 font-medium">
                [CẦN BỔ SUNG: Tên thương mại & Tên khoa học của {params.slug}]
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">Độ ẩm (Moisture)</span>
              <span className="sm:col-span-2 text-slate-800">
                [CẦN BỔ SUNG: &le; 5.0% hoặc theo tiêu chuẩn yêu cầu]
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-cream-50 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">Độ mịn (Mesh Size)</span>
              <span className="sm:col-span-2 text-slate-800">
                [CẦN BỔ SUNG: 80 - 120 mesh qua sàng 95%]
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">Hạn sử dụng (Shelf Life)</span>
              <span className="sm:col-span-2 text-slate-800">
                [CẦN BỔ SUNG: 18 - 24 tháng kể từ ngày sản xuất]
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-cream-50 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">Quy cách đóng gói xuất khẩu</span>
              <span className="sm:col-span-2 text-slate-800">
                [CẦN BỔ SUNG: Túi nhôm hút chân không 5kg/10kg x thùng carton, phuy 20kg]
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-1 sm:gap-0">
              <span className="font-bold text-primary-850">Số lượng đặt hàng tối thiểu (MOQ)</span>
              <span className="sm:col-span-2 text-slate-800">
                [CẦN BỔ SUNG: 100 kg đối với đơn thử nghiệm, 500 kg đối với đơn sản xuất]
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
          <Button href={`/${currentLang}/products`} variant="pill" size="md">
            Quay lại Danh mục nguyên liệu
          </Button>
        </div>
      </Container>
    </div>
  );
}
