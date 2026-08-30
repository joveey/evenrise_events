"use client";

// ─── Tech Partner & Enterprise Client Logo Strip ──────────────────────────────
const TECH_PARTNERS = [
  { name: "GoTo Group", style: "font-heading text-xl font-medium tracking-tight" },
  { name: "AWS Ecosystem", style: "font-body text-sm font-bold tracking-wider uppercase" },
  { name: "Google Cloud Partner", style: "font-body text-sm font-semibold tracking-tight" },
  { name: "Telkom Digital", style: "font-heading text-lg font-light tracking-wide" },
  { name: "Microsoft Partner", style: "font-body text-sm font-bold tracking-tight" },
  { name: "Bank Mandiri Tech", style: "font-body text-sm font-semibold tracking-wide" },
  { name: "Tokopedia Engineering", style: "font-body text-sm font-bold tracking-tight" },
  { name: "Traveloka Tech", style: "font-heading text-lg font-light tracking-widest" },
  { name: "DANA FinTech", style: "font-body text-sm font-bold tracking-wider" },
];

export default function LogoStripSection() {
  const items = [...TECH_PARTNERS, ...TECH_PARTNERS];

  return (
    <section className="bg-cream-dark/60 border-y border-cream-darker py-10 overflow-hidden">
      <div className="container-site mb-6 text-center">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-text-muted">
          Trusted by Premier Technology Ecosystems & Enterprise Leaders
        </p>
      </div>

      {/* Marquee wrapper */}
      <div className="relative overflow-hidden">
        {/* The scrolling strip */}
        <div className="flex w-max animate-marquee items-center" aria-hidden="true">
          {items.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="mx-6 flex shrink-0 items-center rounded-2xl border border-cream-darker bg-white/80 px-6 py-3 shadow-[0_2px_8px_rgba(11,27,51,0.04)] backdrop-blur-sm transition-all duration-300 hover:border-gold/50 hover:bg-white hover:shadow-md"
            >
              <span className={`${client.style} text-navy/75 select-none transition-colors duration-200 hover:text-navy`}>
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible version for screen readers */}
      <p className="sr-only">
        Our tech partners and enterprise clients include: {TECH_PARTNERS.map(c => c.name).join(", ")}
      </p>
    </section>
  );
}
