'use client';

import React, { useState } from 'react';
import { Dictionary, Locale, getFormTranslations } from '@/lib/i18n';
import Button from './Button';

interface ContactFormProps {
  dict: Dictionary;
  lang?: Locale;
}

export default function ContactForm({ dict, lang = 'vi' }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const t = getFormTranslations(lang);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            {t.nameLabel}
          </label>
          <input
            type="text"
            required
            placeholder={t.namePlaceholder}
            className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            {t.companyLabel}
          </label>
          <input
            type="text"
            required
            placeholder={t.companyPlaceholder}
            className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
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
            required
            placeholder={t.emailPlaceholder}
            className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            {t.phoneLabel}
          </label>
          <input
            type="tel"
            required
            placeholder={t.phonePlaceholder}
            className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            {t.purposeLabel}
          </label>
          <select
            required
            className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
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
            className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
          >
            <option value="fruit-powder">{t.catPowder}</option>
            <option value="dried-fruits">{t.catDried}</option>
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
          rows={4}
          placeholder={t.detailsPlaceholder}
          className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
        ></textarea>
      </div>

      <div className="pt-2">
        <Button type="submit" variant="amber" size="lg" fullWidth className="font-extrabold tracking-wide min-h-[48px]">
          <span>{t.submitBtn}</span>
        </Button>
      </div>
    </form>
  );
}
