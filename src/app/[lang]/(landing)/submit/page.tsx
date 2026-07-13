import SubmitForm from "@/components/submit-form";
import { getDictionary } from "@/lib/i18n";

export default async function Submit({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return <SubmitForm d={dict.submit} />;
}
