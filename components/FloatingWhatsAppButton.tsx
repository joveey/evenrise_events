"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FloatingWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappUrl = getWhatsAppUrl(
    "Hi EvenRise Events, I'd like to know more about your services."
  );

  // Show button after scrolling down a bit to avoid cluttering the hero section on load
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    // Initial check
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300 sm:bottom-8 sm:right-8",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-10 opacity-0"
      )}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-110 active:scale-95"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 whitespace-nowrap rounded-lg bg-navy px-3 py-2 font-body text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
          Chat with us
          {/* Tooltip triangle */}
          <span className="absolute left-full top-1/2 -mt-1.5 border-y-4 border-l-6 border-y-transparent border-l-navy" />
        </span>
      </a>
    </div>
  );
}
