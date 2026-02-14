import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Commitment() {
  return (
    <section className='py-20 md:py-28'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-sm font-medium uppercase tracking-wider text-accent mb-3'>
            Our Commitment
          </p>
          <h2 className='text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance'>
            We focus on results — and solely on results
          </h2>

          <div className='mt-8 space-y-6 text-muted-foreground leading-relaxed'>
            <div className='grid gap-6 sm:grid-cols-2 text-left'>
              <div className='rounded-xl border border-border bg-card p-6'>
                <p className='text-lg font-semibold text-foreground'>
                  Your success
                </p>
                <p className='mt-2 text-sm text-muted-foreground'>
                  defines our performance.
                </p>
              </div>
              <div className='rounded-xl border border-border bg-card p-6'>
                <p className='text-lg font-semibold text-foreground'>
                  Your growth
                </p>
                <p className='mt-2 text-sm text-muted-foreground'>
                  defines our relevance.
                </p>
              </div>
            </div>

            <p className='text-pretty'>
              We aim to build partnerships that endure. We remain engaged beyond
              implementation, continuously optimising, refining, and supporting
              your evolution.
            </p>

            <p className='text-lg font-medium text-foreground'>
              At DIN, we are not a temporary service provider.
              <br />
              We are a long-term strategic partner.
            </p>
          </div>

          <div className='mt-10'>
            <Button
              size='lg'
              className='gap-2 bg-accent hover:bg-accent/90 text-accent-foreground'
              asChild
            >
              <Link href='/contact'>
                Start a Conversation
                <ArrowRight className='h-4 w-4' />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
