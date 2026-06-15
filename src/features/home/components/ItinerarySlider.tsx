"use client";

import Link from "next/link";
import { useRef } from "react";
import type { Itinerary } from "@/types/itinerary";

interface Props {
  itineraries: Itinerary[];
}

export function ItinerarySlider({ itineraries }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.querySelector("a")?.offsetWidth ?? 320;
    track.scrollBy({ left: direction === "right" ? cardWidth + 24 : -(cardWidth + 24), behavior: "smooth" });
  }

  return (
    <div className="relative">
      {/* Arrow left */}
      <button
        onClick={() => scroll("left")}
        aria-label="Anterior itinerario"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border shadow-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
      >
        ‹
      </button>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {itineraries.map((it) => (
          <Link
            key={it.id}
            href={`/itineraries/${it.id}`}
            className="card overflow-hidden group flex-none w-[280px] sm:w-[300px] md:w-[320px] snap-start"
          >
            {/* Image */}
            <div
              className="h-52 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${it.image})` }}
            >
              {/* Score badge */}
              <div className="flex justify-end p-3">
                <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full shadow">
                  {it.score.toFixed(1)}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 space-y-2">
              <p className="font-heading text-base font-semibold leading-snug">{it.name}</p>
              <p className="text-sm text-muted-foreground">
                {it.durationMin}–{it.durationMax} noches · {it.departurePorts[0]}
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {it.idealFor.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Arrow right */}
      <button
        onClick={() => scroll("right")}
        aria-label="Siguiente itinerario"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border shadow-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
      >
        ›
      </button>
    </div>
  );
}
