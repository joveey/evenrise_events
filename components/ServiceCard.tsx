import { cn } from "@/lib/utils";

type ServiceCardProps = {
  index: string;
  title: string;
  description: string;
  capabilities: readonly string[];
  className?: string;
};

/**
 * Service card — Architectural Editorial Layout.
 * Clean, bespoke, high-end agency aesthetic (zero AI-template tropes).
 */
export function ServiceCard({
  index,
  title,
  description,
  capabilities,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col justify-between bg-white/60 p-8 sm:p-10 transition-all duration-300",
        "border-t border-l border-cream-darker first:border-l-0 sm:[&:nth-child(2n+1)]:border-l-0 lg:[&:nth-child(2n+1)]:border-l lg:[&:nth-child(3n+1)]:border-l-0",
        "hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(11,27,51,0.08)]",
        className
      )}
    >
      {/* Subtle top indicator line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />

      <div>
        {/* Index number & subtle category indicator */}
        <div className="flex items-center justify-between pb-6 border-b border-cream-darker">
          <span className="font-mono text-xs font-semibold tracking-widest text-gold">
            {index}
          </span>
          <span className="font-body text-[11px] font-medium tracking-wider text-text-muted uppercase opacity-60 group-hover:opacity-100 transition-opacity">
            B2B Scope
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-6 font-body text-xl font-bold leading-snug tracking-tight text-navy">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 font-body text-[0.9375rem] leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>

      {/* Capabilities List */}
      <div className="mt-8 pt-6 border-t border-cream-darker/60">
        <ul className="space-y-2">
          {capabilities.map((cap) => (
            <li key={cap} className="flex items-center gap-2.5 font-body text-xs text-navy/70">
              <span className="h-1 w-1 rounded-full bg-gold shrink-0" aria-hidden="true" />
              <span>{cap}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export type { ServiceCardProps };
