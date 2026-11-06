'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import { Locale, Dictionary } from '@/lib/i18n';

export interface DisplayProductItem {
  id: string;
  slug?: string;
  name: string;
  category: 'powder' | 'puree' | 'dried' | 'frozen' | string;
  categoryName: string;
  badgeColor?: string;
  specs?: string;
  applications?: string;
  moisture?: string;
  mesh?: string;
  brix?: string;
  shelfLife?: string;
  packaging?: string;
  storage?: string;
  image?: string;
}

interface HomeProductShowcaseProps {
  items: DisplayProductItem[];
  currentLang: Locale;
  dict: Dictionary;
  ui: {
    tds: {
      viewBtn: string;
      sampleBtn: string;
      moisture?: string;
      mesh?: string;
      shelfLife?: string;
      applications?: string;
    };
  };
}

export default function HomeProductShowcase({
  items,
  currentLang,
  dict,
  ui,
}: HomeProductShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'powder' | 'puree' | 'dried' | 'frozen'
  >('all');

  const filteredIngredients =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category === activeCategory);

  const tabs = [
    { id: 'all', label: dict.pages.home.tabAll },
    { id: 'powder', label: dict.pages.home.tabPowder },
    { id: 'puree', label: dict.pages.home.tabPuree },
    { id: 'dried', label: dict.pages.home.tabDried },
    { id: 'frozen', label: dict.pages.home.tabFrozen || 'Trái cây đông lạnh' },
  ];

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="w-full overflow-x-auto no-scrollbar py-1.5 px-1 mb-8">
        <div className="flex sm:justify-center min-w-max mx-auto">
          <div className="inline-flex items-center bg-cream-300/80 p-1 sm:p-1.5 rounded-full border border-cream-400/40 text-xs font-bold shadow-2xs gap-0.5 sm:gap-1 whitespace-nowrap shrink-0">
            {tabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id as typeof activeCategory)}
                  className={`relative px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full transition-all text-xs font-bold whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-primary-leaf text-white shadow-xs'
                      : 'text-primary-850 hover:text-primary-leaf'
                  }`}
                >
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ingredients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIngredients.map((item) => (
          <div key={item.id}>
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
          </div>
        ))}
      </div>

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
    </>
  );
}
