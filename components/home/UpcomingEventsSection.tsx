"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getFeaturedEvents } from "@/data/events";
import { EventCard } from "@/components/EventCard";

// ─── Animation Variants ───────────────────────────────────────────────────────
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function UpcomingEventsSection() {
  const events = getFeaturedEvents();

  return (
    <section
      id="upcoming-events"
      aria-labelledby="events-heading"
      className="section-padding bg-cream overflow-hidden"
    >
      <div className="container-site">
        {/* ── Section Header ────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          className="w-full mb-16 md:mb-20 text-center flex flex-col items-center"
        >
          <div className="max-w-xl flex flex-col items-center">
            <motion.h2
              variants={fadeUp}
              id="events-heading"
              className="font-heading text-4xl font-light leading-tight tracking-tight text-navy sm:text-5xl"
            >
              What We&apos;re Working On
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 font-body text-base leading-relaxed text-text-secondary"
            >
              A look at what our team is currently organising — and what&apos;s
              coming up next. Click any event to learn more.
            </motion.p>
          </div>
        </motion.div>

        {/* ── Events Grid ───────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        >
          {events.map((event) => (
            <motion.div key={event.id} variants={cardVariant}>
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── View All CTA ──────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/events"
            id="events-view-all"
            className="group inline-flex items-center gap-2.5 rounded-full border border-navy/20 px-8 py-3.5 font-body text-sm font-medium text-navy transition-all duration-200 hover:border-gold hover:text-gold"
          >
            View All Events
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
