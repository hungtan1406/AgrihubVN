'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export interface ProductCardItem {
  id: string;
  slug?: string;
  name: string;
  category: 'powder' | 'puree' | 'dried' | string;
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

  // Processing badge style mapping for clean industrial identity
  const getBadgeStyle = () => {
    const lower = (product.categoryName || '').toLowerCase();
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
    <div className="bg-white border border-cream-200/90 rounded-2xl p-5 shadow-soft hover:shadow-md hover:border-primary-leaf/60 transition-all duration-300 flex flex-col justify-between group">
      <div>
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

        {/* Technical Golden Metrics Grid (Instant side-by-side comparison for B2B buyers) */}
        <div className="grid grid-cols-3 gap-1 py-2 px-2 my-3 bg-cream-50/70 rounded-xl border border-cream-200/70 text-center">
          <div>
            <span className="block text-[10px] font-semibold text-slate-400 tracking-wider">
              {labels.moisture || 'ĐỘ ẨM'}
            </span>
            <span className="block text-xs font-bold text-primary-850 tabular-nums truncate">
              {product.moisture || '≤ 5.0%'}
            </span>
          </div>
          <div className="border-x border-cream-200">
            <span className="block text-[10px] font-semibold text-slate-400 tracking-wider">
              {isPuree ? 'BRIX' : (labels.mesh || 'ĐỘ MỊN')}
            </span>
            <span className="block text-xs font-bold text-primary-850 tabular-nums truncate">
              {isPuree ? (product.brix || 'Tự nhiên') : (product.mesh || '80-100 mesh')}
            </span>
          </div>
          <div>
            <span className="block text-[10px] font-semibold text-slate-400 tracking-wider">
              {labels.shelfLife || 'HẠN DÙNG'}
            </span>
            <span className="block text-xs font-bold text-primary-850 tabular-nums truncate">
              {product.shelfLife || '24 Tháng'}
            </span>
          </div>
        </div>

        {/* Applications Snippet */}
        {product.applications && (
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            <strong className="text-primary-850 font-semibold">{labels.applications || 'Ứng dụng:'} </strong>
            {product.applications}
          </p>
        )}
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
