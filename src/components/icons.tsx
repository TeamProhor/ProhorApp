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
      <path d="M9.16 8.14H15.89" strokeWidth="3.53" />
      <path d="M9.16 12.57H15.89" strokeWidth="3.53" />
      <path d="M9.16 17H15.89" strokeWidth="3.53" />
      <path
        d="M12.35 2.65C12.35 6.94 8.87 10.43 4.58 10.43"
        strokeWidth="3.53"
        opacity="0.15"
      />
      <path d="M11.78 2C11.78 6.3 8.3 9.78 4 9.78" strokeWidth="3.53" />
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
