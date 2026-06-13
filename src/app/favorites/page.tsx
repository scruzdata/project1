import type { Metadata } from "next";

export const metadata: Metadata = { title: "Favoritos" };

export default function FavoritesPage() {
  return (
    <>
      <section className="section-sm border-b border-border bg-muted/20">
        <div className="container-site">
          <p className="eyebrow mb-3">Tu colección</p>
          <h1 className="heading-1 mb-4">Favoritos</h1>
          <p className="lead max-w-2xl">
            Guarda los destinos e itinerarios que más os ilusionen para
            tenerlos siempre a mano.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <p className="text-muted-foreground">Próximamente.</p>
        </div>
      </section>
    </>
  );
}
