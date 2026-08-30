// ─── Event Data Types ──────────────────────────────────────────────────────────
export type EventCategory =
  | "Tech Conference & Summit"
  | "Cybersecurity & Cloud Forum"
  | "IT Expo & Product Launch"
  | "Hackathon & Dev Challenge"
  | "Developer Bootcamp & Workshop"
  | "Virtual & Hybrid Tech";

export type EventStatus = "upcoming" | "past";

export interface Event {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;   // 1–2 sentences for cards
  description: string;         // fuller text for detail view
  date: string;                // ISO 8601, e.g. "2025-09-15"
  endDate?: string;            // optional multi-day end date
  time?: string;               // e.g. "09:00 – 17:00 WIB"
  location: string;            // city/country
  venue?: string;              // venue name
  category: EventCategory;
  status: EventStatus;
  image: string;               // URL
  imageAlt: string;
  featured?: boolean;          // shown on homepage preview
  capacity?: number;
  tags?: string[];
}

// ─── All IT & Tech Events ──────────────────────────────────────────────────────

export const EVENTS: Event[] = [
  // ── Upcoming ──────────────────────────────────────────────────────────────

  {
    id: "evt-001",
    slug: "techforward-ai-cloud-summit-2025",
    title: "TechForward AI & Cloud Summit 2025",
    shortDescription:
      "A premier gathering of 1,000+ CTOs, AI researchers, and cloud architects shaping enterprise digital transformation in Southeast Asia.",
    description:
      "TechForward AI & Cloud Summit brings together industry pioneers, enterprise technology executives, and AI practitioners across two days of keynote stages, architectural breakout tracks, and curated C-suite networking. EvenRise delivers end-to-end stage scenography, VIP speaker protocol, and technical live production.",
    date: "2025-09-20",
    endDate: "2025-09-21",
    time: "08:00 – 18:00 WIB",
    location: "Jakarta, Indonesia",
    venue: "Grand Hyatt Jakarta & Convention Ballroom",
    category: "Tech Conference & Summit",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Keynote presentation at a premier international technology and AI summit",
    featured: true,
    capacity: 1000,
    tags: ["ai", "cloud", "summit", "enterprise", "tech"],
  },

  {
    id: "evt-002",
    slug: "cybershield-national-security-forum-2025",
    title: "CyberShield Enterprise Security Forum & Awards",
    shortDescription:
      "The benchmark conference for cybersecurity leaders, zero-trust architects, and data defense practitioners in Southeast Asia.",
    description:
      "CyberShield brings together over 400 Chief Information Security Officers (CISOs), ethical hackers, and enterprise defense leaders. EvenRise oversees the dark-mode cyber stage scenography, interactive threat-simulation rooms, and the prestigious Cybersecurity Excellence Gala Dinner.",
    date: "2025-10-04",
    time: "08:30 – 21:00 WIB",
    location: "Jakarta, Indonesia",
    venue: "The Ritz-Carlton Mega Kuningan",
    category: "Cybersecurity & Cloud Forum",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format&fit=crop",
    imageAlt: "High-tech cybersecurity forum with digital light displays and executive delegates",
    featured: true,
    capacity: 450,
    tags: ["cybersecurity", "infosec", "zero-trust", "awards", "b2b"],
  },

  {
    id: "evt-003",
    slug: "indotech-expo-innovation-pavilion-2025",
    title: "IndoTech Expo & Enterprise Software Pavilion",
    shortDescription:
      "Showcasing 120+ leading enterprise SaaS solutions, AI platforms, and robotics innovations to 8,000+ industry professionals.",
    description:
      "EvenRise is the appointed production and operations partner for IndoTech Expo 2025. Scope includes turnkey booth engineering, developer demo zones, silent theater audio setups, and integrated digital badge registration across 3 massive exhibition halls at ICE BSD City.",
    date: "2025-10-17",
    endDate: "2025-10-20",
    time: "09:00 – 17:30 WIB",
    location: "Tangerang, Indonesia",
    venue: "ICE BSD City (Hall 1–3)",
    category: "IT Expo & Product Launch",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Modern tech exhibition hall with interactive demo booths and crowds",
    featured: true,
    capacity: 8000,
    tags: ["expo", "saas", "software", "innovation", "enterprise"],
  },

  {
    id: "evt-004",
    slug: "fintech-dev-hackathon-2025",
    title: "FinTech & Web3 Developer 48-Hour Hackathon",
    shortDescription:
      "An intensive 48-hour continuous coding sprint uniting 400+ top software engineers to build next-generation payment and AI agent protocols.",
    description:
      "A high-octane engineering marathon designed for developers, solution architects, and UI/UX specialists. EvenRise manages 24/7 high-speed fiber infrastructure, technical war rooms, catering stations, live countdown graphics, and the grand finale stage presentations with live jury scoring.",
    date: "2025-11-08",
    endDate: "2025-11-10",
    time: "48 Hours Non-stop",
    location: "Bandung, Indonesia",
    venue: "Telkom Landmark Innovation Center",
    category: "Hackathon & Dev Challenge",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Developer hackathon with engineers coding on multiple monitors and laptops",
    featured: false,
    capacity: 400,
    tags: ["hackathon", "developers", "fintech", "coding", "web3"],
  },

  {
    id: "evt-005",
    slug: "kubernetes-platform-engineering-bootcamp-2025",
    title: "Enterprise Kubernetes & SRE Platform Bootcamp",
    shortDescription:
      "An intensive, hands-on workshop track for DevOps leads and cloud engineers mastering multi-cloud resilience and GitOps pipelines.",
    description:
      "Designed for senior platform engineers and DevOps managers, this two-day immersive technical bootcamp combines hands-on cluster failure simulations, live debugging challenges, and architecture deep-dives. EvenRise facilitates dedicated lab pod environments, audio-visual optimization, and executive delegate amenities.",
    date: "2025-11-20",
    endDate: "2025-11-21",
    time: "08:30 – 17:30 WIB",
    location: "Jakarta, Indonesia",
    venue: "The Langham Jakarta",
    category: "Developer Bootcamp & Workshop",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Software engineers in a technical training room collaborating on architectural blueprints",
    featured: false,
    capacity: 120,
    tags: ["kubernetes", "devops", "cloud", "workshop", "sre"],
  },

  {
    id: "evt-006",
    slug: "quantum-edge-ai-hardware-launch-2025",
    title: "Quantum Edge & Neural AI Hardware Reveal",
    shortDescription:
      "A dramatic product reveal event unveiling next-generation neural processing units and edge AI appliances for enterprise data centers.",
    description:
      "EvenRise produced this high-impact product launch event featuring theatrical holographic projections, dynamic motorized LED split-screens, synchronized laser lighting, and live hands-on benchmark testing zones for 500 enterprise IT directors and technology journalists.",
    date: "2025-12-03",
    time: "18:00 – 21:30 WIB",
    location: "Jakarta, Indonesia",
    venue: "Fairmont Hotel Grand Ballroom",
    category: "IT Expo & Product Launch",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Futuristic hardware product launch with glowing circuit aesthetic and stage spotlights",
    featured: false,
    capacity: 500,
    tags: ["hardware", "launch", "deeptech", "ai", "keynote"],
  },

  {
    id: "evt-007",
    slug: "apac-dataops-distributed-systems-hybrid-summit-2025",
    title: "APAC DataOps & Distributed Systems Hybrid Summit",
    shortDescription:
      "Connecting 2,500+ data engineers and ML architects — live in Jakarta with interactive streaming hubs in Singapore and Tokyo.",
    description:
      "A flagship multi-hub hybrid event connecting distributed engineering teams across APAC. EvenRise powers the low-latency multi-camera satellite uplinks, synchronized live Q&A hubs, interactive digital breakout rooms, and high-definition on-demand recording architecture.",
    date: "2025-12-12",
    time: "09:00 – 18:00 WIB",
    location: "Jakarta · Singapore · Tokyo",
    venue: "Jakarta Convention Center & Global Stream",
    category: "Virtual & Hybrid Tech",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Hybrid tech conference stage with live stream broadcast monitors and delegates",
    featured: false,
    capacity: 2500,
    tags: ["data", "distributed-systems", "hybrid", "streaming", "apac"],
  },

  // ── Past ──────────────────────────────────────────────────────────────────

  {
    id: "evt-008",
    slug: "asean-ciso-cloud-security-summit-2024",
    title: "ASEAN CISO Cloud Governance & Security Summit 2024",
    shortDescription:
      "An exclusive, closed-door symposium for 300 cybersecurity chiefs addressing regional data privacy laws and zero-day threat defense.",
    description:
      "An invitation-only executive forum for banking, government, and telecommunications security leaders. EvenRise managed full confidential roundtables, acoustic dampening protocols, encrypted digital polling systems, and five-star private executive dining.",
    date: "2024-11-14",
    endDate: "2024-11-15",
    time: "08:00 – 18:00 WIB",
    location: "Jakarta, Indonesia",
    venue: "Raffles Jakarta",
    category: "Cybersecurity & Cloud Forum",
    status: "past",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Executive panel discussion on enterprise technology strategy and security",
    featured: false,
    capacity: 300,
    tags: ["ciso", "cloud", "security", "leadership", "executive"],
  },

  {
    id: "evt-009",
    slug: "indonesia-opensource-ai-con-2024",
    title: "Indonesia Open Source Software & AI Con 2024",
    shortDescription:
      "Over 1,200 software engineers celebrating open-source frameworks, high-throughput databases, and LLM tooling across 6 technical tracks.",
    description:
      "Indonesia's largest community and enterprise open-source convention. EvenRise handled rapid 6-track parallel stage management, community booth villages, live code showcase stages, and sponsor brand activations.",
    date: "2024-12-07",
    time: "09:00 – 19:00 WIB",
    location: "Jakarta, Indonesia",
    venue: "Balai Kartini Convention Center",
    category: "Tech Conference & Summit",
    status: "past",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Vibrant tech conference auditorium filled with software developers and technology enthusiasts",
    featured: false,
    capacity: 1200,
    tags: ["opensource", "software", "ai", "developers", "conference"],
  },

  {
    id: "evt-010",
    slug: "fintech-infrastructure-payment-demo-day-2024",
    title: "FinTech Infrastructure & Core Banking Demo Day 2024",
    shortDescription:
      "A high-stakes presentation arena where 20 fintech infrastructure innovators demonstrated real-time ledger and instant payment APIs.",
    description:
      "EvenRise orchestrated the live technical stage feeds, real-time code projection, digital investor scoring consoles, and bespoke networking cocktail reception connecting founders with institutional tech funds across APAC.",
    date: "2024-09-21",
    time: "13:00 – 20:00 WIB",
    location: "Bali, Indonesia",
    venue: "W Bali Seminyak & Tech Amphitheater",
    category: "IT Expo & Product Launch",
    status: "past",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Tech founders and investors at a high-end fintech demo day presentation",
    featured: false,
    capacity: 250,
    tags: ["fintech", "banking", "demoday", "investors", "software"],
  },
];

