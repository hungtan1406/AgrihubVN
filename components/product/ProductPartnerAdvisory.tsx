import React from 'react';
import Link from 'next/link';
import { PartnerPoint } from '@/lib/i18n/product-tech-types';
import { Locale } from '@/lib/i18n';
import Button from '@/components/Button';

interface ProductPartnerAdvisoryProps {
  currentLang: Locale;
  slug: string;
  title: string;
  intro: string;
  points: PartnerPoint[];
  ctaText: string;
}

export default function ProductPartnerAdvisory({
  currentLang,
  slug,
  title,
  intro,
  points,
  ctaText,
}: ProductPartnerAdvisoryProps) {
  return (
    <section className="bg-gradient-to-br from-cream-100 via-white to-cream-50 rounded-3xl border border-cream-300 shadow-soft p-6 sm:p-8 lg:p-10 mb-10">
      {/* Title & Intro */}
      <div className="max-w-3xl mb-8">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary-leaf block mb-1">
          B2B Supply & Advisory Partner
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-primary-950 mb-3">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
          {intro}
        </p>
      </div>

      {/* 4 Partner Capability Points */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {points.map((point, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-white border border-cream-200 shadow-2xs hover:border-primary-leaf/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-850 font-bold flex items-center justify-center text-xs mb-3">
                0{index + 1}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-primary-950 mb-2">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {point.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust & CTA Block */}
      <div className="p-6 rounded-2xl bg-primary-950 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <p className="text-xs sm:text-sm text-primary-100 leading-relaxed">
            {ctaText}
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-primary-200">
            <span>🛡️ SPEC & TDS cấp theo thỏa thuận</span>
            <span>•</span>
            <Link
              href={`/${currentLang}/quality-certifications`}
              className="underline hover:text-white transition-colors"
            >
              Xem hệ thống chứng nhận chất lượng (ISO 22000 | HACCP)
            </Link>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <Button
            href={`/${currentLang}/contact?product=${slug}&type=quote`}
            variant="amber"
            size="md"
            className="font-bold shadow-md"
          >
            {currentLang === 'vi' ? 'Liên hệ nhận báo giá & TDS' : currentLang === 'zh' ? '联系获取报价与TDS' : 'Inquire for Quote & TDS'}
          </Button>
        </div>
      </div>
    </section>
  );
}
