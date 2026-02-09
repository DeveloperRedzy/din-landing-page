import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className='relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden'>
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-secondary via-background to-background' />

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <div className='inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-foreground mb-6'>
            <span className='h-2 w-2 rounded-full bg-accent' />
            UK &middot; USA &middot; Luxembourg
          </div>

          <h1 className='text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance'>
            Empowering your business with{' '}
            <span className='text-accent'>tailored insights</span>
          </h1>

          <p className='mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty'>
            DIN, LLC provides integrated financial consulting, technology
            solutions, and marketing strategy for entrepreneurs and companies
            around the globe. We deliver the clarity, tools, and guidance you
            need to make informed decisions and reach your goals.
          </p>

          <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button
              size='lg'
              className='w-full sm:w-auto gap-2 bg-accent hover:bg-accent/90 text-accent-foreground'
              asChild
            >
              <Link href='/contact'>
                Book a Consultation
                <ArrowRight className='h-4 w-4' />
              </Link>
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='w-full sm:w-auto bg-transparent'
              asChild
            >
              <Link href='/services'>Our Services</Link>
            </Button>
          </div>

          <div className='mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 text-sm text-muted-foreground'>
            <div className='flex items-center gap-2'>
              <svg
                className='h-5 w-5 text-accent'
                fill='currentColor'
                viewBox='0 0 20 20'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Multidisciplinary Team</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg
                className='h-5 w-5 text-accent'
                fill='currentColor'
                viewBox='0 0 20 20'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Two-Month Trial Period</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg
                className='h-5 w-5 text-accent'
                fill='currentColor'
                viewBox='0 0 20 20'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Free Initial Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
