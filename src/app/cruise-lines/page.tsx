import type { Metadata } from "next";
import { cruiseLines } from "@/data/cruiseLines";
import { CruiseLineGrid } from "@/features/cruise-lines/components/CruiseLineGrid";
import { CruiseLineComparison } from "@/features/cruise-lines/components/CruiseLineComparison";

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
        </div>
      </section>

      {/* Grid */}
      <section className="section">
        <div className="container-site">
          <CruiseLineGrid cruiseLines={cruiseLines} />
        </div>
      </section>

      {/* Comparison — always shown; becomes richer as more data is added */}
      <section className="section-sm border-t border-border">
        <div className="container-site">
          <div className="mb-10">
            <p className="eyebrow mb-3">Comparativa</p>
            <h2 className="heading-2">Análisis por categoría</h2>
            <p className="lead mt-2 max-w-xl">
              Un vistazo rápido a las puntuaciones que más importan para un
              viaje relajado y memorable.
            </p>
          </div>
          <div className="max-w-3xl">
            <CruiseLineComparison cruiseLines={cruiseLines} />
          </div>
        </div>
      </section>
    </>
  );
}
