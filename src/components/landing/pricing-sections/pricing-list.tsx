"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PricingCard } from "./pricing-card";
import { basicPricingPlansArray } from "../../../constants/pricing-plans/basic";
import { motion, AnimatePresence } from "motion/react";

enum PricingTabsId {
  Basic = "basic",
  Complex = "complex",
}

export const PricingList = () => {
  return (
    <div className="bg-gradient-to-b from-brand-50 to-brand-200 px-12 py-18">
      <Tabs defaultValue={PricingTabsId.Basic}>
        <TabsList className="mx-auto" asChild>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TabsTrigger value={PricingTabsId.Basic}>
              Landing Pages Básicas
            </TabsTrigger>
            <TabsTrigger value={PricingTabsId.Complex}>
              Landing Pages Complejas
            </TabsTrigger>
          </motion.div>
        </TabsList>
        <TabsContent value={PricingTabsId.Basic}>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            <AnimatePresence>
              {basicPricingPlansArray.map((plan) => (
                <PricingCard key={plan.title} plan={plan} />
              ))}
            </AnimatePresence>
          </motion.div>
        </TabsContent>
        <TabsContent value={PricingTabsId.Complex} className="px-16">
          <motion.div
            className="flex flex-col items-center justify-center py-24 min-h-[220px]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-xl text-muted-foreground">
              Próximamente más opciones avanzadas 🚀
            </span>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
