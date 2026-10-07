import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Sparkles, Tag, Wrench, type LucideIcon } from "lucide-react";
import { Bild, KnappPil, SlutCta } from "@/components/Block";
import { Reveal } from "@/components/Reveal";
import { DEPA } from "@/lib/innehall";
import logoDepa from "@/assets/foto/logo-depa.webp";

export const Route = createFileRoute("/depa")({
  head: () => ({
    meta: [
      { title: "AOA Depå | Service, försäljning och rekond i Lidköping" },
      {
        name: "description",
        content:
          "I AOA:s depå i Lidköping tar vi hand om service och reparationer, försäljningsuppdrag och rekond av bilar och båtar.",
      },
      { property: "og:title", content: "AOA Depå | Service, försäljning och rekond" },
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
  ikon: Tag,
  span: "lg:col-span-2",
  ton: "yta",
};

const BATAR: Tjanst = {
  titel: "Båtar",
  text: "Depån är inte bara till för bilar. Vi tar även hand om service och reparationer av båtar.",
  ikon: Anchor,
  span: "lg:col-span-6",
  ton: "lyft",
};

const TON: Record<Tjanst["ton"], string> = {
  signal: "bg-ink text-ink-foreground",
  yta: "border border-line bg-card text-card-foreground",
  lyft: "bg-raised text-card-foreground",
};

function Depa() {
  return (
    <>
      <section className="container-page pt-12 sm:pt-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <Reveal>
            <p className="eyebrow">AOA Depå</p>
            <h1 className="display-xl mt-4 max-w-5xl text-[clamp(2rem,6.6vw,5rem)]">
              Service, försäljning <span className="markera">och rekond</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Bredvid ombyggnaderna driver vi en depå. Hit kommer du när bilen behöver lagas, säljas
              eller fräschas upp. Inga fasta priser, du får en offert utifrån jobbet.
            </p>
            <div className="mt-8">
              <KnappPil to="/offert">Begär offert</KnappPil>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={logoDepa}
              alt="AOA Depå"
              width={720}
              height={334}
              className="w-64 sm:w-80 lg:w-96"
            />
          </Reveal>
        </div>
      </section>

      <section className="container-page pt-16">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          <Tile t={SERVICE} delay={0} />
          <Reveal delay={80} className="lg:col-span-2 lg:row-span-2">
            <Bild b={DEPA.porsche} className="h-full min-h-80" />
          </Reveal>
          <Tile t={REKOND} delay={0} />
          <Reveal delay={80} className="lg:col-span-2">
            <Bild b={DEPA.bmwVit} className="h-full min-h-64" />
          </Reveal>
          <Reveal delay={0} className="lg:col-span-2">
            <Bild b={DEPA.audiA6} className="h-full min-h-64" />
          </Reveal>
          <Tile t={FORSALJNING} delay={80} />
          <Reveal delay={160} className="lg:col-span-2">
            <Bild b={DEPA.vw} className="h-full min-h-64" />
          </Reveal>
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
        <Ikon
          className={`size-9 ${t.ton === "signal" ? "text-orange" : "text-signal"}`}
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <div className="mt-12">
          <h2 className="text-xl sm:text-2xl">{t.titel}</h2>
          <p
            className={`mt-3 max-w-md text-sm leading-relaxed ${
              t.ton === "signal" ? "text-white/80" : "text-muted-foreground"
            }`}
          >
            {t.text}
          </p>
        </div>
      </article>
    </Reveal>
  );
}
