import Image from "next/image";
import Link from "next/link";
import {
  SITE,
  CONTACT,
  FOOTER_LINKS,
  SOCIAL_LINKS,
  getWhatsAppUrl,
} from "@/lib/constants";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

// ── Social icon mapping (inline SVGs for brand logos) ─────────────────────────
const SocialIcon = ({ icon }: { icon: string }) => {
  const cls = "h-4 w-4 fill-current";
  switch (icon) {
    case "instagram":
      return (
        <svg className={cls} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      );
    case "linkedin":
      return (
        <svg className={cls} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case "facebook":
      return (
        <svg className={cls} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );
    default:
      return <ExternalLink className="h-4 w-4" strokeWidth={1.75} />;
  }
};

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream/80 border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* ── Main Footer Content ──────────────────────────────────────────── */}
      <div className="container-site pt-20 pb-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* ── Brand Column ──────────────────────────────── */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <Link href="/" aria-label={`${SITE.name} — Back to Home`}>
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt={`${SITE.name} logo`}
                    fill
                    sizes="48px"
                    className="object-contain object-left"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold text-cream leading-tight">
                    {SITE.name}
                  </p>
                  <p className="font-body text-xs text-gold tracking-widest uppercase">
                    {SITE.tagline}
                  </p>
                </div>
              </div>
            </Link>

            {/* Description */}
            <p className="font-body text-sm leading-relaxed text-cream/60 max-w-xs">
              {SITE.description}
            </p>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-cta-whatsapp"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm font-medium text-gold hover:bg-gold hover:text-navy hover:border-gold transition-all duration-200"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Contact Us
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-cream/50 hover:border-gold/50 hover:text-gold transition-all duration-200"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Company Links ─────────────────────────────── */}
          <div className="space-y-5">
            <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gold">
              Company
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-gold transition-colors duration-150 inline-flex items-center gap-1.5 group"
                  >
                    <span
                      className="h-px w-3 bg-gold/40 transition-all duration-200 group-hover:w-5 group-hover:bg-gold"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services Links ────────────────────────────── */}
          <div className="space-y-5">
            <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gold">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-gold transition-colors duration-150 inline-flex items-center gap-1.5 group"
                  >
                    <span
                      className="h-px w-3 bg-gold/40 transition-all duration-200 group-hover:w-5 group-hover:bg-gold"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ──────────────────────────────── */}
          <div className="space-y-5">
            <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gold">
              Contact
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-3 text-sm text-cream/60 hover:text-gold transition-colors duration-150 group"
                >
                  <Mail
                    className="h-4 w-4 mt-0.5 shrink-0 text-gold/60 group-hover:text-gold transition-colors"
                    strokeWidth={1.75}
                  />
                  <span className="font-body">{CONTACT.email}</span>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${CONTACT.whatsapp}`}
                  className="flex items-start gap-3 text-sm text-cream/60 hover:text-gold transition-colors duration-150 group"
                >
                  <Phone
                    className="h-4 w-4 mt-0.5 shrink-0 text-gold/60 group-hover:text-gold transition-colors"
                    strokeWidth={1.75}
                  />
                  <span className="font-body">{CONTACT.phone}</span>
                </a>
              </li>

              <li>
                <address className="not-italic flex items-start gap-3 text-sm text-cream/60">
                  <MapPin
                    className="h-4 w-4 mt-0.5 shrink-0 text-gold/60"
                    strokeWidth={1.75}
                  />
                  <span className="font-body leading-relaxed">
                    {CONTACT.address.street}
                    <br />
                    {CONTACT.address.city}, {CONTACT.address.province}
                    <br />
                    {CONTACT.address.country} {CONTACT.address.zip}
                  </span>
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Gold Divider ──────────────────────────────────────────────────── */}
      <div className="container-site">
        <div
          className="h-px"
          style={{ background: "var(--gold-gradient)", opacity: 0.25 }}
          aria-hidden="true"
        />
      </div>

      {/* ── Bottom Bar ────────────────────────────────────────────────────── */}
      <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-cream/40 text-center sm:text-left">
          &copy; {year} {SITE.name}. All rights reserved.
        </p>
        <p className="font-body text-xs text-cream/30 text-center sm:text-right">
          {SITE.tagline}
        </p>
      </div>
    </footer>
  );
}
