import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarDays,
  MapPin,
  Clock,
  Building2,
  Users,
  MessageCircle,
  ArrowLeft,
  Share2,
  CheckCircle2,
  Cpu,
  Wifi,
  Video,
  Layers,
  ArrowRight
} from "lucide-react";
import { EVENTS, getEventBySlug, formatEventDate } from "@/data/events";
import { getWhatsAppUrl, SITE, CONTACT } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EVENTS.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };

  return {
    title: `${event.title} | ${SITE.name}`,
    description: event.shortDescription,
    openGraph: {
      title: event.title,
      description: event.shortDescription,
      images: [event.image],
    },
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const whatsappUrl = getWhatsAppUrl(
    `Hi EvenRise Events, I'd like to discuss getting involved or attending the event: "${event.title}". Could you provide more details?`
  );

  const relatedEvents = EVENTS.filter((e) => e.id !== event.id && e.status === event.status).slice(0, 2);

  // Technical Specs Mock Data based on category
  const technicalSpecs = [
    {
      icon: <Layers className="h-5 w-5 text-gold" />,
      title: "Stage & LED Scenography",
      detail: "Ultra-wide 4K P2.5 Curved Panoramic Video Wall with Real-Time Code Projection",
    },
    {
      icon: <Wifi className="h-5 w-5 text-gold" />,
      title: "Network Infrastructure",
      detail: "Dedicated 10Gbps Symmetrical Redundant Fiber with High-Density Enterprise Wi-Fi 6",
    },
    {
      icon: <Video className="h-5 w-5 text-gold" />,
      title: "Broadcasting & Audio",
      detail: "4K Multi-Camera Live Switcher, Line-Array Acoustics, and Low-Latency SRT Webcast",
    },
    {
      icon: <Cpu className="h-5 w-5 text-gold" />,
      title: "Operations & Management",
      detail: "24/7 On-site War Room, Automated QR Badge Registration, and Protocol Marshals",
    },
  ];

  // Agenda Sample
  const agenda = [
    { time: "08:00 – 09:00", title: "VIP Delegate Registration & Breakfast Networking", desc: "Badge issuance, attendee tech kits, and morning networking lounge." },
    { time: "09:00 – 10:30", title: "Opening Keynote & Executive Fireside Panel", desc: "Industry keynote presentation on future architectures and regional growth." },
    { time: "10:45 – 12:30", title: "Parallel Technical Tracks & Hands-On Breakouts", desc: "Deep-dive breakout tracks for software architects, DevOps, and AI practitioners." },
    { time: "12:30 – 14:00", title: "Executive Networking Lunch & Live Tech Demos", desc: "Interactive demo zones, software exhibition pavilions, and catered luncheon." },
    { time: "14:00 – 16:30", title: "Innovation Showcase, Pitch Arena & Code Demos", desc: "Live code demonstrations, product reveal staging, and judging panels." },
    { time: "16:30 – 18:00", title: "Accolade Ceremony, Closing Remarks & Cocktail Reception", desc: "Award presentations, concluding remarks, and evening networking." },
  ];

  return (
    <main className="min-h-screen bg-cream flex flex-col flex-1">
      {/* ── Header / Hero Banner ────────────────────────────────────────── */}
      <section className="relative bg-[#070E1E] text-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background Image with Vignette */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            priority
            unoptimized
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, rgba(7,14,30,0.6) 0%, #070E1E 95%)",
            }}
          />
        </div>

        <div className="container-site relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-body text-slate-300">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/events" className="hover:text-gold transition-colors">Events</Link>
            <span>/</span>
            <span className="text-gold-light truncate max-w-[200px] sm:max-w-none">{event.title}</span>
          </nav>

          {/* Category & Status Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex rounded-full bg-gold/15 border border-gold/30 px-3.5 py-1 font-body text-xs font-semibold uppercase tracking-wider text-gold-light">
              {event.category}
            </span>
            <span className={`inline-flex rounded-full px-3.5 py-1 font-body text-xs font-semibold uppercase tracking-wider ${
              event.status === "past" ? "bg-white/10 text-slate-300" : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
            }`}>
              {event.status === "past" ? "Past Event Archive" : "Upcoming Production"}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-white max-w-4xl">
            {event.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 font-body text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            {event.shortDescription}
          </p>

          {/* Event Quick Info Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/15 pt-6 max-w-3xl">
            <div className="flex items-start gap-2.5">
              <CalendarDays className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-[11px] uppercase tracking-wider text-slate-400">Date</p>
                <p className="font-body text-sm font-semibold text-white">{formatEventDate(event.date)}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-[11px] uppercase tracking-wider text-slate-400">Time</p>
                <p className="font-body text-sm font-semibold text-white">{event.time || "Full Day"}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-[11px] uppercase tracking-wider text-slate-400">Location</p>
                <p className="font-body text-sm font-semibold text-white">{event.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Users className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-[11px] uppercase tracking-wider text-slate-400">Scale</p>
                <p className="font-body text-sm font-semibold text-white">{event.capacity ? `${event.capacity}+ Delegates` : "Executive"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Grid ────────────────────────────────────────────── */}
      <section className="section-padding bg-cream flex-1">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Main Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <div className="rounded-3xl border border-cream-darker bg-white p-8 sm:p-10 shadow-sm">
                <h2 className="font-heading text-3xl font-light text-navy mb-4">
                  Event Overview & Production Scope
                </h2>
                <p className="font-body text-base text-text-secondary leading-relaxed mb-6">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-cream-dark">
                  {event.tags?.map((tag) => (
                    <span key={tag} className="rounded-full bg-cream-dark/60 border border-cream-darker px-3 py-1 font-body text-xs font-medium text-navy/80">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Infrastructure & AV Specifications */}
              <div className="rounded-3xl border border-cream-darker bg-white p-8 sm:p-10 shadow-sm">
                <h2 className="font-heading text-3xl font-light text-navy mb-2">
                  EvenRise Technical Production Specs
                </h2>
                <p className="font-body text-sm text-text-secondary mb-6">
                  Engineered hardware, networking, and stage infrastructure deployed for this event.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technicalSpecs.map((spec) => (
                    <div key={spec.title} className="rounded-2xl border border-cream-darker bg-cream/40 p-5 flex items-start gap-4">
                      <div className="rounded-xl bg-gold/15 p-2.5 shrink-0">
                        {spec.icon}
                      </div>
                      <div>
                        <h3 className="font-body text-sm font-bold text-navy">{spec.title}</h3>
                        <p className="font-body text-xs text-text-secondary mt-1 leading-relaxed">{spec.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Indicative Technical Agenda */}
              <div className="rounded-3xl border border-cream-darker bg-white p-8 sm:p-10 shadow-sm">
                <h2 className="font-heading text-3xl font-light text-navy mb-2">
                  Technical Run-of-Show Agenda
                </h2>
                <p className="font-body text-sm text-text-secondary mb-8">
                  Time-coded operational schedule executed by our on-site stage and broadcast showcallers.
                </p>

                <div className="relative border-l-2 border-gold/30 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-8">
                  {agenda.map((slot, index) => (
                    <div key={index} className="relative group">
                      <span className="absolute -left-[31px] sm:-left-[39px] top-1 h-3.5 w-3.5 rounded-full bg-gold border-2 border-white shadow-sm" />
                      <span className="font-mono text-xs font-bold text-gold tracking-wide block mb-1">
                        {slot.time}
                      </span>
                      <h3 className="font-body text-base font-bold text-navy">
                        {slot.title}
                      </h3>
                      <p className="font-body text-xs text-text-secondary mt-1 leading-relaxed">
                        {slot.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Event RSVP / Registration Action Card */}
              <div className="rounded-3xl border border-gold/40 bg-navy p-8 text-white shadow-xl sticky top-28">
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-light block mb-2">
                  Event Inquiries & RSVP
                </span>
                <h3 className="font-heading text-2xl font-light text-white mb-3">
                  Interested in this Event?
                </h3>
                <p className="font-body text-sm text-slate-300 mb-6 leading-relaxed">
                  Connect with our production team for delegate registration, sponsorship opportunities, or staging consultations.
                </p>

                <div className="space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full shadow-lg text-sm justify-center"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={2} />
                    Inquire on WhatsApp
                  </a>

                  <Link
                    href="/contact"
                    className="btn btn-outline w-full border-white/25 text-white hover:border-gold hover:bg-white/10 text-sm justify-center"
                  >
                    Send an Enquiry
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Venue:</span>
                    <span className="font-semibold text-white">{event.venue || event.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Production Status:</span>
                    <span className="font-semibold text-gold-light">EvenRise Certified</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Hotline:</span>
                    <span className="font-semibold text-white">{CONTACT.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Related Events Section ───────────────────────────────────── */}
          {relatedEvents.length > 0 && (
            <div className="mt-16 pt-12 border-t border-cream-darker">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading text-3xl font-light text-navy">
                  Other Featured Tech Events
                </h2>
                <Link href="/events" className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gold hover:text-navy transition-colors">
                  View All Events <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedEvents.map((item) => (
                  <Link
                    key={item.id}
                    href={`/events/${item.slug}`}
                    className="group rounded-2xl border border-cream-darker bg-white p-6 shadow-sm hover:border-gold/60 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-text-muted mb-2">
                        <span>{formatEventDate(item.date)}</span>
                        <span className="text-gold font-semibold uppercase">{item.category}</span>
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-navy group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-body text-xs text-text-secondary mt-2 line-clamp-2">
                        {item.shortDescription}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 font-body text-xs font-semibold text-gold mt-4 pt-3 border-t border-cream-dark">
                      Explore Event Details <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
