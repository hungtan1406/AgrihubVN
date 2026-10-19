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
    pathname: '/quality-certifications',
    title: dict.pages.qualityCertifications.title,
    description: dict.pages.qualityCertifications.subtitle,
  });
}

export default function QualityCertificationsPage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);

  const certPlaceholders = [
    {
      code: 'ISO 22000',
      title: 'Hệ thống Quản lý An toàn Thực phẩm',
      desc: 'Đảm bảo kiểm soát rủi ro an toàn thực phẩm xuyên suốt toàn bộ chuỗi chế biến và đóng gói.',
      status: '[CẦN BỔ SUNG: Số hiệu chứng nhận & Bản scan]',
    },
    {
      code: 'HACCP',
      title: 'Phân tích Mối nguy & Điểm kiểm soát tới hạn',
      desc: 'Quy trình phòng ngừa mối nguy vi sinh, hóa học và vật lý trong sản xuất nguyên liệu F&B.',
      status: '[CẦN BỔ SUNG: Số hiệu chứng nhận & Bản scan]',
    },
    {
      code: 'HALAL',
      title: 'Chứng nhận Tiêu chuẩn Hồi giáo',
      desc: 'Đạt chuẩn xuất khẩu sang các thị trường Trung Đông (UAE, Saudi Arabia) và Đông Nam Á.',
      status: '[CẦN BỔ SUNG: Tổ chức chứng nhận & Số hiệu]',
    },
    {
      code: 'FDA / CO-CQ',
      title: 'Hồ sơ Pháp lý & Truy xuất Nguồn gốc',
      desc: 'Giấy chứng nhận xuất xứ hàng hóa (CO các form) và chứng thư kiểm dịch thực vật (Phytosanitary).',
      status: '[CẦN BỔ SUNG: Mẫu CO & Chứng nhận đăng ký]',
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
              {dict.pages.qualityCertifications.targetAudience}
            </span>
          </div>
          <Button href={`/${currentLang}/contact`} variant="primary" size="sm" className="shrink-0">
            {dict.pages.qualityCertifications.primaryCta} &rarr;
          </Button>
        </div>

        <SectionTitle
          as="h1"
          badge="Kiểm Soát Chất Lượng"
          title={dict.pages.qualityCertifications.title}
          subtitle={dict.pages.qualityCertifications.subtitle}
        />

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {certPlaceholders.map((c) => (
            <div
              key={c.code}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-cream-200 shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-primary-leaf bg-cream-100 px-3 py-1 rounded-full border border-cream-300">
                    {c.code}
                  </span>
                  <span className="text-[10px] text-accent-gold font-bold bg-cream-100 px-2.5 py-0.5 rounded-full border border-cream-200">
                    BẢO LƯU HỒ SƠ
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-primary-850 mb-2">{c.title}</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{c.desc}</p>
              </div>
              <div className="pt-3 border-t border-cream-200 text-xs text-slate-500">
                {c.status}
              </div>
            </div>
          ))}
        </div>

        {/* Laboratory Testing Protocol */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft my-8">
          <h2 className="text-base sm:text-lg font-bold text-primary-850 mb-4">
            Quy trình kiểm nghiệm chất lượng (COA) trên từng lô hàng
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200">
              <strong className="block text-primary-850 mb-1">Chỉ tiêu vật lý & Hóa học:</strong>
              Độ ẩm, tro tổng số, độ mịn mesh, brix, độ pH, kim loại nặng (Pb, Cd, As).
            </div>
            <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200">
              <strong className="block text-primary-850 mb-1">Chỉ tiêu vi sinh vật:</strong>
              Tổng số vi sinh vật hiếu khí, Coliforms, E.coli, Salmonella, Nấm men và nấm mốc.
            </div>
            <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200">
              <strong className="block text-primary-850 mb-1">Kiểm soát an toàn:</strong>
              Dư lượng thuốc bảo vệ thực vật, không chất bảo quản cấm, không phẩm màu tổng hợp.
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4 italic text-center bg-cream-50 p-3 rounded-xl border border-cream-200">
            [CẦN BỔ SUNG: File scan bản mẫu Phiếu phân tích kiểm nghiệm COA thực tế của Agrihub]
          </p>
        </div>

        <div className="text-center pt-4">
          <Button href={`/${currentLang}/contact`} variant="primary" size="lg">
            <span>{dict.pages.qualityCertifications.primaryCta}</span>
            <span className="ml-1">&rarr;</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
