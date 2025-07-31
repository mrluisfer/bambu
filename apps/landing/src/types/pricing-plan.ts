import { LucideIconType } from "./LucideIconType";

export type PricingPlanFeature = {
  label: string;
  icon: LucideIconType;
};

export type PricingPlan = {
  title: string;
  price: number;
  description: string;
  features: Array<PricingPlanFeature>;
};
