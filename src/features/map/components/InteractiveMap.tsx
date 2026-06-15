"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import Link from "next/link";
import { useTheme } from "next-themes";
import type { Itinerary } from "@/types";
import type { City } from "@/data/city";
import { ITINERARY_COLORS, MAP_DEFAULTS, TILE_LAYER } from "../map.config";
import { createCityIcon } from "./MapPin";

// ── Animates stroke-dashoffset via rAF using leaflet-interactive ──
// Reads each path's SVG `d` attribute to detect whether the route goes
// left→right or right→left, then applies the correct sign so dashes
// always travel from destinationIds[0] to destinationIds[last].
function RouteAnimator() {
  const map = useMap();

  useEffect(() => {
    const container = map.getContainer();
    let frame: number;
    let offset = 0;
    // Cache direction per element: -1 = move right (west→east), 1 = move left (east→west)
    const dirCache = new WeakMap<SVGPathElement, number>();

    function getDir(p: SVGPathElement): number {
      if (dirCache.has(p)) return dirCache.get(p)!;
      const nums = (p.getAttribute("d") ?? "").match(/[-\d.]+/g)?.map(Number) ?? [];
      const startX = nums[0] ?? 0;
      const endX = nums[nums.length - 2] ?? startX;
      const dir = endX >= startX ? -1 : 1;
      dirCache.set(p, dir);
      return dir;
    }

    function tick() {
      offset = (offset + 0.35) % 18;
      container
        .querySelectorAll<SVGPathElement>("path.leaflet-interactive")
        .forEach((p) => {
          p.setAttribute("stroke-dashoffset", String(getDir(p) * offset));
        });
      frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [map]);

  return null;
}

// ── Flies to the bounds of the selected itinerary on change ────
function MapController({
  cityMap,
  selectedItineraryId,
  itineraries,
}: {
  cityMap: Map<string, City>;
  selectedItineraryId: string;
  itineraries: Itinerary[];
}) {
  const map = useMap();

  useEffect(() => {
    const it = itineraries.find((i) => i.id === selectedItineraryId);
    if (!it) return;
    const positions = it.destinationIds
      .map((id) => cityMap.get(id))
      .filter((c): c is City => !!c)
      .map((c) => [c.latitude, c.longitude] as [number, number]);
    if (positions.length >= 2) {
      map.flyToBounds(positions as L.LatLngBoundsExpression, {
        padding: [60, 60],
        duration: 1.2,
        maxZoom: 8,
      });
    }
  }, [selectedItineraryId, map, cityMap, itineraries]);

  return null;
}

// ── Main component — only imported via dynamic() ───────────────
interface InteractiveMapProps {
  itineraries: Itinerary[];
  cities: City[];
  selectedItineraryId: string;
}

export function InteractiveMap({
  itineraries,
  cities,
  selectedItineraryId,
}: InteractiveMapProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const cityMap = useMemo(
    () => new Map(cities.map((c) => [c.id, c])),
    [cities]
  );

  const selectedDestinationIds = useMemo(
    () =>
      new Set(
        itineraries.find((it) => it.id === selectedItineraryId)
          ?.destinationIds ?? []
      ),
    [itineraries, selectedItineraryId]
  );

  return (
    <MapContainer
      center={MAP_DEFAULTS.center}
      zoom={MAP_DEFAULTS.zoom}
      minZoom={MAP_DEFAULTS.minZoom}
      maxZoom={MAP_DEFAULTS.maxZoom}
      className="h-full w-full"
      zoomControl={false}
      scrollWheelZoom
    >
      <TileLayer
        url={isDark ? TILE_LAYER.urlDark : TILE_LAYER.url}
        attribution={TILE_LAYER.attribution}
      />

      <MapController
        cityMap={cityMap}
        selectedItineraryId={selectedItineraryId}
        itineraries={itineraries}
      />

      {/* All three itinerary polylines — selected one is animated */}
      {itineraries.map((it) => {
        const isSelected = it.id === selectedItineraryId;
        const color = ITINERARY_COLORS[it.id] ?? "#d4af37";
        const positions = it.destinationIds
          .map((id) => cityMap.get(id))
          .filter((c): c is City => !!c)
          .map((c) => [c.latitude, c.longitude] as [number, number]);

        return (
          <Polyline
            key={it.id}
            positions={positions}
            pathOptions={{
              color,
              weight: isSelected ? 3 : 1.5,
              opacity: isSelected ? 0.9 : 0.3,
              dashArray: isSelected ? "12 6" : "6 6",
              className: isSelected ? "route-active" : "route-inactive",
            }}
          />
        );
      })}

      <RouteAnimator />

      {/* City markers */}
      {cities.map((city) => {
        const isHighlighted = selectedDestinationIds.has(city.id);
        return (
          <Marker
            key={city.id}
            position={[city.latitude, city.longitude]}
            icon={createCityIcon(isHighlighted)}
            zIndexOffset={isHighlighted ? 100 : 0}
          >
            <Popup>
              <div className="city-popup-wrapper">
                {city.coverImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={city.coverImage}
                    alt={city.name}
                    className="city-popup-image"
                  />
                )}
                <div className="city-popup-content">
                  <p className="city-popup-name">{city.name}</p>
                  <p className="city-popup-desc">{city.description}</p>
                  <div className="city-popup-scores">
                    <span>✨ {city.beautyScore}/10</span>
                    <span>🍽 {city.foodScore}/10</span>
                    <span>🏛 {city.historyScore}/10</span>
                  </div>
                  <Link href={`/cities/${city.id}`} className="city-popup-link">
                    Ver ciudad →
                  </Link>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
