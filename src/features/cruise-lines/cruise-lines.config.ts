import type { CruiseLine } from "@/types";

export type ScoreKey =
  | "overallScore"
  | "foodScore"
  | "serviceScore"
  | "shipScore"
  | "entertainmentScore"
  | "tranquilityScore"
  | "valueScore";

export const scoreFields: { key: ScoreKey; label: string }[] = [
  { key: "overallScore",      label: "Puntuación general" },
  { key: "foodScore",         label: "Gastronomía" },
  { key: "serviceScore",      label: "Servicio" },
  { key: "shipScore",         label: "Barcos" },
  { key: "entertainmentScore", label: "Entretenimiento" },
  { key: "tranquilityScore",  label: "Tranquilidad" },
  { key: "valueScore",        label: "Calidad-precio" },
];

export const categoryLabel: Record<CruiseLine["category"], string> = {
  luxury:     "Lujo",
  premium:    "Premium",
  mainstream: "Estándar",
};

export const atmosphereLabel: Record<CruiseLine["atmosphere"], string> = {
  relaxed: "Ambiente relajado y tranquilo",
  classic: "Ambiente clásico y tradicional",
  family:  "Familiar y animado",
  active:  "Activo y dinámico",
};

// Short versions for chips/badges
export const atmosphereLabelShort: Record<CruiseLine["atmosphere"], string> = {
  relaxed: "Relajado",
  classic: "Clásico",
  family:  "Familiar",
  active:  "Activo",
};
