import type { Metadata } from "next";
import { TechHealthCheck } from "@/components/features/tech-health-check";
import { LandingLayout } from "@/components/landing-layout";

export const metadata: Metadata = {
  title: "Tech Health Check - Free Device Diagnostic",
  description:
    "Get a quick assessment of your device's health with our interactive Tech Health Check. Takes less than 2 minutes and provides personalized recommendations.",
};

export default function HealthCheckPage() {
  return (
    <LandingLayout withFooter>
      <TechHealthCheck />
    </LandingLayout>
  );
}
