import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Events",
  description: `Browse upcoming and past events organised by ${SITE.name}. From corporate conferences and gala dinners to weddings and exhibitions — ${SITE.tagline}.`,
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
