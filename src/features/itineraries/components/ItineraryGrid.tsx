"use client";

import { motion } from "framer-motion";
import type { Itinerary } from "@/types";
import { ItineraryCard } from "./ItineraryCard";

interface ItineraryGridProps {
  itineraries: Itinerary[];
}

export function ItineraryGrid({ itineraries }: ItineraryGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {itineraries.map((it, i) => (
        <motion.div
          key={it.id}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.12,
            duration: 0.55,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <ItineraryCard itinerary={it} />
        </motion.div>
      ))}
    </div>
  );
}
