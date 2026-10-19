import { Metadata } from 'next';
import { Locale } from './i18n';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://agrihub.vn';

interface SeoParams {
  lang: Locale;
  path?: string;
  pathname?: string;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  type?: 'website' | 'article';
}

const localeMap: Record<Locale, string> = {
  vi: 'vi_VN',
  en: 'en_US',
  zh: 'zh_CN',
};

const defaultKeywordsByLang: Record<Locale, string[]> = {
  vi: [
    'nguyên liệu nông sản chế biến',
    'bột trái cây xuất khẩu',
    'trái cây sấy thăng hoa',
    'nước cốt chanh dây',
    'bột thanh long đỏ',
    'gia công OEM nông sản',
    'Agrihub Việt Nam',
    'xuất khẩu nông sản B2B',
  ],
  en: [
    'fruit powder supplier Vietnam',
    'freeze-dried fruit exporter',
    'passion fruit puree B2B',
    'dragon fruit powder bulk',
    'OEM fruit ingredients',
    'Vietnamese food ingredients',
    'Agrihub Vietnam',
    'industrial food manufacturing ingredients',
  ],
  zh: [
    '越南果粉供应商',
    '冻干果干出口商',
    '百香果原汁批发',
    '红心火龙果粉',
    '农产品OEM代工',
    '工业级食品原料',
    'Agrihub 越南',
    '大宗农产品出口',
  ],
};

export function buildPageMetadata({
  lang,
  path = '',
  pathname,
  title,
  description,
  keywords,
  ogImage = '/images/logo-clean.png',
  type = 'website',
}: SeoParams): Metadata {
  const rawPath = pathname || path || '';
  const cleanPath = rawPath ? (rawPath.startsWith('/') ? rawPath : `/${rawPath}`) : '';
  const currentUrl = `${SITE_URL}/${lang}${cleanPath}`;
  const resolvedKeywords = keywords || defaultKeywordsByLang[lang] || defaultKeywordsByLang.vi;
  const resolvedOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

  return {
    title: {
      default: title,
      template: `%s | ${lang === 'vi' ? 'Agrihub Việt Nam' : lang === 'zh' ? 'Agrihub 越南' : 'Agrihub Vietnam'}`,
    },
    description,
    keywords: resolvedKeywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: currentUrl,
      languages: {
        vi: `${SITE_URL}/vi${cleanPath}`,
        en: `${SITE_URL}/en${cleanPath}`,
        zh: `${SITE_URL}/zh${cleanPath}`,
        'x-default': `${SITE_URL}/vi${cleanPath}`,
      },
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: lang === 'vi' ? 'Agrihub Việt Nam' : lang === 'zh' ? 'Agrihub 越南' : 'Agrihub Vietnam',
      locale: localeMap[lang] || 'vi_VN',
      alternateLocale: Object.values(localeMap).filter((l) => l !== localeMap[lang]),
      images: [
        {
          url: resolvedOgImage,
          width: 749,
          height: 550,
          alt: title,
        },
      ],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [resolvedOgImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
