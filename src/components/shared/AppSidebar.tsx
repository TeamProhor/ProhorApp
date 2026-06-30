"use client";

import {
  CodeIcon,
  GearIcon,
  KeyIcon,
  SignOutIcon,
  SquaresFourIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/shared/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import type { AppSidebarProps } from "@/types";

export function AppSidebar({ ...props }: Readonly<AppSidebarProps>) {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const menuItems = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquaresFourIcon,
    },
    {
      title: "Workbench",
      url: "#",
      icon: CodeIcon,
    },
    {
      title: "API Keys",
      url: "#",
      icon: KeyIcon,
    },
    {
      title: "Settings",
      url: "#",
      icon: GearIcon,
    },
  ];

  if (isMobile) {
    return (
      <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto z-50 h-14 bg-card/90 backdrop-blur-md border border-border/40 rounded-full flex items-center justify-around px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        {menuItems.map((item) => {
          const isActive = pathname === item.url;
          return (
            <Link
              key={item.title}
              href={item.url}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 flex-1 h-full py-1 text-muted-foreground transition-colors hover:text-foreground",
                isActive && "text-primary font-medium",
              )}
            >
              <item.icon className="size-[18px]" />
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
      collapsible="offcanvas"
      className="border-r border-border/50"
      {...props}
    >
      <SidebarHeader className="h-16 flex items-center px-6 border-b border-border/40">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-0 hover:bg-transparent! active:bg-transparent!"
            >
              <Link href="/" className="flex items-center gap-3">
                <Logo className="size-6 text-primary transition-transform duration-300 hover:rotate-6" />
                <span className="font-serif text-lg tracking-tight font-normal text-foreground">
                  Prohor Platform
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="font-sans text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 px-3 mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.url;
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
                        <item.icon className="size-5" />
                        <span className="font-sans text-sm">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/40">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Sign out"
              className="w-full rounded-lg transition-all duration-200 hover:bg-card hover:text-foreground [&_svg]:transition-colors [&_svg]:duration-200 hover:[&_svg]:text-destructive"
            >
              <Link href="/login" className="flex items-center gap-3 px-3 py-2">
                <SignOutIcon className="size-5 text-muted-foreground" />
                <span className="font-sans text-sm">Sign out</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
