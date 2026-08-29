"use client";

import { motion } from "framer-motion";

const PHASES = [
  {
    phase: "Phase 01",
    title: "Strategic Brief & Curation",
    description:
      "Comprehensive stakeholder alignment, audience profiling, core KPI definition, and thematic narrative development.",
    deliverables: ["Scope Definition", "Budget Modeling", "Venue Feasibility"],
  },
  {
    phase: "Phase 02",
    title: "Spatial & Technical Architecture",
    description:
      "3D venue spatial mapping, acoustic engineering, custom stage drafting, and technical vendor consortium assembly.",
    deliverables: ["Stage & AV Blueprint", "Vendor Master Contracts", "Run-of-Show Draft"],
  },
  {
    phase: "Phase 03",
    title: "Precision Live Execution",
    description:
      "Command center management, time-coded cue calling, VIP protocol handling, and live broadcast transmission control.",
    deliverables: ["On-Site Stage Directors", "Live Audience Logistics", "Risk Contingency Ops"],
  },
  {
    phase: "Phase 04",
    title: "Analytics & Executive Debrief",
    description:
      "Comprehensive attendee satisfaction evaluation, media impression audit, asset archiving, and final fiscal reconciliation.",
    deliverables: ["Post-Event ROI Report", "Digital Asset Archive", "Vendor Reconciliations"],
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-cream-dark/40 border-t border-cream-darker" id="process">
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
              From Brief to{" "}
              <em className="italic">Brilliant</em>
            </h2>
            <p className="mt-4 font-body text-base text-text-secondary leading-relaxed max-w-xl">
              A structured operational delivery methodology refined across 150+ high-stakes summits, galas, and enterprise productions.
            </p>
          </div>
        </motion.div>

        {/* Milestone Timeline Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PHASES.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative flex flex-col justify-between rounded-xl border border-cream-darker bg-white p-7 transition-all duration-300 hover:border-gold/60 hover:shadow-md"
            >
              <div>
                {/* Phase Badge & Step Indicator */}
                <div className="flex items-center justify-between pb-4 border-b border-cream-darker">
                  <span className="font-mono text-xs font-semibold tracking-wider text-gold">
                    {item.phase}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-gold/40" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="mt-5 font-body text-lg font-bold text-navy leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2.5 font-body text-xs leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>

              {/* Key Deliverables Tag List */}
              <div className="mt-6 pt-4 border-t border-cream-darker/60">
                <p className="font-body text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-2">
                  Key Deliverables
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.deliverables.map((del) => (
                    <span
                      key={del}
                      className="rounded bg-cream px-2 py-0.5 font-body text-[10px] text-navy/80 border border-cream-darker"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
