"use client";
import { LandingLayout } from "@/components/landing-layout";
import { PricingHero } from "@/components/pricing-sections/hero";
import { PricingBanner } from "@/components/pricing-sections/pricing-banner";
import { PricingList } from "@/components/pricing-sections/pricing-list";

export default function ServicesPage() {
  return (
    <LandingLayout className="min-h-screen" withFooter>
      <PricingHero />
      <PricingList />
      <PricingBanner />
    </LandingLayout>
  );
}
