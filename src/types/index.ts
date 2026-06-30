import type { SVGProps } from "react";

export interface LogoProps extends Readonly<SVGProps<SVGSVGElement>> {}

export interface LoginFormProps extends Readonly<Record<string, never>> {}

export interface AuthLayoutProps extends Readonly<{
  children: React.ReactNode;
}> {}

export interface AppSidebarProps extends Readonly<Record<string, unknown>> {}

export interface MainLayoutProps extends Readonly<{
  children: React.ReactNode;
}> {}

export interface SiteHeaderProps extends Readonly<Record<string, never>> {}

export interface HeaderProps extends Readonly<Record<string, never>> {}

export interface CardsProps extends Readonly<Record<string, never>> {}

export interface ActivityTableProps extends Readonly<Record<string, never>> {}

export interface ResourcesProps extends Readonly<Record<string, never>> {}
