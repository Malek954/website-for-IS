import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-36 sm:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_at_top,oklch(0.43_0.11_263_/_0.25),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-32 sm:px-8 sm:pb-40">
        <Reveal>
          <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Now accepting Q2 applications
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mx-auto max-w-5xl text-balance text-center text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[88px]">
            We Scale Ecommerce Brands With{" "}
            <span className="gradient-text">Paid Ads & Profitable Systems</span>
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-center text-lg font-semibold uppercase tracking-wider text-foreground sm:text-xl">
            We Generated <span className="gradient-text">5M+</span> Over The Past Few Days
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button asChild variant="outlineHero" size="xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="hero" size="xl">
              <Link to="/start-now">Apply Now →</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
