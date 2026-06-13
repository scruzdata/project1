import type { CruiseLine } from "@/types";
import { scoreFields } from "../cruise-lines.config";
import { ScoreBar } from "./ScoreBar";
import { cn } from "@/lib/utils";

interface ScoreGridProps {
  cruiseLine: CruiseLine;
  className?: string;
}

export function ScoreGrid({ cruiseLine, className }: ScoreGridProps) {
  return (
    <div className={cn("space-y-5", className)}>
      {scoreFields.map(({ key, label }, i) => (
        <ScoreBar
          key={key}
          label={label}
          score={cruiseLine[key]}
          delay={i * 0.07}
        />
      ))}
    </div>
  );
}
