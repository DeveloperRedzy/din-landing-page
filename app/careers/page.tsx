import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import {
  MapPin,
  Clock,
  Mail,
  Globe,
  TrendingUp,
  Users,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career with purpose at DIN, LLC. Explore open positions across consulting, accounting, IT, and more in our international team.",
};

const positions = [
  {
    title: "Sales Officer",
    location: "London, United Kingdom",
    type: "On-Site / Hybrid",
    experience: "Minimum 1 year experience required",
    overview:
      "We are seeking a motivated and results-oriented Sales Officer to support our expansion in the UK and European markets. The ideal candidate will identify new business opportunities, build client relationships, and represent our consulting services with professionalism and credibility.",
    responsibilities: [
      "Identify and develop new client opportunities",
      "Conduct outreach and manage sales pipelines",
      "Present our service offerings clearly and confidently",
      "Coordinate with internal teams to align proposals with client needs",
      "Maintain strong, long-term client relationships",
    ],
    requirements: [
      "Minimum 1 year of sales or business development experience",
      "Strong communication and negotiation skills",
      "Professional demeanor and client-facing confidence",
      "Ability to understand consulting and financial service offerings",
      "Fluency in English",
    ],
    note: "We value individuals who are proactive, disciplined, and relationship-driven.",
  },
  {
    title: "Accountant",
    location: "Luxembourg",
    type: "On-Site / Hybrid",
    experience: "Minimum 2 years experience required",
    overview:
      "We are looking for a detail-oriented Accountant with strong knowledge of international and Luxembourg accounting standards. This role involves managing financial reporting, ensuring compliance, and supporting internal and client accounting operations.",
    responsibilities: [
      "Prepare and review financial statements",
      "Ensure compliance with IFRS and Luxembourg GAAP",
      "Support reporting under multi-jurisdictional standards",
      "Perform reconciliations and financial analysis",
      "Assist with audit preparation and documentation",
    ],
    requirements: [
      "Minimum 2 years of accounting experience",
      "Strong knowledge of IFRS and LUX-GAAP",
      "Experience with accounting software such as SAP, QuickBooks, Xero",
      "Strong analytical skills and attention to detail",
      "Fluency in English (additional languages are an advantage)",
    ],
    note: "We are seeking professionals who combine technical expertise with commercial awareness.",
  },
  {
    title: "Bookkeeper (UK-Based, Remote)",
    location: "Remote — United Kingdom",
    type: "Remote",
    experience: "Minimum 2 years experience required",
    overview:
      "We are seeking a skilled Bookkeeper with knowledge of UK bookkeeping procedures and IFRS-based environments. The role involves managing daily financial transactions, reconciliations, and supporting client reporting requirements.",
    responsibilities: [
      "Daily bookkeeping and ledger maintenance",
      "Bank and account reconciliations",
      "Preparation of management reports",
      "Supporting compliance with UK bookkeeping standards",
      "Collaboration with consulting and accounting teams",
    ],
    requirements: [
      "Minimum 2 years of bookkeeping experience",
      "Knowledge of IFRS and UK bookkeeping procedures",
      "Experience with SAP, QuickBooks, Xero, or similar software",
      "High level of accuracy and organisational skills",
      "Fluency in English",
    ],
    note: "We value reliability, precision, and proactive communication.",
  },
  {
    title: "Bookkeeper (US-Based, Remote)",
    location: "Remote — United States",
    type: "Remote",
    experience: "Minimum 2 years experience required",
    overview:
      "We are looking for an experienced Bookkeeper with strong knowledge of US GAAP and U.S. bookkeeping procedures. The successful candidate will support client accounting operations and ensure accurate financial records.",
    responsibilities: [
      "Daily transaction booking and reconciliations",
      "Preparation of financial summaries and reports",
      "Ensuring compliance with US GAAP standards",
      "Maintaining organised and audit-ready documentation",
      "Supporting financial performance analysis",
    ],
    requirements: [
      "Minimum 2 years of bookkeeping experience",
      "Knowledge of US GAAP",
      "Experience with QuickBooks, Xero, or similar accounting software",
      "Strong attention to detail and analytical skills",
      "Professional communication skills",
    ],
    note: "We are looking for professionals who understand both technical accuracy and business impact.",
  },
  {
    title: "IT Junior (Remote)",
    location: "Remote",
    type: "Remote",
    experience: "Minimum 1 year experience required",
    overview:
      "We are seeking a motivated IT Junior to support software development, system optimisation, and digital solutions projects. This is an opportunity to work across international projects and contribute to meaningful technology initiatives.",
    responsibilities: [
      "Assist in software development and testing",
      "Support website and application development",
      "Participate in code reviews and debugging",
      "Contribute to backend and frontend development tasks",
      "Collaborate with senior developers on larger projects",
    ],
    requirements: [
      "Minimum 1 year of development experience",
      "Working knowledge of Python, JavaScript, React, and Node.js",
      "Basic familiarity with Java, C++, or C# is an advantage",
      "Understanding of version control systems (e.g., Git)",
      "Problem-solving mindset and eagerness to learn",
    ],
    note: "We are looking for individuals who are technically curious, disciplined, and ready to grow within an international consulting environment.",
  },
];

