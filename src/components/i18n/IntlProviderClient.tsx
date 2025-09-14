'use client';

import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';

interface IntlProviderClientProps {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
  timeZone?: string;
}

export default function IntlProviderClient({
  children,
  locale,
  messages,
  timeZone
}: IntlProviderClientProps) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={timeZone}
      now={new Date()}
      onError={(error) => {
        // Log the error but don't crash the app in development
        if (process.env.NODE_ENV !== 'production') {
          console.warn('[i18n]', error);
        }
      }}
      getMessageFallback={({ namespace, key }) => {
        // Return the key as fallback to prevent crashes
        return namespace ? `${namespace}.${key}` : key;
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
}
