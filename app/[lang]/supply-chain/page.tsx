import React from 'react';
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
    pathname: '/supply-chain',
    title: dict.pages.supplyChain.title,
    description: dict.pages.supplyChain.subtitle,
  });
}

export default function SupplyChainPage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);

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
              {dict.pages.supplyChain.targetAudience}
            </span>
          </div>
          <Button href={`/${currentLang}/contact`} variant="primary" size="sm" className="shrink-0">
            {dict.pages.supplyChain.primaryCta} &rarr;
          </Button>
        </div>

        <SectionTitle
          as="h1"
          badge="Cơ Sở Hạ Tầng & Vùng Trồng"
          title={dict.pages.supplyChain.title}
          subtitle={dict.pages.supplyChain.subtitle}
        />

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          <div className="bg-white p-5 rounded-2xl border border-cream-200 shadow-soft text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary-850 block">10+</span>
            <span className="text-xs text-slate-600 font-bold mt-1 block">Năm kinh nghiệm xuất khẩu</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-cream-200 shadow-soft text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary-leaf block">[CẦN BỔ SUNG]</span>
            <span className="text-xs text-slate-600 font-bold mt-1 block">Diện tích nhà xưởng chế biến (m²)</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-cream-200 shadow-soft text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary-850 block">[CẦN BỔ SUNG]</span>
            <span className="text-xs text-slate-600 font-bold mt-1 block">Sản lượng cung ứng (tấn/năm)</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-cream-200 shadow-soft text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary-leaf block">[CẦN BỔ SUNG]</span>
            <span className="text-xs text-slate-600 font-bold mt-1 block">Quy mô vùng trồng liên kết (ha)</span>
          </div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-6 sm:space-y-8 my-10">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft">
            <h2 className="text-lg font-bold text-primary-850 mb-3">1. Vùng nguyên liệu nông sản Việt Nam</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Agrihub liên kết trực tiếp với các hợp tác xã và nông hộ tại các vựa trái cây nhiệt đới nổi tiếng của Việt Nam (Đồng bằng Sông Cửu Long, Tây Nguyên, Bình Thuận...). Nguồn quả tươi được tuyển chọn kỹ càng, kiểm soát chặt chẽ dư lượng thuốc BVTV ngay từ khâu canh tác.
            </p>
            <p className="text-xs text-slate-500 italic bg-cream-50 p-3 rounded-xl border border-cream-200">
              [CẦN BỔ SUNG: Bản đồ vùng trồng liên kết chi tiết và hình ảnh mùa vụ thu hoạch]
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft">
            <h2 className="text-lg font-bold text-primary-850 mb-3">2. Công nghệ chế biến & Hệ thống kho bãi</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Trang bị hệ thống máy sấy thăng hoa (Freeze Dryer), sấy nhiệt đối lưu và thiết bị nghiền bột siêu mịn đạt chuẩn vệ sinh an toàn công nghiệp. Kho bảo quản duy trì nhiệt độ và độ ẩm tiêu chuẩn giúp ổn định chất lượng bột và quả sấy quanh năm.
            </p>
            <p className="text-xs text-slate-500 italic bg-cream-50 p-3 rounded-xl border border-cream-200">
              [CẦN BỔ SUNG: Hình ảnh máy móc dây chuyền sản xuất và hệ thống kho lạnh]
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="text-center pt-4">
          <Button href={`/${currentLang}/contact`} variant="primary" size="lg">
            <span>{dict.pages.supplyChain.primaryCta}</span>
            <span className="ml-1">&rarr;</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
