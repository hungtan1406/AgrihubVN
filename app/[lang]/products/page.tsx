import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Locale, getDictionary, isValidLocale, defaultLocale } from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';

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

export default function ProductsPage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);

  const sampleProducts = [
    {
      slug: 'dragon-fruit-powder',
      category: 'Bột trái cây',
      name: 'Bột Thanh Long Đỏ (Red Dragon Fruit Powder)',
      specs: 'Độ ẩm ≤ 5% | 80-100 mesh | 100% tự nhiên',
      application: 'Bánh kẹo, Đồ uống, Sữa chua, Tạo màu tự nhiên',
    },
    {
      slug: 'freeze-dried-mango',
      category: 'Trái cây sấy',
      name: 'Xoài Sấy Thăng Hoa (Freeze-Dried Mango)',
      specs: 'Độ ẩm ≤ 4% | Cắt lát 5-7mm | Giữ nguyên hình thái & vị',
      application: 'Ngũ cốc ăn sáng, Socola bọc trái cây, Snack cao cấp',
    },
    {
      slug: 'passion-fruit-puree',
      category: 'Nước cốt & Puree',
      name: 'Nước Cốt Chanh Dây Không Hạt (Passion Fruit Puree)',
      specs: 'Brix 14-16% | Thanh trùng | Đóng phuy vô trùng 200L',
      application: 'Sản xuất nước ép, Nước giải khát, Si-rô, Kem',
    },
  ];

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

        {/* Product Grid Sample */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {sampleProducts.map((p) => (
            <div
              key={p.slug}
              className="bg-white border border-cream-200 rounded-2xl p-6 shadow-soft flex flex-col justify-between hover:border-primary-leaf transition-colors"
            >
              <div>
                <span className="text-xs font-bold text-primary-leaf uppercase tracking-wider bg-primary-leaf/10 px-3 py-1 rounded-full border border-primary-leaf/20">
                  {p.category}
                </span>
                <h2 className="text-lg font-bold text-primary-850 mt-4 mb-2">{p.name}</h2>
                <div className="space-y-1.5 text-xs text-slate-600 mb-4 bg-cream-50 p-3.5 rounded-xl border border-cream-200/60">
                  <p>
                    <strong className="text-primary-850">Thông số kỹ thuật:</strong> {p.specs}
                  </p>
                  <p>
                    <strong className="text-primary-850">Ứng dụng chính:</strong> {p.application}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                <Link
                  href={`/${currentLang}/products/${p.slug}`}
                  className="text-xs font-bold text-primary-leaf hover:text-primary-leafHover"
                >
                  Xem Spec & TDS &rarr;
                </Link>
                <Button href={`/${currentLang}/contact`} variant="pill" size="sm">
                  Xin mẫu thử
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pending Data Notice */}
        <div className="mt-12 p-6 bg-cream-100 rounded-2xl border border-cream-300 text-center">
          <p className="text-sm text-primary-850 font-bold">
            {dict.common.placeholderNotice}
          </p>
          <p className="text-xs text-slate-600 mt-1">
            [CẦN BỔ SUNG: Danh mục toàn bộ các loại bột trái cây, trái cây sấy, nước cốt và bảng TDS đầy đủ từ Agrihub]
          </p>
        </div>
      </Container>
    </div>
  );
}
