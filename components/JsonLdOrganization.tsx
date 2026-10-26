import React from 'react';
import { SITE_URL } from '@/lib/seo';

export default function JsonLdOrganization() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Agrihub Vietnam',
    alternateName: ['Agrihub Việt Nam', 'Agrihub 越南'],
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-clean.png`,
    image: `${SITE_URL}/images/logo-clean.png`,
    description:
      'Premier Vietnamese supplier and exporter of industrial food ingredients (fruit powders, dried fruits, concentrated purees) for food & beverage manufacturers and global importers.',
    slogan: 'Growing Value Together - From Vietnamese Farms to Global Markets',
    foundingDate: '2014',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
      addressRegion: 'Vietnam',
      streetAddress: 'Ho Chi Minh City, Vietnam',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+84 90 123 4567',
        contactType: 'sales',
        email: 'sales@agrihub.vn',
        areaServed: ['VN', 'AE', 'BG', 'CN', 'KH'],
        availableLanguage: ['Vietnamese', 'English', 'Chinese'],
      },
    ],
    knowsAbout: [
      'Tropical Fruit Powders (Spray-Dried & Milled)',
      'Freeze-Dried Fruits (Mango, Jackfruit, Pitaya)',
      'Fruit Purees & Concentrates (Passion Fruit Puree)',
      'OEM/ODM Food Ingredients Manufacturing',
      'Food Safety Standards ISO 22000, HACCP, Halal, FDA',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
