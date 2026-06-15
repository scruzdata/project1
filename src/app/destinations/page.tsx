import type { Metadata } from "next";
import { cities } from "@/data/cities";
import { itineraries } from "@/data/itineraries";
import { DestinationsFilter } from "@/features/destinations/components/DestinationsFilter";

export const metadata: Metadata = { title: "Destinos" };

export default function DestinationsPage() {
  const sorted = [...itineraries].sort((a, b) => b.score - a.score);

  return (
    <>
      <section className="section-sm border-b border-border bg-muted/20">
        <div className="container-site">
          <p className="eyebrow mb-3">Explora</p>
          <h1 className="heading-1 mb-4">Destinos</h1>
          <p className="lead max-w-2xl">
            Descubre cada puerto que podrás visitar en tu crucero.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <DestinationsFilter cities={cities} itineraries={sorted} />
        </div>
      </section>
    </>
  );
}
