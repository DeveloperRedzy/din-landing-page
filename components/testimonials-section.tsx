import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";

const testimonials = [
  {
    quote:
      "Thanks to DIN\u2019s integrated approach, our finance team now has accurate real-time reports and our marketing campaigns are finally reaching the right audience. They took time to understand our business and delivered beyond expectations.",
    author: "CEO",
    role: "Technology startup",
  },
  {
    quote:
      "We needed a partner who could clean up our books, set up a modern IT system and guide our growth strategy. DIN\u2019s team delivered a comprehensive solution and continues to be a trusted advisor.",
    author: "Founder",
    role: "Manufacturing company",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="We build lasting partnerships grounded in trust and measurable results."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
