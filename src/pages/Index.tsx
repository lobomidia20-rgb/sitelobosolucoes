import { Navbar } from "@/components/Navbar";
import { HeroVideo } from "@/components/HeroVideo";
import { StatsSection } from "@/components/StatsSection";
import { AboutHistory } from "@/components/AboutHistory";
import { GrandesInstalacoesCarousel } from "@/components/GrandesInstalacoesCarousel";
import { StoriesCarousel } from "@/components/StoriesCarousel";
import { Footer } from "@/components/Footer";
import { SunCursor } from "@/components/SunCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background cursor-none">
      <SunCursor />
      <Navbar />
      <HeroVideo />
      <StatsSection />
      <AboutHistory />
      <GrandesInstalacoesCarousel />
      <StoriesCarousel />
      <Footer />
    </div>
  );
};

export default Index;