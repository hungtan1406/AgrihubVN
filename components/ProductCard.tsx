'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export interface ProductCardItem {
  id: string;
  slug?: string;
  name: string;
  category: 'powder' | 'puree' | 'dried' | 'frozen' | string;
  storage?: string;
  categoryName: string;
  specs?: string;
  moisture?: string;
  mesh?: string;
  brix?: string;
  shelfLife?: string;
  packaging?: string;
  applications?: string;
  image?: string;
}

export interface ProductCardProps {
  product: ProductCardItem;
  currentLang: string;
  onViewTds?: (id: string) => void;
  tdsHref?: string;
  labels?: {
    viewTds?: string;
    sampleBtn?: string;
    moisture?: string;
    mesh?: string;
    shelfLife?: string;
    applications?: string;
    grade?: string;
  };
  sampleHref?: string;
}

export default function ProductCard({
  product,
  currentLang,
  onViewTds,
  tdsHref,
  labels = {
    viewTds: 'Xem TDS Spec',
    sampleBtn: 'Mẫu thử',
    moisture: 'Độ ẩm',
    mesh: 'Độ mịn',
    shelfLife: 'Hạn dùng',
    applications: 'Ứng dụng:',
    grade: 'GRADE: F&B',
  },
  sampleHref = '#bao-gia',
}: ProductCardProps) {
  const detailLink = tdsHref || `/${currentLang}/products/${product.slug || product.id}`;
  const isPuree = product.category === 'puree';
  const isFrozen = product.category === 'frozen';

  // Resolve product category to standard groups: powder | puree | dried | frozen
  const rawCat = (product.category || '').toLowerCase();
  const rawCatName = (product.categoryName || '').toLowerCase();

  let categoryGroup: 'powder' | 'puree' | 'dried' | 'frozen' = 'powder';
  if (
    rawCat === 'frozen' ||
    rawCatName.includes('đông lạnh') ||
    rawCatName.includes('frozen') ||
    rawCatName.includes('iqf') ||
    rawCatName.includes('冷冻')
  ) {
    categoryGroup = 'frozen';
  } else if (
    rawCat === 'puree' ||
    rawCatName.includes('cốt') ||
    rawCatName.includes('pure') ||
    rawCatName.includes('juice') ||
    rawCatName.includes('原浆') ||
    rawCatName.includes('原汁')
  ) {
    categoryGroup = 'puree';
  } else if (
    rawCat === 'dried' ||
    rawCatName.includes('sấy') ||
    rawCatName.includes('dried') ||
    rawCatName.includes('thăng hoa') ||
    rawCatName.includes('水果干') ||
    rawCatName.includes('冻干')
  ) {
    categoryGroup = 'dried';
  } else {
    categoryGroup = 'powder';
  }

  // Get standardized specs items based on category and language
  const getProductSpecsList = () => {
    if (categoryGroup === 'puree') {
      if (currentLang === 'en') {
        return [
          { label: 'Packaging', value: product.packaging || '1kg/bag, 5kg/bag, 10kg/bag, bottled or PET or custom requested' },
          { label: 'Storage Temperature', value: product.storage || '18°C' },
        ];
      }
      if (currentLang === 'zh') {
        return [
          { label: '包装规格', value: product.packaging || '1kg/袋、5kg/袋、10kg/袋，瓶装或PET装或按客户要求定制' },
          { label: '储存温度', value: product.storage || '18°C' },
        ];
      }
      return [
        { label: 'Quy cách đóng gói', value: product.packaging || '1kg/bịch, 5kg/bịch, 10kg/bịch, đóng chai hoặc PET hoặc theo yêu cầu của khách hàng' },
        { label: 'Nhiệt độ bảo quản', value: product.storage || '18°C' },
      ];
    }

    if (categoryGroup === 'dried') {
      if (currentLang === 'en') {
        return [
          { label: 'Packaging', value: product.packaging || '400g' },
          { label: 'Storage', value: product.storage || 'Store in a cool, dry place and seal tightly after use' },
        ];
      }
      if (currentLang === 'zh') {
        return [
          { label: '包装规格', value: product.packaging || '400g' },
          { label: '储存条件', value: product.storage || '置于阴凉干燥处，使用后密封保存' },
        ];
      }
      return [
        { label: 'Quy cách đóng gói', value: product.packaging || '400g' },
        { label: 'Bảo quản', value: product.storage || 'Nơi khô ráo, thoáng mát và đóng kín sau khi dùng' },
      ];
    }

    if (categoryGroup === 'frozen') {
      if (currentLang === 'en') {
        return [
          { label: 'Packaging', value: product.packaging || '1kg/bag, 5kg/bag, 10kg/bag or custom requested' },
          { label: 'Shelf Life', value: product.shelfLife || '24 months from manufacturing date' },
          { label: 'Storage Temperature', value: product.storage || '18 °C' },
        ];
      }
      if (currentLang === 'zh') {
        return [
          { label: '包装规格', value: product.packaging || '1kg/袋、5kg/袋、10kg/袋或按客户要求定制' },
          { label: '保质期', value: product.shelfLife || '自生产之日起24个月' },
          { label: '储存温度', value: product.storage || '18 °C' },
        ];
      }
      return [
        { label: 'Quy cách đóng gói', value: product.packaging || '1kg/bịch, 5kg/bịch, 10kg/bịch hoặc theo yêu cầu của khách hàng' },
        { label: 'Hạn sử dụng', value: product.shelfLife || '24 tháng kể từ ngày sản xuất' },
        { label: 'Nhiệt độ bảo quản', value: product.storage || '18 °C' },
      ];
    }

    // Default: powder
    if (currentLang === 'en') {
      return [
        { label: 'Packaging', value: product.packaging || '10g - 5000g/bag or custom requested' },
        { label: 'Shelf Life', value: product.shelfLife || '12 months from manufacturing date' },
        { label: 'Storage', value: product.storage || 'Store in cool dry place, avoid direct sunlight' },
      ];
    }
    if (currentLang === 'zh') {
      return [
        { label: '包装规格', value: product.packaging || '10g - 5000g/袋或按客户要求定制' },
        { label: '保质期', value: product.shelfLife || '自生产之日起12个月' },
        { label: '储存条件', value: product.storage || '阴凉干燥处存放，避免阳光直射' },
      ];
    }
    return [
      { label: 'Quy cách đóng gói', value: product.packaging || '10g - 5000g/bịch hoặc theo yêu cầu khách hàng' },
      { label: 'Hạn sử dụng', value: product.shelfLife || '12 tháng tính từ ngày sản xuất' },
      { label: 'Bảo quản', value: product.storage || 'Nơi khô ráo thoáng mát, tránh ánh nắng trực tiếp' },
    ];
  };

  const specsList = getProductSpecsList();

  // Processing badge style mapping for clean industrial identity
  const getBadgeStyle = () => {
    const lower = (product.categoryName || '').toLowerCase();
    if (lower.includes('đông lạnh') || lower.includes('frozen') || lower.includes('iqf') || isFrozen) {
      return 'bg-cyan-50 text-cyan-900 border-cyan-200/80';
    }
    if (lower.includes('phun') || lower.includes('spray')) {
      return 'bg-amber-50 text-amber-900 border-amber-200/80';
    }
    if (lower.includes('thăng hoa') || lower.includes('freeze')) {
      return 'bg-emerald-50 text-emerald-900 border-emerald-200/80';
    }
    if (lower.includes('pure') || lower.includes('cốt') || isPuree) {
      return 'bg-orange-50 text-orange-950 border-orange-200/80';
    }
    return 'bg-primary-50 text-primary-900 border-primary-200/80';
  };

  return (
    <div className="bg-white border border-cream-200/90 rounded-2xl p-5 shadow-soft hover:shadow-md hover:border-primary-leaf/60 transition-all duration-300 flex flex-col justify-between group h-full">
      <div className="flex-1 flex flex-col">
        {/* Product Image: 1:1 Aspect Ratio with Industrial Fallback Blueprint */}
        <Link
          href={detailLink}
          className="mb-4 overflow-hidden rounded-xl bg-cream-50 aspect-square relative border border-cream-200/60 block group/img"
        >
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
              className="object-cover group-hover/img:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-cream-50 via-white to-cream-100/70 select-none">
              {/* Technical Industrial Silhouette SVG */}
              <div className="w-16 h-16 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-850 mb-3 group-hover/img:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-primary-leaf"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 2h10l2 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6l2-4z" />
                  <line x1="5" y1="6" x2="19" y2="6" />
                  <path d="M10 12h4" />
                  <path d="M10 16h4" />
                </svg>
              </div>
              <span className="text-xs font-bold text-primary-850 line-clamp-1">
                {product.name}
              </span>
              <span className="text-[10px] text-slate-500 font-mono tracking-wider mt-1">
                AGRIHUB-SPEC-B2B
              </span>
            </div>
          )}
        </Link>

        {/* Processing Method & Quality Grade Badges */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span
            className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getBadgeStyle()}`}
          >
            {product.categoryName}
          </span>
          <span className="text-[10px] font-semibold tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/50">
            {labels.grade || 'GRADE: F&B'}
          </span>
        </div>

        {/* Product Title */}
        <h3 className="text-base font-bold text-primary-850 leading-snug group-hover:text-primary-leaf transition-colors mb-1.5">
          <Link href={detailLink}>{product.name}</Link>
        </h3>

        {/* Category Specifications List (Replaces old metrics grid & application snippet) */}
        <div className="my-3.5 p-3.5 bg-cream-50/75 rounded-xl border border-cream-200/80 space-y-2 text-xs flex-1 flex flex-col justify-center">
          {specsList.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-leaf shrink-0 mt-1.5" />
              <p className="leading-relaxed">
                <span className="font-semibold text-primary-900">{item.label}: </span>
                <span className="text-slate-700">{item.value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Card Actions: TDS Specs & Sample Request */}
      <div className="pt-3.5 border-t border-cream-200/80 flex items-center justify-between gap-2 mt-auto">
        {onViewTds ? (
          <button
            type="button"
            onClick={() => onViewTds(product.id)}
            className="text-xs font-bold text-primary-leaf hover:text-primary-leafHover transition-colors flex items-center gap-1.5 py-1 px-1.5 -ml-1 rounded-lg hover:bg-primary-50 min-h-[36px]"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span>{labels.viewTds || 'Xem TDS Spec'}</span>
          </button>
        ) : (
          <Link
            href={detailLink}
            className="text-xs font-bold text-primary-leaf hover:text-primary-leafHover transition-colors flex items-center gap-1.5 py-1 px-1.5 -ml-1 rounded-lg hover:bg-primary-50 min-h-[36px]"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span>{labels.viewTds || 'Xem TDS Spec'}</span>
          </Link>
        )}

        <Button
          href={sampleHref}
          variant="pill"
          size="sm"
          className="text-xs font-semibold py-1.5 px-3.5 shrink-0"
        >
          {labels.sampleBtn || 'Mẫu thử'}
        </Button>
      </div>
    </div>
  );
}
