'use client';

import React, { useState } from 'react';
import { ProductFaq } from '@/lib/i18n/product-tech-types';

interface ProductTechnicalFaqProps {
  title?: string;
  faqs: ProductFaq[];
}

export default function ProductTechnicalFaq({
  title = 'Câu hỏi thường gặp kỹ thuật',
  faqs,
}: ProductTechnicalFaqProps) {
  // By default, open the first question
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white rounded-3xl border border-cream-200 shadow-soft p-6 sm:p-8 lg:p-10 mb-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 mb-6 border-b border-cream-200">
        <span className="w-3 h-3 rounded-xs bg-primary-leaf" />
        <h2 className="text-lg sm:text-xl font-extrabold text-primary-950 uppercase tracking-wide">
          {title}
        </h2>
      </div>

      {/* Exactly 2 Technical FAQs as vetted */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl border border-cream-200 bg-cream-50/50 overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-5 text-left text-primary-950 hover:bg-cream-100/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-leaf cursor-pointer"
              >
                <div className="flex items-center gap-3 pr-4">
                  <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-850 text-xs font-bold flex items-center justify-center shrink-0">
                    Q
                  </span>
                  <span className="text-sm sm:text-base font-bold text-primary-950">
                    {faq.question}
                  </span>
                </div>
                <span className="w-7 h-7 rounded-full bg-white border border-cream-300 flex items-center justify-center shrink-0 text-slate-500 transition-transform duration-200">
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans border-t border-cream-200/60 bg-white/70">
                  <p className="flex items-start gap-2">
                    <span className="font-bold text-primary-leaf shrink-0">Trả lời:</span>
                    <span>{faq.answer}</span>
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
