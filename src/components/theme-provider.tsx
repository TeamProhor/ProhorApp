"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactElement } from "react";
import type { ThemeProviderProps } from "@/types";

// Suppress the React 19 false positive warning
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const orig = console.error;
  // biome-ignore lint/suspicious/noExplicitAny: overriding console.error signature
  console.error = (...args: any[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag")
    ) {
      return;
    }
    orig.apply(console, args);
  };
}

export function ThemeProvider({ children }: ThemeProviderProps): ReactElement {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
