import { redirect } from "next/navigation";

export default async function DocsIndexPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  redirect(`/${locale}/docs/getting-started/overview`);
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "bn" }];
}
