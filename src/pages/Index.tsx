import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import SponsorsSection from "@/components/SponsorsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <VideoSection />
      <SponsorsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
