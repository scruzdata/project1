"use client";

import { motion } from "framer-motion";
import { Clock, Anchor, MapPin, Sparkles, Heart } from "lucide-react";
import type { Itinerary } from "@/types";
import {
  DIFFICULTY_CONFIG,
  ALL_MONTHS,
  formatDestinationId,
} from "../itineraries.config";
import { DifficultyBadge } from "./DifficultyBadge";
import { MonthBadge } from "./MonthBadge";

interface ItineraryDetailProps {
  itinerary: Itinerary;
}

// Reusable fade-up wrapper for whileInView sections
function Section({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ItineraryDetail({ itinerary }: ItineraryDetailProps) {
  const diff = DIFFICULTY_CONFIG[itinerary.difficulty];

  return (
    <div className="space-y-0">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div
        className="relative min-h-[60vh] flex items-end hero-gradient bg-cover bg-center"
        style={{ backgroundImage: `url(${itinerary.image})` }}
      >
        <div className="photo-overlay" aria-hidden />
        <div className="relative z-10 container-site pb-12 pt-32 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <DifficultyBadge difficulty={itinerary.difficulty} className="mb-3" />
            <h1 className="heading-1 text-white">{itinerary.name}</h1>
            <p className="lead text-white/70 mt-2 max-w-lg">
              {itinerary.idealFor.join(" · ")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Key facts bar ────────────────────────────────── */}
      <div className="border-b border-border bg-card">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            <Fact
              icon={<Sparkles className="h-4 w-4 text-accent" strokeWidth={1.5} />}
              label="Puntuación"
              value={`${itinerary.score.toFixed(1)} / 10`}
            />
            <Fact
              icon={<Clock className="h-4 w-4 text-accent" strokeWidth={1.5} />}
              label="Duración"
              value={`${itinerary.durationMin}–${itinerary.durationMax} noches`}
            />
            <Fact
              icon={<Anchor className="h-4 w-4 text-accent" strokeWidth={1.5} />}
              label="Salida desde"
              value={itinerary.departurePorts.join(" o ")}
            />
            <Fact
              icon={<MapPin className="h-4 w-4 text-accent" strokeWidth={1.5} />}
              label="Dificultad"
              value={diff.label}
            />
          </div>
        </div>
      </div>

      <div className="container-site space-y-16 py-16 md:py-20">

        {/* ── Port chain ───────────────────────────────────── */}
        <Section>
          <p className="eyebrow mb-3">La ruta</p>
          <h2 className="heading-2 mb-8">Puertos que visitarás</h2>
          <div
            className="flex items-start overflow-x-auto pb-4 gap-0"
            role="list"
            aria-label="Puertos del itinerario"
          >
            {itinerary.destinationIds.map((id, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex items-start shrink-0"
                role="listitem"
              >
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-accent ring-4 ring-accent/15 shrink-0" />
                  <p className="mt-2.5 text-xs font-medium text-center max-w-[72px] leading-snug">
                    {formatDestinationId(id)}
                  </p>
                </div>
                {i < itinerary.destinationIds.length - 1 && (
                  <div className="h-px w-10 md:w-14 bg-border/60 shrink-0 mt-[5px] mx-1" aria-hidden />
                )}
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── Highlights ───────────────────────────────────── */}
        <Section delay={0.05}>
          <p className="eyebrow mb-3">Lo mejor</p>
          <h2 className="heading-2 mb-8">Momentos destacados</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {itinerary.highlights.map((h, i) => (
              <motion.div
                key={h}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.45,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="card p-5 flex items-start gap-3"
              >
                <Sparkles
                  className="h-5 w-5 text-accent shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <p className="text-sm leading-relaxed">{h}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── Best months ──────────────────────────────────── */}
        <Section delay={0.05}>
          <p className="eyebrow mb-3">Temporada ideal</p>
          <h2 className="heading-2 mb-8">Mejor época para viajar</h2>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-2" role="list" aria-label="Meses del año">
            {ALL_MONTHS.map((m) => {
              const active = itinerary.bestMonths.includes(m);
              return (
                <div key={m} className="flex flex-col items-center gap-1.5" role="listitem">
                  <MonthBadge month={m} active={active} className="w-full justify-center" />
                  {active && (
                    <div className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                  )}
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Los meses resaltados son los más recomendados para este itinerario.
          </p>
        </Section>

        {/* ── Ideal for ────────────────────────────────────── */}
        <Section delay={0.05}>
          <div className="card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Heart className="h-6 w-6 text-accent shrink-0 mt-1" strokeWidth={1.5} />
              <div className="space-y-2">
                <p className="eyebrow">Este viaje es perfecto para</p>
                <ul className="space-y-1.5">
                  {itinerary.idealFor.map((item) => (
                    <li key={item} className="text-base text-muted-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

      </div>
    </div>
  );
}

// ── Internal subcomponent ──────────────────────────────────
function Fact({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1.5 py-5 px-4 md:px-6">
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="eyebrow">{label}</span>
      </div>
      <p className="text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}
