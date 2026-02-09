import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import {
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/lib/services-data";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <PageHero
        label="Services"
        title={service.title}
        description={service.fullDescription}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
      />

      {/* Services List + Benefits */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left: What We Offer */}
            <div>
              <SectionHeading
                label="What We Offer"
                title="Our Services"
                align="left"
              />
              <ul className="mt-8 space-y-4">
                {service.servicesList.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {service.tools && (
                <div className="mt-8 rounded-xl bg-secondary p-6">
                  <p className="text-sm font-medium text-foreground mb-2">
                    Tools & Platforms
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.tools}
                  </p>
                </div>
              )}
            </div>

            {/* Right: Benefits */}
            <div>
              <SectionHeading
                label="Why Choose Us"
                title="Key Benefits"
                align="left"
              />
              <div className="mt-8 space-y-4">
                {service.benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="rounded-xl border border-border bg-background p-6"
                  >
                    <h3 className="font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Note */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent mb-6">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Our Commitment
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {service.trialNote}
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/contact">
                {service.ctaText}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection title={service.ctaHeading} />
    </>
  );
}
