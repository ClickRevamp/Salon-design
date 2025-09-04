'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
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

  // Check if a link is active (strip locale prefix for comparison)
  const isActive = (href: string) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    const targetPath = href === '/' ? '/' : href;
    return currentPath === targetPath;
  };

  // Handle scroll effect with RAF throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 16);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
        data-header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
          isScrolled 
            ? 'bg-[var(--surface)]/90 border-b border-black/5 backdrop-blur-md' 
            : 'bg-transparent'
        }`}
        style={{
          ...headerStyle,
          top: (homepageData.header.announcement.enabled && !isAnnouncementDismissed) ? '40px' : '0'
        }}
      >
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-[var(--header-h,72px)] pl-4 sm:pl-5 md:pl-8 lg:pl-12 pr-4 sm:pr-5 md:pr-8 lg:pr-12 xl:pr-16">
          {/* Left: Brand */}
          <Link 
            href="/" 
            className="font-semibold tracking-tight hover:opacity-80 transition-opacity"
            style={{ color: 'var(--ink)' }}
          >
            Lash Bloom Studio
          </Link>

          {/* Center: Nav (text links, no pills) */}
          <nav className="hidden md:flex justify-center items-center gap-4 lg:gap-6">
            {homepageData.header.nav.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="nav-link"
                data-active={isActive(item.href)}
              >
                {item.lv}
              </Link>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="ml-0 flex items-center justify-end gap-3 lg:gap-4">
            {/* WhatsApp (new crisp SVG) */}
            <Link 
              href="https://wa.me/37120123456" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp" 
              className="wa-btn"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.85 11.85 0 0 0 12.07 0C5.76 0 .65 5.12.65 11.43c0 2.01.53 3.98 1.56 5.71L0 24l6.02-2.19a11.4 11.4 0 0 0 6.05 1.67h.01c6.31 0 11.42-5.12 11.42-11.43a11.38 11.38 0 0 0-3.98-8.57ZM12.08 21.2c-1.9 0-3.77-.5-5.4-1.45l-.39-.23-3.58 1.3 1.27-3.49-.25-.36a9.58 9.58 0 0 1-1.5-5.18c0-5.3 4.3-9.6 9.59-9.6 2.56 0 4.96 1 6.77 2.8a9.55 9.55 0 0 1 2.82 6.8c0 5.29-4.3 9.6-9.6 9.6Zm5.26-7.25c-.29-.15-1.73-.85-2-.95-.26-.1-.45-.15-.64.15-.19.3-.74.95-.9 1.14-.17.2-.33.22-.62.08-.29-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.01-.17-.3-.02-.44.13-.59.13-.13.29-.33.43-.5.14-.16.19-.28.29-.48.1-.2.05-.38-.02-.53-.07-.15-.64-1.54-.87-2.1-.23-.55-.46-.48-.64-.49h-.55c-.19 0-.5.07-.76.38-.26.3-.99.97-.99 2.37s1.02 2.75 1.16 2.94c.14.19 2.01 3.18 4.87 4.46.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.73-.71 1.98-1.39.24-.68.24-1.26.17-1.39-.07-.13-.26-.2-.55-.35Z"/>
              </svg>
            </Link>

            {/* Language switch — ensure it fits and isn't clipped */}
            <div className="relative group">
              <button 
                type="button" 
                className="lang-switch" 
                aria-label="Language"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only md:not-sr-only md:ml-1 text-sm font-medium uppercase">{locale}</span>
              </button>
              <div 
                className="absolute right-0 top-full mt-1 border border-black/5 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                style={{ 
                  backgroundColor: 'var(--surface)', 
                  boxShadow: '0 8px 30px rgba(26,26,26,0.06)' 
                }}
              >
                {homepageData.header.languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => switchLocale(lang)}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      lang === locale ? 'font-semibold' : ''
                    }`}
                    style={{ 
                      color: lang === locale ? 'var(--mocha)' : 'var(--ink)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary CTA */}
            <Link href={homepageData.header.cta.href} className="btn-primary">
              {homepageData.header.cta.lv}
            </Link>

            {/* Mobile burger (unchanged) */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button 
                  className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg hover:bg-black/5 transition-colors"
                  style={{ color: 'rgba(27, 27, 27, 0.8)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(27, 27, 27, 0.8)'}
                  aria-label="Open menu"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full sm:w-80 border-l border-black/5"
                style={{ backgroundColor: 'var(--surface)' }}
                id="mobile-menu"
              >
                <div className="flex flex-col h-full pt-6">
                  {/* Logo */}
                  <div className="mb-8">
                    <Link 
                      href="/" 
                      className="font-serif text-xl font-bold"
                      style={{ color: 'var(--ink)' }}
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
                        className="nav-link block px-3 py-2 rounded-md"
                        data-active={isActive(item.href)}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.lv}
                      </Link>
                    ))}
                  </nav>

                  {/* Actions */}
                  <div className="space-y-4 pt-6 border-t border-black/5">
                    {/* WhatsApp */}
                    <Link
                      href="https://wa.me/37120123456"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 px-4 py-3 transition-colors rounded-lg"
                      style={{ color: 'var(--ink)' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M20.4 3.6A10 10 0 0 0 3.1 17.6L2 22l4.5-1.1A10 10 0 1 0 20.4 3.6Z"/>
                        <path d="M8.5 9.8c.3 2.1 2.5 4.1 4.5 4.7M8.5 9.8c.3-.4.9-1 1.2-1 .2 0 .5.3.7.6.2.3.4.6.3.8-.1.3-.3.6-.4.8-.1.3 0 .5.2.7.6.6 1.3 1.1 2 1.4.3.1.6 0 .8-.2.2-.2.5-.6.8-.7.3-.1.7.1 1 .3.3.2.7.5.8.8 0 .3-.3.8-.6 1.1-.4.3-.9.6-1.3.6-2 0-5.7-2.7-6.6-4.9Z"/>
                      </svg>
                      <span className="font-medium">WhatsApp</span>
                    </Link>

                    {/* Language Switcher */}
                    <div className="px-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <Globe className="w-5 h-5" style={{ color: 'var(--ink)' }} />
                        <span className="font-medium" style={{ color: 'var(--ink)' }}>Valoda</span>
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
                              lang === locale ? 'font-semibold' : ''
                            }`}
                            style={{
                              backgroundColor: lang === locale ? 'var(--accent)' : 'var(--bg)',
                              color: 'var(--ink)'
                            }}
                            onMouseEnter={(e) => {
                              if (lang !== locale) {
                                e.currentTarget.style.backgroundColor = 'rgba(230, 203, 168, 0.5)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (lang !== locale) {
                                e.currentTarget.style.backgroundColor = 'var(--bg)';
                              }
                            }}
                          >
                            {lang.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Primary CTA */}
                    <div className="px-4">
                      <Link 
                        href={homepageData.header.cta.href}
                        className="btn-primary w-full block text-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {homepageData.header.cta.lv}
                      </Link>
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