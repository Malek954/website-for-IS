import { Reveal } from "@/components/site/Reveal";

const SERVICES = [
  { n: "01", title: "Performance Marketing", desc: "Launch, optimize and scale across Meta, TikTok and Snapchat using data-driven media buying systems." },
  { n: "02", title: "Creative & Content Direction", desc: "Competitor analysis, winning patterns, testing roadmaps and direction for content and creative production." },
  { n: "03", title: "Growth Strategy", desc: "Clear plans for what to launch, test, optimize and scale based on objectives and performance data." },
  { n: "04", title: "Revenue Optimization", desc: "Increase customer value through offer positioning, upsells, cross-sells and journey improvements." },
  { n: "05", title: "Profitability Systems", desc: "Align growth initiatives with profitability goals so scaling stays sustainable and efficient." },
  { n: "06", title: "Brand Ecosystem Development", desc: "Alignment between advertising, messaging, content, offers and customer experience." },
  { n: "07", title: "System Audits", desc: "Identify bottlenecks across acquisition, conversion, customer value and profitability." },
  { n: "08", title: "Performance Consulting", desc: "Strategic guidance on where growth opportunities exist and how to execute them effectively." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Your Growth Partner
          </div>
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Why <span className="gradient-text">Impact Systems?</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-xl text-lg text-muted-foreground">
              We build complete growth ecosystems that align advertising, creative direction,
              customer journeys, and profitability to maximize performance across every stage
              of growth.
            </p>
          </Reveal>
        </div>

        {/* Numbered services */}
        <Reveal>
          <h3 className="mt-24 text-balance text-2xl font-bold sm:text-3xl">
            <span className="gradient-text">Services</span>
          </h3>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <div className="group relative h-full rounded-2xl border border-border bg-card/60 p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:bg-card">
                <div className="font-display text-5xl font-bold text-primary/20 transition group-hover:text-primary/40">
                  {s.n}
                </div>
                <h4 className="mt-3 text-lg font-bold">{s.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
