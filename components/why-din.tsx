import { Users, Lightbulb, MessageSquare } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Client-Focused Approach",
    description:
      "We start by listening. Every engagement begins with a conversation about your objectives, pain points, and opportunities. This ensures that our recommendations are relevant and actionable, not generic.",
  },
  {
    icon: Lightbulb,
    title: "Integrated Expertise",
    description:
      "As a multidisciplinary firm, we combine financial analysis, technology solutions, marketing strategy, and engineering know-how. By approaching your business holistically, we uncover insights that siloed consultants might miss.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "We explain complex concepts in plain language and provide transparent updates throughout the engagement. Our goal is to give you confidence in our process and results.",
  },
];

export function WhyDin() {
  return (
    <section id="why-din" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
              Why DIN
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              A partner who understands your unique challenges
            </h2>
            <p className="mt-4 text-muted-foreground text-lg text-pretty">
              At DIN, LLC, we exist to make your business stronger. Our team of
              finance, technology, and marketing professionals works with
              entrepreneurs and companies around the globe to provide the
              clarity, tools, and guidance you need.
            </p>

            <div className="mt-10 space-y-8">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                      <pillar.icon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-secondary p-8 lg:p-12">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Our Commitment
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3 border-b border-border pb-4">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">
                      Two-Month Trial
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      Full refund if you&apos;re not satisfied with the value
                      delivered.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-b border-border pb-4">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">
                      Selective Engagements
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      We review each case to ensure we can genuinely add value
                      before accepting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-b border-border pb-4">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">
                      International Presence
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      Offices in London, Wyoming, and Luxembourg, supporting
                      clients across multiple time zones.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">
                      Multi-Jurisdiction Expertise
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      Experience with US GAAP, IFRS, UK standards, and Luxembourg GAAP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
