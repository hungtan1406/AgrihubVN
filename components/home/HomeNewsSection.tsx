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

interface HomeNewsSectionProps {
  currentLang: Locale;
  dict: Dictionary;
  featuredNews?: NewsEvent[];
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

export default function HomeNewsSection({
  currentLang,
  dict,
  featuredNews = [],
}: HomeNewsSectionProps) {
  const fallbackNews: NewsEvent[] = [
    {
      id: 1002,
      slug:
        currentLang === 'en'
          ? 'agrihub-exports-fruit-powder-to-middle-east'
          : currentLang === 'zh'
            ? 'agrihub-chukou-guofen-dao-zhongdong'
            : 'agrihub-xuat-khau-bot-trai-cay-sang-trung-dong',
      lang: currentLang,
      title:
        currentLang === 'en'
          ? 'Agrihub Expands Fruit Powder Exports to the Middle East'
          : currentLang === 'zh'
            ? 'Agrihub扩大果粉出口至中东市场'
            : 'Agrihub mở rộng xuất khẩu bột trái cây sang thị trường Trung Đông',
      excerpt:
        currentLang === 'en'
          ? "The first commercial shipments of Agrihub's Dragon Fruit Powder and Mango Powder have been successfully delivered to UAE partners."
          : currentLang === 'zh'
            ? 'Agrihub的首批红心火龙果粉和芒果粉商业货物已成功交付至阿联酋合作伙伴。'
            : 'Lô hàng bột thanh long và bột xoài đầu tiên từ Agrihub đã được giao thành công đến UAE, mở ra chuỗi cung ứng ổn định cho các nhà sản xuất tại Trung Đông.',
      content: '',
      date: '2025-10-15T00:00:00',
      image: null,
      category:
        currentLang === 'en'
          ? 'News'
          : currentLang === 'zh'
            ? '新闻'
            : 'Tin tức',
      tags: ['xuất khẩu', 'trung đông', 'halal'],
    },
    {
      id: 1003,
      slug:
        currentLang === 'en'
          ? 'halal-certification-expands-export-markets'
          : currentLang === 'zh'
            ? 'qingzhen-renzheng-kuozhan-chukou-shichang'
            : 'chung-nhan-halal-mo-rong-thi-truong-xuat-khau',
      lang: currentLang,
      title:
        currentLang === 'en'
          ? 'Agrihub Achieves Halal Certification – Opening Muslim-Market Export Channels'
          : currentLang === 'zh'
            ? 'Agrihub获得清真认证 – 开拓穆斯林市场出口渠道'
            : 'Agrihub đạt chứng nhận Halal – Mở rộng thị trường xuất khẩu Muslim',
      excerpt:
        currentLang === 'en'
          ? 'Agrihub Vietnam has received Halal certification for its fruit powder and puree product lines, opening access to 57 OIC member countries.'
          : currentLang === 'zh'
            ? 'Agrihub Vietnam的果粉和果浆产品线已获得清真认证，开放进入57个伊斯兰合作组织成员国市场。'
            : 'Agrihub Vietnam vừa nhận chứng nhận Halal cho dòng sản phẩm bột trái cây và nước cốt, mở ra cơ hội thâm nhập sâu vào 57 quốc gia thành viên OIC.',
      content: '',
      date: '2025-09-20T00:00:00',
      image: null,
      category:
        currentLang === 'en'
          ? 'Announcement'
          : currentLang === 'zh'
            ? '公告'
            : 'Thông báo',
      tags: ['halal', 'chứng nhận', 'xuất khẩu'],
    },
  ];

  const displayNews =
    featuredNews && featuredNews.length > 0
      ? featuredNews.length >= 3
        ? featuredNews
        : [
            ...featuredNews,
            ...fallbackNews.filter(
              (f) => !featuredNews.some((n) => n.slug === f.slug),
            ),
          ].slice(0, 3)
      : fallbackNews;

  return (
    <section id="tin-tuc" className="scroll-mt-24 py-8 sm:py-12 lg:py-14">
      {/* Hỗ trợ anchor cũ nếu có người dùng bookmark */}
      <div id="xuat-khau" className="relative -top-24" />
      <Container>
        <FadeIn direction="up">
          <SectionTitle
            badge={dict.pages.home.featuredNewsBadge ?? 'Tin Tức & Hoạt Động'}
            title={dict.pages.home.featuredNewsTitle ?? 'Tin Tức Nổi Bật'}
            subtitle={
              dict.pages.home.featuredNewsSubtitle ??
              'Cập nhật tin tức doanh nghiệp, xu hướng thị trường và thông tin mới nhất từ Agrihub.'
            }
          />
        </FadeIn>

        {/* Grid 3 bài viết nổi bật */}
        <div className="mt-2 mb-6 sm:mb-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayNews.map((post) => {
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
                              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                            />
                          </svg>
                          <span className="text-[11px] font-bold tracking-wider uppercase text-primary-700/80">
                            {currentLang === 'vi' ? 'Bản tin Agrihub' : currentLang === 'zh' ? 'Agrihub 资讯' : 'Agrihub News'}
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

                      {/* Event date / location nếu có */}
                      {post.eventDate && (
                        <div className="text-xs text-primary-700 mb-2.5 flex items-center gap-1.5 font-medium bg-primary-50/80 px-2.5 py-1 rounded-lg border border-primary-100/60 w-fit">
                          <span className="inline-flex items-center gap-1">
                            <svg
                              className="w-3.5 h-3.5 text-primary-leaf"
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
                              <span className="text-slate-300">•</span>
                              <span className="inline-flex items-center gap-1">
                                <svg
                                  className="w-3.5 h-3.5 text-primary-leaf"
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
                        <span>{dict.news?.readMore ?? 'Đọc tiếp'}</span>
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

        {/* Action Button: Xem tất cả tin tức */}
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mt-6">
            <Button
              href={`/${currentLang}/news`}
              variant="pill"
              size="md"
              className="shadow-xs hover:shadow-soft"
            >
              {dict.pages.home.viewAllNews ?? 'Xem tất cả tin tức'}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
