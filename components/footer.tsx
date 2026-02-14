import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/services-data';
import { siteConfig } from '@/lib/site-config';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

export function Footer() {
  return (
    <footer className='bg-foreground text-background py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
          {/* Company Info */}
          <div className='lg:col-span-1'>
            <Link href='/' className='inline-block'>
              <Image
                src='/Logo_Black.png'
                alt='DIN'
                width={100}
                height={40}
                className='h-10 w-auto invert'
              />
            </Link>
            <p className='mt-4 text-sm text-background/70 max-w-xs'>
              Integrated business solutions for companies across the U.S.,
              Europe, and global markets.
            </p>
            <div className='mt-6 space-y-2 text-sm text-background/70'>
              <p>{siteConfig.emails.general}</p>
              <p>London, United Kingdom</p>
              <p>Sheridan, Wyoming (USA)</p>
              <p>Luxembourg (Europe)</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className='font-semibold text-background mb-4'>Services</h4>
            <ul className='space-y-3'>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className='text-sm text-background/70 hover:text-background transition-colors'
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className='font-semibold text-background mb-4'>Company</h4>
            <ul className='space-y-3'>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-sm text-background/70 hover:text-background transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className='font-semibold text-background mb-4'>Legal</h4>
            <ul className='space-y-3'>
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-sm text-background/70 hover:text-background transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-sm text-background/50'>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className='flex items-center gap-4'>
            <Link
              href={siteConfig.social.linkedin}
              className='text-background/50 hover:text-background transition-colors'
              aria-label='LinkedIn'
            >
              <svg
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
            </Link>
            <Link
              href={siteConfig.social.instagram}
              className='text-background/50 hover:text-background transition-colors'
              aria-label='Instagram'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
