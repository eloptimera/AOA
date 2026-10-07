import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FORETAG } from "@/lib/foretag";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt | AOA Lidköping" },
      {
        name: "description",
        content:
          "Ring 072-188 56 58, mejla kontakt@aoalid.se eller kom förbi AOA Lidköping på Staplaregatan 6 i Lidköping.",
      },
      { property: "og:title", content: "Kontakt | AOA Lidköping" },
      {
        property: "og:description",
        content: "Ring, mejla eller skriv på Instagram. Staplaregatan 6, Lidköping.",
      },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Kontakt,
});

const UTLANK =
  "inline-flex items-center gap-1.5 border-b border-foreground/40 pb-0.5 transition-colors hover:border-signal hover:text-signal";

function Kontakt() {
  return (
    <>
      <section className="container-page pt-12 sm:pt-20">
        <Reveal>
          <h1 className="display-xl max-w-4xl text-[clamp(2rem,6.6vw,5rem)]">Kontakt</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Ring, mejla eller skriv till oss på Instagram. Ska du komma förbi, ring gärna innan så
            vet du att vi är på plats.
          </p>
        </Reveal>
      </section>

      <section className="container-page grid gap-3 pt-14 lg:grid-cols-[1.25fr_1fr]">
        <Reveal>
          <div className="flex h-full min-h-72 flex-col justify-between rounded-lg bg-ink p-7 text-ink-foreground sm:p-10">
            <Phone className="size-9 text-orange" strokeWidth={1.5} aria-hidden="true" />
            <div className="mt-12">
              <p className="text-sm text-white/80">Ring oss</p>
              <ul className="mt-2 space-y-1">
                {FORETAG.telefoner.map((t) => (
                  <li key={t.lank}>
                    <a
                      href={`tel:${t.lank}`}
                      className="display-xl inline-block text-[clamp(1.75rem,5.4vw,3.75rem)] tabular-nums transition-[transform,color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:translate-x-2 hover:text-orange"
                    >
                      {t.visning}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex h-full flex-col justify-between rounded-lg border border-line bg-card p-7 sm:p-10">
            <MapPin className="size-9 text-signal" strokeWidth={1.5} aria-hidden="true" />
            <div className="mt-12">
              <h2 className="text-lg">Hitta hit</h2>
              <address className="mt-4 leading-relaxed text-muted-foreground not-italic">
                {FORETAG.kortnamn}
                <br />
                {FORETAG.gata}
                <br />
                {FORETAG.postnummer} {FORETAG.ort}
              </address>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                <a
                  href={FORETAG.vagbeskrivning}
                  target="_blank"
                  rel="noreferrer"
                  className={UTLANK}
                >
                  Vägbeskrivning
                  <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden="true" />
                </a>
                <a href={FORETAG.kartLank} target="_blank" rel="noreferrer" className={UTLANK}>
                  Visa på karta
                  <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0}>
          <a
            href={`mailto:${FORETAG.epost}`}
            className="group flex h-full flex-col justify-between rounded-lg bg-raised p-7 sm:p-10"
          >
            <Mail className="size-9 text-signal" strokeWidth={1.5} aria-hidden="true" />
            <div className="mt-12">
              <p className="text-sm text-muted-foreground">Mejla oss</p>
              <p className="mt-2 text-2xl font-semibold break-all transition-colors group-hover:text-signal sm:text-3xl">
                {FORETAG.epost}
              </p>
            </div>
          </a>
        </Reveal>

        <Reveal delay={120}>
          <a
            href={FORETAG.instagram}
            target="_blank"
            rel="noreferrer"
            className="group flex h-full flex-col justify-between rounded-lg border border-line bg-card p-7 sm:p-10"
          >
            <Instagram className="size-9 text-signal" strokeWidth={1.5} aria-hidden="true" />
            <div className="mt-12">
              <p className="text-sm text-muted-foreground">Följ byggena</p>
              <p className="mt-2 text-2xl font-semibold transition-colors group-hover:text-signal sm:text-3xl">
                {FORETAG.instagramNamn}
              </p>
            </div>
          </a>
        </Reveal>
      </section>
    </>
  );
}
