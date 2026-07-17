import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  cormorant,
  dmSans,
  geist,
  hindSiliguri,
  inter,
  jetbrainsMono,
} from "@/lib/fonts";
import "@/app/globals.css";

import { getDictionary } from "@/lib/i18n";
import { siteJsonLd, siteMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  // Hardcode 'en' for layout metadata to keep layout static
  const dict = await getDictionary("en");

  return {
    ...siteMetadata,
    title: dict.meta.title,
    description: dict.meta.description,
    authors: [{ name: "Prohor Team", url: "https://github.com/TeamProhor" }],
    creator: "Prohor Team",
    publisher: "Prohor Team",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
      date: false,
    },
    alternates: {
      canonical: `/`,
      languages: {
        "en-US": "/en",
        "bn-BD": "/bn",
      },
    },
    openGraph: {
      ...siteMetadata.openGraph,
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      locale: "en_US",
      url: `https://prohor-nextjs-starter-kit.vercel.app/`,
    },
    twitter: {
      ...siteMetadata.twitter,
      title: dict.meta.twitterTitle,
      description: dict.meta.twitterDescription,
      site: "@TeamProhor",
      creator: "@TeamProhor",
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Hardcode 'en' for layout to keep it static (user doesn't need SEO translation here)
  const dict = await getDictionary("en");

  const dynamicJsonLd = {
    ...siteJsonLd,
    "@graph": siteJsonLd["@graph"].map((item) => {
      if (item["@type"] === "WebSite") {
        return {
          ...item,
          name: dict.jsonLd.name,
          description: dict.jsonLd.description,
          inLanguage: dict.jsonLd.language,
          url: `https://prohor-nextjs-starter-kit.vercel.app/`,
        };
      }
      return item;
    }),
  };

  const jsonLdString = JSON.stringify(dynamicJsonLd)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

  return (
    <html
      lang="en"
      className={`${hindSiliguri.variable} ${cormorant.variable} ${jetbrainsMono.variable} ${inter.variable} ${dmSans.variable} ${geist.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdString,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
