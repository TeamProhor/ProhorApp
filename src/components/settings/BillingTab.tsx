"use client";

import { useState } from "react";
import { useTranslation } from "@/components/shared/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import type { BillingTabProps } from "@/types";

export function BillingTab(_props: Readonly<BillingTabProps>) {
  const { t } = useTranslation();
  const [budget, setBudget] = useState("100.00");
  const [alertThreshold, setAlertThreshold] = useState("80");
  const [emailAlerts, setEmailAlerts] = useState(true);

  return (
    <Card className="rounded-xl border border-border bg-card">
      <CardContent className="flex flex-col gap-6 py-6 font-sans">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="monthlybudget"
            className="text-sm font-medium text-foreground"
          >
            {t("settings.billing.monthlyBudget")}
          </label>
          <Input
            id="monthlybudget"
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full max-w-xs"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="spendalert"
            className="text-sm font-medium text-foreground"
          >
            {t("settings.billing.spendAlert")}
          </label>
          <Input
            id="spendalert"
            type="number"
            value={alertThreshold}
            onChange={(e) => setAlertThreshold(e.target.value)}
            className="w-full max-w-xs"
          />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Switch
            checked={emailAlerts}
            onCheckedChange={setEmailAlerts}
            id="email-alerts"
          />
          <label
            htmlFor="email-alerts"
            className="text-sm font-medium text-foreground cursor-pointer"
          >
            {t("settings.billing.emailAlertsLabel")}
          </label>
        </div>

        <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/95 mt-2 cursor-pointer">
          {t("settings.billing.saveLimits")}
        </Button>
      </CardContent>
    </Card>
  );
}
