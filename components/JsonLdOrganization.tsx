import React from 'react';
import { SITE_URL } from '@/lib/seo';

export default function JsonLdOrganization() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Agrihub Vietnam',
    alternateName: 'Agrihub Việt Nam',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-clean.png`,
    image: `${SITE_URL}/images/logo-clean.png`,
    description:
      'Nhà cung cấp và xuất khẩu nguyên liệu nông sản chế biến (bột trái cây, trái cây sấy, nước cốt) uy tín cho các nhà máy F&B và nhà nhập khẩu toàn cầu.',
    slogan: 'Từ nông trại Việt Nam đến thị trường thế giới - Growing Value Together',
    foundingDate: '2014',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
      addressRegion: 'Vietnam',
      streetAddress: '[CẦN BỔ SUNG: Địa chỉ trụ sở chính thức]',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '[CẦN BỔ SUNG: Hotline B2B]',
        contactType: 'sales',
        email: 'sales@agrihub.vn',
        areaServed: ['VN', 'AE', 'BG', 'CN', 'KH'],
        availableLanguage: ['Vietnamese', 'English', 'Chinese'],
      },
    ],
    knowsAbout: [
      'Bột trái cây nhiệt đới (Fruit Powders)',
      'Trái cây sấy thăng hoa (Freeze-Dried Fruits)',
      'Nước cốt trái cây & Puree (Fruit Concentrates)',
      'Gia công OEM/ODM nguyên liệu thực phẩm',
      'Tiêu chuẩn an toàn thực phẩm ISO 22000, HACCP, Halal',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