// ─── Derived Lists ────────────────────────────────────────────────────────────

/** All unique category values present in data. */
export const ALL_CATEGORIES: EventCategory[] = [
  "Tech Conference & Summit",
  "Cybersecurity & Cloud Forum",
  "IT Expo & Product Launch",
  "Hackathon & Dev Challenge",
  "Developer Bootcamp & Workshop",
  "Virtual & Hybrid Tech",
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Returns only featured events, sorted by date ascending. */
export function getFeaturedEvents(): Event[] {
  return EVENTS.filter((e) => e.featured).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

/** Returns events filtered by category. */
export function getEventsByCategory(category: EventCategory): Event[] {
  return EVENTS.filter((e) => e.category === category);
}

/** Returns events filtered by status. */
export function getEventsByStatus(status: EventStatus): Event[] {
  return EVENTS.filter((e) => e.status === status);
}

/** Finds a single event by slug. */
export function getEventBySlug(slug: string): Event | undefined {
  return EVENTS.find((e) => e.slug === slug);
}

/** Formats an event date for display, e.g. "20 September 2025" */
export function formatEventDate(dateStr: string, locale = "en-GB"): string {
  return new Date(dateStr).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Formats a short month+year display, e.g. "Sep 2025" */
export function formatEventMonth(dateStr: string, locale = "en-GB"): string {
  return new Date(dateStr).toLocaleDateString(locale, {
    month: "short",
    year: "numeric",
  });
}
