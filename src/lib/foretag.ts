// Enda källan till företagsuppgifter. Sidhuvud, sidfot, kontakt, offert och meta-data läser härifrån.
export const FORETAG = {
  namn: "AOA Lidköping AB",
  kortnamn: "AOA Lidköping",
  ort: "Lidköping",
  slogan: "Vi bygger din A-traktor",
  // Numren står på skylten vid verkstaden. Det första är det som syns på Google.
  telefoner: [
    { visning: "072-188 56 58", lank: "+46721885658" },
    { visning: "073-377 80 86", lank: "+46733778086" },
  ],
  epost: "kontakt@aoalid.se",
  gata: "Staplaregatan 6",
  postnummer: "531 40",
  adress: "Staplaregatan 6, 531 40 Lidköping",
  orgnr: "559563-9195",
  instagram: "https://www.instagram.com/aoalidkoping/",
  instagramNamn: "@aoalidkoping",
  // Google-omdömen (3 st, snitt 5,0). Uppdatera när fler kommer in.
  betyg: "5,0",
  antalOmdomen: 3,
  vagbeskrivning:
    "https://www.google.com/maps/dir/?api=1&destination=Staplaregatan%206%2C%20531%2040%20Lidk%C3%B6ping",
  kartLank: "https://www.openstreetmap.org/search?query=Staplaregatan%206%2C%20Lidk%C3%B6ping",
} as const;

export const TELEFON = FORETAG.telefoner[0];

/** Förifylld e-post. Öppnar besökarens e-postprogram, inget skickas via sajten. */
export function epostLank(amne: string, text: string) {
  return `mailto:${FORETAG.epost}?subject=${encodeURIComponent(amne)}&body=${encodeURIComponent(text)}`;
}

/** Förifylld SMS-länk. Fungerar på mobil. */
export function smsLank(text: string) {
  return `sms:${TELEFON.lank}?&body=${encodeURIComponent(text)}`;
}
