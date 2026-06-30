"use client";

import { BookOpen, Key, Sparkle } from "@phosphor-icons/react";
import Link from "next/link";
import { useTranslation } from "@/components/shared/LanguageProvider";
import { Button } from "@/components/ui/button";
import type { HeaderProps } from "@/types";

export function Header(_props: Readonly<HeaderProps>) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
      <h1 className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-foreground">
        {t("dashboard.greeting")}, FrostFoe
      </h1>
      <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-3 w-full md:w-auto">
        <Button
          variant="outline"
          size="lg"
          className="w-full sm:w-auto h-10! border-border bg-card hover:bg-muted text-foreground transition-all duration-200"
          asChild
        >
          <Link href="/docs" className="justify-center">
            <BookOpen className="size-5" />
            <span>{t("dashboard.exploreDocs")}</span>
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full sm:w-auto h-10! border-border bg-card hover:bg-muted text-foreground transition-all duration-200 justify-center"
        >
          <Key className="size-5" />
          <span>{t("dashboard.getApiKey")}</span>
        </Button>
        <Button
          size="lg"
          className="col-span-2 sm:col-span-1 w-full sm:w-auto h-10! bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-200"
          asChild
        >
          <Link
            href="/workspaces/default/agent-quickstart"
            className="justify-center"
          >
            <Sparkle className="size-5" />
            <span>{t("dashboard.buildAgent")}</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
