import { Hero } from "@/components/hero";
import { MultidisciplinaryTeam } from "@/components/multidisciplinary-team";
import { Commitment } from "@/components/commitment";
import { Services } from "@/components/services";
import { WhyDin } from "@/components/why-din";
import { Process } from "@/components/process";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <MultidisciplinaryTeam />
      <Commitment />
      <Services />
      <WhyDin />
      <Process />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
