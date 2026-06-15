"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import type { Itinerary } from "@/types";
import type { City } from "@/data/city";
import { cn } from "@/lib/utils";
import { ITINERARY_COLORS } from "../map.config";
import { MapWrapper } from "./MapWrapper";

interface MapPageClientProps {
  itineraries: Itinerary[];
  cities: City[];
}

export function MapPageClient({ itineraries, cities }: MapPageClientProps) {
  const [selectedId, setSelectedId] = useState(itineraries[0]?.id ?? "");
  const asideRef = useRef<HTMLElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const el = asideRef.current;
    if (!el) return;
    const check = () =>
      setShowScrollHint(el.scrollTop + el.clientHeight < el.scrollHeight - 4);
    check();
    el.addEventListener("scroll", check, { passive: true });
    return () => el.removeEventListener("scroll", check);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-[calc(100dvh-4rem)] md:h-[calc(100dvh-5rem)] overflow-hidden">

      {/* ── Sidebar ─────────────────────────────────────────── */}
      <aside ref={asideRef} className="w-full md:w-72 lg:w-80 shrink-0 max-h-[40%] md:max-h-none relative z-10 border-b-2 md:border-b-0 md:border-r border-border bg-card overflow-y-auto shadow-[0_4px_16px_rgba(0,0,0,0.10)] md:shadow-none [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/40">
        <div className="p-5 md:p-6 border-b border-border">
          <p className="eyebrow mb-1">Mapa interactivo</p>
          <h1 className="heading-3">Rutas del Mediterráneo</h1>
        </div>

        {/* Itinerary selector */}
        <ul className="p-4 space-y-2" role="list" aria-label="Seleccionar itinerario">
          {itineraries.map((it) => {
            const isSelected = it.id === selectedId;
            const color = ITINERARY_COLORS[it.id] ?? "#d4af37";
            return (
              <li key={it.id} role="listitem">
                <button
                  onClick={() => setSelectedId(it.id)}
                  aria-pressed={isSelected}
                  className={cn(
                    "w-full text-left rounded-xl border px-4 py-4 transition-all duration-200 cursor-pointer",
                    isSelected
                      ? "border-border bg-accent/10 shadow-sm"
                      : "border-transparent hover:bg-muted/60"
                  )}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span
                      className="shrink-0 h-2.5 w-2.5 rounded-full"
                      style={{ background: color }}
                      aria-hidden
                    />
                    <span className="text-sm font-semibold leading-snug">
                      {it.name}
                    </span>
                  </div>
                  <div className="pl-5 space-y-0.5">
                    <p className="text-xs text-muted-foreground">
                      {it.durationMin}–{it.durationMax} noches ·{" "}
                      {it.departurePorts[0]}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {it.destinationIds.length} destinos
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Legend */}
        <div className="mx-4 mb-6 p-4 rounded-xl bg-muted/40 space-y-2">
          <p className="caption mb-2">Leyenda</p>
          {itineraries.map((it) => {
            const color = ITINERARY_COLORS[it.id] ?? "#d4af37";
            return (
              <div
                key={it.id}
                className="flex items-center gap-2.5 text-xs text-muted-foreground"
              >
                <span
                  className="shrink-0 h-0.5 w-5 rounded-full"
                  style={{ background: color }}
                  aria-hidden
                />
                {it.name}
              </div>
            );
          })}
          <div className="pt-1 flex items-center gap-2.5 text-xs text-muted-foreground">
            <span className="shrink-0 h-3 w-3 rounded-full bg-accent ring-[3px] ring-accent/20" aria-hidden />
            Puerto del itinerario activo
          </div>
          <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
            <span className="shrink-0 h-2 w-2 rounded-full bg-muted-foreground/50 ml-0.5" aria-hidden />
            Otro destino
          </div>
        </div>
        {/* Scroll hint — only mobile */}
        <div
          className={cn(
            "sticky bottom-0 inset-x-0 h-10 bg-gradient-to-t from-card to-transparent pointer-events-none md:hidden flex items-end justify-center pb-1 transition-opacity duration-300",
            showScrollHint ? "opacity-100" : "opacity-0"
          )}
          aria-hidden
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground animate-bounce" />
        </div>
      </aside>

      {/* ── Map ─────────────────────────────────────────────── */}
      <div className="flex-1 min-h-[50dvh] md:min-h-0">
        <MapWrapper
          itineraries={itineraries}
          cities={cities}
          selectedItineraryId={selectedId}
        />
      </div>
    </div>
  );
}
