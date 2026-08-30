"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function HeroSection() {
  const whatsappUrl = getWhatsAppUrl(
    "Hi EvenRise Events, I'd like to discuss planning an IT summit, hackathon, or tech conference with your team."
  );

  return (
    <section
      id="hero"
      aria-label="Hero — EvenRise Events"
      className="relative flex min-h-screen flex-col justify-center items-center bg-navy overflow-hidden text-center pt-16 pb-12 sm:pt-20 sm:pb-16"
    >
      {/* ── Background Symmetrical Cinematic Tech Photo Layer ───────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/hero-tech-summit.jpg"
          alt="Premier IT & Tech Conference Stage Auditorium"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-45 scale-100"
        />
        {/* Layered deep radial & vertical vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 50% 45%, rgba(7,14,30,0.68) 0%, rgba(7,14,30,0.92) 75%, #070E1E 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-44"
          style={{
            background: "linear-gradient(to top, #070E1E 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="container-site relative z-10 pt-4 pb-4 sm:pt-6 sm:pb-8 flex flex-col items-center">
        {/* Crisp Golden Logo Icon Above Header (Matching Navbar) */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 mb-3 sm:mb-4"
        >
          <Image
            src="/logo.png"
            alt="EvenRise Events Brand Logo"
            fill
            className="object-contain"
            priority
            unoptimized
          />
        </motion.div>

        {/* Centered Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-light leading-[1.08] tracking-tight text-white max-w-4xl"
        >
          Every Occasion,
          <br />
          <em
            className="not-italic font-light"
            style={{
              background: "linear-gradient(135deg, #FDF0CD 0%, #E2BA62 45%, #A68332 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Elevated.
          </em>
        </motion.h1>

        {/* Centered Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          className="mt-4 sm:mt-5 max-w-xl font-body text-sm sm:text-base md:text-lg leading-relaxed text-white/80 px-4"
        >
          Southeast Asia&apos;s premier event management and production partner for developer hackathons, enterprise AI summits, and high-impact IT expos.
        </motion.p>

        {/* Centered Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-6 sm:mt-8 flex w-full max-w-md flex-col gap-3.5 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4 px-4 sm:px-0"
        >
          <Link
            href="/events"
            className="btn btn-primary w-full sm:w-auto shadow-xl hover:shadow-gold/30 px-7 py-3 text-sm"
          >
            Explore Tech Events
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-gold px-7 py-3 text-sm"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            Schedule Event Consultation
          </a>
        </motion.div>

        {/* Centered Credibility Metrics Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.75 }}
          className="mt-10 sm:mt-12 md:mt-14 flex flex-wrap justify-center items-center gap-6 sm:gap-12 lg:gap-16 border-t border-white/10 pt-6 sm:pt-8"
        >
          <div className="flex flex-col items-center">
            <p className="font-heading text-2xl sm:text-3xl font-light text-gold-light leading-none">150+</p>
            <p className="mt-1.5 font-body text-[11px] uppercase tracking-wider text-white/50">Tech Events Delivered</p>
          </div>
          <div className="hidden sm:block h-7 w-px bg-white/10" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <p className="font-heading text-2xl sm:text-3xl font-light text-gold-light leading-none">99.9%</p>
            <p className="mt-1.5 font-body text-[11px] uppercase tracking-wider text-white/50">Stream & AV Uptime</p>
          </div>
          <div className="hidden sm:block h-7 w-px bg-white/10" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <p className="font-heading text-2xl sm:text-3xl font-light text-gold-light leading-none">200+</p>
            <p className="mt-1.5 font-body text-[11px] uppercase tracking-wider text-white/50">Enterprise Tech Clients</p>
          </div>
          <div className="hidden sm:block h-7 w-px bg-white/10" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <p className="font-heading text-2xl sm:text-3xl font-light text-gold-light leading-none">8+</p>
            <p className="mt-1.5 font-body text-[11px] uppercase tracking-wider text-white/50">Years Tech Tenure</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
