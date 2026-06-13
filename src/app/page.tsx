import type { Metadata } from "next";
import Link from "next/link";
import { itineraries } from "@/data/itineraries";
import { cities } from "@/data/cities";

export const metadata: Metadata = { title: "Nuestra Gran Aventura" };

export default function HomePage() {
  const featured = [...itineraries].sort((a, b) => b.score - a.score).slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="section flex flex-col items-center text-center border-b border-border bg-muted/20">
        <div className="container-content space-y-6">
          <p className="eyebrow">Nuestra Gran Aventura</p>
          <h1 className="heading-1 max-w-2xl mx-auto">
            El viaje que siempre habéis soñado
          </h1>
          <p className="lead max-w-xl mx-auto">
            Un crucero diseñado para dos. Elegante, relajado y lleno de momentos
            que recordaréis siempre.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/itineraries" className="btn-primary">
              Ver rutas
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Explorar destinos
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured itineraries ─────────────────────────────── */}
      <section className="section">
        <div className="container-site space-y-10">
          <div>
            <p className="eyebrow mb-2">Rutas destacadas</p>
            <h2 className="heading-2">Los mejores itinerarios</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {featured.map((it) => (
              <Link
                key={it.id}
                href={`/itineraries/${it.id}`}
                className="card overflow-hidden group"
              >
                <div
                  className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${it.image})` }}
                />
                <div className="p-5 space-y-1">
                  <p className="font-heading text-base font-semibold">{it.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {it.durationMin}–{it.durationMax} noches · {it.departurePorts[0]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Destinations teaser ──────────────────────────────── */}
      <section className="section border-t border-border bg-muted/20">
        <div className="container-site space-y-10">
          <div>
            <p className="eyebrow mb-2">Destinos</p>
            <h2 className="heading-2">Lugares que os esperan</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {cities.slice(0, 8).map((city) => (
              <Link
                key={city.id}
                href={`/cities/${city.id}`}
                className="card px-4 py-2 text-sm font-medium hover:ring-1 hover:ring-accent/40 transition-all duration-200"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <Link href="/destinations" className="inline-block text-sm text-accent hover:underline">
            Ver todos los destinos →
          </Link>
        </div>
      </section>
    </>
  );
}
