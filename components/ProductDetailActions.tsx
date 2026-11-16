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
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-white text-primary-leaf border-2 border-primary-leaf hover:bg-primary-leaf hover:text-white transition-all shadow-xs cursor-pointer"
        >
          <span>{btnDownloadPdfText || '📄 Download Spec & TDS (PDF)'}</span>
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
