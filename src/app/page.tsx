import type { Metadata } from "next";
import Link from "next/link";
import { itineraries } from "@/data/itineraries";
import { cities } from "@/data/cities";
import { HeroSection } from "@/features/home/components/HeroSection";

export const metadata: Metadata = { title: "Nuestra Gran Aventura" };

export default function HomePage() {
  const featured = [...itineraries].sort((a, b) => b.score - a.score).slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <HeroSection />

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
