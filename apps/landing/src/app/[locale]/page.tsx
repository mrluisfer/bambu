import { HeroSection } from "@/components/homepage-sections/hero-section";
import { HowWeWorkSection } from "@/components/homepage-sections/how-we-work-section";
import { ServicesSection } from "@/components/homepage-sections/services-section";
import { TestimonialsSection } from "@/components/homepage-sections/testimonials-section";
import { CTASection } from "@/components/homepage-sections/cta-section";
import { LandingLayout } from "@/components/landing-layout";

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
