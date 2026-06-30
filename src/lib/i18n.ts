import bn from "./translations/bn.json";
import en from "./translations/en.json";

export type Locale = "en" | "bn";

export function getDictionary(locale: Locale) {
  return locale === "bn" ? bn : en;
}
