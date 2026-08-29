"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE, getWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const whatsappUrl = getWhatsAppUrl();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out",
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-[0_1px_20px_rgba(11,27,51,0.25)]"
          : "bg-transparent"
      )}
    >
      <nav className="container-site flex items-center justify-between h-20">

        {/* ── Logo ─────────────────────────────────────────── */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 group"
          aria-label={`${SITE.name} — Back to Home`}
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-sm">
            <Image
              src="/logo.png"
              alt={`${SITE.name} logo`}
              fill
              sizes="44px"
              className="object-contain object-center"
              priority
              unoptimized
            />
          </div>
          <span className="font-heading text-xl font-light tracking-wide text-cream transition-colors duration-300 group-hover:text-gold">
            {SITE.name}
          </span>
        </Link>

        {/* ── Desktop Nav ───────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-sm font-medium tracking-wide text-cream/75 hover:text-gold transition-colors duration-200 relative group"
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* ── CTA Button ────────────────────────────────────── */}
        <div className="hidden md:flex items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="navbar-cta-whatsapp"
            className={cn(
              "btn btn-sm",
              scrolled ? "btn-outline" : "btn-primary"
            )}
          >
            <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} />
            Get in Touch
          </a>
        </div>

        {/* ── Mobile Hamburger ──────────────────────────────── */}
        <button
          className="md:hidden p-2 rounded-md text-cream/80 hover:text-gold transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="h-6 w-6" strokeWidth={1.75} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.75} />
          )}
        </button>
      </nav>

      {/* ── Mobile Menu ───────────────────────────────────────── */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-navy/98 backdrop-blur-md",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <ul className="container-site flex flex-col py-6 gap-1" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3.5 text-cream/75 hover:text-gold font-body text-base font-medium tracking-wide transition-colors duration-150 border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Mobile CTA */}
          <li className="pt-5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-cta-whatsapp"
              className="btn btn-primary w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Get in Touch via WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
