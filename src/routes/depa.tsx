import { createFileRoute } from "@tanstack/react-router";
import { Anchor, BadgeDollarSign, Sparkles, Wrench, type LucideIcon } from "lucide-react";
import { KnappPil, SlutCta } from "@/components/Block";
import { Reveal } from "@/components/Reveal";
import rekond from "@/assets/foto/bmw-f31-rekond.webp";

export const Route = createFileRoute("/depa")({
  head: () => ({
    meta: [
      { title: "Depå: service, reparation, försäljning och rekond | AOA Lidköping" },
      {
        name: "description",
        content:
          "I AOA:s depå i Lidköping tar vi hand om service och reparationer, försäljningsuppdrag och rekond av bilar och båtar.",
      },
      { property: "og:title", content: "Depå | AOA Lidköping" },
      {
        property: "og:description",
        content: "Service, reparation, försäljning och rekond av bilar och båtar.",
      },
      { property: "og:url", content: "/depa" },
    ],
    links: [{ rel: "canonical", href: "/depa" }],
  }),
  component: Depa,
});

type Tjanst = {
  titel: string;
  text: string;
  ikon: LucideIcon;
  /** Plats i 6-kolumnsrutnätet på stora skärmar. */
  span: string;
  ton: "signal" | "yta" | "lyft";
};

const SERVICE: Tjanst = {
  titel: "Service och reparation",
  text: "Från vanlig service till större reparationer. Vi felsöker, lagar och ser till att fordonet går som det ska.",
  ikon: Wrench,
  span: "lg:col-span-4",
  ton: "signal",
};

const REKOND: Tjanst = {
  titel: "Rekond",
  text: "Rekond som får bilen att se ut och kännas som ny igen. Inför en försäljning, eller bara för att.",
  ikon: Sparkles,
  span: "lg:col-span-2",
  ton: "lyft",
};

const FORSALJNING: Tjanst = {
  titel: "Försäljning",
  text: "Vill du sälja bilen? Vi kan ta hand om försäljningen åt dig.",
  ikon: BadgeDollarSign,
  span: "lg:col-span-2",
  ton: "yta",
};

const BATAR: Tjanst = {
  titel: "Båtar",
  text: "Depån är inte bara till för bilar. Vi tar även hand om service och reparationer av båtar.",
  ikon: Anchor,
  span: "sm:col-span-2 lg:col-span-6",
  ton: "lyft",
};

const TON: Record<Tjanst["ton"], string> = {
  signal: "bg-primary text-primary-foreground",
  yta: "bg-card text-card-foreground",
  lyft: "bg-raised text-card-foreground",
};

function Depa() {
  return (
    <>
      <section className="container-page pt-12 sm:pt-20">
        <Reveal>
          <p className="eyebrow">Depå</p>
          <h1 className="display-xl mt-4 max-w-5xl text-[clamp(2rem,6.6vw,5rem)]">
            Service, reparation <span className="text-signal">och rekond</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Bredvid ombyggnaderna driver vi en depå. Hit kommer du med bilen, eller båten, när något
            behöver lagas, ses över eller fräschas upp. Inga fasta priser, du får en offert utifrån
            jobbet.
          </p>
          <div className="mt-8">
            <KnappPil to="/offert">Begär offert</KnappPil>
          </div>
        </Reveal>
      </section>

      <section className="container-page pt-16">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          <Tile t={SERVICE} delay={0} />
          <Reveal delay={80} className="lg:col-span-2 lg:row-span-2">
            <figure className="relative h-full min-h-80 overflow-hidden rounded-lg">
              <img
                src={rekond}
                alt="Grå BMW 3-serie Touring med skylten AOA REKOND, nyrekondad inne i verkstaden"
                width={606}
                height={537}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105"
              />
            </figure>
          </Reveal>
          <Tile t={REKOND} delay={0} />
          <Tile t={FORSALJNING} delay={80} />
          <Tile t={BATAR} delay={0} />
        </div>
      </section>

      <SlutCta rubrik="Något som behöver fixas?" />
    </>
  );
}

function Tile({ t, delay }: { t: Tjanst; delay: number }) {
  const Ikon = t.ikon;
  return (
    <Reveal delay={delay} className={t.span}>
      <article
        className={`group flex h-full min-h-64 flex-col justify-between rounded-lg p-7 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 ${TON[t.ton]}`}
      >
        <Ikon className="size-9" strokeWidth={1.5} aria-hidden="true" />
        <div className="mt-12">
          <h2 className="text-xl sm:text-2xl">{t.titel}</h2>
          <p
            className={`mt-3 max-w-md text-sm leading-relaxed ${
              t.ton === "signal" ? "" : "text-muted-foreground"
            }`}
          >
            {t.text}
          </p>
        </div>
      </article>
    </Reveal>
  );
}
