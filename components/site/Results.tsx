import { Reveal } from "@/components/site/Reveal";
import r1 from "@/assets/results/10K-10-Days.png.asset.json";
import r2 from "@/assets/results/E655K-15-Days.png.asset.json";
import r3 from "@/assets/results/E310K-7-Days.png.asset.json";
import r4 from "@/assets/results/E2.6M-ROAS-X19.5.png.asset.json";
import r5 from "@/assets/results/E1.7M-ROAS-X12.6.png.asset.json";
import r6 from "@/assets/results/20K-30-Days.png.asset.json";
import r7 from "@/assets/results/10K-7-Days-mobile.png.asset.json";
import r8 from "@/assets/results/4.7K-4-Days.png.asset.json";
import r9 from "@/assets/results/10K-7-Days.png.asset.json";

const RESULTS = [
  { src: r1.url, title: "$10K · 10 Days" },
  { src: r2.url, title: "E£655K · 15 Days" },
  { src: r3.url, title: "E£310K · 7 Days" },
  { src: r4.url, title: "E£2.6M · ROAS X19.5" },
  { src: r5.url, title: "E£1.7M · ROAS X12.6" },
  { src: r6.url, title: "$20K · 30 Days" },
  { src: r7.url, title: "$10K · 7 Days" },
  { src: r8.url, title: "$4.7K · 4 Days" },
  { src: r9.url, title: "$10K · 7 Days" },
];

export function Results() {
  return (
    <section id="results" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Real Numbers · Real Brands
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="max-w-4xl text-balance text-4xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
            Results That <span className="gradient-text">Speak For Themselves.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTS.map((r, i) => (
            <Reveal key={i} delay={i * 70}>
              <article className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_25px_60px_-20px_oklch(0.43_0.11_263_/_0.7)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={r.src}
                    alt={r.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/0 transition-all duration-500 group-hover:ring-primary/60" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-bold tracking-tight">{r.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
