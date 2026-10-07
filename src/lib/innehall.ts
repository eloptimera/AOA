import bmwE90 from "@/assets/foto/bmw-e90-a-traktor.webp";
import mercedes from "@/assets/foto/mercedes-e-a-traktor.webp";
import audi from "@/assets/foto/audi-s4-a-traktor.webp";

export type Bygge = { src: string; w: number; h: number; modell: string; alt: string };

/** Färdiga A-traktorer, fotade utanför verkstaden. */
export const BYGGEN: readonly Bygge[] = [
  {
    src: bmwE90,
    w: 642,
    h: 541,
    modell: "BMW 3-serie",
    alt: "Grå BMW 3-serie sedan ombyggd till A-traktor, med LGF-skylt på bakluckan, parkerad framför verkstaden",
  },
  {
    src: mercedes,
    w: 596,
    h: 500,
    modell: "Mercedes E-klass",
    alt: "Vit Mercedes E-klass kombi ombyggd till A-traktor, med LGF-skylt i bakrutan, framför AOA:s skylt",
  },
  {
    src: audi,
    w: 547,
    h: 452,
    modell: "Audi A4 Avant",
    alt: "Vit Audi Avant med svarta fälgar ombyggd till A-traktor, med LGF-skylt på bakluckan",
  },
];

/** Fakta om fordonsslaget A-traktor (gäller alla, inte bara AOA:s byggen). */
export const FAKTA = [
  {
    varde: "30",
    enhet: "km/h",
    text: "Högsta hastighet. Bilen byggs så att den inte kan köra fortare.",
  },
  {
    varde: "15",
    enhet: "år",
    text: "Från 15 år får man köra A-traktor med AM-körkort eller traktorkort.",
  },
  { varde: "LGF", enhet: "", text: "Skylten för långsamtgående fordon ska sitta synligt baktill." },
] as const;

export const STEG = [
  {
    titel: "Hör av dig",
    text: "Berätta vilken bil det gäller och vad du har tänkt dig. Ring, mejla eller skriv på Instagram.",
  },
  {
    titel: "Offert",
    text: "Vi går igenom bilen och dina önskemål och ger dig ett pris. Varje bygge anpassas efter bilen.",
  },
  {
    titel: "Ombyggnad",
    text: "Bilen byggs om i verkstaden i Lidköping, med fokus på kvalitet, säkerhet och stil.",
  },
  {
    titel: "Besiktning",
    text: "Efter ombyggnaden registreringsbesiktas bilen som A-traktor. Sedan är den redo att köras.",
  },
] as const;

export const OMDOMEN = [
  {
    text: "Vi är otroligt nöjda med jobbet som killarna på AOA Lidköping gjort när de byggde om vår bil till A-traktor åt sonen.",
    namn: "Åsa Bertilsdotter",
    kalla: "Google",
  },
  {
    text: "Bästa service och bemötande man som kund kan få. Snyggt ombygge, lösning och dottern är nöjdast av alla!",
    namn: "Svarta Örnsorden Logen De Sju Härader",
    kalla: "Google",
  },
  {
    text: "Bilen vart väldigt fint ombyggd av killarna.",
    namn: "Kund",
    kalla: "Reco.se",
  },
] as const;
