# AOA Lidköping – webbplats

Webbplats för AOA Lidköping AB (ombyggnad till A-traktor + depå). Byggd med TanStack Start, React och Tailwind, med samma designsystem som Önneköps Bilverkstad (mörkt tema, Archivo/Geist) men med LGF-orange som accent.

```sh
bun install
bun run dev
```

Företagsuppgifter ligger i `src/lib/foretag.ts`, byggen/fakta/omdömen i `src/lib/innehall.ts`.
Offertformuläret skickar inget via sajten – det öppnar ett förifyllt mejl eller SMS.
