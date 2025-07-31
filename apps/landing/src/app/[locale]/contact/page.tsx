import type { Metadata } from "next";
import { LandingLayout } from "@/components/landing-layout";
import { ContactHero } from "@/components/contact-sections/hero";
import { ContactInfo } from "@/components/contact-sections/info";
import { ContactForm } from "@/components/contact-sections/form";

export const metadata: Metadata = {
  title: "Contact Us - Get Expert Tech Support",
  description:
    "Get in touch with Bambú for professional computer and device maintenance. Request a service or ask us anything - we respond within 2 hours.",
};

export default function ContactPage() {
  return (
    <LandingLayout
      withFooter
      className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-accent-50"
    >
      <ContactHero />
      <section className="pb-20 px-4 sm:px-6 lg:px-8 container mx-auto max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </LandingLayout>
  );
}
