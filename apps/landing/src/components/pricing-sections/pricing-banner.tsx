"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export const PricingBanner = () => {
  return (
    <motion.div
      className="flex items-center justify-center flex-col text-center px-8 py-12 gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.h3
        className="text-3xl font-semibold"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.5 }}
      >
        ¿Aún no estás seguro?
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        Contáctanos y te ayudaremos a encontrar la mejor opción para tu
        proyecto.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.5 }}
      >
        <Button size="lg" asChild>
          <motion.button
            whileHover={{
              scale: 1.045,
              boxShadow: "0 4px 28px 0 rgba(34,197,94,0.13)",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/contact">Solicitar Asesoría</Link>
          </motion.button>
        </Button>
      </motion.div>
    </motion.div>
  );
};
