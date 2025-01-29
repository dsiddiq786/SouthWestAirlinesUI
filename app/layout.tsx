import '@/styles/globals.css';
import { Metadata } from 'next';
import clsx from 'clsx';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';

import { fontArial } from '@/config/fonts';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon/southWestFavicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx('font-arialTest min-h-screen bg-white antialiased')}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <main className="container mx-auto max-w-7xl flex-grow px-6 py-2">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
