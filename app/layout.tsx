import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'DIN | FinTech Solutions',
    template: '%s | DIN, LLC',
  },
  description:
    'Expert bookkeeping, financial consulting, marketing strategy, fintech consulting, IT solutions, and engineering services. Offices in London, Wyoming, and Luxembourg.',
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-icon-din.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
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
