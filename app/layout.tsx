import type { Metadata, Viewport } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';
import { SITE_URL } from '@/lib/seo';
import JsonLdOrganization from '@/components/JsonLdOrganization';
import ScrollProgress from '@/components/animations/ScrollProgress';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-be-vietnam-pro',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Agrihub Việt Nam - Nhà Cung Ứng & Xuất Khẩu Nguyên Liệu Nông Sản Chế Biến',
    template: '%s | Agrihub Việt Nam',
  },
  description:
    'Cung ứng ổn định Bột trái cây, Trái cây sấy thăng hoa và Nước cốt chuẩn quốc tế cho các nhà máy F&B và nhà nhập khẩu toàn cầu.',
  icons: {
    icon: '/images/logo-clean.png',
    shortcut: '/images/logo-clean.png',
    apple: '/images/logo-clean.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#124322',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`scroll-smooth ${beVietnamPro.variable}`}>
      <head>
        <JsonLdOrganization />
      </head>
      <body className={`${beVietnamPro.className} font-sans min-h-screen flex flex-col bg-cream-100 text-primary-850 antialiased`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
