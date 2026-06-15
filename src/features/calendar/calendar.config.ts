import type { TravelMonth } from "@/data/month";

// ── Score dimensions ───────────────────────────────────────────
export const SCORE_DIMS = [
  {
    key: "temperatureScore" as keyof TravelMonth,
    label: "Temperatura",
    shortLabel: "Temp.",
    color: "#f97316",
    bg: "bg-orange-500/15",
    text: "text-orange-600 dark:text-orange-400",
    fill: "bg-orange-400",
  },
  {
    key: "crowdScore" as keyof TravelMonth,
    label: "Tranquilidad",
    shortLabel: "Ocupacion",
    color: "#10b981",
    bg: "bg-emerald-500/15",
    text: "text-emerald-600 dark:text-emerald-400",
    fill: "bg-emerald-400",
  },
  {
    key: "priceScore" as keyof TravelMonth,
    label: "Precio",
    shortLabel: "Precio",
    color: "#3b82f6",
    bg: "bg-blue-500/15",
    text: "text-blue-600 dark:text-blue-400",
    fill: "bg-blue-400",
  },
  {
    key: "seaConditionScore" as keyof TravelMonth,
    label: "Estado del mar",
    shortLabel: "Mar",
    color: "#06b6d4",
    bg: "bg-cyan-500/15",
    text: "text-cyan-600 dark:text-cyan-400",
    fill: "bg-cyan-400",
  },
] as const;

// ── Score helpers ──────────────────────────────────────────────
export function getScoreStyle(score: number): {
  bg: string;
  text: string;
  border: string;
  label: string;
} {
  if (score >= 8)
    return {
      bg: "bg-emerald-500/10",
      text: "text-emerald-600 dark:text-emerald-400",
      border: "border-emerald-500/30",
      label: "Excelente",
    };
  if (score >= 6)
    return {
      bg: "bg-amber-500/10",
      text: "text-amber-600 dark:text-amber-400",
      border: "border-amber-500/30",
      label: "Bueno",
    };
  if (score >= 4)
    return {
      bg: "bg-orange-500/10",
      text: "text-orange-600 dark:text-orange-400",
      border: "border-orange-500/30",
      label: "Regular",
    };
  return {
    bg: "bg-red-500/10",
    text: "text-red-600 dark:text-red-400",
    border: "border-red-500/30",
    label: "Bajo",
  };
}

// Cell color for the comparison heat map
export function getHeatCell(score: number): string {
  if (score >= 9) return "bg-emerald-500 text-white";
  if (score >= 7) return "bg-emerald-400 text-emerald-950";
  if (score >= 5) return "bg-amber-400 text-amber-950";
  if (score >= 3) return "bg-orange-400 text-orange-950";
  return "bg-red-500 text-white";
}

// ── Derived insights from scores ──────────────────────────────
export function getMonthInsights(month: TravelMonth): {
  pros: string[];
  cons: string[];
} {
  const pros: string[] = [];
  const cons: string[] = [];

  if (month.temperatureScore >= 8) pros.push("Temperatura ideal para visitar");
  else if (month.temperatureScore <= 3) cons.push("Temperaturas extremas o frías");

  if (month.crowdScore >= 8) pros.push("Destinos tranquilos y poco masificados");
  else if (month.crowdScore <= 3) cons.push("Multitudes y aglomeraciones en destinos");

  if (month.priceScore >= 8) pros.push("Precios muy asequibles");
  else if (month.priceScore <= 3) cons.push("Precios en máximos de temporada");

  if (month.seaConditionScore >= 8) pros.push("Mar en calma, travesías suaves");
  else if (month.seaConditionScore <= 3) cons.push("Mar agitado, posibles oleajes");

  return { pros, cons };
}

// ── Month names ────────────────────────────────────────────────
export const MONTH_SHORT: Record<number, string> = {
  1: "Ene", 2: "Feb", 3: "Mar", 4: "Abr", 5: "May", 6: "Jun",
  7: "Jul", 8: "Ago", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dic",
};
