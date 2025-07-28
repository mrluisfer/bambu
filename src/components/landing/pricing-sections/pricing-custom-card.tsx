import { MagicCard } from "@/components/magicui/magic-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { motion } from "motion/react";
import Link from "next/link";

export const PricingCustomCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className="bg-gradient-to-b from-white via-brand-50 to-brand-100 hover:shadow-xl transition-all duration-300 mx-auto p-0 max-w-md w-full shadow-none border-none">
        <MagicCard
          className="py-4"
          gradientColor={"var(--color-brand-100)"}
          gradientFrom="var(--color-brand-200)"
          gradientTo="var(--color-brand-300)"
        >
          <CardHeader className="py-2">
            <h2 className="text-lg font-semibold">Proyecto Personalizado</h2>
            <CardDescription>
              <p className="text-sm text-muted-foreground">
                ¿Necesitas algo diferente? Podemos trabajar juntos en una
                solución perfecta para tu negocio, exactamente como la imaginas.
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <p>Algunas características que incluye:</p>
            <ul className="space-y-4 pt-2 pl-1 text-sm text-muted-foreground">
              <li>Funcionalidades avanzadas a tu medida</li>
              <li>Integración con tus herramientas favoritas</li>
              <li>Automatización, dashboards, ecommerce y más</li>
              <li>Asesoría personalizada durante el proceso</li>
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-4 py-2">
            <Button asChild size="lg" variant="default" className="w-full">
              <Link href="/contact">
                Solicita una cotización y recibe una propuesta
              </Link>
            </Button>
          </CardFooter>
        </MagicCard>
      </Card>
    </motion.div>
  );
};
