'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const t = useTranslations('nav');
  const tBusiness = useTranslations('business');
  const tFooter = useTranslations('footer');

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/lashbloomstudio', icon: Instagram },
    { name: 'Facebook', href: 'https://facebook.com/lashbloomstudio', icon: Facebook },
  ];

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/booking', label: t('booking') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <footer className="bg-brand-text text-white">
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-gold">
                {tBusiness('name')}
              </h3>
              <p className="text-white/70 text-sm">
                {tBusiness('tagline')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-sans font-semibold text-white">{tFooter('contact')}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
                  <span className="text-white/70">
                    {tBusiness('address')}<br />
                    {tBusiness('city')}<br />
                    {tBusiness('country')}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                  <a 
                    href={`tel:${tBusiness('phone')}`}
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {tBusiness('phone')}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                  <a 
                    href={`mailto:${tBusiness('email')}`}
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {tBusiness('email')}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <h4 className="font-sans font-semibold text-white">{tFooter('hours')}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gold flex-shrink-0" />
                  <div className="text-white/70">
                    <div>{tFooter('weekdays')}</div>
                    <div>{tFooter('saturday')}</div>
                    <div>{tFooter('sunday')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation & Social */}
            <div className="space-y-4">
              <h4 className="font-sans font-semibold text-white">{tFooter('links')}</h4>
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-gold transition-colors"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      <Separator className="bg-white/20" />
      
      <Section spacing="sm">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-white/70">
              {tFooter('copyright')}
            </p>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy" className="text-white/70 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/70 hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
