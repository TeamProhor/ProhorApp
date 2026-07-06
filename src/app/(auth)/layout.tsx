import type { ReactElement, ReactNode } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  return <main className="min-h-screen bg-background">{children}</main>;
}
