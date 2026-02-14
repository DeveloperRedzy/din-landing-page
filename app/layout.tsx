import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { JsonLd } from '@/components/json-ld';
import './globals.css';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

const description =
  'Expert bookkeeping, financial consulting, marketing strategy, fintech consulting, IT solutions, and engineering services. Offices in London, Wyoming, and Luxembourg.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dinsolution.com'),
  title: {
    default: 'DIN | FinTech Solutions',
    template: '%s | DIN',
  },
  description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'DIN',
    title: 'DIN | FinTech Solutions',
    description,
    url: 'https://www.dinsolution.com',
  },
  twitter: {
    card: 'summary',
    title: 'DIN | FinTech Solutions',
    description,
  },
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-icon-din.png',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
