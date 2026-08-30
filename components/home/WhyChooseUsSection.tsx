"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import NumberFlow from "@number-flow/react";

const DIFFERENTIATORS = [
  {
    index: "01",
    title: "High-Density Gigabit & Network Reliability",
    description:
      "Dedicated multi-gigabit fiber uplinks, enterprise Wi-Fi engineered for 5,000+ concurrent developer devices, and isolated war-room subnets with zero packet loss.",
  },
  {
    index: "02",
    title: "Broadcast-Grade Stage & Curved LED Scenography",
    description:
      "Ultra-wide 4K panoramic LED displays, low-latency live code mirroring, multi-camera technical show direction, and synchronized dynamic stage lighting.",
  },
  {
    index: "03",
    title: "Developer Ecosystem & Hackathon Operations",
    description:
      "24/7 continuous operations for coding marathons, automated RFID/QR badge tracking, interactive demo pod engineering, and live digital jury consoles.",
  },
];

const STATS = [
  { value: 150, suffix: "+", label: "Tech Events Delivered", sub: "Summits, Expos & Hackathons" },
  { value: 8,   suffix: "+", label: "Years IT Tenure", sub: "Enterprise Proven Track Record" },
  { value: 99,  suffix: "%", label: "Network & Stream Uptime", sub: "Zero-Downtime Guarantee" },
  { value: 200, suffix: "+", label: "Enterprise Tech Partners", sub: "Tech Titans, Unicorns & VCs" },
];

function StatCard({ stat, inView }: { stat: typeof STATS[0]; inView: boolean }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 lg:p-7 backdrop-blur-md transition-all duration-300 hover:border-gold/50 hover:bg-white/[0.07]">
      <p className="font-heading text-4xl lg:text-5xl font-light text-gold-light leading-none">
        {inView ? (
          <NumberFlow value={stat.value} />
        ) : (
          "0"
        )}
        {stat.suffix}
      </p>
      <p className="mt-3 font-body text-xs font-semibold text-white tracking-wide">
        {stat.label}
      </p>
      <p className="mt-1 font-body text-[11px] text-slate-300">
        {stat.sub}
      </p>
    </div>
  );
}

export default function WhyChooseUsSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section className="relative bg-[#070E1E] py-20 md:py-28 overflow-hidden text-white" id="why-us">
      {/* Decorative glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 70% 55% at 100% 50%, rgba(30,58,95,0.75) 0%, transparent 70%)",
        }}
      />

      <div className="container-site relative z-10">
        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full mb-14 md:mb-18 text-center flex flex-col items-center"
        >
          <div className="max-w-2xl flex flex-col items-center">
            <h2 className="font-heading text-4xl font-light text-white sm:text-5xl">
              The EvenRise <span className="text-gold-light font-light italic">Advantage</span>
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-slate-200 max-w-xl">
              Engineered infrastructure, zero-failure technical execution, and deep understanding of developer ecosystems.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left — Differentiator Pillars */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-white/15 border-y border-white/15">
            {DIFFERENTIATORS.map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                className="py-6 sm:py-7 flex items-start gap-5 sm:gap-6 group"
              >
                <span className="font-mono text-sm font-bold text-gold-light shrink-0 mt-0.5">
                  {diff.index}
                </span>
                <div>
                  <h3 className="font-body text-lg font-bold leading-snug text-white group-hover:text-gold-light transition-colors">
                    {diff.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-slate-300">
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
              className="mt-6 sm:mt-8 rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-md"
            >
              <p className="font-heading text-lg italic font-light leading-relaxed text-slate-100">
                &ldquo;In high-stakes technology events, technical reliability is non-negotiable — every stage, stream, and subnet must perform with absolute perfection.&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-gold-light">
                  EvenRise Technical Operations
                </span>
                <span className="font-body text-[11px] text-slate-400">Jakarta, Indonesia</span>
              </div>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
