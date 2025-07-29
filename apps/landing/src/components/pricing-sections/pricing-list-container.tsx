import { AnimatePresence, motion } from "motion/react";
import { ReactNode } from "react";

export const PricingListContainer = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-6"
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
      <AnimatePresence>{children}</AnimatePresence>
    </motion.div>
  );
};
