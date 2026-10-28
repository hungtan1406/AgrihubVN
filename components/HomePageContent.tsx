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
import ProductCard from '@/components/ProductCard';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, {
  StaggerItem,
} from '@/components/animations/StaggerContainer';
import { NewsEvent, Product } from '@/lib/wordpress';

interface HomePageContentProps {
  currentLang: Locale;
  dict: Dictionary;
  featuredNews?: NewsEvent[];
  featuredProducts?: Product[];
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
  featuredProducts = [],
}: HomePageContentProps) {
  // Client-side category tab filter
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'powder' | 'puree' | 'dried' | 'frozen'
  >('all');
  // Selected product for technical TDS drawer/modal
  const [selectedTds, setSelectedTds] = useState<string | null>(null);

  // Localized datasets
  const ingredients = getIngredients(currentLang);
  const ui = getHomePageUi(currentLang);

  function getProductCategoryKey(
    categoryName: string,
  ): 'powder' | 'puree' | 'dried' | 'frozen' {
    const lower = (categoryName || '').toLowerCase();
    if (
      lower.includes('đông lạnh') ||
      lower.includes('frozen') ||
      lower.includes('iqf') ||
      lower.includes('冷冻')
    )
      return 'frozen';
    if (
      lower.includes('bột') ||
      lower.includes('powder') ||
      lower.includes('phun') ||
      lower.includes('nghiền') ||
      lower.includes('粉')
    )
      return 'powder';
    if (
      lower.includes('pure') ||
      lower.includes('cốt') ||
      lower.includes('浆') ||
      lower.includes('汁')
    )
      return 'puree';
    return 'dried';
  }

  function getProductBadgeColor(
    processingMethod: string,
    categoryKey: string,
  ): string {
    const lower = (processingMethod || '').toLowerCase();
    if (lower.includes('nghiền') || lower.includes('milled')) {
      return 'bg-rose-100 text-rose-800 border-rose-200';
    }
    if (lower.includes('phun') || lower.includes('spray')) {
      return 'bg-amber-100 text-amber-800 border-amber-200';
    }
    if (
      lower.includes('mít') ||
      lower.includes('jackfruit') ||
      lower.includes('lime')
    ) {
      return 'bg-lime-100 text-lime-800 border-lime-200';
    }
    if (
      lower.includes('thăng hoa') ||
      lower.includes('freeze') ||
      lower.includes('sấy') ||
      lower.includes('dried')
    ) {
      return 'bg-orange-100 text-orange-800 border-orange-200';
    }
    if (
      lower.includes('đông lạnh') ||
      lower.includes('iqf') ||
      lower.includes('cấp đông')
    ) {
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    }
    if (
      lower.includes('pure') ||
      lower.includes('cốt') ||
      categoryKey === 'puree'
    ) {
      return 'bg-purple-100 text-purple-800 border-purple-200';
    }
    return 'bg-amber-100 text-amber-800 border-amber-200';
  }

  // Kết hợp sản phẩm từ WordPress API với dữ liệu hiển thị đa ngôn ngữ
  const displayItems =
    featuredProducts && featuredProducts.length > 0
      ? featuredProducts.map((p) => {
          const match = ingredients.find(
            (ing) => ing.id === p.slug || ing.id === String(p.id),
          );
          // Ưu tiên categoryGroup từ ACF WordPress (powder, puree, dried)
          const catKey =
            (p.categoryGroup as 'powder' | 'puree' | 'dried' | 'frozen') ||
            match?.category ||
            getProductCategoryKey(p.category);

          // Ưu tiên processingMethod từ ACF WordPress (Bột sấy phun, Bột sấy nghiền, Trái cây sấy...)
          const processingBadge =
            p.processingMethod || match?.categoryName || p.category;

          return {
            id: String(p.slug || p.id),
            name: p.name || match?.name || 'Sản phẩm Agrihub',
            category: catKey,
            categoryName: processingBadge,
            badgeColor: getProductBadgeColor(processingBadge, catKey),
            specs: p.specs || match?.specs,
            applications: p.application || match?.applications,
            moisture:
              p.moisture || match?.moisture || 'Theo tiêu chuẩn kiểm nghiệm',
            mesh: p.mesh || match?.mesh || 'Chuẩn hóa công nghiệp',
            brix: p.brix || match?.brix || 'Tự nhiên từ quả',
            shelfLife: p.shelfLife || match?.shelfLife || '12-24 tháng',
            packaging:
              p.packaging ||
              match?.packaging ||
              'Thùng carton / phuy vô trùng hoặc theo yêu cầu',
            storage: p.storage || match?.storage,
            image: p.image,
          };
        })
      : ingredients;

  const filteredIngredients =
    activeCategory === 'all'
      ? displayItems
      : displayItems.filter((item) => item.category === activeCategory);

  const selectedProductData = displayItems.find(
    (item) => item.id === selectedTds,
  );

  return (
    <div className="flex flex-col">
      {/* SECTION 1: HERO BANNER (FULL-WIDTH BACKGROUND WITH HIGH-CONTRAST OVERLAY) */}
      <section className="relative min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex items-center overflow-hidden py-12 sm:py-16 lg:py-20 text-white shadow-soft">
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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cream-100 text-xs font-semibold shadow-2xs"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent-gold"
                aria-hidden="true"
              />
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
      <section id="ve-agrihub" className="scroll-mt-24 py-8 sm:py-12 lg:py-14">
        <Container>
          <FadeIn direction="up">
            <div className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-8 lg:p-10 border border-cream-200/80 shadow-soft relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
                {/* Left Column: Visual representation */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4.5,
                      ease: 'easeInOut',
                    }}
                    className="relative w-full max-w-[440px] aspect-[2000/1315] rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-primary-leaf/25 bg-white shadow-soft overflow-hidden flex items-center justify-center"
                  >
                    <Image
                      src="/images/Image1.png"
                      alt="Agrihub Vietnam"
                      fill
                      sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 420px"
                      className="object-contain hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </motion.div>
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

      {/* SECTION 4: GỘP - DANH MỤC NGUYÊN LIỆU CHỦ LỰC & TDS SPEC */}
      <section id="nguyen-lieu" className="scroll-mt-24 py-8 sm:py-12 lg:py-14">
        <Container>
          <FadeIn direction="up">
            <div className="mb-6 sm:mb-8">
              <SectionTitle
                badge={dict.pages.home.ingredientsBadge}
                title={dict.pages.home.ingredientsTitle}
                subtitle={dict.pages.home.ingredientsSubtitle}
                className="mb-5 sm:mb-6"
              />

              {/* Category Filter Tabs centered with full breathing room */}
              <div className="w-full overflow-x-auto no-scrollbar py-1.5 px-1">
                <div className="flex sm:justify-center min-w-max mx-auto">
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
                    {
                      id: 'frozen',
                      label: dict.pages.home.tabFrozen || 'Trái cây đông lạnh',
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
              >
                <ProductCard
                  product={item}
                  currentLang={currentLang}
                  hideTds={true}
                  labels={{
                    viewTds: ui.tds.viewBtn,
                    sampleBtn: ui.tds.sampleBtn,
                    moisture: ui.tds.moisture?.replace(':', ''),
                    mesh: ui.tds.mesh?.replace(':', ''),
                    shelfLife: ui.tds.shelfLife?.replace(':', ''),
                    applications: ui.tds.applications?.replace(':', ''),
                    grade: 'GRADE: F&B EXPORT',
                  }}
                  sampleHref="#bao-gia"
                />
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
                  className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-cream-200 overflow-hidden"
                >
                  {/* Technical Header */}
                  <div className="bg-primary-900 text-white px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between shrink-0 border-b border-primary-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                        <span className="text-[11px] text-accent-gold font-semibold uppercase tracking-wider">
                          {ui.tds.modalTitle}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold mt-1 text-white">
                        {selectedProductData.name}
                      </h3>
                      <p className="text-[11px] text-cream-200/70 font-mono mt-0.5">
                        SPEC-AGRI-{selectedProductData.id.toUpperCase()} • ISO
                        22000 | HACCP | FDA COMPLIANT
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedTds(null)}
                      className="text-slate-300 hover:text-white p-2 text-2xl font-bold min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors"
                      aria-label="Close TDS Modal"
                    >
                      &times;
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto no-scrollbar p-5 sm:p-7 space-y-5 text-xs sm:text-sm text-slate-700">
                    {/* Section 1: Physical & Chemical Parameters */}
                    <div>
                      <h4 className="text-xs font-bold text-primary-850 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-xs bg-primary-leaf" />
                        <span>Chỉ tiêu Kỹ thuật & Cảm quan</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="p-3 bg-cream-50 rounded-xl border border-cream-200/70">
                          <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">
                            {ui.tds.moisture}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-primary-900">
                            {selectedProductData.moisture}
                          </span>
                        </div>
                        <div className="p-3 bg-cream-50 rounded-xl border border-cream-200/70">
                          <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">
                            {ui.tds.mesh}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-primary-900">
                            {selectedProductData.mesh}
                          </span>
                        </div>
                        <div className="p-3 bg-cream-50 rounded-xl border border-cream-200/70">
                          <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">
                            {ui.tds.brix}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-primary-900">
                            {selectedProductData.brix}
                          </span>
                        </div>
                        <div className="p-3 bg-cream-50 rounded-xl border border-cream-200/70">
                          <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">
                            {ui.tds.shelfLife}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-primary-900">
                            {selectedProductData.shelfLife}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Industrial Handling & Applications */}
                    <div>
                      <h4 className="text-xs font-bold text-primary-850 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-xs bg-accent-gold" />
                        <span>Đóng gói, Bảo quản & Ứng dụng F&B</span>
                      </h4>
                      <div className="space-y-2">
                        <div className="p-3 bg-white rounded-xl border border-cream-200 shadow-2xs">
                          <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">
                            {ui.tds.packaging}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-800 font-medium">
                            {selectedProductData.packaging}
                          </span>
                        </div>
                        {selectedProductData.storage && (
                          <div className="p-3 bg-white rounded-xl border border-cream-200 shadow-2xs">
                            <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">
                              {ui.tds.storageLabel || 'Bảo quản / Nhiệt độ:'}
                            </span>
                            <span className="text-xs sm:text-sm text-slate-800 font-medium">
                              {selectedProductData.storage}
                            </span>
                          </div>
                        )}
                        <div className="p-3 bg-white rounded-xl border border-cream-200 shadow-2xs">
                          <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">
                            {ui.tds.applications}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-800 font-medium">
                            {selectedProductData.applications}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Notice Callout */}
                    <div className="text-xs text-slate-600 bg-primary-50/60 p-3.5 rounded-xl border border-primary-100 flex items-start gap-2.5">
                      <span className="text-primary-leaf text-base shrink-0 leading-none mt-0.5">
                        ℹ
                      </span>
                      <p className="leading-relaxed">{ui.tds.notice}</p>
                    </div>
                  </div>

                  {/* Pinned Bottom Action Bar */}
                  <div className="bg-cream-50/90 backdrop-blur-xs px-5 sm:px-7 py-3.5 sm:py-4 border-t border-cream-200/90 flex flex-col-reverse sm:flex-row justify-between items-center gap-3 shrink-0">
                    <Link
                      href={`/${currentLang}/products/${selectedProductData.id}`}
                      className="text-xs font-bold text-primary-leaf hover:text-primary-leafHover underline"
                    >
                      {dict.common.viewDetails}
                    </Link>
                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
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
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      {/* SECTION 5: DỊCH VỤ TẠI AGRIHUB & GIA CÔNG OEM / ODM */}
      <section
        id="oem-odm"
        className="bg-white py-10 sm:py-14 border-y border-cream-200/80 scroll-mt-24"
      >
        <Container>
          {/* Section Header: DỊCH VỤ TẠI AGRIHUB */}
          <FadeIn direction="up">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-primary-900 tracking-wide uppercase inline-flex flex-col items-center">
                <span>{dict.pages.home.oemBadge}</span>
                <span className="h-1 w-16 sm:w-20 bg-primary-leaf rounded-full mt-2 sm:mt-2.5" />
              </h2>
            </div>
          </FadeIn>

          {/* 3 Photo Columns Showcase */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {ui.oem.pillars.map((pillar, idx) => (
              <StaggerItem key={idx} className="h-full">
                <div className="flex flex-col items-center h-full">
                  {/* Column Header with green underline */}
                  <div className="text-center mb-3 sm:mb-3.5">
                    <h3 className="text-xs sm:text-sm md:text-base font-black text-primary-900 uppercase tracking-wide">
                      {pillar.title}
                    </h3>
                    <span className="block h-0.5 w-12 sm:w-16 bg-primary-leaf rounded-full mx-auto mt-1.5" />
                  </div>

                  {/* Photo Container */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-cream-200/90 shadow-2xs hover:shadow-md transition-all duration-300 group bg-cream-50">
                    <Image
                      src={pillar.image}
                      alt={pillar.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Bottom Card: Gia công OEM/ODM & R&D theo tiêu chuẩn nhà máy */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mt-8 sm:mt-10 lg:mt-12 bg-gradient-to-br from-primary-900 via-primary-850 to-primary-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-primary-750 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-accent-gold border border-accent-gold/30">
                  OEM / ODM & R&D Solutions
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white">
                  {dict.pages.home.oemTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                  {dict.pages.home.oemSubtitle}
                </p>
              </div>
              <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
                <Button
                  href="#bao-gia"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto !bg-accent-gold !text-primary-950 hover:!bg-accent-gold/90 font-bold shadow-md"
                >
                  <span>{ui.oem.ctaBtn}</span>
                  <span>&rarr;</span>
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SECTION 6: GỘP - NĂNG LỰC CUNG ỨNG & VÙNG TRỒNG */}
      <section id="nang-luc" className="scroll-mt-24 py-8 sm:py-12 lg:py-14">
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              badge={dict.pages.home.supplyBadge}
              title={dict.pages.home.supplyTitle}
              subtitle={dict.pages.home.supplySubtitle}
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
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
        className="bg-white py-10 sm:py-14 border-y border-cream-200/80 scroll-mt-24"
      >
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              badge={dict.pages.home.qualityBadge}
              title={dict.pages.home.qualityTitle}
              subtitle={dict.pages.home.qualitySubtitle}
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-2">
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
      <section id="tin-tuc" className="scroll-mt-24 py-8 sm:py-12 lg:py-14">
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
          <div className="mt-2 mb-6 sm:mb-8">
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
            <div className="text-center mt-6">
              <Button
                href={`/${currentLang}/news`}
                variant="pill"
                size="md"
                className="shadow-xs hover:shadow-soft"
              >
                {dict.pages.home.viewAllNews ?? 'Xem tất cả tin tức'}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SECTION 9: FORM B2B TOÀN DIỆN NGAY TẠI CHÂN TRANG CHỦ */}
      <section
        id="bao-gia"
        className="bg-gradient-to-br from-primary-900 via-primary-850 to-primary-900 text-white py-10 sm:py-14 rounded-t-3xl sm:rounded-t-4xl border-t border-primary-700/40 scroll-mt-24 shadow-soft"
      >
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <div className="text-center mb-6 sm:mb-8">
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
              <div className="bg-white text-primary-850 rounded-3xl p-5 sm:p-7 lg:p-8 shadow-2xl">
                <ContactForm dict={dict} lang={currentLang} />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