const benefits = [
  {
    icon: Globe,
    title: "International Exposure",
    description: "Work across EU and U.S. markets",
  },
  {
    icon: TrendingUp,
    title: "Growth Environment",
    description: "Performance-driven, growth-oriented culture",
  },
  {
    icon: Users,
    title: "Leadership Access",
    description: "Direct collaboration with leadership",
  },
  {
    icon: Briefcase,
    title: "Measurable Impact",
    description: "Opportunity to make real, visible contributions",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title="Build Your Career With Purpose"
        description="At DIN, LLC, we believe that great businesses are built by great people. We value expertise, accountability, and meaningful contribution. Our team operates internationally across the U.S., Europe, and global markets."
        breadcrumbs={[{ label: "Careers", href: "/careers" }]}
      />

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are committed to fostering an environment where professionals
              can grow, contribute, and make measurable impact. We are selective
              in who we bring into our organisation because we believe long-term
              success is built on{" "}
              <span className="text-foreground font-semibold">
                competence, integrity, and shared ambition
              </span>
              .
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              If you are driven, detail-oriented, and committed to delivering
              high-quality work, we would be pleased to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Open Positions"
            title="Current opportunities at DIN"
            description="Explore roles across our international offices and remote teams."
          />

          <div className="mt-12 space-y-6">
            {positions.map((position) => (
              <details
                key={position.title}
                className="group rounded-xl border border-border bg-background overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 md:p-8 list-none [&::-webkit-details-marker]:hidden">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {position.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {position.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-90 shrink-0 ml-4" />
                </summary>

                <div className="border-t border-border px-6 pb-6 md:px-8 md:pb-8 pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                        Role Overview
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {position.overview}
                      </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((item) => (
                            <li key={item} className="flex gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {position.requirements.map((item) => (
                            <li key={item} className="flex gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground italic">
                      {position.note}
                    </p>

                    <Button
                      asChild
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      <Link href="mailto:careers@dinsolution.com?subject=Application — {position.title}">
                        Apply for this role
                        <Mail className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join DIN */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Join DIN?"
            title="A place where your work matters"
            description="We value people who take ownership of their work, contribute meaningfully, and strive for excellence."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-border bg-background p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              label="How to Apply"
              title="Ready to join our team?"
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Please send your CV and a short cover letter to:
            </p>
            <a
              href="mailto:careers@dinsolution.com"
              className="mt-4 inline-block text-lg font-semibold text-accent hover:underline"
            >
              careers@dinsolution.com
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Kindly indicate the position you are applying for in the subject
              line. We review every application carefully and will contact
              shortlisted candidates.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link href="mailto:careers@dinsolution.com">
                  Send Your Application
                  <Mail className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a question before applying?"
        description="Reach out to our team and we'll be happy to help you learn more about working at DIN."
      />
    </>
  );
}
