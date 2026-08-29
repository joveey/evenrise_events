"use client";

import { motion, type Variants } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";

const SERVICES = [
  {
    index: "01",
    title: "Corporate Summits & Leadership Forums",
    description:
      "High-level regional conferences, C-suite roundtables, and annual general meetings delivered with precision protocol and broadcast-grade technical execution.",
    capabilities: [
      "Keynote Stage & Curved LED Scenography",
      "VIP Delegate Protocol & C-Suite Logistics",
      "Simultaneous Interpretation & Live Broadcast",
    ],
  },
  {
    index: "02",
    title: "Trade Exhibitions & Brand Pavilions",
    description:
      "World-class exhibition environments, custom modular pavilions, and immersive product reveal staging designed to maximize brand influence.",
    capabilities: [
      "Architectural Booth Engineering & Build",
      "Experiential Technology & Interactive Demos",
      "Delegate Flow & Badge Registration Systems",
    ],
  },
  {
    index: "03",
    title: "Annual Galas & Prestige Award Ceremonies",
    description:
      "Black-tie gala dinners and industry accolade evenings characterized by dramatic lighting, five-star culinary orchestration, and flawless stage timing.",
    capabilities: [
      "Fine Dining Tabletop & Floral Artistry",
      "Award Production & Multi-Camera Show Calling",
      "Celebrity Entertainment & Orchestral Curation",
    ],
  },
  {
    index: "04",
    title: "Executive Seminars & Thought-Leadership",
    description:
      "Curated knowledge-sharing formats and executive workshop tracks that cultivate high engagement, strategic dialogue, and productive collaboration.",
    capabilities: [
      "Acoustic & Audio Optimization",
      "Executive Hospitality & Delegate Kits",
      "Interactive Q&A & Real-Time Polling",
    ],
  },
  {
    index: "05",
    title: "Bespoke Celebrations & Private Galas",
    description:
      "Discreet, highly curated landmark anniversaries and private milestones designed with timeless architectural styling and uncompromising hospitality.",
    capabilities: [
      "5-Star Destination Venue Scouting",
      "Custom Spatial Atmosphere & Lighting",
      "Dedicated Private Concierge Team",
    ],
  },
  {
    index: "06",
    title: "Hybrid & Multi-City Broadcast Summits",
    description:
      "Synchronous multi-hub productions connecting physical stages across Jakarta, Singapore, and regional financial centers via low-latency secure streaming.",
    capabilities: [
      "Multi-City Live Satellite/Fiber Feeds",
      "Secure Enterprise Streaming Portals",
      "Post-Event Analytics & On-Demand Replay",
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
              Services Tailored to{" "}
              <em className="italic">Every Occasion</em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 font-body text-base leading-relaxed text-text-secondary max-w-xl"
            >
              End-to-end event management frameworks built for corporate excellence, institutional scale, and uncompromising precision.
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
