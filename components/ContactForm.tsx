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
  const [showB2bSpecs, setShowB2bSpecs] = useState(Boolean(initialProduct || initialType === 'quote' || initialType === 'sample'));

  const initialPurpose =
    initialType === 'sample' ? 'sample' : initialType === 'quote' ? 'quote' : 'quote';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    purpose: initialPurpose,
    category: 'fruit-powder',
    volume: '',
    packaging: '',
    incoterm: '',
    destination: '',
    // Specialized B2B Sample parameters
    sampleWeight: '100g',
    sampleDocs: ['COA', 'TDS'] as string[],
    carrierAccount: '',
    productSlug: initialProduct || '',
    details: initialProduct ? `Sản phẩm quan tâm (Product of interest): ${initialProduct}` : '',
    website: '', // Honeypot anti-spam
  });

  const t = getFormTranslations(lang);

  const isSample = formData.purpose === 'sample';

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

  const volumeLabels: Record<string, string> = {
    trial: t.volumeTrial,
    pallet: t.volumePallet,
    fcl: t.volumeFcl,
    contract: t.volumeContract,
  };

  const packagingLabels: Record<string, string> = {
    drum: t.packagingDrum,
    carton: t.packagingCarton,
    retail: t.packagingRetail,
    custom: t.packagingCustom,
  };

  const incotermLabels: Record<string, string> = {
    fob: t.incotermFob,
    cif: t.incotermCif,
    exw: t.incotermExw,
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDocToggle = (docName: string) => {
    setFormData((prev) => {
      const exists = prev.sampleDocs.includes(docName);
      return {
        ...prev,
        sampleDocs: exists
          ? prev.sampleDocs.filter((d) => d !== docName)
          : [...prev.sampleDocs, docName],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    // Build consolidated notes
    const consolidatedDetails = [
      formData.details,
      isSample ? `[Sample Weight: ${formData.sampleWeight}]` : '',
      isSample && formData.sampleDocs.length > 0 ? `[Requested Docs: ${formData.sampleDocs.join(', ')}]` : '',
      isSample && formData.carrierAccount ? `[Courier Account (DHL/FedEx): ${formData.carrierAccount}]` : '',
    ]
      .filter(Boolean)
      .join('\n');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          details: consolidatedDetails,
          purposeLabel: purposeLabels[formData.purpose] || formData.purpose,
          categoryLabel: categoryLabels[formData.category] || formData.category,
          volumeLabel: isSample ? `Sample Kit: ${formData.sampleWeight}` : (volumeLabels[formData.volume] || formData.volume),
          packagingLabel: packagingLabels[formData.packaging] || formData.packaging,
          incotermLabel: incotermLabels[formData.incoterm] || formData.incoterm,
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
        volume: '',
        packaging: '',
        incoterm: '',
        destination: '',
        sampleWeight: '100g',
        sampleDocs: ['COA', 'TDS'],
        carrierAccount: '',
        productSlug: '',
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
      <div className="bg-cream-50 border border-primary-leaf/40 p-6 sm:p-8 rounded-2xl text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-primary-100 text-primary-leaf rounded-full flex items-center justify-center mx-auto shadow-2xs">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="text-primary-850 text-xl sm:text-2xl font-extrabold">{t.successTitle}</div>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          {t.successDesc}
        </p>
        <div className="pt-2">
          <Button onClick={() => setSubmitted(false)} variant="pill" size="sm">
            {t.anotherBtn}
          </Button>
        </div>
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
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2">
          <svg className="w-4 h-4 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Row 1: Name & Company */}
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

      {/* Row 2: Email & Phone */}
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

      {/* Row 3: Purpose & Category */}
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

      {/* Row 4: Expandable Industrial B2B Specification & Sample Fields */}
      <div className="rounded-2xl border border-cream-200/90 bg-cream-50/70 p-4 transition-all">
        <button
          type="button"
          onClick={() => setShowB2bSpecs(!showB2bSpecs)}
          className="w-full flex items-center justify-between text-left text-xs font-bold text-primary-850 hover:text-primary-leaf transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary-leaf shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span>
              {isSample
                ? (lang === 'vi'
                  ? 'Quy cách mẫu thử nghiệm R&D (Khối lượng, Hồ sơ chất lượng, Chuyển phát)'
                  : lang === 'zh'
                  ? '研发打样与送样需求（样品规格、质检文件、国际快递）'
                  : 'R&D Sample Dispatch Requirements (Sample Size, Documents, Express Courier)')
                : (lang === 'vi'
                  ? 'Thông số đơn hàng B2B (Sản lượng, Bao bì, Incoterms)'
                  : lang === 'zh'
                  ? 'B2B 工业采购规格（采购量、包装、贸易条款）'
                  : 'B2B Procurement Specifications (Volume, Packaging, Incoterms)')}
            </span>
            <span className="text-[10px] font-normal text-slate-500 font-mono">
              {t.optionalBadge}
            </span>
          </span>
          <span className="text-xs font-bold text-slate-400">
            {showB2bSpecs ? '▲' : '▼'}
          </span>
        </button>

        {showB2bSpecs && (
          <div className="mt-4 pt-3 border-t border-cream-200/70 space-y-3.5 animate-in fade-in duration-200">
            {isSample ? (
              /* Specialized R&D Sample Request Fields */
              <div className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      {lang === 'vi' ? 'Khối lượng mẫu mong muốn' : lang === 'zh' ? '所需样品规格' : 'Desired Sample Volume'}
                    </label>
                    <select
                      name="sampleWeight"
                      value={formData.sampleWeight}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs bg-white rounded-xl border border-cream-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30"
                    >
                      <option value="100g">100g ({lang === 'vi' ? 'Kiểm nghiệm Lab & Đánh giá cảm quan' : lang === 'zh' ? '实验室基础理化与感官测试' : 'Lab Sensory & Analysis'})</option>
                      <option value="500g">500g ({lang === 'vi' ? 'Nghiên cứu công thức mẻ nhỏ' : lang === 'zh' ? '配方研发打样中试' : 'Benchtop Formulation'})</option>
                      <option value="1kg-2kg">1kg - 2kg ({lang === 'vi' ? 'Chạy thử nghiệm dây chuyền Pilot' : lang === 'zh' ? '产线小批量试车' : 'Pilot Production Trial'})</option>
                      <option value="custom">{lang === 'vi' ? 'Khối lượng khác (ghi rõ bên dưới)' : lang === 'zh' ? '其他规格 (请在下方备注)' : 'Custom Volume (specify below)'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      {lang === 'vi' ? 'Mã tài khoản vận chuyển quốc tế (DHL / FedEx / UPS)' : lang === 'zh' ? '国际快递到付账号 (DHL / FedEx)' : 'International Courier Account (DHL/FedEx)'}
                    </label>
                    <input
                      type="text"
                      name="carrierAccount"
                      value={formData.carrierAccount}
                      onChange={handleChange}
                      placeholder="e.g. DHL #961234567 / FedEx #123456"
                      className="w-full px-3 py-2 text-xs bg-white rounded-xl border border-cream-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30"
                    />
                    <span className="text-[10px] text-slate-500 mt-0.5 block">
                      {lang === 'vi'
                        ? 'Cung cấp mã tài khoản chuyển phát nhanh giúp đơn vị gửi mẫu hỏa tốc trong 24h.'
                        : lang === 'zh'
                        ? '提供快递账号可优先安排 24 小时极速航空发样。'
                        : 'Providing your courier account enables prioritized 24h dispatch.'}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1.5">
                    {lang === 'vi' ? 'Hồ sơ chất lượng cần gửi kèm mẫu:' : lang === 'zh' ? '需随样提供的权威检测文件：' : 'Quality Documents to Accompany Sample:'}
                  </label>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {[
                      { id: 'COA', label: 'Certificate of Analysis (COA)' },
                      { id: 'TDS', label: 'Technical Data Sheet (TDS)' },
                      { id: 'Microbiology', label: lang === 'vi' ? 'Kiểm nghiệm vi sinh (Microbiological Report)' : 'Microbiology Report' },
                      { id: 'Spec', label: lang === 'vi' ? 'Bản tiêu chuẩn cơ sở (Spec Standard)' : 'Specification Sheet' },
                    ].map((doc) => {
                      const checked = formData.sampleDocs.includes(doc.id);
                      return (
                        <button
                          key={doc.id}
                          type="button"
                          onClick={() => handleDocToggle(doc.id)}
                          className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                            checked
                              ? 'bg-primary-leaf text-white border-primary-leaf shadow-2xs'
                              : 'bg-white text-slate-700 border-cream-300 hover:border-primary-leaf/50'
                          }`}
                        >
                          {checked ? '✓ ' : '+ '} {doc.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              /* Standard Bulk Commercial Specifications */
              <div className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      {t.volumeLabel}
                    </label>
                    <select
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs bg-white rounded-xl border border-cream-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30"
                    >
                      <option value="">-- {lang === 'vi' ? 'Chọn sản lượng' : lang === 'zh' ? '选择预计采购量' : 'Select Volume'} --</option>
                      <option value="trial">{t.volumeTrial}</option>
                      <option value="pallet">{t.volumePallet}</option>
                      <option value="fcl">{t.volumeFcl}</option>
                      <option value="contract">{t.volumeContract}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      {t.packagingLabel}
                    </label>
                    <select
                      name="packaging"
                      value={formData.packaging}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs bg-white rounded-xl border border-cream-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30"
                    >
                      <option value="">-- {lang === 'vi' ? 'Chọn bao bì' : lang === 'zh' ? '选择包装方式' : 'Select Packaging'} --</option>
                      <option value="drum">{t.packagingDrum}</option>
                      <option value="carton">{t.packagingCarton}</option>
                      <option value="retail">{t.packagingRetail}</option>
                      <option value="custom">{t.packagingCustom}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      {t.incotermLabel}
                    </label>
                    <select
                      name="incoterm"
                      value={formData.incoterm}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs bg-white rounded-xl border border-cream-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30"
                    >
                      <option value="">-- {lang === 'vi' ? 'Chọn điều kiện' : lang === 'zh' ? '选择贸易条款' : 'Select Incoterm'} --</option>
                      <option value="fob">{t.incotermFob}</option>
                      <option value="cif">{t.incotermCif}</option>
                      <option value="exw">{t.incotermExw}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      {t.destinationLabel}
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder={t.destinationPlaceholder}
                      className="w-full px-3 py-2 text-xs bg-white rounded-xl border border-cream-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Row 5: Detailed Message */}
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
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <svg className="animate-spin w-4 h-4 text-primary-950" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>{lang === 'vi' ? 'Đang gửi thông tin...' : lang === 'zh' ? '正在提交...' : 'Submitting Inquiry...'}</span>
            </span>
          ) : (
            <span>{t.submitBtn}</span>
          )}
        </Button>
      </div>
    </form>
  );
}
