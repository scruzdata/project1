import type { Itinerary } from "@/types";

// Month names in Spanish
export const MONTH_SHORT: Record<number, string> = {
  1: "Ene", 2: "Feb", 3: "Mar",  4: "Abr",
  5: "May", 6: "Jun", 7: "Jul",  8: "Ago",
  9: "Sep", 10: "Oct", 11: "Nov", 12: "Dic",
};

export const MONTH_FULL: Record<number, string> = {
  1: "Enero",    2: "Febrero",   3: "Marzo",     4: "Abril",
  5: "Mayo",     6: "Junio",     7: "Julio",      8: "Agosto",
  9: "Septiembre", 10: "Octubre", 11: "Noviembre", 12: "Diciembre",
};

export const ALL_MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

export const DIFFICULTY_CONFIG: Record<
  Itinerary["difficulty"],
  { label: string; color: string; bg: string; dot: string }
> = {
  easy: {
    label: "Tranquilo",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    dot: "bg-emerald-500",
  },
  moderate: {
    label: "Moderado",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10",
    dot: "bg-amber-500",
  },
  active: {
    label: "Activo",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-500/10",
    dot: "bg-orange-500",
  },
};

/** Convert a destination ID like "la-spezia" → "La Spezia" */
export function formatDestinationId(id: string): string {
  return id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
