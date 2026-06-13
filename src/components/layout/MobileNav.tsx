"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav, secondaryNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  className?: string;
}

export function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while panel is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const allItems = [...mainNav, ...secondaryNav];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "btn-icon text-foreground/60 hover:text-foreground",
          "transition-colors duration-200",
          className
        )}
        aria-label="Abrir menú"
        aria-expanded={open}
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={cn(
                "fixed inset-y-0 right-0 z-50",
                "w-full max-w-sm flex flex-col",
                "bg-background border-l border-border shadow-2xl"
              )}
              role="dialog"
              aria-modal
              aria-label="Menú de navegación"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 h-16 md:h-20 border-b border-border shrink-0">
                <Link
                  href="/"
                  className="font-heading text-base font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Nuestra Gran Aventura
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="btn-icon text-foreground/60 hover:text-foreground"
                  aria-label="Cerrar menú"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links */}
              <nav
                className="flex flex-col flex-1 px-4 py-8 overflow-y-auto"
                aria-label="Navegación móvil"
              >
                {allItems.map((item, i) => {
                  const active = pathname.startsWith(item.href);
                  const isFirstSecondary = i === mainNav.length;

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      {isFirstSecondary && (
                        <div className="my-4 border-t border-border" />
                      )}
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center py-3 px-3 rounded-xl",
                          "font-heading font-medium",
                          "transition-colors duration-200",
                          i < mainNav.length ? "text-2xl" : "text-lg",
                          active
                            ? "text-foreground bg-muted"
                            : "text-foreground/60 hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Emotional footer */}
              <div className="px-6 py-6 border-t border-border shrink-0">
                <p className="font-heading text-sm italic text-muted-foreground text-center leading-relaxed">
                  &ldquo;El mundo es un libro.<br />
                  Quien no viaja, solo lee una página.&rdquo;
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
