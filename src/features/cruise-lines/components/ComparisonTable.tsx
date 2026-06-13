"use client";

import { useState, useMemo } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown, ChevronsUpDown, Award } from "lucide-react";
import type { CruiseLine } from "@/types";
import { comparisonMetrics } from "@/data/comparisonMetrics";
import {
  categoryLabel,
  atmosphereLabelShort,
  type ScoreKey,
} from "../cruise-lines.config";
import { cn } from "@/lib/utils";

// ── Score cell appearance ──────────────────────────────────────

const SCORE_THRESHOLDS: { min: number; text: string; bar: string }[] = [
  { min: 9.5, text: "text-emerald-600 dark:text-emerald-400", bar: "bg-emerald-500" },
  { min: 8.5, text: "text-emerald-600 dark:text-emerald-400", bar: "bg-emerald-400" },
  { min: 7.5, text: "text-amber-600 dark:text-amber-400",     bar: "bg-amber-400" },
  { min: 6.5, text: "text-orange-600 dark:text-orange-400",   bar: "bg-orange-400" },
  { min: 0,   text: "text-red-600 dark:text-red-400",         bar: "bg-red-400" },
];

function getScoreColors(score: number) {
  return (
    SCORE_THRESHOLDS.find((t) => score >= t.min) ??
    SCORE_THRESHOLDS[SCORE_THRESHOLDS.length - 1]
  );
}

// ── Badge styles ───────────────────────────────────────────────

const CATEGORY_CHIP: Record<CruiseLine["category"], string> = {
  luxury:     "bg-gold-400/15 text-gold-600 border border-gold-400/30",
  premium:    "bg-navy-500/10 text-navy-400 border border-navy-400/30",
  mainstream: "bg-muted text-muted-foreground border border-border",
};

const ATMOSPHERE_CHIP: Record<CruiseLine["atmosphere"], string> = {
  relaxed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
  classic: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20",
  family:  "bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20",
  active:  "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20",
};

// ── Sort / filter types ────────────────────────────────────────

type TableSortKey = ScoreKey | "category" | "name";
type SortDir = "asc" | "desc";
type CategoryFilter = CruiseLine["category"] | "all";
type AtmosphereFilter = CruiseLine["atmosphere"] | "all";

const SCORE_KEYS: ScoreKey[] = [
  "overallScore",
  "foodScore",
  "serviceScore",
  "shipScore",
  "entertainmentScore",
  "tranquilityScore",
  "valueScore",
];

// ── Component ──────────────────────────────────────────────────

interface ComparisonTableProps {
  cruiseLines: CruiseLine[];
}

