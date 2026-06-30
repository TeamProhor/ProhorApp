"use client";

import Link from "next/link";
import { useTranslation } from "@/components/shared/LanguageProvider";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-6 py-12 text-center">
      <div className="flex flex-col items-center gap-8 max-w-md">
        <Logo className="size-16 text-primary" />

        <div className="flex flex-col gap-3">
          <h1 className="text-balance text-4xl font-normal tracking-tight font-serif text-foreground">
            {t("notFound.title")}
          </h1>
          <p className="text-pretty text-muted-foreground text-sm font-sans">
            {t("notFound.description")}
          </p>
        </div>

        <Button
          asChild
          className="mt-4 bg-primary text-primary-foreground hover:bg-primary/95 h-11 px-8 w-fit min-w-[180px] justify-center transition-all duration-200"
          size="lg"
        >
          <Link href="/">{t("notFound.button")}</Link>
        </Button>
      </div>
    </div>
  );
}
