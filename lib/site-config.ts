export const siteConfig = {
  name: "DIN, LLC",
  shortName: "DIN",
  tagline: "Empowering your business with tailored insights and technology",
  description:
    "Expert bookkeeping, financial consulting, marketing strategy, fintech consulting, IT solutions, and engineering services. Offices in London, Wyoming, and Luxembourg.",
  emails: {
    general: "info@din.lu",
    uk: "uk@din.lu",
    usa: "usa@din.lu",
    luxembourg: "luxembourg@din.lu",
  },
  offices: {
    uk: {
      name: "United Kingdom Office",
      location: "London, United Kingdom",
      region: "United Kingdom",
      timezone: "GMT",
      hours: "Monday\u2013Friday, 9:00 AM \u2013 5:30 PM",
      email: "uk@din.lu",
    },
    usa: {
      name: "United States Office",
      location: "Sheridan, Wyoming",
      region: "United States",
      timezone: "MST",
      hours: "Monday\u2013Friday, 8:00 AM \u2013 5:00 PM",
      email: "usa@din.lu",
    },
    luxembourg: {
      name: "Luxembourg Office",
      region: "Europe",
      timezone: "CET",
      hours: "Monday\u2013Friday, 7:30 AM \u2013 6:00 PM",
      email: "luxembourg@din.lu",
    },
  },
  social: {
    linkedin: "#",
    twitter: "#",
  },
} as const;
