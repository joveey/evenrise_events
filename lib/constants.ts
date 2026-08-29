// ─── Brand & Site ────────────────────────────────────────────────────────────
export const SITE = {
  name: "EvenRise Events",
  tagline: "Elevating Every Occasion",
  description:
    "EvenRise Events is a premier event management company specializing in corporate gatherings, private celebrations, and large-scale productions. We craft experiences that leave lasting impressions.",
  url: "https://www.evenriseevents.com",
} as const;

// ─── Contact ──────────────────────────────────────────────────────────────────
export const CONTACT = {
  whatsapp: "6281234567890",           // placeholder — ganti dengan nomor asli
  email: "hello@evenriseevents.com",   // placeholder
  phone: "+62 812-3456-7890",          // placeholder
  address: {
    street: "Jl. Sudirman No. 123",    // placeholder
    city: "Jakarta Selatan",
    province: "DKI Jakarta",
    country: "Indonesia",
    zip: "12190",
  },
} as const;

// ─── WhatsApp CTA helper ──────────────────────────────────────────────────────
export const getWhatsAppUrl = (message?: string) => {
  const encoded = encodeURIComponent(
    message ?? `Halo EvenRise Events, saya ingin mengetahui lebih lanjut tentang layanan Anda.`
  );
  return `https://wa.me/${CONTACT.whatsapp}?text=${encoded}`;
};

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Events",   href: "/events" },
  { label: "Contact",  href: "/contact" },
] as const;

// ─── Footer Quick Links ───────────────────────────────────────────────────────
export const FOOTER_LINKS = {
  company: [
    { label: "About Us",    href: "/#about" },
    { label: "Our Services",href: "/#services" },
    { label: "Upcoming Events", href: "/events" },
    { label: "Contact Us",  href: "/contact" },
  ],
  services: [
    { label: "Corporate Events",   href: "/#services" },
    { label: "Private Celebrations", href: "/#services" },
    { label: "Gala Dinners",       href: "/#services" },
    { label: "Conferences & Seminars", href: "/#services" },
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
