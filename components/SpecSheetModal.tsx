'use client';

import React, { useState } from 'react';
import { Locale, getFormTranslations } from '@/lib/i18n';
import Button from './Button';

interface SpecSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productSlug: string;
  pdfUrl?: string;
  lang: Locale;
}

export default function SpecSheetModal({
  isOpen,
  onClose,
  productName,
  productSlug,
  pdfUrl,
  lang,
}: SpecSheetModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    website: '', // honeypot
  });
  const [loading, setLoading] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const t = getFormTranslations(lang);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      // 1. Dispatch lead to quote API
      await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name || 'B2B Lead',
          company: formData.company,
          email: formData.email,
          phone: 'N/A (Direct Spec Download)',
          purpose: 'spec_download',
          purposeLabel: `TDS Download: ${productName}`,
          category: 'spec-sheet',
          productSlug,
          details: `Downloaded Technical Specification (TDS) for ${productName} (${productSlug})`,
          website: formData.website,
          lang,
        }),
      });

      setDownloadReady(true);

      // 2. Open or download the PDF if available
      if (pdfUrl) {
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
      }
    } catch (err: unknown) {
      console.error('Spec download lead capture error:', err);
      // Even if API logging fails, let the buyer access the PDF
      if (pdfUrl) {
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
      }
      setDownloadReady(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-cream-200 p-6 sm:p-8 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-cream-100 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {downloadReady ? (
          /* Success / Ready State */
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 bg-primary-50 text-primary-leaf rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-2xs border border-primary-200/60">
              📄
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-primary-850">
                {lang === 'vi'
                  ? 'Tài liệu Kỹ thuật đã sẵn sàng!'
                  : lang === 'zh'
                  ? '技术规格书已就绪！'
                  : 'Technical Datasheet Ready!'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-sm mx-auto">
                {lang === 'vi'
                  ? `Hệ thống đã ghi nhận yêu cầu cho sản phẩm ${productName}. File TDS đã được mở trong tab mới.`
                  : lang === 'zh'
                  ? `已为您开启 ${productName} 的官方技术规格书。`
                  : `Your request for ${productName} has been processed. The TDS file has been opened.`}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-primary-leaf hover:bg-primary-leafHover text-white shadow-md transition-all"
                >
                  {lang === 'vi' ? 'Mở lại file PDF' : lang === 'zh' ? '重新打开 PDF' : 'Open PDF Again'}
                </a>
              )}
              <Button onClick={onClose} variant="pill" size="md">
                {lang === 'vi' ? 'Đóng cửa sổ' : lang === 'zh' ? '关闭窗口' : 'Close Window'}
              </Button>
            </div>
          </div>
        ) : (
          /* Form State */
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-accent-mango/20 text-accent-gold flex items-center justify-center text-xl shrink-0">
                📑
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-primary-850 leading-snug">
                  {t.specModalTitle}
                </h3>
                <span className="text-xs text-primary-leaf font-semibold block truncate max-w-xs">
                  {productName}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              {t.specModalSubtitle}
            </p>

            {errorMsg && (
              <div className="p-3 mb-4 bg-red-50 text-red-700 rounded-xl text-xs font-semibold">
                ⚠️ {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-primary-850 mb-1">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.emailPlaceholder}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white rounded-xl border border-cream-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30 focus:border-primary-leaf"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-primary-850 mb-1">
                  {t.companyLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder={t.companyPlaceholder}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white rounded-xl border border-cream-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30 focus:border-primary-leaf"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  {t.nameLabel.replace('*', '')} ({lang === 'vi' ? 'Không bắt buộc' : lang === 'zh' ? '选填' : 'Optional'})
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.namePlaceholder}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white rounded-xl border border-cream-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  fullWidth
                  disabled={loading}
                  className="font-bold shadow-md hover:shadow-lg"
                >
                  <span>
                    {loading
                      ? (lang === 'vi' ? 'Đang chuẩn bị file...' : lang === 'zh' ? '正在准备文件...' : 'Preparing file...')
                      : t.specModalDownloadBtn}
                  </span>
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
