import Link from "next/link";
import { Sparkles } from "lucide-react";
import type { Itinerary } from "@/types";
import { DifficultyBadge } from "./DifficultyBadge";
import { MonthBadge } from "./MonthBadge";
import { cn } from "@/lib/utils";

interface ItineraryCardProps {
  itinerary: Itinerary;
}

export function ItineraryCard({ itinerary }: ItineraryCardProps) {
  return (
    <Link href={`/itineraries/${itinerary.id}`} className="block h-full group">
      <article className="card-photo h-full" style={{ minHeight: "480px" }}>

        {/* Background: navy gradient always visible; image overlays when it loads */}
        <div
          className={cn(
            "absolute inset-0 hero-gradient bg-cover bg-center",
            "transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
          )}
          style={{ backgroundImage: `url(${itinerary.image})` }}
          aria-hidden
        />

        {/* Dark gradient for text legibility */}
        <div className="photo-overlay" aria-hidden />

        {/* Score badge — top right */}
        <div className="absolute top-4 right-4 z-10 card-glass px-3 py-1.5 flex items-baseline gap-0.5">
          <span className="font-heading text-xl font-bold text-accent leading-none">
            {itinerary.score.toFixed(1)}
          </span>
          <span className="text-[10px] text-white/60">/10</span>
        </div>

        {/* Content — pinned to bottom */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 space-y-3">
          <DifficultyBadge difficulty={itinerary.difficulty} />

          <h3 className="font-heading text-2xl font-semibold text-white leading-tight">
            {itinerary.name}
          </h3>

          <p className="text-sm text-white/70">
            {itinerary.durationMin}–{itinerary.durationMax} noches
            {" · "}
            {itinerary.departurePorts[0]}
          </p>

          {/* Highlights */}
          <ul className="space-y-1">
            {itinerary.highlights.slice(0, 2).map((h) => (
              <li key={h} className="flex items-start gap-2">
                <Sparkles className="h-3.5 w-3.5 text-accent/80 mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-xs text-white/75">{h}</span>
              </li>
            ))}
          </ul>

          {/* Best months */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {itinerary.bestMonths.map((m) => (
              <MonthBadge key={m} month={m} active />
            ))}
          </div>
        </div>

      </article>
    </Link>
  );
}
