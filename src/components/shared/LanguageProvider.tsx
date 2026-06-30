"use client";

import { useParams } from "next/navigation";
import { createContext, use } from "react";
import bn from "@/lib/translations/bn.json";
import en from "@/lib/translations/en.json";
import type { LanguageProviderProps } from "@/types";

type Locale = "en" | "bn";

interface LanguageContextType {
  locale: Locale;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
}: Readonly<LanguageProviderProps>) {
  const params = useParams();
  const locale = (params?.locale as Locale) || "bn";

  function t(key: string): string {
    const dict = locale === "bn" ? bn : en;
    const value = key
      .split(".")
      .reduce((o: unknown, i) => (o as Record<string, unknown>)?.[i], dict);
    return typeof value === "string" ? value : key;
  }

  function tArray(key: string): string[] {
    const dict = locale === "bn" ? bn : en;
    const value = key
      .split(".")
      .reduce((o: unknown, i) => (o as Record<string, unknown>)?.[i], dict);
    return Array.isArray(value) ? (value as string[]) : [];
  }

  return (
    <LanguageContext.Provider value={{ locale, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = use(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
