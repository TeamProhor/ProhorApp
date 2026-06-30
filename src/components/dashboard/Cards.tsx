"use client";

import { useTranslation } from "@/components/shared/LanguageProvider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CardsProps } from "@/types";

export function Cards(_props: Readonly<CardsProps>) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="rounded-xl border border-border bg-card text-card-foreground">
        <CardHeader>
          <CardTitle className="font-serif text-xl font-normal text-foreground">
            {t("dashboard.cards.sonnet.title")}
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground font-sans">
            {t("dashboard.cards.sonnet.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 font-sans">
          <div className="text-3xl font-normal text-foreground">
            1.2M{" "}
            <span className="text-sm text-muted-foreground">
              {t("dashboard.cards.sonnet.tokens")}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            {t("dashboard.cards.sonnet.text")}
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-xl border border-border bg-card text-card-foreground">
        <CardHeader>
          <CardTitle className="font-serif text-xl font-normal text-foreground">
            {t("dashboard.cards.haiku.title")}
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground font-sans">
            {t("dashboard.cards.haiku.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 font-sans">
          <div className="text-3xl font-normal text-foreground">
            3.8M{" "}
            <span className="text-sm text-muted-foreground">
              {t("dashboard.cards.sonnet.tokens")}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            {t("dashboard.cards.haiku.text")}
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-xl border border-border bg-[#181715] text-[#faf9f5]">
        <CardHeader>
          <CardTitle className="font-serif text-xl font-normal text-[#faf9f5]">
            {t("dashboard.cards.spend.title")}
          </CardTitle>
          <CardDescription className="text-xs text-[#a09d96] font-sans">
            {t("dashboard.cards.spend.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 font-sans">
          <div className="text-3xl font-normal text-[#faf9f5]">
            $42.50 <span className="text-sm text-[#a09d96]">/ $100.00</span>
          </div>
          <p className="text-xs text-[#a09d96]">
            {t("dashboard.cards.spend.text")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
