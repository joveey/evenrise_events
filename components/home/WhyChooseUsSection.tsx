"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Network, Gem } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: CheckCircle2,
    title: "End-to-End Coordination",
    description:
      "From the first brief to the final curtain call — we manage every layer so nothing falls through the cracks.",
  },
  {
    icon: Network,
    title: "Trusted Vendor Network",
    description:
      "Curated partnerships with top-tier caterers, AV specialists, decorators, and venues built over years of collaboration.",
  },
  {
    icon: Gem,
    title: "Detail-Driven Execution",
    description:
      "We believe the magic lives in the margins. Every timeline, placement, and cue is planned with exacting care.",
  },
];

const STATS = [
  { value: "150+", label: "Events Delivered" },
  { value: "10+", label: "Years of Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Trusted Partners" },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-navy py-24 relative" id="why-us">
      {/* Safe Decorative background, no overflow hidden on section itself */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent -translate-y-1/2" />
      </div>

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="mb-4 font-body text-xs font-medium uppercase tracking-widest text-gold text-gold-400 opacity-100"
            >
              Why Choose Us
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="font-heading text-4xl font-light text-white sm:text-5xl opacity-100"
            >
              The EvenRise <span className="italic text-gold">Difference</span>
            </motion.h2>

            <div className="mt-12 flex flex-col gap-8">
              {DIFFERENTIATORS.map((diff, index) => (
                <motion.div
                  key={diff.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 opacity-100"
                >
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
                    <diff.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {diff.title}
                    </h3>
                    <p className="mt-2 font-body text-sm text-white/70">
                      {diff.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column (Stats) */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border border-gold/20 bg-white/5 p-8 text-center opacity-100"
                >
                  <p className="font-heading text-4xl font-light text-gold sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-body text-xs font-medium uppercase tracking-widest text-white/50">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
