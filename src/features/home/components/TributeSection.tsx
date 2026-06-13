import Image from "next/image";
import { Heart } from "lucide-react";

interface TributeSectionProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function TributeSection({
  imageSrc,
  imageAlt = "Nuestra familia",
}: TributeSectionProps) {
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
                Sabemos que ahora estais en un momento delicado por temas médicos
                operaciones de rodilla, etc.... asique aun no os hemos comprado nada, esto es un recordatorio para que mireis con tranquilidad a donde os gustaria ir y ver. Cuando el tiempo, medicos y el fisico os acompañe solo teneis que decirnos que quereis y nosotros nos encargaremos todo. 
              </p>
              <p className="font-medium text-foreground">
                Os lo merecéis. Todo esto y mucho más.
              </p>
            </div>

            <p className="font-heading text-lg text-accent italic">
              &ldquo;El mejor viaje es el que aún no habéis vivido.&rdquo;
            </p>
          </div>

          {/* ── Image ─────────────────────────────────────────── */}
          <div className="order-1 lg:order-2">
            {imageSrc ? (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-border/40">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] rounded-2xl border-2 border-dashed border-border bg-card flex flex-col items-center justify-center gap-4 text-muted-foreground px-8 text-center">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent/60" aria-hidden />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-foreground/60">
                    Añade una foto familiar
                  </p>
                  <p className="text-xs leading-relaxed">
                    Pasa la prop{" "}
                    <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-[11px]">
                      imageSrc
                    </code>{" "}
                    a <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-[11px]">TributeSection</code> en{" "}
                    <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-[11px]">page.tsx</code>
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
