import { Mail, Youtube } from "lucide-react";

const FOOTER_EMAIL = "penatabua.snow@gmail.com";
const FOOTER_EMAIL_GMAIL_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${FOOTER_EMAIL}`;
const FOOTER_EMAIL_MAILTO_HREF = `mailto:${FOOTER_EMAIL}`;

const XLogo = ({ size = 22 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.54l-5.12-6.7L5.2 22H1.95l7.6-8.68L1.5 2h6.7l4.63 6.11L18.244 2Zm-1.14 18h1.8L7.23 3.9H5.3L17.104 20Z" />
  </svg>
);

const FooterSection = () => {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const popup = window.open(FOOTER_EMAIL_GMAIL_HREF, "_blank", "noopener,noreferrer");
    if (!popup) {
      window.location.href = FOOTER_EMAIL_MAILTO_HREF;
    }
  };

  return (
    <footer id="contato" className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Entre em <span className="text-gradient-gold">Contato</span>
            </h2>
            <div className="flex items-center gap-6">
              <a
                href={FOOTER_EMAIL_MAILTO_HREF}
                onClick={handleEmailClick}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Enviar e-mail"
              >
                <Mail size={22} />
              </a>
              <a href="https://youtube.com/@LeoClarkPéNaTábua" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={22} />
              </a>
              <a
                href="https://x.com/PeNaTabua"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="X do Pé na Tábua"
              >
                <XLogo size={22} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <p className="font-display text-5xl md:text-6xl font-bold text-gradient-gold mb-4">
              Pé na Tábua
            </p>
            <p className="font-body text-foreground/60 italic mb-4">
              É a história de como um país tropical decidiu conquistar a neve e o fez.
            </p>
            <p className="font-body text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pé na Tábua. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
