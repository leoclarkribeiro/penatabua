import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
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
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace(/^#/, "");
    if (!id) return;
    const raf = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(raf);
  }, [location.pathname, location.hash]);

  return (
    <main className="bg-background min-h-screen">
      <SiteHeader />
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
