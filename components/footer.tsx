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
              Integrated business and financial consulting for companies across
              the U.S., Europe, and global markets.
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
          </div>
        </div>
      </div>
    </footer>
  );
}
