import { Link } from "@tanstack/react-router";
import { FORETAG } from "@/lib/foretag";
import logo from "@/assets/foto/logo.webp";

const LANK = "transition-colors hover:text-foreground";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <img
            src={logo}
            alt={FORETAG.kortnamn}
            width={640}
            height={260}
            loading="lazy"
            className="h-16 w-auto"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Ombyggnad av personbilar till A-traktorer, och en depå för service, reparation,
            försäljning och rekond. Kunder från hela Sverige.
          </p>
        </div>

        <div>
          <h2 className="text-sm tracking-widest text-foreground">Hitta hit</h2>
          <address className="mt-5 space-y-3 text-sm text-muted-foreground not-italic">
            <p>{FORETAG.adress}</p>
            {FORETAG.telefoner.map((t) => (
              <p key={t.lank}>
                <a
                  href={`tel:${t.lank}`}
                  className="text-base font-semibold text-foreground tabular-nums transition-colors hover:text-signal"
                >
                  {t.visning}
                </a>
              </p>
            ))}
            <p>
              <a href={`mailto:${FORETAG.epost}`} className={LANK}>
                {FORETAG.epost}
              </a>
            </p>
            <p className="flex flex-wrap gap-x-5 gap-y-2">
              <a
                href={FORETAG.vagbeskrivning}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-line underline-offset-4 transition-colors hover:text-foreground"
              >
                Vägbeskrivning
              </a>
              <a
                href={FORETAG.instagram}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-line underline-offset-4 transition-colors hover:text-foreground"
              >
                Instagram
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="text-sm tracking-widest text-foreground">Sidor</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/" className={LANK}>
                Hem
              </Link>
            </li>
            <li>
              <Link to="/a-traktor" className={LANK}>
                A-traktor
              </Link>
            </li>
            <li>
              <Link to="/depa" className={LANK}>
                Depå
              </Link>
            </li>
            <li>
              <Link to="/offert" className={LANK}>
                Begär offert
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className={LANK}>
                Kontakt
              </Link>
            </li>
            <li>
              <Link to="/integritetspolicy" className={LANK}>
                Integritetspolicy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-wrap justify-between gap-2 py-6 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {FORETAG.namn}
          </span>
          <span>Org.nr {FORETAG.orgnr}</span>
        </div>
      </div>
    </footer>
  );
}
