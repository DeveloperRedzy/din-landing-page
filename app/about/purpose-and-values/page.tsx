import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import {
  Users,
  Target,
  Shield,
  Handshake,
  Award,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Purpose & Values",
  description:
    "Discover DIN, LLC's purpose, core values, and commitment to delivering unified solutions across finance, technology, marketing, and engineering.",
};

const coreValues = [
  {
    icon: Users,
    title: "Client-First Approach",
    description:
      "Our clients' success is our success. We listen deeply, tailor our solutions to real needs, and always act in your best business interest.",
  },
  {
    icon: Target,
    title: "Results Above Rhetoric",
    description:
      "We believe in action, not promises. Every project is designed to deliver insights, outcomes, and measurable performance improvements. If we cannot deliver real value, we won't hesitate to say so — and we stand behind our work.",
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description:
      "We operate with honesty, clarity, and openness. You'll always know what we're doing, why we're doing it, and how it drives your outcomes.",
  },
  {
    icon: Handshake,
    title: "Collaborative Problem-Solving",
    description:
      "Complex problems are best solved together. We partner with your team, drawing on diverse expertise to design robust solutions that work in practice — not just on paper.",
  },
  {
    icon: Award,
    title: "Excellence in Execution",
    description:
      "We maintain high standards across every engagement. From financial reviews to technical builds, from strategy formulation to implementation, quality is never negotiable.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning & Adaptation",
    description:
      "The world changes fast. So do we. We stay ahead of market trends, regulatory shifts, and technological innovation to ensure our clients are always equipped for what's next.",
  },
];

const purposePoints = [
  "Navigate regulatory frameworks with confidence",
  "Optimise financial operations for clarity and control",
  "Adopt the right technologies at the right time",
  "Build powerful digital engagement and marketing engines",
  "Leverage engineering excellence to solve complex technical problems",
];

const commitments = [
  {
    title: "Collaborative expertise",
    description: "across finance, technology, and engineering",
  },
  {
    title: "Outcome-driven solutions",
    description: "focused on measurable impact",
  },
  {
    title: "A confident partnership",
    description: "backed by our refund assurance",
  },
  {
    title: "Long-term support",
    description: "built on trust and performance",
  },
];

export default function PurposeAndValuesPage() {
  return (
    <>
      <PageHero
        label="Purpose & Values"
        title="Multiple or Complex Problems, Unified Solutions — DIN."
        description="At DIN, we believe that complexity should not stand in the way of progress. Whether your challenges span finance, technology, marketing, or engineering, we bring clarity and resolution through unified, practical solutions tailored to your business."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Purpose & Values", href: "/about/purpose-and-values" },
        ]}
      />

      {/* Confidence Statement */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don&apos;t just deliver services — we engineer outcomes that
              help your organisation thrive.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We are confident in our ability to deliver meaningful value.
              That&apos;s why, when we commit to a partnership, we commit with
              conviction:{" "}
              <span className="text-foreground font-semibold">
                if we cannot deliver on our promises, we offer a full refund
              </span>
              — a hallmark of our confident certainty and a testament to our
              commitment to trusted, long-term relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <SectionHeading
                label="Our Purpose"
                title="Empowering businesses with expert guidance and disciplined execution"
                align="left"
              />
              <p className="mt-6 text-muted-foreground leading-relaxed">
                To empower businesses, from startups to global enterprises, with
                expert guidance, disciplined execution, and solutions that drive
                measurable impact.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                At DIN, your challenges are opportunities for impact. We combine
                deep technical knowledge with business insight to help you:
              </p>
            </div>

            <div className="space-y-4">
              {purposePoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-3 rounded-xl bg-background p-4"
                >
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
              <p className="text-sm text-muted-foreground mt-4 pl-1">
                We exist to make your organisation stronger, smarter, and more
                resilient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Core Values"
            title="The principles that guide everything we do"
            description="These values are at the heart of every engagement, every recommendation, and every solution we deliver."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-xl border border-border bg-background p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Commitment to You"
            title="More than a service provider — your strategic partner"
            description="When you choose DIN, you choose a partner who doesn't shy away from complexity. We transform it into momentum — building the systems, strategies, and technologies that shape what's next."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-background p-6 text-center"
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/contact">
                Contact Us — Free Consultation
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="We don't shy away from complexity"
        description="We transform it into momentum — building the systems, strategies, and technologies that shape what's next."
      />
    </>
  );
}
