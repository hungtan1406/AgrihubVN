import React from 'react';
import { ApplicationGroup } from '@/lib/i18n/product-tech-types';

interface ProductApplicationsMatrixProps {
  title?: string;
  groups: ApplicationGroup[];
  noticeText?: string;
}

export default function ProductApplicationsMatrix({
  title = 'Ứng dụng trong sản xuất F&B',
  groups,
  noticeText = 'Ứng dụng cần được đánh giá trên công thức thực tế của từng sản phẩm. AGRIHUB cung cấp mẫu thử R&D để khách hàng kiểm nghiệm độ ổn định và cảm quan trước khi sản xuất hàng loạt.',
}: ProductApplicationsMatrixProps) {
  // Category Icons mapping
  const getCategoryIcon = (groupName: string) => {
    const lower = groupName.toLowerCase();
    if (lower.includes('đồ uống') || lower.includes('beverage') || lower.includes('饮品')) return '🥤';
    if (lower.includes('sữa') || lower.includes('dairy') || lower.includes('乳品')) return '🥛';
    if (lower.includes('bánh') || lower.includes('bakery') || lower.includes('焙烤')) return '🥐';
    if (lower.includes('ngũ cốc') || lower.includes('cereal') || lower.includes('谷物')) return '🥣';
    if (lower.includes('sốt') || lower.includes('sauce') || lower.includes('果酱')) return '🍯';
    return '🍽️';
  };

  return (
    <section className="bg-white rounded-3xl border border-cream-200 shadow-soft p-6 sm:p-8 lg:p-10 mb-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-3 mb-6 border-b border-cream-200">
        <span className="w-3 h-3 rounded-xs bg-emerald-600" />
        <h2 className="text-lg sm:text-xl font-extrabold text-primary-950 uppercase tracking-wide">
          {title}
        </h2>
      </div>

      {/* 3 Application Group Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {groups.map((group, index) => (
          <div
            key={index}
            className="flex flex-col p-5 sm:p-6 rounded-2xl bg-cream-50/70 border border-cream-200/90 hover:border-primary-leaf/40 hover:bg-cream-100/60 transition-all shadow-2xs"
          >
            {/* Header with Icon and Title */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-9 h-9 rounded-xl bg-white border border-cream-200 flex items-center justify-center text-lg shadow-xs shrink-0">
                {getCategoryIcon(group.group)}
              </span>
              <h3 className="text-base font-bold text-primary-950">
                {group.group}
              </h3>
            </div>

            {/* List of Applications */}
            <div className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              <p className="flex items-start gap-2">
                <span className="text-primary-leaf font-bold shrink-0 mt-0.5">•</span>
                <span>{group.items}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* R&D Trial Compliance Notice */}
      <div className="p-4 rounded-xl bg-primary-50/80 border border-primary-100 flex items-start gap-3 text-xs sm:text-sm text-primary-950">
        <span className="text-primary-leaf text-base leading-none shrink-0 mt-0.5">ℹ️</span>
        <p className="leading-relaxed">
          <strong>Lưu ý kỹ thuật:</strong> {noticeText}
        </p>
      </div>
    </section>
  );
}
