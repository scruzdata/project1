import type { Metadata } from "next";
import { months } from "@/data/months";
import { BestMonthBadge } from "@/features/calendar/components/BestMonthBadge";
import { MonthGrid } from "@/features/calendar/components/MonthGrid";
import { ScoreComparisonChart } from "@/features/calendar/components/ScoreComparisonChart";

export const metadata: Metadata = { title: "Calendario" };

export default function CalendarPage() {
  const recommended = months
    .filter((m) => m.recommended)
    .sort((a, b) => b.overallScore - a.overallScore);

  const allMonths = [...months].sort((a, b) => a.month - b.month);

  return (
    <>
      {/* ── Page hero ─────────────────────────────────────── */}
      <section className="section-sm border-b border-border bg-muted/20">
        <div className="container-site">
          <p className="eyebrow mb-3">Planificación</p>
          <h1 className="heading-1 mb-4">El momento perfecto</h1>
          <p className="lead max-w-2xl">
            Elegir el mes correcto lo cambia todo. Temperatura ideal, mar en calma
            y destinos tranquilos — estos son los meses que recomendamos.
          </p>
        </div>
      </section>

      {/* ── Recommended months ───────────────────────────── */}
      <section className="section">
        <div className="container-site space-y-10">
          <div>
            <p className="eyebrow mb-2">Los mejores meses</p>
            <h2 className="heading-2">Cuándo reservar el crucero</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recommended.map((m, i) => (
              <BestMonthBadge key={m.month} month={m} rank={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Monthly overview grid ─────────────────────────── */}
      <section className="section border-t border-border bg-muted/20">
        <div className="container-site space-y-8">
          <div>
            <p className="eyebrow mb-2">Los 12 meses</p>
            <h2 className="heading-2">Elige tu mes y descubre el detalle</h2>
            <p className="lead mt-3 max-w-xl">
              Pulsa cualquier mes para ver el desglose completo de puntuaciones,
              ventajas y limitaciones.
            </p>
          </div>

          <MonthGrid months={allMonths} />
        </div>
      </section>

      {/* ── Score comparison chart ───────────────────────── */}
      <section className="section border-t border-border">
        <div className="container-site space-y-10">
          <div>
            <p className="eyebrow mb-2">Comparativa</p>
            <h2 className="heading-2">Todos los meses de un vistazo</h2>
            <p className="lead mt-3 max-w-xl">
              Temperatura, tranquilidad, precio y estado del mar: las cuatro
              dimensiones que determinan la calidad de cada mes.
            </p>
          </div>

          <ScoreComparisonChart months={allMonths} />
        </div>
      </section>
    </>
  );
}
