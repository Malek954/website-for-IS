import { Reveal } from "@/components/site/Reveal";
import {
  Megaphone, Users, RefreshCw, LayoutTemplate, MousePointerClick, Sparkles,
  Tag, FileStack, Compass, Globe2,
} from "lucide-react";

const ITEMS = [
  { Icon: Megaphone, title: "Paid Ads" },
  { Icon: Users, title: "Creator Flywheel" },
  { Icon: RefreshCw, title: "Post Purchase" },
  { Icon: LayoutTemplate, title: "Landing Pages" },
  { Icon: MousePointerClick, title: "CRO" },
  { Icon: Sparkles, title: "Ad Creatives" },
  { Icon: Tag, title: "Offers" },
  { Icon: FileStack, title: "Frameworks" },
  { Icon: Compass, title: "Strategy" },
  { Icon: Globe2, title: "Brand World" },
];

export function ServicesGrid() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              The Stack
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Everything we run, <span className="gradient-text">in-house.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 40}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60">
                <div className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at center, oklch(0.43 0.11 263 / 0.18), transparent 70%)" }} />
                <div className="flex h-full flex-col justify-between">
                  <it.Icon className="h-7 w-7 text-primary transition group-hover:scale-110" />
                  <div className="text-lg font-bold sm:text-xl">{it.title}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
