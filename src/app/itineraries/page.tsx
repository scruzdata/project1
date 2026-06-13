import type { Metadata } from "next";
import { itineraries } from "@/data/itineraries";
import { ItineraryGrid } from "@/features/itineraries/components/ItineraryGrid";

export const metadata: Metadata = { title: "Rutas" };

export default function ItinerariesPage() {
  // Sort by score descending so the best route leads
  const sorted = [...itineraries].sort((a, b) => b.score - a.score);

  return (
    <>
      {/* Page hero */}
      <section className="section-sm border-b border-border bg-muted/20">
        <div className="container-site">
          <p className="eyebrow mb-3">Itinerarios</p>
          <h1 className="heading-1 mb-4">Rutas soñadas</h1>
          <p className="lead max-w-2xl">
            Tres rutas cuidadosamente elegidas para un primer crucero relajado,
            elegante y lleno de recuerdos.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section">
        <div className="container-site">
          <ItineraryGrid itineraries={sorted} />
        </div>
      </section>
    </>
  );
}
