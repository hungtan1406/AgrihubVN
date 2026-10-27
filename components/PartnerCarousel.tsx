'use client';

import React from 'react';
import Image from 'next/image';

export interface PartnerItem {
  name: string;
  logo: string;
}

interface PartnerCarouselProps {
  partners: PartnerItem[];
}

export default function PartnerCarousel({ partners }: PartnerCarouselProps) {
  // Lặp lại mảng đối tác 4 lần để tạo hiệu ứng cuộn vô tận mượt mà trên mọi kích cỡ màn hình
  const displayPartners = [
    ...partners,
    ...partners,
    ...partners,
    ...partners,
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Gradient mờ viền 2 bên tạo chiều sâu thị giác vô tận */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-cream-100 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-cream-100 to-transparent z-10" />

      {/* Marquee Track cuộn vô tận 60fps, tạm dừng khi rê chuột */}
      <div className="animate-marquee flex gap-4 sm:gap-6 items-center">
        {displayPartners.map((partner, idx) => (
          <div
            key={`${partner.name}-${idx}`}
            title={partner.name}
            className="group flex items-center justify-center bg-white p-3 sm:p-4 rounded-2xl border border-cream-200/90 shadow-2xs hover:border-primary-leaf/70 hover:shadow-soft transition-all duration-300 shrink-0 w-40 sm:w-52 h-20 sm:h-24 cursor-default"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="(max-width: 640px) 160px, 208px"
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
