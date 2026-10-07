import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { FORETAG, TELEFON } from "@/lib/foretag";
import logo from "@/assets/foto/logo.webp";

const LANKAR = [
  { to: "/", label: "Hem" },
  { to: "/a-traktor", label: "A-traktor" },
  { to: "/depa", label: "Depå" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

const LANK =
  "relative py-2 text-sm font-medium text-muted-foreground transition-colors duration-500 hover:text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.32,0.72,0,1)] hover:after:scale-x-100";

export function Header() {
  const [oppen, setOppen] = useState(false);

  useEffect(() => {
    if (!oppen) return;
    const stang = (e: KeyboardEvent) => e.key === "Escape" && setOppen(false);
    document.addEventListener("keydown", stang);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", stang);
      document.body.style.overflow = "";
    };
  }, [oppen]);

  return (
    <header className="sticky top-3 z-40 px-3 sm:px-5">
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Hoppa till innehållet
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 rounded-full border border-white/10 bg-background/80 pr-2.5 pl-5 shadow-[0_12px_40px_-12px_rgb(0_0_0/0.7),inset_0_1px_0_rgb(255_255_255/0.06)] backdrop-blur-xl">
        <Link to="/" aria-label={`${FORETAG.kortnamn}, startsida`} onClick={() => setOppen(false)}>
          <img src={logo} alt={FORETAG.kortnamn} width={640} height={260} className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Huvudmeny">
          {LANKAR.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className={LANK}
              activeProps={{ className: `${LANK} text-foreground after:scale-x-100` }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${TELEFON.lank}`}
            className="hidden items-center gap-2 lg:flex text-sm font-medium whitespace-nowrap transition-colors hover:text-signal"
          >
            <Phone className="size-4" strokeWidth={1.75} aria-hidden="true" />
            {TELEFON.visning}
          </a>
          <Link to="/offert" className="btn-base btn-primary min-h-11 py-1.5 pl-5">
            Begär offert
            <span className="btn-icon size-8">
              <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden="true" />
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <a
            href={`tel:${TELEFON.lank}`}
            aria-label={`Ring ${TELEFON.visning}`}
            className="flex size-11 items-center justify-center rounded-full"
          >
            <Phone className="size-5" strokeWidth={1.75} aria-hidden="true" />
          </a>
          <button
            type="button"
            aria-label={oppen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={oppen}
            aria-controls="mobilmeny"
            onClick={() => setOppen((o) => !o)}
            className="relative flex size-11 items-center justify-center rounded-full bg-raised"
          >
            <span
              className={`absolute h-0.5 w-5 bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                oppen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                oppen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      <nav
        id="mobilmeny"
        aria-label="Mobilmeny"
        aria-hidden={!oppen}
        className={`fixed inset-0 -z-10 flex flex-col justify-center gap-2 bg-background/95 px-8 pt-24 pb-10 backdrop-blur-2xl transition-opacity duration-500 md:hidden ${
          oppen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {LANKAR.map((l, i) => (
          <Link
            key={l.to}
            to={l.to}
            tabIndex={oppen ? 0 : -1}
            onClick={() => setOppen(false)}
            style={{ transitionDelay: oppen ? `${120 + i * 70}ms` : "0ms" }}
            className={`display-xl text-5xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              oppen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-signal" }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          to="/offert"
          tabIndex={oppen ? 0 : -1}
          onClick={() => setOppen(false)}
          className="btn-base btn-primary mt-8 self-start"
        >
          Begär offert
          <span className="btn-icon">
            <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden="true" />
          </span>
        </Link>
      </nav>
    </header>
  );
}
