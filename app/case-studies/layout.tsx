import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies & Production Portfolio",
  description: `Explore real-world technical case studies produced by ${SITE.name}: 48-hour developer hackathons with zero packet loss, 18-city hybrid summits, and high-stakes tech expos.`,
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
