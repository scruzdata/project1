"use client";

import { motion } from "framer-motion";
import type { CruiseLine } from "@/types";
import { CruiseLineCard } from "./CruiseLineCard";

interface CruiseLineGridProps {
  cruiseLines: CruiseLine[];
}

export function CruiseLineGrid({ cruiseLines }: CruiseLineGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cruiseLines.map((cl, i) => (
        <motion.div
          key={cl.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.1,
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="h-full"
        >
          <CruiseLineCard cruiseLine={cl} />
        </motion.div>
      ))}
    </div>
  );
}
