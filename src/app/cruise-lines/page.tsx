import type { Metadata } from "next";
import { cruiseLines } from "@/data/cruiseLines";
import { CruiseLineGrid } from "@/features/cruise-lines/components/CruiseLineGrid";
import { ComparisonTable } from "@/features/cruise-lines/components/ComparisonTable";

export const metadata: Metadata = { title: "Cruceros" };

export default function CruiseLinesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="section-sm border-b border-border bg-muted/20">
        <div className="container-site">
          <p className="eyebrow mb-3">Líneas de crucero</p>
          <h1 className="heading-1 mb-4">Elige tu compañía ideal</h1>
          <p className="lead max-w-2xl">
            Hemos analizado las principales compañías para encontrar las más
            adecuadas para un primer crucero elegante, tranquilo y sin estrés.
          </p>
          <a
            href="https://www.logitravel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all duration-200 hover:gap-2.5"
          >
            <span>Ver más en Logitravel</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Grid */}
      <section className="section">
        <div className="container-site">
          <CruiseLineGrid cruiseLines={cruiseLines} />
        </div>
      </section>

      {/* Interactive comparison table */}
      <section className="section border-t border-border bg-muted/10">
        <div className="container-site">
          <div className="mb-10">
            <p className="eyebrow mb-3">Comparativa interactiva</p>
            <h2 className="heading-2">Compara todas las compañías</h2>
            <p className="lead mt-2 max-w-xl">
              Filtra por categoría o ambiente y ordena por cualquier puntuación.
              Encuentra la compañía que mejor se adapta a vuestro viaje.
            </p>
          </div>
          <ComparisonTable cruiseLines={cruiseLines} />
        </div>
      </section>
    </>
  );
}
