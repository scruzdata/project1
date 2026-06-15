"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Waves,
  Utensils,
  Eye,
  ShoppingBag,
  Church,
  Landmark,
} from "lucide-react";
import type { PointOfInterest } from "@/types";
import { POI_CATEGORY_CONFIG } from "../cities.config";
import { cn } from "@/lib/utils";

function PoiIcon({
  category,
}: {
  category: PointOfInterest["category"];
}) {
  const props = { className: "h-5 w-5", strokeWidth: 1.5 as number, "aria-hidden": true as const };
  switch (category) {
    case "landmark":  return <MapPin {...props} />;
    case "museum":    return <Building2 {...props} />;
    case "beach":     return <Waves {...props} />;
    case "food":      return <Utensils {...props} />;
    case "viewpoint": return <Eye {...props} />;
    case "market":    return <ShoppingBag {...props} />;
    case "church":    return <Church {...props} />;
    case "ruins":     return <Landmark {...props} />;
  }
}

interface PointsOfInterestSectionProps {
  pois: PointOfInterest[];
}

export function PointsOfInterestSection({ pois }: PointsOfInterestSectionProps) {
  // mustSee items first
  const sorted = [
    ...pois.filter((p) => p.mustSee),
    ...pois.filter((p) => !p.mustSee),
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {sorted.map((poi, i) => {
        const cat = POI_CATEGORY_CONFIG[poi.category];
        return (
          <motion.article
            key={poi.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{
              delay: i * 0.07,
              duration: 0.45,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="card p-5 flex gap-4"
          >
            {/* Category icon badge */}
            <div
              className={cn(
                "h-10 w-10 rounded-xl flex items-center justify-center shrink-0",
                cat.bg
              )}
              aria-hidden
            >
              <span className={cat.color}>
                <PoiIcon category={poi.category} />
              </span>
            </div>

            {/* Content */}
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold leading-snug">{poi.name}</h3>
                {poi.mustSee && (
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider bg-accent/15 text-accent px-2 py-0.5 rounded-full">
                    Imprescindible
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {poi.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>⏱ {poi.durationMinutes} min</span>
                <span className={cn("font-medium", cat.color)}>{cat.label}</span>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
