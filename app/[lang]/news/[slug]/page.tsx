import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale, getDictionary, isValidLocale, defaultLocale } from '@/lib/i18n';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { getAllNewsEventSlugs, getNewsEventBySlug } from '@/lib/wordpress';

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllNewsEventSlugs();
  const params: { lang: string; slug: string }[] = [];

  ['vi', 'en', 'zh'].forEach((lang) => {
    slugs.forEach((slug) => {
      params.push({ lang, slug });
    });
  });

  return params;
}

interface PageProps {
  params: { lang: string; slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  const post = await getNewsEventBySlug(params.slug, currentLang);
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://agrihub.vn';

  const title = post?.title ?? dict.news.pageTitle;
  const description = post?.excerpt ?? dict.news.metaDescription;

  return {
    title: `${title} | Agrihub Vietnam`,
    description,
    alternates: {
      canonical: `${base}/${currentLang}/news/${params.slug}`,
    },
    openGraph: {
      title: `${title} | Agrihub Vietnam`,
      description,
      url: `${base}/${currentLang}/news/${params.slug}`,
      siteName: 'Agrihub Vietnam',
      locale:
        currentLang === 'zh' ? 'zh_CN' : currentLang === 'en' ? 'en_US' : 'vi_VN',
      type: 'article',
      ...(post?.image ? { images: [{ url: post.image }] } : {}),
    },
  };
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

// ── Helper: category badge ────────────────────────────────────────────────

function getCategoryBadgeClass(category: string): string {
  const lower = category.toLowerCase();
  if (
    lower.includes('nổi bật') ||
    lower.includes('noi-bat') ||
    lower.includes('featured') ||
    lower.includes('精选')
  ) {
    return 'bg-emerald-100 text-emerald-800 border border-emerald-300';
  }
  if (lower.includes('kiện') || lower.includes('event') || lower.includes('活动')) {
    return 'bg-accent-mango/20 text-accent-gold border border-accent-gold/30';
  }
  if (lower.includes('báo') || lower.includes('announcement') || lower.includes('公告')) {
    return 'bg-cream-200 text-cream-600 border border-cream-300';
  }
  return 'bg-primary-100 text-primary-700 border border-primary-200';
}

// ── Page ──────────────────────────────────────────────────────────────────

export default async function NewsDetailPage({ params }: PageProps) {
  const currentLang: Locale = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(currentLang);
  const post = await getNewsEventBySlug(params.slug, currentLang);

  if (!post) {
    notFound();
  }

  const formattedDate = formatDate(post.date, currentLang);
  const badgeClass = getCategoryBadgeClass(post.category);

  return (
    <div className="py-0">
      {/* Hero Image or Gradient Banner */}
      {post.image ? (
        <div className="relative w-full max-h-96 aspect-video overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      ) : (
        <div className="w-full bg-gradient-to-br from-primary-800 to-primary-600 py-20 px-4 flex items-end">
          <Container>
            <h1 className="text-2xl md:text-3xl font-bold text-white max-w-3xl leading-snug">
              {post.title}
            </h1>
          </Container>
        </div>
      )}

      <Container>
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mt-6 mb-4 flex items-center gap-2 flex-wrap">
          <Link href={`/${currentLang}`} className="hover:text-primary-leaf transition-colors">
            {dict.nav.home}
          </Link>
          <span>/</span>
          <Link href={`/${currentLang}/news`} className="hover:text-primary-leaf transition-colors">
            {dict.nav.news}
          </Link>
          <span>/</span>
          <span className="text-primary-850 font-bold line-clamp-1">{post.title}</span>
        </div>

        {/* Article Header */}
        <div className="bg-white rounded-2xl border border-cream-200 shadow-soft p-6 sm:p-8 mb-8">
          {/* Category + Date */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${badgeClass}`}>
              {post.category}
            </span>
            <span className="text-xs text-gray-400">{formattedDate}</span>
          </div>

          {/* Title (only if image is shown — gradient banner already renders it) */}
          {post.image && (
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
              {post.title}
            </h1>
          )}

          {/* Event info bar */}
          {post.eventDate && (
            <div className="flex flex-wrap gap-4 text-sm text-primary-700 bg-primary-50 rounded-xl px-4 py-3 border border-primary-100 mt-2">
              <span className="flex items-center gap-1.5">
                <span>📅</span>
                <strong>{dict.news.eventDateLabel}:</strong>
                <span>{post.eventDate}</span>
              </span>
              {post.eventLocation && (
                <span className="flex items-center gap-1.5">
                  <span>📍</span>
                  <strong>{dict.news.eventLocationLabel}:</strong>
                  <span>{post.eventLocation}</span>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Article Body */}
        <div
          className="
            bg-white rounded-2xl border border-cream-200 shadow-soft p-6 sm:p-8 mb-8
            [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-6 [&_h2]:mb-3
            [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-800 [&_h3]:mt-4 [&_h3]:mb-2
            [&_p]:mb-4 [&_p]:text-gray-700 [&_p]:leading-relaxed
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:text-gray-700
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:text-gray-700
            [&_li]:mb-1
            [&_a]:text-primary-600 [&_a]:underline [&_a]:hover:text-primary-700
            [&_strong]:font-semibold [&_strong]:text-gray-900
            [&_blockquote]:border-l-4 [&_blockquote]:border-primary-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:my-4
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* External link button */}
        {post.externalUrl && (
          <div className="mb-8">
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-white text-primary-leaf border-2 border-primary-leaf hover:bg-primary-leaf hover:text-white transition-all shadow-xs"
            >
              <span>🔗</span>
              <span>{dict.news.externalLinkLabel}</span>
            </a>
          </div>
        )}

        {/* Navigation bar */}
        <div className="flex items-center justify-between gap-4 py-6 border-t border-cream-200">
          <Link
            href={`/${currentLang}/news`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-leaf hover:text-primary-leafHover transition-colors"
          >
            <span>←</span>
            <span>{dict.news.backToNews}</span>
          </Link>
          <Button href={`/${currentLang}/contact`} variant="amber" size="sm">
            {dict.news.ctaButton}
          </Button>
        </div>
      </Container>
    </div>
  );
}
