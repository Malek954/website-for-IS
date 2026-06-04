import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.43_0.11_263_/_0.25),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-5 py-32 text-center sm:px-8 sm:py-44">
        <Reveal>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Limited Spots
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 text-balance text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Ready To <br />
            <span className="gradient-text">Scale Profitably?</span>
          </h2>
        </Reveal>
        <Reveal delay={250}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Let's build a growth ecosystem designed to maximize revenue, efficiency
            and profitability.
          </p>
        </Reveal>
        <Reveal delay={350}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {["Revenue Growth", "Improved ROAS", "Scalable Systems"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <div className="grid h-5 w-5 place-items-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </div>
                <span className="font-medium text-foreground">{t}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={500}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="outlineHero" size="xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="hero" size="xl" className="px-14 text-lg">
              <Link to="/start-now">Apply Now →</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const WHATSAPP_URL = "https://wa.me/201000000000";
const TIKTOK_URL = "https://www.tiktok.com/@malekmb01?_r=1&_t=ZS-96sztMmsYm9";
const INSTAGRAM_URL = "https://www.instagram.com/malek_mb01?igsh=bmNkcmU2dHcxa3cz&utm_source=qr";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.05 4.91A10 10 0 0 0 4.06 18.18L3 22l3.93-1.03A10 10 0 1 0 19.05 4.91Zm-7.04 15.4a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-2.33.61.62-2.27-.2-.32a8.3 8.3 0 1 1 6.45 3.32Zm4.55-6.22c-.25-.13-1.47-.73-1.7-.81-.23-.09-.4-.13-.56.13-.17.25-.65.81-.8.97-.15.17-.3.19-.55.07-.25-.13-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.3.37-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.07-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.49 1.05 2.66.13.17 1.82 2.77 4.4 3.89.62.27 1.1.43 1.47.55.62.2 1.18.17 1.63.1.5-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.36 20.78a6.34 6.34 0 0 0 10.86-4.43V9.42a8.18 8.18 0 0 0 4.77 1.52V7.49a4.84 4.84 0 0 1-1.4-.8Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function SiteFooter() {
  const socials = [
    { Icon: WhatsAppIcon, href: WHATSAPP_URL, label: "WhatsApp" },
    { Icon: InstagramIcon, href: INSTAGRAM_URL, label: "Instagram" },
    { Icon: TikTokIcon, href: TIKTOK_URL, label: "TikTok" },
  ];
  return (
    <footer className="border-t border-border bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Impact Systems" className="h-7 w-auto" />
        </div>
        <div className="flex items-center gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="group grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-[0_10px_30px_-10px_oklch(0.43_0.11_263_/_0.6)]"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Impact Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
