import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type PricingPlanFeature = {
  label: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export type PricingPlan = {
  title: string;
  price: number;
  description: string;
  features: Array<PricingPlanFeature>;
};
