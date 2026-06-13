import { Anchor } from "lucide-react";

interface MessageCardProps {
  message: string;
  from: string;
}

export function MessageCard({ message, from }: MessageCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative rounded-sm border-4 border-primary shadow-2xl overflow-hidden bg-card">
        {/* Gold corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent pointer-events-none" />

        {/* Inner subtle border */}
        <div className="absolute inset-4 border border-accent/20 rounded-sm pointer-events-none" />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center px-12 py-16 md:px-20 md:py-20 text-center">
          {/* Anchor icon */}
          <Anchor
            className="w-12 h-12 md:w-14 md:h-14 text-primary mb-8"
            strokeWidth={1.5}
            aria-hidden
          />

          {/* Opening quote mark */}
          <span
            className="absolute top-12 left-6 md:top-16 md:left-14 text-7xl md:text-8xl text-accent/15 leading-none select-none pointer-events-none font-heading"
            aria-hidden
          >
            &ldquo;
          </span>

          {/* Message */}
          <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground font-medium mb-10 relative z-10">
            {message}
          </blockquote>

          {/* Closing quote mark */}
          <span
            className="absolute bottom-12 right-6 md:bottom-16 md:right-14 text-7xl md:text-8xl text-accent/15 leading-none select-none pointer-events-none font-heading"
            aria-hidden
          >
            &rdquo;
          </span>

          {/* Decorative rule */}
          <div className="w-20 h-px bg-accent mb-6" />

          {/* Signature */}
          <p className="caption mb-1 tracking-widest uppercase text-muted-foreground">
            Con todo nuestro amor
          </p>
          <p className="font-body text-lg font-semibold text-primary">{from}</p>
        </div>
      </div>
    </div>
  );
}
