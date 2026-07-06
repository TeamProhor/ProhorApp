import type { ReactElement } from "react";
import LoginForm from "@/components/auth/login-form";
import { getDictionary } from "@/lib/i18n";

export default async function LoginPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<ReactElement> {
  const resolvedParams = await params;
  const dict = getDictionary(resolvedParams.lang);

  return <LoginForm dict={dict.auth} />;
}
