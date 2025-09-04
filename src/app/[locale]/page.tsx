'use client';

import { useTranslations } from 'next-intl';
import type { CSSProperties } from 'react';

// ✅ JSON content + theme (from src/ai via @/*)
import theme from '@/ai/theme.json';
import home from '@/ai/homepage.json';

// Existing components
import Hero from '@/components/Hero';
import AsyncCards from '@/components/AsyncCards';
import TrustBar from '@/components/TrustBar';
import CTABand from '@/components/CTABand';
import ServicesGrid from '@/components/ServicesGrid';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function Home() {
  const t = useTranslations('pages.home');

  // Map JSON -> ServicesGrid-friendly shape
  const categoriesFromJson = (home.services.tabs as any[]).map((tab) => ({
    id: tab.slug,
    slug: tab.slug,
    title: tab.label?.lv, // keep both title & name for compatibility
    name: tab.label?.lv,
    services: (tab.items as any[]).map((s) => ({
      id: (s.name?.lv || '').toLowerCase().replace(/\s+/g, '-'),
      title: s.name?.lv,
      name: s.name?.lv,
      duration: s.time,
      time: s.time,
      price: s.price,
      popular: Boolean(s.popular),
      excerpt: s.excerpt?.lv ?? ''
    }))
  }));

  // Expose theme colors as CSS custom props
  const cssVars: CSSProperties = {
    ['--bg' as any]:   (theme as any).colors.bg,
    ['--surface' as any]: (theme as any).colors.surface,
    ['--ink' as any]:  (theme as any).colors.ink,
    ['--subtle' as any]: (theme as any).colors.subtle,
    ['--accent' as any]: (theme as any).colors.accent,
    ['--blush' as any]:  (theme as any).colors.blush,
    ['--mocha' as any]:  (theme as any).colors.mocha
  };

  return (
    <div style={cssVars}>
      {/* If your <Hero /> already reads next-intl internally, no props needed */}
      <Hero />

      <AsyncCards />

      {/* Services Preview — now driven by homepage.json */}
      <Section spacing="xl" className="bg-[var(--surface)]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--ink)]">
              {t('servicesTitle')}
            </h2>
            <p className="text-lg text-[var(--subtle)] max-w-2xl mx-auto">
              {t('servicesDescription')}
            </p>
          </div>

          <ServicesGrid
            categories={categoriesFromJson.map((cat) => ({
              ...cat,
              services: cat.services.slice(0, 3) // preview 3 items per tab
            }))}
            defaultCategory="skropstas"
          />
        </Container>
      </Section>

      {/* Trust badges go AFTER services */}
      <TrustBar />

      <CTABand />
    </div>
  );
}
