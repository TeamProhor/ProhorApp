import { cookies } from "next/headers";
import { connection } from "next/server";

export const locales = ["en", "bn"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  bn: () => import("@/dictionaries/bn.json").then((module) => module.default),
};

export const getLocale = async (): Promise<Locale> => {
  try {
    await connection();
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get("NEXT_LOCALE");
    const locale = localeCookie?.value as Locale | undefined;

    if (locale && locales.includes(locale as Locale)) {
      return locale as Locale;
    }
  } catch (_error) {
    // cookies() throws in static generation
  }
  return defaultLocale;
};

export const getDictionary = async (locale?: string) => {
  const activeLocale = locale || (await getLocale());
  const dictLoader =
    dictionaries[activeLocale as keyof typeof dictionaries] ??
    dictionaries[defaultLocale];
  return dictLoader();
};
