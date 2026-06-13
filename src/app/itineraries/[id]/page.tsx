import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { itineraries } from "@/data/itineraries";
import { ItineraryDetail } from "@/features/itineraries/components/ItineraryDetail";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return itineraries.map((it) => ({ id: it.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const it = itineraries.find((i) => i.id === id);
  return { title: it?.name ?? "Itinerario" };
}

export default async function ItineraryDetailPage({ params }: Props) {
  const { id } = await params;
  const itinerary = itineraries.find((i) => i.id === id);
  if (!itinerary) notFound();

  return (
    <>
      {/* Back link — floats above the hero */}
      <div className="relative z-20 container-site pt-6">
        <Link
          href="/itineraries"
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Todos los itinerarios
        </Link>
      </div>

      <ItineraryDetail itinerary={itinerary} />

      {/* Footer CTA */}
      <section className="section-sm border-t border-border">
        <div className="container-site text-center space-y-4">
          <p className="lead">¿Quieres explorar otras rutas?</p>
          <Link href="/itineraries" className="btn-primary">
            Ver todos los itinerarios
          </Link>
        </div>
      </section>
    </>
  );
}
