'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';
import SpecSheetModal from '@/components/SpecSheetModal';
import { Locale } from '@/lib/i18n';

interface ProductDetailActionsProps {
  currentLang: Locale;
  slug: string;
  productName: string;
  pdfUrl?: string;
  btnQuoteText: string;
  btnSampleText: string;
  btnDownloadPdfText: string;
}

export default function ProductDetailActions({
  currentLang,
  slug,
  productName,
  pdfUrl,
  btnQuoteText,
  btnSampleText,
  btnDownloadPdfText,
}: ProductDetailActionsProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-cream-200">
        <Button
          href={`/${currentLang}/contact?product=${slug}&type=quote`}
          variant="amber"
          size="md"
          className="font-bold shadow-xs hover:shadow-md"
        >
          <span>{btnQuoteText}</span>
        </Button>

        <Button
          href={`/${currentLang}/contact?product=${slug}&type=sample`}
          variant="primary"
          size="md"
          className="font-bold shadow-xs hover:shadow-md"
        >
          <span>{btnSampleText}</span>
        </Button>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-white text-primary-leaf border-2 border-primary-leaf hover:bg-primary-leaf hover:text-white transition-all shadow-xs cursor-pointer"
        >
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>{btnDownloadPdfText ? btnDownloadPdfText.replace(/^[^\w\s\u00C0-\u1EF9\u4E00-\u9FFF]+\s*/, '') : 'Download Spec & TDS (PDF)'}</span>
        </button>
      </div>

      <SpecSheetModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={productName}
        productSlug={slug}
        pdfUrl={pdfUrl}
        lang={currentLang}
      />
    </>
  );
}
