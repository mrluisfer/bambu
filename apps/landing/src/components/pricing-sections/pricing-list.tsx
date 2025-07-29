"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PricingCard } from "./pricing-card";
import { motion, AnimatePresence } from "motion/react";
import { ReactNode } from "react";
import { complexPricingPlansArray } from "@/constants/pricing-plans/complex";
import { Pointer } from "@/components/magicui/pointer";
import { Card } from "@/components/ui/card";
import { PricingCustomCard } from "./pricing-custom-card";
import { PricingListContainer } from "./pricing-list-container";
import { basicPricingPlansArray } from "@/constants/pricing-plans/basic";

enum PricingTabsId {
  Basic = "basic",
  Complex = "complex",
  Custom = "custom",
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
            <TabsTrigger value={PricingTabsId.Basic}>Básicas</TabsTrigger>
            <TabsTrigger value={PricingTabsId.Complex}>Complejas</TabsTrigger>
            <TabsTrigger value={PricingTabsId.Custom}>
              Personalizadas
            </TabsTrigger>
          </motion.div>
        </TabsList>
        <TabsContent value={PricingTabsId.Basic}>
          <PricingListContainer>
            {basicPricingPlansArray.map((plan) => (
              <PricingCard key={plan.title} plan={plan} />
            ))}
          </PricingListContainer>
        </TabsContent>
        <TabsContent value={PricingTabsId.Complex} className="px-16">
          <PricingListContainer>
            {complexPricingPlansArray.map((plan) => (
              <PricingCard key={plan.title} plan={plan} />
            ))}
          </PricingListContainer>
        </TabsContent>
        <TabsContent value={PricingTabsId.Custom}>
          <PricingCustomCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};
