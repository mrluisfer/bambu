import "@/app/polyfills"; // 👈 must run first
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Bambú - Flexible Tech Care for Everyone",
    template: "%s | Bambú Tech Care",
  },
  description:
    "Professional computer and device maintenance that grows with your needs. From quick fixes to comprehensive care plans, we keep your technology running smoothly.",
  keywords: [
    "computer repair",
    "device maintenance",
    "tech support",
    "laptop repair",
    "smartphone repair",
    "bambú",
    "bambu",
    "bambú tech care",
  ],
  authors: [{ name: "Bambú Tech Care", url: "https://bambu.vercel.app" }],
  creator: "Bambú Tech Care",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bambu.vercel.app",
    title: "Bambú - Flexible Tech Care for Everyone",
    description:
      "Professional computer and device maintenance that grows with your needs.",
    siteName: "Bambú Tech Care",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bambú Tech Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bambú - Flexible Tech Care for Everyone",
    description:
      "Professional computer and device maintenance that grows with your needs.",
    images: ["/og-image.png"],
    site: "@bambutech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "Next.js",
  applicationName: "Bambú Tech Care",
  icons: {
    icon: "/logo.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#41B883",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={inter.variable}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
