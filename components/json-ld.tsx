import { siteConfig } from '@/lib/site-config';

function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DIN',
    url: siteConfig.url,
    logo: `${siteConfig.url}/DIN_Black_White.jpeg`,
    description: siteConfig.description,
    email: siteConfig.emails.general,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: siteConfig.emails.uk,
        contactType: 'customer service',
        areaServed: 'GB',
      },
      {
        '@type': 'ContactPoint',
        email: siteConfig.emails.usa,
        contactType: 'customer service',
        areaServed: 'US',
      },
      {
        '@type': 'ContactPoint',
        email: siteConfig.emails.luxembourg,
        contactType: 'customer service',
        areaServed: 'LU',
      },
    ],
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '71-75 Shelton Street, Covent Garden',
        addressLocality: 'London',
        postalCode: 'WC2H 9JQ',
        addressCountry: 'GB',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '30 N Gould St Ste N',
        addressLocality: 'Sheridan',
        addressRegion: 'WY',
        postalCode: '82801',
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Gasperich – Cloche d\'Or',
        addressLocality: 'Luxembourg City',
        postalCode: 'L-2411',
        addressCountry: 'LU',
      },
    ],
    sameAs: [] as string[],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'DIN',
    url: siteConfig.url,
    image: `${siteConfig.url}/DIN_Black_White.jpeg`,
    description: siteConfig.description,
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Consulting Services',
      itemListElement: [
        'Bookkeeping & Accounting',
        'Business & Financial Consulting',
        'Marketing & Digital Strategy',
        'FinTech Consulting',
        'IT Solutions',
        'Engineering Solutions',
      ].map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLd() {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
    </>
  );
}
