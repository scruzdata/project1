import type { Metadata } from "next";

export const metadata: Metadata = { title: "Presupuesto" };

export default function BudgetPage() {
  return (
    <section className="section">
      <div className="container-site">
        <p className="eyebrow mb-3">Planificación</p>
        <h1 className="heading-1 mb-4">Presupuesto</h1>
        <p className="lead max-w-2xl">Próximamente.</p>
      </div>
    </section>
  );
}
