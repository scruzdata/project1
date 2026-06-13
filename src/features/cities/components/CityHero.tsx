import { Clock, Shield, Footprints } from "lucide-react";
import type { City } from "@/data/city";
import { WALKING_CONFIG, SAFETY_CONFIG, COUNTRY_NAMES } from "../cities.config";

interface CityHeroProps {
  city: City;
}

export function CityHero({ city }: CityHeroProps) {
  const walking = WALKING_CONFIG[city.walkingDifficulty];
  const safety = SAFETY_CONFIG[city.safety];
  const country = COUNTRY_NAMES[city.countryId] ?? city.countryId;

  return (
    <div
      className="relative min-h-[70vh] flex items-end hero-gradient bg-cover bg-center"
      style={{ backgroundImage: `url(${city.coverImage})` }}
    >
      <div className="photo-overlay" aria-hidden />

      <div className="relative z-10 container-site pb-12 pt-32 space-y-4">
        <p className="eyebrow">{country}</p>
        <h1 className="heading-1 text-white">{city.name}</h1>
        <p className="lead text-white/75 max-w-2xl">{city.description}</p>

        {/* Quick stat chips */}
        <div className="flex flex-wrap gap-2 pt-2" role="list" aria-label="Datos rápidos">
          <StatChip
            icon={Clock}
            label={`${city.recommendedHours}h recomendadas`}
          />
          <StatChip icon={Footprints} label={walking.label} />
          <StatChip
            icon={Shield}
            label={`Seguridad ${safety.label.toLowerCase()}`}
          />
        </div>
      </div>
    </div>
  );
}

function StatChip({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div
      className="card-glass px-3 py-2 flex items-center gap-2 text-sm text-white"
      role="listitem"
    >
      <Icon className="h-3.5 w-3.5 text-accent shrink-0" strokeWidth={1.5} />
      {label}
    </div>
  );
}
