"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "@/components/shared/LanguageProvider";
import { Tabs } from "@/components/shared/Tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "@/lib/icons";

export default function UpgradePage() {
  const { t, tArray } = useTranslation();
  const router = useRouter();
  const [planType, setPlanType] = useState<"individual" | "team">("individual");
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "yearly",
  );

  const freeFeatures = tArray("upgrade.free.features");
  const proFeatures = tArray("upgrade.pro.features");
  const maxFeatures = tArray("upgrade.max.features");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans pb-12">
      <header className="flex w-full items-center justify-between px-6 py-6 md:px-10 border-b border-border/40 bg-card">
        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="h-9 w-9 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground cursor-pointer flex items-center justify-center"
            aria-label="Back"
          >
            <ArrowLeft className="size-5" />
          </Button>
          <h1 className="font-serif text-xl md:text-2xl font-normal tracking-tight">
            {t("upgrade.title")}
          </h1>
        </div>
      </header>

      <Tabs
        items={[
          {
            label: t("upgrade.individual"),
            active: planType === "individual",
            onClick: () => setPlanType("individual"),
          },
          {
            label: t("upgrade.team"),
            active: planType === "team",
            onClick: () => setPlanType("team"),
          },
        ]}
      />

      <main className="mx-auto flex max-w-5xl flex-col items-center px-6 py-8 w-full gap-8">
        {planType === "individual" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
            <div className="flex flex-col gap-6 p-6 rounded-2xl border border-border bg-card shadow-sm h-full justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {t("upgrade.free.title")}
                  </h3>
                  <p className="text-xs text-muted-foreground -mt-1">
                    {t("upgrade.free.desc")}
                  </p>
                </div>
                <div className="my-2">
                  <span className="text-3xl font-bold text-foreground">
                    {t("upgrade.free.price")}
                  </span>
                </div>
                <Button className="w-full bg-secondary text-foreground hover:bg-secondary/80 text-sm h-11 rounded-xl cursor-pointer">
                  {t("upgrade.free.button")}
                </Button>
                <div className="border-t border-border/40 pt-4 mt-2">
                  <ul className="flex flex-col gap-2.5">
                    {freeFeatures.map((f) => (
                      <li
                        key={f}
                        className="flex gap-2 items-start text-xs text-muted-foreground"
                      >
                        <Check className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-6 rounded-2xl border border-primary/40 bg-card shadow-sm h-full justify-between relative">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      {t("upgrade.pro.title")}
                    </h3>
                    <p className="text-xs text-muted-foreground -mt-1">
                      {t("upgrade.pro.desc")}
                    </p>
                  </div>
                  <div className="flex items-center bg-secondary border border-border/40 rounded-full p-0.5 text-[10px]">
                    <button
                      type="button"
                      onClick={() => setBillingPeriod("monthly")}
                      className={`px-2 py-0.5 rounded-full cursor-pointer border-0 ${
                        billingPeriod === "monthly"
                          ? "bg-card text-foreground shadow-sm"
                          : "text-muted-foreground bg-transparent"
                      }`}
                    >
                      {t("upgrade.monthlyToggle")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setBillingPeriod("yearly")}
                      className={`px-2 py-0.5 rounded-full cursor-pointer border-0 ${
                        billingPeriod === "yearly"
                          ? "bg-card text-foreground shadow-sm"
                          : "text-muted-foreground bg-transparent"
                      }`}
                    >
                      {t("upgrade.yearlyToggle")}
                    </button>
                  </div>
                </div>
                <div className="my-2 flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground">
                      {billingPeriod === "yearly"
                        ? t("upgrade.pro.price")
                        : "$20"}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {billingPeriod === "yearly"
                        ? t("upgrade.pro.period")
                        : "USD / month"}
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/95 text-sm h-11 rounded-xl cursor-pointer">
                  {t("upgrade.pro.button")}
                </Button>
                <div className="border-t border-border/40 pt-4 mt-2">
                  <p className="text-xs font-semibold text-foreground mb-2">
                    {t("upgrade.pro.title") === "Pro"
                      ? "Everything in Free and:"
                      : "ফ্রি-এর সবকিছু এবং সাথে:"}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {proFeatures.map((f) => (
                      <li
                        key={f}
                        className="flex gap-2 items-start text-xs text-muted-foreground"
                      >
                        <Check className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-6 rounded-2xl border border-border bg-card shadow-sm h-full justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {t("upgrade.max.title")}
                  </h3>
                  <p className="text-xs text-muted-foreground -mt-1">
                    {t("upgrade.max.desc")}
                  </p>
                </div>
                <div className="my-2 flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground">
                      {t("upgrade.max.price")}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {t("upgrade.max.period")}
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/95 text-sm h-11 rounded-xl cursor-pointer">
                  {t("upgrade.max.button")}
                </Button>
                <div className="border-t border-border/40 pt-4 mt-2">
                  <p className="text-xs font-semibold text-foreground mb-2">
                    {t("upgrade.max.title") === "Max"
                      ? "Everything in Pro, plus:"
                      : "প্রো-এর সবকিছু এবং সাথে:"}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {maxFeatures.map((f) => (
                      <li
                        key={f}
                        className="flex gap-2 items-start text-xs text-muted-foreground"
                      >
                        <Check className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 mt-4 text-center p-8 bg-card border rounded-2xl max-w-xl w-full">
            <h3 className="font-serif text-xl text-foreground">
              {t("upgrade.teamTitle")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("upgrade.teamDesc")}
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/95 mt-2 cursor-pointer">
              {t("upgrade.teamBtn")}
            </Button>
          </div>
        )}

        <div className="max-w-md text-center mt-4">
          <p className="text-[10px] text-muted-foreground">
            {t("upgrade.free.title") === "Free"
              ? "*Usage limits apply. Prices and plans are subject to change at Prohor's discretion."
              : "*ব্যবহারের সীমা প্রযোজ্য। প্রহরী তার নিজস্ব বিবেচনা অনুসারে যেকোনো সময় দাম ও সুবিধা পরিবর্তন করার অধিকার রাখে।"}
          </p>
        </div>
      </main>
    </div>
  );
}
