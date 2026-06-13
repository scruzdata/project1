import type { Metadata } from "next";
import { itineraries } from "@/data/itineraries";
import { cities } from "@/data/cities";
import { MapPageClient } from "@/features/map/components/MapPageClient";

export const metadata: Metadata = { title: "Mapa" };

export default function MapPage() {
  return <MapPageClient itineraries={itineraries} cities={cities} />;
}
