"use client";

import {
  CaretDown,
  CaretRight,
  MagnifyingGlass,
  Sparkle,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Logo from "@/components/shared/Logo";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import type { DocsHeaderProps } from "@/types";

export function Header(_props: Readonly<DocsHeaderProps>) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-4 md:px-6 shrink-0 bg-background sticky top-0 z-50">
      <div className="flex items-center gap-4 md:gap-6">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <Logo width={22} height={22} />
          <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">
            Docs
          </span>
        </Link>

        <Button
          type="button"
          variant="ghost"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors bg-transparent hover:bg-transparent p-0 h-auto font-medium"
        >
          English <CaretDown size={12} weight="fill" />
        </Button>
      </div>

      <div className="flex-1 max-w-xl mx-8 hidden md:block">
        <div className="relative group">
          <MagnifyingGlass
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10"
            size={16}
          />
          <Input
            type="text"
            placeholder="Search docs..."
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
          className="hover:text-foreground transition-colors hidden lg:flex items-center gap-1"
        >
          <Sparkle className="text-primary" size={16} /> Ask Assistant
        </Link>
        <Link
          href="#"
          className="hover:text-foreground transition-colors hidden md:block"
        >
          Developer Platform
        </Link>
        <Link
          href="#"
          className="hover:text-foreground transition-colors flex items-center gap-1 text-xs md:text-sm"
        >
          <span className="hidden sm:inline">Go to Dashboard</span>{" "}
          <CaretRight size={12} />
        </Link>
        {mounted && (
          <AnimatedThemeToggler
            theme={theme === "dark" ? "dark" : "light"}
            onThemeChange={(newTheme) => setTheme(newTheme)}
            className="hover:text-foreground transition-colors h-9 w-9 text-muted-foreground cursor-pointer flex items-center justify-center rounded-md hover:bg-secondary [&_svg]:size-[20px]"
          />
        )}
      </div>
    </header>
  );
}
