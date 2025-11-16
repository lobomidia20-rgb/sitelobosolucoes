import { Navbar } from "@/components/Navbar";
import { HeroVideo } from "@/components/HeroVideo";
import { StatsSection } from "@/components/StatsSection";
import { StoriesCarousel } from "@/components/StoriesCarousel";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroVideo />
      <StatsSection />
      <StoriesCarousel />
      <Footer />
    </div>
  );
};

export default Index;