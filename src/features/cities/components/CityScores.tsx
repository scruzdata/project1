"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { City } from "@/data/city";
import { WALKING_CONFIG, SAFETY_CONFIG, SCORE_FIELDS } from "../cities.config";
import { cn } from "@/lib/utils";

interface CityScoresProps {
  city: City;
}

export function CityScores({ city }: CityScoresProps) {
  const walking = WALKING_CONFIG[city.walkingDifficulty];
  const safety = SAFETY_CONFIG[city.safety];

  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

      {/* ── Score bars ──────────────────────────────────────── */}
      <div className="space-y-8">
        <div>
          <p className="eyebrow mb-2">Puntuaciones</p>
          <h2 className="heading-3">¿Qué hace especial esta ciudad?</h2>
        </div>

        {SCORE_FIELDS.map(({ key, label }, i) => {
          const score = city[key] as number;
          return (
            <div key={key} className="space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-medium">{label}</span>
                <span className="font-heading text-lg font-semibold text-accent leading-none">
                  {score}
                  <span className="text-xs font-body text-muted-foreground">
                    /10
                  </span>
                </span>
              </div>
              <div
                className="score-bar"
                role="meter"
                aria-label={label}
                aria-valuenow={score}
                aria-valuemin={0}
                aria-valuemax={10}
              >
                <motion.div
                  className="score-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${score * 10}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.9,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: i * 0.1,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Practical info ──────────────────────────────────── */}
      <div className="space-y-5">
        <div>
          <p className="eyebrow mb-2">Practicidades</p>
          <h2 className="heading-3">Antes de salir</h2>
        </div>

        {/* Walking difficulty */}
        <div className="card p-5 space-y-3">
          <p className="caption uppercase tracking-widest">Dificultad para caminar</p>
          <div className="flex items-center gap-3">
            <div
              className={cn("h-2.5 w-2.5 rounded-full shrink-0", walking.dot)}
              aria-hidden
            />
            <span className={cn("text-base font-semibold", walking.color)}>
              {walking.label}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{walking.detail}</p>
        </div>

        {/* Safety */}
        <div className="card p-5 space-y-3">
          <p className="caption uppercase tracking-widest">Seguridad</p>
          <div className="flex items-center gap-3">
            <div
              className="flex gap-0.5"
              role="img"
              aria-label={`Seguridad: ${city.safety} de 5`}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  className={cn(
                    "h-4 w-4",
                    n <= city.safety
                      ? "fill-accent text-accent"
                      : "fill-muted text-muted-foreground/30"
                  )}
                  strokeWidth={1}
                />
              ))}
            </div>
            <span className={cn("text-base font-semibold", safety.color)}>
              {safety.label}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{safety.detail}</p>
        </div>

        {/* Temperature */}
        <div className="card p-5 space-y-3">
          <p className="caption uppercase tracking-widest">Temperatura media</p>
          <div className="grid grid-cols-2 divide-x divide-border">
            <div className="text-center pr-4">
              <p className="font-heading text-3xl font-semibold text-accent leading-none">
                {city.temperatureSpring}°
              </p>
              <p className="text-xs text-muted-foreground mt-1.5">Primavera</p>
            </div>
            <div className="text-center pl-4">
              <p className="font-heading text-3xl font-semibold text-accent leading-none">
                {city.temperatureSummer}°
              </p>
              <p className="text-xs text-muted-foreground mt-1.5">Verano</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
