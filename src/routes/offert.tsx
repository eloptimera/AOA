import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, MessageSquareText } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { FORETAG, TELEFON, epostLank, smsLank } from "@/lib/foretag";

export const Route = createFileRoute("/offert")({
  head: () => ({
    meta: [
      { title: "Begär offert | AOA Lidköping" },
      {
        name: "description",
        content:
          "Begär offert på ombyggnad till A-traktor, service, reparation, rekond eller försäljningsuppdrag hos AOA Lidköping.",
      },
      { property: "og:title", content: "Begär offert | AOA Lidköping" },
      {
        property: "og:description",
        content: "Berätta om bilen och vad du vill ha gjort, så återkommer vi med pris.",
      },
      { property: "og:url", content: "/offert" },
    ],
    links: [{ rel: "canonical", href: "/offert" }],
  }),
  component: Offert,
});

const ARENDEN = [
  "Ombyggnad till A-traktor",
  "Service eller reparation",
  "Rekond",
  "Försäljningsuppdrag",
  "Båt",
  "Annat",
] as const;

type Fel = Partial<Record<"namn" | "telefon" | "arende" | "beskrivning", string>>;

function Offert() {
  const [arende, setArende] = useState<string>("");
  const [fel, setFel] = useState<Fel>({});
  const [skickat, setSkickat] = useState<"" | "epost" | "sms">("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const satt =
      (e.nativeEvent as SubmitEvent).submitter?.getAttribute("value") === "sms" ? "sms" : "epost";
    const fd = new FormData(e.currentTarget);
    const namn = String(fd.get("namn") ?? "").trim();
    const telefon = String(fd.get("telefon") ?? "").trim();
    const bil = String(fd.get("bil") ?? "").trim();
    const regnr = String(fd.get("regnr") ?? "").trim();
    const beskrivning = String(fd.get("beskrivning") ?? "").trim();

    const nya: Fel = {};
    if (!arende) nya.arende = "Välj vad förfrågan gäller.";
    if (!beskrivning) nya.beskrivning = "Beskriv kort vad du vill ha gjort.";
    if (!namn) nya.namn = "Skriv ditt namn.";
    if (!telefon) nya.telefon = "Skriv ett nummer vi kan nå dig på.";
    setFel(nya);
    if (Object.keys(nya).length > 0) return;

    const rader = [
      "Hej! Jag vill ha en offert.",
      "",
      `Gäller: ${arende}`,
      bil ? `Fordon: ${bil}` : null,
      regnr ? `Regnr: ${regnr.toUpperCase()}` : null,
      `Beskrivning: ${beskrivning}`,
      "",
      `Namn: ${namn}`,
      `Telefon: ${telefon}`,
    ].filter((r) => r !== null);

    setSkickat(satt);
    window.location.href =
      satt === "sms"
        ? smsLank(rader.join("\n"))
        : epostLank(`Offertförfrågan: ${arende}`, rader.join("\n"));
  }

  return (
    <>
      <section className="container-page pt-12 sm:pt-20">
        <Reveal>
          <h1 className="display-xl max-w-4xl text-[clamp(2rem,6.6vw,5rem)]">Begär offert</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Vi har inga fasta priser, eftersom varje bil och varje jobb är olika. Berätta vad det
            gäller så återkommer vi med ett pris.
          </p>
        </Reveal>
      </section>

      <section className="container-page grid gap-12 pt-14 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <Reveal>
          <MessageSquareText className="size-9 text-signal" strokeWidth={1.5} aria-hidden="true" />
          <h2 className="display-xl mt-6 text-2xl sm:text-3xl">Så går det till</h2>
          <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
            Formuläret skickar ingenting själv. Det skriver ett färdigt meddelande som öppnas i ditt
            e-postprogram eller din SMS-app, och du trycker på skicka.
          </p>
          <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
            Hellre prata direkt? Ring{" "}
            <a
              href={`tel:${TELEFON.lank}`}
              className="font-semibold text-foreground underline decoration-line underline-offset-4 transition-colors hover:text-signal"
            >
              {TELEFON.visning}
            </a>{" "}
            eller skriv till oss på{" "}
            <a
              href={FORETAG.instagram}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-foreground underline decoration-line underline-offset-4 transition-colors hover:text-signal"
            >
              Instagram
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="grid gap-8 rounded-lg border border-line bg-card p-7 sm:p-10"
          >
            <fieldset aria-describedby={fel.arende ? "arende-fel" : undefined} className="min-w-0">
              <legend className="text-sm font-medium">Vad gäller det?</legend>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {ARENDEN.map((a) => {
                  const pa = arende === a;
                  return (
                    <label
                      key={a}
                      className={`relative flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors duration-300 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ring ${
                        pa
                          ? "border-ink bg-ink font-medium text-ink-foreground"
                          : "border-input bg-background hover:border-foreground/60"
                      }`}
                    >
                      <input
                        type="radio"
                        name="arende"
                        value={a}
                        className="sr-only"
                        checked={pa}
                        onChange={() => setArende(a)}
                      />
                      <span
                        aria-hidden="true"
                        className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
                          pa ? "border-orange bg-orange" : "border-input"
                        }`}
                      >
                        {pa && <Check className="size-3.5 text-ink" strokeWidth={3} />}
                      </span>
                      {a}
                    </label>
                  );
                })}
              </div>
              {fel.arende && (
                <p id="arende-fel" className="mt-2 text-sm text-destructive">
                  {fel.arende}
                </p>
              )}
            </fieldset>

            <div className="grid gap-6 sm:grid-cols-[2fr_1fr]">
              <div>
                <label htmlFor="bil" className="text-sm font-medium">
                  Fordon (märke, modell, årsmodell)
                </label>
                <input id="bil" name="bil" className="field mt-2" />
              </div>
              <div>
                <label htmlFor="regnr" className="text-sm font-medium">
                  Regnr <span className="text-muted-foreground">(om du har)</span>
                </label>
                <input
                  id="regnr"
                  name="regnr"
                  autoCapitalize="characters"
                  className="field mt-2 uppercase"
                />
              </div>
            </div>

            <div>
              <label htmlFor="beskrivning" className="text-sm font-medium">
                Beskriv vad du vill ha gjort
              </label>
              <textarea
                id="beskrivning"
                name="beskrivning"
                rows={5}
                aria-invalid={!!fel.beskrivning}
                aria-describedby={fel.beskrivning ? "beskrivning-fel" : "beskrivning-hjalp"}
                className="field mt-2"
              />
              {fel.beskrivning ? (
                <p id="beskrivning-fel" className="mt-2 text-sm text-destructive">
                  {fel.beskrivning}
                </p>
              ) : (
                <p id="beskrivning-hjalp" className="mt-2 text-sm text-muted-foreground">
                  Gäller det en A-traktor: berätta om du redan har bilen och om du har önskemål om
                  stil, till exempel fälgar eller färg.
                </p>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="namn" className="text-sm font-medium">
                  Namn
                </label>
                <input
                  id="namn"
                  name="namn"
                  autoComplete="name"
                  aria-invalid={!!fel.namn}
                  aria-describedby={fel.namn ? "namn-fel" : undefined}
                  className="field mt-2"
                />
                {fel.namn && (
                  <p id="namn-fel" className="mt-2 text-sm text-destructive">
                    {fel.namn}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="telefon" className="text-sm font-medium">
                  Telefon
                </label>
                <input
                  id="telefon"
                  name="telefon"
                  type="tel"
                  autoComplete="tel"
                  aria-invalid={!!fel.telefon}
                  aria-describedby={fel.telefon ? "telefon-fel" : undefined}
                  className="field mt-2"
                />
                {fel.telefon && (
                  <p id="telefon-fel" className="mt-2 text-sm text-destructive">
                    {fel.telefon}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-3">
                <button type="submit" name="satt" value="epost" className="btn-base btn-primary">
                  Skicka med e-post
                  <span className="btn-icon">
                    <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                </button>
                <button type="submit" name="satt" value="sms" className="btn-base btn-outline">
                  Skicka som SMS
                </button>
              </div>
              {skickat && (
                <p role="status" className="mt-4 text-sm text-muted-foreground">
                  {skickat === "sms"
                    ? "Din SMS-app ska ha öppnats med meddelandet."
                    : "Ditt e-postprogram ska ha öppnats med meddelandet."}{" "}
                  Hände ingenting? Mejla {FORETAG.epost} eller ring {TELEFON.visning}.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </section>
    </>
  );
}
