"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function CTABannerSection() {
  const whatsappUrl = getWhatsAppUrl(
    "Hi EvenRise Events, I'd like to discuss producing an upcoming tech summit, hackathon, or IT event."
  );

  return (
    <section className="relative bg-navy py-28 md:py-36 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,162,75,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Top separator line */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--gold-gradient)", opacity: 0.15 }} />

      <div className="container-site relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto max-w-2xl"
        >
          {/* Heading */}
          <h2 className="font-heading text-5xl font-light leading-tight text-white sm:text-6xl md:text-7xl">
            Your next tech event
            <br />
            <em className="not-italic" style={{
              background: "linear-gradient(135deg, #F0D882 0%, #C9A24B 60%, #9C7A2E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              starts here.
            </em>
          </h2>

          <p className="mx-auto mt-6 max-w-md font-body text-base leading-relaxed text-white/60">
            From flagship developer congresses to 48-hour hackathons and enterprise product launches — let&apos;s build an extraordinary tech experience together.
          </p>

          {/* Buttons — stacked on mobile, row on sm+ */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              WhatsApp Us Now
            </a>

            <Link
              href="/contact"
              className="btn btn-outline w-full sm:w-auto"
            >
              <Mail className="h-4 w-4" strokeWidth={2} />
              Send an Enquiry
            </Link>
          </div>

          {/* Social proof line */}
          <p className="mt-8 font-body text-xs text-white/40 tracking-wide">
            Trusted by 200+ technology leaders and enterprises across Southeast Asia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
