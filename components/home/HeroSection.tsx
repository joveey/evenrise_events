"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function HeroSection() {
  const whatsappUrl = getWhatsAppUrl(
    "Hi EvenRise Events, I'd like to discuss planning an executive summit or corporate event with your team."
  );

  return (
    <section
      id="hero"
      aria-label="Hero — EvenRise Events"
      className="relative flex min-h-screen items-center justify-center bg-navy overflow-hidden text-center"
    >
      {/* ── Background Symmetrical Cinematic Photo Layer ───────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/hero-bg-v2.jpg"
          alt="Luxury Corporate Event Ballroom"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 scale-100"
        />
        {/* Layered deep radial & vertical vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 50% 45%, rgba(7,14,30,0.72) 0%, rgba(7,14,30,0.92) 75%, #070E1E 100%)",
          }}
        />

        {/* ── Subtle Logo Watermark ── */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] mix-blend-overlay">
          <div className="relative w-[120vw] max-w-[900px] aspect-square animate-pulse" style={{ animationDuration: '8s' }}>
            <Image
              src="/logo-transparent.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-44"
          style={{
            background: "linear-gradient(to top, #070E1E 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="container-site relative z-10 py-32 md:py-40 flex flex-col items-center">
        {/* Centered Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-light leading-[1.05] tracking-tight text-white max-w-5xl"
        >
          Every Occasion,
          <br />
          <em className="not-italic font-light" style={{
            background: "linear-gradient(135deg, #FDF0CD 0%, #E2BA62 45%, #A68332 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Elevated.
          </em>
        </motion.h1>

        {/* Centered Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 sm:mt-7 max-w-2xl font-body text-base sm:text-lg md:text-xl leading-relaxed text-white/75 px-4"
        >
          Southeast Asia&apos;s premier event management and production partner for executive summits, high-stakes B2B conferences, and luxury corporate galas.
        </motion.p>

        {/* Centered Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 sm:mt-10 flex w-full max-w-md flex-col gap-3.5 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4 px-4 sm:px-0"
        >
          <Link href="/events" className="btn btn-primary w-full sm:w-auto shadow-xl hover:shadow-gold/30 px-8 py-3.5 text-sm">
            Explore Upcoming Summits
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-gold px-8 py-3.5 text-sm"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            Schedule Event Consultation
          </a>
        </motion.div>

        {/* Centered Credibility Metrics Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 sm:mt-20 flex flex-wrap justify-center items-center gap-8 sm:gap-14 lg:gap-20 border-t border-white/10 pt-10"
        >
          <div className="flex flex-col items-center">
            <p className="font-heading text-3xl sm:text-4xl font-light text-gold-light leading-none">150+</p>
            <p className="mt-2 font-body text-xs uppercase tracking-wider text-white/50">Summits Delivered</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/10" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <p className="font-heading text-3xl sm:text-4xl font-light text-gold-light leading-none">98%</p>
            <p className="mt-2 font-body text-xs uppercase tracking-wider text-white/50">C-Suite Retention</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/10" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <p className="font-heading text-3xl sm:text-4xl font-light text-gold-light leading-none">200+</p>
            <p className="mt-2 font-body text-xs uppercase tracking-wider text-white/50">Enterprise Clients</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/10" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <p className="font-heading text-3xl sm:text-4xl font-light text-gold-light leading-none">8+</p>
            <p className="mt-2 font-body text-xs uppercase tracking-wider text-white/50">Years Industry Tenure</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
