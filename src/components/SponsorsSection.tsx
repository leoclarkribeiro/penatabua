import { Handshake, Eye, Globe, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Global Visibility",
    desc: "Your brand featured across international film festivals, streaming platforms, and press coverage.",
  },
  {
    icon: Globe,
    title: "Cross-Cultural Reach",
    desc: "Connect with audiences in Brazil and worldwide through an authentic, compelling story.",
  },
  {
    icon: TrendingUp,
    title: "Brand Alignment",
    desc: "Associate with resilience, adventure, and the spirit of breaking boundaries.",
  },
  {
    icon: Handshake,
    title: "Custom Partnerships",
    desc: "Flexible sponsorship tiers from product placement to title sponsorship.",
  },
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
            Partnership
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Become a <span className="text-gradient-gold">Sponsor</span>
          </h2>
          <p className="font-body text-foreground/70 text-lg max-w-2xl mx-auto">
            Join us in telling this extraordinary story. We're looking for partners who share 
            our passion for adventure, culture, and pushing boundaries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="p-6 rounded-sm bg-background border border-border hover:border-primary/30 transition-colors group"
            >
              <b.icon className="text-primary mb-4" size={28} />
              <h3 className="font-display text-lg text-foreground mb-2 normal-case">{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block font-display text-sm tracking-widest uppercase px-10 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Request Sponsorship Deck
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
