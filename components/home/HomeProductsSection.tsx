import React from 'react';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import FadeIn from '@/components/animations/FadeIn';
import HomeProductShowcase, { DisplayProductItem } from '@/components/HomeProductShowcase';
import { Locale, Dictionary, getHomePageUi } from '@/lib/i18n';

interface HomeProductsSectionProps {
  items: DisplayProductItem[];
  currentLang: Locale;
  dict: Dictionary;
  ui: ReturnType<typeof getHomePageUi>;
}

export default function HomeProductsSection({
  items,
  currentLang,
  dict,
  ui,
}: HomeProductsSectionProps) {
  return (
    <section id="nguyen-lieu" className="scroll-mt-24 py-8 sm:py-12 lg:py-14">
      <Container>
        <FadeIn direction="up">
          <SectionTitle
            badge={dict.pages.home.ingredientsBadge}
            title={dict.pages.home.ingredientsTitle}
            subtitle={dict.pages.home.ingredientsSubtitle}
          />
        </FadeIn>

        <HomeProductShowcase
          items={items}
          currentLang={currentLang}
          dict={dict}
          ui={ui}
        />
      </Container>
    </section>
  );
}
