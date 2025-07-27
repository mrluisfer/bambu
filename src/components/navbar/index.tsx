"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollProgress } from "../magicui/scroll-progress";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavbarActions } from "./navbar-actions";
import { NavbarMobileMenu } from "./navbar-mobile-menu";
import { NavbarDesktopMenu } from "./navbar-desktop-menu";
import { NavbarLogo } from "./navbar-logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 xl:px-0 ${
          isScrolled ?
            "bg-white/95 backdrop-blur-md border-b border-brand-100 shadow-sm"
          : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-0 2xl:px-8 relative">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <NavbarLogo />
            <NavbarDesktopMenu />
            <NavbarActions />
            <NavbarMobileMenu />
          </div>
          {!isMobile && (
            <ScrollProgress className="top-[80px] from-[#22c55e] via-[#14b8a6] to-[#4ade80]" />
          )}
        </div>
      </motion.nav>
    </>
  );
}
