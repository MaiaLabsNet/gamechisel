// LandingPage.tsx

// Imports
import FunctionalView from "@/components/landing/FunctionalView";
import Hero from "@/components/landing/Hero";
import InformationSection from "@/components/landing/InformationSection";
import NewsUpdates from "@/components/landing/Newsupdates";
import TrailerSection from "@/components/landing/TrailerSection";
import MediaSection from "@/components/landing/MediaSection";
import SkillsSection from "@/components/skills/SkillsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewsUpdates />
      <TrailerSection />
      <MediaSection />
      <FunctionalView />
      <InformationSection />
      <SkillsSection />
    </main>
  );
}
