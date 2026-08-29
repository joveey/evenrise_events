import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

/**
 * A concise, reusable presentation for an EvenRise service offering.
 * The parent controls its responsive grid placement.
 */
export function ServiceCard({
  icon: Icon,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group h-full rounded-xl border border-navy/10 bg-white p-7 shadow-[var(--shadow-card)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-gold/70 hover:shadow-[var(--shadow-gold)] sm:p-8",
        className
      )}
    >
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-gold-subtle text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
        <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
      </div>

      <h3 className="font-heading text-2xl font-semibold leading-tight text-navy">
        {title}
      </h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
    </article>
  );
}

export type { ServiceCardProps };
