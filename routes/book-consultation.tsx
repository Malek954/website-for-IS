import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { SiteFooter } from "@/components/site/FinalCTA";
import { LeadForm } from "@/components/site/LeadForm";
import { FAQ } from "@/components/site/FAQ";
import { Reveal } from "@/components/site/Reveal";
import { Check } from "lucide-react";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Impact Systems" },
      {
        name: "description",
        content:
          "Book a paid 60-minute strategy consultation with Impact Systems. 2,000 EGP — refunded if we work together.",
      },
    ],
    links: [{ rel: "canonical", href: "/book-consultation" }],
  }),
  component: Page,
});

const FAQS = [
  {
    q: "Why is there a fee for the consultation?",
    a: "The 2,000 EGP fee filters serious founders and pays for a senior media buyer's time. You'll get a real strategy session — not a sales call. The fee is fully refunded if we decide to work together.",
  },
  {
    q: "What happens on the call?",
    a: "We audit your ad account, store, and offer live, then give you a 90-day growth plan with specific targets for ROAS, AOV, and CVR — yours to keep whether you hire us or not.",
  },
  {
    q: "How do I pay?",
    a: "After you submit the form, we'll WhatsApp you a secure payment link (Visa, Mastercard, or Instapay).",
  },
  {
    q: "What size brand do you work with?",
    a: "We typically work with Shopify brands doing 200k EGP+ in monthly net sales. Smaller brands are welcome too — we'll tell you honestly if it's the right time.",
  },
  {
    q: "How fast can we start?",
    a: "Most consultations are booked within 48 hours. If you decide to onboard, we go live within 7 business days.",
  },
];

const PERKS = [
  "60-minute private strategy session",
  "Live audit of your Meta & TikTok ad accounts",
  "Custom 90-day growth plan (yours to keep)",
  "Creative testing roadmap for your offer",
  "Refunded in full if we sign a retainer",
];

function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-40 sm:pt-48">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Paid Strategy Call
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 text-balance text-4xl font-bold leading-[0.95] sm:text-6xl">
                Book Your <span className="gradient-text">Consultation</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-lg text-muted-foreground">
                One hour with a senior media buyer. Leave with a 90-day growth plan tailored to your
                store — even if you never hire us.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <ul className="mt-8 space-y-3">
                {PERKS.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <LeadForm variant="book" />
          </Reveal>
        </div>
      </section>
      <FAQ items={FAQS} />
      <SiteFooter />
    </main>
  );
}
