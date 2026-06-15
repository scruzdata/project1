import Image from "next/image";
import { Images } from "lucide-react";
import { TributeCopy } from "./TributeCopy";

interface Photo {
  src: string;
  alt?: string;
}

interface TributeSectionProps {
  photos?: Photo[];
}

function PhotoCollage({ photos }: { photos: Photo[] }) {
  if (photos.length === 1) {
    return (
      <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-border/40">
        <Image
          src={photos[0].src}
          alt={photos[0].alt ?? "Familia"}
          width={900}
          height={900}
          className="w-full h-auto block"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    );
  }

  const cols = photos.length === 2 ? "columns-2" : "columns-2";

  return (
    <div className={`${cols} gap-2`}>
      {photos.map((p, i) => (
        <div
          key={i}
          className="break-inside-avoid mb-2 rounded-xl overflow-hidden shadow-md ring-1 ring-border/40"
        >
          <Image
            src={p.src}
            alt={p.alt ?? "Familia"}
            width={900}
            height={900}
            className="w-full h-auto block"
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}

function ColltagePlaceholder() {
  return (
    <div className="columns-2 gap-2">
      <div className="break-inside-avoid mb-2 aspect-[3/4] rounded-xl border-2 border-dashed border-border bg-card flex flex-col items-center justify-center gap-3 text-muted-foreground text-center px-4">
        <Images className="w-8 h-8 text-accent/50" aria-hidden />
        <p className="text-xs font-medium text-foreground/50">Tus fotos aquí</p>
      </div>
      {[2, 3, 4, 5, 6].map((n) => (
        <div key={n} className="break-inside-avoid mb-2 aspect-square rounded-xl border-2 border-dashed border-border bg-card flex items-center justify-center">
          <p className="text-[11px] text-foreground/40">Foto {n}</p>
        </div>
      ))}
    </div>
  );
}

export function TributeSection({ photos }: TributeSectionProps) {
  const hasPhotos = photos && photos.length > 0;

  return (
    <section className="section border-t border-border bg-muted/20">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Text ──────────────────────────────────────────── */}
          <div className="order-2 lg:order-1">
            <TributeCopy />
          </div>

          {/* ── Collage ───────────────────────────────────────── */}
          <div className="order-1 lg:order-2">
            {hasPhotos ? (
              <PhotoCollage photos={photos!} />
            ) : (
              <ColltagePlaceholder />
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
