import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import { Locale, Dictionary } from '@/lib/i18n';
import { NewsEvent } from '@/lib/wordpress';

interface HomeEventsSectionProps {
  currentLang: Locale;
  dict: Dictionary;
  featuredEvents?: NewsEvent[];
}

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

function formatDate(dateStr: string, lang: string): string {
  if (!dateStr) return '';
  try {
    const localeMap: Record<string, string> = {
      vi: 'vi-VN',
      en: 'en-US',
      zh: 'zh-CN',
    };
    return new Date(dateStr).toLocaleDateString(localeMap[lang] ?? 'vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

export default function HomeEventsSection({
  currentLang,
  dict,
  featuredEvents = [],
}: HomeEventsSectionProps) {
  const fallbackEvents: NewsEvent[] = [
    {
      id: 1001,
      slug:
        currentLang === 'en'
          ? 'agrihub-at-vietnam-foodexpo-2025'
          : currentLang === 'zh'
            ? 'agrihub-canjia-vietnam-foodexpo-2025'
            : 'agrihub-tham-gia-vietnam-foodexpo-2025',
      lang: currentLang,
      title:
        currentLang === 'en'
          ? 'Agrihub Vietnam at Vietnam Foodexpo 2025 – SECC, Ho Chi Minh City'
          : currentLang === 'zh'
            ? 'Agrihub越南参展Vietnam Foodexpo 2025 – 胡志明市SECC'
            : 'Agrihub Vietnam tham gia Vietnam Foodexpo 2025 tại SECC',
      excerpt:
        currentLang === 'en'
          ? 'Agrihub Vietnam will exhibit at Vietnam Foodexpo 2025 showcasing export-grade fruit powders, freeze-dried fruits, and aseptic purees.'
          : currentLang === 'zh'
            ? 'Agrihub Vietnam将参加2025年越南食品博览会，在胡志明市SECC展示出口级果粉、冻干果干及无菌果浆等拳头产品。'
            : 'Agrihub Vietnam sẽ có mặt tại Vietnam Foodexpo 2025 (19–22/11/2025) tại SECC TP. HCM với gian hàng trưng bày bột trái cây, trái cây sấy thăng hoa và nước cốt xuất khẩu.',
      content: '',
      date: '2025-11-01T00:00:00',
      image: null,
      category:
        currentLang === 'en'
          ? 'Events'
          : currentLang === 'zh'
            ? '活动'
            : 'Sự kiện',
      tags: ['triển lãm', 'foodexpo', 'nổi bật'],
      eventDate:
        currentLang === 'en'
          ? 'Nov 19–22, 2025'
          : currentLang === 'zh'
            ? '2025年11月19-22日'
            : '19/11/2025 – 22/11/2025',
      eventLocation:
        currentLang === 'en'
          ? 'SECC, Ho Chi Minh City'
          : currentLang === 'zh'
            ? '胡志明市SECC'
            : 'SECC, TP. Hồ Chí Minh',
    },
    {
      id: 1004,
      slug:
        currentLang === 'en'
          ? 'agrihub-thaifex-anuga-asia-2025'
          : currentLang === 'zh'
            ? 'agrihub-thaifex-anuga-asia-2025'
            : 'agrihub-trien-lam-thaifex-anuga-asia-2025',
      lang: currentLang,
      title:
        currentLang === 'en'
          ? 'Agrihub Showcases Tropical Fruit Ingredients at THAIFEX – Anuga Asia 2025'
          : currentLang === 'zh'
            ? 'Agrihub亮相2025亚洲世界食品博览会THAIFEX – Anuga Asia'
            : 'Agrihub giới thiệu nguyên liệu trái cây nhiệt đới tại THAIFEX – Anuga Asia 2025',
      excerpt:
        currentLang === 'en'
          ? 'Connecting global B2B buyers with premium freeze-dried mango, dragon fruit puree, and spray-dried lime powders in Bangkok.'
          : currentLang === 'zh'
            ? '在曼谷与全球B2B买家对接优质冻干芒果、红心火龙果原浆与喷雾干燥柠檬粉供应链。'
            : 'Kết nối các đối tác thu mua nguyên liệu thực phẩm quốc tế với các sản phẩm xoài sấy thăng hoa, puree thanh long và bột chanh sấy phun tại Bangkok.',
      content: '',
      date: '2025-05-28T00:00:00',
      image: null,
      category:
        currentLang === 'en'
          ? 'Events'
          : currentLang === 'zh'
            ? '活动'
            : 'Sự kiện',
      tags: ['triển lãm', 'thaifex', 'nổi bật'],
      eventDate:
        currentLang === 'en'
          ? 'May 27–31, 2025'
          : currentLang === 'zh'
            ? '2025年5月27-31日'
            : '27/05/2025 – 31/05/2025',
      eventLocation:
        currentLang === 'en'
          ? 'IMPACT Challenger, Bangkok, Thailand'
          : currentLang === 'zh'
            ? '泰国曼谷IMPACT展览中心'
            : 'IMPACT Challenger, Bangkok, Thái Lan',
    },
    {
      id: 1005,
      slug:
        currentLang === 'en'
          ? 'agrihub-gulfood-dubai-2026'
          : currentLang === 'zh'
            ? 'agrihub-gulfood-dubai-2026'
            : 'agrihub-tham-gia-gulfood-dubai-2026',
      lang: currentLang,
      title:
        currentLang === 'en'
          ? 'Agrihub Explores Middle East Markets at Gulfood Dubai 2026'
          : currentLang === 'zh'
            ? 'Agrihub参展2026年迪拜海湾食品展Gulfood – 拓展中东市场'
            : 'Agrihub tham dự Triển lãm Gulfood Dubai 2026 – Tiếp cận thị trường Trung Đông',
      excerpt:
        currentLang === 'en'
          ? 'Expanding halal-certified fruit powders and freeze-dried ingredients across Middle Eastern and North African food industry networks.'
          : currentLang === 'zh'
            ? '展示全线符合清真（Halal）标准的深加工果粉与原浆原料，深耕中东及北非高品质市场。'
            : 'Giới thiệu các dòng sản phẩm đạt chuẩn quốc tế Halal và ISO 22000, mở rộng hợp tác xuất khẩu nông sản chế biến sang thị trường Trung Đông và Bắc Phi.',
      content: '',
      date: '2026-01-15T00:00:00',
      image: null,
      category:
        currentLang === 'en'
          ? 'Events'
          : currentLang === 'zh'
            ? '活动'
            : 'Sự kiện',
      tags: ['triển lãm', 'gulfood', 'nổi bật'],
      eventDate:
        currentLang === 'en'
          ? 'Feb 17–21, 2026'
          : currentLang === 'zh'
            ? '2026年2月17日-21日'
            : '17/02/2026 – 21/02/2026',
      eventLocation:
        currentLang === 'en'
          ? 'Dubai World Trade Centre (DWTC), UAE'
          : currentLang === 'zh'
            ? '阿联酋迪拜世界贸易中心（DWTC）'
            : 'Dubai World Trade Centre (DWTC), UAE',
    },
  ];

  const displayEvents =
    featuredEvents && featuredEvents.length > 0
      ? featuredEvents.length >= 3
        ? featuredEvents
        : [
            ...featuredEvents,
            ...fallbackEvents.filter(
              (f) => !featuredEvents.some((e) => e.slug === f.slug),
            ),
          ].slice(0, 3)
      : fallbackEvents;

  return (
    <section id="su-kien" className="scroll-mt-24 py-8 sm:py-12 lg:py-14">
      {/* Hỗ trợ anchor cũ nếu có người dùng bookmark #nang-luc */}
      <div id="nang-luc" className="relative -top-24" />
      <Container>
        <FadeIn direction="up">
          <SectionTitle
            badge={dict.pages.home.featuredEventsBadge ?? 'Sự Kiện & Triển Lãm'}
            title={dict.pages.home.featuredEventsTitle ?? 'Sự Kiện Nổi Bật'}
            subtitle={
              dict.pages.home.featuredEventsSubtitle ??
              'Tham gia cùng Agrihub tại các hội chợ thương mại quốc tế, triển lãm thực phẩm và sự kiện xúc tiến nông sản hàng đầu.'
            }
          />
        </FadeIn>

        {/* Grid 3 sự kiện nổi bật */}
        <div className="mt-2 mb-6 sm:mb-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayEvents.map((post) => {
              const badgeClass = getCategoryBadgeClass(post.category);
              const formattedDate = formatDate(post.date, currentLang);

              return (
                <StaggerItem key={post.slug} className="h-full">
                  <Link
                    href={`/${currentLang}/news/${post.slug}`}
                    className="group block bg-white border border-cream-200 rounded-3xl overflow-hidden shadow-soft hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full hover:border-primary-leaf/40 hover:shadow-md"
                  >
                    {/* Thumbnail 16:9 */}
                    <div className="aspect-video relative overflow-hidden bg-primary-100 flex items-center justify-center shrink-0">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-900/10 via-cream-200 to-primary-100 flex flex-col items-center justify-center gap-1.5 select-none text-primary-800">
                          <svg
                            className="w-9 h-9 text-primary-700/80"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          <span className="text-[11px] font-bold tracking-wider uppercase text-primary-700/80">
                            Agrihub Event
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Category + Date */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-full ${badgeClass}`}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-slate-400 shrink-0 font-medium">
                          {formattedDate}
                        </span>
                      </div>

                      {/* Event date / location */}
                      {post.eventDate && (
                        <div className="text-xs text-primary-800 mb-2.5 flex flex-wrap items-center gap-1.5 font-medium bg-accent-gold/15 px-2.5 py-1 rounded-lg border border-accent-gold/30 w-fit">
                          <span className="inline-flex items-center gap-1">
                            <svg
                              className="w-3.5 h-3.5 text-accent-gold"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {post.eventDate}
                          </span>
                          {post.eventLocation && (
                            <>
                              <span className="text-slate-400">•</span>
                              <span className="inline-flex items-center gap-1">
                                <svg
                                  className="w-3.5 h-3.5 text-accent-gold"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  aria-hidden="true"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                {post.eventLocation}
                              </span>
                            </>
                          )}
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="font-bold text-primary-850 text-base sm:text-lg leading-snug line-clamp-2 mb-2 group-hover:text-primary-leaf transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-sm text-slate-600 line-clamp-2 sm:line-clamp-3 mb-4 flex-1 leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}

                      {/* CTA link */}
                      <div className="pt-2 border-t border-cream-200/60 flex items-center justify-between text-xs font-bold text-primary-leaf group-hover:text-primary-850 transition-colors mt-auto">
                        <span>{dict.news?.readMore ?? 'Xem chi tiết'}</span>
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Action Button: Điều hướng qua trang tin tức (lọc Sự kiện) */}
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mt-6">
            <Button
              href={`/${currentLang}/news?category=events`}
              variant="pill"
              size="md"
              className="shadow-xs hover:shadow-soft font-bold"
            >
              {dict.pages.home.viewAllEvents ?? 'Xem tất cả sự kiện →'}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
