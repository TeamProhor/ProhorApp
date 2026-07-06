import type { ReactElement, ReactNode } from "react";
import { getDictionary } from "@/lib/i18n";
import { siteFaqJsonLd } from "@/lib/seo";

export default async function LandingLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lang: string }>;
}>): Promise<ReactElement> {
  const resolvedParams = await params;
  const dict = getDictionary(resolvedParams.lang);

  const dynamicFaqJsonLd = {
    ...siteFaqJsonLd,
    mainEntity: dict.jsonLd.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD payload is safe
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicFaqJsonLd) }}
      />
      {children}
    </div>
  );
}
