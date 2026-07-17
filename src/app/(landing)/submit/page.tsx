import SubmitForm from "@/components/submit-form";
import { getDictionary } from "@/lib/i18n";

export default async function Submit() {
  const dict = await getDictionary();

  return <SubmitForm d={dict.submit} />;
}
