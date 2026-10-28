import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Locale, getDictionary, isValidLocale, defaultLocale } from '@/lib/i18n';
import Container from '@/components/Container';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import { getNewsEvents, NewsEvent } from '@/lib/wordpress';

interface PageProps {
  params: { lang: string };
  searchParams: { category?: string };
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://agrihub.vn';

  return {
    title: dict.news.metaTitle,
    description: dict.news.metaDescription,
    alternates: {
      canonical: `${base}/${currentLang}/news`,
      languages: {
        vi: `${base}/vi/news`,
        en: `${base}/en/news`,
        'zh-CN': `${base}/zh/news`,
      },
    },
    openGraph: {
      title: dict.news.metaTitle,
      description: dict.news.metaDescription,
      url: `${base}/${currentLang}/news`,
      siteName: 'Agrihub Vietnam',
      locale:
        currentLang === 'zh' ? 'zh_CN' : currentLang === 'en' ? 'en_US' : 'vi_VN',
      type: 'website',
    },
  };
}

// ── Helper: determine category badge color ─────────────────────────────────

function getCategoryBadgeClass(category: string): string {
  const lower = (category || '').toLowerCase();
  if (
    lower.includes('nổi bật') ||
    lower.includes('noi-bat') ||
    lower.includes('featured') ||
    lower.includes('精选')
  ) {
    return 'bg-emerald-100 text-emerald-800 border border-emerald-300';
  }
  if (
    lower.includes('kiện') ||
    lower.includes('event') ||
    lower.includes('活动')
  ) {
    return 'bg-accent-mango/20 text-accent-gold border border-accent-gold/30';
  }
  if (
    lower.includes('báo') ||
    lower.includes('announcement') ||
    lower.includes('公告')
  ) {
    return 'bg-cream-200 text-cream-600 border border-cream-300';
  }
  return 'bg-primary-100 text-primary-700 border border-primary-200';
}

// ── Helper: format date per locale ────────────────────────────────────────

