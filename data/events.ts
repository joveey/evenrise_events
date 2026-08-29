// ─── Event Data Types ──────────────────────────────────────────────────────────

export type EventCategory =
  | "Corporate & Conference"
  | "Wedding & Celebration"
  | "Exhibition & Launch"
  | "Seminar & Workshop"
  | "Gala & Award Night"
  | "Virtual & Hybrid";

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
  image: string;               // Unsplash URL
  imageAlt: string;
  featured?: boolean;          // shown on homepage preview
  capacity?: number;
  tags?: string[];
}

// ─── All Events ───────────────────────────────────────────────────────────────

export const EVENTS: Event[] = [
  // ── Upcoming ──────────────────────────────────────────────────────────────

  {
    id: "evt-001",
    slug: "techforward-annual-summit-2025",
    title: "TechForward Annual Summit 2025",
    shortDescription:
      "A premier gathering of industry leaders, innovators, and decision-makers shaping the future of technology in Southeast Asia.",
    description:
      "TechForward Annual Summit brings together 800+ technology executives, startup founders, and investors across two days of keynotes, panel discussions, and curated networking sessions. EvenRise manages end-to-end production, speaker logistics, and on-site coordination for this flagship regional event.",
    date: "2025-09-20",
    endDate: "2025-09-21",
    time: "08:00 – 18:00 WIB",
    location: "Jakarta, Indonesia",
    venue: "Grand Hyatt Jakarta",
    category: "Corporate & Conference",
    status: "upcoming",
    image: "/images/event-summit.jpg",
    imageAlt: "International technology and leadership summit in a modern convention center auditorium",
    featured: true,
    capacity: 800,
    tags: ["tech", "summit", "corporate", "b2b"],
  },

  {
    id: "evt-002",
    slug: "aurora-gala-dinner-2025",
    title: "Aurora Gala Dinner & Awards",
    shortDescription:
      "An elegant evening celebrating excellence across industries — fine dining, live entertainment, and the night's most prestigious awards.",
    description:
      "Aurora Gala Dinner & Awards is an annual black-tie celebration recognising outstanding achievements across multiple industry sectors. EvenRise handles the full creative concept — from table décor and lighting design to entertainment curation and award production — ensuring a seamless evening of prestige and warmth.",
    date: "2025-10-04",
    time: "18:30 – 23:00 WITA",
    location: "Bali, Indonesia",
    venue: "The Mulia Bali",
    category: "Gala & Award Night",
    status: "upcoming",
    image: "/images/event-gala.jpg",
    imageAlt: "Prestigious corporate gala awards night in a luxury ballroom setup",
    featured: true,
    capacity: 300,
    tags: ["gala", "awards", "luxury", "evening"],
  },

  {
    id: "evt-003",
    slug: "trade-expo-indonesia-pavilion-2025",
    title: "Trade Expo Indonesia Pavilion",
    shortDescription:
      "Managing the national pavilion and brand experience for Indonesia's largest international trade exhibition.",
    description:
      "EvenRise is appointed as the official production partner for the national pavilion at Trade Expo Indonesia 2025. Our scope covers booth design and construction, experiential zone management, daily operations, and VIP tour coordination across the five-day event at ICE BSD City.",
    date: "2025-10-17",
    endDate: "2025-10-21",
    time: "09:00 – 17:00 WIB",
    location: "Tangerang, Indonesia",
    venue: "ICE BSD City",
    category: "Exhibition & Launch",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Large exhibition hall with booths, displays, and crowd",
    featured: true,
    capacity: 5000,
    tags: ["exhibition", "trade", "b2b", "national"],
  },

  {
    id: "evt-004",
    slug: "heritage-wedding-raisa-dion-2025",
    title: "Heritage Wedding — Raisa & Dion",
    shortDescription:
      "An intimate garden wedding with a heritage Javanese aesthetic, blending tradition with understated modern elegance.",
    description:
      "Raisa and Dion's wedding was a refined celebration of cultural heritage and intimate love. EvenRise curated every element — from the hand-batik table runners and floral installations to the 12-course tasting menu and live gamelan ensemble — creating a day that felt deeply personal and extraordinarily beautiful.",
    date: "2025-11-08",
    time: "10:00 – 22:00 WIB",
    location: "Yogyakarta, Indonesia",
    venue: "Plataran Heritage Borobudur",
    category: "Wedding & Celebration",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Elegant outdoor wedding ceremony with floral arch and warm golden lighting",
    featured: false,
    capacity: 120,
    tags: ["wedding", "javanese", "heritage", "garden"],
  },

  {
    id: "evt-005",
    slug: "digital-leadership-workshop-2025",
    title: "Digital Leadership & Innovation Workshop",
    shortDescription:
      "A hands-on two-day workshop for senior executives navigating digital transformation and leading high-performance teams.",
    description:
      "Designed for C-suite and senior management, this intensive workshop combines expert facilitation, case-study analysis, and collaborative sprint sessions. EvenRise manages venue setup, AV production, catering, and participant materials — ensuring a focused and distraction-free learning environment.",
    date: "2025-11-20",
    endDate: "2025-11-21",
    time: "08:30 – 17:00 WIB",
    location: "Jakarta, Indonesia",
    venue: "The Langham Jakarta",
    category: "Seminar & Workshop",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Modern workshop room with presentation screen and participants",
    featured: false,
    capacity: 60,
    tags: ["workshop", "leadership", "digital", "executive"],
  },

  {
    id: "evt-006",
    slug: "nexgen-product-launch-2025",
    title: "NexGen Automotive — Regional Launch Event",
    shortDescription:
      "A high-impact regional product unveiling for a leading automotive brand, combining spectacle with precise brand storytelling.",
    description:
      "EvenRise was engaged to produce NexGen Automotive's regional launch across Jakarta, Surabaya, and Medan. Our team developed the creative concept, managed the reveal production, coordinated media attendance, and delivered a consistent brand experience across all three cities within a single week.",
    date: "2025-12-03",
    endDate: "2025-12-07",
    time: "19:00 – 22:00 WIB",
    location: "Jakarta · Surabaya · Medan",
    venue: "Multi-city Roadshow",
    category: "Exhibition & Launch",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Sleek product launch event with dramatic lighting and stage reveal",
    featured: false,
    capacity: 400,
    tags: ["launch", "automotive", "roadshow", "brand"],
  },

  {
    id: "evt-007",
    slug: "elevate-hybrid-summit-2025",
    title: "Elevate HR & People Summit — Hybrid Edition",
    shortDescription:
      "A progressive HR conference bringing together 2,000+ people leaders — live in Jakarta, streamed globally.",
    description:
      "Elevate is Southeast Asia's fastest-growing HR conference, and our hybrid production team makes it accessible worldwide. EvenRise manages live stage production at the Jakarta venue, multi-camera livestream, digital engagement tools, virtual breakout rooms, and post-event replay distribution — delivering a cohesive experience for both in-room and online audiences.",
    date: "2025-12-12",
    time: "09:00 – 17:00 WIB",
    location: "Jakarta, Indonesia",
    venue: "Assembly Hall Jakarta Convention Center",
    category: "Virtual & Hybrid",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Hybrid event production setup with broadcast screens and live audience",
    featured: false,
    capacity: 2000,
    tags: ["hr", "hybrid", "summit", "people"],
  },

  // ── Past ──────────────────────────────────────────────────────────────────

  {
    id: "evt-008",
    slug: "peak-leadership-forum-2024",
    title: "PEAK Leadership Forum 2024",
    shortDescription:
      "An annual gathering for 300 senior executives exploring strategy, resilience, and leadership in a post-digital era.",
    description:
      "PEAK Leadership Forum is a curated, invitation-only forum bringing together the region's most accomplished business leaders. EvenRise delivered full event production — venue transformation, speaker management, curated dining experience, and post-forum publication materials — for the second consecutive year.",
    date: "2024-11-14",
    endDate: "2024-11-15",
    time: "08:00 – 18:00 WIB",
    location: "Jakarta, Indonesia",
    venue: "Raffles Jakarta",
    category: "Corporate & Conference",
    status: "past",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Executive conference panel with speakers on stage",
    featured: false,
    capacity: 300,
    tags: ["leadership", "forum", "executive", "annual"],
  },

  {
    id: "evt-009",
    slug: "luminary-gala-2024",
    title: "Luminary Gala 2024",
    shortDescription:
      "A charity gala evening raising funds for education access initiatives, featuring a live auction and world-class entertainment.",
    description:
      "Luminary Gala is an annual fundraising gala supporting underprivileged students across Indonesia. EvenRise managed the full event production — theming, floral design, AV, entertainment bookings, and the live auction production — helping the foundation raise a record-breaking sum in a single evening.",
    date: "2024-12-07",
    time: "18:00 – 23:30 WIB",
    location: "Jakarta, Indonesia",
    venue: "The Ritz-Carlton Pacific Place",
    category: "Gala & Award Night",
    status: "past",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Glamorous charity gala with stage and decorated ballroom",
    featured: false,
    capacity: 450,
    tags: ["charity", "gala", "fundraiser", "social"],
  },

  {
    id: "evt-010",
    slug: "blossom-wedding-yuki-marco-2024",
    title: "Blossom Garden Wedding — Yuki & Marco",
    shortDescription:
      "A multi-cultural celebration uniting Japanese and Italian traditions in a lush Bali garden setting.",
    description:
      "Yuki and Marco's wedding was a beautiful cross-cultural union — a three-day celebration blending Japanese ikebana arrangements with Italian al-fresco dining. EvenRise coordinated all vendor management, cultural ceremony logistics, guest experience touchpoints, and the final gala evening reception.",
    date: "2024-09-21",
    endDate: "2024-09-23",
    time: "16:00 – 23:00 WITA",
    location: "Bali, Indonesia",
    venue: "Alila Villas Uluwatu",
    category: "Wedding & Celebration",
    status: "past",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Garden wedding ceremony in Bali with tropical floral decor",
    featured: false,
    capacity: 80,
    tags: ["wedding", "multicultural", "bali", "destination"],
  },
];

// ─── Derived Lists ────────────────────────────────────────────────────────────

/** All unique category values present in data. */
export const ALL_CATEGORIES: EventCategory[] = [
  "Corporate & Conference",
  "Wedding & Celebration",
  "Exhibition & Launch",
  "Seminar & Workshop",
  "Gala & Award Night",
  "Virtual & Hybrid",
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
