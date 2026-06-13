import { CheckCircle2, AlertCircle } from "lucide-react";

interface ProsConsCardProps {
  strengths: string[];
  weaknesses: string[];
}

export function ProsConsCard({ strengths, weaknesses }: ProsConsCardProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="card p-6 space-y-4">
        <h4 className="heading-4">Puntos fuertes</h4>
        <ul className="space-y-3">
          {strengths.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2
                className="h-5 w-5 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0"
                strokeWidth={1.5}
              />
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-6 space-y-4">
        <h4 className="heading-4">A tener en cuenta</h4>
        <ul className="space-y-3">
          {weaknesses.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <AlertCircle
                className="h-5 w-5 text-amber-500 dark:text-amber-400 mt-0.5 shrink-0"
                strokeWidth={1.5}
              />
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
