"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { City } from "@/data/city";
import type { Itinerary } from "@/types/itinerary";
import { DestinationCard } from "./DestinationCard";

interface Props {
  cities: City[];
  itineraries: Itinerary[];
}

function cityScore(city: City): number {
  return Math.round(((city.beautyScore + city.foodScore + city.historyScore) / 3) * 10) / 10;
}

export function DestinationsFilter({ cities, itineraries }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeItinerary = itineraries.find((it) => it.id === activeId) ?? null;

  const filtered = activeItinerary
    ? activeItinerary.destinationIds
        .map((d) => cities.find((c) => c.id.toLowerCase() === d.toLowerCase()))
        .filter((c): c is City => c !== undefined)
        .filter((c, i, arr) => arr.findIndex((x) => x.id === c.id) === i)
    : cities;

  return (
    <div className="space-y-8">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filtrar por itinerario">
        <button
          onClick={() => setActiveId(null)}
          className={cn(
            "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-200",
            activeId === null
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-foreground border-border hover:border-accent hover:text-accent"
          )}
        >
          Todos
        </button>
        {itineraries.map((it) => (
          <button
            key={it.id}
            onClick={() => setActiveId(it.id)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-200",
              activeId === it.id
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-foreground border-border hover:border-accent hover:text-accent"
            )}
          >
            {it.name}
          </button>
        ))}
      </div>

      {/* Result count */}
      <p className="text-sm text-muted-foreground">
        {filtered.length} destino{filtered.length !== 1 ? "s" : ""}
        {activeItinerary ? ` en ${activeItinerary.name}` : " en total"}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((city) => (
            <li key={city.id} className="h-[380px]">
              <DestinationCard
                name={city.name}
                country={city.countryId}
                image={city.coverImage}
                score={cityScore(city)}
                highlights={city.highlights}
                href={`/cities/${city.id}`}
                className="h-full"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground text-sm">
          No hay destinos para este itinerario.
        </p>
      )}
    </div>
  );
}
