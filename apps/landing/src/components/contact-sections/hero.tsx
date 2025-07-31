"use client";
import { motion } from "motion/react";
import { IconContainer } from "../icon-container";
import { MessageSquareCode } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};
export const ContactHero = () => {
  return (
    <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <IconContainer>
            <MessageSquareCode className="size-10 lg:size-20 text-white" />
          </IconContainer>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
            Contacta al equipo de Bambú
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-slate-600 mb-6 leading-relaxed"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          ¿Tienes un problema o consulta?{" "}
          <HighlightedText>Estamos aquí para ayudarte</HighlightedText>.
          Completa el formulario y{" "}
          <HighlightedText>
            nos pondremos en contacto contigo lo más rápido posible.
          </HighlightedText>
        </motion.p>

        <motion.p
          className="text-lg text-slate-500 max-w-2xl mx-auto"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          Cuéntanos qué pasa y te responderemos con una solución. Las{" "}
          <HighlightedText>consultas</HighlightedText> se responden en el mismo
          día, y son <HighlightedText>completamente gratuitas</HighlightedText>.
        </motion.p>
      </div>
    </section>
  );
};

function HighlightedText({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-brand-500 hover:text-brand-600 transition font-semibold">
      {children}
    </span>
  );
}
