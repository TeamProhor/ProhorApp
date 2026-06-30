import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Content } from "@/components/docs/Content";
import { Header } from "@/components/docs/Header";
import { Sidebar } from "@/components/docs/Sidebar";
import { TOC } from "@/components/docs/TOC";
import { Tabs } from "@/components/shared/Tabs";
import { extractHeadings, getAllDocs, getDocBySlug } from "@/lib/docs";
import type { DocsPageProps } from "@/types";

export async function generateMetadata({
  params,
}: Readonly<DocsPageProps>): Promise<Metadata> {
  const { locale, slug } = await params;
  const doc = getDocBySlug(locale, slug);

  if (!doc) {
    return {};
  }

  const pathStr = slug.join("/");
  const domain = "https://prohorcloud.com";

  return {
    title: `${doc.metadata.title} | ProhorCloud Docs`,
    description: doc.metadata.description || "ProhorCloud documentation",
    alternates: {
      canonical: `${domain}/docs/${pathStr}`,
      languages: {
        en: `${domain}/docs/en/${pathStr}`,
        bn: `${domain}/docs/bn/${pathStr}`,
      },
    },
    openGraph: {
      title: doc.metadata.title,
      description: doc.metadata.description,
      url: `${domain}/docs/${pathStr}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: doc.metadata.title,
      description: doc.metadata.description,
    },
  };
}

export default async function DocsSlugPage({
  params,
}: Readonly<DocsPageProps>) {
  const { locale, slug } = await params;
  const doc = getDocBySlug(locale, slug);

  if (!doc) {
    notFound();
  }

  const docs = getAllDocs(locale);
  const headings = extractHeadings(doc.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: doc.metadata.title,
    description: doc.metadata.description || "",
    inLanguage: locale,
    articleBody: doc.content,
  };
  const jsonLdString = JSON.stringify(jsonLd)
    .replaceAll("<", "\\u003c")
    .replaceAll(">", "\\u003e")
    .replaceAll("&", "\\u0026");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />
      <Header />
      <Tabs
        docs={docs}
        currentSection={doc.metadata.section || "General"}
        currentSlug={slug}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar docs={docs} currentSlug={slug} />
        <Content doc={doc} locale={locale} />
        <TOC headings={headings} locale={locale} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const locales = ["en", "bn"];
  const params: { locale: string; slug: string[] }[] = [];

  for (const locale of locales) {
    const docs = getAllDocs(locale);
    for (const doc of docs) {
      params.push({
        locale,
        slug: doc.slug,
      });
    }
  }

  return params;
}
