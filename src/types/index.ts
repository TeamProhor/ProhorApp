import type { ComponentPropsWithoutRef, ReactNode, SVGProps } from "react";

export interface ProhorIconProps
  extends Omit<SVGProps<SVGSVGElement>, "color"> {
  readonly color?: string;
  readonly animate?: boolean;
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

export type LoginFormProps = Record<string, never>;
