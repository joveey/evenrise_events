import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";

// ─── Site Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "EvenRise Events",
    template: "%s | EvenRise Events",
  },
  description: SITE.description,
  keywords: [
    "tech event organizer",
    "IT conference management",
    "developer hackathon organizer",
    "cybersecurity summit",
    "corporate tech events",
    "IT expo production",
    "Jakarta",
    "Indonesia",
    "EvenRise Events",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: `${SITE.url}/logo.png`,
        width: 1200,
        height: 630,
        alt: `${SITE.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1B33",
  width: "device-width",
  initialScale: 1,
};

// ─── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 flex flex-col" id="main-content">
          {children}
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
