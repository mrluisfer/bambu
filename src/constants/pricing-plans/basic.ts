import {
  BotMessageSquare,
  ChartNoAxesCombined,
  ImageUpscale,
  LucideProps,
  MessageCircleMore,
  MonitorSmartphone,
  Rocket,
  Scroll,
  Undo2,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type PricingPlan = {
  title: string;
  price: number;
  description: string;
  features: Array<{
    label: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  }>;
};
export const basicPricingPlans: {
  basic: PricingPlan;
  basicWithSocialMedia: PricingPlan;
  basicWithAutomation: PricingPlan;
} = {
  basic: {
    title: "Landing Básica",
    price: 200,
    description: "Ideal para proyectos pequeños y medianos.",
    features: [
      {
        label: "1 Landing Page",
        icon: Scroll,
      },
      {
        label: "Diseño Responsivo (PC, Tablet, Móvil)",
        icon: MonitorSmartphone,
      },
      {
        label: "Optimización de Imágenes",
        icon: ImageUpscale,
      },
      {
        label: "Empaquetado y Deployment incluido",
        icon: Rocket,
      },
    ],
  },
  basicWithSocialMedia: {
    title: "Landing Básica con Redes Sociales",
    price: 350,
    description:
      "Incluye integración con redes sociales como WhatsApp, Facebook e Instagram.",
    features: [
      { label: "Incluye los beneficios de la Landing Básica", icon: Undo2 },
      {
        label: "Botón de WhatsApp, Facebook e Instagram",
        icon: MessageCircleMore,
      },
      {
        label: "SEO Básico para posicionamiento con Google Analytics 4",
        icon: ChartNoAxesCombined,
      },
      { label: "Creación de Sitemap y Robots.txt", icon: BotMessageSquare },
    ],
  },
  basicWithAutomation: {
    title: "Landing Básica con Automatización",
    price: 450,
    description:
      "Incluye integración con herramientas de terceros asi como automatización y seguimiento.",
    features: [
      { label: "Incluye todos los beneficios de la anterior", icon: Undo2 },
      {
        label: "Automatización de correos electrónicos",
        icon: MessageCircleMore,
      },
      {
        label: "Integración con herramientas de terceros.",
        icon: MonitorSmartphone,
      },
      {
        label: "Control de versiones y CI/CD",
        icon: Rocket,
      },
      {
        label: "Seguimiento de analíticas con Google Analytics 4",
        icon: ChartNoAxesCombined,
      },
      { label: "Creación de Sitemap y Robots.txt", icon: BotMessageSquare },
    ],
  },
};

export const basicPricingPlansArray = Object.values(basicPricingPlans);
export const basicPricingPlansKeys = Object.keys(basicPricingPlans);
