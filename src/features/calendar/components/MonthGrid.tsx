"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle2, XCircle, ChevronDown } from "lucide-react";
import type { TravelMonth } from "@/data/month";
import {
  SCORE_DIMS,
  MONTH_SHORT,
  getScoreStyle,
  getMonthInsights,
} from "../calendar.config";
import { cn } from "@/lib/utils";

interface MonthGridProps {
  months: TravelMonth[];
}

export function MonthGrid({ months }: MonthGridProps) {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  const selected = months.find((m) => m.month === selectedMonth) ?? null;

  function toggle(month: number) {
    setSelectedMonth((prev) => (prev === month ? null : month));
  }

  return (
    <div className="space-y-4">
      {/* 12-card grid */}
      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
        role="list"
        aria-label="Meses del año"
      >
        {months.map((m) => {
          const style = getScoreStyle(m.overallScore);
          const isSelected = selectedMonth === m.month;

          return (
            <motion.button
              key={m.month}
              onClick={() => toggle(m.month)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              aria-pressed={isSelected}
              aria-label={`${m.name}: ${m.overallScore} de 10`}
              className={cn(
                "relative rounded-2xl border p-4 text-left transition-all duration-200 cursor-pointer",
                "flex flex-col items-center gap-2",
                isSelected
                  ? cn("border-accent/60 shadow-md", style.bg)
                  : cn("border-border hover:border-border/80 hover:bg-muted/40", style.bg)
              )}
            >
              {/* Month abbreviation */}
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {MONTH_SHORT[m.month]}
              </span>

              {/* Overall score */}
              <span
                className={cn(
                  "font-heading text-2xl font-bold leading-none",
                  style.text
                )}
              >
                {m.overallScore}
              </span>

              {/* Recommended dot */}
              {m.recommended && (
                <div
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  aria-label="Recomendado"
                />
              )}

              {/* Mini score bars */}
              <div className="w-full space-y-0.5">
                {SCORE_DIMS.map((dim) => {
                  const val = m[dim.key] as number;
                  return (
                    <div key={String(dim.key)} className="h-0.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className={cn("h-full rounded-full", dim.fill)}
                        style={{ width: `${val * 10}%` }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Selected indicator */}
              {isSelected && (
                <ChevronDown className="h-3 w-3 text-accent" strokeWidth={2} />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Expanded detail panel */}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected.month}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <MonthDetailPanel month={selected} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Inline detail panel ────────────────────────────────────────
function MonthDetailPanel({ month }: { month: TravelMonth }) {
  const style = getScoreStyle(month.overallScore);
  const { pros, cons } = getMonthInsights(month);

  return (
    <div className={cn("rounded-2xl border p-6 md:p-8 space-y-6", style.bg, style.border)}>

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="eyebrow">{month.name}</p>
          <div className="flex items-baseline gap-2">
            <span className={cn("font-heading text-5xl font-semibold leading-none", style.text)}>
              {month.overallScore}
            </span>
            <span className="text-base text-muted-foreground">/10</span>
          </div>
          <p className="text-sm text-muted-foreground pt-1">{month.summary}</p>
        </div>

        {/* Stars + badge */}
        <div className="shrink-0 flex flex-col items-end gap-2">
          <div className="flex gap-0.5" role="img" aria-label={`${month.overallScore} de 10`}>
            {[2, 4, 6, 8, 10].map((t) => (
              <Star
                key={t}
                className={cn(
                  "h-4 w-4",
                  month.overallScore >= t
                    ? "fill-accent text-accent"
                    : "fill-muted text-muted-foreground/30"
                )}
                strokeWidth={1}
              />
            ))}
          </div>
          {month.recommended && (
            <span className="text-[10px] font-semibold uppercase tracking-wider bg-accent/20 text-accent px-2.5 py-1 rounded-full">
              Recomendado
            </span>
          )}
        </div>
      </div>

      {/* Score breakdown */}
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Desglose de puntuaciones
          </p>
          {SCORE_DIMS.map((dim, i) => {
            const value = month[dim.key] as number;
            const dimStyle = getScoreStyle(value);
            return (
              <motion.div
                key={String(dim.key)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                className="space-y-1.5"
              >
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-medium">{dim.label}</span>
                  <span className={cn("font-heading text-base font-semibold leading-none", dimStyle.text)}>
                    {value}
                    <span className="text-xs font-body text-muted-foreground">/10</span>
                  </span>
                </div>
                <div
                  className="h-2 w-full rounded-full bg-muted overflow-hidden"
                  role="meter"
                  aria-valuenow={value}
                  aria-valuemin={0}
                  aria-valuemax={10}
                >
                  <motion.div
                    className={cn("h-full rounded-full", dim.fill)}
                    initial={{ width: 0 }}
                    animate={{ width: `${value * 10}%` }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.07 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pros & cons */}
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Ventajas y limitaciones
          </p>

          {pros.length > 0 && (
            <ul className="space-y-2">
              {pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                  {pro}
                </li>
              ))}
            </ul>
          )}

          {cons.length > 0 && (
            <ul className="space-y-2">
              {cons.map((con) => (
                <li key={con} className="flex items-start gap-2.5 text-sm">
                  <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                  {con}
                </li>
              ))}
            </ul>
          )}

          {pros.length === 0 && cons.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Mes con puntuaciones intermedias en todas las dimensiones.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
