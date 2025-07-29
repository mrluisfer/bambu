import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { ContactForm } from "@/components/forms/contact-form";
import { Footer } from "@/components/landing/homepage-sections/footer";
import { LandingLayout } from "@/components/landing/landing-layout";

export const metadata: Metadata = {
  title: "Contact Us - Get Expert Tech Support",
  description:
    "Get in touch with Bambú for professional computer and device maintenance. Request a service or ask us anything - we respond within 2 hours.",
};

export default function ContactPage() {
  return (
    <LandingLayout withFooter>
      <ContactForm />
    </LandingLayout>
  );
}
