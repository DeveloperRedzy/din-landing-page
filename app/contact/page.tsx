import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ContactForm } from '@/components/contact-form';
import { siteConfig } from '@/lib/site-config';
import { MapPin, Clock, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with DIN, LLC. Offices in London, Wyoming, and Luxembourg, supporting clients across the UK, U.S., and Europe.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label='Contact Us'
        title="Let's talk about your goals"
        description='We operate internationally, with offices in London, Wyoming, and Luxembourg, supporting clients across the UK, U.S., and Europe.'
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
      />

      <section className='py-20 md:py-28'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-16 lg:grid-cols-5'>
            {/* Left column: Office info */}
            <div className='lg:col-span-2 space-y-10'>
              {/* General */}
              <div>
                <h3 className='text-lg font-semibold text-foreground mb-4'>
                  Contact Information
                </h3>
                <div className='flex items-center gap-3 text-sm text-muted-foreground'>
                  <Mail className='h-4 w-4 text-accent shrink-0' />
                  <span>
                    For general inquiries:{' '}
                    <a
                      href={`mailto:${siteConfig.emails.general}`}
                      className='text-foreground font-medium hover:text-accent transition-colors'
                    >
                      {siteConfig.emails.general}
                    </a>
                  </span>
                </div>
              </div>

              {/* UK Office */}
              <div className='rounded-xl border border-border bg-card p-6'>
                <div className='flex items-center gap-2 mb-4'>
                  <MapPin className='h-5 w-5 text-accent' />
                  <h3 className='font-semibold text-foreground'>
                    {siteConfig.offices.uk.name}
                  </h3>
                </div>
                <div className='space-y-3 text-sm text-muted-foreground'>
                  <p>{siteConfig.offices.uk.location}</p>
                  <div className='flex items-start gap-3'>
                    <Clock className='h-4 w-4 mt-0.5 shrink-0 text-muted-foreground' />
                    <div>
                      <p className='font-medium text-foreground'>
                        Office Hours ({siteConfig.offices.uk.timezone})
                      </p>
                      <p>{siteConfig.offices.uk.hours}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Mail className='h-4 w-4 shrink-0 text-muted-foreground' />
                    <a
                      href={`mailto:${siteConfig.offices.uk.email}`}
                      className='hover:text-foreground transition-colors'
                    >
                      {siteConfig.offices.uk.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* USA Office */}
              <div className='rounded-xl border border-border bg-card p-6'>
                <div className='flex items-center gap-2 mb-4'>
                  <MapPin className='h-5 w-5 text-accent' />
                  <h3 className='font-semibold text-foreground'>
                    {siteConfig.offices.usa.name}
                  </h3>
                </div>
                <div className='space-y-3 text-sm text-muted-foreground'>
                  <p>{siteConfig.offices.usa.location}</p>
                  <div className='flex items-start gap-3'>
                    <Clock className='h-4 w-4 mt-0.5 shrink-0 text-muted-foreground' />
                    <div>
                      <p className='font-medium text-foreground'>
                        Office Hours ({siteConfig.offices.usa.timezone})
                      </p>
                      <p>{siteConfig.offices.usa.hours}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Mail className='h-4 w-4 shrink-0 text-muted-foreground' />
                    <a
                      href={`mailto:${siteConfig.offices.usa.email}`}
                      className='hover:text-foreground transition-colors'
                    >
                      {siteConfig.offices.usa.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Luxembourg Office */}
              <div className='rounded-xl border border-border bg-card p-6'>
                <div className='flex items-center gap-2 mb-4'>
                  <MapPin className='h-5 w-5 text-accent' />
                  <h3 className='font-semibold text-foreground'>
                    {siteConfig.offices.luxembourg.name}
                  </h3>
                </div>
                <div className='space-y-3 text-sm text-muted-foreground'>
                  <div className='flex items-start gap-3'>
                    <Clock className='h-4 w-4 mt-0.5 shrink-0 text-muted-foreground' />
                    <div>
                      <p className='font-medium text-foreground'>
                        Office Hours ({siteConfig.offices.luxembourg.timezone})
                      </p>
                      <p>{siteConfig.offices.luxembourg.hours}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Mail className='h-4 w-4 shrink-0 text-muted-foreground' />
                    <a
                      href={`mailto:${siteConfig.offices.luxembourg.email}`}
                      className='hover:text-foreground transition-colors'
                    >
                      {siteConfig.offices.luxembourg.email}
                    </a>
                  </div>
                </div>
              </div>

              <p className='text-sm text-muted-foreground'>
                Our team operates across the UK, the United States, and Europe,
                allowing us to support clients across multiple time zones.
                Outside of standard hours, messages can be submitted at any time
                and will be addressed on the next business day.
              </p>
            </div>

            {/* Right column: Contact form */}
            <div className='lg:col-span-3'>
              <div className='rounded-2xl border border-border bg-card p-8 md:p-10'>
                <h3 className='text-xl font-semibold text-foreground mb-1'>
                  Send us a message
                </h3>
                <p className='text-sm text-muted-foreground mb-8'>
                  Fill out the form below and we&apos;ll get back to you within
                  one business day.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
