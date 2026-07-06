import type { Metadata } from "next";
import {
  Cormorant,
  Hind_Siliguri,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

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

import { siteJsonLd, siteMetadata } from "@/lib/seo";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${hindSiliguri.variable} ${cormorant.variable} ${jetbrainsMono.variable}  ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <TooltipProvider>
            <script
              type="application/ld+json"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD payload is safe
              dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
            />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
