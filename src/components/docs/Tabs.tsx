"use client";

import { List } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import type { DocsTabsProps } from "@/types";
import { Sidebar } from "./Sidebar";

export function Tabs({
  sections = [],
  currentSection = "",
  docs = [],
  currentSlug = [],
}: Readonly<DocsTabsProps>) {
  const uniqueSections = sections.length
    ? sections
    : Array.from(new Set(docs.map((d) => d.metadata.section || "General")));

  const tabs = uniqueSections.map((sec) => {
    const firstDoc = docs.find(
      (d) => (d.metadata.section || "General") === sec,
    );
    const href = firstDoc ? `/docs/${firstDoc.slug.join("/")}` : "#";
    const active = currentSection === sec;
    return {
      label: sec,
      href,
      active,
    };
  });

  return (
    <nav className="h-12 border-b border-border flex items-center px-4 md:px-6 overflow-x-auto shrink-0 gap-6 text-sm font-medium text-muted-foreground bg-background sticky top-16 z-40">
      <div className="lg:hidden pr-2 border-r border-border shrink-0">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <List size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="p-0 w-64 bg-background border-r border-border"
          >
            <div className="h-full overflow-y-auto p-6">
              <Sidebar forceShow docs={docs} currentSlug={currentSlug} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {tabs.map((tab) => (
        <Link
          key={tab.label}
          href={tab.href}
          className={`h-full flex items-center whitespace-nowrap transition-colors ${
            tab.active
              ? "text-primary font-semibold border-b-2 border-primary"
              : "hover:text-foreground"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
