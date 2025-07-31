import { Clock, LucideIcon, Mail, MapPin, Phone } from "lucide-react";
import { InfoItem } from "./item";

export interface InfoDataItem {
  Icon: LucideIcon;
  title: string;
  subtitle?: string;
  details: string | React.ReactNode;
}

export const contactInfo: InfoDataItem[] = [
  {
    Icon: Phone,
    title: "Teléfono",
    subtitle: "(555) 123-TECH",
    details:
      "Cuidamos mucho el tema del spam, así que no te preocupes, podemos devolverte la llamada si no podemos atenderte en ese momento.",
  },
  {
    Icon: Mail,
    title: "Correo electrónico",
    subtitle: "hello@bambu.tech",
    details: "Respondemos en menos de 2 horas.",
  },
  {
    Icon: MapPin,
    title: "Ubicación",
    subtitle: "Michoacán, México",
    details:
      "Podemos ayudarte con el envío de los equipos o damos el soporte remoto.",
  },
  {
    Icon: Clock,
    title: "Disponibilidad",
    subtitle: "",
    details:
      "Nuestro equipo está disponible para consultas y servicios de lunes a viernes, de 9 AM a 6 PM.",
  },
];

export function InfoList() {
  return (
    <div className="space-y-6">
      {contactInfo.map((item, i) => (
        <InfoItem
          key={item.title + i}
          Icon={item.Icon}
          title={item.title}
          subtitle={item.subtitle}
        >
          {item.details}
        </InfoItem>
      ))}
    </div>
  );
}
