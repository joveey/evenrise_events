"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Cpu,
  Wifi,
  Video,
  ShieldCheck,
  Radio,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Clock,
  Sparkles
} from "lucide-react";
import { getWhatsAppUrl, CONTACT } from "@/lib/constants";

const SERVICE_PILLARS = [
  {
    id: "summits",
    index: "01",
    icon: <Layers className="h-6 w-6 text-gold" />,
    title: "Tech Summits & Keynote Conferences",
    tagline: "Broadcast-Grade Stage Scenography & Multi-Track Precision",
    description:
      "From multi-track developer congresses to high-stakes annual executive AI summits, EvenRise engineers custom curved panoramic LED stages, multi-lingual interpretation suites, and seamless speaker management.",
    hardware: [
      "Ultra-wide 4K P2.5 Curved Panoramic LED Video Walls",
      "Line-Array Acoustic Arrays & Noise Cancellation Zoning",
      "Multi-Track Speaker Stage Protocol & Green Room Management",
      "Synchronized Dynamic Cyber Stage Lighting & Laser Cues",
    ],
    sla: "Zero-Latency Stage Switching, 100% Timecode Run-of-Show Adherence",
  },
  {
    id: "expos",
    index: "02",
    icon: <Cpu className="h-6 w-6 text-gold" />,
    title: "Enterprise IT Expos & Product Reveals",
    tagline: "Interactive Demo Pods & Theatrical Product Unveilings",
    description:
      "We design and build bespoke experiential pavilions, modular developer test pods, and dynamic product launch reveals that capture media attention and drive enterprise pipeline.",
    hardware: [
      "Modular Developer Interactive Demo Booths & Power Pods",
      "3D Holographic & Motorized LED Reveal Mechanics",
      "Automated RFID / QR Badge Scanning & Footfall Heatmapping",
      "Silent Theater Wireless Headset Zones for Parallel Tracks",
    ],
    sla: "Turnkey Pavilion Fabrication with 48h Pre-Event Build-Out Completion",
  },
  {
    id: "hackathons",
    index: "03",
    icon: <Wifi className="h-6 w-6 text-gold" />,
    title: "Developer Hackathons & Code Arenas",
    tagline: "24/7 Continuous Operations & Redundant Gigabit Infrastructure",
    description:
      "48-hour continuous coding marathons require relentless operational reliability. We deploy high-density Wi-Fi capable of handling thousands of concurrent devices, uninterrupted power redundancy, and digital judging consoles.",
    hardware: [
      "Dedicated 10Gbps Symmetrical Fiber with Automatic Failover",
      "High-Density Wi-Fi 6 APs supporting 5,000+ Concurrent Devices",
      "24/7 Dedicated Technical War Room & Continuous Catering Setup",
      "Real-Time Code Mirroring & Digital Jury Scoring Systems",
    ],
    sla: "99.99% Network Uptime & Zero Packet Loss SLA Guarantee",
  },
  {
    id: "workshops",
    index: "04",
    icon: <Video className="h-6 w-6 text-gold" />,
    title: "Technical Bootcamps & Hands-on Workshops",
    tagline: "Focused Lab Pods & Interactive Code-Along Environments",
    description:
      "Deep-dive technical training tracks and architectural bootcamps designed for hands-on software development, cluster deployment exercises, and executive certifications.",
    hardware: [
      "Acoustically Isolated Hands-On Lab Pods & High-Res Monitors",
      "Interactive Code Polling & Real-Time Q&A Digital Hubs",
      "Dedicated High-Speed Local Subnets for Container / Cluster Labs",
      "Executive Delegate Tech Amenity Kits & Certification Staging",
    ],
    sla: "Zero Distraction Acoustic Isolation & Instant Lab Provisioning",
  },
  {
    id: "security",
    index: "05",
    icon: <ShieldCheck className="h-6 w-6 text-gold" />,
    title: "Tech Leadership Awards & CISO Dinners",
    tagline: "Discreet Executive Hospitality & High-Security Roundtables",
    description:
      "Invitation-only CISO roundtables, tech investor banquets, and annual accolade galas characterized by refined atmosphere, five-star culinary pacing, and confidential privacy protocols.",
    hardware: [
      "Encrypted Digital Voting & Real-Time Accolade Graphics",
      "Acoustic Security & Confidential Closed-Door Protocols",
      "Multi-Camera Live Show Direction & Award Choreography",
      "5-Star Luxury Venue Styling & Bespoke Culinary Orchestration",
    ],
    sla: "Uncompromising VIP Protocol & Discretionary Non-Disclosure Standards",
  },
  {
    id: "hybrid",
    index: "06",
    icon: <Radio className="h-6 w-6 text-gold" />,
    title: "Hybrid Broadcasts & Multi-City Streams",
    tagline: "Synchronous Multi-Hub Broadcasts Across Global Tech Hubs",
    description:
      "Connect physical stages in Jakarta with remote hubs across Singapore, Tokyo, and Silicon Valley via enterprise-grade, low-latency secure streaming channels.",
    hardware: [
      "Broadcast-Grade 4K Multi-Camera Production Trucks & Switchers",
      "Ultra-Low Latency SRT / RTMP Multi-City Uplinks (Sub-50ms)",
      "Branded Enterprise Virtual Portals with Interactive Chat & Breakouts",
      "Instant 4K Keynote VOD Archiving & Audience Analytics Telemetry",
    ],
    sla: "Zero-Buffer Enterprise Stream Delivery with Multi-CDN Redundancy",
  },
];

