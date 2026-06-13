import type { City } from "@/data/city";
import type { DayPlanActivity } from "@/data/dayPlan";
import type { PointOfInterest } from "@/data/pointOfInterest";

export const WALKING_CONFIG: Record<
  City["walkingDifficulty"],
  { label: string; color: string; bg: string; dot: string; detail: string }
> = {
  easy: {
    label: "Nivel fácil",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    dot: "bg-emerald-500",
    detail: "Terreno llano, ideal para todos los viajeros.",
  },
  moderate: {
    label: "Nivel moderado",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10",
    dot: "bg-amber-500",
    detail: "Algunas cuestas y escaleras; cómodo con calzado adecuado.",
  },
  high: {
    label: "Nivel intenso",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-500/10",
    dot: "bg-orange-500",
    detail: "Numerosas cuestas empinadas; se recomienda buena condición física.",
  },
};

export const SAFETY_CONFIG: Record<
  City["safety"],
  { label: string; color: string; detail: string }
> = {
  1: {
    label: "Precaución",
    color: "text-red-600 dark:text-red-400",
    detail: "Se recomienda precaución extra y atención al entorno.",
  },
  2: {
    label: "Moderada",
    color: "text-orange-600 dark:text-orange-400",
    detail: "Destino con zonas que requieren atención.",
  },
  3: {
    label: "Aceptable",
    color: "text-amber-600 dark:text-amber-400",
    detail: "Destino generalmente seguro con precauciones normales.",
  },
  4: {
    label: "Buena",
    color: "text-emerald-600 dark:text-emerald-400",
    detail: "Destino muy seguro, tranquilo para viajar en familia.",
  },
  5: {
    label: "Excelente",
    color: "text-emerald-600 dark:text-emerald-400",
    detail: "Destino muy seguro, ideal para el primer crucero.",
  },
};

export const ACTIVITY_CATEGORY_CONFIG: Record<
  DayPlanActivity["category"],
  { label: string; color: string; bg: string }
> = {
  viewpoint: {
    label: "Mirador",
    color: "text-sky-600 dark:text-sky-400",
    bg: "bg-sky-500/10",
  },
  food: {
    label: "Gastronomía",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10",
  },
  museum: {
    label: "Museo",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-500/10",
  },
  shopping: {
    label: "Compras",
    color: "text-pink-600 dark:text-pink-400",
    bg: "bg-pink-500/10",
  },
  walk: {
    label: "Paseo",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  church: {
    label: "Iglesia",
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  market: {
    label: "Mercado",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-500/10",
  },
};

export const POI_CATEGORY_CONFIG: Record<
  PointOfInterest["category"],
  { label: string; color: string; bg: string }
> = {
  landmark: {
    label: "Monumento",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10",
  },
  museum: {
    label: "Museo",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-500/10",
  },
  beach: {
    label: "Playa",
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  food: {
    label: "Gastronomía",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10",
  },
  viewpoint: {
    label: "Mirador",
    color: "text-sky-600 dark:text-sky-400",
    bg: "bg-sky-500/10",
  },
  market: {
    label: "Mercado",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-500/10",
  },
  church: {
    label: "Iglesia",
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  ruins: {
    label: "Ruinas",
    color: "text-stone-600 dark:text-stone-400",
    bg: "bg-stone-500/10",
  },
};

export const SCORE_FIELDS: {
  key: "beautyScore" | "foodScore" | "historyScore";
  label: string;
}[] = [
  { key: "beautyScore", label: "Belleza" },
  { key: "foodScore", label: "Gastronomía" },
  { key: "historyScore", label: "Historia" },
];

export const MONTH_SHORT: Record<number, string> = {
  1: "Ene", 2: "Feb", 3: "Mar", 4: "Abr", 5: "May", 6: "Jun",
  7: "Jul", 8: "Ago", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dic",
};

export const COUNTRY_NAMES: Record<string, string> = {
  greece: "Grecia",
  turkey: "Turquía",
  malta: "Malta",
  spain: "España",
  france: "Francia",
  italy: "Italia",
  portugal: "Portugal",
  morocco: "Marruecos",
};
