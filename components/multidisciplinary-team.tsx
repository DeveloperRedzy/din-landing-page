import {
  Calculator,
  Wrench,
  Monitor,
  Megaphone,
  Layers,
  CheckCircle2,
} from 'lucide-react';

const teams = [
  {
    icon: Calculator,
    title: 'Accounting & Bookkeeping Team',
    description:
      'Our finance professionals manage and optimise your financial ecosystem. From daily bookkeeping and multi-standard reporting (US GAAP, IFRS, LUX GAAP) to forecasting and performance analysis, this team ensures financial clarity, compliance, and strategic insight.',
    highlight:
      'They do not merely record numbers — they interpret them to improve your profitability and financial stability.',
  },
  {
    icon: Wrench,
    title: 'Engineering Team',
    description:
      'Focused on electrical and mechanical engineering solutions, our engineering specialists support modelling, simulation, system optimisation, and technical problem-solving. Whether validating complex concepts or improving operational performance, this team delivers precision-driven solutions grounded in technical excellence.',
  },
  {
    icon: Monitor,
    title: 'IT Team',
    description:
      'Our IT professionals design, develop, and optimise systems that enable operational efficiency and scalability. From software development and system architecture to infrastructure and digital transformation initiatives, the IT team ensures that technology serves your strategy — not the other way around.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Team',
    description:
      'Our marketing specialists combine research, analytics, and creative execution to strengthen your market position. From digital strategy and performance campaigns to brand architecture, the team builds growth engines that generate measurable impact.',
  },
];

const integrationPoints = [
  'We solve complex challenges holistically.',
  'We streamline processes.',
  'We remove friction.',
  'We design clarity.',
];

export function MultidisciplinaryTeam() {
  return (
    <>
      {/* Mission Intro */}
      <section className='py-20 md:py-28 bg-card'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-medium uppercase tracking-wider text-accent mb-3'>
              Our Approach
            </p>
            <h2 className='text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance'>
              Tailor-made strategies for every organisation
            </h2>
            <div className='mt-6 space-y-4 text-muted-foreground text-pretty leading-relaxed'>
              <p>
                Every organisation is different. That is why we do not offer
                generic solutions. We design tailor-made strategies and systems
                aligned with your structure, your objectives, and your growth
                trajectory.
              </p>
              <p className='text-lg font-medium text-foreground'>
                Our mission is simple: Deliver results — and stand behind them.
              </p>
              <p>
                We commit not only to solving immediate challenges, but to
                building frameworks that strengthen your business over the long
                term. When you work with DIN, you gain a partner who remains
                engaged, accountable, and focused on sustained performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Cards */}
      <section className='py-20 md:py-28'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <p className='text-sm font-medium uppercase tracking-wider text-accent mb-3'>
              Our Teams
            </p>
            <h2 className='text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance'>
              A dedicated multidisciplinary team
            </h2>
            <p className='mt-4 text-muted-foreground text-pretty leading-relaxed'>
              Our strength lies in our integrated structure. Each discipline
              operates with depth and expertise — yet works in alignment with a
              unified strategic vision.
            </p>
          </div>

          <div className='mt-16 grid gap-8 md:grid-cols-2'>
            {teams.map((team) => {
              const Icon = team.icon;
              return (
                <div
                  key={team.title}
                  className='group rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-5'>
                    <Icon className='h-6 w-6' />
                  </div>
                  <h3 className='text-lg font-semibold text-foreground'>
                    {team.title}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground leading-relaxed'>
                    {team.description}
                  </p>
                  {team.highlight && (
                    <p className='mt-3 text-sm font-medium text-foreground/80 italic'>
                      {team.highlight}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrated Strategy Unit */}
      <section className='py-20 md:py-28 bg-secondary'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-12 lg:grid-cols-2 lg:gap-16 items-center'>
            <div>
              <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground mb-6'>
                <Layers className='h-7 w-7' />
              </div>
              <h2 className='text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance'>
                The Integrated Strategy Unit
              </h2>
              <p className='mt-4 text-muted-foreground leading-relaxed'>
                While each team brings specialised expertise, our true advantage
                lies in integration. Our Integrated Strategy Unit combines
                finance, technology, engineering, and marketing into one cohesive
                execution model.
              </p>
              <p className='mt-4 text-muted-foreground leading-relaxed'>
                Instead of isolated departments or fragmented advisors, you work
                with a unified structure where every decision is aligned across
                disciplines. This eliminates inefficiencies, reduces
                miscommunication, and ensures that strategy, execution, and
                performance operate as one system.
              </p>
            </div>

            <div className='rounded-2xl bg-background p-8 lg:p-10'>
              <ul className='space-y-4'>
                {integrationPoints.map((point) => (
                  <li key={point} className='flex items-start gap-3'>
                    <CheckCircle2 className='h-5 w-5 text-accent mt-0.5 shrink-0' />
                    <span className='text-foreground font-medium'>{point}</span>
                  </li>
                ))}
              </ul>
              <div className='mt-8 border-t border-border pt-6'>
                <p className='text-muted-foreground leading-relaxed'>
                  Our objective is not to complicate your operations — but to
                  make them seamless. When our systems are in place, you gain
                  what every business leader values most:
                </p>
                <p className='mt-3 text-lg font-semibold text-foreground'>
                  Control, confidence, and the ability to focus on growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
