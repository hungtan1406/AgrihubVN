import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Locale, Dictionary, getFooterTranslations } from '@/lib/i18n';
import Container from './Container';
import Button from './Button';

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
