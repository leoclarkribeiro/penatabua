import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyNowSection from "@/components/WhyNowSection";
import CharactersSection from "@/components/CharactersSection";
import GallerySection from "@/components/GallerySection";
import CinematicSection from "@/components/CinematicSection";
import VideoSection from "@/components/VideoSection";
import SponsorsSection from "@/components/SponsorsSection";
import EquipeSection from "@/components/EquipeSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <AboutSection />
      <WhyNowSection />
      <CharactersSection />
      <GallerySection />
      <CinematicSection />
      <VideoSection />
      <SponsorsSection />
      <EquipeSection />
      <FooterSection />
    </main>
  );
};

export default Index;
