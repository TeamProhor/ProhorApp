"use client";

import type { ReactElement, SVGProps } from "react";
import Archive from "reicon-react/icons/Archive";
import FolderOpen from "reicon-react/icons/FolderOpen";
import Home from "reicon-react/icons/Home";
import Language from "reicon-react/icons/Language";
import List from "reicon-react/icons/List";
import Lock from "reicon-react/icons/Lock";
import Moon from "reicon-react/icons/Moon";
import Play from "reicon-react/icons/Play";
import Send from "reicon-react/icons/Send";
import Sun from "reicon-react/icons/Sun";
import Trophy from "reicon-react/icons/Trophy";

export function ProhorIcon({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      className={className}
      {...props}
    >
      <title>prohorIcon</title>
      <path d="M9.15918 8.13525H15.8868" strokeWidth="3.52576" />
      <path d="M9.15918 12.5674H15.8868" strokeWidth="3.52576" />
      <path d="M9.15918 17H15.8868" strokeWidth="3.52576" />
      <path
        d="M12.3537 2.64941C12.3537 6.94462 8.87175 10.4266 4.57654 10.4266"
        strokeWidth="3.52576"
        opacity="0.15"
      />
      <path
        d="M11.7772 2C11.7772 6.29521 8.29521 9.77716 4 9.77716"
        strokeWidth="3.52576"
      />
    </svg>
  );
}

export {
  Archive,
  FolderOpen,
  Home,
  Language,
  List,
  Lock,
  Moon,
  Play,
  Send,
  Sun,
  Trophy,
};
