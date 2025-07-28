import { HomepageSections } from "@/constants/homepage-sections";

export const navigationLinks = [
  { href: `/#${HomepageSections.HERO}`, label: "Inicio" },
  { label: "Servicios", href: `/#${HomepageSections.SERVICES}` },
  {
    label: "Características",
    submenu: true,
    type: "description",
    items: [
      {
        href: `/#${HomepageSections.TESTIMONIALS}`,
        label: "Testimonios",
        description: "Descubre lo que dicen nuestros clientes.",
      },
      {
        href: "/health-check",
        label: "Chequeo de Salud",
        description:
          "Obtén una evaluación integral del estado de tu dispositivo.",
      },
    ],
  },
  // {
  //   label: "Pricing",
  //   submenu: true,
  //   type: "simple",
  //   items: [
  //     { href: "#", label: "Product A" },
  //     { href: "#", label: "Product B" },
  //     { href: "#", label: "Product C" },
  //     { href: "#", label: "Product D" },
  //   ],
  // },
  { label: "Contacto", href: "/contact" },
  { label: "Precios", href: "/pricing" },
  // {
  //   label: "aboutLink",
  //   href: "/about",
  //   submenu: true,
  //   type: "icon",
  //   items: [
  //     { href: "#", label: "Getting Started", icon: "BookOpenIcon" },
  //     { href: "#", label: "Tutorials", icon: "LifeBuoyIcon" },
  //     { href: "#", label: "About Us", icon: "InfoIcon" },
  //   ],
  // },
];
