import { Reveal } from "@/components/site/Reveal";
import { Facebook, Instagram, Music2, Ghost, ShoppingBag } from "lucide-react";

const PLATFORMS = [
  { Icon: Facebook, name: "Facebook" },
  { Icon: Instagram, name: "Instagram" },
  { Icon: Music2, name: "TikTok" },
  { Icon: Ghost, name: "Snapchat" },
  { Icon: ShoppingBag, name: "Shopify" },
];

export function Platforms() {
  return (
    <section id="platforms" className="relative border-y border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            The Platforms We Master
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mx-auto mt-4 max-w-3xl text-balance text-center text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            We Optimize Every <span className="gradient-text">Stage Of Growth</span>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
            Profitable brands scale faster with proven systems.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PLATFORMS.map(({ Icon, name }, i) => (
            <Reveal key={name} delay={i * 80}>
              <div className="group relative flex h-32 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary/60">
                <div
                  className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at center, oklch(0.43 0.11 263 / 0.2), transparent 70%)" }}
                />
                <Icon className="h-10 w-10 text-primary transition group-hover:scale-110" strokeWidth={1.75} />
                <div className="text-sm font-semibold tracking-wide">{name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
