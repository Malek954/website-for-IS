import { Reveal } from "@/components/site/Reveal";

const STATS = [
  { value: "156%", label: "Average lift in Sales" },
  { value: "148%", label: "Average lift in ROAS" },
  { value: "14%", label: "Average lift in AOV" },
  { value: "39%", label: "Average lift in CVR" },
];

export function CaseStudies() {
  return (
    <section id="case" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Inside The System
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mx-auto max-w-4xl text-balance text-center text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Breaking Down The <span className="gradient-text">Impact System™</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_60px_-20px_oklch(0.43_0.11_263_/_0.45)]">
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.loom.com/embed/a865d49b54bb4d8b9c9d483a99829988"
                title="Breaking Down The Impact System"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-y-10 border-y border-border py-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="text-center">
                <div className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
