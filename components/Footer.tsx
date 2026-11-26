import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Locale, Dictionary, getFooterTranslations } from '@/lib/i18n';
import Container from './Container';
import Button from './Button';

// [CẦN BỔ SUNG: Cập nhật đường dẫn Fanpage Facebook, Zalo OA và số WhatsApp chính thức của Agrihub]
const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com',
  zalo: 'https://zalo.me/84901234567',
  whatsapp: 'https://wa.me/84901234567',
} as const;

interface FooterProps {
  lang: Locale;
  dict: Dictionary;
}

export default function Footer({ lang, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const f = getFooterTranslations(lang);

  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-cream-100 pt-12 sm:pt-14 pb-8 border-t border-primary-800/80">
      <Container>
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 pb-8 sm:pb-10 border-b border-primary-800/60">
          {/* Column 1: Brand & Positioning - Logo without background */}
          <div className="space-y-3.5">
            <Link
              href={`/${lang}`}
              className="inline-flex items-center shrink-0 hover:opacity-90 transition-opacity"
              title="Agrihub Vietnam"
            >
              <Image
                src="/images/logo-clean.png"
                alt="Agrihub Vietnam"
                width={84}
                height={61}
                className="h-12 w-auto object-contain brightness-105"
              />
            </Link>
            <p className="text-sm text-cream-200/80 leading-relaxed">
              {dict.footer.companyDescription}
            </p>
          </div>

          {/* Column 2: Products Showcase (4 Core Categories) */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-primary-leaf pl-2.5">
              {dict.footer.productsTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-cream-200/80">
              <li>
                <Link
                  href={`/${lang}/products`}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {f.itemPowder}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/products`}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {f.itemDried}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/products`}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {f.itemPuree}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/products`}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {f.itemFrozen}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation Links */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-primary-leaf pl-2.5">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm text-cream-200/80">
              <li>
                <Link href={`/${lang}`} className="hover:text-white hover:underline transition-colors">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about-us`} className="hover:text-white hover:underline transition-colors">
                  {dict.nav.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/products`} className="hover:text-white hover:underline transition-colors">
                  {dict.nav.products}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/news`} className="hover:text-white hover:underline transition-colors">
                  {dict.nav.news}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="hover:text-white hover:underline transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-primary-leaf pl-2.5">
              {dict.footer.contactTitle}
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-cream-200/80">
              <p className="leading-relaxed">
                <strong className="text-white">{f.lblHeadquarters}</strong>{' '}
                {dict.footer.addressLabel.replace(/^[^:]*:\s*/, '')}
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">{f.lblFactory}</strong>{' '}
                {dict.footer.factoryLabel.replace(/^[^:]*:\s*/, '')}
              </p>
              <p>
                <strong className="text-white">{f.lblEmail}</strong>{' '}
                <a
                  href="mailto:sales@agrihub.vn"
                  className="text-accent-goldLight hover:text-white hover:underline font-bold transition-colors"
                >
                  sales@agrihub.vn
                </a>
              </p>
              <p>
                <strong className="text-white">{f.lblHotline}</strong>{' '}
                <a
                  href="tel:+84901234567"
                  className="text-accent-goldLight hover:text-white hover:underline font-bold transition-colors"
                >
                  +84 (0) 90 123 4567
                </a>
              </p>

              {/* Social & Direct Messaging Channels: Facebook, Zalo, WhatsApp */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={f.socialFacebookLabel}
                  title={f.socialFacebookLabel}
                  className="inline-flex items-center justify-center w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-primary-800/60 border border-primary-700/70 text-cream-100 hover:bg-primary-leaf hover:border-primary-leaf hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-goldLight focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
                  </svg>
                </a>

                <a
                  href={SOCIAL_LINKS.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={f.socialZaloLabel}
                  title={f.socialZaloLabel}
                  className="inline-flex items-center justify-center w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-primary-800/60 border border-primary-700/70 text-cream-100 hover:bg-primary-leaf hover:border-primary-leaf hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-goldLight focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950"
                >
                  <svg
                    className="w-[22px] h-[22px]"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 4C12.4 4 3 12.6 3 23.2c0 5.6 2.6 10.6 6.8 14.1-.4 2.3-1.6 5.1-3.3 6.9-.4.4-.1 1.1.5 1.1 3.7-.1 7.3-1.5 10.3-3.9 2.1.6 4.4 1 6.7 1 11.6 0 21-8.6 21-19.2S35.6 4 24 4ZM7.2 17h9v2.4l-5.6 8h5.8V30H7v-2.4l5.7-8H7.2V17Zm17.1 3.5h2.5V30h-2.5v-1c-.7.8-1.6 1.2-2.7 1.2-2.2 0-3.9-2.1-3.9-4.9s1.7-5 3.9-5c1.1 0 2 .4 2.7 1.2v-1Zm-2.3 2.4a2.1 2.4 0 1 0 0 4.8 2.1 2.4 0 0 0 0-4.8Zm6.5-6.1h2.6V30h-2.6V16.8Zm8.5 3.5c2.6 0 4.6 2.2 4.6 5s-2 4.9-4.6 4.9-4.6-2.2-4.6-4.9 2-5 4.6-5Zm0 2.6a2 2.4 0 1 0 0 4.8 2 2.4 0 0 0 0-4.8Z"
                    />
                  </svg>
                </a>

                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={f.socialWhatsappLabel}
                  title={f.socialWhatsappLabel}
                  className="inline-flex items-center justify-center w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-primary-800/60 border border-primary-700/70 text-cream-100 hover:bg-primary-leaf hover:border-primary-leaf hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-goldLight focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Z" />
                    <path d="M16.56 13.99c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29Z" />
                  </svg>
                </a>
              </div>
              <div className="pt-2">
                <Button
                  href={`/${lang}/contact`}
                  variant="primary"
                  size="sm"
                  className="font-bold shadow-xs hover:shadow-md"
                >
                  <span>{f.quoteCta}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Centered */}
        <div className="pt-8 text-center text-xs text-cream-200/60 font-medium">
          <p>
            &copy; {currentYear} {dict.common.brandName}. {dict.footer.rightsReserved}
          </p>
        </div>
      </Container>
    </footer>
  );
}
