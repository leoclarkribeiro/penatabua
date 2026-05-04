import heroImage from "@/assets/Olimpiadas Torino 2006 008 NEW.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Jogos Olímpicos de Inverno, Torino 2006 — snowboard"
        className="absolute inset-0 w-full h-full object-cover object-top"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute inset-0 bg-background/40" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="font-body text-sm md:text-base tracking-[0.3em] text-foreground/60 uppercase mb-4 animate-fade-in">
          Documentário · 90 MIN · 2026
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-gradient-gold leading-none mb-6 animate-fade-in-up">
          Pé na Tábua
        </h1>
        <p className="font-body text-lg md:text-xl text-foreground/70 max-w-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
          A história do snowboard no Brasil
        </p>
        <p className="font-body text-base md:text-lg text-foreground/50 max-w-xl mt-4 italic animate-fade-in" style={{ animationDelay: "0.5s" }}>
          Como um país tropical sem neve se tornou uma força dominante nos Jogos Olímpicos de Inverno?
        </p>
      </div>

      <a
        href="#historia"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-foreground/40 hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
