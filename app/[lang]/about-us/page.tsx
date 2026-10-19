import React from 'react';
import type { Metadata } from 'next';
import { Locale, getDictionary, isValidLocale, defaultLocale } from '@/lib/i18n';
import { buildPageMetadata } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import FadeIn from '@/components/animations/FadeIn';

interface PageProps {
  params: { lang: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);

  return buildPageMetadata({
    lang: currentLang,
    path: '/about-us',
    title: dict.pages.aboutUs.title,
    description: dict.pages.aboutUs.subtitle,
  });
}

export default function AboutUsPage({ params }: PageProps) {
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
                {dict.pages.aboutUs.targetAudience}
              </span>
            </div>
            <Button href={`/${currentLang}/contact`} variant="primary" size="sm" className="shrink-0">
              {dict.pages.aboutUs.primaryCta} &rarr;
            </Button>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <SectionTitle
            as="h1"
            badge="Về Chúng Tôi"
            title={dict.pages.aboutUs.title}
            subtitle={dict.pages.aboutUs.subtitle}
          />
        </FadeIn>

        {/* Narrative & History */}
        <div className="space-y-8 my-10">
          <FadeIn direction="up">
            <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-soft">
              <h2 className="text-xl font-extrabold text-primary-850 mb-3">
                Tầm nhìn: "Từ nông trại Việt Nam đến thị trường thế giới"
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Việt Nam sở hữu thổ nhưỡng nhiệt đới trù phú với các loại trái cây có hương vị và màu sắc đặc trưng hiếm nơi nào có được. Với hơn 10 năm kinh nghiệm trong ngành chế biến nông sản, Agrihub ra đời với sứ mệnh nâng tầm giá trị nông sản bản địa bằng công nghệ sấy và chiết xuất hiện đại, đưa nguyên liệu chất lượng cao của Việt Nam vào chuỗi cung ứng của các tập đoàn sản xuất thực phẩm và đồ uống quốc tế.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-soft">
                <span className="text-2xl mb-2 block">🎯</span>
                <h3 className="font-bold text-primary-850 text-base mb-2">Chất lượng thực chất</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nói bằng số liệu kỹ thuật rõ ràng, không hứa hẹn chung chung. Mọi cam kết về độ ẩm, độ mịn và an toàn vi sinh đều được chứng minh qua kiểm nghiệm độc lập.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-soft">
                <span className="text-2xl mb-2 block">🤝</span>
                <h3 className="font-bold text-primary-850 text-base mb-2">Cùng phát triển bền vững</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Đúng với thông điệp "Growing Value Together", chúng tôi đồng hành lâu dài cùng bà con nông dân vùng nguyên liệu và là đối tác cung ứng ổn định của các nhà máy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-soft">
                <span className="text-2xl mb-2 block">🌐</span>
                <h3 className="font-bold text-primary-850 text-base mb-2">Chuẩn hóa quốc tế</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tuân thủ nghiêm ngặt các quy tắc thương mại Incoterms 2020, hoàn thiện đầy đủ hồ sơ pháp lý hải quan giúp quá trình thông quan của đối tác diễn ra thông suốt.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="p-6 bg-cream-200/50 rounded-2xl border border-cream-300 text-xs text-slate-600 space-y-2">
              <p>• [CẦN BỔ SUNG: Mốc năm thành lập chính xác của công ty]</p>
              <p>• [CẦN BỔ SUNG: Cơ cấu ban lãnh đạo và đội ngũ kỹ thuật R&D]</p>
              <p>• [CẦN BỔ SUNG: Hình ảnh thực tế văn phòng làm việc và nhà máy]</p>
            </div>
          </FadeIn>
        </div>

        {/* Action */}
        <FadeIn direction="up" delay={0.25}>
          <div className="text-center pt-4">
            <Button href={`/${currentLang}/contact`} variant="primary" size="lg">
              <span>{dict.pages.aboutUs.primaryCta}</span>
              <span className="ml-1">&rarr;</span>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
