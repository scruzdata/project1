import Link from "next/link";
import { MapPin, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  name: string;
  country: string;
  image: string;
  score: number;
  highlights: string[];
  href: string;
  className?: string;
}

export function DestinationCard({
  name,
  country,
  image,
  score,
  highlights,
  href,
  className,
}: DestinationCardProps) {
  return (
    <Link href={href} className={cn("block h-full group", className)}>
      <article className="card-photo h-full" style={{ minHeight: "380px" }}>
        {/* Photo */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden
        />

        {/* Gradient overlay */}
        <div className="photo-overlay" aria-hidden />

        {/* Score badge — top right */}
        <div className="absolute top-4 right-4 z-10 card-glass px-3 py-1.5 flex items-baseline gap-0.5">
          <span className="font-heading text-xl font-bold text-accent leading-none">
            {score.toFixed(1)}
          </span>
          <span className="text-[10px] text-white/60">/10</span>
        </div>

        {/* Content — pinned to bottom */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 space-y-3">
          {/* City + country */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-white leading-tight">
              {name}
            </h3>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin className="h-3.5 w-3.5 text-white/60 shrink-0" strokeWidth={1.5} />
              <span className="text-sm text-white/70">{country}</span>
            </div>
          </div>

          {/* Highlights */}
          {highlights.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-white/50 mr-1">
                <Anchor className="h-3.5 w-3.5" strokeWidth={1.5} />
              </div>
              {highlights.slice(0, 3).map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-2.5 py-0.5 text-xs text-white/90"
                >
                  {h}
                </span>
              ))}
            </div>
          )}

          {/* CTA hint */}
          <div className="flex items-center gap-1.5 text-sm font-medium text-accent transition-all duration-200 group-hover:gap-2.5">
            <span>Ver ciudad</span>
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
