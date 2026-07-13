import type { ReactElement } from "react";
import Shell from "@/components/shell";
import { getDictionary } from "@/lib/i18n";
import type { LayoutProps } from "@/types";

export default async function LandingLayout({
  children,
  params,
}: LayoutProps): Promise<ReactElement> {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <Shell dict={dict} lang={resolvedParams.lang}>
      {children}
    </Shell>
  );
}
