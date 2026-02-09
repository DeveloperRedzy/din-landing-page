import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Ready to get started?",
  description = "Book a consultation today and let\u2019s start a conversation about your goals.",
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-foreground px-6 py-16 md:px-16 md:py-20 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-background sm:text-4xl lg:text-5xl text-balance">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-background/70 text-pretty">
              {description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto"
              >
                <Link href="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background/20 text-background hover:bg-background/10 bg-transparent w-full sm:w-auto"
              >
                <Link href="mailto:info@din.lu">Email Us</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-background/50">
              info@din.lu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
