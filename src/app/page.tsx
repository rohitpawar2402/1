"use client";

import { useLenis } from "@/hooks/useLenis";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import MarqueeSection from "@/components/MarqueeSection";
import HeroSection from "@/sections/HeroSection";
import FeaturesSection from "@/sections/FeaturesSection";
import ShowcaseSection from "@/sections/ShowcaseSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import PricingSection from "@/sections/PricingSection";
import CTASection from "@/sections/CTASection";
import FooterSection from "@/sections/FooterSection";

export default function Home() {
  useLenis();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <FeaturesSection />
        <ShowcaseSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <FooterSection />
    </>
  );
}
