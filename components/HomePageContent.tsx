'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Locale,
  Dictionary,
  getIngredients,
  getHomePageUi,
  getFormTranslations,
} from '@/lib/i18n';
import Container from '@/components/Container';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, {
  StaggerItem,
} from '@/components/animations/StaggerContainer';

interface HomePageContentProps {
  currentLang: Locale;
  dict: Dictionary;
}

export default function HomePageContent({
  currentLang,
  dict,
}: HomePageContentProps) {
  // Client-side category tab filter
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'powder' | 'puree' | 'dried'
  >('all');
  // Selected product for technical TDS drawer/modal
  const [selectedTds, setSelectedTds] = useState<string | null>(null);

  // Form submit state
  const [submitted, setSubmitted] = useState(false);

  // Localized datasets
  const ingredients = getIngredients(currentLang);
  const ui = getHomePageUi(currentLang);
  const formT = getFormTranslations(currentLang);

  const filteredIngredients =
    activeCategory === 'all'
      ? ingredients
      : ingredients.filter((item) => item.category === activeCategory);

  const selectedProductData = ingredients.find(
    (item) => item.id === selectedTds,
  );

  return (
    <div className="flex flex-col gap-12 sm:gap-20 lg:gap-24">
      {/* SECTION 1: HERO BANNER (INSPIRED BY IMAGE 1) */}
      <section className="h-screen relative bg-gradient-to-br from-primary-900 via-primary-850 to-primary-900 text-white pt-12 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 overflow-hidden shadow-soft font-arial">
        {/* Subtle leaf and sunlit ambient glow */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary-leaf/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-10 bottom-0 w-80 h-80 bg-accent-gold/15 rounded-full blur-3xl pointer-events-none"></div>

        <Container>
          <div className="max-w-3xl space-y-5 sm:space-y-6 relative z-10">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-300/20 backdrop-blur-md border border-cream-200/30 text-cream-200 text-xs font-bold uppercase tracking-wider font-arial"
            >
              <span>🌿</span>
              <span>{dict.common.tagline}</span>
            </motion.div>

            {/* Giant Friendly Geometric Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance leading-[1.1] text-white font-arial"
            >
              {currentLang === 'zh'
                ? ui.heroTagline
                : 'From Vietnamese Farms To Global Markets'}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-sm sm:text-lg lg:text-xl text-cream-100/90 leading-relaxed max-w-2xl font-medium font-arial"
            >
              {dict.pages.home.heroSubtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 font-arial"
            >
              {/* CTA bên trái: màu xanh chữ trắng (TEXT: Đăng kí mẫu thử) */}
              <Button
                href="#bao-gia"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-lg hover:shadow-xl font-bold"
              >
                <span>{dict.pages.home.heroCtaSample}</span>
              </Button>

              {/* CTA bên phải: màu vàng cam sáng chữ trắng (TEXT: Tư vấn báo giá) */}
              <Button
                href="#bao-gia"
                variant="amber"
                size="lg"
                className="w-full sm:w-auto shadow-lg hover:shadow-xl font-bold bg-[#f59e0b] hover:bg-[#d97706] text-white"
              >
                <span>{dict.pages.home.heroCtaQuote}</span>
              </Button>
            </motion.div>
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
      <section>
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
                    ? '#xuat-khau'
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
      </section>

      {/* SECTION 4: GỘP - DANH MỤC NGUYÊN LIỆU CHỦ LỰC & TDS SPEC */}
      <section id="nguyen-lieu" className="scroll-mt-24">
        <Container>
          <FadeIn direction="up">
            <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-8">
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

                  <div className="space-y-1.5 text-xs text-slate-600 mb-4 bg-cream-50 p-3.5 rounded-xl border border-cream-200/50">
                    <p>
                      <strong className="text-primary-850">
                        {ui.tds.specLabel}
                      </strong>{' '}
                      {item.specs}
                    </p>
                    <p>
                      <strong className="text-primary-850">
                        {ui.tds.appLabel}
                      </strong>{' '}
                      {item.applications}
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

          <FadeIn direction="up" delay={0.2}>
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
          </FadeIn>
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

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-8">
            {ui.quality.cards.map((c) => (
              <StaggerItem key={c.code} className="h-full">
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="h-full bg-cream-50 p-5 rounded-2xl border border-cream-200 shadow-2xs hover:border-primary-leaf hover:shadow-md transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-primary-leaf bg-white px-3 py-1 rounded-full border border-cream-300">
                        {c.code}
                      </span>
                      <span className="text-[10px] text-primary-leaf font-bold">
                        {c.badge}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-primary-850 mb-1">
                      {c.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn direction="up" delay={0.2}>
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
          </FadeIn>
        </Container>
      </section>

      {/* SECTION 8: GỘP - THỊ TRƯỜNG QUỐC TẾ & SỰ KIỆN TRIỂN LÃM */}
      <section id="xuat-khau" className="scroll-mt-24">
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              badge={dict.pages.home.globalBadge}
              title={dict.pages.home.globalTitle}
              subtitle={dict.pages.home.globalSubtitle}
            />
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 my-8">
            {/* Export Markets */}
            <FadeIn direction="up">
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft h-full"
              >
                <h3 className="text-base font-bold text-primary-850 mb-4">
                  {ui.global.marketsTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 hover:border-primary-leaf/50 transition-colors">
                    <span className="font-bold text-primary-850 text-sm block">
                      UAE
                    </span>
                    <span className="text-slate-500">{ui.global.uaeNote}</span>
                  </div>
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 hover:border-primary-leaf/50 transition-colors">
                    <span className="font-bold text-primary-850 text-sm block">
                      {ui.global.bulgaria}
                    </span>
                    <span className="text-slate-500">
                      {ui.global.bulgariaNote}
                    </span>
                  </div>
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 hover:border-primary-leaf/50 transition-colors">
                    <span className="font-bold text-primary-850 text-sm block">
                      {ui.global.china}
                    </span>
                    <span className="text-slate-500">
                      {ui.global.chinaNote}
                    </span>
                  </div>
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 hover:border-primary-leaf/50 transition-colors">
                    <span className="font-bold text-primary-850 text-sm block">
                      {ui.global.cambodia}
                    </span>
                    <span className="text-slate-500">
                      {ui.global.cambodiaNote}
                    </span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            {/* Trade Shows */}
            <FadeIn direction="up" delay={0.15}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft h-full"
              >
                <h3 className="text-base font-bold text-primary-850 mb-4">
                  {ui.global.showsTitle}
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 flex justify-between items-center gap-2 hover:border-primary-leaf/50 transition-colors">
                    <div>
                      <strong className="text-primary-850 block">
                        Saudi Food Show
                      </strong>
                      <span className="text-slate-500">
                        Riyadh, Saudi Arabia
                      </span>
                    </div>
                    <span className="text-primary-leaf font-bold bg-white px-3 py-1 rounded-full border border-cream-300 text-[11px] shrink-0">
                      {ui.global.tagMiddleEast}
                    </span>
                  </div>
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 flex justify-between items-center gap-2 hover:border-primary-leaf/50 transition-colors">
                    <div>
                      <strong className="text-primary-850 block">
                        WorldFood Moscow
                      </strong>
                      <span className="text-slate-500">Moscow, Russia</span>
                    </div>
                    <span className="text-primary-leaf font-bold bg-white px-3 py-1 rounded-full border border-cream-300 text-[11px] shrink-0">
                      {ui.global.tagEastEurope}
                    </span>
                  </div>
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 flex justify-between items-center gap-2 hover:border-primary-leaf/50 transition-colors">
                    <div>
                      <strong className="text-primary-850 block">
                        Vietnam Foodexpo
                      </strong>
                      <span className="text-slate-500">
                        Ho Chi Minh City, Vietnam
                      </span>
                    </div>
                    <span className="text-primary-leaf font-bold bg-white px-3 py-1 rounded-full border border-cream-300 text-[11px] shrink-0">
                      {ui.global.tagIntl}
                    </span>
                  </div>
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 flex justify-between items-center gap-2 hover:border-primary-leaf/50 transition-colors">
                    <div>
                      <strong className="text-primary-850 block">
                        Food Africa 2025
                      </strong>
                      <span className="text-slate-500">Cairo, Egypt</span>
                    </div>
                    <span className="text-primary-leaf font-bold bg-white px-3 py-1 rounded-full border border-cream-300 text-[11px] shrink-0">
                      {ui.global.tagAfrica}
                    </span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
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
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-cream-100 border border-primary-leaf/30 p-6 sm:p-8 rounded-2xl text-center space-y-3"
                  >
                    <div className="text-primary-leaf text-2xl sm:text-3xl font-black">
                      {formT.successTitle}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700">
                      {formT.successDesc}
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="pill"
                      size="sm"
                    >
                      {formT.anotherBtn}
                    </Button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-primary-850 mb-1">
                          {formT.nameLabel}
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={formT.namePlaceholder}
                          className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-primary-850 mb-1">
                          {formT.companyLabel}
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={formT.companyPlaceholder}
                          className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-primary-850 mb-1">
                          {formT.emailLabel}
                        </label>
                        <input
                          type="email"
                          required
                          placeholder={formT.emailPlaceholder}
                          className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-primary-850 mb-1">
                          {formT.phoneLabel}
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder={formT.phonePlaceholder}
                          className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-primary-850 mb-1">
                          {formT.purposeLabel}
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
                        >
                          <option value="quote">{formT.purposeQuote}</option>
                          <option value="sample">{formT.purposeSample}</option>
                          <option value="oem">{formT.purposeOem}</option>
                          <option value="export">{formT.purposeExport}</option>
                          <option value="distributor">
                            {formT.purposeDistributor}
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-primary-850 mb-1">
                          {formT.categoryLabel}
                        </label>
                        <select className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none">
                          <option value="fruit-powder">
                            {formT.catPowder}
                          </option>
                          <option value="dried-fruits">{formT.catDried}</option>
                          <option value="puree">{formT.catPuree}</option>
                          <option value="multiple">{formT.catMultiple}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-primary-850 mb-1">
                        {formT.detailsLabel}
                      </label>
                      <textarea
                        rows={3}
                        placeholder={formT.detailsPlaceholder}
                        className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        className="font-black tracking-wide text-sm sm:text-base min-h-[48px]"
                      >
                        <span>{formT.submitBtn}</span>
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
