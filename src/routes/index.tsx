import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, Handshake, Phone, Users } from "lucide-react";
import { Blob, Linjer } from "@/components/Brand";
import { Heading, Mark } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { FORETAG } from "@/lib/foretag";
import { TJANSTER } from "@/lib/tjanster";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Städfirma i Göteborg för företag & fastigheter – AOA" },
      {
        name: "description",
        content:
          "Professionell lokalvård för företag, kontor, fastighetsägare och BRF:er i Göteborg. Få fri offert.",
      },
      {
        property: "og:title",
        content: "Städfirma i Göteborg för företag & fastigheter – AOA",
      },
      {
        property: "og:description",
        content: "Kontorsstädning, fastighetsstädning och lokalvård i Göteborg. Få fri offert.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Start,
});

const TRYGGHET = ["Fri offert"] as const;

const FORDELAR = [
  // TODO AOA: ersätt med AOA:s egna fördelar.
  {
    ikon: Handshake,
    titel: "Tydlig offert",
    text: "Du får en tydlig offert utifrån dina behov, så att du vet vad som ingår.",
  },
  {
    ikon: BadgeCheck,
    titel: "Personlig kontakt",
    text: "Du har en tydlig kontaktväg och får snabb återkoppling.",
  },
  {
    ikon: Users,
    titel: "Anpassat upplägg",
    text: "Upplägg och frekvens anpassas efter din verksamhets storlek och behov.",
  },
] as const;

const KORTSTIL = [
  "bg-brand text-white",
  "border-2 border-line bg-white text-ink",
  "bg-ink text-white",
] as const;

function Start() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto flex max-w-[88rem] flex-col px-6 pt-6 pb-14 sm:px-10 lg:min-h-[min(46rem,calc(100svh-4.5rem))] lg:pb-12">
          <div className="caps flex items-start justify-between gap-6 text-ink max-sm:justify-end">
            <span aria-hidden="true" className="hidden sm:inline">
              Kontor · Fastighet · Lokalvård
            </span>
            <span>
              {FORETAG.ort}
            </span>
          </div>

          {/* Ordbild över blob och linjer */}
          <div className="relative my-10 flex flex-1 items-center justify-center lg:my-4">
            <Blob className="absolute top-1/2 left-1/2 -z-10 w-[min(72vw,44rem)] -translate-x-[48%] -translate-y-[56%]" />
            <Linjer className="absolute inset-x-[-1.5rem] top-1/2 -z-10 h-[min(34vw,26rem)] min-h-40 w-[calc(100%+3rem)] -translate-y-1/2 text-ink/80 sm:inset-x-[-2.5rem] sm:w-[calc(100%+5rem)]" />
            <p
              aria-hidden="true"
              className="font-display text-[min(24vw,20rem)] leading-[0.9] font-medium tracking-[-0.02em] text-ink uppercase select-none"
            >
              {FORETAG.kortnamn}
            </p>
          </div>

          <div className="grid items-end gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <h1 className="max-w-2xl text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.12]">
              Professionell <Mark>lokalvård</Mark> för företag och fastigheter i {FORETAG.ort}
            </h1>
            <div>
              <p className="max-w-md leading-relaxed text-ink/80">
                Kontorsstädning, trapphusstädning och lokalvård för företag, fastighetsägare och
                BRF:er. Skicka en förfrågan så återkommer vi med fri offert.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link to="/offert" className="btn-base btn-dark">
                  Få fri offert
                </Link>
                {FORETAG.telefon ? (
                  <a href={`tel:${FORETAG.telefonLank}`} className="btn-base btn-outline">
                    <Phone className="size-4" aria-hidden="true" />
                    {FORETAG.telefon}
                  </a>
                ) : (
                  <Link to="/kontakt" className="btn-base btn-outline">
                    Kontakta oss
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tjänster */}
      <section id="tjanster" className="container-page py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow">Tjänster</p>
          <Heading className="mt-4 max-w-2xl text-4xl sm:text-5xl">
            Lokalvård för <Mark>företag</Mark> och fastigheter
          </Heading>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {TJANSTER.map((t, i) => (
            <Reveal key={t.id} delay={i * 70}>
              <Link
                to="/tjanster"
                hash={t.id}
                className={`group flex h-full min-h-[18rem] flex-col justify-between rounded-[2rem] p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${KORTSTIL[i]}`}
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-14 place-items-center rounded-full bg-white/20 ring-1 ring-current/15">
                    <t.ikon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="grid size-11 place-items-center rounded-full bg-white text-brand transition-colors group-hover:bg-sun group-hover:text-ink">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-10">
                  <h3 className="text-3xl">{t.titel}</h3>
                  <p className="mt-3 leading-relaxed opacity-90">{t.kort}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Varför AOA */}
      <section className="bg-fade-tint py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Varför {FORETAG.kortnamn}</p>
            <Heading className="mt-4 max-w-2xl text-4xl sm:text-5xl">
              Därför välja <Mark>{FORETAG.kortnamn}</Mark>
            </Heading>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {FORDELAR.map((f, i) => (
              <Reveal key={f.titel} delay={i * 80}>
                <article className="h-full rounded-[2rem] bg-white p-8 shadow-sm shadow-brand/10">
                  <span className="grid size-14 place-items-center rounded-full bg-brand text-white">
                    <f.ikon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl">{f.titel}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{f.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Om oss */}
      <section className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
        <Reveal>
          <p className="eyebrow">Om {FORETAG.kortnamn}</p>
          <Heading className="mt-4 max-w-2xl text-4xl sm:text-5xl">
            Städfirma i <Mark>{FORETAG.ort}</Mark>
          </Heading>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {FORETAG.namn} är ett lokalvårdsbolag med säte i {FORETAG.ort}. Vi tar hand om
            kontorsstädning, fastighetsstädning och övrig lokalvård för företag, fastighetsägare och
            organisationer.
          </p>
          <Link to="/om-oss" className="btn-base btn-outline mt-8">
            Läs mer om oss
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <dl className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-[2rem] bg-ink p-6 text-white">
              <dt className="text-xs font-bold tracking-[0.14em] text-sun uppercase">Säte</dt>
              <dd className="mt-3 font-display text-2xl sm:text-4xl">{FORETAG.ort}</dd>
            </div>
            {FORETAG.anstallda && (
              <div className="col-span-2 rounded-[2rem] bg-tint p-6">
                <dt className="text-xs font-bold tracking-[0.14em] text-brand uppercase">
                  Anställda
                </dt>
                <dd className="mt-3 font-display text-3xl text-ink">{FORETAG.anstallda}</dd>
              </div>
            )}
          </dl>
        </Reveal>
      </section>

      {/* Avslutande CTA */}
      <section className="px-3 pb-3 sm:px-6">
        <Reveal>
          <div className="panel-ink relative isolate mx-auto max-w-[88rem] overflow-hidden rounded-[2rem] px-6 py-16 sm:px-14 sm:py-24">
            <Blob className="absolute top-1/2 -right-24 -z-10 hidden w-[34rem] -translate-y-1/2 lg:block" />
            <p className="caps text-white/70">Kontakt</p>
            <h2 className="mt-5 max-w-2xl text-[clamp(2.2rem,5vw,4.25rem)] leading-[1.05]">
              Redo för <Mark>rena</Mark> lokaler?
            </h2>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/offert" className="btn-base btn-white">
                Få fri offert
              </Link>
              <Link to="/kontakt" className="btn-base btn-outline-white">
                Kontakta oss
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
