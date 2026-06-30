import { notFound } from "next/navigation";
import { Content } from "@/components/docs/Content";
import { Header } from "@/components/docs/Header";
import { Sidebar } from "@/components/docs/Sidebar";
import { Tabs } from "@/components/docs/Tabs";
import { TOC } from "@/components/docs/TOC";
import { getAllDocs, getDocBySlug } from "@/lib/docs";
import type { DocsPageProps } from "@/types";

export default async function DocsSlugPage({
  params,
}: Readonly<DocsPageProps>) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const docs = getAllDocs();

  return (
    <>
      <Header />
      <Tabs
        docs={docs}
        currentSection={doc.metadata.section || "General"}
        currentSlug={slug}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar docs={docs} currentSlug={slug} />
        <Content doc={doc} />
        <TOC />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}
