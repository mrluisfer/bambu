import { HeroSection } from "@/components/landing/homepage-sections/hero-section";
import { HowWeWorkSection } from "@/components/landing/homepage-sections/how-we-work-section";
import { ServicesSection } from "@/components/landing/homepage-sections/services-section";
import { TestimonialsSection } from "@/components/landing/homepage-sections/testimonials-section";
import { CTASection } from "@/components/landing/homepage-sections/cta-section";
import { LandingLayout } from "@/components/landing/landing-layout";

export default function HomePage() {
  return (
    <LandingLayout withFooter>
      <HeroSection />
      <HowWeWorkSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </LandingLayout>
  );
}
