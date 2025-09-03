'use client';

import { useTranslations } from 'next-intl';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ServicesGrid from '@/components/ServicesGrid';
import CTABand from '@/components/CTABand';
import { serviceCategories } from '@/data/services';

export default function ServicesPage() {
  const t = useTranslations('pages.services');
  return (
    <div>
      {/* Hero Section */}
      <Section spacing="xl" className="bg-gradient-to-br from-blush/20 via-transparent to-mauve/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-brand-text/70 leading-relaxed">
              {t('description')}
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid Section */}
      <Section spacing="xl" className="bg-white">
        <Container>
          <ServicesGrid 
            categories={serviceCategories}
            defaultCategory="skropstas"
          />
        </Container>
      </Section>

      {/* Additional Info Section */}
      <Section spacing="lg" className="bg-porcelain">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-brand-text mb-4">
              Svarīga informācija
            </h2>
            <div className="space-y-4 text-brand-text/80">
              <p>
                • Visas cenas ir norādītas EUR un ir spēkā no 2024. gada janvāra
              </p>
              <p>
                • Pirms pirmās vizītes ir nepieciešama bezmaksas konsultācija
              </p>
              <p>
                • Skropstu pagarināšanas pakalpojumiem ir nepieciešams 50% avanss
              </p>
              <p>
                {t('policies')}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTABand />
    </div>
  );
}
