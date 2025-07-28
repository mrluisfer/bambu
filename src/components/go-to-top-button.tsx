"use client";
import { ChevronUp } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export const GoToTopButton = () => {
  return (
    <div className="hidden lg:block">
      <Button
        className="fixed bottom-4 right-4 bg-brand-500 text-white p-2 rounded-full shadow-lg active:bg-brand-400 transition-all opacity-50 hover:opacity-100 active:scale-95"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll al inicio"
        size="icon"
      >
        <ChevronUp />
      </Button>
    </div>
  );
};
