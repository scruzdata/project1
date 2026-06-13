import { MONTH_SHORT } from "../itineraries.config";
import { cn } from "@/lib/utils";

interface MonthBadgeProps {
  month: number;
  active?: boolean;
  className?: string;
}

export function MonthBadge({ month, active = false, className }: MonthBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium tabular-nums",
        active
          ? "bg-accent/15 text-accent font-semibold"
          : "bg-muted text-muted-foreground",
        className
      )}
      aria-label={active ? `${MONTH_SHORT[month]} (mejor mes)` : MONTH_SHORT[month]}
    >
      {MONTH_SHORT[month]}
    </span>
  );
}
