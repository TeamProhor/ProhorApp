"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "@/lib/icons";
import type { CopyButtonProps } from "@/types";

export function CopyButton({ text }: Readonly<CopyButtonProps>) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      title="Copy"
      onClick={handleCopy}
      className="hover:text-on-dark transition-colors flex items-center text-on-dark-soft h-auto w-auto p-0 bg-transparent hover:bg-transparent cursor-pointer shrink-0"
    >
      {copied ? (
        <span className="text-xs text-accent flex items-center gap-1">
          <Check size={14} /> Copied!
        </span>
      ) : (
        <Copy size={16} />
      )}
    </Button>
  );
}
