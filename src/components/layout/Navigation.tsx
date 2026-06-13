"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

export function Navigation({ className, onItemClick }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("items-center gap-0.5", className)}
      aria-label="Navegación principal"
    >
      {mainNav.map((item) => {
        const active = pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              "px-3 py-2 text-sm font-medium rounded-lg",
              "transition-colors duration-200",
              active
                ? "text-foreground bg-muted"
                : "text-foreground/60 hover:text-foreground hover:bg-muted/60"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
