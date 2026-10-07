import bmwE90 from "@/assets/foto/bmw-e90-a-traktor.webp";
import mercedes from "@/assets/foto/mercedes-e-a-traktor.webp";
import audi from "@/assets/foto/audi-s4-a-traktor.webp";
import porsche from "@/assets/foto/porsche-macan-rekond.webp";
import bmwVit from "@/assets/foto/bmw-f31-vit-rekond.webp";
import bmwGra from "@/assets/foto/bmw-f31-rekond.webp";
import vw from "@/assets/foto/vw-transporter-rekond.webp";
import audiA6 from "@/assets/foto/audi-a6-sald.webp";
import sunseeker from "@/assets/foto/sunseeker-polering.webp";

export type Foto = { src: string; w: number; h: number; etikett: string; alt: string };

/** Färdiga A-traktorer, fotade utanför verkstaden. */
export const BYGGEN: readonly Foto[] = [
  {
    src: bmwE90,
    w: 642,
    h: 541,
    etikett: "BMW 3-serie",
    alt: "Grå BMW 3-serie sedan ombyggd till A-traktor, med LGF-skylt på bakluckan, parkerad framför verkstaden",
  },
  {
    src: mercedes,
    w: 596,
    h: 500,
    etikett: "Mercedes E-klass",
    alt: "Vit Mercedes E-klass kombi ombyggd till A-traktor, med LGF-skylt i bakrutan, framför AOA:s skylt",
  },
  {
    src: audi,
    w: 547,
    h: 452,
    etikett: "Audi A4 Avant",
    alt: "Vit Audi Avant med svarta fälgar ombyggd till A-traktor, med LGF-skylt på bakluckan",
  },
];

/** Bilar från depån, fotade i verkstaden. Nyckel = användning på sajten. */
export const DEPA = {
  porsche: {
    src: porsche,
    w: 627,
    h: 617,
    etikett: "Rekond · Porsche Macan GTS",
    alt: "Turkosblå Porsche Macan GTS med skylten AOA REKOND, nyrekondad inne i verkstaden",
  },
  bmwVit: {
    src: bmwVit,
    w: 635,
    h: 542,
    etikett: "Rekond · BMW 3-serie",
    alt: "Vit BMW 3-serie Touring med skylten AOA REKOND i verkstaden",
  },
  bmwGra: {
    src: bmwGra,
    w: 606,
    h: 537,
    etikett: "Rekond · BMW 3-serie",
    alt: "Grå BMW 3-serie Touring med skylten AOA REKOND, nyrekondad inne i verkstaden",
  },
  vw: {
    src: vw,
    w: 635,
    h: 607,
    etikett: "Rekond · VW Transporter",
    alt: "Vit Volkswagen Transporter med flak och reflexmärkning, med skylten AOA REKOND i verkstaden",
  },
  audiA6: {
    src: audiA6,
    w: 640,
    h: 685,
    etikett: "Såld · Audi A6",
    alt: "Svart Audi A6 sedan med en SÅLD-skylt i vindrutan, i verkstaden",
  },
  sunseeker: {
    src: sunseeker,
    w: 591,
    h: 717,
    etikett: "Polering · Sunseeker, Smögen",
    alt: "Vit Sunseeker-motorbåt nypolerad vid bryggan framför röda sjöbodar på Smögen",
  },
} satisfies Record<string, Foto>;

/** Senaste jobben från depån (från Instagram). Uppdatera med nya jobb. */
export const SENASTE = [
  { jobb: "Sänkning av originalluftfjädring med stag", fordon: "Porsche Macan GTS" },
  { jobb: "Sänkning av originalluftfjädring med stag", fordon: "BMW X5" },
  { jobb: "Rengöring av partikelfilter", fordon: "BMW 320d" },
  { jobb: "Polering och vaxning, på plats hos kunden på Smögen", fordon: "Sunseeker 62" },
] as const;

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
