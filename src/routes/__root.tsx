import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FORETAG, TELEFON } from "@/lib/foretag";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md">
        <p className="eyebrow">Felkod 404</p>
        <h1 className="display-xl mt-4 text-6xl">Sidan finns inte</h1>
        <p className="mt-5 text-muted-foreground">
          Länken är fel eller sidan har flyttats. Gå tillbaka till startsidan så hittar du rätt.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-base btn-primary">
            Till startsidan
            <span className="btn-icon">
              <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md">
        <h1 className="display-xl text-4xl">Sidan kunde inte laddas</h1>
        <p className="mt-5 text-muted-foreground">
          Något gick fel hos oss. Försök igen, eller ring {TELEFON.visning} om det gäller något
          brådskande.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-base btn-primary pr-6"
          >
            Försök igen
          </button>
          <a href="/" className="btn-base btn-outline">
            Till startsidan
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AOA Lidköping | Vi bygger din A-traktor" },
      {
        name: "description",
        content:
          "AOA Lidköping bygger om personbilar till A-traktorer med fokus på kvalitet, säkerhet och stil. Depå för service, reparation, försäljning och rekond. Kunder från hela Sverige.",
      },
      { name: "theme-color", content: "#14161f" },
      { property: "og:site_name", content: FORETAG.kortnamn },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "sv_SE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico?v=1", sizes: "any" },
      { rel: "icon", href: "/favicon-32.png?v=1", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/icon-192.png?v=1", type: "image/png", sizes: "192x192" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=1" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: FORETAG.namn,
          description:
            "Ombyggnad av personbilar till A-traktorer samt service, reparation, försäljning och rekond av fordon i Lidköping.",
          telephone: TELEFON.lank,
          email: FORETAG.epost,
          address: {
            "@type": "PostalAddress",
            streetAddress: FORETAG.gata,
            postalCode: FORETAG.postnummer,
            addressLocality: FORETAG.ort,
            addressCountry: "SE",
          },
          areaServed: "SE",
          foundingDate: "2025-12-18",
          sameAs: [FORETAG.instagram],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main id="innehall" className="flex-1 overflow-x-clip">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
