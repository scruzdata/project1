import { Heart } from "lucide-react";

export function TributeCopy() {
  return (
    <div className="space-y-7">
      <div className="space-y-3">
        <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-[0.15em]">
          <Heart className="w-3.5 h-3.5 fill-current" aria-hidden />
          Con todo nuestro amor
        </span>
        <h2 className="heading-2">Por todo lo que nos&nbsp;habéis dado</h2>
      </div>

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
          &hearts;
        </p>
        <p className="font-style: italic">
          Con cariño: Sergio y Daniel
        </p>
      </div>

      <p className="font-heading text-lg text-accent italic">
        &ldquo;El mejor viaje es el que aún no habéis vivido.&rdquo;
      </p>
    </div>
  );
}
