import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { DownloadMacButtonProps } from "@/types";

export function DownloadMacButton({
  text,
  className,
}: DownloadMacButtonProps) {
  return (
    <Button
      className={cn(
        "flex flex-row items-center justify-center gap-[8px] bg-primary hover:bg-primary/90 transition-colors rounded-[16px] px-[16px] py-[24px]",
        className
      )}
    >
      <Image
        src="/images/stash/apple-logo.svg"
        alt="apple logo"
        width={24}
        height={24}
      />
      <span className="text-primary-foreground text-[16px] font-[400] font-sans">
        {text}
      </span>
    </Button>
  );
}
