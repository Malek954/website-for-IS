import { Reveal } from "@/components/site/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Systemized Optimization",
    desc: "Data-driven decisions focused on revenue and profitability — not vanity metrics.",
    tags: ["Data-Driven Decisions", "Revenue Focus", "Profitability Focus"],
  },
  {
    n: "02",
    title: "Traffic Acquisition",
    desc: "Build a scalable customer acquisition engine across Meta, TikTok and Snapchat.",
    tags: ["Platform-Specific Strategies", "Qualified Traffic", "Scalable Campaign Structures"],
  },
  {
    n: "03",
    title: "Creative & Content Direction",
    desc: "Know exactly what should be created, tested, improved and scaled.",
    tags: ["Competitor Analysis", "Creative Testing Frameworks", "Content Direction", "Performance Analysis"],
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              How It <span className="gradient-text">Works</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 text-lg text-muted-foreground">
              We help you implement a complete growth ecosystem built around advertising,
              strategic direction, customer journeys, revenue optimization and profitability.
            </p>
          </Reveal>
        </div>

        <div className="mt-14">
          <div className="mb-6 inline-flex rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Build A Profitable Acquisition Engine
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:border-primary/50">
                  <div className="flex items-start justify-between">
                    <div className="font-display text-5xl font-bold gradient-text">{s.n}</div>
                    <div className="h-px flex-1 self-center bg-border ml-4" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold uppercase tracking-wide">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
