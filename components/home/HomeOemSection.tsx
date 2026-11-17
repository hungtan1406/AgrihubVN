import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import Button from '@/components/Button';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import { Dictionary, getHomePageUi } from '@/lib/i18n';

interface HomeOemSectionProps {
  dict: Dictionary;
  ui: ReturnType<typeof getHomePageUi>;
}

export default function HomeOemSection({ dict, ui }: HomeOemSectionProps) {
  return (
    <section
      id="oem-odm"
      className="bg-white py-10 sm:py-14 border-y border-cream-200/80 scroll-mt-24"
    >
      <Container>
        {/* Section Header: DỊCH VỤ TẠI AGRIHUB */}
        <FadeIn direction="up">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-primary-900 tracking-wide uppercase inline-flex flex-col items-center">
              <span>{dict.pages.home.oemBadge}</span>
              <span className="h-1 w-16 sm:w-20 bg-primary-leaf rounded-full mt-2 sm:mt-2.5" />
            </h2>
          </div>
        </FadeIn>

        {/* 3 Photo Columns Showcase */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ui.oem.pillars.map((pillar, idx) => (
            <StaggerItem key={idx} className="h-full">
              <div className="flex flex-col items-center h-full">
                {/* Column Header with green underline */}
                <div className="text-center mb-3 sm:mb-3.5">
                  <h3 className="text-xs sm:text-sm md:text-base font-black text-primary-900 uppercase tracking-wide">
                    {pillar.title}
                  </h3>
                  <span className="block h-0.5 w-12 sm:w-16 bg-primary-leaf rounded-full mx-auto mt-1.5" />
                </div>

                {/* Photo Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-cream-200/90 shadow-2xs hover:shadow-md transition-all duration-300 group bg-cream-50">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Card: Gia công OEM/ODM & R&D theo tiêu chuẩn nhà máy */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-8 sm:mt-10 lg:mt-12 bg-gradient-to-br from-primary-900 via-primary-850 to-primary-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-primary-750 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-accent-gold border border-accent-gold/30">
                OEM / ODM & R&D Solutions
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white">
                {dict.pages.home.oemTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                {dict.pages.home.oemSubtitle}
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
              <Button
                href="#bao-gia"
                variant="amber"
                size="md"
                className="w-full sm:w-auto font-bold shadow-md"
              >
                <span>{ui.oem.ctaBtn}</span>
                <span>&rarr;</span>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
