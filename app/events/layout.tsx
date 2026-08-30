import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Events",
  description: `Browse upcoming and past technology events organised by ${SITE.name}. From AI summits and developer hackathons to enterprise IT expos and cybersecurity forums — ${SITE.tagline}.`,
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
