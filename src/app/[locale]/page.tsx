'use client';

import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import CTABand from '@/components/CTABand';
import ServicesGrid from '@/components/ServicesGrid';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { serviceCategories } from '@/data/services';

export default function Home() {
  const t = useTranslations('pages.home');
  return (
    <div>
      <Hero />
      <TrustBar />
      
      {/* Services Preview Section */}
      <Section spacing="xl" className="bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-text mb-4">
              {t('servicesTitle')}
            </h2>
            <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
              {t('servicesDescription')}
            </p>
          </div>
          
          <ServicesGrid 
            categories={serviceCategories.map(cat => ({
              ...cat,
              services: cat.services.slice(0, 3) // Show only first 3 items for preview
            }))}
            defaultCategory="skropstas"
          />
        </Container>
      </Section>
      
      <CTABand />
    </div>
  );
}
