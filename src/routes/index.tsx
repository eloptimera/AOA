import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Bild, KnappPil, Omdomen, PilLank, SlutCta } from "@/components/Block";
import { Reveal } from "@/components/Reveal";
import { FORETAG } from "@/lib/foretag";
import { BYGGEN, DEPA, FAKTA } from "@/lib/innehall";
import logoLidkoping from "@/assets/foto/logo-lidkoping.webp";
import logoDepa from "@/assets/foto/logo-depa.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AOA Lidköping | Vi bygger din A-traktor" },
      {
        name: "description",
        content:
          "Specialister på att bygga om personbilar till A-traktorer, med fokus på kvalitet, säkerhet och stil. Depå för service, reparation, försäljning och rekond i Lidköping.",
      },
      { property: "og:title", content: "AOA Lidköping | Vi bygger din A-traktor" },
      {
        property: "og:description",
        content: "Ombyggnad till A-traktor och en depå för service, reparation och rekond.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Start,
});

function Start() {
  return (
    <>
      {/* Hero */}
      <section className="container-page flex min-h-[calc(100dvh-5rem)] flex-col gap-8 pt-8 pb-6 lg:pt-10">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,30rem)_1fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="hero-rise eyebrow [--i:2]">{FORETAG.ort} · Kunder från hela Sverige</p>
            <p className="hero-rise mt-4 max-w-sm text-base leading-relaxed text-muted-foreground [--i:3]">
              Vi bygger om personbilar till A-traktorer med fokus på kvalitet, säkerhet och stil. I
              depån tar vi hand om service, reparationer, försäljning och rekond.
            </p>
            <div className="hero-rise mt-6 flex flex-wrap items-center gap-3 [--i:4]">
              <KnappPil to="/offert">Begär offert</KnappPil>
              <Link to="/a-traktor" className="btn-base btn-outline">
                Om A-traktorer
              </Link>
            </div>
          </div>

          <h1 className="display-xl order-1 text-[clamp(2rem,8vw,4.75rem)] lg:order-2 lg:text-right">
            <span className="hero-rise block [--i:0]">Vi bygger din</span>
            <span className="hero-rise block [--i:1]">
              <span className="markera">A-traktor</span>
            </span>
          </h1>
        </div>

        <div className="hero-frame flex flex-1 rounded-xl border border-line bg-card p-1.5 shadow-[0_30px_60px_-30px_rgb(49_52_64/0.35)]">
          <div className="grid flex-1 grid-cols-2 gap-1.5 sm:grid-cols-3">
            {BYGGEN.map((b, i) => (
              <Bild
                key={b.etikett}
                b={b}
                prioritet
                className={i === 0 ? "col-span-2 min-h-64 sm:col-span-1" : "min-h-44 sm:min-h-64"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Två verksamheter */}
      <section className="container-page pt-28 sm:pt-36">
        <Reveal>
          <p className="eyebrow">Två verksamheter</p>
          <h2 className="display-xl mt-4 max-w-3xl text-4xl sm:text-6xl">
            Ombyggnad och depå under samma tak
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-3 lg:grid-cols-2">
          <Verksamhet
            to="/a-traktor"
            logo={logoLidkoping}
            logoH={292}
            namn="AOA Lidköping"
            rubrik="Ombyggnad till A-traktor"
            text="Det vi är mest kända för. Vi bygger om din personbil till en A-traktor, anpassad efter bilen och dina önskemål."
            punkter={[
              "Kvalitet, säkerhet och stil",
              "Varje bygge anpassas",
              "Kunder från hela Sverige",
            ]}
            delay={0}
          />
          <Verksamhet
            to="/depa"
            logo={logoDepa}
            logoH={334}
            namn="AOA Depå"
            rubrik="Service, försäljning och rekond"
            text="I depån tar vi hand om bilen när den behöver lagas, sänkas, säljas eller fräschas upp. Och vi polerar båtar."
            punkter={["Service och reparation", "Försäljningsuppdrag", "Rekond"]}
            delay={100}
          />
        </div>
      </section>

      {/* Från depån */}
      <section className="container-page pt-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <p className="eyebrow">Från depån</p>
            <PilLank to="/depa">Mer om depån</PilLank>
          </div>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[DEPA.porsche, DEPA.bmwVit, DEPA.vw, DEPA.audiA6].map((b, i) => (
            <Reveal key={b.etikett} delay={i * 80}>
              <Bild b={b} className="aspect-[4/5]" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Fakta om A-traktor */}
      <section className="container-page pt-28 sm:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">A-traktor</p>
            <h2 className="display-xl mt-4 text-4xl sm:text-5xl">Frihet från 15 år</h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              En A-traktor är en vanlig personbil som byggts om och registrerats som traktor. Den
              har tak, värme och säkerheten från en riktig bil, och kan köras långt innan
              B-körkortet.
            </p>
            <div className="mt-8">
              <PilLank to="/a-traktor">Så går ombyggnaden till</PilLank>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <dl className="grid gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-3">
              {FAKTA.map((f, i) => (
                <div key={f.varde} className={`p-7 ${i === 1 ? "bg-raised" : "bg-card"}`}>
                  <dt className="display-xl text-5xl tabular-nums">
                    {f.varde}
                    {f.enhet && <span className="ml-1 text-xl text-signal">{f.enhet}</span>}
                  </dt>
                  <dd className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <Omdomen />

      <SlutCta rubrik="Dags att bygga? Hör av dig" />
    </>
  );
}

function Verksamhet({
  to,
  logo,
  logoH,
  namn,
  rubrik,
  text,
  punkter,
  delay,
}: {
  to: "/a-traktor" | "/depa";
  logo: string;
  logoH: number;
  namn: string;
  rubrik: string;
  text: string;
  punkter: readonly string[];
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <Link
        to={to}
        className="group flex h-full flex-col rounded-lg border border-line bg-card p-7 transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgb(49_52_64/0.4)] sm:p-10"
      >
        <div className="flex items-start justify-between gap-6">
          <img
            src={logo}
            alt={namn}
            width={720}
            height={logoH}
            loading="lazy"
            className="h-20 w-auto sm:h-24"
          />
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-ink text-ink-foreground transition-[transform,background-color,color] duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="size-5" strokeWidth={1.75} aria-hidden="true" />
          </span>
        </div>
        <h3 className="mt-12 text-2xl sm:text-4xl">{rubrik}</h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{text}</p>
        <ul className="mt-8 grid gap-2 border-t border-line pt-6 text-sm font-medium">
          {punkter.map((p) => (
            <li key={p} className="flex items-center gap-3">
              <span className="lgf w-2.5 text-orange" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </Link>
    </Reveal>
  );
}
