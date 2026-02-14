'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/lib/services-data';

const aboutSubLinks = [
  { label: 'About DIN', href: '/about' },
  { label: 'Purpose & Values', href: '/about/purpose-and-values' },
];

const navLinks = [
  { label: 'About', href: '/about', dropdown: 'about' as const },
  { label: 'Services', href: '/services', dropdown: 'services' as const },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='shrink-0'>
            <Image
              src='Logo_White.png'
              alt='DIN'
              width={80}
              height={32}
              className='h-8 w-auto dark:invert'
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.href}
                  className='relative'
                  onMouseEnter={() => setOpenDropdown(link.dropdown)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'inline-flex items-center gap-1 text-sm font-medium transition-colors',
                      isActive(link.href)
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 transition-transform',
                        openDropdown === link.dropdown && 'rotate-180',
                      )}
                    />
                  </Link>

                  {/* About Dropdown */}
                  {link.dropdown === 'about' && openDropdown === 'about' && (
                    <div className='absolute top-full left-1/2 -translate-x-1/2 pt-2'>
                      <div className='w-56 rounded-xl border border-border bg-background p-2 shadow-lg'>
                        {aboutSubLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className='flex items-center rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors'
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Services Dropdown */}
                  {link.dropdown === 'services' &&
                    openDropdown === 'services' && (
                      <div className='absolute top-full left-1/2 -translate-x-1/2 pt-2'>
                        <div className='w-72 rounded-xl border border-border bg-background p-2 shadow-lg'>
                          {services.map((service) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className='flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors'
                              >
                                <Icon className='h-4 w-4 shrink-0' />
                                {service.title}
                              </Link>
                            );
                          })}
                          <div className='mt-1 border-t border-border pt-1'>
                            <Link
                              href='/services'
                              className='flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-accent hover:bg-secondary transition-colors'
                            >
                              View all services
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    isActive(link.href)
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTA */}
          <div className='hidden md:flex items-center gap-2'>
            <Button
              asChild
              size='sm'
              className='bg-accent hover:bg-accent/90 text-accent-foreground'
            >
              <Link href='/contact'>Book a Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className='md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors'
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <X className='h-5 w-5' />
            ) : (
              <Menu className='h-5 w-5' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className='md:hidden border-t border-border bg-background'>
          <div className='px-4 py-4 space-y-1'>
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    isActive(link.href)
                      ? 'bg-secondary text-foreground'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                  )}
                >
                  {link.label}
                </Link>
                {link.dropdown === 'about' && (
                  <div className='ml-4 mt-1 space-y-1'>
                    {aboutSubLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className='block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors'
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
                {link.dropdown === 'services' && (
                  <div className='ml-4 mt-1 space-y-1'>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className='block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors'
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className='pt-3 border-t border-border mt-3'>
              <Button
                asChild
                className='w-full bg-accent hover:bg-accent/90 text-accent-foreground'
              >
                <Link href='/contact' onClick={() => setMobileOpen(false)}>
                  Book a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
