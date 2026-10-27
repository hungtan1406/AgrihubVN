'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Locale, Dictionary, getIngredients, getHomePageUi } from '@/lib/i18n';
import Container from '@/components/Container';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, {
  StaggerItem,
} from '@/components/animations/StaggerContainer';
import { NewsEvent } from '@/lib/wordpress';

interface HomePageContentProps {
  currentLang: Locale;
  dict: Dictionary;
  featuredNews?: NewsEvent[];
}

function getCategoryBadgeClass(category: string): string {
  const lower = (category || '').toLowerCase();
  if (
    lower.includes('nổi bật') ||
    lower.includes('noi-bat') ||
    lower.includes('featured') ||
    lower.includes('精选')
  ) {
    return 'bg-emerald-100 text-emerald-800 border border-emerald-300';
  }
  if (
    lower.includes('kiện') ||
    lower.includes('event') ||
    lower.includes('活动')
  ) {
    return 'bg-accent-mango/20 text-accent-gold border border-accent-gold/30';
  }
  if (
    lower.includes('báo') ||
    lower.includes('announcement') ||
    lower.includes('公告')
  ) {
    return 'bg-cream-200 text-cream-600 border border-cream-300';
  }
  return 'bg-primary-100 text-primary-700 border border-primary-200';
}

