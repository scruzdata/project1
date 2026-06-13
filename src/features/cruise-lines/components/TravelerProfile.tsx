import { Heart, Users, Calendar } from "lucide-react";
import type { CruiseLine } from "@/types";
import { atmosphereLabel } from "../cruise-lines.config";

interface TravelerProfileProps {
  cruiseLine: CruiseLine;
}

export function TravelerProfile({ cruiseLine }: TravelerProfileProps) {
  return (
    <div className="card p-6 md:p-8 space-y-6">
      <h4 className="heading-4">Perfil del viajero ideal</h4>

      <div className="grid sm:grid-cols-3 gap-6">
        <div className="flex gap-3">
          <Heart
            className="h-5 w-5 text-accent shrink-0 mt-0.5"
            strokeWidth={1.5}
          />
          <div className="space-y-1.5">
            <p className="eyebrow">Ideal para</p>
            <ul className="space-y-1">
              {cruiseLine.idealFor.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-3">
          <Users
            className="h-5 w-5 text-accent shrink-0 mt-0.5"
            strokeWidth={1.5}
          />
          <div className="space-y-1.5">
            <p className="eyebrow">Ambiente</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {atmosphereLabel[cruiseLine.atmosphere]}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Calendar
            className="h-5 w-5 text-accent shrink-0 mt-0.5"
            strokeWidth={1.5}
          />
          <div className="space-y-1.5">
            <p className="eyebrow">Edad media del pasajero</p>
            <p className="text-sm text-muted-foreground">
              {cruiseLine.averagePassengerAge} años
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
