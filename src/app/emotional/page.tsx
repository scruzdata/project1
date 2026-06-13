import type { Metadata } from "next";

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
        <div className="container-content space-y-6 text-center">
          <p className="font-heading text-xl italic text-muted-foreground leading-relaxed max-w-lg mx-auto">
            &ldquo;El mundo es un libro. Quien no viaja, solo lee una página.&rdquo;
          </p>
          <p className="caption">— San Agustín</p>
        </div>
      </section>
    </>
  );
}
