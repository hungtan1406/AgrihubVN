import { Metadata } from 'next';
import {
  Locale,
  getDictionary,
  isValidLocale,
  defaultLocale,
  getDistributionPartnersContent,
} from '@/lib/i18n';
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
  const content = getDistributionPartnersContent(currentLang);

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Header Section with direct CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-cream-200/80">
          <SectionTitle
            as="h1"
            badge={content.badge}
            title={dict.pages.distributionPartners.title}
            subtitle={dict.pages.distributionPartners.subtitle}
            className="mb-0"
          />
          <Button
            href={`/${currentLang}/contact`}
            variant="primary"
            size="md"
            className="shrink-0 self-start md:self-auto shadow-sm"
          >
            {dict.pages.distributionPartners.primaryCta}
          </Button>
        </div>

        {/* Distributor Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {content.benefits.map((b, idx) => (
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
              {content.policyTitle}
            </h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              {content.policyDesc}
            </p>
            <div className="text-xs text-slate-600 bg-cream-100 p-5 rounded-2xl border border-cream-300 space-y-2">
              {content.notes.map((note) => (
                <p key={note}>• [{note}]</p>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Action */}
        <FadeIn direction="up" delay={0.25}>
          <div className="text-center pt-4">
            <Button href={`/${currentLang}/contact`} variant="primary" size="lg">
              <span>{dict.pages.distributionPartners.primaryCta}</span>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
