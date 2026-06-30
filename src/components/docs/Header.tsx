"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CaretRight, MagnifyingGlass } from "@/components/shared/Icons";
import { useTranslation } from "@/components/shared/LanguageProvider";
import Logo from "@/components/shared/Logo";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import type { DocsHeaderProps } from "@/types";

export function Header(_props: Readonly<DocsHeaderProps>) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useTranslation();

  const isBengali = locale === "bn";

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <header className="h-16 flex items-center justify-between px-4 md:px-6 shrink-0 bg-background sticky top-0 z-50">
      <div className="flex items-center gap-4 md:gap-6">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <Logo width={22} height={22} animated={false} />
          <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">
            {isBengali ? "ডকুমেন্টেশন" : "Docs"}
          </span>
        </Link>
      </div>

      <div className="flex-1 max-w-xl mx-8 hidden md:block">
        <div className="relative group">
          <MagnifyingGlass
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10"
            size={16}
          />
          <Input
            type="text"
            placeholder={isBengali ? "ডকুমেন্টেশন খুঁজুন..." : "Search docs..."}
            className="w-full bg-secondary border border-border rounded-md py-1.5 pl-9 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <Kbd className="hidden sm:inline-block bg-background border border-border rounded px-1.5 text-[10px] font-medium text-muted-foreground h-auto min-w-0">
              Ctrl
            </Kbd>
            <Kbd className="hidden sm:inline-block bg-background border border-border rounded px-1.5 text-[10px] font-medium text-muted-foreground h-auto min-w-0">
              K
            </Kbd>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-4 text-sm text-muted-foreground">
        <Link
          href="#"
          className="hover:text-foreground transition-colors flex items-center gap-1 text-xs md:text-sm"
        >
          <span className="hidden sm:inline">
            {isBengali ? "ড্যাশবোর্ডে যান" : "Go to Dashboard"}
          </span>{" "}
          <CaretRight size={12} />
        </Link>
        {mounted && (
          <>
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
          </>
        )}
      </div>
    </header>
  );
}
