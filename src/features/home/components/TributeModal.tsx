"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { TributeCopy } from "./TributeCopy";

interface Photo {
  src: string;
  alt?: string;
}

interface TributeModalProps {
  photos?: Photo[];
}

const STORAGE_KEY = "tribute_seen";

export function TributeModal({ photos }: TributeModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setOpen(true);
    }
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mensaje de los hijos"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 bg-background border border-border rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col md:grid md:grid-cols-2 overflow-hidden">
        <button
          onClick={dismiss}
          aria-label="Cerrar mensaje"
          className="absolute top-4 right-4 z-10 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── Texto (primero en móvil, columna derecha en desktop) ── */}
        <div className="order-1 md:order-2 flex-1 min-h-0 overflow-y-auto p-8 pt-10 flex flex-col">
          <TributeCopy />
          <button
            onClick={dismiss}
            className="mt-8 w-full py-3 px-6 bg-accent text-accent-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
          >
            Empezar a explorar
          </button>
        </div>

        {/* ── Fotos móvil: franja fija al fondo ── */}
        {photos && photos.length > 0 && (
          <div className="md:hidden order-2 shrink-0 h-36 grid grid-cols-3 gap-1 p-2">
            {photos.map((photo, i) => (
              <div key={i} className="relative rounded-lg overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt ?? "Familia"}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            ))}
          </div>
        )}

        {/* ── Fotos desktop: masonry columna izquierda ── */}
        {photos && photos.length > 0 && (
          <div className="hidden md:block order-1 columns-2 gap-1.5 p-4 sticky top-0 self-start overflow-y-auto max-h-[90vh]">
            {photos.map((photo, i) => (
              <div key={i} className="break-inside-avoid mb-1.5 rounded-xl overflow-hidden shadow-md ring-1 ring-border/40">
                <Image
                  src={photo.src}
                  alt={photo.alt ?? "Familia"}
                  width={600}
                  height={600}
                  className="w-full h-auto block"
                  sizes="20vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
