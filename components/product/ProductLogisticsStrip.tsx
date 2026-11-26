import React from 'react';
import { PackagingStorageSpec } from '@/lib/i18n/product-tech-types';

interface ProductLogisticsStripProps {
  title?: string;
  specs: PackagingStorageSpec;
  labels?: {
    packaging?: string;
    shelfLife?: string;
    storage?: string;
  };
}

export default function ProductLogisticsStrip({
  title = 'Quy cách đóng gói và bảo quản',
  specs,
  labels = {
    packaging: 'Quy cách đóng gói',
    shelfLife: 'Hạn sử dụng',
    storage: 'Hướng dẫn bảo quản',
  },
}: ProductLogisticsStripProps) {
  return (
    <section className="bg-white rounded-3xl border border-cream-200 shadow-soft p-6 sm:p-8 lg:p-10 mb-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 mb-6 border-b border-cream-200">
        <span className="w-3 h-3 rounded-xs bg-primary-leaf" />
        <h2 className="text-lg sm:text-xl font-extrabold text-primary-950 uppercase tracking-wide">
          {title}
        </h2>
      </div>

      {/* 3 Dedicated Rows strictly following IT instructions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Row 1: Packaging */}
        <div className="p-5 rounded-2xl bg-cream-50/70 border border-cream-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <span>📦</span>
              <span>{labels.packaging}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
              {specs.packaging}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-cream-200/60 text-[11px] text-slate-500 font-mono">
            Tiêu chuẩn bao bì B2B
          </div>
        </div>

        {/* Row 2: Shelf Life */}
        <div className="p-5 rounded-2xl bg-cream-50/70 border border-cream-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <span>⏳</span>
              <span>{labels.shelfLife}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
              {specs.shelfLife}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-cream-200/60 text-[11px] text-slate-500 font-mono">
            Chứng nhận theo lô sản xuất
          </div>
        </div>

        {/* Row 3: Storage Instructions */}
        <div className="p-5 rounded-2xl bg-cream-50/70 border border-cream-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <span>🌡️</span>
              <span>{labels.storage}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
              {specs.storage}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-cream-200/60 text-[11px] text-slate-500 font-mono">
            Kiểm soát điều kiện lưu kho
          </div>
        </div>
      </div>
    </section>
  );
}
