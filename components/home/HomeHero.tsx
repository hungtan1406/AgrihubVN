import React from 'react';
import HeroBackgroundSlider from '@/components/HeroBackgroundSlider';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { Locale, Dictionary, getHomePageUi } from '@/lib/i18n';

interface HomeHeroProps {
  currentLang: Locale;
  dict: Dictionary;
  ui: ReturnType<typeof getHomePageUi>;
}

export default function HomeHero({ currentLang, dict, ui }: HomeHeroProps) {
  const taglineLines = ui.heroTagline.includes('\n')
    ? ui.heroTagline.split('\n')
    : ui.heroTagline.includes('ĐẾN')
    ? [
        ui.heroTagline.slice(0, ui.heroTagline.indexOf('ĐẾN')).trim(),
        ui.heroTagline.slice(ui.heroTagline.indexOf('ĐẾN')).trim(),
      ]
    : [ui.heroTagline];

  return (
    <section className="relative min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex items-center overflow-hidden pt-12 pb-16 sm:py-16 lg:py-20 text-white shadow-soft bg-primary-950">
      {/* Full-width Background Crossfade Slideshow */}
      <HeroBackgroundSlider
        slides={ui.heroSlider.slides}
        controlsLabel={ui.heroSlider.controlsLabel}
        slideLabelPrefix={ui.heroSlider.slideLabel}
      />

      <Container className="relative z-10 w-full">
        <div className="max-w-2xl space-y-4 sm:space-y-5">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-cream-100 text-xs font-semibold shadow-2xs">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent-gold"
              aria-hidden="true"
            />
            <span>{dict.common.tagline}</span>
          </div>

          {/* Headline - tight editorial tracking & compact line rhythm */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] ${
              currentLang === 'zh' ? 'tracking-wide' : 'tracking-[-0.025em]'
            }`}
          >
            <span className="flex flex-col gap-1 sm:gap-1.5 leading-[1.12]">
              {taglineLines.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-cream-100/95 leading-relaxed max-w-xl font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            {dict.pages.home.heroSubtitle}
          </p>

          {/* CTA Buttons - Full-width on mobile, auto on sm+ */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            {/* CTA bên trái: Đăng ký mẫu thử */}
            <Button
              href="#bao-gia"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-md hover:shadow-lg font-bold justify-center"
            >
              <span>{dict.pages.home.heroCtaSample}</span>
            </Button>

            {/* CTA bên phải: Tư vấn báo giá */}
            <Button
              href="#bao-gia"
              variant="amber"
              size="lg"
              className="w-full sm:w-auto shadow-md hover:shadow-lg font-bold justify-center"
            >
              <span>{dict.pages.home.heroCtaQuote}</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
