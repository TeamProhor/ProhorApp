import type { ReactElement, ReactNode } from "react";
import { siteFaqJsonLd } from "@/lib/seo";

export default function LandingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD payload is safe
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteFaqJsonLd) }}
      />
      {children}
    </div>
  );
}
