import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/data/cities";

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
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <li key={city.id}>
                <Link
                  href={`/cities/${city.id}`}
                  className="card block p-6 hover:ring-1 hover:ring-accent/40 transition-all duration-200"
                >
                  <p className="font-heading text-lg font-semibold">{city.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{city.countryId}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
