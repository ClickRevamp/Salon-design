'use client';

import { useTranslations } from 'next-intl';

// ✅ JSON content + theme (from src/ai via @/*)
import theme from '@/ai/theme.json';
import home from '@/ai/homepage.json';

// Existing components
import Hero from '@/components/Hero';
import MoodBoard from '@/components/MoodBoard';
import TrustBar from '@/components/TrustBar';
import CTABand from '@/components/CTABand';
import ServicesGrid from '@/components/ServicesGrid';

export default function Home() {
  const t = useTranslations('pages.home');

  // Map JSON -> ServicesGrid-friendly shape
  const categoriesFromJson = (home.services.tabs).map((tab) => ({
    id: tab.slug,
    slug: tab.slug,
    title: tab.label?.lv, // keep both title & name for compatibility
    name: tab.label?.lv,
    services: (tab.items).map((s) => ({
      id: (s.name?.lv || '').toLowerCase().replace(/\s+/g, '-'),
      title: s.name?.lv,
      name: s.name?.lv,
      description: s.excerpt?.lv ?? '',
      duration: s.time,
      time: s.time,
      price: s.price,
      isPopular: Boolean(s.popular),
      popular: Boolean(s.popular),
      excerpt: s.excerpt?.lv ?? '',
      image: s.image
    }))
  }));

  // Expose theme colors as CSS custom props
  const cssVars: Record<string, string> = {
    '--bg': theme.colors.bg,
    '--surface': theme.colors.surface,
    '--ink': theme.colors.ink,
    '--subtle': theme.colors.subtle,
    '--accent': theme.colors.accent,
    '--blush': theme.colors.blush,
    '--mocha': theme.colors.mocha
  };

  return (
    <div style={cssVars}>
      {/* If your <Hero /> already reads next-intl internally, no props needed */}
      <Hero />

      <MoodBoard />

      {/* Services Preview — unified with Hero/Moodboard design */}
      <section id="services" className="bg-transparent pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-18 lg:pb-18">
        {/* Centered container with consistent max-width */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered headings block */}
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <h2
              className="font-extrabold tracking-tight text-[var(--ink)] leading-[0.95]"
              style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}
            >
              <strong>Mūsu</strong> pakalpojumi
            </h2>

            <p 
              className="mt-2 md:mt-4 font-medium leading-relaxed max-w-2xl mx-auto text-[var(--subtle)]"
              style={{ fontSize: 'clamp(16px, 1.8vw, 18px)' }}
            >
              {t('servicesDescription')}
            </p>
          </div>

          <ServicesGrid
            categories={categoriesFromJson}
            defaultCategory="skropstas"
          />
        </div>
      </section>

      {/* Trust badges go AFTER services */}
      <TrustBar />

      <CTABand />
    </div>
  );
}
