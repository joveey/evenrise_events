"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import NumberFlow from "@number-flow/react";

const DIFFERENTIATORS = [
  {
    index: "01",
    title: "Institutional-Grade Project Governance",
    description:
      "Single-point accountability from executive strategy through post-show financial audit, eliminating cross-vendor friction and logistical blindspots.",
  },
  {
    index: "02",
    title: "Vetted Tier-1 Production Ecosystem",
    description:
      "Exclusive access to ASEAN's premier staging engineers, broadcast technologists, and five-star culinary partners developed over 8+ years.",
  },
  {
    index: "03",
    title: "Zero-Failure Execution Culture",
    description:
      "Time-coded cue sheets, multi-redundancy AV contingencies, and on-site protocol marshals ensuring flawless timing down to the second.",
  },
];

const STATS = [
  { value: 150, suffix: "+", label: "Major Summits Delivered", sub: "Across Indonesia & ASEAN" },
  { value: 8,   suffix: "+", label: "Years Industry Tenure", sub: "Uncompromised Heritage" },
  { value: 98,  suffix: "%", label: "C-Suite Satisfaction", sub: "Independent Client Audits" },
  { value: 200, suffix: "+", label: "Enterprise Partnerships", sub: "Fortune 500 & Conglomerates" },
];

function StatCard({ stat, inView }: { stat: typeof STATS[0]; inView: boolean }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 lg:p-7 backdrop-blur-sm">
      <p className="font-heading text-4xl lg:text-5xl font-light leading-none">
        <span style={{
          background: "linear-gradient(135deg, #F9E7B3 0%, #C9A24B 60%, #9C7A2E 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          {inView ? (
            <NumberFlow value={stat.value} />
          ) : (
            "0"
          )}
          {stat.suffix}
        </span>
      </p>
      <p className="mt-3 font-body text-xs font-semibold text-white tracking-wide">
        {stat.label}
      </p>
      <p className="mt-1 font-body text-[11px] text-white/40">
        {stat.sub}
      </p>
    </div>
  );
}

export default function WhyChooseUsSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section className="relative bg-navy py-28 md:py-36 overflow-hidden" id="why-us">
      {/* Decorative glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 100% 50%, rgba(30,58,95,0.7) 0%, transparent 70%)",
        }}
      />

      <div className="container-site relative z-10">
        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full mb-16 md:mb-20 text-center flex flex-col items-center"
        >
          <div className="max-w-2xl flex flex-col items-center">
            <h2 className="font-heading text-4xl font-light text-white sm:text-5xl">
              The EvenRise{" "}
              <em className="italic" style={{
                background: "linear-gradient(135deg, #F9E7B3 0%, #C9A24B 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Difference
              </em>
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-white/60 max-w-xl">
              Institutional rigor, proven stakeholder governance, and uncompromising spatial standards.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left — Differentiator Pillars */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-white/10 border-y border-white/10">
            {DIFFERENTIATORS.map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                className="py-7 flex items-start gap-6 group"
              >
                <span className="font-mono text-sm font-semibold text-gold shrink-0 mt-0.5">
                  {diff.index}
                </span>
                <div>
                  <h3 className="font-body text-lg font-bold leading-snug text-white group-hover:text-gold-light transition-colors">
                    {diff.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-white/60">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — Stats Grid & Quote */}
          <div ref={statsRef} className="lg:col-span-6 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <StatCard stat={stat} inView={statsInView} />
                </motion.div>
              ))}
            </div>

            {/* Quote Lockup */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
            >
              <p className="font-heading text-lg italic font-light leading-relaxed text-white/80">
                &ldquo;Every event we deliver is a direct reflection of our clients&apos; executive reputation — precision is our only standard.&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-gold">
                  EvenRise Executive Operations
                </span>
                <span className="font-body text-[11px] text-white/40">Jakarta, Indonesia</span>
              </div>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
