import SubmitForm from "@/components/submit-form";
import { getDictionary } from "@/lib/i18n";
import type { PageProps } from "@/types";

export default async function Submit({ params }: PageProps) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return <SubmitForm d={dict.submit} />;
}
