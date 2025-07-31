"use client";

import { motion } from "motion/react";
import React from "react";
import { InfoList } from "./list";

export const ContactInfo = () => {
  return (
    <motion.div
      className="lg:col-span-1"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 my-6">
            Contáctanos de manera rápida
          </h3>
          <p className="text-slate-500 hover:text-slate-700 transition leading-relaxed">
            ¿Listo para darle a tu tecnología el cuidado que se merece? Estamos
            aquí para ayudar con cualquier pregunta o necesidad de servicio.
          </p>
        </div>
        <InfoList />
      </div>
    </motion.div>
  );
};
