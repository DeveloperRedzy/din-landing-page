import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CTASection } from '@/components/cta-section';
import {
  Shield,
  Handshake,
  Lightbulb,
  Award,
  Users,
  MessageSquare,
  Globe,
  MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about DIN, LLC — our mission, values, and team across Luxembourg and Wyoming. Integrated consulting for businesses worldwide.',
};

const pillars = [
  {
    icon: Users,
    title: 'Client-Focused Approach',
    description:
      'We start by listening. Every engagement begins with a conversation about your objectives, pain points, and opportunities. This ensures that our recommendations are relevant and actionable, not generic.',
  },
  {
    icon: Lightbulb,
    title: 'Integrated Expertise',
    description:
      'As a multidisciplinary firm, we combine financial analysis, technology solutions, marketing strategy, and engineering know-how. By approaching your business holistically, we uncover insights that siloed consultants might miss.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description:
      'We explain complex concepts in plain language and provide transparent updates throughout the engagement. Our goal is to give you confidence in our process and results.',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Integrity & Confidentiality',
    description:
      'We protect your information and operate with transparency and honesty. You\u2019ll always know what we\u2019re doing and why.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description:
      'Your success is our success. We work alongside you and tailor our services to your specific needs.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We leverage modern tools and techniques\u2014whether it\u2019s cloud accounting software, data analytics, or advanced engineering platforms\u2014to drive efficiency and insight.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Our professionals continuously improve their skills, stay current with regulations and technology trends, and deliver work that meets the highest standards.',
  },
];

const teamExpertise = [
  'Years of bookkeeping and management accounting expertise for SMEs and startups',
  'Business strategy and financial consulting for clients across multiple industries',
  'Digital marketing and branding experience, including campaigns in Europe and the United States',
  'IT & FinTech consulting, with hands-on knowledge of cloud platforms, databases, and cybersecurity',
  'Engineering solutions using the most up-to-date tools and technical software to solve complex problems',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label='About Us'
        title='Empowering your business with tailored insights and technology'
        description='At DIN, LLC, we exist to make your business stronger. Our team of finance, technology, and marketing professionals works with entrepreneurs and companies around the globe to provide the clarity, tools, and guidance you need to make informed decisions and reach your goals.'
        breadcrumbs={[{ label: 'About', href: '/about' }]}
      />

      {/* How We Help */}
      <section className='py-20 md:py-28'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading
            label='How We Help'
            title='What sets DIN apart'
            description='We bring together diverse expertise under one roof, so you get holistic solutions rather than fragmented advice.'
          />

          <div className='mt-12 grid gap-8 md:grid-cols-3'>
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className='rounded-xl border border-border bg-background p-8 text-center'
                >
                  <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground'>
                    <Icon className='h-6 w-6' />
                  </div>
                  <h3 className='mt-4 text-lg font-semibold text-foreground'>
                    {pillar.title}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground leading-relaxed'>
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className='py-20 md:py-28 bg-secondary'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading
            label='Mission & Values'
            title='What we believe in'
            description='Our mission is to deliver integrated, practical solutions that empower businesses to thrive \u2014 whether you\u2019re an early-stage startup or a mature company.'
          />

          <div className='mt-12 grid gap-8 sm:grid-cols-2'>
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className='flex gap-4 rounded-xl bg-background p-6'
                >
                  <div className='shrink-0'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent'>
                      <Icon className='h-5 w-5' />
                    </div>
                  </div>
                  <div>
                    <h3 className='font-semibold text-foreground'>
                      {value.title}
                    </h3>
                    <p className='mt-1 text-sm text-muted-foreground leading-relaxed'>
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className='py-20 md:py-28'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-12 lg:grid-cols-2 lg:gap-16 items-start'>
            <div>
              <p className='text-sm font-medium uppercase tracking-wider text-accent mb-3'>
                Our Team
              </p>
              <h2 className='text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance'>
                Experienced professionals across disciplines
              </h2>
              <p className='mt-4 text-muted-foreground text-pretty leading-relaxed'>
                We are a tight-knit group of consultants drawn from finance, IT,
                marketing, and engineering backgrounds. We don&apos;t post
                individual biographies to protect privacy, but you can trust
                that your project will be handled by seasoned professionals.
              </p>

              <ul className='mt-8 space-y-4'>
                {teamExpertise.map((item) => (
                  <li key={item} className='flex gap-3'>
                    <div className='h-2 w-2 rounded-full bg-accent mt-2 shrink-0' />
                    <span className='text-sm text-muted-foreground leading-relaxed'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='grid gap-6 sm:grid-cols-2'>
              <div className='rounded-xl border border-border bg-card p-6'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4'>
                  <MapPin className='h-5 w-5' />
                </div>
                <h3 className='font-semibold text-foreground'>
                  Luxembourg Office
                </h3>
                <p className='mt-2 text-sm text-muted-foreground'>
                  Our European headquarters, supporting clients across the EU
                  and beyond.
                </p>
              </div>
              <div className='rounded-xl border border-border bg-card p-6'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4'>
                  <MapPin className='h-5 w-5' />
                </div>
                <h3 className='font-semibold text-foreground'>
                  Wyoming Office
                </h3>
                <p className='mt-2 text-sm text-muted-foreground'>
                  Sheridan, Wyoming — serving clients across the United States
                  and global markets.
                </p>
              </div>
              <div className='sm:col-span-2 rounded-xl border border-border bg-card p-6'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4'>
                  <Globe className='h-5 w-5' />
                </div>
                <h3 className='font-semibold text-foreground'>Global Reach</h3>
                <p className='mt-2 text-sm text-muted-foreground'>
                  Our team operates across Europe and the United States,
                  allowing us to support clients across multiple time zones and
                  jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <CTASection
        title='Ready to see how we can help?'
        description="Book a consultation today and let's start a conversation about your goals."
      />
    </>
  );
}
