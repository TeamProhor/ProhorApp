"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function LanguageToggler({ className }: { className?: string }) {
  const pathname = usePathname();

  // Basic language detection from pathname
  const segments = pathname.split("/");
  const currentLang = segments[1];

  // Default to english if not found
  const isBn = currentLang === "bn";
  const targetLang = isBn ? "en" : "bn";
  const label = isBn ? "en" : "বাং";

  const targetPath =
    segments.length > 1
      ? `/${targetLang}${segments.slice(2).length > 0 ? `/${segments.slice(2).join("/")}` : ""}`
      : `/${targetLang}`;

  return (
    <Link
      href={targetPath}
      className={cn(
        "flex items-center justify-center font-medium hover:text-muted-foreground transition-colors",
        className,
      )}
      aria-label="Toggle language"
    >
      {label}
    </Link>
  );
}
