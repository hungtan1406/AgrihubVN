import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import Button from '@/components/Button';
import FadeIn from '@/components/animations/FadeIn';
import { Locale, getHomePageUi } from '@/lib/i18n';

interface HomeAboutSectionProps {
  currentLang: Locale;
  ui: ReturnType<typeof getHomePageUi>;
}

export default function HomeAboutSection({ currentLang, ui }: HomeAboutSectionProps) {
  return (
    <section id="ve-agrihub" className="scroll-mt-24 py-8 sm:py-12 lg:py-14">
      <Container>
        <FadeIn direction="up">
          <div className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-8 lg:p-10 border border-cream-200/80 shadow-soft relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
              {/* Left Column: Visual representation */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-lg mx-auto lg:max-w-none aspect-[1376/768] rounded-2xl sm:rounded-3xl shadow-soft overflow-hidden bg-white">
                  <Image
                    src="/images/Image1.jpg"
                    alt="Agrihub Vietnam"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Content matching Image 2 with Checklist */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-850 tracking-tight leading-tight">
                    {ui.about.title}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {ui.about.desc}
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <Button href="#bao-gia" variant="primary" size="md">
                    <span>{ui.about.quoteBtn}</span>
                  </Button>
                  <Button
                    href={`/${currentLang}/about-us`}
                    variant="pill"
                    size="md"
                  >
                    {ui.about.moreBtn}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
