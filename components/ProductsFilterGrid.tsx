'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Locale, Dictionary } from '@/lib/i18n';
import { Product } from '@/lib/wordpress';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';

interface ProductIngredientLike {
  id: string;
  category?: 'powder' | 'puree' | 'dried' | 'frozen';
  categoryName?: string;
  name?: string;
  specs?: string;
  moisture?: string;
  mesh?: string;
  brix?: string;
  shelfLife?: string;
  packaging?: string;
  storage?: string;
  applications?: string;
  image?: string;
}

interface ProductsFilterGridProps {
  products: Product[];
  localizedIngredients: ProductIngredientLike[];
  currentLang: Locale;
  labels: {
    viewTds: string;
    sampleBtn: string;
    moistureLabel: string;
    meshLabel: string;
    shelfLifeLabel: string;
    appLabel: string;
  };
  dict: Dictionary;
}

type CategoryTab = 'all' | 'powder' | 'puree' | 'dried' | 'frozen';

export default function ProductsFilterGrid({
  products,
  localizedIngredients,
  currentLang,
  labels,
  dict,
}: ProductsFilterGridProps) {
  const [activeTab, setActiveTab] = useState<CategoryTab>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Chuẩn hóa và ánh xạ toàn bộ 100% sản phẩm
  const allFormattedProducts = useMemo(() => {
    return products.map((p) => {
      const match = localizedIngredients.find(
        (ing) => ing.id === p.slug || ing.id === String(p.id),
      );
      const displayName = p.name || match?.name || p.slug;
      const displayCategory = p.processingMethod || match?.categoryName || p.category;
      const displaySpecs = p.specs || match?.specs || '';
      const displayApp = p.application || match?.applications || '';

      // Xác định category group: powder | puree | dried | frozen
      let catGroup: CategoryTab = 'powder';
      const rawGroup = (p.categoryGroup || match?.category || '').toLowerCase();
      if (rawGroup === 'frozen' || rawGroup.includes('đông') || rawGroup.includes('cold') || rawGroup.includes('iqf')) {
        catGroup = 'frozen';
      } else if (rawGroup === 'puree' || rawGroup.includes('cốt') || rawGroup.includes('juice') || rawGroup.includes('浆')) {
        catGroup = 'puree';
      } else if (rawGroup === 'dried' || rawGroup.includes('sấy') || rawGroup.includes('freeze') || rawGroup.includes('干')) {
        catGroup = 'dried';
      } else {
        catGroup = 'powder';
      }

      return {
        id: String(p.slug || p.id),
        slug: p.slug,
        name: displayName,
        category: catGroup,
        categoryName: displayCategory,
        specs: displaySpecs,
        moisture: p.moisture || match?.moisture,
        mesh: p.mesh || match?.mesh,
        brix: p.brix || match?.brix,
        shelfLife: p.shelfLife || match?.shelfLife,
        packaging: p.packaging || match?.packaging,
        storage: p.storage || match?.storage,
        applications: displayApp,
        image: p.image || match?.image,
      };
    });
  }, [products, localizedIngredients]);

  // Đếm số lượng sản phẩm cho từng danh mục
  const counts = useMemo(() => {
    const res: Record<CategoryTab, number> = {
      all: allFormattedProducts.length,
      powder: 0,
      puree: 0,
      dried: 0,
      frozen: 0,
    };
    allFormattedProducts.forEach((p) => {
      if (p.category in res) {
        res[p.category as CategoryTab]++;
      }
    });
    return res;
  }, [allFormattedProducts]);

  // Bộ lọc sản phẩm theo tab và ô tìm kiếm
  const filteredProducts = useMemo(() => {
    return allFormattedProducts.filter((item) => {
      const matchCategory = activeTab === 'all' || item.category === activeTab;
      if (!matchCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        item.name.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q) ||
        item.specs.toLowerCase().includes(q) ||
        item.applications.toLowerCase().includes(q)
      );
    });
  }, [allFormattedProducts, activeTab, searchQuery]);

  const tabs: { id: CategoryTab; label: string }[] = [
    { id: 'all', label: dict.pages.home.tabAll || 'Tất cả' },
    { id: 'powder', label: dict.pages.home.tabPowder || 'Bột trái cây' },
    { id: 'puree', label: dict.pages.home.tabPuree || 'Nước cốt' },
    { id: 'dried', label: dict.pages.home.tabDried || 'Trái cây sấy' },
    { id: 'frozen', label: dict.pages.home.tabFrozen || 'Trái cây đông lạnh' },
  ];

  const searchPlaceholder =
    currentLang === 'en'
      ? 'Search product name, applications, specs...'
      : currentLang === 'zh'
      ? '搜索产品名称、核心应用、技术指标...'
      : 'Tìm kiếm tên sản phẩm, ứng dụng F&B, thông số kỹ thuật...';

  const emptyNotice =
    currentLang === 'en'
      ? 'No products match your filter criteria.'
      : currentLang === 'zh'
      ? '未找到符合条件的产品。'
      : 'Không tìm thấy sản phẩm phù hợp với bộ lọc.';

  const resetFilterText =
    currentLang === 'en'
      ? 'Show All Products'
      : currentLang === 'zh'
      ? '显示全部产品'
      : 'Xem tất cả sản phẩm';

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Thanh điều khiển: Tabs danh mục & Ô tìm kiếm nhanh */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-cream-100/60 p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-cream-200/80">
        {/* Category Tabs */}
        <div className="w-full lg:w-auto overflow-x-auto no-scrollbar py-0.5">
          <div className="inline-flex items-center bg-cream-300/80 p-1 rounded-full border border-cream-400/30 text-xs font-bold gap-1 shrink-0">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const count = counts[tab.id];
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors text-xs font-bold whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? 'text-white'
                      : 'text-primary-850 hover:text-primary-leaf'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProductFilterPill"
                      className="absolute inset-0 bg-primary-leaf rounded-full shadow-xs"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                  <span
                    className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-cream-400/50 text-primary-850'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Ô tìm kiếm nhanh */}
        <div className="relative w-full lg:w-72 shrink-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white rounded-full border border-cream-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-leaf/30 focus:border-primary-leaf shadow-2xs transition-all"
          />
          <svg
            className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
        </div>
      </div>

      {/* Hiển thị danh sách sản phẩm với animation */}
      {filteredProducts.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((p) => (
              <motion.div
                layout
                key={p.slug}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <ProductCard
                  product={p}
                  currentLang={currentLang}
                  tdsHref={`/${currentLang}/products/${p.slug}`}
                  labels={{
                    viewTds: labels.viewTds,
                    sampleBtn: labels.sampleBtn,
                    moisture: labels.moistureLabel,
                    mesh: labels.meshLabel,
                    shelfLife: labels.shelfLifeLabel,
                    applications: labels.appLabel,
                  }}
                  sampleHref={`/${currentLang}/contact`}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty State */
        <div className="py-12 sm:py-16 text-center bg-cream-50 rounded-3xl border border-dashed border-cream-300 p-8">
          <p className="text-slate-600 text-sm font-medium mb-4">
            {emptyNotice}
          </p>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => {
              setActiveTab('all');
              setSearchQuery('');
            }}
          >
            {resetFilterText}
          </Button>
        </div>
      )}
    </div>
  );
}
