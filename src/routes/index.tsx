import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ByggeBild, KnappPil, Omdomen, PilLank, SlutCta } from "@/components/Block";
import { Reveal } from "@/components/Reveal";
import { FORETAG } from "@/lib/foretag";
import { BYGGEN, FAKTA } from "@/lib/innehall";
import rekond from "@/assets/foto/bmw-f31-rekond.webp";

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
            <span className="hero-rise block text-signal [--i:1]">A-traktor</span>
          </h1>
        </div>

        <div className="hero-frame flex flex-1 rounded-xl border border-white/10 bg-white/5 p-1.5">
          <div className="grid flex-1 grid-cols-2 gap-1.5 sm:grid-cols-3">
            {BYGGEN.map((b, i) => (
              <ByggeBild
                key={b.modell}
                b={b}
                prioritet
                className={i === 0 ? "col-span-2 sm:col-span-1" : "max-sm:min-h-44"}
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
          <Reveal>
            <Link
              to="/a-traktor"
              className="group flex h-full min-h-96 flex-col justify-between rounded-lg bg-primary p-7 text-primary-foreground transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 sm:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="lgf w-12 text-primary-foreground" aria-hidden="true" />
                <span className="flex size-12 items-center justify-center rounded-full bg-black/15 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
              </div>
              <div className="mt-16">
                <h3 className="text-3xl sm:text-5xl">A-traktor</h3>
                <p className="mt-4 max-w-md leading-relaxed">
                  Det vi är mest kända för. Vi bygger om din personbil till en A-traktor med fokus
                  på kvalitet, säkerhet och stil. Varje bygge anpassas efter bilen och dina
                  önskemål.
                </p>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <Link
              to="/depa"
              className="group relative flex h-full min-h-96 flex-col justify-end overflow-hidden rounded-lg bg-card p-7 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 sm:p-10"
            >
              <img
                src={rekond}
                alt=""
                width={606}
                height={537}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"
              />
              <span className="absolute top-7 right-7 flex size-12 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:top-10 sm:right-10">
                <ArrowUpRight className="size-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div className="relative">
                <h3 className="text-3xl sm:text-5xl">Depå</h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                  Service och reparationer, försäljningsuppdrag och rekond. Vi tar hand om bilen,
                  och båten.
                </p>
              </div>
            </Link>
          </Reveal>
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
