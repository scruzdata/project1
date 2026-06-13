import type { Metadata } from "next";
import { MessageCard } from "@/features/emotional/components/MessageCard";

export const metadata: Metadata = { title: "Para vosotros" };

export default function EmotionalPage() {
  return (
    <>
      <section className="section flex flex-col items-center text-center border-b border-border bg-muted/20">
        <div className="container-content space-y-4">
          <p className="eyebrow">Con todo el cariño</p>
          <h1 className="heading-1">Para vosotros</h1>
          <p className="lead max-w-xl mx-auto">
            Este viaje es mucho más que un crucero. Es la celebración de una
            vida construida juntos y el comienzo de una nueva aventura.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-content flex flex-col items-center gap-16">
          <MessageCard
            message="Habéis construido una vida llena de amor, esfuerzo y dedicación. Este viaje es nuestra manera de deciros gracias — y de celebrar con vosotros que la aventura más bonita todavía está por comenzar."
            from="Vuestros hijos"
          />

          <div className="text-center space-y-2">
            <p className="font-heading text-xl italic text-muted-foreground leading-relaxed max-w-lg mx-auto">
              &ldquo;El mundo es un libro. Quien no viaja, solo lee una página.&rdquo;
            </p>
            <p className="caption">— San Agustín</p>
          </div>
        </div>
      </section>
    </>
  );
}