function formatDate(dateStr: string, lang: string): string {
  if (!dateStr) return '';
  try {
    const localeMap: Record<string, string> = {
      vi: 'vi-VN',
      en: 'en-US',
      zh: 'zh-CN',
    };
    return new Date(dateStr).toLocaleDateString(localeMap[lang] ?? 'vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

export default function HomePageContent({
  currentLang,
  dict,
  featuredNews = [],
}: HomePageContentProps) {
  // Client-side category tab filter
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'powder' | 'puree' | 'dried'
  >('all');
  // Selected product for technical TDS drawer/modal
  const [selectedTds, setSelectedTds] = useState<string | null>(null);

  // Localized datasets
  const ingredients = getIngredients(currentLang);
  const ui = getHomePageUi(currentLang);

  const filteredIngredients =
    activeCategory === 'all'
      ? ingredients
      : ingredients.filter((item) => item.category === activeCategory);

  const selectedProductData = ingredients.find(
    (item) => item.id === selectedTds,
  );

  return (
    <div className="flex flex-col gap-12 sm:gap-20 lg:gap-24">
      {/* SECTION 1: HERO BANNER (FULL-WIDTH BACKGROUND WITH HIGH-CONTRAST OVERLAY) */}
      <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] xl:min-h-[700px] flex items-center overflow-hidden py-14 sm:py-20 lg:py-24 text-white shadow-soft">
        {/* Full-width Background Image & Gradient Overlays for WCAG AA Contrast */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/banners/Banner.png"
            alt="Agrihub Vietnam - Nông sản xuất khẩu"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Clean, directional gradient on the left side to keep the photo bright and vibrant while ensuring high text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>

        <Container className="relative z-10 w-full">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-300/20 backdrop-blur-md border border-cream-200/30 text-cream-200 text-xs font-bold uppercase tracking-wider shadow-2xs"
            >
              <span>🌿</span>
              <span>{dict.common.tagline}</span>
            </motion.div>

            {/* Headline - fluid responsive sizing to prevent overflow on laptops with 125%-150% scaling */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-normal text-balance leading-[1.3] sm:leading-[1.28] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            >
              {ui.heroTagline}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-sm sm:text-base md:text-lg text-cream-100/95 leading-relaxed max-w-2xl font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
            >
              {dict.pages.home.heroSubtitle}
            </motion.p>

            {/* CTA Buttons - Full-width on mobile, auto on sm+ */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2"
            >
              {/* CTA bên trái: Đăng ký mẫu thử */}
              <Button
                href="#bao-gia"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-md hover:shadow-lg font-bold justify-center"
              >
                <span>{dict.pages.home.heroCtaSample}</span>
              </Button>

              {/* CTA bên phải: Tư vấn báo giá */}
              <Button
                href="#bao-gia"
                variant="amber"
                size="lg"
                className="w-full sm:w-auto shadow-md hover:shadow-lg font-bold justify-center"
              >
                <span>{dict.pages.home.heroCtaQuote}</span>
              </Button>
            </motion.div>

            {/* Quick Trust Highlights (3 trụ cột uy tín B2B) */}
            {/* {ui.heroTrust && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-4 sm:pt-6 border-t border-cream-200/20 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-cream-100/85"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                  <span>{ui.heroTrust.exp}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                  <span>{ui.heroTrust.certs}</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                  <span>{ui.heroTrust.markets}</span>
                </div>
              </motion.div>
            )} */}
          </div>
        </Container>
      </section>

      {/* SECTION 2: ABOUT AGRIHUB & PREMIUM INGREDIENTS (RECREATING IMAGE 2!) */}
      <section id="ve-agrihub" className="scroll-mt-24">
        <Container>
          <FadeIn direction="up">
            <div className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-10 lg:p-14 border border-cream-200/80 shadow-soft relative overflow-hidden">
              {/* Soft decorative botanical leaf watermark in top right */}
              <div className="absolute top-4 right-4 text-cream-300/40 select-none pointer-events-none text-6xl sm:text-8xl font-serif">
                🌿
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
                {/* Left Column: Friendly Showcase & Visual representation */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4.5,
                      ease: 'easeInOut',
                    }}
                    className="relative w-56 h-56 sm:w-68 sm:h-68 rounded-full border-4 border-primary-leaf/20 bg-cream-100 flex flex-col items-center justify-center p-6 text-center shadow-inner"
                  >
                    <span className="text-4xl sm:text-5xl mb-2">🥭</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-leaf">
                      {ui.about.tag}
                    </span>
                    <span className="text-primary-850 font-black text-base sm:text-lg mt-1">
                      {ui.about.natural}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1 max-w-[180px]">
                      {ui.about.fruitList}
                    </p>
                  </motion.div>

                  <div className="flex gap-2.5 sm:gap-3 text-center w-full max-w-xs justify-center">
                    <div className="bg-cream-100 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border border-cream-200 flex-1">
                      <span className="block text-primary-leaf font-black text-base sm:text-lg">
                        100%
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-600 font-bold">
                        {ui.about.qualityStat}
                      </span>
                    </div>
                    <div className="bg-cream-100 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border border-cream-200 flex-1">
                      <span className="block text-primary-leaf font-black text-base sm:text-lg">
                        100%
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-600 font-bold">
                        {ui.about.originStat}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Content matching Image 2 with Checklist */}
                <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-850 tracking-tight leading-tight">
                      {ui.about.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {ui.about.desc}
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <Button href="#bao-gia" variant="primary" size="md">
                      <span>{ui.about.quoteBtn}</span>
                    </Button>
                    <Button
                      href={`/${currentLang}/about-us`}
                      variant="pill"
                      size="md"
                    >
                      {ui.about.moreBtn}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SECTION 3: 4 NHÓM KHÁCH HÀNG B2B TRỌNG TÂM */}
      {/* <section>
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              badge={dict.pages.home.audienceBadge}
              title={dict.pages.home.audienceTitle}
              subtitle={dict.pages.home.audienceSubtitle}
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {ui.audience.map((aud, index) => {
              const href =
                index === 0
                  ? '#nguyen-lieu'
                  : index === 1
                    ? '#tin-tuc'
                    : index === 2
                      ? '#oem-odm'
                      : `/${currentLang}/distribution-partners`;
              return (
                <StaggerItem key={aud.code} className="h-full">
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="h-full bg-white p-6 rounded-2xl border border-cream-200/80 shadow-soft flex flex-col justify-between hover:border-primary-leaf transition-colors hover:shadow-md"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-full bg-cream-300 text-primary-850 flex items-center justify-center font-black text-xs">
                        {aud.code}
                      </div>
                      <h3 className="text-base font-bold text-primary-850">
                        {aud.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {aud.desc}
                      </p>
                    </div>
                    <div className="pt-6">
                      <Button href={href} variant="primary" size="sm" fullWidth>
                        <span>{aud.btn}</span>
                        <span>&rarr;</span>
                      </Button>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section> */}

      {/* SECTION 4: GỘP - DANH MỤC NGUYÊN LIỆU CHỦ LỰC & TDS SPEC */}
      <section id="nguyen-lieu" className="scroll-mt-24">
        <Container>
          <FadeIn direction="up">
            <div className="flex flex-col justify-between mb-8">
              <SectionTitle
                badge={dict.pages.home.ingredientsBadge}
                title={dict.pages.home.ingredientsTitle}
                subtitle={dict.pages.home.ingredientsSubtitle}
                className="mb-0 max-w-xl"
              />

              {/* Category Filter Tabs with dynamic sliding pill */}
              <div className="w-full xl:w-auto overflow-x-auto no-scrollbar py-1">
                <div className="inline-flex items-center bg-cream-300/80 p-1 sm:p-1.5 rounded-full border border-cream-400/40 text-xs font-bold shadow-2xs gap-0.5 sm:gap-1 whitespace-nowrap shrink-0">
                  {[
                    {
                      id: 'all',
                      label: dict.pages.home.tabAll,
                    },
                    {
                      id: 'powder',
                      label: dict.pages.home.tabPowder,
                    },
                    {
                      id: 'puree',
                      label: dict.pages.home.tabPuree,
                    },
                    {
                      id: 'dried',
                      label: dict.pages.home.tabDried,
                    },
                  ].map((tab) => {
                    const isActive = activeCategory === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() =>
                          setActiveCategory(tab.id as typeof activeCategory)
                        }
                        className={`relative px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full transition-colors text-xs font-bold whitespace-nowrap shrink-0 ${
                          isActive
                            ? 'text-white'
                            : 'text-primary-850 hover:text-primary-leaf'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeCategoryPill"
                            className="absolute inset-0 bg-primary-leaf rounded-full shadow-xs"
                            transition={{
                              type: 'spring',
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}
                        <span className="relative z-10">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Ingredients Grid with layout animation */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredIngredients.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white border border-cream-200/90 rounded-2xl p-6 shadow-soft flex flex-col justify-between hover:border-primary-leaf transition-colors hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeColor}`}
                    >
                      {item.categoryName}
                    </span>
                    <span className="text-[11px] text-slate-400 font-bold">
                      GRADE: F&B
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-primary-850 mb-2 leading-snug">
                    {item.name}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-600 mb-4 bg-cream-50 p-3.5 rounded-xl border border-cream-200/50 leading-relaxed">
                    <p>
                      <strong className="text-primary-850">
                        {ui.tds.packagingLabel ?? 'Quy cách đóng gói:'}
                      </strong>{' '}
                      {ui.tds.packagingValue ??
                        '10g - 5000g/bịch hoặc theo yêu cầu khách hàng'}
                    </p>
                    <p>
                      <strong className="text-primary-850">
                        {ui.tds.shelfLifeLabel ?? 'Hạn sử dụng:'}
                      </strong>{' '}
                      {ui.tds.shelfLifeValue ??
                        '12 tháng tính từ ngày sản xuất'}
                    </p>
                    <p>
                      <strong className="text-primary-850">
                        {ui.tds.storageLabel ?? 'Bảo quản:'}
                      </strong>{' '}
                      {ui.tds.storageValue ??
                        'Nơi khô ráo thoáng mát, tránh ánh nắng trực tiếp'}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-cream-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedTds(item.id)}
                    className="text-xs font-bold text-primary-leaf hover:text-primary-leafHover transition-colors flex items-center gap-1 min-h-[36px]"
                  >
                    <span>{ui.tds.viewBtn}</span> &rarr;
                  </button>
                  <Button href="#bao-gia" variant="pill" size="sm">
                    {ui.tds.sampleBtn}
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick TDS Viewer Modal/Drawer with AnimatePresence */}
          <AnimatePresence>
            {selectedProductData && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedTds(null)}
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-cream-200"
                >
                  <div className="bg-primary-900 text-white px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between rounded-t-3xl sticky top-0 z-10">
                    <div>
                      <span className="text-xs text-accent-gold font-bold uppercase tracking-wider">
                        {ui.tds.modalTitle}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold mt-0.5">
                        {selectedProductData.name}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedTds(null)}
                      className="text-slate-300 hover:text-white p-2 text-2xl font-bold min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Close TDS Modal"
                    >
                      &times;
                    </button>
                  </div>

                  <div className="p-4 sm:p-6 space-y-4 text-xs sm:text-sm text-slate-700">
                    <div className="divide-y divide-cream-200 border border-cream-200 rounded-2xl overflow-hidden">
                      <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 bg-cream-50 gap-1 sm:gap-0">
                        <span className="font-bold text-primary-850">
                          {ui.tds.moisture}
                        </span>
                        <span className="sm:col-span-2">
                          {selectedProductData.moisture}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 gap-1 sm:gap-0">
                        <span className="font-bold text-primary-850">
                          {ui.tds.mesh}
                        </span>
                        <span className="sm:col-span-2">
                          {selectedProductData.mesh}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 bg-cream-50 gap-1 sm:gap-0">
                        <span className="font-bold text-primary-850">
                          {ui.tds.brix}
                        </span>
                        <span className="sm:col-span-2">
                          {selectedProductData.brix}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 gap-1 sm:gap-0">
                        <span className="font-bold text-primary-850">
                          {ui.tds.shelfLife}
                        </span>
                        <span className="sm:col-span-2">
                          {selectedProductData.shelfLife}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 bg-cream-50 gap-1 sm:gap-0">
                        <span className="font-bold text-primary-850">
                          {ui.tds.packaging}
                        </span>
                        <span className="sm:col-span-2">
                          {selectedProductData.packaging}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 gap-1 sm:gap-0">
                        <span className="font-bold text-primary-850">
                          {ui.tds.applications}
                        </span>
                        <span className="sm:col-span-2">
                          {selectedProductData.applications}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-600 bg-cream-100 p-3.5 rounded-xl border border-cream-300">
                      {ui.tds.notice}
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 pt-2">
                      <Button
                        onClick={() => setSelectedTds(null)}
                        variant="ghost"
                        size="sm"
                      >
                        {ui.tds.close}
                      </Button>
                      <Button
                        href="#bao-gia"
                        variant="primary"
                        size="sm"
                        onClick={() => setSelectedTds(null)}
                      >
                        <span>{ui.tds.quote}</span>
                        <span>&rarr;</span>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      {/* SECTION 5: GỘP - GIA CÔNG OEM / ODM THEO TIÊU CHUẨN NHÀ MÁY */}
      <section
        id="oem-odm"
        className="bg-white py-12 sm:py-16 border-y border-cream-200/80 scroll-mt-24"
      >
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              badge={dict.pages.home.oemBadge}
              title={dict.pages.home.oemTitle}
              subtitle={dict.pages.home.oemSubtitle}
            />
          </FadeIn>

          {/* 5-Step OEM Process Flow in soft rounded cards with stagger cascade */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-8">
            {ui.oem.steps.map((s) => (
              <StaggerItem key={s.step} className="h-full">
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="h-full bg-cream-50 p-5 rounded-2xl border border-cream-200 shadow-2xs hover:border-primary-leaf hover:shadow-md transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="text-primary-leaf font-black text-2xl block mb-2">
                      {s.step}
                    </span>
                    <h3 className="font-bold text-sm text-primary-850 mb-1">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* <FadeIn direction="up" delay={0.2}>
            <div className="bg-cream-100 p-6 rounded-3xl border border-cream-300 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h3 className="font-bold text-base text-primary-850">
                  {ui.oem.ctaTitle}
                </h3>
                <p className="text-xs text-slate-600">{ui.oem.ctaDesc}</p>
              </div>
              <Button
                href="#bao-gia"
                variant="primary"
                size="md"
                className="shrink-0"
              >
                <span>{ui.oem.ctaBtn}</span>
                <span>&rarr;</span>
              </Button>
            </div>
          </FadeIn> */}
        </Container>
      </section>

      {/* SECTION 6: GỘP - NĂNG LỰC CUNG ỨNG & VÙNG TRỒNG */}
      <section id="nang-luc" className="scroll-mt-24">
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              badge={dict.pages.home.supplyBadge}
              title={dict.pages.home.supplyTitle}
              subtitle={dict.pages.home.supplySubtitle}
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            <StaggerItem>
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-cream-200 text-center shadow-soft">
                <span className="text-2xl sm:text-3xl font-black text-primary-850 block">
                  10+
                </span>
                <span className="text-xs text-slate-600 font-bold mt-1 block">
                  {ui.supply.stat1}
                </span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-cream-200 text-center shadow-soft">
                <span className="text-2xl sm:text-3xl font-black text-primary-leaf block">
                  15,000 m²
                </span>
                <span className="text-xs text-slate-600 font-bold mt-1 block">
                  {ui.supply.stat2}
                </span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-cream-200 text-center shadow-soft">
                <span className="text-2xl sm:text-3xl font-black text-primary-850 block">
                  20,000+
                </span>
                <span className="text-xs text-slate-600 font-bold mt-1 block">
                  {ui.supply.stat3}
                </span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-cream-200 text-center shadow-soft">
                <span className="text-2xl sm:text-3xl font-black text-primary-leaf block">
                  1,200 ha
                </span>
                <span className="text-xs text-slate-600 font-bold mt-1 block">
                  {ui.supply.stat4}
                </span>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <FadeIn direction="up">
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft h-full"
              >
                <h3 className="text-base font-bold text-primary-850 mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-leaf"></span>
                  {ui.supply.card1Title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {ui.supply.card1Desc}
                </p>
                <div className="text-xs text-slate-500 bg-cream-50 p-3 rounded-xl border border-cream-200">
                  {ui.supply.card1Notice}
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft h-full"
              >
                <h3 className="text-base font-bold text-primary-850 mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-gold"></span>
                  {ui.supply.card2Title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {ui.supply.card2Desc}
                </p>
                <div className="text-xs text-slate-500 bg-cream-50 p-3 rounded-xl border border-cream-200">
                  {ui.supply.card2Notice}
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* SECTION 7: GỘP - TIÊU CHUẨN CHẤT LƯỢNG & CHỨNG NHẬN */}
      <section
        id="chat-luong"
        className="bg-white py-12 sm:py-16 border-y border-cream-200/80 scroll-mt-24"
      >
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              badge={dict.pages.home.qualityBadge}
              title={dict.pages.home.qualityTitle}
              subtitle={dict.pages.home.qualitySubtitle}
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 my-8">
            {ui.quality.cards.map((c) => (
              <StaggerItem key={c.code} className="h-full">
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="h-full bg-cream-50/70 hover:bg-white p-6 sm:p-7 rounded-2xl border border-cream-200 shadow-2xs hover:border-primary-leaf hover:shadow-soft transition-all flex flex-col justify-between group"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Header badge & standard code */}
                    <div className="w-full flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-primary-leaf bg-white px-3 py-1 rounded-full border border-cream-300 shadow-2xs">
                        {c.code}
                      </span>
                      <span className="text-[10px] text-accent-gold font-bold tracking-wider uppercase bg-cream-100 px-2.5 py-0.5 rounded-full border border-cream-200">
                        {c.badge}
                      </span>
                    </div>

                    {/* Logo Showcase container */}
                    <div className="w-full py-2 flex items-center justify-center">
                      <div className="relative w-full max-w-[260px] h-28 sm:h-32 flex items-center justify-center p-3 rounded-2xl bg-white border border-cream-200/80 shadow-2xs group-hover:border-primary-leaf/40 group-hover:shadow-xs transition-all">
                        <Image
                          src={c.logo}
                          alt={`${c.code} - ${c.title}`}
                          width={260}
                          height={130}
                          className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Standard title & concise description */}
                    <h3 className="font-bold text-sm sm:text-base text-primary-850 mt-4 mb-1.5">
                      {c.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                      {c.desc}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* <FadeIn direction="up" delay={0.2}>
            <div className="bg-cream-50 p-5 sm:p-6 rounded-3xl border border-cream-200 text-xs text-slate-600">
              <h3 className="font-bold text-sm text-primary-850 mb-2">
                {ui.quality.coaTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-2">
                <p>
                  • <strong>{ui.quality.coaPhysical}</strong>{' '}
                  {ui.quality.coaPhysicalDesc}
                </p>
                <p>
                  • <strong>{ui.quality.coaMicro}</strong>{' '}
                  {ui.quality.coaMicroDesc}
                </p>
                <p>
                  • <strong>{ui.quality.coaResidue}</strong>{' '}
                  {ui.quality.coaResidueDesc}
                </p>
              </div>
            </div>
          </FadeIn> */}
        </Container>
      </section>

      {/* SECTION 8: TIN TỨC & HOẠT ĐỘNG NỔI BẬT (Từ WordPress Category Nổi Bật) */}
      <section id="tin-tuc" className="scroll-mt-24 py-12 sm:py-16">
        {/* Hỗ trợ anchor cũ nếu có người dùng bookmark */}
        <div id="xuat-khau" className="relative -top-24" />
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              badge={dict.pages.home.featuredNewsBadge ?? 'Tin Tức & Hoạt Động'}
              title={
                dict.pages.home.featuredNewsTitle ?? 'Tin Tức & Sự Kiện Nổi Bật'
              }
              subtitle={
                dict.pages.home.featuredNewsSubtitle ??
                'Cập nhật hoạt động thương mại, triển lãm quốc tế và thông tin mới nhất từ Agrihub.'
              }
            />
          </FadeIn>

          {/* Grid 3 bài viết nổi bật */}
          <div className="my-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(featuredNews && featuredNews.length > 0
                ? featuredNews
                : []
              ).map((post) => {
                const badgeClass = getCategoryBadgeClass(post.category);
                const formattedDate = formatDate(post.date, currentLang);

                return (
                  <StaggerItem key={post.slug} className="h-full">
                    <Link
                      href={`/${currentLang}/news/${post.slug}`}
                      className="group block bg-white border border-cream-200 rounded-3xl overflow-hidden shadow-soft hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full hover:border-primary-leaf/40 hover:shadow-md"
                    >
                      {/* Thumbnail 16:9 */}
                      <div className="aspect-video relative overflow-hidden bg-primary-100 flex items-center justify-center shrink-0">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary-900/10 via-cream-200 to-primary-100 flex flex-col items-center justify-center gap-1 select-none text-primary-800">
                            <span className="text-3xl">📰</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase text-primary-700/80">
                              Agrihub News
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        {/* Category + Date */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span
                            className={`text-xs font-bold px-2.5 py-1 rounded-full ${badgeClass}`}
                          >
                            {post.category}
                          </span>
                          <span className="text-xs text-slate-400 shrink-0 font-medium">
                            {formattedDate}
                          </span>
                        </div>

                        {/* Event date / location nếu có */}
                        {post.eventDate && (
                          <div className="text-xs text-primary-700 mb-2.5 flex items-center gap-1.5 font-medium bg-primary-50/80 px-2.5 py-1 rounded-lg border border-primary-100/60 w-fit">
                            <span>📅 {post.eventDate}</span>
                            {post.eventLocation && (
                              <>
                                <span className="text-slate-300">•</span>
                                <span>📍 {post.eventLocation}</span>
                              </>
                            )}
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="font-bold text-primary-850 text-base sm:text-lg leading-snug line-clamp-2 mb-2 group-hover:text-primary-leaf transition-colors">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        {post.excerpt && (
                          <p className="text-sm text-slate-600 line-clamp-2 sm:line-clamp-3 mb-4 flex-1 leading-relaxed">
                            {post.excerpt}
                          </p>
                        )}

                        {/* CTA link */}
                        <div className="pt-2 border-t border-cream-200/60 flex items-center justify-between text-xs font-bold text-primary-leaf group-hover:text-primary-850 transition-colors mt-auto">
                          <span>{dict.news?.readMore ?? 'Đọc tiếp'}</span>
                          <span className="group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Action Button: Xem tất cả tin tức */}
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mt-8">
              <Button
                href={`/${currentLang}/news`}
                variant="pill"
                size="md"
                className="shadow-xs hover:shadow-soft"
              >
                {dict.pages.home.viewAllNews ?? 'Xem tất cả tin tức →'}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SECTION 9: FORM B2B TOÀN DIỆN NGAY TẠI CHÂN TRANG CHỦ */}
      <section
        id="bao-gia"
        className="bg-gradient-to-br from-primary-900 via-primary-850 to-primary-900 text-white py-12 sm:py-16 rounded-t-3xl sm:rounded-t-4xl border-t border-primary-700/40 scroll-mt-24 shadow-soft"
      >
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <div className="text-center mb-8 sm:mb-10">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent-gold bg-white/10 px-4 py-1.5 rounded-full border border-white/20 mb-3">
                  {dict.pages.home.contactBadge}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  {dict.pages.home.contactTitle}
                </h2>
                <p className="mt-3 text-xs sm:text-base text-cream-200/80 max-w-2xl mx-auto leading-relaxed">
                  {dict.pages.home.contactSubtitle}
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <div className="bg-white text-primary-850 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl">
                <ContactForm dict={dict} lang={currentLang} />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
