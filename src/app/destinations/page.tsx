import type { Metadata } from "next";
import { cities } from "@/data/cities";
import { DestinationCard } from "@/features/destinations/components/DestinationCard";

export const metadata: Metadata = { title: "Destinos" };

export default function DestinationsPage() {
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
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => {
              const score =
                Math.round(
                  ((city.beautyScore + city.foodScore + city.historyScore) / 3) * 10
                ) / 10;
              return (
                <li key={city.id} className="h-[380px]">
                  <DestinationCard
                    name={city.name}
                    country={city.countryId}
                    image={city.coverImage}
                    score={score}
                    highlights={city.highlights}
                    href={`/cities/${city.id}`}
                    className="h-full"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
