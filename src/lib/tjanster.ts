import { Building, Building2, ClipboardCheck, type LucideIcon } from "lucide-react";

export type Tjanst = {
  id: string;
  titel: string;
  kort: string;
  punkter: readonly string[];
  ikon: LucideIcon;
};

export const TJANSTER: readonly Tjanst[] = [
  {
    id: "kontorsstadning",
    titel: "Kontorsstädning",
    kort: "Professionell städning anpassad för företag, så att kontoret alltid är redo när dina medarbetare kommer.",
    punkter: [
      "Regelbunden städning på tider som passar verksamheten",
      "Upplägg och frekvens anpassas efter kontorets storlek och behov",
      "Offert utifrån lokalens yta och önskemål",
    ],
    ikon: Building2,
  },
  {
    id: "fastighetsstadning",
    titel: "Fastighetsstädning",
    kort: "Trapphusstädning och skötsel för fastighetsägare och bostadsrättsföreningar.",
    punkter: [
      "Trapphusstädning för fastighetsägare och BRF:er",
      "Regelbunden skötsel av gemensamma utrymmen",
      "Tydlig offert och fasta rutiner",
    ],
    ikon: Building,
  },
  {
    id: "lokalvard",
    titel: "Lokalvårdstjänster",
    kort: "Övrig regelbunden städning för företag och organisationer.",
    punkter: [
      "Lokalvård för butiker, verksamhetslokaler och organisationer",
      "Regelbunden städning enligt överenskommet schema",
      "Anpassas efter verksamhetens behov",
    ],
    ikon: ClipboardCheck,
  },
];
