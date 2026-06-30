"use client";

import { useState } from "react";
import { useTranslation } from "@/components/shared/LanguageProvider";
import { Tabs } from "@/components/shared/Tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: string;
  status: "active" | "revoked";
  workspace: string;
  createdBy: string;
  creatorEmail: string;
  lastUsed: string;
  cost: string;
}

export default function SettingsPage() {
  const { t } = useTranslation();
  const [workspaceName] = useState("FrostFoe's Individual Org");
  const [workspaceId] = useState("frostfoe-ind-org-991");
  const [budget, setBudget] = useState("100.00");
  const [alertThreshold, setAlertThreshold] = useState("80");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [stateProv, setStateProv] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [allowCreatingKeys, setAllowCreatingKeys] = useState(true);
  const [activeTab, setActiveTab] = useState<"general" | "apikeys" | "billing">(
    "general",
  );

  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: "1",
      name: "sysm-code",
      key: "sk-ant-api03-EBH...xwAA",
      created: "Apr 1, 2026",
      status: "active",
      workspace: "Default",
      createdBy: "FrostFoe",
      creatorEmail: "frostfoe@gmail.com",
      lastUsed: "30+ days ago",
      cost: "—",
    },
  ]);

  const [newKeyName, setNewKeyName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleCreateKey() {
    if (!newKeyName.trim()) return;
    const newId = (apiKeys.length + 1).toString();
    const randomHex = Math.random().toString(16).substring(2, 6).toUpperCase();
    const newKey: ApiKey = {
      id: newId,
      name: newKeyName,
      key: `sk-ant-api03-${randomHex}...${randomHex}`,
      created: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      status: "active",
      workspace: "Default",
      createdBy: "FrostFoe",
      creatorEmail: "frostfoe@gmail.com",
      lastUsed: "Never",
      cost: "—",
    };
    setApiKeys([...apiKeys, newKey]);
    setNewKeyName("");
    setIsDialogOpen(false);
  }

  function handleRevokeKey(id: string) {
    setApiKeys(
      apiKeys.map((k) =>
        k.id === id ? { ...k, status: "revoked" as const } : k,
      ),
    );
  }

  const activeKeysCount = apiKeys.filter((k) => k.status === "active").length;

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
          {activeTab === "general" && (
            <Card className="rounded-xl border border-border bg-card">
              <CardContent className="flex flex-col gap-8 py-6 font-sans">
                <div className="flex flex-col gap-4 max-w-md w-full">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="workspacename"
                      className="text-sm font-medium text-foreground"
                    >
                      Organization name
                    </label>
                    <Input
                      id="workspacename"
                      value={workspaceName}
                      disabled
                      readOnly
                      className="w-full bg-muted text-muted-foreground cursor-not-allowed"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="address1"
                      className="text-sm font-medium text-foreground"
                    >
                      Primary business address
                    </label>
                    <Input
                      id="address1"
                      placeholder="Line 1"
                      value={addressLine1}
                      onChange={(e) => setAddressLine1(e.target.value)}
                      className="w-full"
                    />
                    <Input
                      placeholder="Line 2"
                      value={addressLine2}
                      onChange={(e) => setAddressLine2(e.target.value)}
                      className="w-full mt-1"
                    />
                  </div>

                  <div className="flex items-end gap-3 w-full">
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <label
                        htmlFor="city"
                        className="text-sm font-medium text-foreground"
                      >
                        City
                      </label>
                      <Input
                        id="city"
                        placeholder="San Francisco"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <label
                        htmlFor="state"
                        className="text-sm font-medium text-foreground"
                      >
                        State or province
                      </label>
                      <Input
                        id="state"
                        placeholder="CA"
                        value={stateProv}
                        onChange={(e) => setStateProv(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-28 shrink-0">
                      <label
                        htmlFor="zip"
                        className="text-sm font-medium text-foreground"
                      >
                        Postal code
                      </label>
                      <Input
                        id="zip"
                        placeholder="94000"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="country"
                      className="text-sm font-medium text-foreground"
                    >
                      Country
                    </label>
                    <Input
                      id="country"
                      placeholder="Select Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                    <span>
                      Organization ID:{" "}
                      <span className="font-mono text-foreground">
                        {workspaceId}
                      </span>
                    </span>
                  </div>

                  <div className="flex gap-3 mt-2">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/95 text-xs h-9">
                      Save Changes
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-destructive hover:bg-destructive/10 text-xs h-9"
                    >
                      Delete organization
                    </Button>
                  </div>
                </div>

                <div className="border-t border-border/40 pt-6">
                  <div className="flex justify-between items-center w-full gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-foreground font-medium text-sm">
                        Convert to team organization
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Invite teammates and manage members.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-border hover:bg-muted text-xs h-9 shrink-0"
                    >
                      Convert to team
                    </Button>
                  </div>
                </div>

                <div className="border-t border-border/40 pt-6">
                  <div className="flex justify-between items-center w-full gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-foreground font-medium text-sm">
                        Allow creating new API keys in default workspace
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Allow users to create new API keys in the default
                        workspace. Disabling this setting does not affect
                        existing API keys or disable Workbench usage.
                      </p>
                    </div>
                    <Switch
                      checked={allowCreatingKeys}
                      onCheckedChange={setAllowCreatingKeys}
                      id="allow-keys-switch"
                      className="shrink-0"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "apikeys" && (
            <div className="flex flex-col gap-6 font-sans">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-medium inline-flex items-center gap-2 text-foreground">
                    API keys{" "}
                    <span className="inline-flex items-center justify-center h-5 min-w-5 rounded-full px-1.5 text-xs font-semibold tabular-nums bg-secondary text-muted-foreground">
                      {activeKeysCount}
                    </span>
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    API keys are owned by workspaces and remain active even
                    after the creator is removed
                  </p>
                </div>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/95 text-xs h-9 px-4 shrink-0">
                      Create key
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-card border border-border rounded-xl">
                    <DialogHeader>
                      <DialogTitle className="font-serif text-lg text-foreground">
                        {t("settings.apiKeys.modalTitle")}
                      </DialogTitle>
                      <DialogDescription className="text-xs text-muted-foreground font-sans mt-1">
                        {t("settings.apiKeys.modalDescription")}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2 py-4">
                      <div className="grid flex-1 gap-2">
                        <label
                          htmlFor="keyname"
                          className="text-sm font-medium text-foreground"
                        >
                          {t("settings.apiKeys.nameLabel")}
                        </label>
                        <Input
                          id="keyname"
                          placeholder={t("settings.apiKeys.placeholder")}
                          value={newKeyName}
                          onChange={(e) => setNewKeyName(e.target.value)}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <DialogFooter className="sm:justify-end gap-2">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        {t("settings.apiKeys.cancel")}
                      </Button>
                      <Button
                        type="button"
                        className="bg-primary text-primary-foreground hover:bg-primary/95"
                        onClick={handleCreateKey}
                      >
                        {t("settings.apiKeys.create")}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="border rounded-xl bg-card p-6 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-sm">Your plan</h3>
                    <span className="inline-flex items-center rounded-full bg-secondary text-muted-foreground px-2 py-0.5 text-[10px] font-medium">
                      Evaluation access
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    This free plan is for evaluating Claude’s capabilities
                    before commercial use.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="border-border hover:bg-muted text-xs h-9 shrink-0"
                >
                  Learn more
                </Button>
              </div>

              <div className="border rounded-xl overflow-hidden bg-card">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-medium text-xs">Key</TableHead>
                      <TableHead className="font-medium text-xs">
                        Workspace
                      </TableHead>
                      <TableHead className="font-medium text-xs">
                        Created by
                      </TableHead>
                      <TableHead className="font-medium text-xs">
                        Created at
                      </TableHead>
                      <TableHead className="font-medium text-xs">
                        Last used at
                      </TableHead>
                      <TableHead className="font-medium text-xs">
                        Cost
                      </TableHead>
                      <TableHead className="font-medium text-xs text-right">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {apiKeys.map((key) => (
                      <TableRow key={key.id} className="hover:bg-muted/30">
                        <TableCell>
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium text-sm text-foreground">
                              {key.name}
                            </span>
                            <code className="text-[10px] text-muted-foreground font-mono">
                              {key.key}
                            </code>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-indigo-400 shrink-0" />
                            <span className="text-sm font-medium">
                              {key.workspace}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="text-sm text-foreground">
                              {key.createdBy}
                            </span>
                            <span className="text-[10px] text-muted-foreground">
                              {key.creatorEmail}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-xs text-muted-foreground">
                          {key.created}
                        </TableCell>
                        <TableCell className="text-xs text-muted-foreground">
                          {key.lastUsed}
                        </TableCell>
                        <TableCell className="text-xs text-muted-foreground">
                          {key.cost}
                        </TableCell>
                        <TableCell className="text-right">
                          {key.status === "active" ? (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs text-destructive hover:bg-destructive/10"
                              onClick={() => handleRevokeKey(key.id)}
                            >
                              {t("settings.apiKeys.revoke")}
                            </Button>
                          ) : (
                            <span className="text-xs text-muted-foreground">
                              Revoked
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {activeTab === "billing" && (
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
                    Enable email warnings on hitting budget limits
                  </label>
                </div>

                <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/95 mt-2">
                  {t("settings.billing.saveLimits")}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
