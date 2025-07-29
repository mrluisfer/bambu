"use client";
import { LandingLayout } from "@/components/landing/landing-layout";
import { PricingHero } from "@/components/landing/pricing-sections/hero";
import { PricingBanner } from "@/components/landing/pricing-sections/pricing-banner";
import { PricingList } from "@/components/landing/pricing-sections/pricing-list";

export default function ServicesPage() {
  return (
    <LandingLayout className="min-h-screen" withFooter>
      <PricingHero />
      <PricingList />
      <PricingBanner />
    </LandingLayout>
  );
}
