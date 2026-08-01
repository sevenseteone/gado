import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";

import { ScreenTour } from "@/components/landing/ScreenTour";
import { WhyChoose } from "@/components/landing/WhyChoose";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { AppFeatures } from "@/components/landing/AppFeatures";
import { AboutUs } from "@/components/landing/AboutUs";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { StickyInstallBar } from "@/components/StickyInstallBar";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <ScreenTour />
        <WhyChoose />
        <HowItWorks />
        <AppFeatures />
        <AboutUs />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
      <StickyInstallBar />
    </>
  );
}
