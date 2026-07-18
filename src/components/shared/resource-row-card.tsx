import Image from "next/image";
import { Play } from "@/components/icons";
import { Button } from "@/components/ui/button";
import type { ResourceRowCardProps } from "@/types";

export function ResourceRowCard({
  resource,
  previewText,
  downloadText,
}: ResourceRowCardProps) {
  return (
    <div className="flex flex-col w-full gap-[16px]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px] w-full">
        <div className="flex flex-row items-center gap-[16px]">
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group cursor-pointer"
          >
            <div className="absolute inset-0 m-auto w-[40px] h-[40px] bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Play size={24} weight="Filled" color="currentColor" />
            </div>
            <Image
              src={resource.thumbnail}
              alt={resource.title}
              width={120}
              height={120}
              className="w-[120px] h-auto rounded-[8px] object-cover"
              style={{ width: "120px", height: "auto" }}
            />
          </a>
          <h2 className="text-[22px] font-[600] font-sans tracking-tight text-foreground">
            {resource.title}
          </h2>
        </div>

        <div className="flex flex-row items-center gap-[16px]">
          <Button
            variant="ghost"
            className="text-[14px] text-muted-foreground font-sans hover:text-foreground hover:bg-transparent transition-colors"
          >
            {previewText}
          </Button>
          <Button className="bg-primary hover:bg-primary/90 transition-colors text-primary-foreground px-[16px] py-[8px] rounded-[12px] h-auto text-[14px] font-[400] font-sans">
            {downloadText}
          </Button>
        </div>
      </div>

      <div className="relative w-full flex overflow-x-auto gap-[16px] pb-[16px] no-scrollbar snap-x snap-mandatory">
        {resource.images.map((img, i) => (
          <div
            key={img}
            className="flex-shrink-0 w-[85vw] md:w-[400px] aspect-video bg-muted border-[0.5px] border-border rounded-[12px] overflow-hidden flex items-center justify-center snap-center"
          >
            <Image
              src={img}
              alt={`${resource.title} component ${i}`}
              width={800}
              height={450}
              className="w-full h-full object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
