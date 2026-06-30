import type { SVGProps } from "react";

export interface LogoProps extends Readonly<SVGProps<SVGSVGElement>> {}

export interface LoginFormProps extends Readonly<Record<string, never>> {}

export interface AuthLayoutProps
  extends Readonly<{
    children: React.ReactNode;
  }> {}

export interface AppSidebarProps extends Readonly<Record<string, unknown>> {}

export interface MainLayoutProps
  extends Readonly<{
    children: React.ReactNode;
  }> {}

export interface SiteHeaderProps extends Readonly<Record<string, never>> {}

export interface HeaderProps extends Readonly<Record<string, never>> {}

export interface CardsProps extends Readonly<Record<string, never>> {}

export interface ActivityTableProps extends Readonly<Record<string, never>> {}

export interface ResourcesProps extends Readonly<Record<string, never>> {}

export interface DocsHeaderProps extends Readonly<Record<string, never>> {}

export interface DocsSidebarProps
  extends Readonly<{
    forceShow?: boolean;
    currentSlug?: string[];
    docs?: Doc[];
  }> {}

export interface DocsTOCProps extends Readonly<Record<string, never>> {}

export interface DocsTabsProps
  extends Readonly<{
    sections?: string[];
    currentSection?: string;
    docs?: Doc[];
    currentSlug?: string[];
  }> {}

export interface DocsContentProps
  extends Readonly<{
    doc: Doc;
  }> {}

export interface CopyButtonProps
  extends Readonly<{
    text: string;
  }> {}

export interface DocsLayoutProps
  extends Readonly<{
    children: React.ReactNode;
  }> {}

export interface DocsPageProps
  extends Readonly<{
    params: Promise<{
      slug: string[];
    }>;
  }> {}

export interface DocMetadata {
  title: string;
  description?: string;
  section?: string;
  order?: number;
}

export interface Doc {
  slug: string[];
  metadata: DocMetadata;
  content: string;
}
