import heroImage from "@/assets/hero-snowboard.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Snowboarder carving through powder at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute inset-0 bg-background/40" />
      
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <span className="font-display text-lg tracking-widest text-foreground uppercase">
          Pé na Tabua
        </span>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="font-body text-sm text-foreground/70 hover:text-primary transition-colors">About</a>
          <a href="#gallery" className="font-body text-sm text-foreground/70 hover:text-primary transition-colors">Gallery</a>
          <a href="#video" className="font-body text-sm text-foreground/70 hover:text-primary transition-colors">Video</a>
          <a href="#sponsors" className="font-body text-sm text-foreground/70 hover:text-primary transition-colors">Sponsors</a>
          <a href="#contact" className="font-display text-sm tracking-wider px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            Contact
          </a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="font-body text-sm md:text-base tracking-[0.3em] text-foreground/60 uppercase mb-4 animate-fade-in">
          A Documentary Film
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-gradient-gold leading-none mb-6 animate-fade-in-up">
          Pé na Tabua
        </h1>
        <p className="font-body text-lg md:text-xl text-foreground/70 max-w-xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
          The untold story of snowboarding in Brazil
        </p>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-foreground/40 hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
