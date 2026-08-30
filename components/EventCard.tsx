"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CalendarDays, MapPin, Clock, Building2, X, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/constants";
import { type Event, formatEventDate } from "@/data/events";

// ─── Category colour map ──────────────────────────────────────────────────────
const CATEGORY_COLOURS: Record<string, string> = {
  "Tech Conference & Summit":     "#2563EB",
  "Cybersecurity & Cloud Forum":  "#DC2626",
  "IT Expo & Product Launch":     "#059669",
  "Hackathon & Dev Challenge":    "#7C3AED",
  "Developer Bootcamp & Workshop":"#D97706",
  "Virtual & Hybrid Tech":        "#0891B2",
};

// ─── Event Detail Dialog ──────────────────────────────────────────────────────
function EventDetailDialog({
  event,
  onClose,
}: {
  event: Event;
  onClose: () => void;
}) {
  const whatsappUrl = getWhatsAppUrl(
    `Hi EvenRise Events, I'd like to learn more about the event: "${event.title}". Could you share more details or discuss how we can be involved?`
  );

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-dialog-title"
        className="fixed inset-x-4 top-1/2 z-50 max-h-[90vh] w-auto max-w-2xl -translate-y-1/2 overflow-y-auto rounded-2xl bg-white shadow-[0_32px_80px_-8px_rgba(11,27,51,0.35)] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full"
      >
        {/* Image */}
        <div className="relative h-52 w-full overflow-hidden rounded-t-2xl sm:h-64">
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover object-center"
          />
          {/* Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(11,27,51,0.55) 0%, transparent 50%)",
            }}
            aria-hidden="true"
          />
          {/* Status + Category badges */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span
              className="inline-flex rounded-full px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-widest text-gold"
              style={{
                background: "rgba(11,27,51,0.75)",
                border: "1px solid rgba(201,162,75,0.5)",
                backdropFilter: "blur(4px)",
              }}
            >
              {event.category}
            </span>
            <span
              className={cn(
                "inline-flex rounded-full px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-widest",
                event.status === "past"
                  ? "bg-white/20 text-white/70"
                  : "bg-gold/90 text-navy"
              )}
            >
              {event.status === "past" ? "Past Event" : "Upcoming"}
            </span>
          </div>
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close event details"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        {/* Body */}
        <div className="p-7 sm:p-8">
          <h2
            id="event-dialog-title"
            className="font-heading text-2xl font-semibold leading-snug text-navy sm:text-3xl"
          >
            {event.title}
          </h2>

          {/* Meta details */}
          <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-2.5">
              <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
              <div>
                <dt className="font-body text-[10px] font-medium uppercase tracking-widest text-text-muted">Date</dt>
                <dd className="font-body text-sm text-navy">
                  {formatEventDate(event.date)}
                  {event.endDate && ` – ${formatEventDate(event.endDate)}`}
                </dd>
              </div>
            </div>

            {event.time && (
              <div className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                <div>
                  <dt className="font-body text-[10px] font-medium uppercase tracking-widest text-text-muted">Time</dt>
                  <dd className="font-body text-sm text-navy">{event.time}</dd>
                </div>
              </div>
            )}

            <div className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
              <div>
                <dt className="font-body text-[10px] font-medium uppercase tracking-widest text-text-muted">Location</dt>
                <dd className="font-body text-sm text-navy">{event.location}</dd>
              </div>
            </div>

            {event.venue && (
              <div className="flex items-start gap-2.5">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                <div>
                  <dt className="font-body text-[10px] font-medium uppercase tracking-widest text-text-muted">Venue</dt>
                  <dd className="font-body text-sm text-navy">{event.venue}</dd>
                </div>
              </div>
            )}
          </dl>

          {/* Divider */}
          <div className="my-6 h-px bg-cream-dark" aria-hidden="true" />

          {/* Description */}
          <p className="font-body text-[0.9375rem] leading-relaxed text-text-secondary">
            {event.description}
          </p>

          {/* CTA */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`event-dialog-whatsapp-${event.id}`}
              className="btn btn-primary"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              Inquire on WhatsApp
            </a>
            <Link
              href={`/events/${event.slug}`}
              className="btn btn-outline border-navy/20 text-navy hover:border-gold hover:text-navy"
            >
              View Full Event Page
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Event Card ───────────────────────────────────────────────────────────────

export interface EventCardProps {
  event: Event;
  className?: string;
}

export function EventCard({ event, className }: EventCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const openDialog = useCallback(() => setDialogOpen(true), []);
  const closeDialog = useCallback(() => setDialogOpen(false), []);

  const isPast = event.status === "past";

  return (
    <>
      <article
        className={cn(
          "group flex flex-col overflow-hidden rounded-2xl bg-white border border-cream-dark shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_-12px_rgba(11,27,51,0.16)] cursor-pointer",
          isPast && "opacity-90",
          className
        )}
        onClick={openDialog}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDialog(); } }}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${event.title}`}
      >
        {/* Image */}
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={cn(
              "object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105",
              isPast && "grayscale-[20%]"
            )}
          />
          {/* Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(11,27,51,0.32) 0%, transparent 55%)",
            }}
            aria-hidden="true"
          />
          {/* Badges */}
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span
              className="inline-block rounded-full px-3 py-1 font-body text-[9px] font-semibold uppercase tracking-widest text-gold"
              style={{
                background: "rgba(11,27,51,0.75)",
                border: "1px solid rgba(201,162,75,0.45)",
                backdropFilter: "blur(4px)",
              }}
            >
              {event.category}
            </span>
            {isPast && (
              <span className="inline-block rounded-full bg-white/20 px-2.5 py-1 font-body text-[9px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
                Past
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5 font-body text-xs text-text-muted">
              <CalendarDays className="h-3.5 w-3.5 shrink-0 text-gold/70" strokeWidth={1.75} aria-hidden="true" />
              {formatEventDate(event.date)}
              {event.endDate && <> &ndash; {formatEventDate(event.endDate)}</>}
            </span>
            <span className="inline-flex items-center gap-1.5 font-body text-xs text-text-muted">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-gold/70" strokeWidth={1.75} aria-hidden="true" />
              {event.location}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-3 font-heading text-xl font-semibold leading-snug text-navy">
            {event.title}
          </h3>

          {/* Short description */}
          <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-text-secondary line-clamp-2">
            {event.shortDescription}
          </p>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between border-t border-cream-dark pt-4">
            <span className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-gold">
              View Details
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </article>

      {/* Portal-style dialog */}
      {dialogOpen && (
        <EventDetailDialog event={event} onClose={closeDialog} />
      )}
    </>
  );
}
