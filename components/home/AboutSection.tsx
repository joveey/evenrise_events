"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useRef } from "react";

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "150+", label: "Events Delivered" },
  { value: "200+", label: "Satisfied Clients" },
  { value: "8+",   label: "Years of Experience" },
];

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding overflow-hidden bg-cream"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-28">

          {/* ── Left: Image column ─────────────────────────────────────────── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            className="relative"
          >
            {/* Main photo */}
            <div className="relative aspect-[4/5] w-full max-w-[500px] overflow-hidden rounded-2xl shadow-[0_32px_80px_-16px_rgba(11,27,51,0.18)]">
              <Image
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=85&auto=format&fit=crop"
                alt="Elegant event venue set up by EvenRise Events"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
              {/* Bottom gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(11,27,51,0.35) 0%, transparent 55%)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -right-4 hidden flex-col rounded-xl bg-navy px-7 py-5 shadow-[0_12px_40px_-4px_rgba(11,27,51,0.35)] sm:flex lg:-right-10"
              aria-hidden="true"
            >
              <span
                className="font-heading text-4xl font-light leading-none"
                style={{
                  background: "linear-gradient(135deg, #F0D882 0%, #C9A24B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                150+
              </span>
              <span className="mt-1.5 font-body text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
                Events Delivered
              </span>
            </div>

            {/* Corner gold border accent */}
            <div
              className="pointer-events-none absolute -left-4 -top-4 hidden h-24 w-24 lg:block"
              style={{
                border: "1.5px solid rgba(201,162,75,0.4)",
                borderRadius: "1rem",
              }}
              aria-hidden="true"
            />
          </motion.div>

          {/* ── Right: Text column ─────────────────────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span
                className="block h-px w-9"
                style={{
                  background: "linear-gradient(90deg, #C9A24B 0%, rgba(201,162,75,0.25) 100%)",
                }}
                aria-hidden="true"
              />
              <p className="font-body text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
                Who We Are
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              id="about-heading"
              className="mt-5 font-heading text-4xl font-light leading-tight tracking-tight text-navy sm:text-5xl"
            >
              The Partner Behind{" "}
              <em className="italic">Every Great Event</em>
            </motion.h2>

            {/* Gold divider */}
            <motion.span
              variants={fadeUp}
              className="gold-divider mt-8"
              aria-hidden="true"
            />

            {/* Body copy */}
            <motion.div variants={fadeUp} className="mt-8 space-y-5">
              <p className="font-body text-[0.9375rem] leading-[1.85] text-text-secondary">
                EvenRise Events was built on a simple belief: every gathering is
                a story worth telling beautifully. We are a dedicated team of
                event professionals committed to crafting experiences that are
                memorable, seamless, and distinctly yours.
              </p>
              <p className="font-body text-[0.9375rem] leading-[1.85] text-text-secondary">
                From large-scale corporate summits to intimate private
                celebrations, we manage every detail — concept, logistics,
                vendors, and on-the-day execution — so you can be fully present
                in the moments that matter most.
              </p>
              <p className="font-body text-[0.9375rem] leading-[1.85] text-text-secondary">
                Structured in approach, flexible in practice: EvenRise is not
                just a vendor — we are your long-term strategic event partner.
              </p>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-3 gap-4 border-t border-cream-dark pt-8"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="font-heading text-3xl font-light leading-none sm:text-[2.5rem]"
                    style={{
                      background: "linear-gradient(135deg, #C9A24B 0%, #9C7A2E 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-1.5 font-body text-[11px] leading-snug text-text-secondary">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
