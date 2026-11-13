'use client';

import React, { useState } from 'react';
import { Dictionary, Locale, getFormTranslations } from '@/lib/i18n';
import Button from './Button';

interface ContactFormProps {
  dict: Dictionary;
  lang?: Locale;
  initialProduct?: string;
  initialType?: string;
}

export default function ContactForm({
  dict,
  lang = 'vi',
  initialProduct,
  initialType,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const initialPurpose =
    initialType === 'sample' ? 'sample' : initialType === 'quote' ? 'quote' : 'quote';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    purpose: initialPurpose,
    category: 'fruit-powder',
    details: initialProduct ? `Sản phẩm quan tâm (Product of interest): ${initialProduct}` : '',
    website: '', // Honeypot anti-spam
  });

  const t = getFormTranslations(lang);

  const purposeLabels: Record<string, string> = {
    quote: t.purposeQuote,
    sample: t.purposeSample,
    oem: t.purposeOem,
    export: t.purposeExport,
    distributor: t.purposeDistributor,
  };

  const categoryLabels: Record<string, string> = {
    'fruit-powder': t.catPowder,
    'dried-fruits': t.catDried,
    'frozen-fruits': t.catFrozen,
    puree: t.catPuree,
    multiple: t.catMultiple,
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          purposeLabel: purposeLabels[formData.purpose] || formData.purpose,
          categoryLabel: categoryLabels[formData.category] || formData.category,
          lang,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại.');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        purpose: 'quote',
        category: 'fruit-powder',
        details: '',
        website: '',
      });
    } catch (err: unknown) {
      console.error('Submit form error:', err);
      setErrorMsg(
        err instanceof Error ? err.message : 'Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-cream-100 border border-primary-leaf/30 p-6 sm:p-8 rounded-2xl text-center space-y-3">
        <div className="text-primary-leaf text-2xl sm:text-3xl font-black">{t.successTitle}</div>
        <p className="text-xs sm:text-sm text-slate-700">
          {t.successDesc}
        </p>
        <Button onClick={() => setSubmitted(false)} variant="pill" size="sm">
          {t.anotherBtn}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field for bot protection */}
      <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errorMsg && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium">
          ⚠️ {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            {t.nameLabel}
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder={t.namePlaceholder}
            className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white rounded-xl border border-cream-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30 focus:border-primary-leaf"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            {t.companyLabel}
          </label>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder={t.companyPlaceholder}
            className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white rounded-xl border border-cream-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30 focus:border-primary-leaf"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            {t.emailLabel}
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder={t.emailPlaceholder}
            className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white rounded-xl border border-cream-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30 focus:border-primary-leaf"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            {t.phoneLabel}
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder={t.phonePlaceholder}
            className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white rounded-xl border border-cream-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30 focus:border-primary-leaf"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            {t.purposeLabel}
          </label>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white rounded-xl border border-cream-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30 focus:border-primary-leaf"
          >
            <option value="quote">{t.purposeQuote}</option>
            <option value="sample">{t.purposeSample}</option>
            <option value="oem">{t.purposeOem}</option>
            <option value="export">{t.purposeExport}</option>
            <option value="distributor">{t.purposeDistributor}</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            {t.categoryLabel}
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white rounded-xl border border-cream-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30 focus:border-primary-leaf"
          >
            <option value="fruit-powder">{t.catPowder}</option>
            <option value="dried-fruits">{t.catDried}</option>
            <option value="frozen-fruits">{t.catFrozen}</option>
            <option value="puree">{t.catPuree}</option>
            <option value="multiple">{t.catMultiple}</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-primary-850 mb-1">
          {t.detailsLabel}
        </label>
        <textarea
          name="details"
          rows={3}
          value={formData.details}
          onChange={handleChange}
          placeholder={t.detailsPlaceholder}
          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white rounded-xl border border-cream-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30 focus:border-primary-leaf"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="amber"
          size="md"
          fullWidth
          disabled={loading}
          className="font-bold shadow-md hover:shadow-lg"
        >
          <span>
            {loading
              ? (lang === 'vi' ? 'Đang gửi...' : lang === 'zh' ? '正在发送...' : 'Submitting...')
              : t.submitBtn}
          </span>
        </Button>
      </div>
    </form>
  );
}
