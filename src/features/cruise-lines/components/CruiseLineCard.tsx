import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";
import type { CruiseLine } from "@/types";
import { categoryLabel, atmosphereLabelShort } from "../cruise-lines.config";
import { cn } from "@/lib/utils";

interface CruiseLineCardProps {
  cruiseLine: CruiseLine;
}

export function CruiseLineCard({ cruiseLine }: CruiseLineCardProps) {
  return (
    <Link href={`/cruise-lines/${cruiseLine.id}`} className="block h-full group">
      <article
        className={cn(
          "card-elevated h-full flex flex-col overflow-hidden",
          cruiseLine.recommended && "ring-1 ring-accent/40"
        )}
      >
        {/* Image */}
        {cruiseLine.image && (
          <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-muted">
            <Image
              src={cruiseLine.image}
              alt={cruiseLine.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Body */}
        <div className="flex flex-col gap-5 p-6 flex-1">

        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5 min-w-0">
            {cruiseLine.recommended && (
              <div className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-accent fill-current shrink-0" />
                <span className="eyebrow">Nuestra elección</span>
              </div>
            )}
            <h3 className="heading-4 group-hover:text-accent transition-colors duration-200 truncate">
              {cruiseLine.name}
            </h3>
          </div>

          {/* Overall score badge */}
          <div className="shrink-0 flex flex-col items-center rounded-2xl bg-accent/10 px-3.5 py-2.5">
            <span className="font-heading text-2xl font-bold text-accent leading-none">
              {cruiseLine.overallScore.toFixed(1)}
            </span>
            <span className="caption mt-0.5">/ 10</span>
          </div>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
            {categoryLabel[cruiseLine.category]}
          </span>
          <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
            {atmosphereLabelShort[cruiseLine.atmosphere]}
          </span>
        </div>

        {/* Strengths preview */}
        <ul className="flex-1 space-y-2">
          {cruiseLine.strengths.slice(0, 3).map((s) => (
            <li key={s} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" strokeWidth={1.5} />
              <span className="text-sm text-muted-foreground leading-snug">{s}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-1.5 text-sm font-medium text-accent transition-all duration-200 group-hover:gap-2.5">
          <span>Ver detalles</span>
          <span aria-hidden="true">→</span>
        </div>

        </div>
      </article>
    </Link>
  );
}
