import Link from "next/link";
import { Anchor, Compass } from "lucide-react";

interface HeroSectionProps {
  eyebrow?: string;
  heading?: string;
  lead?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: string;
}

export function HeroSection({
  eyebrow = "Nuestra Gran Aventura",
  heading = "El viaje que siempre habéis soñado",
  lead = "Un crucero diseñado para dos. Elegante, relajado y lleno de momentos que recordaréis siempre.",
  primaryCta = { label: "Ver rutas", href: "/itineraries" },
  secondaryCta = { label: "Explorar destinos", href: "/destinations" },
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image / navy fallback */}
      <div
        className="absolute inset-0 hero-gradient bg-cover bg-center bg-no-repeat"
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
        aria-hidden
      />

      {/* Cinematic overlay: dark top + dark bottom, lighter mid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(9,15,26,0.72) 0%, rgba(9,15,26,0.50) 50%, rgba(9,15,26,0.90) 100%)",
        }}
        aria-hidden
      />

      {/* Decorative nautical icons */}
      <Compass
        className="absolute top-16 right-10 w-28 h-28 text-accent opacity-[0.08] pointer-events-none hidden lg:block"
        strokeWidth={1}
        aria-hidden
      />
      <Anchor
        className="absolute bottom-24 left-8 w-20 h-20 text-accent opacity-[0.08] pointer-events-none hidden lg:block"
        strokeWidth={1}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 container-content flex flex-col items-center text-center gap-8 py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent backdrop-blur-sm">
          {eyebrow}
        </span>

        <h1 className="heading-1 text-white max-w-3xl lg:text-[3.75rem]">
          {heading}
        </h1>

        <p className="lead text-white/80 max-w-xl">{lead}</p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link href={primaryCta.href} className="btn-gold">
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="btn btn-md border-2 border-white/60 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>

      {/* Fade into page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }}
        aria-hidden
      />
    </section>
  );
}
