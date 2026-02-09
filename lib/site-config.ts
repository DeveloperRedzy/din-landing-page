export const siteConfig = {
  name: "DIN, LLC",
  shortName: "DIN",
  tagline: "Empowering your business with tailored insights and technology",
  description:
    "Expert bookkeeping, financial consulting, marketing strategy, fintech consulting, IT solutions, and engineering services. Offices in Luxembourg and Wyoming.",
  emails: {
    general: "info@din.lu",
    luxembourg: "luxembourg@din.lu",
    usa: "usa@din.lu",
  },
  offices: {
    luxembourg: {
      name: "Luxembourg Office",
      region: "Europe",
      timezone: "CET",
      hours: "Monday\u2013Friday, 7:30 AM \u2013 6:00 PM",
      email: "luxembourg@din.lu",
    },
    wyoming: {
      name: "United States Office",
      location: "Sheridan, Wyoming",
      region: "United States",
      timezone: "MST",
      hours: "Monday\u2013Friday, 8:00 AM \u2013 5:00 PM",
      email: "usa@din.lu",
    },
  },
  social: {
    linkedin: "#",
    twitter: "#",
  },
} as const;
