"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  CaretDown,
  Code,
  Coins,
  Gear,
  Key,
  SquaresFour,
} from "@/components/shared/Icons";
import Logo from "@/components/shared/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import type { AppSidebarProps } from "@/types";

export function AppSidebar({ ...props }: Readonly<AppSidebarProps>) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { state } = useSidebar();

  const menuItems = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquaresFour,
    },
    {
      title: "Workbench",
      url: "#",
      icon: Code,
    },
    {
      title: "API Keys",
      url: "/settings",
      icon: Key,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Gear,
    },
  ];

  if (isMobile) {
    return (
      <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto z-50 h-14 bg-card/90 backdrop-blur-md border border-border/40 rounded-full flex items-center justify-around px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        {menuItems.map((item) => {
          const isActive = pathname === item.url;
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              href={item.url}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 flex-1 h-full py-1 text-muted-foreground transition-colors hover:text-foreground",
                isActive && "text-primary font-medium",
              )}
            >
              <Icon className="size-[18px]" />
              <span className="font-sans text-[9px] tracking-wide">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <Sidebar
      collapsible="icon"
      className={cn(
        "border-r-0 transition-shadow duration-300",
        state === "expanded" &&
          "shadow-lg lg:shadow-[inset_-4px_0px_6px_-4px_rgba(0,0,0,0.04)]",
      )}
      {...props}
    >
      <SidebarHeader className="px-3 pt-3 flex flex-col gap-2">
        <div className="flex items-center justify-between w-full h-11 px-2 shrink-0">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="size-6 text-primary transition-transform duration-300 hover:rotate-6 shrink-0" />
            {state === "expanded" && (
              <span className="font-serif text-lg tracking-tight font-normal text-foreground truncate">
                Prohor Platform
              </span>
            )}
          </Link>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-2">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.url;
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className="w-full rounded-lg transition-all duration-200 hover:bg-card hover:text-foreground data-[active=true]:bg-card data-[active=true]:text-foreground data-[active=true]:font-medium [&_svg]:transition-colors [&_svg]:duration-200 data-[active=true]:[&_svg]:text-primary"
                    >
                      <Link
                        href={item.url}
                        className="flex items-center gap-3 px-3 py-2"
                      >
                        <Icon className="size-5 shrink-0" />
                        <span className="font-sans text-sm truncate">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3 border-t border-border/40 flex flex-col gap-1">
        {state === "expanded" ? (
          <>
            <Link
              href="/docs"
              className="hover:bg-card text-muted-foreground hover:text-foreground flex h-9 items-center gap-3 rounded-lg px-3 transition-colors text-sm"
            >
              <BookOpen className="size-5 shrink-0" />
              <span className="flex-1 font-sans text-sm">Documentation</span>
            </Link>

            <div className="hover:bg-card text-muted-foreground flex h-9 items-center gap-3 rounded-lg px-3 transition-colors text-sm justify-between">
              <div className="flex items-center gap-3">
                <Coins className="size-5 shrink-0 text-muted-foreground" />
                <span className="font-sans text-sm">Credits</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs tabular-nums text-foreground/80">
                <span>USD 0.00</span>
              </div>
            </div>

            <button
              type="button"
              className="py-1.5 px-2 flex justify-between items-center gap-3 rounded-lg hover:bg-card transition-colors w-full text-left"
            >
              <div className="flex gap-3 items-center min-w-0 w-full">
                <div className="flex-shrink-0 flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">
                  F
                </div>
                <div className="flex flex-col items-start min-w-0 pr-4 flex-1">
                  <span
                    className="text-sm font-medium w-full text-start truncate text-foreground"
                    title="FrostFoe"
                  >
                    FrostFoe
                  </span>
                  <span className="flex w-full min-w-0 items-baseline gap-1.5 text-[10px] text-muted-foreground text-start font-normal">
                    <span>Admin</span>
                    <span>·</span>
                    <span className="truncate">Individual Org</span>
                  </span>
                </div>
                <CaretDown className="size-4 text-muted-foreground shrink-0" />
              </div>
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/docs"
              className="hover:bg-card text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
              title="Documentation"
            >
              <BookOpen className="size-5 shrink-0" />
            </Link>

            <div
              className="hover:bg-card text-muted-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
              title="Credits"
            >
              <Coins className="size-5 shrink-0" />
            </div>

            <button
              type="button"
              className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs hover:bg-card transition-colors"
              title="FrostFoe (Admin)"
            >
              F
            </button>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
