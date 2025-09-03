import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    template: '%s | Lash Bloom Studio',
    default: 'Lash Bloom Studio - Premium Beauty Services',
  },
  description: 'Professional lash extensions and premium beauty services in Latvia. Expert lash technicians providing quality treatments with attention to detail.',
  keywords: ['lash extensions', 'beauty salon', 'eyelashes', 'Latvia', 'Riga', 'beauty services'],
  authors: [{ name: 'Lash Bloom Studio' }],
  creator: 'Lash Bloom Studio',
  publisher: 'Lash Bloom Studio',
  metadataBase: new URL('https://lashbloomstudio.com'),
  alternates: {
    canonical: '/',
    languages: {
      'lv': '/lv',
      'ru': '/ru', 
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'lv_LV',
    url: 'https://lashbloomstudio.com',
    siteName: 'Lash Bloom Studio',
    title: 'Lash Bloom Studio - Premium Beauty Services',
    description: 'Professional lash extensions and premium beauty services in Latvia. Expert lash technicians providing quality treatments with attention to detail.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lash Bloom Studio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lashbloomstudio',
    creator: '@lashbloomstudio',
    title: 'Lash Bloom Studio - Premium Beauty Services',
    description: 'Professional lash extensions and premium beauty services in Latvia.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#CFB27C',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Lash Bloom Studio',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};
