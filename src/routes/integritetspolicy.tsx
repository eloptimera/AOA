import { createFileRoute, Link } from "@tanstack/react-router";
import { FORETAG, TELEFON } from "@/lib/foretag";

export const Route = createFileRoute("/integritetspolicy")({
  head: () => ({
    meta: [
      { title: "Integritetspolicy | AOA Lidköping" },
      {
        name: "description",
        content: "Så behandlar AOA Lidköping AB dina personuppgifter när du kontaktar oss.",
      },
      { property: "og:title", content: "Integritetspolicy | AOA Lidköping" },
      { property: "og:url", content: "/integritetspolicy" },
    ],
    links: [{ rel: "canonical", href: "/integritetspolicy" }],
  }),
  component: Integritetspolicy,
});

function Sektion({ titel, children }: { titel: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-xl text-foreground sm:text-2xl">{titel}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function Integritetspolicy() {
  return (
    <article className="container-page max-w-3xl pt-12 pb-8 sm:pt-20">
      <h1 className="display-xl text-[clamp(1.75rem,6vw,3.5rem)]">Integritetspolicy</h1>
      <p className="mt-6 leading-relaxed text-muted-foreground">
        Här beskriver vi hur vi behandlar personuppgifter när du kontaktar oss, och vilka
        rättigheter du har enligt dataskyddsförordningen (GDPR).
      </p>

      <Sektion titel="Personuppgiftsansvarig">
        <p>
          {FORETAG.namn}, org.nr {FORETAG.orgnr}, {FORETAG.adress}, är personuppgiftsansvarig. Du
          når oss på{" "}
          <a className="underline underline-offset-4" href={`mailto:${FORETAG.epost}`}>
            {FORETAG.epost}
          </a>{" "}
          eller{" "}
          <a className="underline underline-offset-4" href={`tel:${TELEFON.lank}`}>
            {TELEFON.visning}
          </a>
          .
        </p>
      </Sektion>

      <Sektion titel="Vilka uppgifter vi behandlar">
        <p>
          Webbplatsen har inga formulär som skickar något till oss och sparar ingenting om dig. När
          du ringer, mejlar, skickar SMS eller skriver till oss på Instagram behandlar vi det du
          själv uppger: ditt namn, telefonnummer eller e-postadress, uppgifter om fordonet (till
          exempel märke, modell och registreringsnummer) och vad du vill ha hjälp med.
        </p>
        <p>
          Knapparna på sidan för offertförfrågan förbereder bara ett meddelande i ditt eget
          e-postprogram eller din SMS-app. Meddelandet skickas först när du själv trycker på skicka.
        </p>
      </Sektion>

      <Sektion titel="Varför vi behandlar uppgifterna">
        <p>
          Vi använder uppgifterna för att svara på din fråga, ge dig en offert och utföra arbetet på
          ditt fordon. Rättslig grund är att det behövs för att vidta åtgärder på din begäran innan
          ett avtal ingås, och därefter för att fullgöra avtalet. Underlag som ingår i bokföringen
          sparar vi så länge bokföringslagen kräver.
        </p>
        <p>
          Vi säljer inte dina uppgifter och skickar inga utskick till dig utan att du bett om det.
        </p>
      </Sektion>

      <Sektion titel="Cookies och externa tjänster">
        <p>
          Webbplatsen använder inga cookies för spårning, statistik eller marknadsföring och laddar
          inga typsnitt eller skript från tredje part. Länkarna till kartor och Instagram öppnar
          externa tjänster först när du klickar på dem, och då gäller de tjänsternas egna villkor.
        </p>
        <p>
          Webbplatsen driftas hos en hostingleverantör som kan se teknisk trafikdata, till exempel
          IP-adress, i sina serverloggar.
        </p>
      </Sektion>

      <Sektion titel="Dina rättigheter">
        <p>Du har rätt att:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>få veta vilka uppgifter vi har om dig och få en kopia,</li>
          <li>få felaktiga uppgifter rättade,</li>
          <li>begära att uppgifterna raderas eller att behandlingen begränsas,</li>
          <li>invända mot behandling som grundas på berättigat intresse.</li>
        </ul>
        <p>
          Kontakta oss så hjälper vi dig. Du har också rätt att klaga hos{" "}
          <a
            className="underline underline-offset-4"
            href="https://www.imy.se"
            target="_blank"
            rel="noopener noreferrer"
          >
            Integritetsskyddsmyndigheten (IMY)
          </a>
          .
        </p>
      </Sektion>

      <p className="mt-14 text-sm text-muted-foreground">
        Har du frågor?{" "}
        <Link to="/kontakt" className="underline underline-offset-4">
          Kontakta oss
        </Link>
        .
      </p>
    </article>
  );
}
