import type { ComponentPropsWithoutRef, ReactNode, ComponentType } from "react";
import type en from "@/dictionaries/en.json";

export type Dictionary = typeof en;

export interface PageProps {
  readonly params: Promise<{ readonly lang: string }>;
}

export interface LayoutProps extends PageProps {
  readonly children: ReactNode;
}

export interface ShellProps {
  readonly children: ReactNode;
  readonly dict: Dictionary;
  readonly lang: string;
}

export interface SidebarProps {
  readonly onClose?: () => void;
  readonly dict: Dictionary;
  readonly lang: string;
}

export interface SubmitFormProps {
  readonly d: Dictionary["submit"];
}

export interface ThemeProviderProps {
  readonly children: ReactNode;
}

export type TransitionVariant =
  | "circle"
  | "square"
  | "triangle"
  | "diamond"
  | "hexagon"
  | "rectangle"
  | "star";

export interface ThemeTogglerProps extends ComponentPropsWithoutRef<"button"> {
  readonly duration?: number;
  readonly variant?: TransitionVariant;
  /** When true, the transition expands from the viewport center instead of the button center. */
  readonly fromCenter?: boolean;
  /**
   * Controlled theme value. When provided, the parent owns persistence
   * (e.g. `next-themes`) and this component will not write to localStorage.
   */
  readonly theme?: "light" | "dark";
  /** Called on toggle. Pair with `theme` for controlled usage. */
  readonly onThemeChange?: (theme: "light" | "dark") => void;
}

export interface LoginFormProps {
  readonly dict: Dictionary;
}

export interface AppBadgeChipProps {
  readonly iconSrc: string;
  readonly iconAlt: string;
  readonly text: string;
  readonly className?: string;
}

export interface DownloadMacButtonProps {
  readonly text: string;
  readonly className?: string;
}

export interface Resource {
  readonly id: string;
  readonly title: string;
  readonly url: string;
  readonly thumbnail: string;
  readonly images: readonly string[];
}

export interface ResourceRowCardProps {
  readonly resource: Resource;
  readonly previewText: string;
  readonly downloadText: string;
}

export interface NavItem {
  readonly name: string;
  readonly path: string;
  readonly exact: boolean;
  readonly icon: ComponentType<{
    readonly size?: number;
    readonly color?: string;
    readonly className?: string;
  }>;
  readonly count?: number;
}
