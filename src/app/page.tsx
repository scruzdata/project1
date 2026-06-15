import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { itineraries } from "@/data/itineraries";
import { cities } from "@/data/cities";
import { HeroSection } from "@/features/home/components/HeroSection";
import { TributeSection } from "@/features/home/components/TributeSection";
import { ItinerarySlider } from "@/features/home/components/ItinerarySlider";

export const metadata: Metadata = { title: "Regalo Jubilación" };

export default function HomePage() {
  const sorted = [...itineraries].sort((a, b) => b.score - a.score);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <HeroSection backgroundImage="/images/hero.jpg" />

      {/* ── Tribute ──────────────────────────────────────────── */}
      <TributeSection
        photos={[
          { src: "/images/family/family1.png", alt: "" },
          { src: "/images/family/family2.png", alt: "" },
          { src: "/images/family/family3.png", alt: "" },
          { src: "/images/family/family4.png", alt: "" },
          { src: "/images/family/family5.png", alt: "" },
          { src: "/images/family/family6.png", alt: "" },
        ]}
      />

      {/* ── Featured itineraries ─────────────────────────────── */}
      <section className="section">
        <div className="container-site space-y-10">
          <div>
            <p className="eyebrow mb-2">Rutas destacadas</p>
            <h2 className="heading-2">Los mejores itinerarios</h2>
          </div>
          <ItinerarySlider itineraries={sorted} />
        </div>
      </section>

      {/* ── Destinations teaser ──────────────────────────────── */}
      <section className="section border-t border-border relative overflow-hidden">
        <Image
          src="/images/islas_griegas.webp"
          alt="Islas Griegas"
          fill
          className="object-cover object-center"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-site space-y-10 relative z-10">
          <div>
            <p className="eyebrow mb-2 text-white/70">Destinos</p>
            <h2 className="heading-2 text-white">Lugares que os esperan</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {cities.slice(0, 8).map((city) => (
              <Link
                key={city.id}
                href={`/cities/${city.id}`}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-white/20 hover:border-white/40 transition-all duration-200"
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
