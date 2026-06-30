"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Check } from "@/components/shared/Icons";
import { useTranslation } from "@/components/shared/LanguageProvider";
import { Button } from "@/components/ui/button";

export default function UpgradePage() {
  const { t, locale } = useTranslation();
  const router = useRouter();
  const [planType, setPlanType] = useState<"individual" | "team">("individual");
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "yearly",
  );

  const isBengali = locale === "bn";

  const freeFeatures = [
    isBengali
      ? "ওয়েব, আইওএস, অ্যান্ড্রয়েড এবং ডেসক্রিপশনে চ্যাট"
      : "Chat on web, iOS, Android, and desktop",
    isBengali
      ? "কোড জেনারেট এবং ডাটা ভিজ্যুয়ালাইজেশন"
      : "Generate code and visualize data",
    isBengali
      ? "স্ল্যাক এবং গুগল ওয়ার্কস্পেস সংযোগ"
      : "Connect Slack and Google Workspace",
    isBengali
      ? "জটিল কাজের জন্য এক্সটেন্ডেড থিংকিং"
      : "Extended thinking for complex work",
    isBengali ? "বিল্ট-ইন ওয়েব সার্চ সুবিধা" : "Built-in web search",
  ];

  const proFeatures = [
    isBengali
      ? "সরাসরি কোডবেসে প্রহরী কোড রান"
      : "Prohor Code directly in your codebase",
    isBengali
      ? "কোওয়ার্ক দিয়ে কাজ সম্পন্ন করার গতি বৃদ্ধি"
      : "Power through tasks with Cowork",
    isBengali
      ? "প্রহরী ডিজাইন দিয়ে প্রোটোটাইপ ও বিল্ড"
      : "Build and prototype with Prohor Design",
    isBengali ? "উচ্চতর ব্যবহারের সীমা বা লিমিট" : "Higher usage limits",
    isBengali ? "আরও বেশি এআই মডেল অ্যাক্সেস" : "Access to more AI models",
    isBengali
      ? "কথোপকথনের তথ্য মনে রাখার মেমোরি"
      : "Memory that carries across conversations",
  ];

  const maxFeatures = [
    isBengali
      ? "প্রো-এর চেয়ে ২০ গুণ বেশি ব্যবহারের সুবিধা"
      : "Up to 20x more usage than Pro*",
    isBengali
      ? "প্রহরী কোড এবং কোওয়ার্ক-এর জন্য সাজেস্টিড"
      : "Recommended for Prohor Code & Cowork",
    isBengali
      ? "প্রহরীর নতুন ফিচারে প্রথম অ্যাক্সেস"
      : "Early access to advanced Prohor features",
    isBengali
      ? "সকল কাজের জন্য উচ্চতর আউটপুট লিমিট"
      : "Higher output limits for all tasks",
    isBengali
      ? "অধিক ট্রাফিকের সময়েও ফার্স্ট অ্যাক্সেস"
      : "Priority access at high traffic times",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans pb-12">
      <header className="flex w-full items-center justify-between px-6 py-6 md:px-10">
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
      </header>

      <main className="mx-auto flex max-w-6xl flex-col items-center px-4 w-full mt-2">
        <h1 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-center">
          {t("upgrade.title")}
        </h1>

        <div className="mt-6 flex items-center bg-secondary border border-border/40 rounded-xl p-1 gap-1">
          <button
            type="button"
            onClick={() => setPlanType("individual")}
            className={`px-5 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer border-0 ${
              planType === "individual"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground bg-transparent"
            }`}
          >
            {t("upgrade.individual")}
          </button>
          <button
            type="button"
            onClick={() => setPlanType("team")}
            className={`px-5 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer border-0 ${
              planType === "team"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground bg-transparent"
            }`}
          >
            {t("upgrade.team")}
          </button>
        </div>

        {planType === "individual" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-10 items-stretch">
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
                <Button className="w-full bg-secondary text-foreground hover:bg-secondary/80 text-sm h-11 rounded-xl">
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
                      Monthly
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
                      Yearly
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
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/95 text-sm h-11 rounded-xl">
                  {t("upgrade.pro.button")}
                </Button>
                <div className="border-t border-border/40 pt-4 mt-2">
                  <p className="text-xs font-semibold text-foreground mb-2">
                    {isBengali
                      ? "ফ্রি-এর সবকিছু এবং সাথে:"
                      : "Everything in Free and:"}
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
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/95 text-sm h-11 rounded-xl">
                  {t("upgrade.max.button")}
                </Button>
                <div className="border-t border-border/40 pt-4 mt-2">
                  <p className="text-xs font-semibold text-foreground mb-2">
                    {isBengali
                      ? "প্রো-এর সবকিছু এবং সাথে:"
                      : "Everything in Pro, plus:"}
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
          <div className="flex flex-col items-center gap-4 mt-12 text-center p-8 bg-card border rounded-2xl max-w-xl">
            <h3 className="font-serif text-xl text-foreground">
              {isBengali
                ? "টিম ও এন্টারপ্রাইজ অ্যাকাউন্টসমূহ শীঘ্রই আসছে"
                : "Team & Enterprise Plans Coming Soon"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {isBengali
                ? "আমাদের সেলস টিমের সাথে যোগাযোগ করতে এবং আপনার টিমকে যুক্ত করতে info@prohor.com ইমেইল করুন।"
                : "For custom enterprise integrations, volume discounts, or custom team deployments, please reach out to our team at sales@prohor.com."}
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/95 mt-2">
              {isBengali ? "আমাদের সেলস টিমের সাথে যোগাযোগ করুন" : "Contact Sales"}
            </Button>
          </div>
        )}

        <div className="mt-10 max-w-md text-center">
          <p className="text-[10px] text-muted-foreground">
            {isBengali
              ? "*ব্যবহারের সীমা প্রযোজ্য। প্রহরী তার নিজস্ব বিবেচনা অনুসারে যেকোনো সময় দাম ও সুবিধা পরিবর্তন করার অধিকার রাখে।"
              : "*Usage limits apply. Prices and plans are subject to change at Prohor's discretion."}
          </p>
        </div>
      </main>
    </div>
  );
}
