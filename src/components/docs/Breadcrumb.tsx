import Link from "next/link";

export interface BreadcrumbProps {
  docsLabel: string;
  section: string;
  title: string;
}

export function Breadcrumb({
  docsLabel,
  section,
  title,
}: Readonly<BreadcrumbProps>) {
  return (
    <nav aria-label="breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <li>
          <Link
            href="/docs"
            className="transition-colors hover:text-foreground"
          >
            {docsLabel}
          </Link>
        </li>
        <li
          role="presentation"
          aria-hidden="true"
          className="text-muted-foreground/50 text-xs"
        >
          /
        </li>
        <li>
          <span className="text-muted-foreground">{section}</span>
        </li>
        <li
          role="presentation"
          aria-hidden="true"
          className="text-muted-foreground/50 text-xs"
        >
          /
        </li>
        <li>
          <span className="font-normal text-foreground" aria-current="page">
            {title}
          </span>
        </li>
      </ol>
    </nav>
  );
}
