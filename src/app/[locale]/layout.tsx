import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { Fraunces, Manrope } from "next/font/google";
import { Toaster } from 'sonner';
import { defaultMetadata, viewport } from '@/seo.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "../globals.css";
import "../fonts.css";

const fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;
export { viewport };

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  
  // Load messages using next-intl
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster 
            position="top-center"
            toastOptions={{
              style: {
                background: 'var(--brand-bg)',
                color: 'var(--brand-text)',
                border: '1px solid var(--brand-accent)',
              },
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
