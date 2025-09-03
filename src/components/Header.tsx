'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Container from '@/components/Container';

const locales = [
  { code: 'lv', name: 'Latviešu' },
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' },
];

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/par-mums', label: t('about') },
    { href: '/cenas', label: t('services') },
    { href: '/rezervacija', label: t('booking') },
    { href: '/kontakti', label: t('contact') },
  ];

  // Helper function to create locale-aware URLs
  const createLocaleUrl = (href: string) => {
    if (locale === 'lv') {
      return href; // Default locale has no prefix
    }
    return `/${locale}${href}`;
  };

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return; // Don't switch if same locale
    
    // Get current pathname without the locale prefix for switching
    let currentPath = pathname;
    
    // Remove current locale prefix if it exists
    if (locale !== 'lv' && pathname.startsWith(`/${locale}`)) {
      currentPath = pathname.slice(locale.length + 1) || '/';
    }
    
    // Construct new URL with the selected locale
    const newUrl = newLocale === 'lv' 
      ? currentPath 
      : `/${newLocale}${currentPath}`;
    
    // Use router.push for smooth navigation without page reload
    router.push(newUrl);
  };

  const isActive = (href: string) => {
    // Remove locale prefix from pathname for comparison
    const currentPath = pathname.startsWith(`/${locale}`) 
      ? pathname.slice(locale.length + 1) 
      : pathname;
    
    if (href === '/') {
      return currentPath === '/' || currentPath === '';
    }
    return currentPath.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href={createLocaleUrl('/')} 
            className="font-serif text-xl font-bold text-brand-text hover:text-brand-accent transition-colors"
          >
            Lash Bloom Studio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={createLocaleUrl(link.href)}
                className={`font-sans text-sm font-medium transition-colors hover:text-brand-accent ${
                  isActive(link.href)
                    ? 'text-brand-accent'
                    : 'text-brand-text/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Locale Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Locale Selector */}
            <Select value={locale} onValueChange={handleLocaleChange}>
              <SelectTrigger className="w-[100px]" aria-label="Select language">
                <SelectValue placeholder={locales.find(l => l.code === locale)?.name || 'Language'} />
              </SelectTrigger>
              <SelectContent>
                {locales.map((loc) => (
                  <SelectItem key={loc.code} value={loc.code}>
                    {loc.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="md:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="font-serif text-left">
                    Lash Bloom Studio
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={createLocaleUrl(link.href)}
                      onClick={() => setIsOpen(false)}
                      className={`font-sans text-base font-medium transition-colors hover:text-brand-accent ${
                        isActive(link.href)
                          ? 'text-brand-accent'
                          : 'text-brand-text/70'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
