import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/services-data";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="Comprehensive solutions for your business"
          description="From bookkeeping and financial consulting to marketing, IT, and engineering — we provide end-to-end services tailored to your needs."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
  );
}
