import { Sparkles } from "lucide-react";
import type { City } from "@/data/city";
import { cn } from "@/lib/utils";
import { MONTH_SHORT } from "../cities.config";

interface CityHighlightsProps {
  city: City;
}

const ALL_MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

export function CityHighlights({ city }: CityHighlightsProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-10 md:gap-16 items-start">

      {/* Highlights */}
      <div className="space-y-5">
        <div>
          <p className="eyebrow mb-2">Lo imprescindible</p>
          <h2 className="heading-3">Puntos destacados</h2>
        </div>
        <ul className="space-y-3" role="list">
          {city.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 card p-4"
            >
              <Sparkles
                className="h-5 w-5 text-accent shrink-0 mt-0.5"
                strokeWidth={1.5}
                aria-hidden
              />
              <span className="text-base">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Best months */}
      <div className="space-y-5">
        <div>
          <p className="eyebrow mb-2">Temporada ideal</p>
          <h2 className="heading-3">Mejor época para visitar</h2>
        </div>

        <div
          className="grid grid-cols-6 md:grid-cols-12 gap-2"
          role="list"
          aria-label="Meses del año"
        >
          {ALL_MONTHS.map((m) => {
            const active = city.bestMonths.includes(m);
            return (
              <div key={m} className="flex flex-col items-center gap-1" role="listitem">
                <div
                  className={cn(
                    "w-full text-center py-2.5 px-1 rounded-lg text-xs font-medium transition-colors",
                    active
                      ? "bg-accent/15 text-accent font-semibold"
                      : "bg-muted/40 text-muted-foreground"
                  )}
                  aria-label={active ? `${MONTH_SHORT[m]}: recomendado` : MONTH_SHORT[m]}
                >
                  {MONTH_SHORT[m]}
                </div>
                {active && (
                  <div className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                )}
              </div>
            );
          })}
        </div>

        <p className="text-sm text-muted-foreground">
          Los meses en dorado son los más recomendados para visitar{" "}
          {city.name}.
        </p>
      </div>
    </div>
  );
}
