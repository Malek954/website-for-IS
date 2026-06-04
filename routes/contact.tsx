import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { SiteFooter } from "@/components/site/FinalCTA";
import { Reveal } from "@/components/site/Reveal";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Impact Systems" },
      {
        name: "description",
        content: "Get in touch with Impact Systems via email or WhatsApp.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

const ITEMS: Array<{ icon: typeof Mail; label: string; value: string; href: string | null }> = [
  {
    icon: Mail,
    label: "Email",
    value: "elnaggarmalek9@gmail.com",
    href: "mailto:elnaggarmalek9@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+20 100 000 0000",
    href: "https://wa.me/201000000000",
  },
];

function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-40 sm:pt-48">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Get in Touch
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 text-balance text-5xl font-bold leading-[0.95] sm:text-7xl">
              Let's <span className="gradient-text">Talk Growth</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Reach us through any channel below — or jump straight to applying.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {ITEMS.map((it, i) => {
              const Icon = it.icon;
              const card = (
                <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_20px_50px_-20px_oklch(0.43_0.11_263_/_0.6)]">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {it.label}
                    </p>
                    <p className="mt-1 font-semibold text-foreground">{it.value}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={it.label} delay={i * 80}>
                  {it.href ? (
                    <a href={it.href} target="_blank" rel="noreferrer">
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400}>
            <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/start-now">Apply Now →</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
