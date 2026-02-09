import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore DIN's full range of services — bookkeeping, financial consulting, marketing strategy, fintech consulting, IT solutions, and engineering.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Comprehensive business solutions"
        description="From bookkeeping and financial consulting to marketing, IT, and engineering — we provide end-to-end services tailored to your needs."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
