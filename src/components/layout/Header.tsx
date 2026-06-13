"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { Navigation } from "./Navigation";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "fixed inset-x-0 top-0 z-40",
        "transition-all duration-300 ease-premium",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-site">
        <div className="flex h-16 md:h-20 items-center justify-between gap-6">

          {/* Logo */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 shrink-0 transition-opacity duration-200 hover:opacity-75"
          >
            <Compass
              className="h-5 w-5 text-accent shrink-0"
              strokeWidth={1.5}
            />
            <span className="font-heading text-base md:text-lg font-semibold tracking-tight leading-none">
              Nuestra Gran Aventura
            </span>
          </Link>

          {/* Desktop nav — centered */}
          <Navigation className="hidden md:flex flex-1 justify-center" />

          {/* Actions */}
          <div className="flex items-center gap-1 shrink-0">
            <ThemeToggle />
            <MobileNav className="md:hidden" />
          </div>

        </div>
      </div>
    </motion.header>
  );
}
