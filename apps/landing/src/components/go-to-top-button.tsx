"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const GoToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Check on mount (if already scrolled)
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="hidden lg:block fixed bottom-4 right-4 z-50"
        >
          <Button
            className="bg-brand-500 text-white p-2 rounded-full shadow-lg active:bg-brand-400 transition-all opacity-50 hover:opacity-100 active:scale-95"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            size="icon"
          >
            <ChevronUp />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
