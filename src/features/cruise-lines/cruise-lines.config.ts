import type { LucideIcon } from "lucide-react";
import { Award, ChefHat, ConciergeBell, Ship, Music2, Waves, BadgeDollarSign } from "lucide-react";
import type { CruiseLine } from "@/types";

export type ScoreKey =
  | "overallScore"
  | "foodScore"
  | "serviceScore"
  | "shipScore"
  | "entertainmentScore"
  | "tranquilityScore"
  | "valueScore";

export const scoreFields: { key: ScoreKey; label: string; icon: LucideIcon }[] = [
  { key: "overallScore",        label: "Puntuación general", icon: Award },
  { key: "foodScore",           label: "Gastronomía",        icon: ChefHat },
  { key: "serviceScore",        label: "Servicio",           icon: ConciergeBell },
  { key: "shipScore",           label: "Barcos",             icon: Ship },
  { key: "entertainmentScore",  label: "Entretenimiento",    icon: Music2 },
  { key: "tranquilityScore",    label: "Tranquilidad",       icon: Waves },
  { key: "valueScore",          label: "Calidad-precio",     icon: BadgeDollarSign },
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
