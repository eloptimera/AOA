# AOA Lidköping – webbplats

Webbplats för AOA Lidköping AB (ombyggnad till A-traktor + depå). Byggd med TanStack Start, React och Tailwind, med samma layout och komponenter som Önneköps Bilverkstad (Archivo/Geist), men färgerna är hämtade ur AOA:s två loggor: ljus bas, blågrå #313440 och LGF-orange #F98C1A som enda accent.

```sh
bun install
bun run dev
```

Företagsuppgifter ligger i `src/lib/foretag.ts`, byggen/fakta/omdömen i `src/lib/innehall.ts`.
Offertformuläret skickar inget via sajten – det öppnar ett förifyllt mejl eller SMS.
