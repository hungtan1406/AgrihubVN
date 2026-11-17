import React from 'react';
import { Locale, Dictionary, getIngredients, getHomePageUi } from '@/lib/i18n';
import { NewsEvent, Product } from '@/lib/wordpress';
import {
  HomeHero,
  HomeAboutSection,
  HomeProductsSection,
  HomeOemSection,
  HomeEventsSection,
  HomeQualitySection,
  HomeNewsSection,
  HomeQuoteSection,
} from '@/components/home';

interface HomePageContentProps {
  currentLang: Locale;
  dict: Dictionary;
  featuredNews?: NewsEvent[];
  featuredEvents?: NewsEvent[];
  featuredProducts?: Product[];
  totalProducts?: number;
}

function getProductCategoryKey(
  categoryName: string,
): 'powder' | 'puree' | 'dried' | 'frozen' {
  const lower = (categoryName || '').toLowerCase();
  if (
    lower.includes('đông lạnh') ||
    lower.includes('frozen') ||
    lower.includes('iqf') ||
    lower.includes('冷冻')
  ) {
    return 'frozen';
  }
  if (
    lower.includes('bột') ||
    lower.includes('powder') ||
    lower.includes('phun') ||
    lower.includes('nghiền') ||
    lower.includes('粉')
  ) {
    return 'powder';
  }
  if (
    lower.includes('pure') ||
    lower.includes('cốt') ||
    lower.includes('浆') ||
    lower.includes('汁')
  ) {
    return 'puree';
  }
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

export default function HomePageContent({
  currentLang,
  dict,
  featuredNews = [],
  featuredEvents = [],
  featuredProducts = [],
}: HomePageContentProps) {
  // Localized datasets
  const ingredients = getIngredients(currentLang);
  const ui = getHomePageUi(currentLang);

  // Kết hợp sản phẩm từ WordPress API với dữ liệu hiển thị đa ngôn ngữ
  const displayItems =
    featuredProducts && featuredProducts.length > 0
      ? featuredProducts.map((p) => {
          const match = ingredients.find(
            (ing) => ing.id === p.slug || ing.id === String(p.id),
          );
          // Ưu tiên categoryGroup từ ACF WordPress (powder, puree, dried, frozen)
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

  return (
    <div className="flex flex-col">
      {/* SECTION 1: HERO BANNER */}
      <HomeHero currentLang={currentLang} dict={dict} ui={ui} />

      {/* SECTION 2: VỀ AGRIHUB & NĂNG LỰC CUNG ỨNG NÔNG SẢN CHẾ BIẾN */}
      <HomeAboutSection currentLang={currentLang} ui={ui} />

      {/* SECTION 3: DANH MỤC NGUYÊN LIỆU TRÁI CÂY CHẾ BIẾN */}
      <HomeProductsSection
        items={displayItems}
        currentLang={currentLang}
        dict={dict}
        ui={ui}
      />

      {/* SECTION 4: DỊCH VỤ TẠI AGRIHUB & GIA CÔNG OEM / ODM */}
      <HomeOemSection dict={dict} ui={ui} />

      {/* SECTION 5: SỰ KIỆN NỔI BẬT & TRIỂN LÃM */}
      <HomeEventsSection
        currentLang={currentLang}
        dict={dict}
        featuredEvents={featuredEvents}
      />

      {/* SECTION 6: TIÊU CHUẨN CHẤT LƯỢNG & CHỨNG NHẬN */}
      <HomeQualitySection dict={dict} ui={ui} />

      {/* SECTION 7: TIN TỨC & HOẠT ĐỘNG NỔI BẬT */}
      <HomeNewsSection
        currentLang={currentLang}
        dict={dict}
        featuredNews={featuredNews}
      />

      {/* SECTION 8: FORM B2B TOÀN DIỆN & YÊU CẦU MẪU THỬ */}
      <HomeQuoteSection currentLang={currentLang} dict={dict} />
    </div>
  );
}
