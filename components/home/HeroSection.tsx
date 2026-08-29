"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function HeroSection() {
  const whatsappUrl = getWhatsAppUrl(
    "Hi EvenRise Events, I'd like to discuss planning an event with your team."
  );

  return (
    <section
      id="hero"
      aria-label="Hero — EvenRise Events"
      className="relative flex min-h-[92vh] items-center bg-navy"
    >
      {/* ── Safe Decorative background ───────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
      </div>

      <div className="container-site relative z-10 pb-24 pt-36 md:pb-32 md:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[780px]"
        >
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-3 text-gold">
            <span className="font-body text-xs font-medium uppercase tracking-widest text-gold-400">
              Premier Event Partner
            </span>
          </div>

          {/* Headline (One clean H1 with line breaks) */}
          <h1 className="font-heading text-5xl font-light leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[7.5rem]">
            Every Occasion,
            <br />
            <span className="italic text-gold">Elevated.</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-white/70">
            EvenRise is your end-to-end event management partner — from the first
            brief to the final bow. Corporate conferences, weddings, exhibitions,
            gala dinners — we make every moment matter.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold px-8 py-4 font-body text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
