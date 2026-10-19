import React from 'react';
import type { Metadata } from 'next';
import { Locale, getDictionary, isValidLocale, defaultLocale } from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

interface PageProps {
  params: { lang: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);

  return buildPageMetadata({
    lang: currentLang,
    path: '/contact',
    title: dict.pages.contact.title,
    description: dict.pages.contact.subtitle,
  });
}

export default function ContactPage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Target Audience Bar */}
        <FadeIn direction="up">
          <div className="bg-white border border-cream-200 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
            <div>
              <span className="text-xs font-bold text-primary-leaf uppercase tracking-wider block">
                🌿 {dict.common.targetCustomer}:
              </span>
              <span className="text-sm text-primary-850 font-bold">
                {dict.pages.contact.targetAudience}
              </span>
            </div>
            <span className="text-xs text-primary-leaf font-extrabold bg-cream-200/80 px-3 py-1.5 rounded-full border border-cream-300">
              Phản hồi 24h
            </span>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <SectionTitle
            as="h1"
            badge="B2B Inquiry"
            title={dict.pages.contact.title}
            subtitle={dict.pages.contact.subtitle}
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
          {/* Contact Details Column */}
          <FadeIn direction="up" delay={0.15}>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-cream-200 shadow-soft">
                <h2 className="text-base font-extrabold text-primary-850 mb-4">
                  Kênh liên hệ trực tiếp B2B
                </h2>
                <div className="space-y-4 text-xs text-slate-600">
                  <div>
                    <strong className="block text-primary-850 mb-1">Email phòng Thương mại & Xuất khẩu:</strong>
                    <span className="text-primary-leaf font-bold text-sm">sales@agrihub.vn</span>
                    <span className="text-slate-400 block mt-0.5">[CẦN BỔ SUNG: Email chính thức]</span>
                  </div>
                  <div>
                    <strong className="block text-primary-850 mb-1">Hotline / WhatsApp / WeChat:</strong>
                    <span className="text-primary-leaf font-bold text-sm">[CẦN BỔ SUNG: Hotline]</span>
                  </div>
                  <div>
                    <strong className="block text-primary-850 mb-1">Trụ sở chính:</strong>
                    <span>[CẦN BỔ SUNG: Địa chỉ văn phòng giao dịch]</span>
                  </div>
                  <div>
                    <strong className="block text-primary-850 mb-1">Cơ sở sản xuất & Kho hàng:</strong>
                    <span>[CẦN BỔ SUNG: Địa chỉ nhà máy chế biến nông sản]</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-900 to-primary-850 text-cream-100 p-6 rounded-3xl shadow-soft border border-primary-700/40">
                <h3 className="font-bold text-sm text-accent-gold mb-2 flex items-center gap-1.5">
                  <span>🌿</span>
                  <span>Cam kết dịch vụ B2B</span>
                </h3>
                <p className="text-xs text-cream-200/80 leading-relaxed mb-3">
                  • Phản hồi bảng giá kỹ thuật và thông số TDS trong vòng 24 giờ làm việc.
                </p>
                <p className="text-xs text-cream-200/80 leading-relaxed mb-3">
                  • Hỗ trợ gửi mẫu thử phòng Lab qua đường chuyển phát nhanh quốc tế.
                </p>
                <p className="text-xs text-cream-200/80 leading-relaxed">
                  • Ký kết thỏa thuận bảo mật công thức (NDA) đối với các dự án gia công OEM.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft">
                <h2 className="text-lg font-extrabold text-primary-850 mb-2">
                  Biểu mẫu yêu cầu Báo giá & Mẫu thử B2B
                </h2>
                <p className="text-xs text-slate-500 mb-6">
                  Vui lòng cung cấp thông tin để chuyên viên thương mại Agrihub chuẩn bị hồ sơ kỹ thuật chính xác nhất.
                </p>

                <ContactForm dict={dict} />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </div>
  );
}
