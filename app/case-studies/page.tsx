import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Wifi,
  Radio,
  Layers,
  Sparkles
} from "lucide-react";
import { getWhatsAppUrl, CONTACT } from "@/lib/constants";

const CASE_STUDIES = [
  {
    id: "case-01",
    tag: "Developer Hackathon & 24/7 Operations",
    title: "Powering Indonesia's Largest 48-Hour AI & Web3 Hackathon",
    client: "FinTech Innovation Consortium",
    scale: "400 Developers · 85 Teams · 48 Hours Non-Stop",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop",
    challenge:
      "Supporting 400 continuous active coders across a 48-hour continuous coding sprint without any network throttling, power interruption, or audio-visual delay during live jury pitch rounds.",
    solution:
      "EvenRise engineered dual-homed 10Gbps symmetrical fiber circuits with automated BGP failover, deployed 24 high-density Wi-Fi 6 access points, and set up a 24/7 technical operations war room to monitor bandwidth in real-time.",
    results: [
      { metric: "0 seconds", label: "Network Packet Downtime" },
      { metric: "4.8 TB", label: "Data Transferred in 48h" },
      { metric: "100%", label: "Live Code Mirroring Uptime" },
      { metric: "85/85", label: "Teams Presented Without Glitch" },
    ],
    quote: "EvenRise handled power redundancy, Wi-Fi density, and live pitch staging so smoothly that our teams could focus 100% on writing code.",
    author: "Sarah Jenkins, Head of DevRel APAC",
  },
  {
    id: "case-02",
    tag: "Hybrid Multi-City Broadcast Summit",
    title: "APAC Enterprise Cloud Architecture Summit Across 18 Regional Hubs",
    client: "Global Cloud Services Group",
    scale: "1,500 In-Person Delegates · 18 Virtual Hubs · 12,000 Concurrent Viewers",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80&auto=format&fit=crop",
    challenge:
      "Broadcasting high-definition keynote presentations live from Jakarta to 18 remote regional offices with sub-50ms latency, two-way interactive audio for live Q&A, and simultaneous multilingual translation.",
    solution:
      "We deployed a 4K multi-camera OB truck with redundant satellite and fiber uplinks, coupled with low-latency SRT transmission portals and dedicated breakout translation channels.",
    results: [
      { metric: "38 ms", label: "Average Stream Latency" },
      { metric: "12,000+", label: "Concurrent Global Viewers" },
      { metric: "99.98%", label: "Stream Quality Score" },
      { metric: "4 Languages", label: "Simultaneous Interpretation" },
    ],
    quote: "Zero buffer, instant audio sync between Singapore, Jakarta, and Tokyo — our executive board was deeply impressed by the technical standard.",
    author: "Budi Santoso, VP of Product Architecture",
  },
  {
    id: "case-03",
    tag: "Enterprise IT Expo & Theatrical Reveal",
    title: "CyberShield Security Expo & Theatrical Neural Hardware Launch",
    client: "CyberShield Defense Network",
    scale: "120 Interactive Demo Booths · 5,000 Visitors · 1 Holographic Stage Reveal",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
    challenge:
      "Transforming an empty convention hall into an immersive dark-mode cybersecurity arena with 120 live product demo pods and an unforgettable keynote hardware launch reveal.",
    solution:
      "Custom architectural modular booth builds with dedicated Gigabit drops, synchronized laser and curved LED reveal choreography, and silent-theater audio headsets for parallel vendor presentations.",
    results: [
      { metric: "120 Pods", label: "Built in 36 Hours" },
      { metric: "5,000+", label: "Badged Attendees Scanned" },
      { metric: "98.7%", label: "Exhibitor Satisfaction Score" },
      { metric: "100%", label: "Stage Reveal Cue Synchronization" },
    ],
    quote: "The holographic product reveal set a new benchmark for tech launches in Indonesia. EvenRise delivered absolute stage magic.",
    author: "Irfan Pratama, Chief Technology Officer",
  },
];

export default function CaseStudiesPage() {
  const whatsappUrl = getWhatsAppUrl(
    "Hi EvenRise Events, I've reviewed your case studies and would like to discuss producing an event of similar scale."
  );

  return (
    <main className="min-h-screen bg-cream flex flex-col flex-1">
      {/* ── Header ────────────────────────────────────────────── */}
      <section className="relative bg-[#070E1E] text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(201,162,75,0.18) 0%, #070E1E 75%)",
          }}
          aria-hidden="true"
        />

        <div className="container-site relative z-10 text-center flex flex-col items-center">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-body text-slate-400">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-light">Case Studies</span>
          </nav>

          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3 block">
            Proven Technical Track Record
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white max-w-4xl leading-tight">
            High-Stakes Productions, <em className="italic text-gold-light">Zero Failures</em>
          </h1>
          <p className="mt-5 font-body text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Examine how EvenRise resolves complex IT networking, stage engineering, and broadcast challenges for Southeast Asia&apos;s leading technology enterprises.
          </p>
        </div>
      </section>

      {/* ── Case Studies List ───────────────────────────────────── */}
      <section className="section-padding bg-cream flex-1">
        <div className="container-site space-y-16">
          {CASE_STUDIES.map((item, index) => (
            <article
              key={item.id}
              className="rounded-3xl border border-cream-darker bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left: Image & Quick Stats */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-navy overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover object-center opacity-85"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(7,14,30,0.92) 0%, rgba(7,14,30,0.4) 60%, transparent 100%)",
                    }}
                  />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block rounded-full bg-gold/20 border border-gold/40 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-gold-light mb-2">
                      {item.tag}
                    </span>
                    <p className="font-body text-xs text-slate-300 font-semibold">{item.scale}</p>
                    <p className="font-body text-xs text-gold-light mt-0.5">Client: {item.client}</p>
                  </div>
                </div>

                {/* Right: Technical Breakdown */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-light text-navy leading-snug mb-4">
                      {item.title}
                    </h2>

                    <div className="space-y-4 text-sm text-text-secondary font-body leading-relaxed mb-8">
                      <div>
                        <h3 className="font-bold text-navy text-xs uppercase tracking-wider mb-1">
                          The Challenge:
                        </h3>
                        <p>{item.challenge}</p>
                      </div>

                      <div>
                        <h3 className="font-bold text-navy text-xs uppercase tracking-wider mb-1">
                          EvenRise Technical Solution:
                        </h3>
                        <p>{item.solution}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-cream border border-cream-darker mb-6">
                      {item.results.map((res, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="font-heading text-2xl font-bold text-gold leading-none">
                            {res.metric}
                          </span>
                          <span className="font-body text-[11px] text-text-secondary mt-1">
                            {res.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote & CTA Footer */}
                  <div className="pt-6 border-t border-cream-dark flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="font-body text-xs italic text-text-secondary max-w-md">
                      &ldquo;{item.quote}&rdquo; — <span className="font-semibold text-navy">{item.author}</span>
                    </p>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline shrink-0 text-xs py-2 px-4 border-navy/20 text-navy hover:border-gold hover:text-gold"
                    >
                      Inquire Similar Scope
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Bottom Banner */}
          <div className="rounded-3xl border border-gold/40 bg-navy p-10 text-white text-center flex flex-col items-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-white mb-3">
              Ready to Stage Your Next Benchmark Event?
            </h2>
            <p className="font-body text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed mb-8">
              Discuss your architectural staging, Wi-Fi bandwidth requirements, and broadcast needs directly with our executive technical team.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary shadow-xl"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Schedule Event Consultation on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
