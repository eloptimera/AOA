import { createFileRoute } from "@tanstack/react-router";
import { ByggeBild, KnappPil, Omdomen, SlutCta } from "@/components/Block";
import { Reveal } from "@/components/Reveal";
import { FORETAG } from "@/lib/foretag";
import { BYGGEN, FAKTA, STEG } from "@/lib/innehall";

export const Route = createFileRoute("/a-traktor")({
  head: () => ({
    meta: [
      { title: "Ombyggnad till A-traktor | AOA Lidköping" },
      {
        name: "description",
        content:
          "AOA Lidköping bygger om personbilar till A-traktorer med fokus på kvalitet, säkerhet och stil. Så går ombyggnaden till, och det här gäller för en A-traktor.",
      },
      { property: "og:title", content: "Ombyggnad till A-traktor | AOA Lidköping" },
      {
        property: "og:description",
        content: "Vi bygger din A-traktor. Kunder från hela Sverige.",
      },
      { property: "og:url", content: "/a-traktor" },
    ],
    links: [{ rel: "canonical", href: "/a-traktor" }],
  }),
  component: ATraktor,
});

function ATraktor() {
  return (
    <>
      <section className="container-page pt-12 sm:pt-20">
        <Reveal>
          <p className="eyebrow">A-traktor</p>
          <h1 className="display-xl mt-4 max-w-5xl text-[clamp(2rem,6.6vw,5rem)]">
            Ombyggnad till <span className="text-signal">A-traktor</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Att bygga om personbilar till A-traktorer är vår specialitet. Vi lägger lika mycket
            omsorg på säkerheten som på hur bilen ser ut. Vi finns i {FORETAG.ort} och tar emot
            kunder från hela Sverige.
          </p>
          <div className="mt-8">
            <KnappPil to="/offert">Begär offert på ombyggnad</KnappPil>
          </div>
        </Reveal>
      </section>

      {/* Byggen */}
      <section className="container-page pt-16">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BYGGEN.map((b, i) => (
            <Reveal
              key={b.modell}
              delay={i * 90}
              className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <ByggeBild b={b} className="aspect-[4/3.4] h-full" />
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Några av våra byggen. Fler finns på{" "}
          <a
            href={FORETAG.instagram}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-signal"
          >
            Instagram, {FORETAG.instagramNamn}
          </a>
          .
        </p>
      </section>

      {/* Så går det till */}
      <section className="container-page pt-28 sm:pt-36">
        <Reveal>
          <p className="eyebrow">Så går det till</p>
          <h2 className="display-xl mt-4 max-w-3xl text-4xl sm:text-6xl">
            Från bil till A-traktor
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STEG.map((s, i) => (
            <li key={s.titel}>
              <Reveal delay={i * 90} className="h-full">
                <div
                  className={`flex h-full min-h-64 flex-col justify-between rounded-lg p-7 ${
                    i === STEG.length - 1 ? "bg-primary text-primary-foreground" : "bg-card"
                  }`}
                >
                  <span
                    className={`display-xl text-5xl tabular-nums ${
                      i === STEG.length - 1 ? "" : "text-signal"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <div className="mt-12">
                    <h3 className="text-xl sm:text-2xl">{s.titel}</h3>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        i === STEG.length - 1 ? "" : "text-muted-foreground"
                      }`}
                    >
                      {s.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Fakta */}
      <section className="container-page pt-28 sm:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Bra att veta</p>
            <h2 className="display-xl mt-4 text-4xl sm:text-5xl">Vad är en A-traktor?</h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              En A-traktor är en personbil som byggts om och registrerats som traktor. Den har tak,
              värme och säkerheten från en riktig bil. Därför väljer många familjer en A-traktor
              till tonåringen i stället för en moped.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <dl className="grid gap-px overflow-hidden rounded-lg bg-line">
              {FAKTA.map((f, i) => (
                <div
                  key={f.varde}
                  className={`grid gap-3 p-7 sm:grid-cols-[10rem_1fr] sm:items-baseline ${
                    i === 1 ? "bg-raised" : "bg-card"
                  }`}
                >
                  <dt className="display-xl text-5xl tabular-nums">
                    {f.varde}
                    {f.enhet && <span className="ml-1 text-xl text-signal">{f.enhet}</span>}
                  </dt>
                  <dd className="leading-relaxed text-muted-foreground">{f.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <Omdomen />

      <SlutCta rubrik="Vill du ha pris på en ombyggnad?" />
    </>
  );
}
