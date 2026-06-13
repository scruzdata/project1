"use client";

import { motion } from "framer-motion";
import type { CruiseLine } from "@/types";
import { scoreFields } from "../cruise-lines.config";
import { cn } from "@/lib/utils";

// One accent-adjacent color per slot; works for up to 5 cruise lines
const BAR_COLORS = [
  "bg-accent",
  "bg-navy-400",
  "bg-navy-300",
  "bg-gold-300",
  "bg-navy-500",
] as const;

interface CruiseLineComparisonProps {
  cruiseLines: CruiseLine[];
}

export function CruiseLineComparison({ cruiseLines }: CruiseLineComparisonProps) {
  // Skip the overall score row — the header already shows it prominently
  const fields = scoreFields.filter((f) => f.key !== "overallScore");
  const multi = cruiseLines.length > 1;

  return (
    <div className="space-y-8">
      {/* Legend — only shown when comparing multiple lines */}
      {multi && (
        <div className="flex flex-wrap gap-5">
          {cruiseLines.map((cl, i) => (
            <div key={cl.id} className="flex items-center gap-2">
              <div className={cn("h-3 w-3 rounded-full shrink-0", BAR_COLORS[i % BAR_COLORS.length])} />
              <span className="text-sm font-medium">{cl.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Metric rows */}
      <div className="space-y-2">
        {fields.map(({ key, label, icon: Icon }, metricIdx) => (
          <div key={key} className="rounded-xl border border-border bg-muted/30 px-5 py-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center rounded-lg bg-accent/10 p-1.5 shrink-0">
                <Icon className="h-4 w-4 text-accent" strokeWidth={1.75} />
              </span>
              <p className="text-sm font-semibold text-foreground">{label}</p>
            </div>

            <div className={cn("space-y-2", !multi && "space-y-1.5")}>
              {cruiseLines.map((cl, lineIdx) => {
                const score = cl[key];
                const pct = Math.min((score / 10) * 100, 100);

                return (
                  <div key={cl.id} className="flex items-center gap-3">
                    {multi && (
                      <span className="w-28 text-xs text-muted-foreground truncate shrink-0">
                        {cl.name}
                      </span>
                    )}

                    <div className="flex-1 h-2.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 0.85,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          delay: metricIdx * 0.06 + lineIdx * 0.04,
                        }}
                        className={cn(
                          "h-full rounded-full",
                          BAR_COLORS[lineIdx % BAR_COLORS.length]
                        )}
                      />
                    </div>

                    <span className="w-8 shrink-0 text-right text-sm font-semibold tabular-nums">
                      {score.toFixed(1)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

