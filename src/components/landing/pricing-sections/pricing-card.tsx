import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PricingPlan } from "@/constants/pricing-plans/basic";
import { DollarSign } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export const PricingCard = ({ plan }: { plan: PricingPlan }) => (
  <motion.div
    key={plan.title}
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 20, scale: 0.95 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <Card className="rounded-3xl overflow-hidden shadow-brand-400 hover:shadow-2xl transition h-fit border-2 border-transparent hover:border-brand-600 max-w-[550px]">
      <CardHeader>
        <CardTitle>
          <p className="font-bold text-2xl">{plan.title}</p>
        </CardTitle>
        <CardDescription>
          <p className="text-lg">{plan.description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-black text-2xl flex items-baseline gap-1 text-neutral-400">
          <DollarSign />
          <span className="text-brand-500 text-5xl hover:text-brand-400 transition">
            {plan.price}
          </span>
          USD
        </p>
        <ul className="space-y-4 mt-6">
          {plan.features.map((feature) => (
            <li
              className="gap-x-4 flex items-start opacity-70 hover:opacity-100 transition"
              key={feature.label}
            >
              <feature.icon className="inline-block text-brand-600 size-6" />
              <span className="font-semibold pr-4">{feature.label}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild variant="default" size="lg">
          <Link href="/contact" className="w-full">
            ¡Lo quiero!
          </Link>
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);
