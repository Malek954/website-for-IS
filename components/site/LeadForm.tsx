import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  whatsapp: z.string().trim().min(6, "WhatsApp number required").max(30),
  netSales: z.string().trim().min(1, "Required").max(20),
  brand: z.string().trim().max(100).optional(),
});

export function LeadForm({ variant }: { variant: "book" | "start" }) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/40 bg-card p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-7 w-7" strokeWidth={3} />
        </div>
        <h3 className="mt-4 text-2xl font-bold">You're in.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {variant === "book"
            ? "We'll reach out via WhatsApp within 24 hours with your consultation slot and payment link (2000 EGP)."
            : "Our growth team will WhatsApp you within 24 hours to scope your account."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" placeholder="Your full name" />
        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="you@brand.com" />
        {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="whatsapp">WhatsApp Number</Label>
        <Input id="whatsapp" name="whatsapp" placeholder="+20 1XX XXX XXXX" />
        {errors.whatsapp && <p className="text-xs text-destructive">{errors.whatsapp}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="brand">Brand / Store Name (optional)</Label>
        <Input id="brand" name="brand" placeholder="Your Shopify store" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="netSales">Net Sales — Last 30 Days (EGP)</Label>
        <Input id="netSales" name="netSales" placeholder="e.g. 500000" />
        {errors.netSales && <p className="text-xs text-destructive">{errors.netSales}</p>}
      </div>

      {variant === "book" && (
        <div className="rounded-xl border border-primary/40 bg-primary/10 p-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Consultation Fee</span>
            <span className="font-display text-2xl font-bold text-primary">2,000 EGP</span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            One-time fee. 60-minute strategy session with a senior media buyer. Fully refunded if we
            decide to work together.
          </p>
        </div>
      )}

      <Button type="submit" variant="hero" size="lg" className="w-full">
        {variant === "book" ? "Book My Consultation →" : "Start My Growth Plan →"}
      </Button>
    </form>
  );
}
