"use client";

import dynamic from "next/dynamic";
import type { Itinerary } from "@/types";
import type { City } from "@/data/city";

const InteractiveMapDynamic = dynamic(
  () =>
    import("./InteractiveMap").then((m) => ({ default: m.InteractiveMap })),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-muted/30 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="h-8 w-8 border-2 border-accent/40 border-t-accent rounded-full animate-spin mx-auto" />
          <p className="text-sm text-muted-foreground">Cargando mapa…</p>
        </div>
      </div>
    ),
  }
);

interface MapWrapperProps {
  itineraries: Itinerary[];
  cities: City[];
  selectedItineraryId: string;
}

export function MapWrapper({
  itineraries,
  cities,
  selectedItineraryId,
}: MapWrapperProps) {
  return (
    <div className="h-full w-full">
      <InteractiveMapDynamic
        itineraries={itineraries}
        cities={cities}
        selectedItineraryId={selectedItineraryId}
      />
    </div>
  );
}
