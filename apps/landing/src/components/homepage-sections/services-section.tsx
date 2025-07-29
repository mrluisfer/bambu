"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Laptop,
  Monitor,
  Clock,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import { HomepageSections } from "@/constants/homepage-sections";
import { HomePageTitle } from "./title";
import { TryHealthCheckButton } from "./try-health-check-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const icons = [Smartphone, Laptop, Monitor, Clock, Users, Shield];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    title: "Dispositivos Móviles",
    description:
      "Reparación de pantallas, cambio de baterías y solución de problemas de software para todas las marcas de smartphones y tabletas.",
    features: [
      {
        title: "Reparación de pantalla",
        content:
          "Arreglamos pantallas rotas, dañadas o que no responden en cualquier marca o modelo.",
      },
      {
        title: "Cambio de batería",
        content:
          "Prolonga la vida útil de tu equipo con reemplazo rápido de batería y piezas de calidad.",
      },
      {
        title: "Corrección de software",
        content:
          "Solucionamos problemas de software, bloqueos, virus o actualizaciones fallidas.",
      },
      {
        title: "Recuperación por daño de agua",
        content:
          "Rescatamos equipos afectados por líquidos con técnicas avanzadas de secado y reparación.",
      },
    ],
  },
  {
    title: "Laptops y Notebooks",
    description:
      "Mejoras de hardware, eliminación de virus, optimización y mantenimiento completo del sistema.",
    features: [
      {
        title: "Optimización de rendimiento",
        content:
          "Acelera laptops lentas optimizando recursos y limpiando software innecesario.",
      },
      {
        title: "Eliminación de virus",
        content: "Eliminamos virus y protegemos tu equipo de futuras amenazas.",
      },
      {
        title: "Actualización de hardware",
        content:
          "Mejora tu laptop agregando más RAM, almacenamiento u otros componentes.",
      },
      {
        title: "Limpieza de sistema",
        content:
          "Elimina archivos basura y mejora la estabilidad a largo plazo.",
      },
    ],
  },
  {
    title: "Computadoras de Escritorio",
    description:
      "Armado a la medida, mejoras de componentes, optimización y mantenimiento preventivo.",
    features: [
      {
        title: "Armado personalizado",
        content:
          "Ensamblamos la PC perfecta para tu trabajo o juegos, a tu medida.",
      },
      {
        title: "Mejoras de componentes",
        content:
          "Actualiza tu tarjeta de video, procesador y más para mayor potencia.",
      },
      {
        title: "Optimización del sistema",
        content:
          "Haz que tu computadora funcione como nueva con configuración y actualizaciones.",
      },
      {
        title: "Mantenimiento preventivo",
        content:
          "Revisiones y limpiezas regulares para evitar futuros problemas.",
      },
    ],
  },
  {
    title: "Entrega Rápida",
    description:
      "La mayoría de las reparaciones se completan en 24-48 horas. Servicio de emergencia para necesidades críticas.",
    features: [
      {
        title: "Servicio 24-48 horas",
        content:
          "La mayoría de las reparaciones se entregan en uno o dos días, ¡vuelve rápido a tus actividades!",
      },
      {
        title: "Reparaciones de emergencia",
        content:
          "Servicio prioritario para casos urgentes: recupera tu tecnología lo antes posible.",
      },
      {
        title: "Opciones exprés",
        content:
          "Contrata nuestro servicio exprés para entregas el mismo día si es posible.",
      },
      {
        title: "Actualizaciones de estado",
        content:
          "Sigue tu reparación en tiempo real y recibe notificaciones inmediatas.",
      },
    ],
  },
  {
    title: "Soluciones para Negocios",
    description:
      "Gestión de dispositivos, contratos de mantenimiento y soporte dedicado para pequeñas y medianas empresas.",
    features: [
      {
        title: "Descuentos por volumen",
        content: "Ahorra más al reparar o mantener varios equipos a la vez.",
      },
      {
        title: "Contratos de mantenimiento",
        content:
          "Tu empresa siempre operando con revisiones y soporte programados.",
      },
      {
        title: "Soporte prioritario",
        content:
          "Línea exclusiva para clientes empresariales: atención sin esperas.",
      },
      {
        title: "Servicio en sitio",
        content:
          "Vamos a tu oficina o negocio para resolver problemas ahí mismo.",
      },
    ],
  },
  {
    title: "Protección de Datos",
    description:
      "Manejo seguro de datos, respaldo y recuperación para mantener tu información protegida.",
    features: [
      {
        title: "Respaldo de datos",
        content:
          "Configura respaldos automáticos y protege tus archivos contra pérdidas o robos.",
      },
      {
        title: "Recuperación de información",
        content:
          "Recupera archivos borrados, perdidos o dañados de cualquier dispositivo.",
      },
      {
        title: "Auditorías de seguridad",
        content:
          "Analizamos la seguridad de tu equipo y te orientamos para prevenir riesgos.",
      },
      {
        title: "Protección de privacidad",
        content:
          "Tus datos siempre son tratados con máxima confidencialidad y seguridad.",
      },
    ],
  },
];

export function ServicesSection() {
  return (
    <section
      id={HomepageSections.SERVICES}
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <HomePageTitle
          description={
            "Desde smartphones hasta servidores, atendemos todas tus necesidades tecnológicas con experiencia y dedicación."
          }
        >
          Servicio Integral de Cuidado Tecnológico
        </HomePageTitle>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="min-h-[440px] max-h-[540px] h-fit border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-brand-50/30 rounded-3xl group hover:scale-105 flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-accent-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    <Accordion type="single" collapsible className="w-full">
                      {service.features.map((feature, featureId) => (
                        <AccordionItem
                          value={`${index}-${featureId}`}
                          key={`${index}-${featureId}`}
                          className="py-2"
                        >
                          <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline">
                            <span className="flex items-center gap-3">
                              <div
                                className="w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0"
                                aria-hidden="true"
                              />
                              <span>{feature.title}</span>
                            </span>
                          </AccordionTrigger>
                          <AccordionContent
                            className="text-muted-foreground ps-7 pb-2"
                            style={{ maxHeight: "7.5rem", overflowY: "auto" }} // ~120px
                          >
                            {feature.content}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center space-x-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-brand-500 to-accent-600 hover:from-brand-600 hover:to-accent-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            Ver todos los servicios
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <TryHealthCheckButton label={"Prueba nuestro Chequeo de Salud"} />
        </motion.div>
      </div>
    </section>
  );
}
