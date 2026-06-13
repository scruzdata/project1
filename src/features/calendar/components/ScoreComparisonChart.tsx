"use client";

import { motion } from "framer-motion";
import type { TravelMonth } from "@/data/month";
import { SCORE_DIMS, MONTH_SHORT, getHeatCell } from "../calendar.config";
import { cn } from "@/lib/utils";

interface ScoreComparisonChartProps {
  months: TravelMonth[];
}

export function ScoreComparisonChart({ months }: ScoreComparisonChartProps) {
  // Sorted Jan → Dec for display
  const sorted = [...months].sort((a, b) => a.month - b.month);

  return (
    <div className="space-y-6">

      {/* Legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Leyenda de colores">
        {[
          { label: "Excelente (8–10)", cls: "bg-emerald-500" },
          { label: "Bueno (6–7)",      cls: "bg-emerald-400" },
          { label: "Regular (5)",      cls: "bg-amber-400" },
          { label: "Bajo (3–4)",       cls: "bg-orange-400" },
          { label: "Muy bajo (1–2)",   cls: "bg-red-500" },
        ].map(({ label, cls }) => (
          <div key={label} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className={cn("h-2.5 w-2.5 rounded-sm shrink-0", cls)} aria-hidden />
            {label}
          </div>
        ))}
      </div>

      {/* Chart — horizontally scrollable on mobile */}
      <div className="overflow-x-auto rounded-2xl border border-border">
        <div className="min-w-[640px]">

          {/* Month header row */}
          <div className="grid grid-cols-[120px_repeat(12,1fr)] border-b border-border bg-muted/30">
            <div className="p-3" />
            {sorted.map((m) => (
              <div
                key={m.month}
                className={cn(
                  "p-3 text-center",
                  m.recommended && "bg-accent/8"
                )}
              >
                <span className={cn(
                  "text-xs font-semibold",
                  m.recommended ? "text-accent" : "text-muted-foreground"
                )}>
                  {MONTH_SHORT[m.month]}
                </span>
                {m.recommended && (
                  <div className="h-1 w-1 rounded-full bg-accent mx-auto mt-1" aria-hidden />
                )}
              </div>
            ))}
          </div>

          {/* One row per score dimension */}
          {SCORE_DIMS.map((dim, dimIdx) => (
            <div
              key={String(dim.key)}
              className={cn(
                "grid grid-cols-[120px_repeat(12,1fr)]",
                dimIdx < SCORE_DIMS.length - 1 && "border-b border-border"
              )}
            >
              {/* Dimension label */}
              <div className="p-3 flex items-center">
                <span className={cn("text-xs font-semibold", dim.text)}>
                  {dim.label}
                </span>
              </div>

              {/* Score cells */}
              {sorted.map((m, monthIdx) => {
                const value = m[dim.key] as number;
                return (
                  <motion.div
                    key={m.month}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      delay: dimIdx * 0.04 + monthIdx * 0.02,
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="p-2 flex items-center justify-center"
                  >
                    <span
                      className={cn(
                        "h-9 w-full max-w-[44px] rounded-lg flex items-center justify-center",
                        "text-xs font-bold tabular-nums",
                        getHeatCell(value)
                      )}
                      aria-label={`${dim.label} en ${m.name}: ${value}`}
                    >
                      {value}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          ))}

          {/* Overall score row */}
          <div className="grid grid-cols-[120px_repeat(12,1fr)] bg-muted/20 border-t border-border">
            <div className="p-3 flex items-center">
              <span className="text-xs font-bold text-foreground">Puntuación</span>
            </div>
            {sorted.map((m, monthIdx) => (
              <motion.div
                key={m.month}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: 0.16 + monthIdx * 0.02,
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="p-2 flex items-center justify-center"
              >
                <span
                  className={cn(
                    "h-9 w-full max-w-[44px] rounded-lg flex items-center justify-center",
                    "text-xs font-bold tabular-nums",
                    getHeatCell(m.overallScore)
                  )}
                  aria-label={`Puntuación global de ${m.name}: ${m.overallScore}`}
                >
                  {m.overallScore}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        Los meses marcados en dorado son los recomendados para tu primer crucero.
      </p>
    </div>
  );
}
