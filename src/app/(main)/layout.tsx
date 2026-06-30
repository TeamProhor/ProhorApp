import type React from "react";
import { AppSidebar } from "@/components/shared/AppSidebar";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { MainLayoutProps } from "@/types";

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col pb-16 md:pb-0">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {children}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
