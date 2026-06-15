"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Utensils,
  Building2,
  ShoppingBag,
  Footprints,
  Church,
  ShoppingBasket,
} from "lucide-react";
import type { DayPlan, DayPlanActivity } from "@/types";
import { ACTIVITY_CATEGORY_CONFIG } from "../cities.config";
import { cn } from "@/lib/utils";

function ActivityIcon({
  category,
  className,
}: {
  category: DayPlanActivity["category"];
  className?: string;
}) {
  const props = {
    className: className ?? "h-3.5 w-3.5",
    strokeWidth: 1.5 as number,
    "aria-hidden": true as const,
  };
  switch (category) {
    case "viewpoint":
      return <Eye {...props} />;
    case "food":
      return <Utensils {...props} />;
    case "museum":
      return <Building2 {...props} />;
    case "shopping":
      return <ShoppingBag {...props} />;
    case "walk":
      return <Footprints {...props} />;
    case "church":
      return <Church {...props} />;
    case "market":
      return <ShoppingBasket {...props} />;
  }
}

interface DayTimelineProps {
  dayPlan: DayPlan;
}

export function DayTimeline({ dayPlan }: DayTimelineProps) {
  return (
    <div role="list" aria-label="Actividades del día">
      {dayPlan.activities.map((activity, i) => {
        const cat = ACTIVITY_CATEGORY_CONFIG[activity.category];
        const isLast = i === dayPlan.activities.length - 1;

        return (
          <motion.div
            key={`${activity.time}-${i}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{
              delay: i * 0.08,
              duration: 0.45,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex gap-5"
            role="listitem"
          >
            {/* Time column + connector line */}
            <div className="flex flex-col items-center w-14 shrink-0">
              <span className="text-xs font-mono font-semibold text-accent tabular-nums pt-4">
                {activity.time}
              </span>
              <div className="flex flex-col items-center flex-1 mt-2">
                <div className="h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/15 shrink-0" />
                {!isLast && (
                  <div className="w-px flex-1 bg-border min-h-[48px] mt-1" aria-hidden />
                )}
              </div>
            </div>

            {/* Activity card */}
            <div className={cn("flex-1 pt-3", !isLast && "pb-6")}>
              <div className="card p-4 space-y-2.5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold leading-snug">
                    {activity.title}
                  </h3>
                  <span
                    className={cn(
                      "shrink-0 flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full",
                      cat.bg,
                      cat.color
                    )}
                  >
                    <ActivityIcon category={activity.category} />
                    {cat.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  ⏱ {activity.durationMinutes} min
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
