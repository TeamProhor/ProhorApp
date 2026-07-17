import type { ReactElement } from "react";
import Shell from "@/components/shell";
import { getDictionary, getLocale } from "@/lib/i18n";

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<ReactElement> {
  const dict = await getDictionary();
  const lang = await getLocale();

  return (
    <Shell dict={dict} lang={lang}>
      {children}
    </Shell>
  );
}