export default function ServicesPage() {
  const [selectedPillar, setSelectedPillar] = useState(SERVICE_PILLARS[0]);

  const whatsappUrl = getWhatsAppUrl(
    `Hi EvenRise Events, I'd like to consult with your team regarding "${selectedPillar.title}". Could we schedule a technical briefing?`
  );

  return (
    <main className="min-h-screen bg-cream flex flex-col flex-1">
      {/* ── Page Header ────────────────────────────────────────────── */}
      <section className="relative bg-[#070E1E] text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(201,162,75,0.18) 0%, #070E1E 75%)",
          }}
          aria-hidden="true"
        />

        <div className="container-site relative z-10 text-center flex flex-col items-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-body text-slate-400">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-light">Services</span>
          </nav>

          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3 block">
            End-to-End Technical Capabilities
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white max-w-4xl leading-tight">
            Engineered for <em className="italic text-gold-light">Zero-Downtime</em> Tech Events
          </h1>
          <p className="mt-5 font-body text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Discover our comprehensive suite of stage production, high-density IT infrastructure, and broadcast engineering built exclusively for the modern technology sector.
          </p>
        </div>
      </section>

      {/* ── Interactive Capabilities Grid & Deep Dive ────────────────────── */}
      <section className="section-padding bg-cream flex-1">
        <div className="container-site">
          
          {/* 6 Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {SERVICE_PILLARS.map((pillar) => {
              const isSelected = selectedPillar.id === pillar.id;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar)}
                  className={`cursor-pointer rounded-3xl border p-8 transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#0B1B33] text-white border-gold shadow-xl scale-[1.02]"
                      : "bg-white text-navy border-cream-darker hover:border-gold/60 hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`font-mono text-xs font-bold ${isSelected ? "text-gold" : "text-navy/60"}`}>
                        {pillar.index}
                      </span>
                      <div className={`p-3 rounded-2xl ${isSelected ? "bg-white/10" : "bg-cream-dark"}`}>
                        {pillar.icon}
                      </div>
                    </div>

                    <h3 className={`font-body text-xl font-bold leading-snug mb-2 ${isSelected ? "text-white" : "text-navy"}`}>
                      {pillar.title}
                    </h3>
                    <p className={`font-body text-xs font-semibold mb-3 ${isSelected ? "text-gold-light" : "text-gold"}`}>
                      {pillar.tagline}
                    </p>
                    <p className={`font-body text-sm leading-relaxed ${isSelected ? "text-slate-300" : "text-text-secondary"}`}>
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className={`font-body text-xs font-bold inline-flex items-center gap-1 ${isSelected ? "text-gold-light" : "text-navy"}`}>
                      {isSelected ? "Active Blueprint" : "Inspect Specs"} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Selected Pillar Deep-Dive Inspection Console ──────────────────── */}
          <div className="rounded-3xl border border-gold/40 bg-[#070E1E] text-white p-8 sm:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-white/15">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-gold">{selectedPillar.index}</span>
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  <span className="font-body text-xs font-semibold uppercase tracking-wider text-gold-light">Technical Spec Sheet</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-light text-white">
                  {selectedPillar.title}
                </h2>
                <p className="font-body text-sm text-slate-300 mt-1">{selectedPillar.tagline}</p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary self-start lg:self-auto shrink-0 shadow-lg"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                Book This Service on WhatsApp
              </a>
            </div>

            {/* Hardware & SLA Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
              <div className="lg:col-span-8">
                <h3 className="font-body text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  Standard Hardware & Infrastructure Deployment
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedPillar.hardware.map((item, i) => (
                    <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex items-start gap-3.5">
                      <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <p className="font-body text-sm leading-relaxed text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 rounded-2xl border border-gold/30 bg-white/[0.03] p-6 space-y-4">
                <div className="flex items-center gap-2 text-gold">
                  <Sparkles className="h-4 w-4" />
                  <span className="font-body text-xs font-bold uppercase tracking-wider">EvenRise Service SLA</span>
                </div>
                <p className="font-body text-xs text-slate-300 leading-relaxed">
                  {selectedPillar.sla}
                </p>
                <div className="pt-3 border-t border-white/10 text-xs text-slate-400">
                  <p>✓ Dedicated On-site Technical Director</p>
                  <p className="mt-1">✓ Pre-Event 3D Virtual Spatial Walkthrough</p>
                  <p className="mt-1">✓ Post-Event Telemetry & ROI Audit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
