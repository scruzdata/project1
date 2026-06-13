import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { cities } from "@/data/cities";
import { dayPlans } from "@/data/dayPlans";
import { pointsOfInterest } from "@/data/pointsOfInterest";
import { CityHero } from "@/features/cities/components/CityHero";
import { CityScores } from "@/features/cities/components/CityScores";
import { CityHighlights } from "@/features/cities/components/CityHighlights";
import { DayTimeline } from "@/features/cities/components/DayTimeline";
import { PointsOfInterestSection } from "@/features/cities/components/PointsOfInterestSection";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return cities.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const city = cities.find((c) => c.id === id);
  return { title: city?.name ?? "Destino" };
}

export default async function CityDetailPage({ params }: Props) {
  const { id } = await params;
  const city = cities.find((c) => c.id === id);
  if (!city) notFound();

  const dayPlan = dayPlans.find((dp) => dp.cityId === id);
  const pois = pointsOfInterest.filter((poi) => poi.cityId === id);

  return (
    <>
      {/* Back link — floats above hero */}
      <div className="relative z-20 container-site pt-6">
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Todos los destinos
        </Link>
      </div>

      {/* Hero */}
      <CityHero city={city} />

      {/* Scores + practical info */}
      <section className="section">
        <div className="container-site">
          <CityScores city={city} />
        </div>
      </section>

      {/* Highlights + best months */}
      <section className="section-sm border-t border-border">
        <div className="container-site">
          <CityHighlights city={city} />
        </div>
      </section>

      {/* Day plan timeline */}
      {dayPlan && (
        <section className="section border-t border-border bg-muted/20">
          <div className="container-content">
            <div className="mb-10">
              <p className="eyebrow mb-3">Un día en {city.name}</p>
              <h2 className="heading-2">Cómo aprovechar el tiempo al máximo</h2>
            </div>
            <DayTimeline dayPlan={dayPlan} />
          </div>
        </section>
      )}

      {/* Points of interest */}
      {pois.length > 0 && (
        <section className="section border-t border-border">
          <div className="container-site">
            <div className="mb-10">
              <p className="eyebrow mb-3">Qué ver</p>
              <h2 className="heading-2">Puntos de interés</h2>
            </div>
            <PointsOfInterestSection pois={pois} />
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="section-sm border-t border-border">
        <div className="container-site text-center space-y-4">
          <p className="lead">¿Listo para planificar el viaje?</p>
          <Link href="/itineraries" className="btn-primary">
            Ver itinerarios
          </Link>
        </div>
      </section>
    </>
  );
}