export function ComparisonTable({ cruiseLines }: ComparisonTableProps) {
  const [sortKey, setSortKey] = useState<TableSortKey>("overallScore");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [filterCategory, setFilterCategory] = useState<CategoryFilter>("all");
  const [filterAtmosphere, setFilterAtmosphere] = useState<AtmosphereFilter>("all");
  const [recommendedOnly, setRecommendedOnly] = useState(false);

  function handleSort(key: TableSortKey) {
    if (sortKey === key) {
      setSortDir((prev) => (prev === "desc" ? "asc" : "desc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  const filtered = useMemo(() => {
    let result = [...cruiseLines];

    if (filterCategory !== "all") {
      result = result.filter((c) => c.category === filterCategory);
    }
    if (filterAtmosphere !== "all") {
      result = result.filter((c) => c.atmosphere === filterAtmosphere);
    }
    if (recommendedOnly) {
      result = result.filter((c) => c.recommended);
    }

    result.sort((a, b) => {
      if (sortKey === "name") {
        return sortDir === "desc"
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name);
      }
      if (sortKey === "category") {
        return sortDir === "desc"
          ? b.category.localeCompare(a.category)
          : a.category.localeCompare(b.category);
      }
      const aScore = a[sortKey as ScoreKey];
      const bScore = b[sortKey as ScoreKey];
      return sortDir === "desc" ? bScore - aScore : aScore - bScore;
    });

    return result;
  }, [cruiseLines, sortKey, sortDir, filterCategory, filterAtmosphere, recommendedOnly]);

  // Best score per column (computed across all cruise lines, not just filtered)
  const bestScores = useMemo(() => {
    const result = {} as Record<ScoreKey, number>;
    for (const key of SCORE_KEYS) {
      result[key] = Math.max(...cruiseLines.map((c) => c[key]));
    }
    return result;
  }, [cruiseLines]);

  const scoreMetrics = comparisonMetrics.filter((m) => m.type === "score");
  const otherMetrics = comparisonMetrics.filter((m) => m.type !== "score");
  const totalCols = 1 + scoreMetrics.length + otherMetrics.length;

  return (
    <div className="space-y-6">
      {/* ── Filters ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-x-8 gap-y-4 p-5 rounded-2xl bg-muted/30 border border-border">
        <FilterGroup label="Categoría">
          {(["all", "luxury", "premium", "mainstream"] as CategoryFilter[]).map(
            (cat) => (
              <FilterChip
                key={cat}
                active={filterCategory === cat}
                onClick={() => setFilterCategory(cat)}
              >
                {cat === "all" ? "Todas" : categoryLabel[cat]}
              </FilterChip>
            )
          )}
        </FilterGroup>

        <FilterGroup label="Ambiente">
          {(
            ["all", "relaxed", "classic", "active"] as AtmosphereFilter[]
          ).map((atm) => (
            <FilterChip
              key={atm}
              active={filterAtmosphere === atm}
              onClick={() => setFilterAtmosphere(atm)}
            >
              {atm === "all" ? "Todos" : atmosphereLabelShort[atm]}
            </FilterChip>
          ))}
        </FilterGroup>

        <FilterGroup label="Mostrar">
          <FilterChip
            active={recommendedOnly}
            onClick={() => setRecommendedOnly((p) => !p)}
            accent
          >
            <Award className="h-3 w-3 shrink-0" strokeWidth={2} />
            Solo recomendados
          </FilterChip>
        </FilterGroup>
      </div>

      {/* ── Count ────────────────────────────────────────────── */}
      <p className="text-sm text-muted-foreground">
        {filtered.length === cruiseLines.length ? (
          <>{cruiseLines.length} compañías</>
        ) : (
          <>
            <span className="font-semibold text-foreground">{filtered.length}</span>
            {" de "}
            {cruiseLines.length} compañías
          </>
        )}
      </p>

      {/* ── Table ────────────────────────────────────────────── */}
      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[960px] border-collapse">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              {/* Name (sticky) */}
              <th
                scope="col"
                className="sticky left-0 z-10 bg-muted/30 px-4 py-3 text-left w-[164px]"
              >
                <SortButton
                  label="Compañía"
                  isSorted={sortKey === "name"}
                  dir={sortDir}
                  onClick={() => handleSort("name")}
                />
              </th>

              {/* Score columns */}
              {scoreMetrics.map((m) => (
                <th
                  key={m.key}
                  scope="col"
                  title={m.description}
                  className={cn(
                    "px-3 py-3 text-center min-w-[76px]",
                    sortKey === m.key && "bg-accent/5"
                  )}
                >
                  <SortButton
                    label={m.label}
                    isSorted={sortKey === m.key}
                    dir={sortDir}
                    onClick={() => handleSort(m.key as TableSortKey)}
                    center
                  />
                </th>
              ))}

              {/* Badge / text columns */}
              {otherMetrics.map((m) => (
                <th
                  key={m.key}
                  scope="col"
                  title={m.description}
                  className={cn(
                    "px-3 py-3 text-center",
                    m.key === "category" && "min-w-[108px]",
                    m.key === "atmosphere" && "min-w-[100px]",
                    m.key === "averagePassengerAge" && "min-w-[90px]",
                    m.sortable && sortKey === m.key && "bg-accent/5"
                  )}
                >
                  {m.sortable ? (
                    <SortButton
                      label={m.label}
                      isSorted={sortKey === m.key}
                      dir={sortDir}
                      onClick={() => handleSort(m.key as TableSortKey)}
                      center
                    />
                  ) : (
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {m.label}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={totalCols}
                  className="px-4 py-16 text-center text-sm text-muted-foreground"
                >
                  Ninguna compañía coincide con los filtros seleccionados.
                </td>
              </tr>
            ) : (
              filtered.map((cl, idx) => (
                <motion.tr
                  key={cl.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: idx * 0.04,
                    duration: 0.25,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="group border-b border-border last:border-0 hover:bg-muted/30 transition-colors duration-150"
                >
                  {/* Name cell (sticky) */}
                  <td className="sticky left-0 z-10 bg-card group-hover:bg-muted/30 transition-colors duration-150 px-4 py-4">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        {cl.recommended && (
                          <div
                            className="h-1.5 w-1.5 rounded-full bg-accent shrink-0"
                            aria-hidden
                          />
                        )}
                        <span className="text-sm font-semibold leading-snug">
                          {cl.name}
                        </span>
                      </div>
                      {cl.recommended && (
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-accent pl-3.5">
                          Recomendado
                        </p>
                      )}
                    </div>
                  </td>

                  {/* Score cells */}
                  {scoreMetrics.map((m) => {
                    const score = cl[m.key as ScoreKey];
                    const { text, bar } = getScoreColors(score);
                    const isBest = score === bestScores[m.key as ScoreKey];

                    return (
                      <td
                        key={m.key}
                        className={cn(
                          "px-3 py-4 text-center",
                          sortKey === m.key && "bg-accent/5"
                        )}
                      >
                        <div className="flex flex-col items-center gap-1.5">
                          <span
                            className={cn(
                              "relative font-heading text-base font-semibold leading-none tabular-nums",
                              text
                            )}
                          >
                            {score.toFixed(1)}
                            {isBest && (
                              <span
                                className="absolute -top-1 -right-2 text-[9px] leading-none text-accent"
                                aria-label="Mejor puntuación"
                              >
                                ★
                              </span>
                            )}
                          </span>
                          <div
                            className="w-10 h-1 rounded-full bg-muted overflow-hidden"
                            role="meter"
                            aria-valuenow={score}
                            aria-valuemin={0}
                            aria-valuemax={10}
                          >
                            <div
                              className={cn("h-full rounded-full", bar)}
                              style={{ width: `${score * 10}%` }}
                            />
                          </div>
                        </div>
                      </td>
                    );
                  })}

                  {/* Badge / text cells */}
                  {otherMetrics.map((m) => {
                    if (m.type === "badge" && m.key === "category") {
                      return (
                        <td key={m.key} className="px-3 py-4 text-center">
                          <span
                            className={cn(
                              "inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap",
                              CATEGORY_CHIP[cl.category]
                            )}
                          >
                            {categoryLabel[cl.category]}
                          </span>
                        </td>
                      );
                    }

                    if (m.type === "badge" && m.key === "atmosphere") {
                      return (
                        <td key={m.key} className="px-3 py-4 text-center">
                          <span
                            className={cn(
                              "inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap",
                              ATMOSPHERE_CHIP[cl.atmosphere]
                            )}
                          >
                            {atmosphereLabelShort[cl.atmosphere]}
                          </span>
                        </td>
                      );
                    }

                    return (
                      <td key={m.key} className="px-3 py-4 text-center">
                        <span className="text-sm text-muted-foreground">
                          {cl.averagePassengerAge}
                        </span>
                      </td>
                    );
                  })}
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        ★ Mejor puntuación en esa categoría. Haz clic en cualquier encabezado para ordenar la tabla.
      </p>
    </div>
  );
}

// ── Sub-components ─────────────────────────────────────────────

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  accent = false,
  children,
}: {
  active: boolean;
  onClick: () => void;
  accent?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150",
        active
          ? accent
            ? "bg-accent text-accent-foreground"
            : "bg-foreground text-background"
          : "bg-background border border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}

function SortButton({
  label,
  isSorted,
  dir,
  onClick,
  center = false,
}: {
  label: string;
  isSorted: boolean;
  dir: SortDir;
  onClick: () => void;
  center?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide transition-colors duration-150",
        center ? "justify-center w-full" : "justify-start",
        isSorted
          ? "text-accent"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
      {isSorted ? (
        dir === "desc" ? (
          <ChevronDown className="h-3 w-3 shrink-0" strokeWidth={2} />
        ) : (
          <ChevronUp className="h-3 w-3 shrink-0" strokeWidth={2} />
        )
      ) : (
        <ChevronsUpDown className="h-3 w-3 shrink-0 opacity-40" strokeWidth={1.5} />
      )}
    </button>
  );
}
