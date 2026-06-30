import type { SVGProps } from "react";

export interface LogoProps extends Readonly<SVGProps<SVGSVGElement>> {
  animated?: boolean;
}

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

export interface HeaderProps
  extends Readonly<{
    locale?: string;
  }> {}

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

export interface TOCItem {
  id: string;
  label: string;
  level: number;
}

export interface DocsTOCProps
  extends Readonly<{
    headings?: TOCItem[];
    locale?: string;
  }> {}

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
    locale: string;
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
      locale: string;
      slug: string[];
    }>;
  }> {}

export interface LanguageProviderProps
  extends Readonly<{
    children: React.ReactNode;
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

export interface GeneralTabProps extends Readonly<Record<string, never>> {}
export interface ApiKeysTabProps extends Readonly<Record<string, never>> {}
export interface BillingTabProps extends Readonly<Record<string, never>> {}
