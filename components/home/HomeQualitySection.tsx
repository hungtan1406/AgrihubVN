import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import { Dictionary, getHomePageUi } from '@/lib/i18n';

interface HomeQualitySectionProps {
  dict: Dictionary;
  ui: ReturnType<typeof getHomePageUi>;
}

export default function HomeQualitySection({ dict, ui }: HomeQualitySectionProps) {
  return (
    <section
      id="chat-luong"
      className="bg-white py-10 sm:py-14 border-y border-cream-200/80 scroll-mt-24"
    >
      <Container>
        <FadeIn direction="up">
          <SectionTitle
            badge={dict.pages.home.qualityBadge}
            title={dict.pages.home.qualityTitle}
            subtitle={dict.pages.home.qualitySubtitle}
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-2">
          {ui.quality.cards.map((c) => (
            <StaggerItem key={c.code} className="h-full">
              <div className="h-full bg-cream-50/70 hover:bg-white p-6 sm:p-7 rounded-2xl border border-cream-200 shadow-2xs hover:border-primary-leaf hover:shadow-soft transition-all flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-200">
                <div className="flex flex-col items-center text-center">
                  {/* Header badge & standard code */}
                  <div className="w-full flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-primary-leaf bg-white px-3 py-1 rounded-full border border-cream-300 shadow-2xs">
                      {c.code}
                    </span>
                    <span className="text-[10px] text-accent-gold font-bold tracking-wider uppercase bg-cream-100 px-2.5 py-0.5 rounded-full border border-cream-200">
                      {c.badge}
                    </span>
                  </div>

                  {/* Logo Showcase container */}
                  <div className="w-full py-2 flex items-center justify-center">
                    <div className="relative w-full max-w-[260px] h-28 sm:h-32 flex items-center justify-center p-3 rounded-2xl bg-white border border-cream-200/80 shadow-2xs group-hover:border-primary-leaf/40 group-hover:shadow-xs transition-all">
                      <Image
                        src={c.logo}
                        alt={`${c.code} - ${c.title}`}
                        width={260}
                        height={130}
                        className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Standard title & concise description */}
                  <h3 className="font-bold text-sm sm:text-base text-primary-850 mt-4 mb-1.5">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                    {c.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
