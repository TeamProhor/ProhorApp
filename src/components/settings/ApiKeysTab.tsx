"use client";

import { useState } from "react";
import { useTranslation } from "@/components/shared/LanguageProvider";
import { Button } from "@/components/ui/button";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ApiKeysTabProps } from "@/types";

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

export function ApiKeysTab(_props: Readonly<ApiKeysTabProps>) {
  const { t } = useTranslation();
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
    <div className="flex flex-col gap-6 font-sans">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-medium inline-flex items-center gap-2 text-foreground">
            {t("settings.apiKeys.title")}{" "}
            <span className="inline-flex items-center justify-center h-5 min-w-5 rounded-full px-1.5 text-xs font-semibold tabular-nums bg-secondary text-muted-foreground">
              {activeKeysCount}
            </span>
          </h2>
          <p className="text-xs text-muted-foreground">
            {t("settings.apiKeys.desc")}
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/95 text-xs h-9 px-4 shrink-0">
              {t("settings.apiKeys.createBtn")}
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
            <h3 className="font-medium text-sm">
              {t("settings.apiKeys.planTitle")}
            </h3>
            <span className="inline-flex items-center rounded-full bg-secondary text-muted-foreground px-2 py-0.5 text-[10px] font-medium">
              {t("settings.apiKeys.planBadge")}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            {t("settings.apiKeys.planDesc")}
          </p>
        </div>
        <Button
          variant="outline"
          className="border-border hover:bg-muted text-xs h-9 shrink-0 cursor-pointer"
        >
          {t("settings.apiKeys.learnMore")}
        </Button>
      </div>

      <div className="border rounded-xl overflow-hidden bg-card">
        <div className="overflow-x-auto w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium text-xs">
                  {t("settings.apiKeys.tableKey")}
                </TableHead>
                <TableHead className="font-medium text-xs">
                  {t("settings.apiKeys.tableWorkspace")}
                </TableHead>
                <TableHead className="font-medium text-xs">
                  {t("settings.apiKeys.tableCreatedBy")}
                </TableHead>
                <TableHead className="font-medium text-xs">
                  {t("settings.apiKeys.tableCreatedAt")}
                </TableHead>
                <TableHead className="font-medium text-xs font-sans">
                  {t("settings.apiKeys.tableLastUsed")}
                </TableHead>
                <TableHead className="font-medium text-xs">
                  {t("settings.apiKeys.tableCost")}
                </TableHead>
                <TableHead className="font-medium text-xs text-right">
                  {t("settings.apiKeys.tableActions")}
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
                        className="text-xs text-destructive hover:bg-destructive/10 cursor-pointer"
                        onClick={() => handleRevokeKey(key.id)}
                      >
                        {t("settings.apiKeys.revoke")}
                      </Button>
                    ) : (
                      <span className="text-xs text-muted-foreground">
                        {t("settings.apiKeys.revoked")}
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
