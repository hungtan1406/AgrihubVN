import React from 'react';
import { ProcessStep, ProductTechnologyType } from '@/lib/i18n/product-tech-types';

interface ProductProcessStepperProps {
  title?: string;
  intro: string;
  steps: ProcessStep[];
  technologyType?: ProductTechnologyType;
}

export default function ProductProcessStepper({
  title = 'Quy trình sản xuất chuẩn hóa',
  intro,
  steps,
  technologyType = 'spray-dried',
}: ProductProcessStepperProps) {
  // Subtle theme styling for stepper nodes
  const nodeStyles = {
    'spray-dried': 'bg-emerald-600 text-white shadow-emerald-200',
    'milled': 'bg-amber-600 text-white shadow-amber-200',
    'puree': 'bg-rose-600 text-white shadow-rose-200',
    'concentrate': 'bg-orange-600 text-white shadow-orange-200',
  }[technologyType] || 'bg-primary-leaf text-white shadow-emerald-200';

  return (
    <section className="bg-white rounded-3xl border border-cream-200 shadow-soft p-6 sm:p-8 lg:p-10 mb-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 mb-4 border-b border-cream-200">
        <span className="w-3 h-3 rounded-xs bg-primary-leaf" />
        <h2 className="text-lg sm:text-xl font-extrabold text-primary-950 uppercase tracking-wide">
          {title}
        </h2>
      </div>

      {/* Process Intro Paragraph above the 5-step diagram */}
      <div className="mb-8">
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
          {intro}
        </p>
      </div>

      {/* 5-Step Process Stepper Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
        {steps.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-4 sm:p-5 rounded-2xl bg-cream-50/70 hover:bg-cream-100/80 border border-cream-200/90 transition-all group"
          >
              {/* Step Number Circle */}
              <div className="flex items-center gap-3 lg:flex-col lg:items-start mb-3">
                <span
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-sm shadow-md shrink-0 transition-transform group-hover:scale-105 ${nodeStyles}`}
                >
                  {item.step}
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 lg:hidden">
                  Giai đoạn {item.step}
                </span>
              </div>

              {/* Step Stage Title in Bold */}
              <h3 className="text-sm sm:text-base font-bold text-primary-950 mb-1.5 group-hover:text-primary-850 transition-colors">
                {item.title}
              </h3>

              {/* Short Description Line */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      {/* Confidentiality Notice */}
      <div className="mt-6 pt-4 border-t border-cream-200/60 flex items-center justify-between text-[11px] text-slate-600">
        <span>🔒 Quy trình sản xuất khép kín tuân thủ HACCP & ISO 22000</span>
        <span className="italic text-slate-600">Thông số vận hành chi tiết được cung cấp theo thỏa thuận kỹ thuật</span>
      </div>
    </section>
  );
}
