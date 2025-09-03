'use client';

import { useTranslations } from 'next-intl';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('pages.contact');
  const tBusiness = useTranslations('business');
  const tContact = useTranslations('contact');
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

      {/* Contact Info & Map Section */}
      <Section spacing="xl" className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand-text mb-6">
                  {t('getInTouch')}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-brand-text mb-1">{tContact('address')}</h3>
                      <p className="text-brand-text/70">
                        {tBusiness('address')}<br />
                        {tBusiness('city')}<br />
                        {tBusiness('country')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-brand-text mb-1">{tContact('phone')}</h3>
                      <a 
                        href={`tel:${tBusiness('phone')}`}
                        className="text-brand-text/70 hover:text-gold transition-colors"
                      >
                        {tBusiness('phone')}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-brand-text mb-1">{tContact('email')}</h3>
                      <a 
                        href={`mailto:${tBusiness('email')}`}
                        className="text-brand-text/70 hover:text-gold transition-colors"
                      >
                        {tBusiness('email')}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-brand-text mb-1">{tContact('hours')}</h3>
                      <div className="text-brand-text/70 space-y-1">
                        <p>{tBusiness('hours.weekdays')}</p>
                        <p>{tBusiness('hours.saturday')}</p>
                        <p>{tBusiness('hours.sunday')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-brand-text mb-4">{tContact('follow')}</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com/lashbloomstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-brand-text/70 hover:text-gold transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="https://facebook.com/lashbloomstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-brand-text/70 hover:text-gold transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-grain bg-porcelain rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-brand-text/40 mx-auto mb-4" />
                <p className="text-brand-text/60">
                  {t('mapPlaceholder')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section spacing="xl" className="bg-porcelain">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-text mb-4">
                {t('sendMessage')}
              </h2>
              <p className="text-brand-text/70">
                {tContact('responseTime')}
              </p>
            </div>
            
            <ContactForm />
          </div>
        </Container>
      </Section>
    </div>
  );
}
