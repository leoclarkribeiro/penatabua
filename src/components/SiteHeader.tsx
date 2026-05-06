import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const linkClass =
  "font-body text-xs sm:text-sm text-foreground/70 hover:text-primary transition-colors shrink-0 whitespace-nowrap";

const SiteHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-3 px-6 py-5 md:gap-4 md:px-12 md:py-6",
        "transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300",
        scrolled && "border-b border-border/50 bg-background/90 shadow-sm backdrop-blur-md",
      )}
    >
      {isHome ? (
        <button
          type="button"
          onClick={() => {
            navigate({ pathname: "/", hash: "" }, { replace: true });
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={cn(
            "font-display shrink-0 text-left text-base tracking-widest text-foreground uppercase md:text-lg",
            "transition-opacity hover:opacity-80",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
          aria-label="Voltar ao topo da página"
        >
          Pé na Tábua
        </button>
      ) : (
        <Link
          to="/"
          className={cn(
            "font-display shrink-0 text-left text-base tracking-widest text-foreground uppercase md:text-lg",
            "transition-opacity hover:opacity-80",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
        >
          Pé na Tábua
        </Link>
      )}
      <nav className="flex min-w-0 flex-1 justify-end" aria-label="Principal">
        <div className="flex max-w-full items-center gap-3 overflow-x-auto pb-0.5 sm:gap-5 md:gap-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {isHome ? (
            <>
              <a href="#historia" className={linkClass}>
                A História
              </a>
              <a href="#personagens" className={linkClass}>
                Personagens
              </a>
              <a href="#gallery" className={linkClass}>
                Galeria
              </a>
              <a href="#parceiros" className={linkClass}>
                Parceiros
              </a>
              <a href="#equipe" className={linkClass}>
                Equipe
              </a>
              <a
                href="#contato"
                className="font-display shrink-0 whitespace-nowrap border border-primary px-3 py-1.5 text-xs tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-5 sm:py-2 sm:text-sm"
              >
                Contato
              </a>
            </>
          ) : (
            <>
              <Link to="/#historia" className={linkClass}>
                A História
              </Link>
              <Link to="/#personagens" className={linkClass}>
                Personagens
              </Link>
              <Link to="/#gallery" className={linkClass}>
                Galeria
              </Link>
              <Link to="/#parceiros" className={linkClass}>
                Parceiros
              </Link>
              <Link to="/#equipe" className={linkClass}>
                Equipe
              </Link>
              <Link
                to="/#contato"
                className="font-display shrink-0 whitespace-nowrap border border-primary px-3 py-1.5 text-xs tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-5 sm:py-2 sm:text-sm"
              >
                Contato
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
