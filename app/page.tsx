import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyDin } from "@/components/why-din";
import { Process } from "@/components/process";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyDin />
      <Process />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
