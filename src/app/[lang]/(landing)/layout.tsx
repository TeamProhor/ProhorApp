import type { ReactElement, ReactNode } from "react";
import Shell from "@/components/shell";
import { getDictionary } from "@/lib/i18n";

export default async function LandingLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lang: string }>;
}>): Promise<ReactElement> {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <Shell dict={dict} lang={resolvedParams.lang}>
      {children}
    </Shell>
  );
}
