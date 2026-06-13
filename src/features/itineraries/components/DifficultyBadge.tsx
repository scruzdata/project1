import type { Itinerary } from "@/types";
import { DIFFICULTY_CONFIG } from "../itineraries.config";
import { cn } from "@/lib/utils";

interface DifficultyBadgeProps {
  difficulty: Itinerary["difficulty"];
  className?: string;
}

export function DifficultyBadge({ difficulty, className }: DifficultyBadgeProps) {
  const cfg = DIFFICULTY_CONFIG[difficulty];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        cfg.bg,
        cfg.color,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", cfg.dot)} aria-hidden />
      {cfg.label}
    </span>
  );
}
