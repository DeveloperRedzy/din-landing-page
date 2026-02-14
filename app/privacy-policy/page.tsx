import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'DIN Group Privacy Policy — how we collect, use, and safeguard your personal data.',
};

const sections = [
  {
    title: '1. Introduction',
    content: (
      <p>
        DIN Group (&ldquo;DIN&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;) is committed to protecting your privacy and handling
        your personal data transparently and securely. This Privacy Policy
        explains how we collect, use, and safeguard your information when you
        visit our website or engage with our services. We operate internationally
        and comply with applicable data protection regulations, including the
        General Data Protection Regulation (GDPR) where applicable.
      </p>
    ),
  },
  {
    title: '2. Information We Collect',
    content: (
      <>
        <p>We may collect the following types of information:</p>
        <h4 className='mt-4 font-semibold text-foreground'>
          Information You Provide
        </h4>
        <ul className='mt-2 list-disc space-y-1 pl-6'>
          <li>Name</li>
          <li>Email address</li>
          <li>Company name</li>
          <li>Phone number</li>
          <li>
            Information submitted through contact forms or consultations
          </li>
        </ul>
        <h4 className='mt-4 font-semibold text-foreground'>
          Automatically Collected Information
        </h4>
        <ul className='mt-2 list-disc space-y-1 pl-6'>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Website usage data (via cookies or analytics tools)</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. How We Use Your Information',
    content: (
      <>
        <p>We process your data to:</p>
        <ul className='mt-2 list-disc space-y-1 pl-6'>
          <li>Respond to inquiries</li>
          <li>Provide consulting services</li>
          <li>Improve our website functionality</li>
          <li>Communicate regarding services or updates</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p className='mt-4'>
          We do not sell or rent personal data to third parties.
        </p>
      </>
    ),
  },
  {
    title: '4. Legal Basis for Processing (EU Clients)',
    content: (
      <>
        <p>Where GDPR applies, we process data based on:</p>
        <ul className='mt-2 list-disc space-y-1 pl-6'>
          <li>Consent</li>
          <li>Performance of a contract</li>
          <li>Legitimate business interests</li>
          <li>Legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    title: '5. Data Retention',
    content: (
      <p>
        We retain personal data only as long as necessary to fulfill the purposes
        outlined above or as required by law.
      </p>
    ),
  },
  {
    title: '6. Data Security',
    content: (
      <p>
        We implement appropriate technical and organisational measures to protect
        your personal data against unauthorised access, misuse, or disclosure.
      </p>
    ),
  },
  {
    title: '7. Your Rights',
    content: (
      <>
        <p>
          Depending on your jurisdiction, you may have the right to:
        </p>
        <ul className='mt-2 list-disc space-y-1 pl-6'>
          <li>Access your personal data</li>
          <li>Request correction</li>
          <li>Request deletion</li>
          <li>Object to processing</li>
          <li>Withdraw consent</li>
        </ul>
        <p className='mt-4'>
          To exercise these rights, contact:{' '}
          <Link
            href='mailto:info@dinsolution.com'
            className='text-accent underline underline-offset-4 hover:text-accent/80 transition-colors'
          >
            info@dinsolution.com
          </Link>
        </p>
      </>
    ),
  },
  {
    title: '8. Cookies',
    content: (
      <p>
        Our website may use cookies to improve user experience and analytics
        performance. You may adjust cookie preferences in your browser settings.
      </p>
    ),
  },
  {
    title: '9. Third-Party Services',
    content: (
      <p>
        We may use trusted third-party providers (e.g., analytics tools,
        scheduling platforms) to operate our website and services. These
        providers process data under contractual obligations aligned with
        applicable regulations.
      </p>
    ),
  },
  {
    title: '10. Changes to This Policy',
    content: (
      <p>
        We may update this Privacy Policy periodically. Updates will be published
        on this page.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label='Legal'
        title='Privacy Policy'
        breadcrumbs={[{ label: 'Privacy Policy', href: '/privacy-policy' }]}
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
