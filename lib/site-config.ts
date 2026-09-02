export const siteConfig = {
  name: 'DIN',
  shortName: 'DIN',
  url: 'https://www.dinsolution.com',
  tagline: 'Empowering your business with tailored insights and technology',
  description:
    'Expert bookkeeping, financial consulting, marketing strategy, fintech consulting, IT solutions, and engineering services. Offices in Wyoming (USA), London, and Luxembourg.',
  emails: {
    general: 'info@dinsolution.com',
    usa: 'info@dinsolution.com',
    uk: 'info@dinsolution.co.uk',
    luxembourg: 'info@din.lu',
  },
  offices: {
    usa: {
      name: 'United States Office',
      location: 'Sheridan, Wyoming',
      address: ['30 N Gould St Ste N', 'Sheridan, WY 82801', 'United States'],
      region: 'United States',
      timezone: 'Mountain Time',
      hours: 'Monday\u2013Friday, 8:00 AM \u2013 5:00 PM',
      email: 'info@dinsolution.com',
    },
    uk: {
      name: 'United Kingdom Office',
      location: 'London, United Kingdom',
      address: [
        '71-75 Shelton Street',
        'Covent Garden',
        'London',
        'WC2H 9JQ',
        'United Kingdom',
      ],
      region: 'United Kingdom',
      timezone: 'UK Time',
      hours: 'Monday\u2013Friday, 9:00 AM \u2013 5:30 PM',
      email: 'info@dinsolution.co.uk',
    },
    luxembourg: {
      name: 'Luxembourg Office',
      address: [
        'Gasperich \u2013 Cloche d\u2019Or',
        'Luxembourg City',
        'L-2411',
        'Grand Duchy of Luxembourg',
      ],
      region: 'Europe',
      timezone: 'Central European Time',
      hours: 'Monday\u2013Friday, 7:30 AM \u2013 6:00 PM',
      email: 'info@din.lu',
    },
  },
  social: {
    linkedin: '#',
    instagram:
      'https://www.instagram.com/din.group?igsh=MWR6bGF0b3NqdW1vZA%3D%3D&utm_source=qr',
    twitter: '#',
  },
} as const;
