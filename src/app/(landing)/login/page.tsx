import type { ReactElement } from "react";
import LoginForm from "@/components/auth/LoginForm";
import { getDictionary } from "@/lib/i18n";

export default async function LoginPage(): Promise<ReactElement> {
  const dict = await getDictionary();

  return <LoginForm dict={dict} />;
}
