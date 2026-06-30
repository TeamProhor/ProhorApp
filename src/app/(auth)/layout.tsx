import type React from "react";

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Readonly<AuthLayoutProps>) {
  return (
    <div className="min-h-dvh bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
