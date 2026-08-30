import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "IT Event Services & Technical Infrastructure",
  description: `Explore EvenRise Events' specialized IT event production pillars: developer hackathons, enterprise AI summits, cybersecurity forums, 4K hybrid streams, and IT expos.`,
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
