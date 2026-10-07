// Enda källan till företagsuppgifter. Allt på sajten (sidfot, kontakt, integritetspolicy,
// meta-data) läser härifrån.
//
// TODO AOA: fyll i riktiga uppgifter (orgnr, adress, telefon, e-post, personer, startår).
// Fält med tomt värde (telefon, e-post, öppettider) visas inte på sajten förrän de fylls i.
export const FORETAG: {
  namn: string;
  kortnamn: string;
  ort: string;
  omrade: string;
  startar: number;
  anstallda: string;
  orgnr: string;
  gata: string;
  postnummer: string;
  adress: string;
  telefon: string;
  telefonLank: string;
  epost: string;
  oppettider: readonly { dagar: string; tid: string }[];
  personer: readonly { namn: string; roll: string }[];
} = {
  namn: "AOA",
  kortnamn: "AOA",
  ort: "Göteborg",
  omrade: "Göteborg",
  startar: new Date().getFullYear(),
  anstallda: "",
  orgnr: "",
  gata: "",
  postnummer: "",
  adress: "",
  telefon: "",
  telefonLank: "",
  epost: "",
  oppettider: [],
  personer: [],
};
