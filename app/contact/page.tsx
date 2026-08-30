"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ChevronDown,
  Phone,
  Check,
  Zap,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import { CONTACT, getWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

// ─── Option Choices for Form ───────────────────────────────────────────────────
const EVENT_TYPES = [
  "Tech Summit & Keynotes",
  "48h Developer Hackathon",
  "Enterprise IT Expo",
  "CISO & Executive Dinner",
  "Hybrid Multi-City Stream",
  "Technical Lab Bootcamp",
];

const ATTENDEE_SCALES = [
  "< 200 Attendees",
  "200 – 500 Attendees",
  "500 – 1,500 Attendees",
  "2,000+ Attendees",
];

const INFRASTRUCTURE_TAGS = [
  "Curved 4K Panoramic LED Stage",
  "High-Density Gigabit Wi-Fi 6",
  "4K Multi-Camera Live Stream",
  "24/7 Technical War Room & Power Ops",
  "Automated RFID / QR Badging",
  "Multilingual Interpretation Suites",
];

// ─── Technical FAQs ───────────────────────────────────────────────────────────
const FAQS = [
  {
    question: "How far in advance should we contact EvenRise for an event?",
    answer: "For major developer summits, expos, or 48-hour coding hackathons, we recommend reaching out 3 to 6 months in advance. For executive roundtables, private CISO dinners, or single-track workshops, a 4 to 8-week lead time is typically sufficient.",
  },
  {
    question: "Do you supply dedicated gigabit fiber and high-density Wi-Fi for developer events?",
    answer: "Yes. We engineer symmetrical multi-gigabit fiber connections with automated failover and enterprise Wi-Fi 6 access points rated for 5,000+ concurrent active developer devices with a zero-downtime SLA guarantee.",
  },
  {
    question: "Can EvenRise manage hybrid streaming and multi-city broadcast uplinks?",
    answer: "Absolutely. We provide broadcast-grade 4K multi-camera show direction, low-latency SRT/RTMP transmission to remote international hubs, and simultaneous multilingual translation channels.",
  },
  {
    question: "What geographical areas do your production crews cover?",
    answer: "Our core production headquarters is located in Jakarta, and we regularly stage major technology conferences across Indonesia (Bali, Surabaya, Bandung, Yogyakarta) and Southeast Asia.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // ── Form State ──────────────────────────────────────────────────────────────
  const [selectedType, setSelectedType] = useState(EVENT_TYPES[0]);
  const [selectedScale, setSelectedScale] = useState(ATTENDEE_SCALES[1]);
  const [selectedInfras, setSelectedInfras] = useState<string[]>([
    "Curved 4K Panoramic LED Stage",
    "High-Density Gigabit Wi-Fi 6",
  ]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const toggleInfra = (tag: string) => {
    setSelectedInfras((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const constructWhatsAppBriefUrl = () => {
    const lines = [
      `*EVENRISE EVENTS — TECHNICAL BRIEF INQUIRY*`,
      ``,
      `• *Format:* ${selectedType}`,
      `• *Attendee Scale:* ${selectedScale}`,
      `• *Key Infrastructure:* ${selectedInfras.join(", ") || "Standard AV"}`,
      name ? `• *Contact Person:* ${name}` : null,
      phone ? `• *WhatsApp / Phone:* ${phone}` : null,
      company ? `• *Company / Organization:* ${company}` : null,
      message ? `• *Special Notes:* ${message}` : null,
      ``,
      `Could we arrange a technical briefing and check availability for our target dates?`
    ].filter(Boolean).join("\n");

    return getWhatsAppUrl(lines);
  };

  const whatsappDirectUrl = getWhatsAppUrl(
    "Hi EvenRise Events, I would like to consult with your team regarding an upcoming IT event."
  );

  return (
    <div className="flex flex-col flex-1">
      {/* ── Header ───────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pb-14 pt-32 md:pb-18 md:pt-40 bg-[#070E1E] text-white"
        aria-label="Contact page header"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at 50% 20%, rgba(201,162,75,0.18) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="container-site relative z-10 text-center flex flex-col items-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-body text-xs text-slate-400">
              <li>
                <Link href="/" className="transition-colors hover:text-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/20">/</li>
              <li className="text-gold-light font-medium">Contact</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            EvenRise Technical Operations & Inquiries
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-white max-w-3xl">
            Let&apos;s Stage Your{" "}
            <em className="italic text-gold-light not-italic font-light">
              Next Tech Event.
            </em>
          </h1>

          <p className="mt-4 font-body text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl">
            Select your event requirements below to generate an instant technical brief and connect directly with our production director via WhatsApp.
          </p>
        </div>
      </section>

      {/* ── Main Form & Channels Section ──────────────────────────────── */}
      <section className="section-padding bg-cream relative flex-1">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            
            {/* ── Left Column: Premium Direct WhatsApp Card & Info ─────────────── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="lg:col-span-5 space-y-6"
            >
              {/* Refined WhatsApp Priority Card */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl border border-gold/40 bg-gradient-to-b from-[#0F2342] to-[#0B1B33] p-8 text-white shadow-[0_20px_50px_rgba(11,27,51,0.25)] relative overflow-hidden"
              >
                {/* Header Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold-light shadow-inner">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-light text-white mb-2 leading-snug">
                  Direct WhatsApp <span className="text-gold-light font-light italic">Hotline</span>
                </h3>

                <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Connect immediately with our lead technical showcaller for rapid date reservations, urgent venue availability, or custom technical RFPs.
                </p>

                {/* Response SLA Micro-Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs">
                  <div>
                    <span className="text-slate-400 font-body text-[11px] block">Average Response:</span>
                    <strong className="text-white font-semibold text-xs">Under 15 Minutes</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-body text-[11px] block">Consultation:</span>
                    <strong className="text-gold-light font-semibold text-xs">1-on-1 Free Scope</strong>
                  </div>
                </div>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center text-sm py-3.5 shadow-xl hover:shadow-gold/40 flex items-center gap-2 font-semibold"
                >
                  <MessageCircle className="h-5 w-5" strokeWidth={2} />
                  Chat on WhatsApp
                  <ArrowRight className="h-4 w-4 ml-0.5" />
                </a>
              </motion.div>

              {/* Direct Info Card */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl border border-cream-darker bg-white p-7 shadow-sm space-y-5"
              >
                <h3 className="font-heading text-lg font-semibold text-navy">
                  Operations Headquarters
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3.5">
                    <div className="h-8 w-8 rounded-lg bg-cream-dark flex items-center justify-center text-navy shrink-0 mt-0.5">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] font-semibold uppercase tracking-wider text-text-muted">Direct Line</p>
                      <p className="font-body text-xs font-semibold text-navy mt-0.5">{CONTACT.phone}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="h-8 w-8 rounded-lg bg-cream-dark flex items-center justify-center text-navy shrink-0 mt-0.5">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] font-semibold uppercase tracking-wider text-text-muted">Official Email</p>
                      <a href={`mailto:${CONTACT.email}`} className="font-body text-xs font-medium text-navy hover:text-gold transition-colors block mt-0.5">
                        {CONTACT.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="h-8 w-8 rounded-lg bg-cream-dark flex items-center justify-center text-navy shrink-0 mt-0.5">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] font-semibold uppercase tracking-wider text-text-muted">Jakarta Office</p>
                      <p className="font-body text-xs text-text-secondary leading-relaxed mt-0.5">
                        {CONTACT.address.street}, {CONTACT.address.city}, Indonesia
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="h-8 w-8 rounded-lg bg-cream-dark flex items-center justify-center text-navy shrink-0 mt-0.5">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] font-semibold uppercase tracking-wider text-text-muted">Hours</p>
                      <p className="font-body text-xs text-text-secondary mt-0.5">
                        Mon – Fri: 09:00 – 18:00 WIB<br />
                        <span className="text-gold font-semibold">24/7 On-Site War Room</span> during active event days
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* ── Right Column: Interactive Form (Direct to WhatsApp) ─────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl border border-cream-darker bg-white p-8 sm:p-10 shadow-[var(--shadow-card)]">
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-gold font-body text-xs font-semibold uppercase tracking-wider mb-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Instant WhatsApp Brief Builder</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-navy">
                    Configure Your Event Requirements
                  </h2>
                  <p className="mt-2 font-body text-sm text-text-secondary leading-relaxed">
                    Select your event format and infrastructure below, then click to send a structured brief directly to our team via WhatsApp.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {/* 1. Event Type Option Chips */}
                  <div className="space-y-2.5">
                    <label className="block font-body text-xs font-bold uppercase tracking-wider text-navy">
                      1. Event Format <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {EVENT_TYPES.map((type) => {
                        const isSelected = selectedType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSelectedType(type)}
                            className={cn(
                              "rounded-xl px-4 py-2.5 text-xs font-semibold transition-all border",
                              isSelected
                                ? "bg-navy text-gold-light border-navy shadow-sm ring-2 ring-gold/40"
                                : "bg-cream/40 border-cream-darker text-navy/80 hover:bg-cream-dark hover:text-navy"
                            )}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Attendee Scale Option Chips */}
                  <div className="space-y-2.5">
                    <label className="block font-body text-xs font-bold uppercase tracking-wider text-navy">
                      2. Target Delegate Scale
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {ATTENDEE_SCALES.map((scale) => {
                        const isSelected = selectedScale === scale;
                        return (
                          <button
                            key={scale}
                            type="button"
                            onClick={() => setSelectedScale(scale)}
                            className={cn(
                              "rounded-xl px-4 py-2 text-xs font-semibold transition-all border",
                              isSelected
                                ? "bg-navy text-gold-light border-navy shadow-sm ring-2 ring-gold/40"
                                : "bg-cream/40 border-cream-darker text-navy/80 hover:bg-cream-dark hover:text-navy"
                            )}
                          >
                            {scale}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Infrastructure & Capabilities Checklist Chips */}
                  <div className="space-y-2.5">
                    <label className="block font-body text-xs font-bold uppercase tracking-wider text-navy">
                      3. Required Hardware & Production Infrastructure
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {INFRASTRUCTURE_TAGS.map((tag) => {
                        const isChecked = selectedInfras.includes(tag);
                        return (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => toggleInfra(tag)}
                            className={cn(
                              "rounded-xl px-3.5 py-2 text-xs font-medium transition-all border inline-flex items-center gap-1.5",
                              isChecked
                                ? "bg-gold/15 text-navy font-semibold border-gold shadow-sm"
                                : "bg-white border-cream-darker text-text-secondary hover:border-navy/20 hover:text-navy"
                            )}
                          >
                            <span className={cn(
                              "h-3.5 w-3.5 rounded flex items-center justify-center text-[10px]",
                              isChecked ? "bg-gold text-navy font-bold" : "border border-navy/20"
                            )}>
                              {isChecked && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                            </span>
                            {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4. Contact Inputs */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-2 border-t border-cream-dark">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="font-body text-xs font-semibold text-navy">
                        Your Name
                      </label>
                      <input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-cream-darker bg-cream/30 px-3.5 py-2.5 font-body text-sm text-navy outline-none transition-colors focus:border-gold/60 focus:bg-white focus:ring-2 focus:ring-gold/20"
                        placeholder="e.g. Dennis Setiawan"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="font-body text-xs font-semibold text-navy">
                        WhatsApp Number
                      </label>
                      <input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="tel"
                        className="w-full rounded-xl border border-cream-darker bg-cream/30 px-3.5 py-2.5 font-body text-sm text-navy outline-none transition-colors focus:border-gold/60 focus:bg-white focus:ring-2 focus:ring-gold/20"
                        placeholder="e.g. 082114962543"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="font-body text-xs font-semibold text-navy">
                        Company / Org
                      </label>
                      <input
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full rounded-xl border border-cream-darker bg-cream/30 px-3.5 py-2.5 font-body text-sm text-navy outline-none transition-colors focus:border-gold/60 focus:bg-white focus:ring-2 focus:ring-gold/20"
                        placeholder="e.g. GoTo Group"
                      />
                    </div>
                  </div>

                  {/* 5. Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="font-body text-xs font-semibold text-navy">
                      Target Dates & Venue Notes (Optional)
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="w-full resize-none rounded-xl border border-cream-darker bg-cream/30 px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:bg-white focus:ring-2 focus:border-gold/60 focus:ring-gold/20"
                      placeholder="e.g. Anticipated in Q4 2025 in Jakarta ballroom, needs 4K LED and live code projection..."
                    />
                  </div>

                  {/* 6. Primary Action: Direct to WhatsApp */}
                  <div className="pt-2">
                    <a
                      href={constructWhatsAppBriefUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full justify-center shadow-lg py-4 text-sm flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" strokeWidth={2} />
                      Send Brief to WhatsApp
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                    
                    <p className="mt-3 text-center font-body text-xs text-text-muted">
                      Opens WhatsApp directly with your configured specifications pre-filled.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Technical FAQ Accordion ─────────────────────────────────────────── */}
      <section className="border-t border-cream-dark bg-cream py-20 lg:py-24" aria-labelledby="faq-heading">
        <div className="container-site max-w-3xl">
          <div className="mb-10 text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2 block">
              Frequently Asked Questions
            </span>
            <h2 id="faq-heading" className="font-heading text-3xl sm:text-4xl font-light text-navy">
              Technical Planning & Operations
            </h2>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="rounded-2xl border border-cream-darker bg-white overflow-hidden transition-shadow hover:shadow-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-lg font-medium text-navy">{faq.question}</span>
                    <ChevronDown className={cn("h-5 w-5 text-gold transition-transform duration-200 shrink-0", isOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-0 font-body text-sm leading-relaxed text-text-secondary border-t border-cream-dark mt-1">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
