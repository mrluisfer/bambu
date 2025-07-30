"use client";

import { HomePageTitle } from "../title";
import { HowWeWorkTimeline } from "./how-we-work-timeline";
import { HowWeWorkFlex } from "./how-we-work-flex";

export type Steps = {
  title: string;
  description: string;
  timelineContent: string;
  date: string;
};

const steps = [
  {
    title: "Contáctanos",
    description:
      "Comunícate por teléfono, correo o nuestro formulario en línea. Respondemos en menos de 2 horas en días hábiles.",
    timelineContent:
      "Consejo: Ten a la mano los detalles de tu dispositivo (marca, modelo, síntomas). ¡Cuanta más información, más rápido podremos ayudarte!",
    date: "Hoy",
  },
  {
    title: "Diagnóstico",
    description:
      "Evaluamos tu dispositivo y te damos un diagnóstico claro, con precios transparentes desde el inicio.",
    timelineContent:
      "¿Qué hacemos?: Nuestro equipo realiza pruebas y busca problemas ocultos que tal vez no hayas notado.",
    date: "Mañana",
  },
  {
    title: "Atención Experta",
    description:
      "Nuestros técnicos certificados trabajan con precisión y usan refacciones de calidad.",
    timelineContent:
      "Recibe: Actualizaciones en tiempo real, limpieza opcional y optimización de rendimiento, sin costo extra.",
    date: "Próxima semana",
  },
  {
    title: "Garantía de Calidad",
    description:
      "Cada reparación incluye 90 días de garantía y soporte continuo para tu tranquilidad.",
    timelineContent:
      "Extra: Acceso a nuestra línea de soporte prioritario y recordatorios para mantenimiento preventivo.",
    date: "Confía en nosotros",
  },
];

export function HowWeWorkSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(135deg, var(--color-brand-50), var(--color-accent-50) 60%, #fff 100%)",
      }}
    >
      <div className="container mx-auto">
        <HomePageTitle
          title={"¿Cómo trabajamos?"}
          description={
            "Un proceso simple y transparente, diseñado para tu comodidad."
          }
        />

        <div className="hidden xl:block">
          <HowWeWorkTimeline steps={steps} />
        </div>
        <div className="block xl:hidden">
          <HowWeWorkFlex steps={steps} />
        </div>
      </div>
    </section>
  );
}
