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
    <footer className="bg-cream-100 text-primary-850 pt-12 sm:pt-14 pb-8 border-t border-cream-200">
      <Container>
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 pb-8 sm:pb-10 border-b border-cream-200">
          {/* Column 1: Brand & Positioning */}
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
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              {dict.footer.companyDescription}
            </p>
            {/* Compliance & Quality Badge */}
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-200 text-primary-950 text-xs font-bold border border-cream-300 shadow-2xs">
                <span>🌱</span>
                <span>ISO 22000 • HACCP • FDA Compliant</span>
              </span>
            </div>
          </div>

          {/* Column 2: Products Showcase (4 Core Categories) */}
          <div>
            <h3 className="text-primary-850 text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-primary-leaf pl-2.5">
              {dict.footer.productsTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link
                  href={`/${lang}/products`}
                  className="hover:text-primary-leaf hover:underline transition-colors"
                >
                  {f.itemPowder}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/products`}
                  className="hover:text-primary-leaf hover:underline transition-colors"
                >
                  {f.itemDried}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/products`}
                  className="hover:text-primary-leaf hover:underline transition-colors"
                >
                  {f.itemPuree}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/products`}
                  className="hover:text-primary-leaf hover:underline transition-colors"
                >
                  {f.itemFrozen}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation Links */}
          <div>
            <h3 className="text-primary-850 text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-primary-leaf pl-2.5">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href={`/${lang}`} className="hover:text-primary-leaf hover:underline transition-colors">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about-us`} className="hover:text-primary-leaf hover:underline transition-colors">
                  {dict.nav.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/products`} className="hover:text-primary-leaf hover:underline transition-colors">
                  {dict.nav.products}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/news`} className="hover:text-primary-leaf hover:underline transition-colors">
                  {dict.nav.news}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="hover:text-primary-leaf hover:underline transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div>
            <h3 className="text-primary-850 text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-primary-leaf pl-2.5">
              {dict.footer.contactTitle}
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <p className="leading-relaxed">
                <strong className="text-primary-850">{f.lblHeadquarters}</strong>{' '}
                {dict.footer.addressLabel.replace(/^[^:]*:\s*/, '')}
              </p>
              <p className="leading-relaxed">
                <strong className="text-primary-850">{f.lblFactory}</strong>{' '}
                {dict.footer.factoryLabel.replace(/^[^:]*:\s*/, '')}
              </p>
              <p>
                <strong className="text-primary-850">{f.lblEmail}</strong>{' '}
                <a
                  href="mailto:sales@agrihub.vn"
                  className="text-primary-leaf hover:underline font-bold"
                >
                  sales@agrihub.vn
                </a>
              </p>
              <p>
                <strong className="text-primary-850">{f.lblHotline}</strong>{' '}
                <a
                  href="tel:+84901234567"
                  className="text-primary-leaf hover:underline font-bold"
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
        <div className="pt-8 text-center text-xs text-slate-500 font-medium">
          <p>
            &copy; {currentYear} {dict.common.brandName}. {dict.footer.rightsReserved}
          </p>
        </div>
      </Container>
    </footer>
  );
}
