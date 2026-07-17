"use client";

import {
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Archive,
  FolderOpen,
  Home,
  ProhorIcon,
  Send,
} from "@/components/icons";
import { LanguageToggler } from "@/components/language-toggler";
import { ThemeToggler } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import type { SidebarProps } from "@/types";

export default function Sidebar({ onClose, dict, lang }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const d = dict.sidebar;

  const navItems = [
    { name: d.home, path: `/`, exact: true, icon: Home },
    {
      name: d.resources,
      path: `/resources`,
      exact: false,
      icon: FolderOpen,
      count: 21,
    },
    { name: d.stashApp, path: `/stash`, exact: false, icon: Archive },
    {
      name: d.submit,
      path: `/submit`,
      exact: false,
      icon: Send,
    },
  ];

  const socialItems = [
    {
      name: "Youtube",
      url: "https://youtube.com/@vawzine",
      icon: YoutubeLogo,
      stat: "66k",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/vawzine",
      icon: InstagramLogo,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/vawzine",
      icon: LinkedinLogo,
    },
  ];

  return (
    <aside
      className={`w-full h-full lg:h-[calc(100vh-40px)] lg:m-[20px] shrink-0 z-10 flex flex-col pt-0 lg:pt-[16px] justify-between overflow-x-hidden overflow-y-auto no-scrollbar transition-all duration-[300ms] ease-[cubic-bezier(0.83,0,0.17,1)] ${isCollapsed ? "lg:w-[40px]" : "lg:w-[192px]"}`}
    >
      <div className="flex flex-col gap-[24px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[48px] lg:gap-0">
          <div className="flex items-center justify-between w-full">
            <Link
              href={`/`}
              onClick={onClose}
              className="flex items-center px-[8px] py-[4px] rounded-[8px] hover:bg-accent transition-colors overflow-hidden shrink-0"
            >
              <ProhorIcon className="shrink-0 mr-[12px] size-6 text-foreground" />
              <h3
                className={`font-[800] text-[18px] lg:text-[16px] whitespace-nowrap mt-[3px] transition-opacity duration-200 ${isCollapsed ? "opacity-0" : "opacity-100"}`}
              >
                Vawzine
              </h3>
            </Link>

            {/* Mobile Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="flex lg:hidden w-fit p-[4px] rounded-[8px] hover:bg-accent transition-colors h-auto"
            >
              <svg
                className="size-7"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Close Sidebar</title>
                <rect
                  x="4"
                  y="5"
                  width="16"
                  height="14"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="1.29"
                ></rect>
                <path
                  d="M15 19L15 5"
                  stroke="currentColor"
                  strokeWidth="1.29"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Button>
          </div>
        </div>

        {/* Collapse (Desktop Only) */}
        <Button
          variant="ghost"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex items-center justify-start px-[8px] py-[4px] rounded-[8px] hover:bg-accent transition-colors text-muted-foreground overflow-hidden -mt-[8px] h-auto w-full shrink-0"
        >
          <Image
            src="/icons/chevrons-left.svg"
            alt="arrows"
            width={24}
            height={24}
            className={`shrink-0 mr-[12px] transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`}
          />
          <span
            className={`text-[14px] whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? "opacity-0" : "opacity-100"}`}
          >
            {d.collapse}
          </span>
        </Button>

        {/* Navigation */}
        <nav className="flex flex-col gap-[4px] lg:-mt-[16px]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.exact
              ? pathname === item.path
              : pathname.startsWith(item.path);
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={onClose}
                className={`relative flex items-center px-[8px] py-[4px] rounded-[8px] transition-colors overflow-hidden shrink-0 ${
                  isActive ? "bg-accent" : "hover:bg-accent"
                }`}
                title={isCollapsed ? item.name : undefined}
              >
                <div className="flex items-center gap-[8px]">
                  <Icon size={24} className="shrink-0" color="currentColor" />
                  <span
                    className={`text-[14px] text-foreground whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? "opacity-0" : "opacity-100"}`}
                  >
                    {item.name}
                  </span>
                </div>
                {item.count && (
                  <div
                    className={`absolute right-[8px] bg-[#D9F7D7] rounded-[8px] px-[8px] py-[2px] flex items-center transition-opacity duration-200 ${isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                  >
                    <span className="text-[#149610] text-[12px] font-[600]">
                      {item.count}
                    </span>
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Announcement (Desktop Only) */}
        <Link
          href={`/submit`}
          onClick={onClose}
          className={`hidden lg:flex flex-col gap-[8px] bg-background border-[0.5px] border-border rounded-[16px] hover:bg-muted transition-all duration-300 overflow-hidden shrink-0 ${
            isCollapsed
              ? "max-h-0 opacity-0 p-0 border-0 mb-0 pointer-events-none"
              : "max-h-[200px] opacity-100 p-[8px] pb-[12px] mb-[4px]"
          }`}
        >
          <Image
            src="/images/Frame 1814106577.webp"
            alt="announcement"
            width={732}
            height={420}
            className="w-full h-auto rounded-[12px]"
            style={{ height: "auto" }}
            priority
          />
          <div className="flex flex-col gap-[2px] px-[4px]">
            <h4 className="text-[14px] text-foreground whitespace-nowrap">
              {d.announcementTitle}
            </h4>
            <h6 className="text-[10px] text-muted-foreground whitespace-nowrap">
              {d.announcementSubtitle}
            </h6>
          </div>
        </Link>

        {/* Socials */}
        <div className="flex flex-col gap-[4px]">
          {socialItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center px-[8px] py-[4px] rounded-[8px] hover:bg-accent transition-colors overflow-hidden shrink-0"
                title={isCollapsed ? item.name : undefined}
              >
                <div className="flex items-center gap-[8px]">
                  <Icon size={24} className="shrink-0" color="currentColor" />
                  <span
                    className={`text-[14px] text-foreground whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? "opacity-0" : "opacity-100"}`}
                  >
                    {item.name}
                  </span>
                </div>
                {item.stat && (
                  <span
                    className={`absolute right-[8px] text-muted-foreground text-[12px] font-[400] whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                  >
                    {item.stat}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer Controls */}
      <div className="flex flex-col gap-[12px] mt-[16px] px-[8px]">
        <div
          className={`flex items-center gap-[12px] px-[8px] transition-opacity duration-200 ${isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <ThemeToggler variant="circle" />
          <LanguageToggler lang={lang} className="text-[14px]" />
        </div>
        <a
          href="mailto:contact@vawzine.com"
          className="py-[4px] rounded-[8px] hover:bg-accent transition-colors overflow-hidden whitespace-nowrap"
        >
          <span
            className={`text-[14px] text-foreground transition-opacity duration-200 ${isCollapsed ? "opacity-0" : "opacity-100"}`}
          >
            contact@vawzine.com
          </span>
        </a>
      </div>
    </aside>
  );
}
