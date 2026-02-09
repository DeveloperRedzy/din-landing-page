const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by listening. Every engagement begins with a conversation about your objectives, challenges, and opportunities to ensure our approach is tailored to you.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Based on our discovery, we design a custom roadmap with clear milestones and deliverables — combining financial, technical, and strategic perspectives.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Our multidisciplinary team implements the plan with precision. Transparent updates and regular check-ins keep you informed at every stage.",
  },
  {
    number: "04",
    title: "Optimise",
    description:
      "We continuously monitor, analyse, and refine our approach. Your business evolves, and our strategies evolve with it to drive lasting results.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
            Our Process
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
            How we work with you
          </h2>
          <p className="mt-4 text-background/70 text-pretty">
            A proven methodology that delivers results without surprises.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-px bg-background/20"
                  style={{ width: "calc(100% - 2rem)" }}
                  aria-hidden="true"
                />
              )}
              <div className="text-5xl font-bold text-accent/30 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-background/70 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
