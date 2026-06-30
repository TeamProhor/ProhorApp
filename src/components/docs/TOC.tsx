import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/i18n";
import { ListDashes } from "@/lib/icons";
import type { DocsTOCProps, TOCItem } from "@/types";

const DEFAULT_HEADINGS: TOCItem[] = [];

export function TOC({ headings, locale = "en" }: Readonly<DocsTOCProps>) {
  const resolvedHeadings = headings ?? DEFAULT_HEADINGS;

  if (resolvedHeadings.length === 0) {
    return null;
  }

  const dict = getDictionary(locale as Locale);

  return (
    <aside className="w-64 border-l border-border overflow-y-auto hidden xl:block shrink-0 p-6 bg-background">
      <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
        <ListDashes size={14} /> {dict.docs.onThisPage}
      </h4>
      <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
        {resolvedHeadings.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className={`hover:text-foreground transition-colors block ${
                item.level === 3 ? "pl-4 text-xs" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
