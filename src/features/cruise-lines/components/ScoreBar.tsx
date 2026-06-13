"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScoreBarProps {
  label: string;
  score: number;
  delay?: number;
  showLabel?: boolean;
  className?: string;
}

export function ScoreBar({
  label,
  score,
  delay = 0,
  showLabel = true,
  className,
}: ScoreBarProps) {
  const pct = Math.min((score / 10) * 100, 100);

  return (
    <div className={cn("space-y-1.5", className)}>
      {showLabel && (
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">{label}</span>
          <span className="text-sm font-semibold tabular-nums text-foreground">
            {score.toFixed(1)}
          </span>
        </div>
      )}
      <div className="score-bar" role="meter" aria-label={label} aria-valuenow={score} aria-valuemin={0} aria-valuemax={10}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay,
          }}
          className="score-bar-fill"
        />
      </div>
    </div>
  );
}
