"use client";

import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Briefcase,
  Heart,
  Package,
  BookOpen,
  Star,
  MonitorSmartphone,
} from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

// ─── Services Data (English) ──────────────────────────────────────────────────
const SERVICES = [
  {
    icon: Briefcase,
    title: "Corporate Events & Conferences",
    description:
      "Annual meetings, town halls, product launches, and national or international conferences — designed and executed with precision from start to finish.",
  },
  {
    icon: Heart,
    title: "Weddings & Private Celebrations",
    description:
      "From intimate ceremonies to grand receptions and milestone celebrations — every detail is thoughtfully crafted to create memories that last a lifetime.",
  },
  {
    icon: Package,
    title: "Exhibitions & Product Launches",
    description:
      "Trade shows, exhibition booths, and product reveals that command attention — we ensure your brand makes a lasting impression on every attendee.",
  },
  {
    icon: BookOpen,
    title: "Seminars & Workshops",
    description:
      "From inspiring keynotes to intensive training sessions — we handle all technical and logistical needs so your participants stay focused on the content.",
  },
  {
    icon: Star,
    title: "Gala Dinners & Award Nights",
    description:
      "Prestigious award ceremonies and elegant gala evenings that leave guests with a deep sense of occasion — elevated atmosphere, flawless execution.",
  },
  {
    icon: MonitorSmartphone,
    title: "Virtual & Hybrid Events",
    description:
      "Reach a wider audience with no geographic limits. Professional streaming platforms, real-time engagement, and broadcast-quality production values.",
  },
] as const;

// ─── Animation Variants ────────────────────────────────────────────────────────
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding overflow-hidden"
      style={{ background: "linear-gradient(180deg, #EDE9E0 0%, #F7F5F0 100%)" }}
    >
      <div className="container-site">
        {/* ── Section Header ───────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          className="mb-16 text-center md:mb-20"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3">
            <span
              className="h-px w-8"
              style={{ background: "linear-gradient(90deg, transparent 0%, #C9A24B 100%)" }}
              aria-hidden="true"
            />
            <p className="font-body text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              What We Offer
            </p>
            <span
              className="h-px w-8"
              style={{ background: "linear-gradient(90deg, #C9A24B 0%, transparent 100%)" }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            id="services-heading"
            className="mt-4 font-heading text-4xl font-light leading-tight tracking-tight text-navy sm:text-5xl"
          >
            Services Tailored to{" "}
            <em className="italic">Every Occasion</em>
          </motion.h2>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-lg font-body text-[0.9375rem] leading-relaxed text-text-secondary"
          >
            From intimate gatherings to grand productions — we bring the same
            level of care, professionalism, and attention to detail to every event we touch.
          </motion.p>
        </motion.div>

        {/* ── Services Grid ────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={fadeUp}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
