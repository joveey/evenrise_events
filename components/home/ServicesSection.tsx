"use client";

import { motion, type Variants } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";

const SERVICES = [
  {
    index: "01",
    title: "Tech Summits & Keynote Conferences",
    description:
      "Flagship developer conferences, C-level tech summits, and multi-track congresses delivered with curved panoramic LED scenography and broadcast-grade production.",
    capabilities: [
      "Curved LED Video Walls & Cyber Stage",
      "Multi-Track Agenda & Speaker Protocol",
      "Simultaneous Interpretation & 4K Stream",
    ],
  },
  {
    index: "02",
    title: "Enterprise IT Expos & Product Reveals",
    description:
      "Immersive exhibition environments, modular developer demo pods, and dramatic tech hardware launches designed to maximize developer engagement.",
    capabilities: [
      "Interactive Demo Pod Engineering",
      "Experiential Tech Booth Builds",
      "Real-Time Digital Badge & Flow Control",
    ],
  },
  {
    index: "03",
    title: "Developer Hackathons & Code Arenas",
    description:
      "48-hour continuous coding marathons, capture-the-flag competitions, and innovation challenges backed by redundant gigabit networks.",
    capabilities: [
      "Redundant High-Density Wi-Fi / Fiber",
      "24/7 War Room & Power Infrastructure",
      "Live Code Projection & Jury Consoles",
    ],
  },
  {
    index: "04",
    title: "Technical Bootcamps & Hands-on Workshops",
    description:
      "Intensive architecture training tracks and deep-dive technical workshops fostering hands-on code labs and engineering breakthroughs.",
    capabilities: [
      "Dedicated Lab Pod Setup & Audio Sync",
      "Executive Delegate Tech Amenities",
      "Interactive Live Q&A & Code Polling",
    ],
  },
  {
    index: "05",
    title: "Tech Leadership Awards & CISO Dinners",
    description:
      "Prestige tech accolade evenings, investor networking dinners, and invitation-only CISO roundtables executed with refined luxury and discretion.",
    capabilities: [
      "5-Star Venue Curation & Ambient Tech Lighting",
      "Multi-Camera Award Show Direction",
      "VIP C-Suite Protocol & Privacy",
    ],
  },
  {
    index: "06",
    title: "Hybrid Broadcasts & Multi-Hub Streams",
    description:
      "Synchronous multi-city tech broadcasts connecting physical developer hubs across Jakarta, Singapore, and global hubs via ultra-low latency feeds.",
    capabilities: [
      "Multi-City Low Latency Uplinks",
      "Enterprise Interactive Streaming Portals",
      "Post-Event Tech VOD & Telemetry",
    ],
  },
] as const;

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-cream border-t border-cream-darker"
    >
      <div className="container-site">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full mb-14 md:mb-18 text-center flex flex-col items-center"
        >
          <div className="max-w-2xl flex flex-col items-center">
            <motion.h2
              variants={fadeUp}
              id="services-heading"
              className="font-heading text-4xl font-light leading-tight tracking-tight text-navy sm:text-5xl"
            >
              Services Engineered for{" "}
              <em className="italic">Technology Leaders</em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 font-body text-base leading-relaxed text-text-secondary max-w-xl"
            >
              End-to-end event management frameworks built specifically for developer ecosystems, enterprise IT scale, and zero-downtime execution.
            </motion.p>
          </div>
        </motion.div>

        {/* Architectural Services Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="border-b border-r border-cream-darker bg-white/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 shadow-[0_4px_24px_rgba(11,27,51,0.03)]"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={fadeUp} className="h-full">
              <ServiceCard
                index={service.index}
                title={service.title}
                description={service.description}
                capabilities={service.capabilities}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
