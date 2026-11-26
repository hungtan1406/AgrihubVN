import React from 'react';
import { BenefitPoint } from '@/lib/i18n/product-tech-types';

interface ProductValueGridProps {
  title?: string;
  intro: string;
  benefits: BenefitPoint[];
}

export default function ProductValueGrid({
  title = 'Vì sao chọn AGRIHUB?',
  intro,
  benefits,
}: ProductValueGridProps) {
  return (
    <section className="bg-white rounded-3xl border border-cream-200 shadow-soft p-6 sm:p-8 lg:p-10 mb-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 mb-4 border-b border-cream-200">
        <span className="w-3 h-3 rounded-xs bg-accent-gold" />
        <h2 className="text-lg sm:text-xl font-extrabold text-primary-950 uppercase tracking-wide">
          {title}
        </h2>
      </div>

      {/* Intro Lead Paragraph */}
      <div className="mb-6">
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
          {intro}
        </p>
      </div>

      {/* 4 Benefits with Plus (+) Sign Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-5 rounded-2xl bg-cream-50/60 border border-cream-200/80 hover:bg-cream-100/70 transition-colors"
          >
            {/* Minimal Plus Sign Badge */}
            <div className="w-8 h-8 rounded-full bg-primary-leaf/10 border border-primary-leaf/30 text-primary-leaf font-bold flex items-center justify-center shrink-0 text-lg leading-none mt-0.5">
              +
            </div>

            {/* Content: Title Bold & Explanation underneath */}
            <div className="flex-1">
              <h3 className="text-sm sm:text-base font-bold text-primary-950 mb-1 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
