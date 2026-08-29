"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function CTABannerSection() {
  const whatsappUrl = getWhatsAppUrl(
    "Hi EvenRise Events, I'd love to discuss planning an event with your team."
  );

  return (
    <section className="relative bg-navy py-24 md:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      </div>

      <div className="container-site relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-2xl"
        >
          {/* Eyebrow */}
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-widest text-gold text-gold-400">
            Let&apos;s Create Something Remarkable
          </p>

          {/* Heading */}
          <h2 className="font-heading text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
            Your next event
            <br />
            <span className="italic text-gold">starts here.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-md font-body text-base text-white/70">
            Tell us your vision — we&apos;ll take care of the rest. Our team is ready
            to turn your ideas into an unforgettable experience.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              WhatsApp Us
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold px-8 py-4 font-body text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              <Mail className="h-4 w-4" strokeWidth={2} />
              Send an Email
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
