import Image from "next/image";
import { Heart, Images } from "lucide-react";

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
          <div className="space-y-7 order-2 lg:order-1">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-[0.15em]">
                <Heart className="w-3.5 h-3.5 fill-current" aria-hidden />
                Con todo nuestro amor
              </span>
              <h2 className="heading-2">Por todo lo que&nbsp;habéis dado</h2>
            </div>

            {/* Gold divider */}
            <div className="w-12 h-px bg-accent" aria-hidden />

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Lleváis toda la vida construyendo algo más valioso que cualquier
                destino: un hogar lleno de amor, esfuerzo y entrega. Cada
                madrugada, cada sacrificio, cada &ldquo;no os preocupéis&rdquo; ha sido un
                ladrillo en la familia que hoy somos.
              </p>
              <p>
                Nunca pedisteis nada a cambio. Pero ahora, después de tanto
                tiempo dedicado a los demás, ha llegado el momento de que el
                mundo os devuelva algo a vosotros. Tiempo para despertar sin
                prisas, para ver el horizonte desde cubierta, para disfrutar
                juntos sin más agenda que la felicidad.
              </p>
              <p>
                Sabemos que ahora estáis en un momento delicado por temas médicos,
                operaciones de rodilla, etc. Así que aún no os hemos comprado nada,
                esto es un recordatorio para que miréis con tranquilidad a dónde os
                gustaría ir y que ver.
              </p>
              <p>
                Cuando el tiempo, los médicos y el físico os acompañen, solo tenéis
                que decirnos qué queréis y nosotros nos encargaremos de todo.
              </p>
              <p className="font-medium text-foreground">
                Os lo merecéis. Todo esto y mucho más.
              </p>
              <p className="font-medium text-foreground">
...
              </p>
              <p className="font-style: italic">
              Con cariño:
                Sergio y Daniel
              </p>
            </div>

            <p className="font-heading text-lg text-accent italic">
              &ldquo;El mejor viaje es el que aún no habéis vivido.&rdquo;
            </p>
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
