"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "EvenRise orchestrated our annual leadership summit for 400+ delegates seamlessly. Every dimension was executed with military precision — staging, AV, VIP logistics, and master timing. Our board of directors and global partners were deeply impressed.",
    author: "Rina Hartati",
    role: "Head of Corporate Affairs",
    company: "Pertamina (Persero)",
    event: "Annual Leadership Summit",
  },
  {
    quote:
      "Having worked with multiple agencies across APAC, EvenRise is in an entirely distinct echelon. Their proactive problem-solving, aesthetic sophistication, and on-the-ground composure transformed our high-stakes event into an unforgettable standard.",
    author: "Dimas Prasetyo",
    role: "Marketing Director",
    company: "GoTo Group",
    event: "Regional Partner Conference",
  },
  {
    quote:
      "Our national product unveiling exceeded every internal KPI. Spatial scenography, media broadcast synchronization, and delegate journey flow were executed without a single flaw. EvenRise is our indispensable strategic partner.",
    author: "Sari Wulandari",
    role: "Brand Experience Manager",
    company: "Unilever Indonesia",
    event: "National Product Reveal",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="section-padding bg-cream border-t border-cream-darker"
    >
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full mb-14 md:mb-18 text-center flex flex-col items-center"
        >
          <div className="max-w-2xl flex flex-col items-center">
            <h2 className="font-heading text-4xl font-light leading-tight text-navy sm:text-5xl">
              What Our Clients{" "}
              <em className="italic">Say</em>
            </h2>
            <p className="mt-4 font-body text-base text-text-secondary leading-relaxed max-w-xl">
              Trusted by corporate affairs heads, brand directors, and enterprise leadership across Southeast Asia.
            </p>
          </div>
        </motion.div>

        {/* Editorial Endorsement Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="relative flex flex-col justify-between rounded-xl border border-cream-darker bg-white p-8 sm:p-9 shadow-[0_4px_20px_rgba(11,27,51,0.03)] transition-all duration-300 hover:border-gold/40 hover:shadow-lg"
            >
              <div>
                {/* Event Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-cream-darker">
                  <span className="font-body text-[11px] font-semibold tracking-wider text-gold uppercase">
                    {t.event}
                  </span>
                  <span className="font-heading text-2xl text-gold/40 font-serif">“</span>
                </div>

                {/* Quote text */}
                <blockquote className="mt-5 font-body text-[0.9375rem] leading-relaxed text-navy/85 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-5 border-t border-cream-darker flex flex-col">
                <p className="font-body text-base font-bold text-navy">{t.author}</p>
                <p className="font-body text-xs text-text-muted mt-0.5">{t.role}</p>
                <p className="font-body text-xs font-semibold text-gold mt-1">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
