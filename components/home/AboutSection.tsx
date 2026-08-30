"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "150+", label: "Tech Summits & Expos" },
  { value: "200+", label: "Enterprise IT Clients" },
  { value: "99.9%", label: "Live Stream Uptime" },
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
            {/* Ambient gold glow behind image */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(201,162,75,0.4) 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            {/* Main photo */}
            <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-cream-darker shadow-[0_24px_60px_-12px_rgba(11,27,51,0.18)]">
              <Image
                src="/images/about-tech-production.jpg"
                alt="High-tech enterprise exhibition and conference experience zone produced by EvenRise Events"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
                unoptimized
              />
              {/* Bottom gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(11,27,51,0.45) 0%, transparent 60%)",
                }}
                aria-hidden="true"
              />
              
              {/* Badge overlay */}
              <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-navy/80 px-3.5 py-1 backdrop-blur-md">
                <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-gold-light">
                  Enterprise Tech Event Production
                </span>
              </div>
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -right-3 hidden flex-col rounded-2xl border border-gold/30 bg-navy px-8 py-5 shadow-[0_16px_40px_-4px_rgba(11,27,51,0.4)] sm:flex lg:-right-8"
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
              <span className="mt-1.5 font-body text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
                Tech Events Delivered
              </span>
            </div>
          </motion.div>

          {/* ── Right: Text column ─────────────────────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            className="flex flex-col"
          >
            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              id="about-heading"
              className="font-heading text-4xl font-light leading-tight tracking-tight text-navy sm:text-5xl"
            >
              Architects of{" "}
              <em className="italic">Transformative Tech Experiences</em>
            </motion.h2>

            {/* Gold divider */}
            <motion.span
              variants={fadeUp}
              className="gold-divider mt-8"
              aria-hidden="true"
            />

            {/* Body copy */}
            <motion.div variants={fadeUp} className="mt-8 space-y-5">
              <p className="font-body text-[0.9375rem] leading-relaxed text-text-secondary">
                EvenRise Events is a specialized event production agency engineered for the modern technology sector. We combine architectural stage design, enterprise IT networking, and broadcast-grade technical operations to deliver world-class experiences.
              </p>
              <p className="font-body text-[0.9375rem] leading-relaxed text-text-secondary">
                From high-stakes developer hackathons and multi-track AI summits to high-impact product reveals and interactive software expos — our teams manage end-to-end stage scenography, gigabit network reliability, speaker coordination, and seamless live execution.
              </p>
              <p className="font-body text-[0.9375rem] leading-relaxed text-text-secondary">
                Trusted by leading tech enterprises, venture capitals, and high-growth unicorns across Southeast Asia as their long-term strategic event partner.
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
