"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, ProhorIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import type { ShellProps } from "@/types";
import { Sidebar, MobileBottomNav } from "./navigation";

export default function Shell({ children, dict, lang }: ShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const _pathname = usePathname();

  return (
    <div className="flex h-[100dvh] w-full bg-muted text-foreground font-sans overflow-hidden relative">
      {/* Mobile Top Navbar */}
      <div className="lg:hidden absolute top-0 left-0 right-0 z-20 flex p-[16px] pointer-events-none">
        <div className="w-full flex flex-row items-center justify-between bg-background/80 backdrop-blur-xl border-[0.5px] border-border rounded-[24px] px-[20px] py-[12px] shadow-sm pointer-events-auto">
          <Link
            href={`/`}
            className="flex flex-row items-center"
            onClick={() => setIsSidebarOpen(false)}
          >
            <ProhorIcon className="size-6 mr-[10px] text-foreground" />
            <h3 className="text-[18px] font-[800] text-foreground whitespace-nowrap mt-[3px]">
              Vawzine
            </h3>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(true)}
            className="flex flex-col justify-center h-auto hover:bg-transparent p-0"
          >
            <List size={28} className="size-7 text-foreground" color="currentColor" />
          </Button>
        </div>
      </div>

      {/* Sidebar Overlay (Mobile) */}
      <button
        type="button"
        aria-label="Close sidebar"
        className={`fixed inset-0 bg-black/20 z-30 transition-opacity duration-300 lg:hidden cursor-default border-none outline-none ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar Component */}
      <div
        className={`fixed lg:static top-[8px] bottom-[8px] left-[8px] right-[8px] lg:inset-auto z-40 lg:z-10 bg-muted lg:bg-transparent rounded-[24px] lg:rounded-none border-[0.5px] border-border lg:border-none p-[16px] lg:p-0 transition-transform duration-500 ease-[cubic-bezier(0.075,0.82,0.165,1)] lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-[110%]"}`}
      >
        <Sidebar
          onClose={() => setIsSidebarOpen(false)}
          dict={dict}
          lang={lang}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-background relative overflow-hidden rounded-[0px] lg:rounded-[24px] border-0 lg:border-[0.5px] lg:border-border mt-0 lg:my-[20px] lg:mr-[20px] pt-[96px] lg:pt-0">
        <div className="w-full h-full overflow-y-auto">{children}</div>
      </div>

      <MobileBottomNav dict={dict} />
    </div>
  );
}
