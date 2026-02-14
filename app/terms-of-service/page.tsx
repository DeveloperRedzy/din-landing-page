import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'DIN Group Terms of Service — the terms governing your use of the DIN website and services.',
};

const sections = [
  {
    title: '1. Introduction',
    content: (
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the DIN
        website and services. By accessing our website or engaging our services,
        you agree to these Terms.
      </p>
    ),
  },
  {
    title: '2. Services',
    content: (
      <>
        <p>DIN provides consulting services in:</p>
        <ul className='mt-2 list-disc space-y-1 pl-6'>
          <li>Bookkeeping &amp; accounting support (non-CPA)</li>
          <li>Business &amp; financial consulting</li>
          <li>Marketing &amp; digital strategy</li>
          <li>FinTech consulting</li>
          <li>IT solutions</li>
          <li>Engineering consulting</li>
        </ul>
        <p className='mt-4'>
          Service engagements are governed by separate written agreements or
          proposals.
        </p>
      </>
    ),
  },
  {
    title: '3. Refund Policy',
    content: (
      <>
        <p>
          We offer a two-month trial period for certain services, as agreed in
          writing. If a client is not satisfied with the value delivered within
          this period, a refund may be granted in accordance with the terms
          defined in the engagement agreement.
        </p>
        <p className='mt-4'>
          Refund eligibility applies only under agreed contractual conditions and
          does not apply automatically to all services.
        </p>
      </>
    ),
  },
  {
    title: '4. Intellectual Property',
    content: (
      <>
        <p>
          All website content, branding, logos, text, graphics, and materials are
          the intellectual property of DIN unless otherwise stated.
        </p>
        <p className='mt-4'>
          You may not reproduce, distribute, or use website content without
          prior written consent.
        </p>
      </>
    ),
  },
  {
    title: '5. Limitation of Liability',
    content: (
      <>
        <p>
          DIN shall not be liable for indirect, incidental, or consequential
          damages arising from the use of our website or services.
        </p>
        <p className='mt-4'>
          All consulting services are advisory in nature. Final business
          decisions remain the responsibility of the client.
        </p>
      </>
    ),
  },
  {
    title: '6. Confidentiality',
    content: (
      <p>
        We treat all client information as confidential and will not disclose
        proprietary information without consent, except where required by law.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        label='Legal'
        title='Terms of Service'
        breadcrumbs={[
          { label: 'Terms of Service', href: '/terms-of-service' },
        ]}
      />

      <section className='py-20 md:py-28'>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:px-8'>
          <div className='space-y-10'>
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className='text-xl font-semibold text-foreground'>
                  {section.title}
                </h3>
                <div className='mt-3 text-muted-foreground leading-relaxed'>
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
