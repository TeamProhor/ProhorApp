"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { useTranslation } from "@/components/shared/LanguageProvider";
import Logo from "@/components/shared/Logo";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import type { SiteHeaderProps } from "@/types";

export function SiteHeader(_props: Readonly<SiteHeaderProps>) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useTranslation();

  const isBengali = locale === "bn";

  function toggleLanguage() {
    let newPath = pathname;
    if (isBengali) {
      newPath = pathname.replace(/^\/bn/, "/en");
    } else if (pathname.startsWith("/en")) {
      newPath = pathname.replace(/^\/en/, "/bn");
    } else {
      newPath = `/bn${pathname}`;
    }
    router.push(newPath);
  }

  return (
    <header className="sticky top-0 z-50 w-full flex h-(--header-height) shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-1 lg:gap-2">
          <SidebarTrigger className="-ml-1 md:inline-flex hidden" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4 md:block hidden"
          />
          <div className="flex items-center gap-2 md:hidden pr-2 border-r border-border/40 mr-1">
            <Logo className="size-5 text-primary shrink-0" />
            <span className="font-serif text-sm font-semibold tracking-tight text-foreground">
              {isBengali ? "প্রহরী" : "Prohor"}
            </span>
          </div>
          <h1 className="text-base font-medium md:block hidden">
            {isBengali ? "নথিপত্র" : "Documents"}
          </h1>
        </div>

        {mounted && (
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="hover:text-foreground transition-colors h-9 w-9 text-muted-foreground cursor-pointer flex items-center justify-center rounded-md hover:bg-secondary font-serif text-sm font-semibold"
              title={isBengali ? "Switch to English" : "বাংলায় পরিবর্তন করুন"}
            >
              {isBengali ? "EN" : "বাং"}
            </Button>
            <AnimatedThemeToggler
              theme={theme === "dark" ? "dark" : "light"}
              onThemeChange={(newTheme) => setTheme(newTheme)}
              className="hover:text-foreground transition-colors h-9 w-9 text-muted-foreground cursor-pointer flex items-center justify-center rounded-md hover:bg-secondary [&_svg]:size-[20px]"
            />
          </div>
        )}
      </div>
    </header>
  );
}
