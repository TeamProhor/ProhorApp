import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { AppBadgeChipProps } from "@/types";

export function AppBadgeChip({
  iconSrc,
  iconAlt,
  text,
  className,
}: AppBadgeChipProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "flex flex-row items-center gap-[6px] px-[32px] py-[16px] bg-background border-border rounded-[32px]",
        className
      )}
    >
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={24}
        height={24}
      />
      <h5 className="text-[12px] font-sans text-foreground font-normal border-0">
        {text}
      </h5>
    </Badge>
  );
}
