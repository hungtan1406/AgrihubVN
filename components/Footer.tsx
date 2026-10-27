import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Locale, Dictionary, locales, languageNames, getFooterTranslations } from '@/lib/i18n';
import Container from './Container';

interface FooterProps {
  lang: Locale;
  dict: Dictionary;
}

export default function Footer({ lang, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const f = getFooterTranslations(lang);

  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-cream-100 pt-16 pb-8 border-t border-primary-800/80">
      <Container>
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-primary-800/60">
          {/* Column 1: Brand & Positioning */}
          <div className="space-y-4">
            <Link
              href={`/${lang}`}
              className="inline-flex items-center justify-center bg-white px-3 py-2 rounded-2xl shadow-xs hover:bg-cream-50 transition-colors"
            >
              <Image
                src="/images/logo-clean.png"
                alt="Agrihub Vietnam"
                width={78}
                height={57}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-cream-200/80 leading-relaxed">
              {dict.footer.companyDescription}
            </p>
            <div className="pt-2 text-xs text-accent-gold font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span>🌿</span>
              <span>{dict.common.tagline}</span>
            </div>
            <div className="text-xs text-cream-200/70 space-y-1">
              <p>{f.experience}</p>
              <p>{f.markets}</p>
            </div>
          </div>

          {/* Column 2: Products & OEM Showcase */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-primary-leaf pl-2.5">
              {dict.footer.productsTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-cream-200/80">
              <li>
                <Link
                  href={`/${lang}#nguyen-lieu`}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {f.itemPowder}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}#nguyen-lieu`}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {f.itemDried}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}#nguyen-lieu`}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {f.itemPuree}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}#oem-odm`}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {f.itemOem}
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
              <li>
                <Link href={`/${lang}#oem-odm`} className="text-xs text-cream-300/70 hover:text-white transition-colors">
                  &bull; {dict.nav.oemOdm}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}#nang-luc`} className="text-xs text-cream-300/70 hover:text-white transition-colors">
                  &bull; {dict.nav.supplyChain}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}#chat-luong`} className="text-xs text-cream-300/70 hover:text-white transition-colors">
                  &bull; {dict.nav.qualityCertifications}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/global-presence`} className="text-xs text-cream-300/70 hover:text-white transition-colors">
                  &bull; {dict.nav.globalPresence}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-primary-leaf pl-2.5">
              {dict.footer.contactTitle}
            </h3>
            <div className="space-y-2.5 text-xs text-cream-200/80">
              <p className="leading-relaxed">
                <strong className="text-white">{f.lblHeadquarters}</strong> {dict.footer.addressLabel.replace(/^[^:]*:\s*/, '')}
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">{f.lblFactory}</strong> {dict.footer.factoryLabel.replace(/^[^:]*:\s*/, '')}
              </p>
              <p>
                <strong className="text-white">{f.lblEmail}</strong> sales@agrihub.vn
              </p>
              <p>
                <strong className="text-white">{f.lblHotline}</strong> +84 (0) 90 123 4567
              </p>
              <div className="pt-2">
                <Link
                  href={`/${lang}/contact`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-leaf hover:bg-primary-leafHover text-white font-bold rounded-full text-xs transition-colors shadow-sm"
                >
                  <span>{f.quoteCta}</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-cream-200/60 gap-4">
          <p>
            &copy; {currentYear} {dict.common.brandName}. {dict.footer.rightsReserved}
          </p>
          <div className="flex items-center gap-6">
            <span>{dict.footer.disclaimer}</span>
            <div className="flex items-center gap-2">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={`hover:text-white uppercase transition-colors ${
                    lang === l ? 'text-accent-gold font-bold underline' : ''
                  }`}
                >
                  {languageNames[l]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
