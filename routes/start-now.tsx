import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { Check, ArrowLeft, CornerDownLeft, Loader2 } from "lucide-react";

export const Route = createFileRoute("/start-now")({
  head: () => ({
    meta: [
      { title: "Apply Now — Impact Systems" },
      {
        name: "description",
        content:
          "Apply to work with Impact Systems. Meta Ads, TikTok Ads, and Shopify CRO for serious ecommerce brands.",
      },
    ],
    links: [{ rel: "canonical", href: "/start-now" }],
  }),
  component: ApplyPage,
});

type Step =
  | {
      key: string;
      type: "text";
      question: string;
      arabic: string;
      placeholder: string;
      inputType?: string;
      validate?: (v: string) => string | null;
    }
  | { key: string; type: "choice"; question: string; arabic: string; options: string[] };

const STEPS: Step[] = [
  {
    key: "brandName",
    type: "text",
    question: "What's your brand name or Instagram username?",
    arabic: "ما اسم البراند أو حسابك على إنستجرام؟",
    placeholder: "Brand name or @yourbrand",
  },
  {
    key: "brandURL",
    type: "text",
    question: "What's your brand URL?",
    arabic: "ما هو رابط موقع البراند؟",
    placeholder: "https://yourbrand.com",
  },
  {
    key: "phoneNumber",
    type: "text",
    question: "Your phone number",
    arabic: "رقم هاتفك",
    placeholder: "+20 / +966 / +971...",
    inputType: "tel",
    validate: (v) => {
      const digits = v.replace(/\D/g, "");
      if (digits.length < 10) return "Phone number must contain at least 10 digits.";
      return null;
    },
  },
  {
    key: "fullName",
    type: "text",
    question: "Contact person name",
    arabic: "اسم الشخص المسؤول",
    placeholder: "Your full name...",
  },
  {
    key: "email",
    type: "text",
    question: "Your email address",
    arabic: "بريدك الإلكتروني",
    placeholder: "name@example.com",
    inputType: "email",
    validate: (v) => {
      if (!v.includes("@")) return "Email must contain '@'.";
      return null;
    },
  },
  {
    key: "currency",
    type: "choice",
    question: "Which currency does your business use?",
    arabic: "ما العملة التي يستخدمها عملك؟",
    options: ["EGP", "SAR", "AED", "USD"],
  },
  {
    key: "monthlyRevenue",
    type: "choice",
    question: "Your average monthly revenue",
    arabic: "متوسط إيرادك الشهري",
    options: [
      "Under 200k EGP",
      "200k–500k",
      "500k–1M",
      "1M–2M",
      "2M–5M",
      "5M+",
    ],
  },
  {
    key: "advertisingBudget",
    type: "choice",
    question: "Monthly advertising budget",
    arabic: "ميزانية الإعلانات الشهرية",
    options: ["Under 30k", "30k–100k", "100k–300k", "300k+"],
  },
  {
    key: "serviceInterested",
    type: "choice",
    question: "What service are you interested in?",
    arabic: "ما الخدمة التي تهتم بها؟",
    options: ["Media Buying and Full Customized Growth System"],
  },
];

const FORM_ENDPOINT = "https://formsubmit.co/ajax/elnaggarmalek9@gmail.com";

function letter(i: number) {
  return String.fromCharCode(65 + i);
}

function ApplyPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [textValue, setTextValue] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const current = STEPS[stepIndex];
  const isLast = stepIndex === STEPS.length - 1;

  useEffect(() => {
    if (!current) return;
    setError(null);
    if (current.type === "text") setTextValue(answers[current.key] ?? "");
    else setSelected(answers[current.key] ?? null);
  }, [stepIndex, current, answers]);

  const canAdvance =
    current?.type === "text" ? textValue.trim().length > 0 : selected !== null;

  const submitForm = async (data: Record<string, string>) => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone(true);
      setAnswers({});
      setStepIndex(0);
      setTextValue("");
      setSelected(null);
    } catch {
      setSubmitError("Something went wrong, please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const submit = () => {
    if (!current || !canAdvance) return;
    const value = current.type === "text" ? textValue.trim() : selected!;

    if (current.type === "text" && current.validate) {
      const err = current.validate(value);
      if (err) {
        setError(err);
        return;
      }
    }

    const next = { ...answers, [current.key]: value };
    setAnswers(next);
    if (isLast) {
      void submitForm(next);
    } else {
      setStepIndex((i) => i + 1);
    }
  };

  const back = () => {
    if (stepIndex === 0) return;
    setStepIndex((i) => i - 1);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && canAdvance) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Impact Systems" className="h-10 w-auto sm:h-12" />
        </Link>
        {!done && (
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="hidden sm:inline">
              {stepIndex + 1} of {STEPS.length}
            </span>
            <div className="h-1.5 w-32 overflow-hidden rounded-full bg-card sm:w-48">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${((stepIndex + (done ? 1 : 0)) / STEPS.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </header>

      <section className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-5 py-28 sm:px-8">
        {done ? (
          <ThankYou />
        ) : (
          <div key={stepIndex} className="animate-fade-up" style={{ animationDuration: "450ms" }}>
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                {stepIndex + 1}
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Step {stepIndex + 1} / {STEPS.length}
              </span>
            </div>

            <h1 className="text-balance text-3xl font-bold leading-tight sm:text-5xl">
              {current.question}
            </h1>
            <p dir="rtl" lang="ar" className="mt-3 text-right text-base text-muted-foreground sm:text-lg">
              {current.arabic}
            </p>

            <div className="mt-10">
              {current.type === "text" ? (
                <input
                  autoFocus
                  type={current.inputType ?? "text"}
                  value={textValue}
                  onChange={(e) => {
                    setTextValue(e.target.value);
                    if (error) setError(null);
                  }}
                  onKeyDown={onKey}
                  placeholder={current.placeholder}
                  className="w-full border-0 border-b-2 border-border bg-transparent pb-3 text-2xl font-medium text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none sm:text-3xl"
                />
              ) : (
                <div className="grid gap-3">
                  {current.options.map((opt, i) => {
                    const active = selected === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelected(opt)}
                        className={[
                          "group flex w-full items-center gap-4 rounded-2xl border bg-card px-4 py-4 text-left transition-all sm:px-5 sm:py-5",
                          active
                            ? "border-primary bg-primary/10 shadow-[0_10px_40px_-10px_oklch(0.43_0.11_263_/_0.6)]"
                            : "border-border hover:border-primary/60 hover:bg-card/80",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "grid h-9 w-9 shrink-0 place-items-center rounded-full border text-sm font-bold transition",
                            active
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-background text-muted-foreground group-hover:border-primary/60 group-hover:text-primary",
                          ].join(" ")}
                        >
                          {letter(i)}
                        </span>
                        <span className="text-base font-medium sm:text-lg">{opt}</span>
                        {active && <Check className="ml-auto h-5 w-5 text-primary" strokeWidth={3} />}
                      </button>
                    );
                  })}
                </div>
              )}
              {error && (
                <p className="mt-4 text-sm font-medium text-destructive">{error}</p>
              )}
              {submitError && (
                <p className="mt-4 text-sm font-medium text-destructive">{submitError}</p>
              )}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={submit}
                disabled={!canAdvance || submitting}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition hover:scale-[1.03] hover:shadow-[0_15px_50px_-10px_oklch(0.43_0.11_263_/_0.9)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-none sm:text-lg"
              >
                {submitting ? (
                  <>
                    Sending <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    OK <CornerDownLeft className="h-4 w-4" strokeWidth={2.5} />
                  </>
                )}
              </button>
              <span className="text-xs text-muted-foreground">
                press <kbd className="rounded border border-border bg-card px-1.5 py-0.5">Enter</kbd>
              </span>
              {stepIndex > 0 && (
                <button
                  type="button"
                  onClick={back}
                  className="ml-auto inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
              )}
            </div>
          </div>
        )}
      </section>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.43_0.11_263_/_0.2),transparent_60%)]" />
    </main>
  );
}

function ThankYou() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center text-center animate-fade-up">
      <div className="grid h-14 w-14 place-items-center rounded-full border border-primary/50 bg-primary/15 text-primary">
        <Check className="h-7 w-7" strokeWidth={3} />
      </div>
      <h1 className="mt-8 text-balance text-5xl font-bold leading-[0.95] sm:text-7xl">
        Thank <span className="gradient-text">You!</span>
      </h1>
      <p className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
        We will get back to you soon.
      </p>
    </div>
  );
}
