import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import UpcomingEventsSection from "@/components/home/UpcomingEventsSection";
import CTABannerSection from "@/components/home/CTABannerSection";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <UpcomingEventsSection />
      <CTABannerSection />
    </>
  );
}
