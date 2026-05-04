import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { gruposEntrevistados } from "@/data/entrevistados";

const Entrevistados = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background pb-24 pt-24 md:pt-28">
      <SiteHeader />

      <div className="container mx-auto px-6 md:px-12">
        <Link
          to="/#personagens"
          className="group mb-10 inline-flex items-center gap-2 font-body text-sm text-primary transition-colors hover:text-primary/80 md:text-base"
        >
          <ArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-0.5" aria-hidden />
          Voltar à página principal
        </Link>

        <header className="mx-auto max-w-3xl text-center">
          <p className="font-body mb-4 text-sm uppercase tracking-[0.3em] text-primary">Pé na Tábua</p>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Lista <span className="text-gradient-gold">em andamento</span>
          </h1>
        </header>

        <div className="mx-auto mt-12 max-w-5xl space-y-16 md:mt-16">
          {gruposEntrevistados.map((grupo) => (
            <section key={grupo.id} aria-labelledby={`grupo-${grupo.id}`}>
              <h2
                id={`grupo-${grupo.id}`}
                className="font-display mb-6 border-b border-border pb-3 text-2xl font-bold text-foreground md:text-3xl"
              >
                {grupo.titulo}
                <span className="ml-2 font-body text-base font-normal text-muted-foreground">
                  ({grupo.pessoas.length})
                </span>
              </h2>
              <div className="overflow-x-auto rounded-sm border border-border bg-card/40 shadow-sm">
                <table className="w-full min-w-[28rem] text-left text-sm md:text-base">
                  <thead>
                    <tr className="border-b border-border bg-card">
                      <th className="font-display px-4 py-3 text-xs uppercase tracking-wider text-foreground/90 md:px-6 md:py-4">
                        Nome
                      </th>
                      <th className="font-display px-4 py-3 text-xs uppercase tracking-wider text-foreground/90 md:px-6 md:py-4">
                        Título
                      </th>
                      <th className="font-display w-24 px-4 py-3 text-xs uppercase tracking-wider text-foreground/90 md:w-28 md:px-6 md:py-4">
                        Local
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {grupo.pessoas.map((p) => (
                      <tr
                        key={`${grupo.id}-${p.nome}`}
                        className="border-b border-border/60 last:border-0 transition-colors hover:bg-background/60"
                      >
                        <td className="font-body px-4 py-3 font-medium text-foreground md:px-6 md:py-3.5">
                          {p.nome}
                        </td>
                        <td className="font-body px-4 py-3 text-foreground/80 md:px-6 md:py-3.5">{p.titulo}</td>
                        <td className="font-body px-4 py-3 text-muted-foreground md:px-6 md:py-3.5">{p.local}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>

        <div className="mx-auto mt-20 flex max-w-5xl justify-center border-t border-border pt-12">
          <Link
            to="/#personagens"
            className="font-display inline-flex items-center gap-2 border border-primary px-8 py-3 text-sm tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Voltar à página principal
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Entrevistados;
