"use client";

import { useState } from "react";
import { ApiKeysTab } from "@/components/settings/ApiKeysTab";
import { BillingTab } from "@/components/settings/BillingTab";
import { GeneralTab } from "@/components/settings/GeneralTab";
import { useTranslation } from "@/components/shared/LanguageProvider";
import { Tabs } from "@/components/shared/Tabs";

export default function SettingsPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"general" | "apikeys" | "billing">(
    "general",
  );

  return (
    <div className="container mx-auto py-6 px-4 md:py-10 md:px-6 max-w-4xl">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-serif text-3xl font-normal tracking-tight text-foreground">
            {t("settings.title")}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {t("settings.description")}
          </p>
        </div>

        <Tabs
          items={[
            {
              label: t("settings.tabs.general"),
              active: activeTab === "general",
              onClick: () => setActiveTab("general"),
            },
            {
              label: t("settings.tabs.apiKeys"),
              active: activeTab === "apikeys",
              onClick: () => setActiveTab("apikeys"),
            },
            {
              label: t("settings.tabs.billing"),
              active: activeTab === "billing",
              onClick: () => setActiveTab("billing"),
            },
          ]}
        />

        <div className="mt-4">
          {activeTab === "general" && <GeneralTab />}
          {activeTab === "apikeys" && <ApiKeysTab />}
          {activeTab === "billing" && <BillingTab />}
        </div>
      </div>
    </div>
  );
}
