import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['lv', 'ru', 'en'],
  
  // Used when no locale matches
  defaultLocale: 'lv',
  
  // Locale prefix behavior: 'as-needed' means default locale (lv) won't have prefix
  localePrefix: 'as-needed',
  
  // Always use the default locale when no locale is detected
  localeDetection: false
});

export const config = {
  // Match only internationalized pathnames, exclude _next, api, and any files with extensions
  matcher: ['/((?!_next|api|.*\\..*).*)']
};
