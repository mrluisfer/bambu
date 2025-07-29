import {
  BotMessageSquare,
  ChartNoAxesCombined,
  Database,
  FileJson2,
  ImageUpscale,
  LayoutDashboard,
  Layers3,
  Link2,
  Mail,
  Rocket,
  Scroll,
  ServerCog,
  ShieldCheck,
  Undo2,
  UserCircle2,
} from "lucide-react";
import { PricingPlan } from "@/types/pricing-plan";

export const complexPricingPlans: {
  custom: PricingPlan;
  withIntegrations: PricingPlan;
  ecommerce: PricingPlan;
} = {
  custom: {
    title: "Landing Compleja Personalizada",
    price: 900,
    description:
      "Para marcas o negocios que requieren funcionalidades a medida, integración de sistemas y diseño único.",
    features: [
      { label: "Diseño UI/UX personalizado", icon: LayoutDashboard },
      { label: "Hasta 5 secciones personalizadas", icon: Layers3 },
      { label: "Formulario de contacto avanzado con validaciones", icon: Mail },
      {
        label: "Integración de Google Maps, Calendly, o enlaces externos",
        icon: Link2,
      },
      { label: "Animaciones avanzadas y microinteracciones", icon: Rocket },
      { label: "Optimización SEO avanzada", icon: ChartNoAxesCombined },
      { label: "Hosting, empaquetado y deployment incluido", icon: ServerCog },
      {
        label: "Soporte prioritario y 2 semanas de mantenimiento",
        icon: ShieldCheck,
      },
    ],
  },
  withIntegrations: {
    title: "Landing Compleja con Integraciones",
    price: 1200,
    description:
      "Pensada para empresas que necesitan automatización, bases de datos y conexión con APIs o CRM.",
    features: [
      {
        label: "Todos los beneficios de la Landing Compleja Personalizada",
        icon: Undo2,
      },
      { label: "Integración con CRM (HubSpot, Zoho, etc.)", icon: Database },
      {
        label: "Automatización de marketing y newsletter",
        icon: BotMessageSquare,
      },
      { label: "Formularios con almacenamiento de datos", icon: FileJson2 },
      { label: "Chatbot o atención en línea", icon: UserCircle2 },
      { label: "Panel de administración básico", icon: LayoutDashboard },
      {
        label: "Integración de analítica y heatmaps",
        icon: ChartNoAxesCombined,
      },
      { label: "Soporte extendido 1 mes", icon: ShieldCheck },
    ],
  },
  ecommerce: {
    title: "Landing Ecommerce",
    price: 2000,
    description:
      "Convierte tu landing en una tienda. Ideal para ventas de productos digitales o físicos con integración de pagos.",
    features: [
      {
        label: "Todos los beneficios anteriores",
        icon: Undo2,
      },
      { label: "Catálogo de productos hasta 20 ítems", icon: Scroll },
      {
        label: "Carrito de compras e integración de pagos",
        icon: Rocket,
      },
      { label: "Gestión básica de usuarios", icon: UserCircle2 },
      { label: "Reportes de ventas y dashboard", icon: LayoutDashboard },
      { label: "Integración con servicios de envío", icon: ServerCog },
      { label: "SSL y seguridad avanzada", icon: ShieldCheck },
      { label: "Soporte premium 2 meses", icon: ShieldCheck },
    ],
  },
};

export const complexPricingPlansArray = Object.values(complexPricingPlans);
export const complexPricingPlansKeys = Object.keys(complexPricingPlans);
