import { Star } from "lucide-react";
import type { TravelMonth } from "@/data/month";
import { SCORE_DIMS, getScoreStyle } from "../calendar.config";
import { cn } from "@/lib/utils";

interface BestMonthBadgeProps {
  month: TravelMonth;
  rank: number;
}

export function BestMonthBadge({ month, rank }: BestMonthBadgeProps) {
  const style = getScoreStyle(month.overallScore);
  const isTop = rank === 1;

  return (
    <article
      className={cn(
        "card p-6 flex flex-col gap-4 relative overflow-hidden",
        isTop && "ring-1 ring-accent/40"
      )}
    >
      {/* Rank badge */}
      <div
        className={cn(
          "absolute top-4 right-4 h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold",
          isTop
            ? "bg-accent text-accent-foreground"
            : "bg-muted text-muted-foreground"
        )}
        aria-label={`Puesto ${rank}`}
      >
        {rank}
      </div>

      {/* Month + score */}
      <div className="space-y-1 pr-10">
        <p className="eyebrow">{month.name}</p>
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-4xl font-semibold text-accent leading-none">
            {month.overallScore}
          </span>
          <span className="text-sm text-muted-foreground">/10</span>
        </div>
      </div>

      {/* Stars */}
      <div
        className="flex gap-0.5"
        role="img"
        aria-label={`Puntuación: ${month.overallScore} de 10`}
      >
        {[2, 4, 6, 8, 10].map((threshold) => (
          <Star
            key={threshold}
            className={cn(
              "h-3.5 w-3.5",
              month.overallScore >= threshold
                ? "fill-accent text-accent"
                : "fill-muted text-muted-foreground/30"
            )}
            strokeWidth={1}
          />
        ))}
      </div>

      {/* Summary */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {month.summary}
      </p>

      {/* Score dimension mini-bars */}
      <div className="space-y-2 pt-1">
        {SCORE_DIMS.map((dim) => {
          const value = month[dim.key] as number;
          return (
            <div key={String(dim.key)} className="flex items-center gap-2">
              <span className="text-[10px] text-muted-foreground w-12 shrink-0">
                {dim.shortLabel}
              </span>
              <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                  className={cn("h-full rounded-full", dim.fill)}
                  style={{ width: `${value * 10}%` }}
                />
              </div>
              <span className={cn("text-[10px] font-semibold w-4 text-right", dim.text)}>
                {value}
              </span>
            </div>
          );
        })}
      </div>
    </article>
  );
}
