import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Platforms } from "@/components/site/Platforms";
import { WhyUs } from "@/components/site/WhyUs";
import { Results } from "@/components/site/Results";
import { CaseStudies } from "@/components/site/CaseStudies";
import { HowItWorks } from "@/components/site/HowItWorks";
import { FinalCTA, SiteFooter } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Impact Systems — Scale Ecommerce Brands Profitably with Meta & TikTok Ads" },
      {
        name: "description",
        content:
          "Performance marketing agency for ecommerce. We've generated +$1B in sales for 200+ DTC brands through Meta Ads, TikTok Ads, Snapchat Ads and Shopify CRO.",
      },
      { property: "og:title", content: "Impact Systems — Scale Ecommerce Profitably" },
      {
        property: "og:description",
        content: "+$1B in sales for 200+ ecom brands. Meta Ads, TikTok Ads, Shopify CRO.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <Platforms />
      <WhyUs />
      <CaseStudies />
      <Results />
      <HowItWorks />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}

