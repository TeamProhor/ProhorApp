import Link from "next/link";
import { Archive, FolderOpen, Send } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n";

import type { PageProps } from "@/types";

export default async function Home({ params }: PageProps) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  const d = dict;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center gap-[24px] h-[90vh] pt-[10vh] px-[16px] pb-0">
        <h1 className="max-w-[500px] text-center text-[24px] lg:text-[32px] tracking-[-0.025em] font-[600] text-foreground leading-normal font-sans tracking-tight px-[16px]">
          {d.home.title}
        </h1>
        <h4 className="max-w-[300px] text-center text-muted-foreground text-[14px] font-sans font-[400] px-[16px]">
          {d.home.subtitle}
        </h4>

        <div className="flex flex-row flex-wrap justify-center gap-[12px]">
          <Button
            asChild
            variant="outline"
            className="flex flex-row items-center gap-[8px] px-[12px] py-[4px] bg-muted rounded-[12px] border-[0.5px] border-border hover:bg-accent transition-colors shadow-none text-foreground font-sans font-[400] h-auto text-[14px]"
          >
            <Link href={`/${resolvedParams.lang}/resources`}>
              <FolderOpen size={24} className="size-6" color="currentColor" />
              {d.sidebar.resources}
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="flex flex-row items-center gap-[8px] px-[12px] py-[4px] bg-muted rounded-[12px] border-[0.5px] border-border hover:bg-accent transition-colors shadow-none text-foreground font-sans font-[400] h-auto text-[14px]"
          >
            <Link href={`/${resolvedParams.lang}/stash`}>
              <Archive size={24} className="size-6" color="currentColor" />
              {d.home.stashForMacos}
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="flex flex-row items-center gap-[8px] px-[12px] py-[4px] bg-muted rounded-[12px] border-[0.5px] border-border hover:bg-accent transition-colors shadow-none text-foreground font-sans font-[400] h-auto text-[14px]"
          >
            <Link href={`/${resolvedParams.lang}/submit`}>
              <Send size={24} className="size-6" color="currentColor" />
              {d.sidebar.submit}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
