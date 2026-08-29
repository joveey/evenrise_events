"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Search, CalendarX2, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/constants";
import {
  EVENTS,
  ALL_CATEGORIES,
  type EventCategory,
  type EventStatus,
} from "@/data/events";
import { EventCard } from "@/components/EventCard";

// ─── Filter types ─────────────────────────────────────────────────────────────
type StatusFilter = "all" | EventStatus;

const STATUS_OPTIONS: { value: StatusFilter; label: string }[] = [
  { value: "all",      label: "All Events" },
  { value: "upcoming", label: "Upcoming" },
  { value: "past",     label: "Past" },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit:   { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

// ─── Page Component ───────────────────────────────────────────────────────────
export default function EventsPage() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<EventCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const whatsappUrl = getWhatsAppUrl(
    "Hi EvenRise Events, I have an event in mind that I didn't see listed on your website. I'd love to discuss it with your team."
  );

  // ── Derived filtered list ────────────────────────────────────────────────
  const filteredEvents = useMemo(() => {
    return EVENTS.filter((event) => {
      if (statusFilter !== "all" && event.status !== statusFilter) return false;
      if (categoryFilter !== "all" && event.category !== categoryFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          event.title.toLowerCase().includes(q) ||
          event.location.toLowerCase().includes(q) ||
          (event.venue ?? "").toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [statusFilter, categoryFilter, searchQuery]);

  // ── Reset all filters ────────────────────────────────────────────────────
  const resetFilters = () => {
    setStatusFilter("all");
    setCategoryFilter("all");
    setSearchQuery("");
  };

  const hasActiveFilter =
    statusFilter !== "all" || categoryFilter !== "all" || searchQuery.trim() !== "";

  return (
    <div className="flex flex-col flex-1">

      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pb-20 pt-36"
        style={{
          background: "linear-gradient(155deg, #091526 0%, #0D1E35 50%, #16294A 100%)",
        }}
        aria-label="Events page header"
      >
        {/* Noise */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
          }}
          aria-hidden="true"
        />
        {/* Gold glow */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 -translate-y-1/4 translate-x-1/4"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,162,75,0.09) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        {/* Bottom gold rule */}
        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 10%, rgba(201,162,75,0.45) 50%, transparent 90%)",
          }}
          aria-hidden="true"
        />

        <div className="container-site relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-body text-[11px] text-white/40">
              <li>
                <Link href="/" className="transition-colors hover:text-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/25">
                /
              </li>
              <li className="text-white/60">Events</li>
            </ol>
          </nav>

          {/* Gold line */}
          <span
            className="mb-7 block h-px w-14"
            style={{
              background: "linear-gradient(90deg, #C9A24B 0%, rgba(201,162,75,0.15) 100%)",
            }}
            aria-hidden="true"
          />

          <h1 className="font-heading text-5xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
            Our{" "}
            <em
              className="not-italic"
              style={{
                background:
                  "linear-gradient(135deg, #F0D882 0%, #C9A24B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Events
            </em>
          </h1>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-white/55">
            A curated view of what EvenRise is currently organising — and what
            we&apos;ve delivered in the past. Click any event to learn more.
          </p>
        </div>
      </section>

      {/* ── Filters + Grid ──────────────────────────────────────────────────── */}
      <section className="flex-1 section-padding bg-cream" aria-label="Events catalog">
        <div className="container-site">

          {/* ── Search + Status pills row ────────────────────────────────── */}
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* Status pills */}
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by status">
              {STATUS_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setStatusFilter(opt.value)}
                  aria-pressed={statusFilter === opt.value}
                  className={cn(
                    "inline-flex items-center rounded-full px-5 py-2 font-body text-sm font-medium transition-all duration-200",
                    statusFilter === opt.value
                      ? "text-navy shadow-[0_2px_8px_rgba(201,162,75,0.3)]"
                      : "border border-navy/15 bg-white text-navy/60 hover:border-gold/50 hover:text-navy"
                  )}
                  style={
                    statusFilter === opt.value
                      ? {
                          background:
                            "linear-gradient(135deg, #E8C97A 0%, #C9A24B 60%, #9C7A2E 100%)",
                        }
                      : undefined
                  }
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Search input */}
            <div className="relative w-full max-w-xs">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <input
                type="search"
                placeholder="Search by title or location…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search events"
                className="w-full rounded-full border border-navy/15 bg-white py-2.5 pl-10 pr-4 font-body text-sm text-navy placeholder:text-text-muted focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors"
              />
            </div>
          </div>

          {/* ── Category pills row ────────────────────────────────────────── */}
          <div
            className="mb-10 flex flex-wrap items-center gap-2 border-b border-cream-dark pb-8"
            role="group"
            aria-label="Filter by category"
          >
            <button
              onClick={() => setCategoryFilter("all")}
              aria-pressed={categoryFilter === "all"}
              className={cn(
                "inline-flex items-center rounded-full px-4 py-1.5 font-body text-xs font-medium tracking-wide transition-all duration-200",
                categoryFilter === "all"
                  ? "bg-navy text-cream"
                  : "border border-navy/15 bg-white text-navy/55 hover:border-navy/30 hover:text-navy"
              )}
            >
              All Categories
            </button>
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                aria-pressed={categoryFilter === cat}
                className={cn(
                  "inline-flex items-center rounded-full px-4 py-1.5 font-body text-xs font-medium tracking-wide transition-all duration-200",
                  categoryFilter === cat
                    ? "bg-navy text-cream"
                    : "border border-navy/15 bg-white text-navy/55 hover:border-navy/30 hover:text-navy"
                )}
              >
                {cat}
              </button>
            ))}

            {/* Reset */}
            {hasActiveFilter && (
              <button
                onClick={resetFilters}
                className="ml-auto font-body text-xs text-text-muted underline-offset-2 transition-colors hover:text-gold hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* ── Results count ─────────────────────────────────────────────── */}
          <p className="mb-8 font-body text-sm text-text-muted">
            Showing{" "}
            <span className="font-medium text-navy">{filteredEvents.length}</span>{" "}
            {filteredEvents.length === 1 ? "event" : "events"}
            {hasActiveFilter && (
              <>
                {" "}
                for current filters
              </>
            )}
          </p>

          {/* ── Events Grid ───────────────────────────────────────────────── */}
          <AnimatePresence mode="wait">
            {filteredEvents.length > 0 ? (
              <motion.div
                key={`${statusFilter}-${categoryFilter}-${searchQuery}`}
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredEvents.map((event) => (
                  <motion.div key={event.id} variants={cardVariant}>
                    <EventCard event={event} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col items-center justify-center py-24 text-center"
                aria-live="polite"
              >
                <div
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{
                    background: "rgba(201,162,75,0.1)",
                    border: "1px solid rgba(201,162,75,0.25)",
                  }}
                >
                  <CalendarX2
                    className="h-7 w-7 text-gold/70"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-heading text-2xl text-navy">
                  No events found
                </h3>
                <p className="mt-2 max-w-xs font-body text-sm text-text-secondary">
                  No events match your current filter combination. Try adjusting
                  the filters or searching by a different term.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-6 rounded-full border border-navy/20 px-6 py-2.5 font-body text-sm font-medium text-navy transition-colors hover:border-gold hover:text-gold"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{
          background: "linear-gradient(135deg, #0B1B33 0%, #16294A 70%, #0D2040 100%)",
        }}
        aria-label="Contact CTA"
      >
        {/* Gold rule top */}
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 10%, rgba(201,162,75,0.55) 50%, transparent 90%)",
          }}
          aria-hidden="true"
        />
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div
            style={{
              width: "500px",
              height: "280px",
              background:
                "radial-gradient(ellipse at center, rgba(201,162,75,0.09) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container-site relative z-10 flex flex-col items-center text-center">
          <p className="font-body text-[11px] font-medium uppercase tracking-[0.22em] text-gold/75">
            Can&apos;t find what you need?
          </p>
          <h2 className="mt-4 font-heading text-3xl font-light text-white sm:text-4xl md:text-5xl">
            Don&apos;t see the event type{" "}
            <br className="hidden sm:block" />
            <em
              className="not-italic"
              style={{
                background: "linear-gradient(135deg, #F0D882 0%, #C9A24B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              you&apos;re looking for?
            </em>
          </h2>
          <p className="mx-auto mt-5 max-w-md font-body text-[0.9375rem] leading-relaxed text-white/50">
            Every event is different. If you have a vision that doesn&apos;t fit a
            standard category, we&apos;d love to hear about it.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="events-cta-whatsapp"
              className="inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 font-body text-sm font-semibold text-navy transition-all duration-200 hover:brightness-110"
              style={{
                background:
                  "linear-gradient(135deg, #E8C97A 0%, #C9A24B 55%, #9C7A2E 100%)",
              }}
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              Let&apos;s Talk
            </a>
            <Link
              href="/contact"
              id="events-cta-contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-8 py-3.5 font-body text-sm font-medium text-white/75 transition-all duration-200 hover:border-gold/60 hover:text-gold"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
