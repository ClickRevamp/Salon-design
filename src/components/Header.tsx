'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import homepageData from '@/ai/homepage.json';

// Type for homepage JSON structure (for future use)
type _HomepageData = typeof homepageData;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnnouncementDismissed, setIsAnnouncementDismissed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();


  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle announcement dismissal
  useEffect(() => {
    if (homepageData.header.announcement.enabled) {
      const dismissKey = homepageData.header.announcement.dismissKey;
      const isDismissed = localStorage.getItem(dismissKey) === 'true';
      setIsAnnouncementDismissed(isDismissed);
    }
  }, []);

  // Handle mobile menu close on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle ESC key for mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMobileMenuOpen]);

  const dismissAnnouncement = () => {
    if (homepageData.header.announcement.enabled) {
      localStorage.setItem(homepageData.header.announcement.dismissKey, 'true');
      setIsAnnouncementDismissed(true);
    }
  };

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out
    ${isScrolled 
      ? 'h-14 bg-[var(--surface)]/90 border-b border-black/5 backdrop-blur-md' 
      : 'h-18 bg-transparent'
    }
  `.trim();

  const headerStyle = {
    '--header-h': isScrolled ? '56px' : '72px'
  } as React.CSSProperties;

  return (
    <>
      {/* Announcement Bar */}
      {homepageData.header.announcement.enabled && !isAnnouncementDismissed && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-accent text-ink text-sm py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex-1 text-center">
              <Link 
                href={homepageData.header.announcement.href}
                className="hover:underline font-medium"
              >
                {homepageData.header.announcement.text.lv}
              </Link>
            </div>
            <button
              onClick={dismissAnnouncement}
              className="ml-4 hover:opacity-70 transition-opacity"
              aria-label="Aizvērt paziņojumu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header 
        className={headerClasses}
        style={{
          ...headerStyle,
          top: (homepageData.header.announcement.enabled && !isAnnouncementDismissed) ? '40px' : '0'
        }}
      >
        <div className="max-w-screen-2xl mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link 
              href="/" 
              className="font-serif text-xl font-bold text-ink hover:opacity-80 transition-opacity"
            >
              Lash Bloom Studio
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {homepageData.header.nav.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="nav-pill text-ink hover:text-mocha font-medium"
                >
                  {item.lv}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Phone */}
              <Link
                href={homepageData.header.phone.href}
                className="flex items-center space-x-2 text-ink hover:text-mocha transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">{homepageData.header.phone.label}</span>
              </Link>

              {/* Language Switcher */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-ink hover:text-mocha transition-colors p-2">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium uppercase">{locale}</span>
                </button>
                <div className="absolute right-0 top-full mt-1 bg-surface border border-black/5 rounded-lg shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {homepageData.header.languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => switchLocale(lang)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-bg transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        lang === locale ? 'font-semibold text-mocha' : 'text-ink'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary CTA */}
              <Button asChild className="btn-primary">
                <Link href={homepageData.header.cta.href}>
                  {homepageData.header.cta.lv}
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button 
                  className="lg:hidden p-2 text-ink hover:text-mocha transition-colors"
                  aria-label="Atvērt izvēlni"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full sm:w-80 bg-surface border-l border-black/5"
                id="mobile-menu"
              >
                <div className="flex flex-col h-full pt-6">
                  {/* Logo */}
                  <div className="mb-8">
                    <Link 
                      href="/" 
                      className="font-serif text-xl font-bold text-ink"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Lash Bloom Studio
                    </Link>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 space-y-1">
                    {homepageData.header.nav.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-3 text-ink hover:bg-bg hover:text-mocha transition-colors rounded-lg font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.lv}
                      </Link>
                    ))}
                  </nav>

                  {/* Actions */}
                  <div className="space-y-4 pt-6 border-t border-black/5">
                    {/* Phone */}
                    <Link
                      href={homepageData.header.phone.href}
                      className="flex items-center space-x-3 px-4 py-3 text-ink hover:bg-bg hover:text-mocha transition-colors rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Phone className="w-5 h-5" />
                      <span className="font-medium">{homepageData.header.phone.label}</span>
                    </Link>

                    {/* Language Switcher */}
                    <div className="px-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <Globe className="w-5 h-5 text-ink" />
                        <span className="font-medium text-ink">Valoda</span>
                      </div>
                      <div className="flex space-x-2">
                        {homepageData.header.languages.map((lang) => (
                          <button
                            key={lang}
                            onClick={() => {
                              switchLocale(lang);
                              setIsMobileMenuOpen(false);
                            }}
                            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                              lang === locale 
                                ? 'bg-accent text-ink font-semibold' 
                                : 'bg-bg text-ink hover:bg-accent/50'
                            }`}
                          >
                            {lang.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Primary CTA */}
                    <div className="px-4">
                      <Button asChild className="btn-primary w-full">
                        <Link 
                          href={homepageData.header.cta.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {homepageData.header.cta.lv}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}