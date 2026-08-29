"use client";

// ─── Client Logo Strip ──────────────────────────────────────────────────────────
// CSS marquee, no external library needed.
// Logos are rendered as styled wordmarks for a clean, unified look.

const CLIENTS = [
  { name: "Pertamina", style: "font-heading text-lg font-light tracking-widest" },
  { name: "Mandiri Bank", style: "font-body text-sm font-semibold tracking-wider" },
  { name: "GoTo Group", style: "font-heading text-xl font-light" },
  { name: "Tokopedia", style: "font-body text-sm font-bold tracking-tight" },
  { name: "Bank BRI", style: "font-body text-sm font-semibold tracking-widest" },
  { name: "Telkom", style: "font-heading text-lg font-light tracking-wide" },
  { name: "Unilever", style: "font-body text-xs font-bold tracking-[0.3em] uppercase" },
  { name: "Astra", style: "font-heading text-xl font-light tracking-widest" },
];

export default function LogoStripSection() {
  // Duplicate items to create seamless marquee
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <section className="bg-cream-dark/60 border-y border-cream-darker py-12 overflow-hidden">
      <div className="container-site mb-8 text-center">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-text-muted">
          Trusted by Fortune 500 & Top Enterprise Brands Across Indonesia
        </p>
      </div>

      {/* Marquee wrapper */}
      <div className="relative overflow-hidden">
        {/* Fade masks */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 sm:w-48"
          style={{ background: "linear-gradient(to right, #EDE9E0, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 sm:w-48"
          style={{ background: "linear-gradient(to left, #EDE9E0, transparent)" }}
          aria-hidden="true"
        />

        {/* The scrolling strip */}
        <div className="flex w-max animate-marquee items-center" aria-hidden="true">
          {items.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="mx-8 flex shrink-0 items-center rounded-xl border border-cream-darker bg-white/70 px-6 py-3 shadow-[0_2px_8px_rgba(11,27,51,0.04)] backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-white hover:shadow-md"
            >
              <span className={`${client.style} text-navy/70 select-none transition-colors duration-200 hover:text-navy`}>
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible version for screen readers */}
      <p className="sr-only">
        Our clients include: {CLIENTS.map(c => c.name).join(", ")}
      </p>
    </section>
  );
}
