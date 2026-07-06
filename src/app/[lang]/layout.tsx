import type { Metadata } from "next";
import {
  Cormorant,
  Hind_Siliguri,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/app/globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

import { getDictionary, locales } from "@/lib/i18n";
import { siteJsonLd, siteMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const dict = getDictionary(resolvedParams.lang);

  return {
    ...siteMetadata,
    title: dict.meta.title,
    description: dict.meta.description,
    authors: siteMetadata.authors,
    creator: siteMetadata.creator,
    publisher: siteMetadata.publisher,
    formatDetection: siteMetadata.formatDetection,
    alternates: {
      canonical: `/${resolvedParams.lang}`,
      languages: {
        "en-US": "/en",
        "bn-BD": "/bn",
      },
    },
    openGraph: {
      ...siteMetadata.openGraph,
      title: dict.meta.ogTitle,
      description: dict.meta.description,
      locale: resolvedParams.lang === "bn" ? "bn_BD" : "en_US",
      url: `https://prohor-nextjs-starter-kit.vercel.app/${resolvedParams.lang}`,
    },
    twitter: {
      ...siteMetadata.twitter,
      title: dict.meta.ogTitle,
      description: dict.meta.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const resolvedParams = await params;
  const dict = getDictionary(resolvedParams.lang);

  const dynamicJsonLd = {
    ...siteJsonLd,
    "@graph": siteJsonLd["@graph"].map((item) => {
      if (item["@type"] === "WebSite") {
        return {
          ...item,
          name: dict.jsonLd.name,
          description: dict.jsonLd.description,
          inLanguage: dict.jsonLd.language,
          url: `https://prohor-nextjs-starter-kit.vercel.app/${resolvedParams.lang}/`,
        };
      }
      return item;
    }),
  };

  return (
    <html
      lang={resolvedParams.lang}
      className={`${hindSiliguri.variable} ${cormorant.variable} ${jetbrainsMono.variable}  ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <TooltipProvider>
            <script
              type="application/ld+json"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD payload is safe
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(dynamicJsonLd),
              }}
            />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
