import {
  Calculator,
  TrendingUp,
  Megaphone,
  Landmark,
  Monitor,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  shortDescription: string;
  fullDescription: string;
  servicesList: string[];
  benefits: ServiceBenefit[];
  tools?: string;
  trialNote: string;
  ctaHeading: string;
  ctaText: string;
}

export const services: Service[] = [
  {
    slug: 'bookkeeping-accounting',
    title: 'Bookkeeping & Accounting',
    shortTitle: 'Bookkeeping',
    icon: Calculator,
    shortDescription:
      'Accurate, organised financial records aligned with US GAAP, IFRS, and LUX GAAP. Full accounting cycle management with actionable insights.',
    fullDescription:
      'Our bookkeeping and accounting services keep your financial records organised, accurate, and aligned with applicable reporting standards. We manage the full accounting cycle, including daily transaction booking, general ledger and trial balance review, bank and balance sheet reconciliations, financial statement preparation, and management reporting. Our team has experience working under US GAAP, IFRS, and LUX GAAP, enabling us to support companies operating across multiple jurisdictions. Beyond routine bookkeeping, we place strong emphasis on data quality, structure, and transparency\u2014ensuring your financials are not only correct, but decision-ready.',
    servicesList: [
      'Daily and monthly bookkeeping (GL/TB booking and review)',
      'Bank and account reconciliations',
      'Cleanup of historical accounting records',
      'Chart of accounts design and optimisation',
      'Audit-ready document preparation and support',
      'Monthly, quarterly, and annual management reports',
    ],
    benefits: [
      {
        title: 'Accurate Financial Records',
        description:
          'Up-to-date financial records and dashboards you can rely on for confident decision-making.',
      },
      {
        title: 'Cash Flow Clarity',
        description:
          'Clear insight into cash flow, profitability, and key performance indicators.',
      },
      {
        title: 'Reporting Support',
        description:
          'Support for budgeting, forecasting, and investor or stakeholder reporting.',
      },
      {
        title: 'Actionable Recommendations',
        description:
          'Practical recommendations based on real financial data to improve profitability and operational performance.',
      },
    ],
    tools:
      'QuickBooks, Xero, SAP, Oracle, Zoho Books, Wave, Varial, and other leading platforms.',
    trialNote:
      'We offer a two-month trial period. If you are not satisfied with the value delivered, we offer a full refund\u2014because we believe accounting partnerships should be built on trust and measurable results.',
    ctaHeading: 'Want to streamline your accounting?',
    ctaText: 'Get in touch for a free consultation.',
  },
  {
    slug: 'business-financial-consulting',
    title: 'Business & Financial Consulting',
    shortTitle: 'Business Consulting',
    icon: TrendingUp,
    shortDescription:
      'Structured, data-driven guidance for strategic planning, financial modelling, and operational optimisation tailored to your objectives.',
    fullDescription:
      'Whether you are launching a new product, expanding into new markets, restructuring operations, or preparing for growth, our business and financial consulting services provide structured, data-driven guidance tailored to your objectives. We work closely with management teams to analyse performance, evaluate strategic options, optimise processes, and build financial models that support confident decision-making. Our approach balances growth opportunities with financial discipline and risk awareness.',
    servicesList: [
      'Business performance and profitability analysis',
      'Strategic planning and operational optimisation',
      'Financial modelling, budgeting, and forecasting',
      'Investment evaluation and scenario analysis',
      'Advisory support for scaling, restructuring, or transformation initiatives',
    ],
    benefits: [
      {
        title: 'Objective Insights',
        description:
          'Clear, unbiased analysis of your business performance and market position.',
      },
      {
        title: 'Strategic Alignment',
        description:
          'Strategic plans aligned with financial reality and risk management.',
      },
      {
        title: 'Robust Financial Models',
        description:
          'Financial models and scenario analysis that support confident decision-making.',
      },
      {
        title: 'Actionable Leadership Guidance',
        description:
          'Clear, actionable recommendations tailored for leadership teams.',
      },
    ],
    trialNote:
      'We offer a two-month trial period. If, after working together, you do not see tangible benefits from our collaboration, we provide a full refund.',
    ctaHeading: 'Let\u2019s build your roadmap together.',
    ctaText: 'Get in touch for a free consultation.',
  },
  {
    slug: 'marketing-digital-strategy',
    title: 'Marketing & Digital Strategy',
    shortTitle: 'Marketing',
    icon: Megaphone,
    shortDescription:
      'Research-driven marketing and digital strategies that combine creative execution with analytics to generate real business impact.',
    fullDescription:
      'We help businesses attract, convert, and retain customers through research-driven marketing and digital strategies. Our approach combines creative execution with analytics and performance measurement\u2014ensuring that marketing investments generate real business impact. We have hands-on experience with both paid advertising and organic growth strategies. While each can be effective independently, we strongly believe the most sustainable results come from a balanced approach.',
    servicesList: [
      'Market and customer research',
      'Brand positioning and brand development',
      'Content strategy and creation',
      'Search engine optimisation (SEO)',
      'Social media management',
      'Digital advertising and campaign management',
    ],
    benefits: [
      {
        title: 'Strong Brand Identity',
        description:
          'A brand identity that resonates with your target audience and differentiates you in the market.',
      },
      {
        title: 'Multi-Channel Campaigns',
        description:
          'Campaigns that drive leads, engagement, and sales across multiple channels.',
      },
      {
        title: 'Measurable ROI',
        description:
          'Clear analytics and reporting to measure ROI and continuously refine strategy.',
      },
    ],
    tools: 'Google Ads, Facebook, Instagram, and other digital channels.',
    trialNote:
      'We offer a two-month trial period. If you do not see a measurable improvement in your online presence and marketing performance, we offer a full refund.',
    ctaHeading: 'Ready to enhance your brand?',
    ctaText: 'Talk to our marketing team.',
  },
  {
    slug: 'fintech-consulting',
    title: 'FinTech Consulting',
    shortTitle: 'FinTech',
    icon: Landmark,
    shortDescription:
      'Navigate the evolving financial technology landscape with expert guidance on selecting, implementing, and optimising modern financial technologies.',
    fullDescription:
      'The financial technology landscape is evolving rapidly, creating both opportunity and complexity. Our FinTech consulting services help businesses navigate this environment by selecting, implementing, and optimising modern financial technologies\u2014while remaining aligned with regulatory and operational requirements. We advise clients on solutions ranging from payment gateways and banking APIs to digital wallets, automation tools, and blockchain-based applications. Our focus is not technology for its own sake, but technology that delivers measurable efficiency, scalability, and competitive advantage.',
    servicesList: [
      'FinTech solution assessment and selection',
      'Integration of banking, payment, and financial platforms',
      'Process automation and system optimisation',
      'Risk assessment and compliance-aware implementation',
      'Advisory support for digital finance initiatives',
    ],
    benefits: [
      {
        title: 'Expert Technology Guidance',
        description:
          'Guidance on selecting the right financial technologies for your specific needs.',
      },
      {
        title: 'Seamless Integration',
        description:
          'Seamless integration of banking and payment solutions into your existing systems.',
      },
      {
        title: 'Reduced Operational Risk',
        description:
          'Structured implementation that minimises risk and ensures compliance.',
      },
      {
        title: 'Improved Efficiency',
        description:
          'Enhanced efficiency and scalability in your financial operations.',
      },
    ],
    trialNote:
      'We offer a two-month trial period. If, after working together, you do not see tangible benefits from our FinTech advisory, we offer a full refund.',
    ctaHeading: 'Explore how FinTech can accelerate your business.',
    ctaText: 'Contact us today.',
  },
  {
    slug: 'it-solutions',
    title: 'IT Solutions',
    shortTitle: 'IT Solutions',
    icon: Monitor,
    shortDescription:
      'Technology that enables your business. From design and development to optimisation and long-term support, aligned with your strategic objectives.',
    fullDescription:
      'Technology should enable your business\u2014not complicate it. Our IT solutions are designed to align systems, software, and infrastructure with your operational needs and strategic objectives. We support clients across the full project lifecycle, from design and development to optimisation and long-term support. Whether we are taking full ownership of a solution or supporting a specific module within a larger initiative, our focus remains on quality, scalability, and maintainability.',
    servicesList: [
      'Website and application design and development',
      'Custom software and application builds',
      'Code review and technical due diligence',
      'Cloud migration and infrastructure optimisation',
      'Data management and cybersecurity assessments',
      'Acting as an outsourced technical partner for larger projects',
      'Full or partial ownership of complex IT projects',
    ],
    benefits: [
      {
        title: 'Operational Efficiency',
        description:
          'Improved operational efficiency with scalable, well-architected systems.',
      },
      {
        title: 'Secure Infrastructure',
        description:
          'Secure infrastructure and robust data protection aligned with best practices.',
      },
      {
        title: 'Workflow-Aligned Solutions',
        description:
          'Solutions designed to fit your specific workflows and business processes.',
      },
      {
        title: 'Reliable Delivery',
        description:
          'Dependable delivery backed by technical accountability and client satisfaction guarantees.',
      },
    ],
    tools: 'Python, Java, C++, C#, JavaScript, React, Node.js, and more.',
    trialNote:
      'We carefully review every IT project before accepting it, ensuring we can provide meaningful value and technical excellence. We stand behind our work and guarantee client satisfaction upon delivery.',
    ctaHeading: 'Find out how our IT experts can transform your systems.',
    ctaText: 'Book a call.',
  },
  {
    slug: 'engineering-solutions',
    title: 'Engineering Solutions',
    shortTitle: 'Engineering',
    icon: Wrench,
    shortDescription:
      'Advanced modelling, simulation, and technical consulting services to optimise performance, validate concepts, and support complex system development.',
    fullDescription:
      'For clients requiring specialised engineering expertise, we provide advanced modelling, simulation, and technical consulting services. Our engineering solutions are designed to optimise performance, validate concepts, and support complex system development. We work extensively with a wide range of engineering and development tools to support algorithm development, data analysis, control system design, embedded systems, and technical training. We approach engineering challenges with a practical mindset\u2014focusing on optimisation, reliability, and integration into real-world business and production environments.',
    servicesList: [
      'Custom models and simulations to validate and optimise designs',
      'Algorithm development and data analysis',
      'Control system design and embedded systems',
      'Technical training and knowledge transfer',
      'Integration of engineering analysis into business and operational workflows',
    ],
    benefits: [
      {
        title: 'Custom Modelling & Simulation',
        description:
          'Purpose-built models and simulations to validate and optimise your designs.',
      },
      {
        title: 'Theory Meets Application',
        description:
          'Engineering consultants who understand both theory and practical application.',
      },
      {
        title: 'Business Integration',
        description:
          'Integration of engineering analysis into your business and operational workflows.',
      },
      {
        title: 'Real Project Experience',
        description:
          'Technical guidance grounded in real project experience across multiple industries.',
      },
    ],
    tools:
      'MATLAB, Simulink, DSP programming, embedded systems design, LTSpice, Texas Instruments C2000, Altium Designer, dSPACE, MySQL, Git, PHP, R, Visual Studio, Eclipse, PLC systems, VHDL, Verilog, Quartus, CircuitPro, Proteus, SolidWorks, Laravel, and many more.',
    trialNote:
      'We are confident in our ability to support your next technical venture and bring value where value is due.',
    ctaHeading: 'Discuss your engineering challenge with us.',
    ctaText: 'Request a consultation.',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
