import Link from "next/link";
import type { Doc, DocsSidebarProps } from "@/types";

const DEFAULT_SLUG: string[] = [];
const DEFAULT_DOCS: Doc[] = [];

export function Sidebar({
  forceShow = false,
  currentSlug = DEFAULT_SLUG,
  docs = DEFAULT_DOCS,
}: Readonly<DocsSidebarProps>) {
  const sectionsMap = new Map<string, Doc[]>();
  for (const doc of docs) {
    const sec = doc.metadata.section || "General";
    if (!sectionsMap.has(sec)) {
      sectionsMap.set(sec, []);
    }
    sectionsMap.get(sec)?.push(doc);
  }

  const sections = Array.from(sectionsMap.entries()).map(([title, items]) => ({
    title,
    items: items.map((item) => {
      const active = item.slug.join("/") === currentSlug.join("/");
      return {
        label: item.metadata.title,
        href: `/docs/${item.slug.join("/")}`,
        active,
      };
    }),
  }));

  return (
    <aside
      className={
        forceShow
          ? "w-full overflow-y-auto bg-background"
          : "w-64 border-r border-border overflow-y-auto hidden lg:block shrink-0 p-6 bg-background"
      }
    >
      {sections.map((section) => (
        <div key={section.title} className="mb-6">
          <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
            {section.title}
          </h4>
          <ul className="flex flex-col gap-1 text-sm">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-3 py-1.5 rounded-md transition-colors ${
                    item.active
                      ? "bg-secondary text-primary font-semibold"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
