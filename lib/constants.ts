// ─── Brand & Site ────────────────────────────────────────────────────────────
export const SITE = {
  name: "EvenRise Events",
  tagline: "Premier IT & Tech Event Management",
  description:
    "EvenRise Events is Southeast Asia's leading technology event management and production partner — powering developer hackathons, enterprise AI summits, cybersecurity forums, and high-impact IT expos with broadcast-grade precision.",
  url: "https://www.evenriseevents.com",
} as const;

// ─── Contact ──────────────────────────────────────────────────────────────────
export const CONTACT = {
  whatsapp: "6282114972543",
  email: "hello@evenriseevents.com",
  phone: "+62 821-1497-2543",
  address: {
    street: "Jl. Sudirman No. 123",
    city: "Jakarta Selatan",
    province: "DKI Jakarta",
    country: "Indonesia",
    zip: "12190",
  },
} as const;

// ─── WhatsApp CTA helper ──────────────────────────────────────────────────────
export const getWhatsAppUrl = (message?: string) => {
  const encoded = encodeURIComponent(
    message ?? `Hi EvenRise Events, I'd like to learn more about your event management services.`
  );
  return `https://wa.me/${CONTACT.whatsapp}?text=${encoded}`;
};

export const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Events",   href: "/events" },
  { label: "Contact",  href: "/contact" },
] as const;

// ─── Footer Quick Links ───────────────────────────────────────────────────────
export const FOOTER_LINKS = {
  company: [
    { label: "About Us",        href: "/#about" },
    { label: "Our Services",    href: "/services" },
    { label: "Tech Events",     href: "/events" },
    { label: "Case Studies",    href: "/case-studies" },
    { label: "Contact Us",      href: "/contact" },
  ],
  services: [
    { label: "Tech Summits & Keynotes", href: "/services" },
    { label: "Developer Hackathons",    href: "/services" },
    { label: "Enterprise IT Expos",     href: "/services" },
    { label: "Hybrid Tech Broadcasts",  href: "/services" },
  ],
} as const;

// ─── Social Media ─────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/evenriseevents",   // placeholder
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/evenriseevents", // placeholder
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/evenriseevents",    // placeholder
    icon: "facebook",
  },
] as const;
