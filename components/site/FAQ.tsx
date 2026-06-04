import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <Reveal>
        <h2 className="text-balance text-3xl font-bold sm:text-5xl">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
      </Reveal>
      <Accordion type="single" collapsible className="mt-8">
        {items.map((it, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-base font-semibold hover:text-primary">
              {it.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{it.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
