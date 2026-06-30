import { ListDashes } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const TOC_ITEMS = [
  { label: "Get started", indent: false, active: true },
  { label: "macOS, Linux, WSL", indent: true, active: false },
  { label: "Windows PowerShell", indent: true, active: false },
  { label: "What you can do", indent: false, active: false },
  { label: "Use ProhorCloud everywhere", indent: false, active: false },
  { label: "Next steps", indent: false, active: false },
];

import type { DocsTOCProps } from "@/types";

export function TOC(_props: Readonly<DocsTOCProps>) {
  return (
    <aside className="w-64 border-l border-border overflow-y-auto hidden xl:block shrink-0 p-6 bg-background">
      <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
        <ListDashes size={14} /> On this page
      </h4>
      <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
        {TOC_ITEMS.map((item) => (
          <li key={item.label}>
            <Link
              href="#"
              className={`hover:text-foreground transition-colors block ${
                item.indent ? "pl-4 text-xs" : ""
              } ${item.active ? "text-primary font-semibold" : ""}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
