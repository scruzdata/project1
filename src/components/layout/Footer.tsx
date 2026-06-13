import Link from "next/link";
import { Compass } from "lucide-react";
import { mainNav, secondaryNav } from "@/lib/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="container-site">

        {/* Main grid */}
        <div className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand — spans 2 cols on large screens */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-75"
            >
              <Compass className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <span className="font-heading text-lg font-semibold tracking-tight">
                Regalo Jubilación
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Un regalo para soñar, explorar y celebrar el próximo gran capítulo
              de vuestras vidas juntos.
            </p>
          </div>

          {/* Explore nav */}
          <div className="space-y-4">
            <p className="eyebrow">Explorar</p>
            <nav className="flex flex-col gap-2.5" aria-label="Explorar">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Plan nav */}
          <div className="space-y-4">
            <p className="eyebrow">Planificar</p>
            <nav className="flex flex-col gap-2.5" aria-label="Planificar">
              {secondaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

        </div>

        {/* Quote — full-width row */}
        <div className="border-t border-border py-8 text-center space-y-2">
          <blockquote className="font-heading text-base md:text-lg italic text-foreground/70 leading-relaxed">
            &ldquo;El mundo es un libro. Quien no viaja, solo lee una página.&rdquo;
          </blockquote>
          <p className="caption">— San Agustín</p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {year} Regalo Jubilación — Hecho con amor.
          </p>
          <p className="text-xs text-muted-foreground italic">
            ¡Bienvenidos a la gran aventura!
          </p>
        </div>

      </div>
    </footer>
  );
}
