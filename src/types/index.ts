import type { ComponentPropsWithoutRef, ReactNode } from "react";
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
  readonly dict: {
    login: {
      title: string;
      newHere: string;
      signUpFree: string;
      sendMagicLink: string;
      usePassword: string;
      or: string;
      sso: string;
      termsText1: string;
      termsLink: string;
      and: string;
      privacyLink: string;
      termsText2: string;
    };
  };
}
