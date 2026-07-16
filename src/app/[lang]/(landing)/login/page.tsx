import type { ReactElement } from "react";
import LoginForm from "@/components/auth/LoginForm";
import { getDictionary } from "@/lib/i18n";
import type { PageProps } from "@/types";

export default async function LoginPage({
  params,
}: PageProps): Promise<ReactElement> {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return <LoginForm dict={dict} />;
}
