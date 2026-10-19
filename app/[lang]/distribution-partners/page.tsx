import { Metadata } from 'next';
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
    pathname: '/distribution-partners',
    title: dict.pages.distributionPartners.title,
    description: dict.pages.distributionPartners.subtitle,
  });
}

export default function DistributionPartnersPage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);

  const benefits = [
    {
      icon: '🏷️',
      title: 'Bảng giá sỉ trực tiếp từ nhà máy',
      desc: 'Mức chiết khấu hấp dẫn theo bậc thang doanh số, không qua trung gian thương mại.',
    },
    {
      icon: '📦',
      title: 'Nguồn hàng ổn định quanh năm',
      desc: 'Dự trữ nguyên liệu và thành phẩm lớn tại kho, đảm bảo không đứt gãy nguồn cung vào mùa cao điểm.',
    },
    {
      icon: '📑',
      title: 'Hồ sơ pháp lý & COA đầy đủ',
      desc: 'Cung cấp toàn bộ giấy tờ công bố chất lượng, kiểm nghiệm vi sinh hỗ trợ đại lý chào bán cho khách hàng lớn.',
    },
    {
      icon: '🎁',
      title: 'Hỗ trợ mẫu thử & Tài liệu marketing',
      desc: 'Cung cấp bộ kit mẫu thử (sample kit), tài liệu kỹ thuật (TDS) và tư vấn kỹ thuật ứng dụng.',
    },
  ];

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
                {dict.pages.distributionPartners.targetAudience}
              </span>
            </div>
            <Button href={`/${currentLang}/contact`} variant="primary" size="sm" className="shrink-0">
              {dict.pages.distributionPartners.primaryCta} &rarr;
            </Button>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <SectionTitle
            as="h1"
            badge="Hợp Tác Phân Phối"
            title={dict.pages.distributionPartners.title}
            subtitle={dict.pages.distributionPartners.subtitle}
          />
        </FadeIn>

        {/* Distributor Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {benefits.map((b, idx) => (
            <FadeIn key={b.title} direction="up" delay={idx * 0.08}>
              <div className="bg-white p-6 rounded-3xl border border-cream-200 shadow-soft h-full hover:border-primary-leaf transition-colors">
                <span className="text-3xl mb-2 block">{b.icon}</span>
                <h3 className="text-base font-bold text-primary-850 mb-2">{b.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Distributor Policy Placeholders */}
        <FadeIn direction="up" delay={0.2}>
          <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-soft my-8">
            <h3 className="text-lg font-bold text-primary-850 mb-3">
              Điều kiện & Quy trình đăng ký đại lý
            </h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Agrihub chào đón các công ty thương mại thực phẩm, đơn vị cung ứng nguyên liệu làm bánh/pha chế và nhà phân phối sỉ trên toàn quốc.
            </p>
            <div className="text-xs text-slate-600 bg-cream-100 p-5 rounded-2xl border border-cream-300 space-y-2">
              <p>• [CẦN BỔ SUNG: Mức nhập đơn hàng tối thiểu (MOQ) cho đại lý cấp 1 và cấp 2]</p>
              <p>• [CẦN BỔ SUNG: Chính sách công nợ và hỗ trợ vận chuyển nội địa]</p>
              <p>• [CẦN BỔ SUNG: Quy định bảo vệ khu vực độc quyền phân phối]</p>
            </div>
          </div>
        </FadeIn>

        {/* Action */}
        <FadeIn direction="up" delay={0.25}>
          <div className="text-center pt-4">
            <Button href={`/${currentLang}/contact`} variant="primary" size="lg">
              <span>{dict.pages.distributionPartners.primaryCta}</span>
              <span className="ml-1">&rarr;</span>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
