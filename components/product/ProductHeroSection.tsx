'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { ProductTechnologyType } from '@/lib/i18n/product-tech-types';
import Button from '@/components/Button';

interface ProductHeroSectionProps {
  currentLang: Locale;
  slug: string;
  productName?: string;
  vietnameseName?: string;
  englishName?: string;
  typeBadge: string;
  technologyType: ProductTechnologyType;
  italicIntro: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  pdfUrl?: string;
  btnQuoteText?: string;
  btnSampleText?: string;
  btnConsultText?: string;
}

export default function ProductHeroSection({
  currentLang,
  slug,
  productName,
  vietnameseName = '',
  englishName = '',
  typeBadge,
  technologyType,
  italicIntro,
  image,
  imageAlt,
  highlights,
  pdfUrl,
  btnQuoteText = currentLang === 'vi' ? 'Nhận báo giá B2B' : currentLang === 'zh' ? '获取 B2B 报价' : 'Request B2B Quote',
  btnSampleText = currentLang === 'vi' ? 'Nhận mẫu thử R&D' : currentLang === 'zh' ? '申请研发打样' : 'Request R&D Sample',
  btnConsultText = currentLang === 'vi' ? 'Liên hệ tư vấn kỹ thuật' : currentLang === 'zh' ? '技术应用咨询' : 'Technical Consultation',
}: ProductHeroSectionProps) {
  const [imgError, setImgError] = useState(false);
  const resolvedTitle =
    productName ||
    (currentLang === 'vi' ? vietnameseName : englishName) ||
    vietnameseName ||
    englishName;

  // Styling token based on technology type
  const techTheme = {
    'spray-dried': {
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: '✨',
      accentColor: 'text-emerald-700',
      typeLabel: currentLang === 'vi' ? 'Bột sấy phun' : currentLang === 'zh' ? '喷雾干燥' : 'Spray-Dried',
    },
    'milled': {
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
      icon: '🌾',
      accentColor: 'text-amber-700',
      typeLabel: currentLang === 'vi' ? 'Bột sấy nghiền' : currentLang === 'zh' ? '低温研磨' : 'Milled Powder',
    },
    'puree': {
      badgeClass: 'bg-rose-50 text-rose-800 border-rose-200',
      icon: '🍓',
      accentColor: 'text-rose-700',
      typeLabel: currentLang === 'vi' ? 'Puree trái cây' : currentLang === 'zh' ? '原果浆' : 'Fruit Purée',
    },
    'concentrate': {
      badgeClass: 'bg-orange-50 text-orange-800 border-orange-200',
      icon: '🍯',
      accentColor: 'text-orange-700',
      typeLabel: currentLang === 'vi' ? 'Cô đặc chân không' : currentLang === 'zh' ? '真空浓缩' : 'Concentrate',
    },
  }[technologyType] || {
    badgeClass: 'bg-cream-100 text-primary-850 border-cream-300',
    icon: '🌿',
    accentColor: 'text-primary-850',
    typeLabel: typeBadge,
  };

  return (
    <section className="bg-white rounded-3xl border border-cream-200 shadow-soft p-6 sm:p-8 lg:p-10 mb-10 transition-all">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left Column: Authentic Product Photography */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-cream-50/70 border border-cream-200 shadow-xs flex items-center justify-center">
            {image && !imgError ? (
              <Image
                src={image}
                alt={imageAlt || resolvedTitle}
                fill
                sizes="(max-width: 1024px) 100vw, 384px"
                className="object-contain p-4 transition-transform duration-500 hover:scale-105"
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                <span className="text-5xl mb-3">{techTheme.icon}</span>
                <span className="text-sm font-bold text-primary-850 mb-1">
                  {resolvedTitle}
                </span>
                <span className="text-[11px] font-mono text-slate-500 bg-white/80 px-2.5 py-1 rounded-full border border-cream-200 mt-2">
                  {currentLang === 'vi'
                    ? 'Ảnh thành phẩm thật (Theo SKU)'
                    : currentLang === 'zh'
                    ? '实际成品拍摄（依批次）'
                    : 'Authentic Finished Product Photo'}
                </span>
              </div>
            )}
            
            {/* Tech Badge on Top Left */}
            <div className="absolute top-3 left-3">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-xs ${techTheme.badgeClass}`}>
                <span>{techTheme.icon}</span>
                <span>{techTheme.typeLabel}</span>
              </span>
            </div>
          </div>

          {/* Compliance & Standard Verification Tags */}
          <div className="mt-3 flex items-center justify-between px-2 text-[11px] font-mono font-medium text-slate-500">
            <span>ISO 22000 • HACCP</span>
            <span className="text-primary-leaf font-bold">FDA COMPLIANT</span>
          </div>
        </div>

        {/* Right Column: Name, Italic Overview, Key Highlights & Dual CTA */}
        <div className="flex-1 flex flex-col justify-between h-full space-y-6">
          <div>
            {/* Product Name Header */}
            <div className="mb-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-950 tracking-tight">
                {resolvedTitle}
              </h1>
            </div>

            {/* Italic Overview Block as strictly required */}
            <div className="my-5 p-4 sm:p-5 rounded-2xl bg-cream-50/60 border border-cream-200/80">
              <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed font-sans">
                &ldquo;{italicIntro}&rdquo;
              </p>
            </div>

            {/* Highlights Pill Tags */}
            {highlights && highlights.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1 mb-6">
                {highlights.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-primary-850 text-xs font-semibold rounded-full border border-cream-300 shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-leaf" />
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action CTAs in the same header block */}
          <div className="pt-4 border-t border-cream-200">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary Quote CTA */}
              <Button
                href={`/${currentLang}/contact?product=${slug}&type=quote`}
                variant="amber"
                size="md"
                className="font-bold shadow-xs hover:shadow-md"
              >
                <span>{btnQuoteText}</span>
              </Button>

              {/* Technical Consultation CTA */}
              <Button
                href={`/${currentLang}/contact?product=${slug}&type=consult`}
                variant="primary"
                size="md"
                className="font-bold shadow-xs hover:shadow-md"
              >
                <span>{btnConsultText}</span>
              </Button>

              {/* R&D Sample CTA */}
              <Link
                href={`/${currentLang}/contact?product=${slug}&type=sample`}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-colors"
              >
                <span>{btnSampleText}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
