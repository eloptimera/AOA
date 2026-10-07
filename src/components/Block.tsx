import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { FORETAG, TELEFON } from "@/lib/foretag";
import { OMDOMEN, type Bygge } from "@/lib/innehall";

/** Rund knapp med pil i egen cirkel. */
export function KnappPil({ to, children }: { to: "/offert" | "/kontakt"; children: ReactNode }) {
  return (
    <Link to={to} className="btn-base btn-primary">
      {children}
      <span className="btn-icon">
        <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden="true" />
      </span>
    </Link>
  );
}

/** Understruken textlänk med pil. */
export function PilLank({
  to,
  children,
}: {
  to: "/a-traktor" | "/depa" | "/kontakt";
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 border-b border-foreground/40 pb-1 font-medium transition-colors duration-500 hover:border-signal hover:text-signal"
    >
      {children}
      <ArrowUpRight
        className="size-4 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={1.75}
        aria-hidden="true"
      />
    </Link>
  );
}

/** Foto av ett bygge med modellnamn i en etikett. */
export function ByggeBild({
  b,
  className = "",
  prioritet = false,
}: {
  b: Bygge;
  className?: string;
  prioritet?: boolean;
}) {
  return (
    <figure className={`relative min-h-64 overflow-hidden rounded-lg ${className}`}>
      <img
        src={b.src}
        alt={b.alt}
        width={b.w}
        height={b.h}
        loading={prioritet ? "eager" : "lazy"}
        fetchPriority={prioritet ? "high" : "auto"}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105"
      />
      <figcaption className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-background/85 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
        <span className="lgf w-2.5 text-primary" aria-hidden="true" />
        {b.modell}
      </figcaption>
    </figure>
  );
}

export function Omdomen() {
  return (
    <section className="container-page pt-28 sm:pt-40">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow">Omdömen</p>
          <p className="display-xl mt-4 text-8xl tabular-nums sm:text-9xl">{FORETAG.betyg}</p>
          <p className="mt-3 text-muted-foreground">
            av 5 i snitt på Google. Läs fler och följ byggena på{" "}
            <a
              href={FORETAG.instagram}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-signal"
            >
              Instagram
            </a>
            .
          </p>
        </Reveal>

        <div className="grid gap-12 sm:grid-cols-2 sm:gap-8">
          {OMDOMEN.map((o, i) => (
            <Reveal key={o.namn} delay={100 + i * 120} className={i === 1 ? "sm:mt-24" : ""}>
              <figure>
                <blockquote className="text-xl leading-snug font-medium sm:text-2xl">
                  ”{o.text}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-muted-foreground">
                  {o.namn}, omdöme på {o.kalla}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Avslutande orange ruta med telefonnummer. */
export function SlutCta({ rubrik }: { rubrik: string }) {
  return (
    <section className="container-page pt-28 sm:pt-40">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-xl bg-primary px-6 py-14 text-primary-foreground sm:px-14 sm:py-20">
          <span
            aria-hidden="true"
            className="lgf absolute -right-16 -bottom-10 -z-10 hidden w-[26rem] text-black/10 lg:block"
          />
          <h2 className="max-w-xl text-3xl sm:text-4xl">{rubrik}</h2>
          <a
            href={`tel:${TELEFON.lank}`}
            className="display-xl mt-6 inline-block text-[clamp(2rem,9vw,6.5rem)] tabular-nums transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:translate-x-2"
          >
            {TELEFON.visning}
          </a>
          <p className="mt-6 max-w-md leading-relaxed">
            Eller mejla{" "}
            <a
              href={`mailto:${FORETAG.epost}`}
              className="font-semibold underline underline-offset-4"
            >
              {FORETAG.epost}
            </a>
            .{" "}
            <Link to="/offert" className="font-semibold underline underline-offset-4">
              Skicka en offertförfrågan
            </Link>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
