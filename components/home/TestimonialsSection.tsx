"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle2, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Dennis Setiawan",
    role: "VP of Engineering",
    company: "GoTo Group",
    event: "Regional Developer Summit",
    rating: 5,
    quote:
      "EvenRise orchestrated our flagship developer summit for 1,200+ attendees with zero downtime. From high-density Wi-Fi architecture to curved 4K LED live code streaming, their technical mastery is in a class of its own.",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of DevRel APAC",
    company: "CloudScale Systems",
    event: "48-Hour AI Hackathon",
    rating: 5,
    quote:
      "Managing a 48-hour continuous coding hackathon with 400 engineers requires relentless execution. EvenRise handled 24/7 power redundancy, interactive jury consoles, and live stream broadcast without a single glitch.",
  },
  {
    name: "Irfan Pratama",
    role: "Chief Technology Officer",
    company: "Enterprise Cloud Indonesia",
    event: "CyberTech & Cloud Expo",
    rating: 5,
    quote:
      "Our cybersecurity expo and live threat demonstration arena exceeded every executive KPI. Spatial stage engineering, multi-track audio zoning, and VIP CISO protocol were executed with military precision.",
  },
  {
    name: "Theresa Wijaya",
    role: "Head of Tech Ecosystem",
    company: "FinTech Innovation Hub",
    event: "Web3 & Core Banking Demo Day",
    rating: 5,
    quote:
      "The technical live feeds, real-time code projection, and digital investor scoring consoles worked flawlessly. EvenRise made our high-stakes product reveal feel effortless and deeply impressive.",
  },
  {
    name: "Rendra Kusuma",
    role: "Director of Infrastructure & SRE",
    company: "Telkom Digital Services",
    event: "Enterprise Kubernetes Bootcamp",
    rating: 5,
    quote:
      "Their team understands IT infrastructure better than any traditional event organizer. Dedicated fiber feeds, zero packet loss, and immaculate war-room support for our platform engineers.",
  },
  {
    name: "Alina Voronova",
    role: "Global Events Lead",
    company: "NeuralEdge AI",
    event: "Quantum AI Hardware Reveal",
    rating: 5,
    quote:
      "The stage lighting synchronization with our hardware unveiling cue sheets was breathtaking. EvenRise delivered a Silicon Valley-grade production right here in Jakarta.",
  },
  {
    name: "Budi Santoso",
    role: "VP of Product Architecture",
    company: "Bank Mandiri Digital Tech",
    event: "Open Finance & API Con",
    rating: 5,
    quote:
      "Zero latency on simultaneous live translations and hybrid streaming to 18 regional hubs. Our C-level stakeholders were thoroughly impressed by the seamless delivery.",
  },
  {
    name: "Clarissa Chen",
    role: "Community Director SEA",
    company: "OpenSource Foundation",
    event: "APAC Open Source Congress",
    rating: 5,
    quote:
      "Coordinating 6 parallel technical tracks across 2 full conference days was a monumental task, but EvenRise ran every timecode with clockwork precision. Will definitely partner again.",
  },
];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds interval

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const total = TESTIMONIALS.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay 5-second interval timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Calculate the 3 visible cards starting from currentIndex
  const visibleIndices = [
    currentIndex,
    (currentIndex + 1) % total,
    (currentIndex + 2) % total,
  ];

  return (
    <section
      className="section-padding bg-cream border-t border-cream-darker overflow-hidden"
      id="reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-site">
        {/* ── Section Header & Controls ────────────────────────────────── */}
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl"
          >
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2 block">
              Partner Endorsements
            </span>
            <h2 className="font-heading text-4xl font-light leading-tight text-navy sm:text-5xl">
              Trusted by <span className="italic font-light text-navy">Engineering Leaders</span>
            </h2>
            <p className="mt-3 font-body text-base text-text-secondary leading-relaxed">
              What VPs of Engineering, CTOs, and Developer Relations leaders say about EvenRise technical event execution.
            </p>
          </motion.div>

          {/* Navigation Controls (Arrows + Status) */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-navy/70 bg-cream-dark/60 border border-cream-darker rounded-full px-3 py-1 mr-2">
              <span className="text-gold font-bold">{currentIndex + 1}</span>
              <span>/</span>
              <span>{total}</span>
            </div>

            <button
              onClick={prevSlide}
              aria-label="Previous review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-all duration-200 hover:border-gold hover:bg-gold hover:text-navy hover:scale-105 shadow-sm active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-all duration-200 hover:border-gold hover:bg-gold hover:text-navy hover:scale-105 shadow-sm active:scale-95"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2} />
            </button>

            <button
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Play auto-sliding" : "Pause auto-sliding"}
              className="hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy/70 transition-all duration-200 hover:border-gold hover:text-navy shadow-sm"
              title={isPaused ? "Resume 5s auto-sliding" : "Pause auto-sliding"}
            >
              {isPaused ? <Play className="h-4 w-4 fill-current text-gold" /> : <Pause className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* ── 5-Second Interval Slide Container ─────────────────────────────── */}
        <div className="relative overflow-hidden py-2">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleIndices.map((idx, slotIndex) => {
                const item = TESTIMONIALS[idx];
                return (
                  <div
                    key={`${item.name}-${idx}`}
                    className={`group relative flex flex-col justify-between rounded-3xl bg-[#0B1B33] border border-white/10 p-7 shadow-[0_12px_32px_rgba(11,27,51,0.12)] transition-all duration-300 hover:border-gold/50 hover:shadow-[0_16px_40px_rgba(11,27,51,0.22)] ${
                      slotIndex === 2 ? "hidden lg:flex" : slotIndex === 1 ? "hidden md:flex" : "flex"
                    }`}
                  >
                    <div>
                      {/* Top: 5 Golden Stars */}
                      <div className="flex items-center gap-1 mb-4" aria-label="5 out of 5 stars">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-gold text-gold"
                            strokeWidth={1}
                          />
                        ))}
                      </div>

                      {/* Reviewer Name */}
                      <h3 className="font-body text-xl font-bold text-white leading-snug group-hover:text-gold-light transition-colors">
                        {item.name}
                      </h3>

                      {/* Role & Company Tag in EvenRise Gold */}
                      <p className="font-body text-xs font-semibold text-gold mt-1 tracking-wide uppercase">
                        {item.role}
                      </p>
                      <p className="font-body text-xs text-slate-300 mt-0.5">
                        {item.company}
                      </p>

                      {/* Testimonial Quote */}
                      <p className="mt-4 pt-4 border-t border-white/10 font-body text-sm leading-relaxed text-slate-200">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* Event & Verified Badge Footer */}
                    <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="font-body text-[10px] font-medium uppercase tracking-wider text-gold-light bg-gold/10 border border-gold/25 rounded-full px-2.5 py-0.5">
                        {item.event}
                      </span>
                      <span className="inline-flex items-center gap-1 font-body text-[10px] text-gold-light font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                        Verified
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Bottom Carousel Progress Bar & Dot Indicators ─────────────────── */}
        <div className="mt-10 flex flex-col items-center gap-3">
          {/* Animated 5s Progress Bar */}
          <div className="w-full max-w-xs h-1 rounded-full bg-cream-dark overflow-hidden relative">
            {!isPaused && (
              <motion.div
                key={currentIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
                className="h-full bg-gold rounded-full"
              />
            )}
            {isPaused && (
              <div className="h-full bg-gold/60 w-full rounded-full" />
            )}
          </div>

          {/* Dot Navigation */}
          <div className="flex items-center gap-2 mt-1">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-8 bg-gold"
                    : "w-2 bg-navy/20 hover:bg-navy/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
