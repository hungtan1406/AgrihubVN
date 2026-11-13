import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, Locale, isValidLocale } from './lib/i18n';

function resolvePreferredLocale(request: NextRequest): Locale {
  // 1. Check user choice from cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Parse Accept-Language header
  const acceptLang = request.headers.get('accept-language')?.toLowerCase() || '';
  if (!acceptLang) {
    return 'en'; // Default for foreign B2B buyers
  }

  // Split and sort by quality factor (q)
  const languages = acceptLang
    .split(',')
    .map((item) => {
      const [lang, q] = item.trim().split(';q=');
      return { lang: lang.trim(), q: q ? parseFloat(q) : 1.0 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of languages) {
    if (lang.startsWith('vi')) return 'vi';
    if (lang.startsWith('zh')) return 'zh';
    if (lang.startsWith('en')) return 'en';
  }

  // Fallback to English for all international traffic
  return 'en';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const targetLocale = resolvePreferredLocale(request);
  const newPath = pathname === '/' ? `/${targetLocale}` : `/${targetLocale}${pathname}`;
  const url = request.nextUrl.clone();
  url.pathname = newPath;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes
     * - _next/static, _next/image
     * - images, favicon.ico
     * - static files with extensions (.svg, .png, .jpg, .webp, .pdf, etc.)
     */
    '/((?!api|_next/static|_next/image|images|favicon.ico|.*\\..*).*)',
  ],
};
