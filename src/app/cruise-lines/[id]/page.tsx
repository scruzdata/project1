import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { cruiseLines } from "@/data/cruiseLines";
import { categoryLabel, atmosphereLabelShort } from "@/features/cruise-lines/cruise-lines.config";
import { ScoreGrid } from "@/features/cruise-lines/components/ScoreGrid";
import { ProsConsCard } from "@/features/cruise-lines/components/ProsConsCard";
import { TravelerProfile } from "@/features/cruise-lines/components/TravelerProfile";
import { CruiseLineComparison } from "@/features/cruise-lines/components/CruiseLineComparison";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return cruiseLines.map((cl) => ({ id: cl.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const cl = cruiseLines.find((c) => c.id === id);
  return { title: cl?.name ?? "Crucero" };
}

export default async function CruiseLineDetailPage({ params }: Props) {
  const { id } = await params;
  const cl = cruiseLines.find((c) => c.id === id);
  if (!cl) notFound();

  return (
    <>
      {/* Hero */}
      <section className="section-sm border-b border-border bg-muted/20">
        <div className="container-site">
          <Link
            href="/cruise-lines"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Todas las compañías
          </Link>

          <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  {categoryLabel[cl.category]}
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  {atmosphereLabelShort[cl.atmosphere]}
                </span>
                {cl.recommended && (
                  <span className="inline-flex items-center rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
                    Nuestra elección
                  </span>
                )}
              </div>
              <h1 className="heading-1">{cl.name}</h1>
              <a
                href={cl.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Sitio oficial
              </a>
            </div>

            {/* Overall score */}
            <div className="flex flex-col items-center justify-center rounded-3xl bg-accent/10 px-10 py-6 shrink-0">
              <span className="font-heading text-5xl font-bold text-accent leading-none">
                {cl.overallScore.toFixed(1)}
              </span>
              <span className="caption mt-1.5">Puntuación global</span>
            </div>
          </div>
        </div>
      </section>

      {/* Score breakdown */}
      <section className="section-sm">
        <div className="container-site">
          <div className="mb-8">
            <p className="eyebrow mb-2">Análisis</p>
            <h2 className="heading-2">Puntuaciones por categoría</h2>
          </div>
          <div className="max-w-2xl">
            <ScoreGrid cruiseLine={cl} />
          </div>
        </div>
      </section>

      {/* Pros & cons */}
      <section className="section-sm border-t border-border bg-muted/20">
        <div className="container-site">
          <div className="mb-8">
            <p className="eyebrow mb-2">Resumen</p>
            <h2 className="heading-2">Lo que necesitas saber</h2>
          </div>
          <ProsConsCard strengths={cl.strengths} weaknesses={cl.weaknesses} />
        </div>
      </section>

      {/* Traveler profile */}
      <section className="section-sm border-t border-border">
        <div className="container-site">
          <TravelerProfile cruiseLine={cl} />
        </div>
      </section>

      {/* Full comparison chart — shows all cruise lines for context */}
      <section className="section-sm border-t border-border bg-muted/20">
        <div className="container-site">
          <div className="mb-8">
            <p className="eyebrow mb-2">Comparativa</p>
            <h2 className="heading-2">Distribución de puntuaciones</h2>
            <p className="lead mt-2 max-w-xl">
              Un vistazo visual a cómo se distribuye el rendimiento de{" "}
              {cl.name} en cada categoría.
            </p>
          </div>
          <div className="max-w-3xl">
            <CruiseLineComparison cruiseLines={cruiseLines} />
          </div>
        </div>
      </section>

      {/* Back CTA */}
      <section className="section-sm border-t border-border">
        <div className="container-site text-center space-y-4">
          <p className="lead">¿Quieres explorar otras compañías?</p>
          <Link href="/cruise-lines" className="btn-primary">
            Ver todas las compañías
          </Link>
        </div>
      </section>
    </>
  );
}
