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
  featuredEvents?: NewsEvent[];
  featuredProducts?: Product[];
  totalProducts?: number;
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
  featuredEvents = [],
  featuredProducts = [],
  totalProducts = 0,
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

  // Fallback sự kiện đa ngôn ngữ
  const fallbackEvents: NewsEvent[] = [
    {
      id: 1001,
      slug:
        currentLang === 'en'
          ? 'agrihub-at-vietnam-foodexpo-2025'
          : currentLang === 'zh'
            ? 'agrihub-canjia-vietnam-foodexpo-2025'
            : 'agrihub-tham-gia-vietnam-foodexpo-2025',
      lang: currentLang,
      title:
        currentLang === 'en'
          ? 'Agrihub Vietnam at Vietnam Foodexpo 2025 – SECC, Ho Chi Minh City'
          : currentLang === 'zh'
            ? 'Agrihub越南参展Vietnam Foodexpo 2025 – 胡志明市SECC'
            : 'Agrihub Vietnam tham gia Vietnam Foodexpo 2025 tại SECC',
      excerpt:
        currentLang === 'en'
          ? 'Agrihub Vietnam will exhibit at Vietnam Foodexpo 2025 showcasing export-grade fruit powders, freeze-dried fruits, and aseptic purees.'
          : currentLang === 'zh'
            ? 'Agrihub Vietnam将参加2025年越南食品博览会，在胡志明市SECC展示出口级果粉、冻干果干及无菌果浆等拳头产品。'
            : 'Agrihub Vietnam sẽ có mặt tại Vietnam Foodexpo 2025 (19–22/11/2025) tại SECC TP. HCM với gian hàng trưng bày bột trái cây, trái cây sấy thăng hoa và nước cốt xuất khẩu.',
      content: '',
      date: '2025-11-01T00:00:00',
      image: null,
      category:
        currentLang === 'en'
          ? 'Events'
          : currentLang === 'zh'
            ? '活动'
            : 'Sự kiện',
      tags: ['triển lãm', 'foodexpo', 'nổi bật'],
      eventDate:
        currentLang === 'en'
          ? 'Nov 19–22, 2025'
          : currentLang === 'zh'
            ? '2025年11月19-22日'
            : '19/11/2025 – 22/11/2025',
      eventLocation:
        currentLang === 'en'
          ? 'SECC, Ho Chi Minh City'
          : currentLang === 'zh'
            ? '胡志明市SECC'
            : 'SECC, TP. Hồ Chí Minh',
    },
    {
      id: 1004,
      slug:
        currentLang === 'en'
          ? 'agrihub-thaifex-anuga-asia-2025'
          : currentLang === 'zh'
            ? 'agrihub-thaifex-anuga-asia-2025'
            : 'agrihub-trien-lam-thaifex-anuga-asia-2025',
      lang: currentLang,
      title:
        currentLang === 'en'
          ? 'Agrihub Vietnam at THAIFEX - Anuga Asia 2025 Trade Fair'
          : currentLang === 'zh'
            ? 'Agrihub参展2025泰国亚洲世界食品博览会（THAIFEX - Anuga Asia）'
            : 'Agrihub tham gia Triển lãm Quốc tế THAIFEX - Anuga Asia 2025',
      excerpt:
        currentLang === 'en'
          ? 'Showcasing tropical spray-dried fruit powders, freeze-dried fruits, and aseptic purees to international F&B manufacturers and buyers in Bangkok.'
          : currentLang === 'zh'
            ? 'Agrihub携出口级热带果粉、冻干水果及无菌原浆亮相，拓展全球食品饮料供应链。'
            : 'Agrihub xúc tiến thương mại nông sản chế biến sâu, kết nối chuỗi cung ứng bột trái cây và trái cây sấy thăng hoa tới các đối tác F&B toàn cầu tại Bangkok.',
      content: '',
      date: '2025-05-10T00:00:00',
      image: null,
      category:
        currentLang === 'en'
          ? 'Events'
          : currentLang === 'zh'
            ? '活动'
            : 'Sự kiện',
      tags: ['triển lãm', 'thaifex', 'nổi bật'],
      eventDate:
        currentLang === 'en'
          ? 'May 27–31, 2025'
          : currentLang === 'zh'
            ? '2025年5月27日-31日'
            : '27/05/2025 – 31/05/2025',
      eventLocation:
        currentLang === 'en'
          ? 'IMPACT Muang Thong Thani, Bangkok, Thailand'
          : currentLang === 'zh'
            ? '泰国曼谷 IMPACT 展览中心'
            : 'IMPACT Muang Thong Thani, Bangkok, Thái Lan',
    },
    {
      id: 1005,
      slug:
        currentLang === 'en'
          ? 'agrihub-gulfood-dubai-2026'
          : currentLang === 'zh'
            ? 'agrihub-gulfood-dubai-2026'
            : 'agrihub-ket-noi-giao-thuong-gulfood-dubai-2026',
      lang: currentLang,
      title:
        currentLang === 'en'
          ? 'Agrihub Connects with Global Buyers at Gulfood Dubai 2026'
          : currentLang === 'zh'
            ? 'Agrihub亮相迪拜海湾食品展（Gulfood Dubai 2026）'
            : 'Agrihub xúc tiến thương mại tại Triển lãm Gulfood Dubai 2026',
      excerpt:
        currentLang === 'en'
          ? 'Expanding halal-certified fruit powders and freeze-dried ingredients across Middle Eastern and North African food industry networks.'
          : currentLang === 'zh'
            ? '展示全线符合清真（Halal）标准的深加工果粉与原浆原料，深耕中东及北非高品质市场。'
            : 'Giới thiệu các dòng sản phẩm đạt chuẩn quốc tế Halal và ISO 22000, mở rộng hợp tác xuất khẩu nông sản chế biến sang thị trường Trung Đông và Bắc Phi.',
      content: '',
      date: '2026-01-15T00:00:00',
      image: null,
      category:
        currentLang === 'en'
          ? 'Events'
          : currentLang === 'zh'
            ? '活动'
            : 'Sự kiện',
      tags: ['triển lãm', 'gulfood', 'nổi bật'],
      eventDate:
        currentLang === 'en'
          ? 'Feb 17–21, 2026'
          : currentLang === 'zh'
            ? '2026年2月17日-21日'
            : '17/02/2026 – 21/02/2026',
      eventLocation:
        currentLang === 'en'
          ? 'Dubai World Trade Centre (DWTC), UAE'
          : currentLang === 'zh'
            ? '阿联酋迪拜世界贸易中心（DWTC）'
            : 'Dubai World Trade Centre (DWTC), UAE',
    },
  ];

  const displayEvents =
    featuredEvents && featuredEvents.length > 0
      ? featuredEvents.length >= 3
        ? featuredEvents
        : [
            ...featuredEvents,
            ...fallbackEvents.filter(
              (f) => !featuredEvents.some((e) => e.slug === f.slug),
            ),
          ].slice(0, 3)
      : fallbackEvents;

  // Fallback tin tức (không bao gồm sự kiện)
  const fallbackNews: NewsEvent[] = [
    {
      id: 1002,
      slug:
        currentLang === 'en'
          ? 'agrihub-exports-fruit-powder-to-middle-east'
          : currentLang === 'zh'
            ? 'agrihub-chukou-guofen-dao-zhongdong'
            : 'agrihub-xuat-khau-bot-trai-cay-sang-trung-dong',
      lang: currentLang,
      title:
        currentLang === 'en'
          ? 'Agrihub Expands Fruit Powder Exports to the Middle East'
          : currentLang === 'zh'
            ? 'Agrihub扩大果粉出口至中东市场'
            : 'Agrihub mở rộng xuất khẩu bột trái cây sang thị trường Trung Đông',
      excerpt:
        currentLang === 'en'
          ? "The first commercial shipments of Agrihub's Dragon Fruit Powder and Mango Powder have been successfully delivered to UAE partners."
          : currentLang === 'zh'
            ? 'Agrihub的首批红心火龙果粉和芒果粉商业货物已成功交付至阿联酋合作伙伴。'
            : 'Lô hàng bột thanh long và bột xoài đầu tiên từ Agrihub đã được giao thành công đến UAE, mở ra chuỗi cung ứng ổn định cho các nhà sản xuất tại Trung Đông.',
      content: '',
      date: '2025-10-15T00:00:00',
      image: null,
      category:
        currentLang === 'en' ? 'News' : currentLang === 'zh' ? '新闻' : 'Tin tức',
      tags: ['xuất khẩu', 'trung đông', 'halal'],
    },
    {
      id: 1003,
      slug:
        currentLang === 'en'
          ? 'halal-certification-expands-export-markets'
          : currentLang === 'zh'
            ? 'qingzhen-renzheng-kuozhan-chukou-shichang'
            : 'chung-nhan-halal-mo-rong-thi-truong-xuat-khau',
      lang: currentLang,
      title:
        currentLang === 'en'
          ? 'Agrihub Achieves Halal Certification – Opening Muslim-Market Export Channels'
          : currentLang === 'zh'
            ? 'Agrihub获得清真认证 – 开拓穆斯林市场出口渠道'
            : 'Agrihub đạt chứng nhận Halal – Mở rộng thị trường xuất khẩu Muslim',
      excerpt:
        currentLang === 'en'
          ? 'Agrihub Vietnam has received Halal certification for its fruit powder and puree product lines, opening access to 57 OIC member countries.'
          : currentLang === 'zh'
            ? 'Agrihub Vietnam的果粉和果浆产品线已获得清真认证，开放进入57个伊斯兰合作组织成员国市场。'
            : 'Agrihub Vietnam vừa nhận chứng nhận Halal cho dòng sản phẩm bột trái cây và nước cốt, mở ra cơ hội thâm nhập sâu vào 57 quốc gia thành viên OIC.',
      content: '',
      date: '2025-09-20T00:00:00',
      image: null,
      category:
        currentLang === 'en'
          ? 'Announcement'
          : currentLang === 'zh'
            ? '公告'
            : 'Thông báo',
      tags: ['halal', 'chứng nhận', 'xuất khẩu'],
    },
  ];

  const displayNews =
    featuredNews && featuredNews.length > 0
      ? featuredNews.length >= 3
        ? featuredNews
        : [
            ...featuredNews,
            ...fallbackNews.filter(
              (f) => !featuredNews.some((n) => n.slug === f.slug),
            ),
          ].slice(0, 3)
      : fallbackNews;

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
              className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-[0.035em] sm:tracking-[0.045em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            >
              <span className="flex flex-col gap-2.5 sm:gap-4 lg:gap-5 leading-[1.25]">
                {(ui.heroTagline.includes('\n')
                  ? ui.heroTagline.split('\n')
                  : ui.heroTagline.includes('ĐẾN')
                    ? [
                        ui.heroTagline
                          .slice(0, ui.heroTagline.indexOf('ĐẾN'))
                          .trim(),
                        ui.heroTagline
                          .slice(ui.heroTagline.indexOf('ĐẾN'))
                          .trim(),
                      ]
                    : [ui.heroTagline]
                ).map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </span>
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
                        label:
                          dict.pages.home.tabFrozen || 'Trái cây đông lạnh',
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
                  }}
                  sampleHref="#bao-gia"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Nút điều hướng sang toàn bộ danh mục sản phẩm */}
          <div className="mt-10 sm:mt-12 text-center">
            <Button
              href={`/${currentLang}/products`}
              variant="secondary"
              size="lg"
              className="shadow-sm hover:shadow-md transition-all group"
            >
              <span>
                {currentLang === 'en'
                  ? 'View All Products & Catalogue'
                  : currentLang === 'zh'
                    ? '查看全部产品目录'
                    : 'Xem toàn bộ danh mục sản phẩm'}
              </span>
            </Button>
          </div>

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

      {/* SECTION 6: SỰ KIỆN NỔI BẬT (Layout dạng danh thiếp sự kiện tương tự section tin tức) */}
      <section id="su-kien" className="scroll-mt-24 py-8 sm:py-12 lg:py-14">
        {/* Hỗ trợ anchor cũ nếu có người dùng bookmark #nang-luc */}
        <div id="nang-luc" className="relative -top-24" />
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              badge={dict.pages.home.featuredEventsBadge ?? 'Sự Kiện & Triển Lãm'}
              title={dict.pages.home.featuredEventsTitle ?? 'Sự Kiện Nổi Bật'}
              subtitle={
                dict.pages.home.featuredEventsSubtitle ??
                'Tham gia cùng Agrihub tại các hội chợ thương mại quốc tế, triển lãm thực phẩm và sự kiện xúc tiến nông sản hàng đầu.'
              }
            />
          </FadeIn>

          {/* Grid 3 sự kiện nổi bật */}
          <div className="mt-2 mb-6 sm:mb-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayEvents.map((post) => {
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
                            <span className="text-3xl">🎪</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase text-primary-700/80">
                              Agrihub Event
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

                        {/* Event date / location */}
                        {post.eventDate && (
                          <div className="text-xs text-primary-800 mb-2.5 flex flex-wrap items-center gap-1.5 font-medium bg-accent-gold/15 px-2.5 py-1 rounded-lg border border-accent-gold/30 w-fit">
                            <span>📅 {post.eventDate}</span>
                            {post.eventLocation && (
                              <>
                                <span className="text-slate-400">•</span>
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
                          <span>{dict.news?.readMore ?? 'Xem chi tiết'}</span>
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

          {/* Action Button: Điều hướng qua trang tin tức (lọc Sự kiện) */}
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mt-6">
              <Button
                href={`/${currentLang}/news?category=events`}
                variant="pill"
                size="md"
                className="shadow-xs hover:shadow-soft font-bold"
              >
                {dict.pages.home.viewAllEvents ?? 'Xem tất cả sự kiện →'}
              </Button>
            </div>
          </FadeIn>
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
                dict.pages.home.featuredNewsTitle ?? 'Tin Tức Nổi Bật'
              }
              subtitle={
                dict.pages.home.featuredNewsSubtitle ??
                'Cập nhật tin tức doanh nghiệp, xu hướng thị trường và thông tin mới nhất từ Agrihub.'
              }
            />
          </FadeIn>

          {/* Grid 3 bài viết nổi bật */}
          <div className="mt-2 mb-6 sm:mb-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayNews.map((post) => {
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
