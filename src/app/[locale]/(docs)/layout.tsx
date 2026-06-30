import type { DocsLayoutProps } from "@/types";

export default function DocsLayout({ children }: Readonly<DocsLayoutProps>) {
  return (
    <div
      className="h-screen flex flex-col bg-background text-foreground transition-colors duration-200 overflow-hidden"
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}