function formatDate(dateStr: string, lang: string): string {
  if (!dateStr) return '';
  try {
    const localeMap: Record<string, string> = { vi: 'vi-VN', en: 'en-US', zh: 'zh-CN' };
    return new Date(dateStr).toLocaleDateString(localeMap[lang] ?? 'vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

// ── Helper: determine active category filter from URL param ───────────────

function matchesFilter(post: NewsEvent, categoryParam?: string): boolean {
  if (!categoryParam) return true;
  const lower = (post.category || '').toLowerCase();
  const tags = (post.tags || []).map((t) => (t || '').toLowerCase());
  const slugs = (post.categorySlugs || []).map((s) => (s || '').toLowerCase());
  const names = (post.categories || []).map((n) => (n || '').toLowerCase());

  switch (categoryParam.toLowerCase()) {
    case 'featured':
      return (
        post.isFeatured === true ||
        lower.includes('nổi bật') ||
        lower.includes('noi-bat') ||
        lower.includes('noi bat') ||
        lower.includes('featured') ||
        lower.includes('精选') ||
        lower.includes('推荐') ||
        slugs.some((s) => s.includes('noi-bat') || s.includes('featured')) ||
        names.some((n) => n.includes('nổi bật') || n.includes('featured')) ||
        tags.some(
          (t) =>
            t.includes('nổi bật') ||
            t.includes('noi-bat') ||
            t.includes('featured') ||
            t.includes('精选'),
        )
      );
    case 'news':
      return (
        !post.isEvent &&
        (lower.includes('tin') ||
          lower.includes('news') ||
          lower.includes('新闻') ||
          slugs.some((s) => s === 'tin-tuc' || s.includes('tin-tuc') || s.includes('news')) ||
          names.some((n) => n.includes('tin') || n.includes('news')))
      );
    case 'events':
      return (
        post.isEvent === true ||
        lower.includes('kiện') ||
        lower.includes('event') ||
        lower.includes('活动') ||
        Boolean(post.eventDate) ||
        slugs.some(
          (s) =>
            s === 'su-kien' ||
            s === 'noi-bat-su-kien' ||
            s.includes('su-kien') ||
            s.includes('event') ||
            s.includes('trien-lam'),
        ) ||
        names.some(
          (n) =>
            n.includes('sự kiện') ||
            n.includes('su kien') ||
            n.includes('event') ||
            n.includes('triển lãm'),
        ) ||
        tags.some(
          (t) =>
            t.includes('kiện') ||
            t.includes('event') ||
            t.includes('triển lãm') ||
            t.includes('hội chợ') ||
            t.includes('foodexpo') ||
            t.includes('thaifex') ||
            t.includes('gulfood') ||
            t.includes('展会'),
        )
      );
    case 'announcements':
      return (
        lower.includes('báo') ||
        lower.includes('announcement') ||
        lower.includes('公告') ||
        slugs.some((s) => s.includes('thong-bao') || s.includes('announcement')) ||
        names.some((n) => n.includes('thông báo') || n.includes('announcement'))
      );
    default:
      return true;
  }
}

// ── News Card (Server Component) ──────────────────────────────────────────

function NewsCard({ post, lang, dict }: { post: NewsEvent; lang: string; dict: ReturnType<typeof getDictionary> }) {
  const badgeClass = getCategoryBadgeClass(post.category);
  const formattedDate = formatDate(post.date, lang);

  return (
    <Link
      href={`/${lang}/news/${post.slug}`}
      className="group block bg-white border border-cream-200 rounded-2xl overflow-hidden shadow-soft hover:-translate-y-1 transition-transform duration-200 flex flex-col"
    >
      {/* Image / Placeholder */}
      <div className="aspect-video relative overflow-hidden bg-primary-100 flex items-center justify-center shrink-0">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="text-4xl select-none">📰</span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category + Date row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${badgeClass}`}>
            {post.category}
          </span>
          <span className="text-xs text-gray-400 shrink-0">{formattedDate}</span>
        </div>

        {/* Event date / location badge */}
        {post.eventDate && (
          <p className="text-xs text-primary-700 mb-2 flex items-center gap-1">
            <span>📅</span>
            <span>{post.eventDate}</span>
            {post.eventLocation && (
              <>
                <span className="mx-1 text-gray-300">|</span>
                <span>📍</span>
                <span>{post.eventLocation}</span>
              </>
            )}
          </p>
        )}

        {/* Title */}
        <h3 className="font-semibold text-gray-900 text-base leading-snug line-clamp-2 mb-2 group-hover:text-primary-700 transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-sm text-gray-600 line-clamp-3 mt-1 flex-1">{post.excerpt}</p>
        )}

        {/* Read more */}
        <span className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm mt-3 transition-colors">
          {dict.news.readMore}
        </span>
      </div>
    </Link>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────

export default async function NewsPage({ params, searchParams }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  const allPosts = await getNewsEvents(currentLang);

  const activeCategoryParam = searchParams.category;
  const filteredPosts = allPosts.filter((post) => matchesFilter(post, activeCategoryParam));

  const filterPills = [
    { label: dict.news.filterAll, value: undefined },
    { label: dict.news.filterFeatured, value: 'featured' },
    { label: dict.news.filterNews, value: 'news' },
    { label: dict.news.filterEvents, value: 'events' },
    { label: dict.news.filterAnnouncements, value: 'announcements' },
  ];

  return (
    <div className="pt-8 sm:pt-12">
      <Container>
        <SectionTitle
          as="h1"
          badge="Agrihub News"
          title={dict.news.pageTitle}
          subtitle={dict.news.pageSubtitle}
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-4 sm:mt-6 mb-6 sm:mb-8">
          {filterPills.map((pill) => {
            const isActive =
              pill.value === undefined
                ? !activeCategoryParam
                : activeCategoryParam?.toLowerCase() === pill.value;
            const href = pill.value
              ? `/${currentLang}/news?category=${pill.value}`
              : `/${currentLang}/news`;

            return (
              <Link
                key={pill.label}
                href={href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  isActive
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-cream-100 text-gray-700 border-cream-300 hover:bg-primary-50 hover:border-primary-200'
                }`}
              >
                {pill.label}
              </Link>
            );
          })}
        </div>

        {/* News Grid */}
        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-500 py-16">{dict.news.noPostsFound}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <NewsCard key={post.slug} post={post} lang={currentLang} dict={dict} />
            ))}
          </div>
        )}
      </Container>

      {/* CTA Strip */}
      <div className="mt-10 sm:mt-14 bg-primary-800 py-10 sm:py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">{dict.news.ctaTitle}</h2>
            <p className="text-cream-200 mb-6">{dict.news.ctaSubtitle}</p>
            <Button href={`/${currentLang}/contact`} variant="amber" size="md">
              {dict.news.ctaButton}
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
