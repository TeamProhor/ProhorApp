import * as Icons from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import { CopyButton } from "@/components/docs/CopyButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { getDictionary, type Locale } from "@/lib/i18n";
import type { DocsContentProps } from "@/types";
import { Breadcrumb } from "./Breadcrumb";

function getSlugId(children: React.ReactNode): string {
  const text = React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return child;
      }
      return "";
    })
    .join("");

  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\t\n]+/g, "-")
    .replace(/[.,/#!$%^&*;:{}=_`~()?"'<>]/g, "");
}

const mdxComponents = {
  ...Icons,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Separator,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-4xl md:text-5xl font-serif text-foreground mb-6"
      {...props}
    />
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = getSlugId(children);
    return (
      <h2
        id={id}
        className="text-2xl md:text-3xl font-serif text-foreground border-b border-border pb-2 mt-10 mb-6 scroll-mt-20 flex items-center gap-2"
        {...props}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = getSlugId(children);
    return (
      <h3
        id={id}
        className="text-xl font-serif text-foreground mt-8 mb-4 scroll-mt-20 flex items-center gap-2"
        {...props}
      >
        {children}
      </h3>
    );
  },
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-muted-foreground leading-relaxed text-base mb-6"
      {...props}
    />
  ),
  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={href || "#"}
      className="text-primary font-semibold hover:underline underline-offset-4"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc pl-6 mb-6 text-muted-foreground space-y-2"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal pl-6 mb-6 text-muted-foreground space-y-2"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-secondary px-1.5 py-0.5 rounded text-sm font-mono text-foreground border border-border"
      {...props}
    />
  ),
  pre: ({
    children,
  }: React.HTMLAttributes<HTMLPreElement> & { children?: React.ReactNode }) => {
    const codeElement = React.isValidElement(children) ? children : null;
    const codeContent =
      (codeElement?.props as { children?: React.ReactNode })?.children || "";
    return (
      <div className="bg-surface-dark border border-surface-dark-soft rounded-lg p-4 mb-6 flex justify-between items-start group relative gap-4">
        <pre className="font-mono text-xs md:text-sm text-on-dark-soft leading-relaxed overflow-x-auto flex-1 min-w-0">
          {children}
        </pre>
        <div className="flex items-center gap-3 text-on-dark-soft opacity-70 group-hover:opacity-100 transition-opacity mt-2 shrink-0">
          <CopyButton text={String(codeContent).trim()} />
        </div>
      </div>
    );
  },
};

export function Content({ doc, locale }: Readonly<DocsContentProps>) {
  const dict = getDictionary(locale as Locale);

  return (
    <main className="flex-grow overflow-y-auto p-6 md:p-10 lg:p-12 scroll-smooth bg-background">
      <div className="max-w-3xl mx-auto">
        <Breadcrumb
          docsLabel={dict.nav.docs}
          section={doc.metadata.section || "General"}
          title={doc.metadata.title}
        />

        <div className="flex justify-between items-start mb-6">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground">
            {doc.metadata.title}
          </h1>
        </div>

        {doc.metadata.description && (
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 border-l-2 border-primary pl-4 italic">
            {doc.metadata.description}
          </p>
        )}

        <div className="prose prose-stone dark:prose-invert max-w-none">
          {/* biome-ignore lint/suspicious/noExplicitAny: map icon properties dynamically */}
          <MDXRemote source={doc.content} components={mdxComponents as any} />
        </div>
      </div>
    </main>
  );
}
